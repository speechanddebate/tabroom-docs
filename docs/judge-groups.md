---
title: "Judge Groups"
---

<img src="/screenshots/tabs_settings_judges.png" title="tabs_settings_judges.png" /> A "Judge Group"
is a collection of judges which can be used in one or more events or
divisions. Every event must be in one and only one judge group. For
example, you might have a group of judges that can judge either the
novice or open divisions of policy, a second judge group exclusively for
congress judges, and a third group of judges which could judge any other
IE event.

It may seem odd to set up your judge groups before setting up your
events - just remember that a single group of judges may be used across
multiple events, but a single event will only ever pull from a single
judge group.

Note that a Judge GROUP is different than a Judge POOL - Judge Pools are
used to draw from a specific subset of judges in the larger judge
group - for example, only the judges that are still obligated for the
semi-finals.

## Creating A Judge Group

To create a Judge Group, click the "Add New Judge Group" link in the
sidebar. After filling out the information shown below on the "Register"
tab, click "Save Registration Settings." Previously created judge groups
will appear in the sidebar:

<img src="/screenshots/setup_judges_edit-add.png" title="setup_judges_edit-add.png"
width="300" alt="setup_judges_edit-add.png" />
<img src="/screenshots/setup_judges_edit-existing.png"
title="setup_judges_edit-existing.png" width="300"
alt="setup_judges_edit-existing.png" />

After creating or selecting a judge group from the sidebar, you'll see a
list of tabs with the settings for that judge group:

<img src="/screenshots/setup_judges_edit-tabs.png" title="setup_judges_edit-tabs.png"
width="400" />

Each of these tabs is explained in more detail below.

## Register

The Register tab contains the general settings for the judge group as
well as options related to how schools register their judges:

<img src="/screenshots/setup_judges_edit-registration.png"
title="setup_judges_edit-registration.png" width="600" />

**Name** - This is just the name of the judge group. Should usually be
something like "Policy" or "Individual Events."

**Suppress judge codes (names only)** - When checked, judges will appear
on schematics and registration information with their names, instead of
a judge code like "733." The majority of tournaments use this option, to
avoid needing to explain to judges how to match up their judge code with
their name.

**Start judge codes with** - Lets you set a prefix for the judge codes
in this group, like "POL" for policy judges, so that you would have
judges codes like "POL356" or "LD229" instead of just numbers.

**Publish the list of judges online** - Controls whether the list of
registered judges will be available on your tournament's public website.

**Ask for judge phone #s at registration** - When checked, registering
schools will be asked to provide phone numbers for their judges. This
can make it much easier for the tournament to get in touch with judges
when they go missing, forget to turn in a ballot, etc.

**Ask for judge qualifications and histories** - This option will ask
registering schools to provide a short description of each judge's
qualifications and judging history. Note that this is separate from and
in addition to the normal judge [paradigms](paradigms).

**Abbreviation, max 3 letters:** - This abbreviation will be used in
various places throughout Tabroom to make things easier to read and make
printouts align better, etc. It's recommended you set an abbreviation
for each judge group.

**Registrants can mark first year outs** - When checked, registering
schools will be given the option of marking a judge as a "first year
out," i.e. that it's their first year judging. You can then use other
options in the Judge Group and Event settings to make first-year judges
free strikes, prevent them from seeing certain events/divisions, etc.

**Registrants can mark neutral judges** - Registering schools will be
able to mark judges they enter as "neutral," which means that they are
allowed to judge their own school's entries. This can be useful when
schools bring judges to the tournament who aren't actually affiliated
with their program and do no coaching, so would not normally be
considered "constrained" from judging that school.

**Allow judge double-entry** - This lets schools enter judges in
multiple events. You should only enable this option if you're sure about
what you're doing and that your schedule contains no overlap - otherwise
it's very easy to find yourself with double-scheduled judges that can't
actually be in two places at once.

**Require judges to have linked accounts (Online ballots only).** - This
will force all judges to have their judge entries "linked" to a tabroom
account, which is necessary for Online Ballots to function correctly.

**Ask to specify an alternate group** - This will ask the registering
school to provide an "alternate" group for the judge, so that you can
move judges into their "second choice" judge group if necessary, for
example to even out judge numbers between events.

