#!/bin/sh
cat "$@" | sed -e s/\<br\>/\<BR\>/g -e s/\"//g -e s/\'//g -e s/^M/g| sort -ru
## Control Charactor ^M
