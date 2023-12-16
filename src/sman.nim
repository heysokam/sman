## @license GPLv3 @author heysokam
## @fileoverview Entry Point of the Manager
#___________________________________________|
# @dependencies std
import std/times
# @dependencies sman
import ./sman/cfg
import ./sman/date
import ./sman/tz

# @sketch_______________________________
# Timezones: LA,ES,N24
# Present yesterday's schedule
# Present current day schedule
# Event:
  # Time
  # Duration
# Day: Start, Duration, seq[Event]
#_______________________________________

when isMainModule:
  echo date.today
  echo date.yesterday
  echo date.tomorrow
  echo times.now().inZone( tz.local() ).`$`
