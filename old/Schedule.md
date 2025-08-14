\[ Print\] \| \[ PDF\]

![](tabs_settings_schedule.png "tabs_settings_schedule.png") The
Schedule menu is where you configure timeslots and assign rounds from
each event to a spot on the schedule, as well as configure settings for
each round, such as which tiebreaker set to use or what powermatching
method to use.

Many of the most common issues people have when running a tournament on
Tabroom are the result of improperly configuring the Schedule - it's
worth double checking several times that you have set all the options
for each round correctly before proceeding to pairing the first round.
In particular, make sure you have assigned a tiebreak set to each round.

Tabroom divides up your schedule into "Timeslots" rather than Rounds.
Each timeslot can then have one or more rounds (from one or more events)
assigned to it. Different timeslots can also overlap, for example if you
had different events running at different sites that started at
different overlapping times.

You can also have multiple timeslots with identical start/end times but
different names for different events if it helps you keep things
straight. So you could have one timeslot from 8-10AM with two events
scheduled, or one 8-10 timeslot for event 1, and another identical
timeslot for event 2.

Usually, it helps to have a distinct timeslot for each round of each
event, even if there's overlap. That way, you can make changes to a
single event's schedule on the fly, without affecting any other event.

## Creating Timeslots

The first step in creating timeslots is to choose a day from the
sidebar:

<figure>
<img src="setup_schedule_sked-create.png"
title="setup_schedule_sked-create.png" width="300" />
<figcaption>setup_schedule_sked-create.png</figcaption>
</figure>

You can then create a timeslot by giving it a name, choosing a start and
end time, and clicking Add:

<figure>
<img src="setup_schedule_sked-addnew.png"
title="setup_schedule_sked-addnew.png" width="500" />
<figcaption>setup_schedule_sked-addnew.png</figcaption>
</figure>

Once you have configured timeslots, you will see them in a list, where
you can make changes or delete them if you made a mistake:

<figure>
<img src="setup_schedule_sked-existing.png"
title="setup_schedule_sked-existing.png" width="500" />
<figcaption>setup_schedule_sked-existing.png</figcaption>
</figure>

Usually, it helps to create all of your timeslots before you proceed to
scheduling rounds.

## Advice On Timeslots

**Important Tip** - It usually helps to try and make sure the end time
of one timeslot is not set to the identical time as the start time for
the following time block. Consider the following scenario:

You have a "NO Round 1" part timer block scheduled from 8-10AM

You then have two timeslots on the schedule: Round 1 - 8-10AM Round 2 -
10AM-12PM

If a judge is marked as "NO Round 1" from 8-10, they will also not be
scheduled for Round 2, because they are listed as "unavailable" at
exactly 10AM, which is the start time of Round 2.

Instead, you should configure your timeslots like this: Round 1 -
8-945AM Round 2 - 10AM-1145AM

And, configure your "NO Round 1" part timer block from 8-945AM to match.

That way, a judge who is marked as "NO Round 1" will be available at
10AM and could be scheduled for Round 2.

The same proviso applies to all other time scheduling in Tabroom, such
as room availability - making sure your timeslots don't overlap will
help you avoid all kinds of headaches.

## Scheduling Rounds

Once you have created your timeslots, you need to schedule rounds.
First, select an event from the sidebar - they will appear in red if no
rounds have been scheduled:

<figure>
<img src="setup_schedule_sked-schedule.png"
title="setup_schedule_sked-schedule.png" width="300" />
<figcaption>setup_schedule_sked-schedule.png</figcaption>
</figure>

To schedule a round, check the box next to the appropriate time slot.
You will also need to set additional options for each round, depending
on the event type:

<figure>
<img src="setup_schedule_event-speech.png"
title="setup_schedule_event-speech.png" width="500" />
<figcaption>setup_schedule_event-speech.png</figcaption>
</figure>

<figure>
<img src="setup_schedule_event-debate.png"
title="setup_schedule_event-debate.png" width="500" />
<figcaption>setup_schedule_event-debate.png</figcaption>
</figure>

You have the option of assigning a Label to each debate. This is most
useful for elimination rounds - that way you will see things labeled
"Finals" instead of "Round 13." For prelim rounds with a number, such as
Round 1 or Round 2, a label may not be necessary.

Depending on the event type, you may also have the option of selecting a
judge sub-pool, or whether to flight the round. If you have multiple
Sites configured, you will also have the option of choosing one.

Remember to set up timeslots and schedule rounds for each different day
of the tournament.

## Type & Tiebreak Set

Ensure you select the appropriate type and a tiebreak set for each
round. Failure to do so will cause lots of problems when you try to pair
debates or distribute ballots.

The options for "Type" are as follows:
<img src="setup_schedule_event-type.png"
title="setup_schedule_event-type.png" width="200"
alt="setup_schedule_event-type.png" />

**Prelim/Preset** - Round will be pre-paired before the start of the
tournament, either randomly or using a set of tournament-entered seeds.
For more information on entering prelim seeds, see the section on
[Pairing Rounds](Pairing_Rounds "wikilink").

**Hi/Lo** - Round will be power-matched by pairing the highest seed in a
bracket (based on your chosen tiebreak set) against the lowest seed in
the bracket. This is the most commonly used method of powermatching in
prelim rounds.

**Hi/Hi** - Round will be power-matched by pairing the highest seed in a
bracket (based on your chosen tiebreak set) against the second seed in
the bracket. The third seed will be paired against the fourth seed, and
so on. Hi/Hi rounds are usually reserved for only 1 odd-numbered prelim
(such as round 5 of 8), and are used to reduce the number of teams with
few or no losses. At many tournaments, this is unnecessary. If in doubt
about the desirability of a Hi/Hi round for your circumstances, go with
a Hi/Lo instead.

**Elim** - Round is an elimination round. Make sure you also choose the
correct tiebreaker set for the elims.

**Final** - Should be used for the final round in each event.

The options for "Tiebreaks" will be any tiebreak rule sets you have
configured. Make sure to set the tiebreak set to your "elim" tiebreakers
for each of your elim rounds. For more information on configuring these,
see the section on [Rules & Results](Rules_&_Results "wikilink").

<figure>
<img src="setup_schedule_event-tiebreaks.png"
title="setup_schedule_event-tiebreaks.png" width="200" />
<figcaption>setup_schedule_event-tiebreaks.png</figcaption>
</figure>

## Example Multi-Event Schedule

How you configure your timeslots and schedule rounds is up to you.
Here's just one example of how some of the timeslots might look for part
of a multi-event tournament:

<figure>
<img src="setup_schedule_sked-example.png"
title="setup_schedule_sked-example.png" width="600" />
<figcaption>setup_schedule_sked-example.png</figcaption>
</figure>

Here's how the scheduled rounds might look for one of the events, using
many of the different options:

<figure>
<img src="setup_schedule_event-schedule.png"
title="setup_schedule_event-schedule.png" width="600" />
<figcaption>setup_schedule_event-schedule.png</figcaption>
</figure>

## Printing a Master Schedule

Once all your timeslots are created and your rounds are scheduled you
can print a PDF of the whole schedule by clicking the "Print Master
Schedule" link on the bottom of the sidebar:

<figure>
<img src="setup_schedule_sked-master.png"
title="setup_schedule_sked-master.png" width="300" />
<figcaption>setup_schedule_sked-master.png</figcaption>
</figure>

[4f](Category:Tabroom_Manual "wikilink")