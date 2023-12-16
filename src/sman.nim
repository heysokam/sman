# Timezones: LA,ES,24
# Present yesterday's schedule
# Present current day schedule
# Event:
  # Time
  # Duration
#_______________________________________
import ./sman/cfg
import ./sman/date

#_______________________________________
proc run=
  echo date.today
  echo date.yesterday
  echo date.tomorrow
#___________________
when isMainModule: run()
