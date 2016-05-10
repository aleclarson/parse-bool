
# parse-bool 0.0.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

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