Further down the page, you can configure the method used to compute
judge obligations for entries. Note that you have two "methods" of
computing judge obligations. You can choose "Entries per judge owed,"
which requires that a school bring 1 judge per X number of entries, such
as 1 judge per 5 students in an Individual Event. Or, you can choose
"Rounds owed per entry," which is the number of rounds of judging a
school has to bring to "cover" each entry. You probably only want one or
the other.

<img src="/screenshots/setup_judges_edit-burdens.png"
title="setup_judges_edit-burdens.png" width="500" />

**Entries per judge owed** - Enter a value here if you want to require
one judge for a certain number of entries in the events in this judge
group. This is usually used in Individual Events, not Debate events.

**Rounds owed per entry** - Enter the number of rounds of judging
required to "cover" each entry. This is the method normally used for
Debate events.

**Penalty per missing round:** - This is the dollar amount a school will
be fined for each round "under" their judging commitment. Note that this
will not apply to tournament hired judges, and it will print a warning
to that effect.

**Fee for a judge to attend:** - How much each school will be charged
per judge they bring. This doesn't apply to tournament hired judges.

Once you have entered a value for one of the judge burden methods and
save your settings, the Alter Burdens section will change:

<img src="/screenshots/setup_judges_edit-alter.png"
title="setup_judges_edit-alter.png" width="400" />

**Forgive judge burden for drops** - If a school drops an entry after
the tournament starts, this will reduce their judge commitment by the
appropriate amount. Otherwise, their judges will still be obligated as
if the entry wasn't dropped.

**Maximum rounds for one judge** - This lets you prevent a judge from
seeing more than a proscribed number of rounds. Most useful at
tournaments where you have way more than enough judging and want to
ensure the judging is equitably distributed among a large pool.

**Free rounds: reduce total burden by** - This will reduce a schools
overall judging burden by a set amount, for example if you have a large
number of hired judges that will be "free" to the tournament.

You can also add a message at the bottom that will appear when schools
register their judges - for example, you can use this to explain your
tournaments policies about "first year out" judges, or what
qualifications/experience a judge is expected to have.

<img src="/screenshots/setup_judges_edit-message.png"
title="setup_judges_edit-message.png" width="400" />

## Hires

The Hires tab is used to enable tournament-provided judging. If you
don't plan to offer hired judging through the tournament, you can ignore
this tab.

<img src="/screenshots/setup_judges_hires.png" title="setup_judges_hires.png"
width="500" />

**Hiring Exchange (Schools hire tourn-approved judges directly)** - This
will enable a "Hiring Exchange" for your tournament. Judges will then be
able to "offer" hired rounds of judging, (see the section on
[judging](judging)), and schools registering will be able to
"claim" offered rounds via the website, without you needing to intervene
or manage the judges yourself.

**Offer tournament hired judging** - Unlike the Hiring Exchange, which
lets judges and schools match up judging themselves, this option enables
offering judging provided directly by the tournament.

**Number of hired rounds available. Put 0 to manage hires manually.** -
This is the total number of hired rounds you want to make available for
registrants to request. If you put a 0, you will have to approve each
hired judging request manually.

**Charge per round** - Dollar amount that a school will be charged per
round of judging that it hires.

## Tabbing

The Tabbing section controls most of the options for how judges are
placed in rounds for events within the judge group, as well as some
settings for ballot entry methods and MPJ weights.

Note that some of these options can be changed during the tournament. So
for example, if you wanted to alter your MPJ weights later in the
tournament to adjust how important "saving pref" is in the algorithm,
you can make the adjustment before pairing the next round.

### Pairing Settings

The "Pairing settings" section has options about how judges are placed
in rounds:

<img src="/screenshots/setup_judges_tabbing-pairing.png"
title="setup_judges_tabbing-pairing.png" width="400" />

**Prevent back to back rounds** - Stops a judge from receiving a ballot
in consecutive rounds. In tight judge pools or when using MPJ, you
probably want to leave this unchecked, since you don't want to
artificially burn commitment or lower the average pref in the round
unnecessarily.

