#!/bin/sh
cat "$@" | sed -e s/\<br\>/\<BR\>/g -e s/\"//g -e s/\'//g | sort -u
