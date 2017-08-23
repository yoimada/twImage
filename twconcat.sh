#!/bin/bash
cat "$@" | sed -e s/\<br\>/\<BR\>/g -e s/\"//g -e s/\'//g -e s/^M//g | sort -ru | grep -v -f <( grep -o -h -e "[0-9a-zA-Z\_\-]\+.\(jpg\|png\|gif\|jpeg\):orig" done/* | sort -u )
## Control Charactor ^M

## done/* => looked html
## args => twImage.js generated html file"s"