**Judges can get the same event twice** - For judge groups with multiple
events (such as one judge group for all IE's), this option will let a
judge see multiple rounds in the same event.

**Allow panels w/same school judges** - For rounds with more than one
judge (e.g. elims or paneled IE rounds), this will allow more than one
judge from the same school on the panel.

**Randomize judge assignments\*** - By default, in multi-event judge
groups, Tabroom will prefer judges whose schools have more entries in
that category. Check this to disable this preference

**Diversity-enhanced judge placement** - This will allow judges to self
identify as "Diverse," and then will use the associated MPJ weight for
"diverse judging" to attempt to place more "diverse" judges.

**Tab confirms round starts (NDT method)** - This option means that the
tabroom will confirm each round has started, rather than a judge marking
the round started on an online ballot.

### MPJ Placement Weights

This section controls the "weights" used to compute mutually preferred
judging scores. For example, it allows you to control whether the judge
placement algorithm privileges "mutuality" more than "preference" or how
important it is to try and "save" committed judges for later rounds.

<img src="/screenshots/setup_judges_tabbing-mpj.png"
title="setup_judges_tabbing-mpj.png" width="400" />

These numbers are not "percentages," per se - they don't need to sum up
to 100. Instead, they are "weighting factors" which are relative to one
another.

The following explanation is somewhat technical - if you're not sure how
to assign or tweak the MPJ weights, you can just use the default values.

The way MPJ works is by testing out each judge in each round, and
computing a "score" for how well that judge fits. Tabroom will then try
and find the mix of judges that gives the overall "best" combined score
across all debates.

For each round/judge pair, the "score" is computed as the sum of: 1) The
difference in mutuality (e.g. in a tiered system a 2-2 = 0, a 1-2 = 1,
etc., for ordinals, a 46-38 = 8, a 23-28 = 5, etc), multiplied by the
"Penalize non-mutual matches" weight. 2) The total preference (e..g a
1-1 = 2, 2-2 = 4, or with ordinals, a 25-35 = 60), multiplied by the
"Penalize low-preferred matches" weight. 3) The likelihood a round of
commitment will be lost, raised to the power of the "Avoid burning
commitments early" weight. Note that this is an exponent, not a simple
multiplication, so this number will likely be much lower than the other
weights. 4) The average pref of the judge for all entries, minus the
standard deviation of their pref from the average pref of the judge
group, multiplied by the "Prefer hard-to-place judges" weight. 5) If in
use, adds the "Promote use of diverse judging" weight for "diverse"
judges. 6) If used, will increase the score for a Hired judge by the
"Prefer hired judges over obligated" weight.

Put in terms of the options on the page:

**Penalize non-mutual matches** - This weight gets multiplied by the
difference in mutuality between the two team's rating for the judge

**Penalize low-preferred matches** - This weight gets multiplied by the
total preference, i.e. the sum of the two team's rating for the judge

**Avoid burning commitments early** - The likelihood a round of
commitment will be lost by placing a judge is raised to this power. Note
that this is an exponent, not a simple multiplication, so this number
will likely be much lower than the other weights.

**Prefer hard-to-place judges** - This weight is multiplied by the
average pref of the judge, minus the standard deviation of their pref
from the average pref of the judge group.

**Promote use of diverse judging** - This weight control how important
the use of "diverse" judges is in the final score.

**Prefer hired judges over obligated** - This weight is added to hired
judges to make it more likely they will be placed than

**Stand-in rating for non-preffed judges:** - This is not a "weight"
used in the MPJ algorithim, but instead is the value used for judges who
were not given a pref by a team. For example, if a team only filled out
a partial pref sheet, you could choose whether you wanted unranked
judges to be a "1" or some other number.

The built-in defaults should work fine for most situations. If you're so
inclined, Palmer has this to say about his usual personal defaults for
tiered MPJ systems:

- Penalize non-mutual matches = 65
- Penalize low-preferred matches = 20
- Avoid burning commitments early = 5 (8 if in a very tight judging
  situation)
- Prefer hard-to-place judges = 10

For ordinal preference systems, the following weights work well:

- Penalize non-mutual matches = 25
- Penalize low-preferred matches = 10
- Avoid burning commitments early = 7 (8 if in a very tight judging
  situation)
- Prefer hard-to-place judges = 10

