import std/times

type TimeZoneKind * = enum LA, NA, N24
type TimeZone = object
  kind  *:TimeZoneKind
  shift *:times.Duration
