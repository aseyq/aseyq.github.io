from otree.api import *


doc = """
Your app description
"""


class C(BaseConstants):
    NAME_IN_URL = 'pgginclass'
    PLAYERS_PER_GROUP = 3
    NUM_ROUNDS = 2

    MULTIPLIER = 2
    ENDOWMENT = cu(1000)


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    total_contribution = models.CurrencyField()
    individual_share = models.CurrencyField()


class Player(BasePlayer):
    contribution = models.CurrencyField(label="How many points would you like to contribute?")


# PAGES
class Contribution(Page):
    form_fields = ['contribution']
    form_model = Player


class ResultsWaitPage(WaitPage):
    
    def after_all_players_arrive(group):
        set_payoffs(group)


class Results(Page):
    pass


page_sequence = [Contribution, ResultsWaitPage, Results]

### Functions
def set_payoffs(group):
    print("my function set payoffs worked!")

    players = group.get_players()

    contributions = []

    for p in players:
        contributions.append(p.contribution)

    group.total_contribution = sum(contributions)

    group.individual_share = group.total_contribution * C.MULTIPLIER / C.PLAYERS_PER_GROUP

    for p in players:
        p.payoff = C.ENDOWMENT - p.contribution + group.individual_share