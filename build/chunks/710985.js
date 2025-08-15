/** Chunk was on web.js **/
/** chunk id: 710985, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk497464 = require("./497464.js"),
  Chunk382698 = require("./382698.js"),
  Chunk868984 = require("./868984.js"),
  s = Chunk46015("".replace),
  l = RegExp("^[" + Chunk868984 + "]+"),
  c = RegExp("(^|[^" + Chunk868984 + "])[" + Chunk868984 + "]+$"),
  u = function(e) {
    return function(t) {
      var n = a(i(t));
      return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n
    }
  };
module.exports = {
  start: u(1),
  end: u(2),
  trim: u(3)
}