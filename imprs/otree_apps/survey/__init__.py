from otree.api import *


doc = """
Your app description

My app is the best app

Ali
"""


class C(BaseConstants):
    NAME_IN_URL = 'survey'
    PLAYERS_PER_GROUP = None
    NUM_ROUNDS = 1


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    name = models.StringField(label="What is your name?")
    age = models.IntegerField(label="How old are you?", min=18, max=101)
    continent = models.StringField(default="Asia", choices = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Ocenia'])
    enjoyment = models.IntegerField()
    comments = models.LongStringField(label="Please write us your review (optional)", blank=True)


# PAGES
class Survey(Page):
    form_fields = ['name', 'age','continent']
    form_model = Player

class Survey2(Page):
    form_fields = ['enjoyment', 'comments']
    form_model = Player

class Results(Page):
    pass


page_sequence = [Survey, Survey2, Results]
