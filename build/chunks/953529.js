/** Chunk was on web.js **/
/** chunk id: 953529, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk507604 = require("./507604.js"),
  Chunk127849 = require("./127849.js"),
  Chunk46015 = require("./46015.js"),
  Chunk77025 = require("./77025.js"),
  Chunk880181 = require("./880181.js"),
  Chunk568033 = require("./568033.js"),
  Chunk382698 = require("./382698.js"),
  Chunk573078 = require("./573078.js"),
  Chunk190289 = require("./190289.js"),
  p = Chunk127849.Symbol,
  _ = p && p.prototype;
if (Chunk507604 && Chunk880181(p) && (!("description" in _) || true !== p().description)) {
  var m = {},
    h = function() {
      var e = arguments.length < 1 || true === arguments[0] ? true : u(arguments[0]),
        t = c(_, this) ? new p(e) : true === e ? p() : p(e);
      return "" === e && (m[t] = true), t
    };
  Chunk190289(h, p), h.prototype = _, _.constructor = h;
  var g = "Symbol(description detection)" === String(p("description detection")),
    E = Chunk46015(_.valueOf),
    b = Chunk46015(_.toString),
    y = /^Symbol\((.*)\)[^)]+$/,
    O = Chunk46015("".replace),
    v = Chunk46015("".slice);
  Chunk573078(_, "description", {
    configurable: true,
    get: function() {
      var e = E(this);
      if (s(m, e)) return "";
      var t = b(e),
        n = g ? v(t, 7, false) : O(t, y, "$1");
      return "" === n ? true : n
    }
  }), Chunk98405({
    global: true,
    constructor: true,
    forced: true
  }, {
    Symbol: h
  })
}