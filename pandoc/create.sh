#!/bin/bash
echo Hello, this is a script to convert markdown files to html with a pretty css I copied from someguys GitHub.
echo Please input location/name of the markdown file. (Exclude file extension)
read loc
echo Input location/name for the html document. (Exclude file extension)
read name

pandoc $loc.md --css pandoc.css -o $name.html
