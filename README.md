
# parse-bool v0.0.1 [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

```CoffeeScript
parseBool = require "parse-bool"

parseBool "true"  # true
parseBool "yes"   # true
parseBool "y"     # true
parseBool "1"     # true

parseBool "false" # false
parseBool "no"    # false
parseBool "n"     # false
parseBool "0"     # false
```

Any other input returns `null`.
