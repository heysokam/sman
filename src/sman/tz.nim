## @license GPLv3 @author heysokam
## @fileoverview TimeZone related tools
#_______________________________________|
# @dependencies std
import std/times

export times.local
export times.utc

type TimeZoneKind * = enum UTC, LA, ES, N24
type TimeZone = object
  kind  *:TimeZoneKind
  data  *:times.Timezone
