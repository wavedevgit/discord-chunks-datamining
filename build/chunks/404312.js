/** Chunk was on web.js **/
/** chunk id: 404312, original params: e (module,exports,re quire) **/
"use strict";
var t = String.prototype.replace,
  n = /%20/g,
  r = "RFC3986";
module.exports = {
  default: r,
  formatters: {
    RFC1738: function(e) {
      return t.call(e, n, "+")
    },
    RFC3986: function(e) {
      return String(e)
    }
  },
  RFC1738: "RFC1738",
  RFC3986: r
}