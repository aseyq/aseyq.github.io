from otree.api import *


doc = """
Public Goods Game written by Ali
"""

## CONSTANTS
class C(BaseConstants):
    NAME_IN_URL = 'pgg'
    PLAYERS_PER_GROUP = 3
    NUM_ROUNDS = 1

    ENDOWMENT = cu(1000)
    MULTIPLIER = 2

## MODELS
class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    total_contribution = models.CurrencyField()
    individual_share = models.CurrencyField()


class Player(BasePlayer):
    contribution = models.CurrencyField(
        min=0, max=C.ENDOWMENT,
        label="How much would you like to contribute?")

## FUNCTIONS
def set_payoffs(group):
    players = group.get_players()
    contributions = [p.contribution for p in players]

    group.total_contribution = sum(contributions)

    group.individual_share = (
        group.total_contribution * C.MULTIPLIER / C.PLAYERS_PER_GROUP
    )

    for p in players:
        p.payoff = C.ENDOWMENT - p.contribution + group.individual_share



# PAGES
class Contribute(Page):
    form_model = 'player'
    form_fields = ['contribution']


class ResultsWaitPage(WaitPage):
    title_text = "Please wait while other participants are making their decisions."
    body_text = "Other players are making their decisions at the moment. This might take a few minutes."
    after_all_players_arrive = set_payoffs



class Results(Page):
    pass


page_sequence = [Contribute, ResultsWaitPage, Results]