If you wonder at some point why it placed judge X instead of judge Y,
you can look at an individual round (by clicking on the room number on
the schematic), and then click "Judge Pref Report" on the sidebar. This
will show you the judge score for all available judges in the debate, so
you can see how you could change the weights to achieve a different
goal.

For example, if you were getting a lot of 3-3 pref matchups, and would
prefer more 1-2's (i.e. increase pref at the expense of mutuality), you
could turn down the "Penalize non-mutual matches" score to 50.

### Tabulation Settings

Tabulation Settings is where you configure options for how ballots are
entered for events in this judge group.

<img src="/screenshots/setup_judges_tabbing-tabulation.png"
title="setup_judges_tabbing-tabulation.png" width="500" />

**Ballot Entry Method** - Choose which method to use for
confirming/double-checking ballot entry. Your choices are:

- "Enter twice; 2nd must match" - each ballot must be entered twice
  before showing as complete (preferably by two different people, to
  prevent mistakes).
- "Visual scan with confirmation" - After entering a ballot, you will be
  shown a review of your entered data and asked to confirm it.
- "Live dangerously; no required double-check - This option will mark a
  ballot as completed after a single entry, though you can still
  double-enter them if you wish, and will be notified of any mismatch.

**Show school codes on ballot entry** - This controls whether the ballot
entry screen contains the school code or not.

**IE Master Ballot style** - For ballots in Individual Events, this
controls the "style" of ballot that's used for events in this judge
group. You can choose options with various combinations of the Name,
Title, School Code, Entry Code, or First Names.

### Messages

The bottom of the "Tabbing" tab contains places for 2 messages:

**Message for judge assignment sheet** - This will be included on all
judge assignment sheets, and is a good place for communicating
information or judge policies to the entire judge group.

**Message about diversity policy** - If you're making use of "diversity
enhanced judging," then you can include the text of your policy on
judging diversity here.

## Ratings

<img src="/screenshots/setup_judges_ratings-prefs.png" title="setup_judges_ratings-prefs.png" /> The
Ratings tab is used to configure mutually preferred judging. If you're
not using MPJ for the events in a judge group, you can ignore it. Note
that a few MPJ-related options (such as the MPJ placement weights) are
found on other tabs.

For a general overview of how mutually preferred judging works, and the
differences between "tiers" or "ordinal" approaches, you can click the
"Guide to Prefs on Tabroom.com" link on the Tabroom sidebar. This
section of the manual will presume you have at least a basic familiarity
with the concept of MPJ.

### Deadlines

If you want to configure a deadline for judge registration in a judge
group which is earlier than the general tournament registration deadline
(for example to allow for extra time for registrants to complete prefs),
you can set it here:

<img src="/screenshots/setup_judges_ratings-strikes.png"
title="setup_judges_ratings-strikes.png" width="500" />

You can also choose when prefs will open and close for schools to enter
their rankings. Usually, you want to set the prefs to open after the
judge registration deadline, so that you don't have people fill out
partial pref sheets and miss changes to the judge pool. You'll also want
to set the prefs to close with enough time that you can pair any preset
rounds well in advance of the first round.

### Registration Settings

This section contains general settings for how people fill our their
pref sheets:

<img src="/screenshots/setup_judges_ratings-registration.png"
title="setup_judges_ratings-registration.png" width="500" />

**Judge obligation must be met to pref/rate** - When set, a school must
have entered enough judges to meet their judging obligation before their
pref sheet will be available to fill out.

**Ask for judge paradigms during registration** - When entering judges,
the school will be asked to provide a paradigm if one doesn't already
exist for that judge.

**Judges may self-identify as diversity enhancing** - This will give
judges the option of checking a box that they self-identify as
"diverse." This information can then be used for "diversity enhanced
judge placement" as described above.

**Free Strikes don't meet judge obligations** - Sometimes, judges are
marked as a "free strike," for example when setting all first-year
judges to be a free strike, or when manually making a judge a free
strike because they were registered late, etc. This option will mean
that a judge marked as a free strike does not count towards a school's
total judge obligation.

**First year out judges are free strikes** - This is most useful when
used in concert with the "Registratns can mark first year outs" option
on the Tabbing tab. It will then make all judges marked as a first year
a free strike.

**Do not pref free strikes** - If a judge is a free strike, they won't
appear on the pref sheet.

