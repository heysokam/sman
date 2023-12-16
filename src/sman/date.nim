## @license GPLv3 @author heysokam
## @fileoverview List of useful dates (ergonomics)
#__________________________________________________|
# @dependencies std
import std/times
# @dependencies External
import pkg/chrono

let today     *:string= chrono.formatIso chrono.parseIsoTs( $times.now() )
let yesterday *:string= chrono.formatIso chrono.parseIsoTs( $(times.now()-times.days(1)) )
let tomorrow  *:string= chrono.formatIso chrono.parseIsoTs( $(times.now()+times.days(1)) )
