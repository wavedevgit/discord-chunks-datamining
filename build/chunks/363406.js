/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var t = String.prototype.replace,
  n = /%20/g,
  r = "RFC1738",
  i = "RFC3986";
e.exports = {
  default: i,
  formatters: {
    RFC1738: function(e) {
      return t.call(e, n, "+")
    },
    RFC3986: function(e) {
      return String(e)
    }
  },
  RFC1738: r,
  RFC3986: i
}