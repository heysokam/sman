# Package
version       = "0.0.0"
author        = "Ivan Mar (sOkam!)"
description   = "sman | Adaptable Schedule Manager"
license       = "GPL-3.0-or-later"

installExt    = @["nim"]
srcDir        = "src"
binDir        = "bin"
bin           = @["sman"]


# Dependencies
requires "nim >= 2.0.0"
requires "illwill"
requires "chrono"
