# Input Data
```md
 cat : Label        : Format         : Notes
.....:..............:.................................
  I  : HMfmt        : HH.MM          : Hour.Minute format
  N  : DateFormat   : YY/MM/DD/HMfmt : Full Date format
  P  : Sleep Start  : DateFormat     : Time start for this sleep register entry
  U  : Sleep End    : DateFormat     : Time end   for this sleep register entry
  T  : Sleep Rating : range[0..7]    : Perceived Sleep quality/rating
.....:..............:................:................
  C  : Entr.Start   : HMfmt          : Start Time for the user's desired sleep entrainment
  F  : Entr.End     : HMfmt          : End   Time for the user's desired sleep entrainment
  G  :              :                :
.....:..............:................:................
```
# SleepTime Encodings
## Day-Based
```md
Label   : fmt           : Encode     : Notes
........:...............:............:............
Sleep   : 1h            : 60bit      : Sleep register for 1h. 1min == 1bit
Rating  : 0..7          : 3bit       : Sleep rating average for 1h. 0 == not-rated
AutoGen : on/off        : 1bit       : Whether the register was estimated or manually registered
Total   : ............. : 64bit      : Every hour of sleep registered takes up 64bits of memory
........:...............:............:............
Day     : 24h           : 64*24      : Full register for an entire day of sleep/wake information
ID      : DateFormat.NN : string[14] : UUID is the date and a number in NN format. Max 99 entries/day
```
# Computed properties
```md
Label     : Type  : Notes
..........:.......:......
Entrain   : bool  : Whether the register fits the desired entrainment of the user
Phase avg : i32   : Amount of minutes that the user is out of phase from a stable 24h rhythm
```
