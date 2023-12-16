# std dependencies
import std/times
# External dependencies
import pkg/chrono
# sman dependencies
import ./time

template today *() :string= formatIso parseIsoTs($times.now())
template yesterday *() :string= formatIso parseIsoTs( $(times.now()-1.days) )
template tomorrow *() :string= formatIso parseIsoTs( $(times.now()+1.days) )