### Conflicts, Strikes, and MPJ Method

The rest of the page contains settings for what method of MPJ to use,
and how strikes and conflicts should be handled.

<img src="/screenshots/setup_judges_ratings-other.png"
title="setup_judges_ratings-other.png" width="500" />

**Enter conflicts separately** - This will let people filling out a pref
sheet mark conflicts separately, instead of as a category on the pref
sheet.

**Include conflicts in ordinals' denominator** - This determines whether
conflicts "count" towards a judges ordinal percentile, which affects how
much a team is "penalized" for having a large number of conflicts
relative to the size of the judge group.

**Pref Method** - This is where you select which method to use for MPJ.
Your options are:

- MPJ Tiers (by whole judge) - You can configure any number of tiers,
  usually 4, 6, or 9, and each judge will count equally toward the tier
  quota
- MPJ Tiers (by round) - Same as previous, except tier quotas are
  counted by rounds of judging instead, which means a judge that's only
  in for 1 round counts for less towards the quota than a judge in for a
  full commitment.
- MPJ Ordinals - Each judge will be ranked in order from 1 (best) to
  however many judges there are in the judge group.
- Community Ratings - Judges will be given a "community" rating rather
  than a tier, such as "Experienced Judge" or "Parent Judge."
- Whole Number Caps (NDT Elims) - Registrants will need to mark a
  certain number of judges as "preffered" or "strike." Most useful in
  concert with judge strike cards, such as used for the elims of the
  National Debate Tournament.

**Extra 1s = less 2s, etc** - If enabled, judges placed in higher tiers
in excess of that tier's quota will reduce the number required in the
tier below by the same amount. For example. If you need ten 1's and ten
2's, then marking eleven 1's would mean only nine 2's were required.

**School-wide strikes/scratches** - Gives a pre-determined number of
strikes to each school, that applies to all their entries. Note that
this is in addition to any other "tier" you have configured as a strike.

**Per-entry strikes/scratches** - Gives each entry a pre-determined
number of strikes. Note that this is in addition to any other "tier" you
have configured as a strike, so it is usually best not to set up a
separate strike tier.

**Ask coaches to rate their judges** - When registering a judge, the
school will be asked to provide a rating for them. This would then be
used instead of a traditional strike card.

**Use tab room ratings** - Allows the tournament to rate all judges for
the purposes of MPJ, rather than having pref ratings entered by
individual registrants. Tab ratings can then be set in **Entries -
Judges - Judge Ratings.**

## Tiers

This tab will appear after you have selected an MPJ method on the
Ratings tab which requires you to configure tiers. The exact name of the
tab will differ depending on which method you chose.

For example, if you choose the MPJ Tiers (By whole round) method, you'll
see an "MPJ Tiers" tab, that allows you to add tiers by specifying a
name and a minimum and maximum percentage. After entering each tier, you
can continue using the "New" row to add additional tiers:

<img src="/screenshots/setup_judges_tiers-new.png" title="setup_judges_tiers-new.png"
width="500" />

Note that if you want to use the "cumulative prefs" method where more
judges in a higher tier reduce the number required in the next tier, you
must make sure your tiers are named with numbers, like "1," "2," etc.

For each tier, you must set a minimum and maximum percentage of judges
that must be in each tier. You can also set a tier as the default, as
well as specify that a tier should be considered a constraint (usually
the next to last tier), or a strike (usually the last tier). For
example, one possible setup for a 6 tier system would look like this:

<img src="/screenshots/setup_judges_tiers-six.png" title="setup_judges_tiers-six.png"
width="500" />

## Shifts

The Shifts tab is how you configure time blocks that coaches can mark
judges as unavailable for, or that judges can self-register for. For
example, some tournaments have a large number of judges who can only
come on one day of the tournament, so it helps to let coaches mark
someone as "Unavailable Friday."

Note that you can always manually add a "Time Strike" for a judge in
**Entries - Judges**, which will also prevent them from being scheduled
for a round during that period. The Shifts tab is used to allow
registering schools to do this themselves, and optionally to charge them
if they are under their judging commitment during a time block.

<img src="/screenshots/setup_judges_partials.png" title="setup_judges_partials.png"
width="500" />

