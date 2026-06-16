from otree.api import *
import random

doc = """
Your app description
"""

# Constans
class C(BaseConstants):
    NAME_IN_URL = 'risky'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1

    RISKY_PAYOFF = 15
    SAFE_PAYOFF = 5

# Models
class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    wants_risky = models.BooleanField(label="Would you like to take the risky option?")
    is_lucky = models.BooleanField()


#------  PAGES
class Choice(Page):
    form_fields = ['wants_risky']
    form_model = Player

    def before_next_page(player, timeout_happened):
        set_payoffs(player)


class Results(Page):
    pass


page_sequence = [Choice, Results]

#--------------------------------------
#--------------------------------------
# Here my functions start

def set_payoffs(player): 

    if player.wants_risky:
        player.is_lucky = random.choice([True, False])

        if player.is_lucky:
            player.payoff = C.RISKY_PAYOFF
        else:
            player.payoff = 0

    if not player.wants_risky:
        player.payoff = C.SAFE_PAYOFF

