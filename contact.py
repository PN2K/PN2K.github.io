#!/usr/bin/env python
import cgi

form = cgi.FieldStorage()
name = form["fullname"].value
