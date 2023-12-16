import std/times
template day  *() :Duration= times.initDuration(hours=24)
template hour *() :Duration= times.initDuration(hours=1)
