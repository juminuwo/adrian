#!/bin/bash
echo Hello, this is a script to convert markdown files to html with a pretty css I copied from someguys GitHub.
echo Please input location of .md file.
read loc
echo Input name for the html document.
read name

pandoc $loc --css pandoc.css -o $name.html
