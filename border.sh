#!/bin/bash
# This function removes the border from a html file that got generated with Grip 4.3.2
 
remove_border_from_html () {
  # cp "$1" "$1".bak
  sed -i 's/border:\([0-9]*\)px solid #ddd/border:\1px solid #FF0000/g' "$1"
  sed -i 's/#FF0000}\.markdown-body/#ddd}\.markdown-body/g' "$1"
  sed -i 's/FF0000/FFF/g' "$1"
  sed -i -e '50,53d' "$1"
}
 
# Example:
grip README.md --export readme.html
remove_border_from_html readme.html
