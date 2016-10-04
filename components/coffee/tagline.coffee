$ = require 'jquery'

do fill = ( item = 'The most creative mind in Art' ) ->
  $('.tagline').append "#{item}"
fill;