To create a new shift, add a Name, Fee (if desired), then choose the day
of the tournament and a Start/End time for the block. You can choose
whether to create a block for each round, one for AM/PM, or one for ecah
day, for example.

Choose "Both" if you want this shift to apply to both self-registered
judges AND coach registered strikes. Choose "public" if you want it only
to apply to self-registered judges, and "Strike" to only apply to
coach-registered judges.

**Important Note** - The name of your coach-oriented shifts should be
something like "No Round 1" or "Unavailable Sunday." Otherwise, people
registering sometimes mistake these time blocks for times the judge IS
available, rather than times they are NOT, and you will have judges
marked as "unavailable" during all time blocks.

The fee you enter will only be levied if the schools total available
judging during that time block falls under their commitment. For
example, if a school owes 2 judges on Friday but only 1 is available,
they would be charged the fine for that blocks. But if they owed 2
judges and brought 3, only 2 of whom were available on Friday, no fine
would be charged.

## Pools

A judge "pool" is a subset of judges in the larger judge group that will
be available for a certain round. The use of judge pools is not
required, but it can make your life easier. For example. you can create
a judge pool for each elim round and then automatically populate it with
only the judges that are still obligated.

You can either create judge pools under **Settings - Judges -
Judge Group - Pools**, or under **Paneling - Judges - Pools**. Both
are actually the same page.

To create a pool, enter a name, and choose whether the pool is only for
Standby judges, whether to Publish the list of judges online (for
example, to provide a list of judges obligated for the next elim), and
whether registering schools can mark judges for certain pools:

<img src="/screenshots/setup_judges_pools.png" title="setup_judges_pools.png"
width="300" alt="setup_judges_pools.png" />
<img src="/screenshots/panel_judge_edit-pools.png" title="panel_judge_edit-pools.png"
width="300" alt="panel_judge_edit-pools.png" />

To delete a judge pool after creating it, just click the red X.

Once you have created the pools you plan to use, you have to add judges
to them by going to **Paneling - Judges - Pool Judges.** You can then
either add judges to the pool manually by clicking on their name
(they'll turn blue if they're in the pool), or use the "Auto-populate"
section of the sidebar to add in judges that are obligated in a
particular debate:

<img src="/screenshots/panel_judge_pool-judges.png"
title="panel_judge_pool-judges.png" width="400"
alt="panel_judge_pool-judges.png" />
<img src="/screenshots/panel_judge_pool-auto.png" title="panel_judge_pool-auto.png"
width="300" alt="panel_judge_pool-auto.png" />

You must also assign the pool you want to use to the relevant round(s).
You can do this on the main schedule under **Settings - Schedule**, or
under **Paneling - Judges - Event Settings**:

<img src="/screenshots/panel_judge_event.png" title="panel_judge_event.png"
width="500" />

For more information, see the section on
[schedule](schedule).

## Self-registration of judges

Some tournaments and areas rely heavily on volunteer judges ,and there's
now a way those judges can be told to sign themselves up for judging.
The first step is to enable judges to self-register, under the Hires
tab:

<img src="/screenshots/JudgeSelf_Signup.png" title="JudgeSelf_Signup.png"
width="500" />

Once you have enabled it and made a deadline for judges to self
register, you should also define Shifts that they can register for,
under the Shifts tab. Shifts that a judge can volunteer for are time
blocks that they are available; you can make it round by round, or
things like "saturday afternoon" or "Friday after 5:00 PM" or whatever.
Just be sure as you define shifts, that the type of shift is marked as
either "Both" or "Public" -- shifts of type "strike" are only available
to mark judges registered by coaches as unavailable at certain times.

<img src="/screenshots/shifts.png" title="shifts.png" width="500" />

At that point, judges can self-volunteer on your public Tabroom page
(what you get when you click your tournament on the front page; you can
define a shortcut for this under Setup - Tournament - General). The
tab "Judge Signup" will prompt the judge to sign up; they will need a
Tabroom account to do so, so you can verify folks, but the process will
step them through creating one if they do not have one already.

When judges self-register they will be by default marked as NOT ACTIVE
in your tournament, to allow you a chance to approve them or take
attendance before they are placed into debates. Under Paneling -
Judges - Activate tab, you will find an easy way to mass checkin
judges who are inactive.