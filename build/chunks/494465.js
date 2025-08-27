/** Chunk was on web.js **/
/** chunk id: 494465, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk621523 = require("./621523.js"),
  Chunk880181 = require("./880181.js"),
  Chunk77025 = require("./77025.js"),
  Chunk507604 = require("./507604.js"),
  l = require("./938373.js").CONFIGURABLE,
  Chunk845691 = require("./845691.js"),
  Chunk199838 = require("./199838.js"),
  d = Chunk199838.enforce,
  f = Chunk199838.get,
  _ = String,
  p = Object.defineProperty,
  h = Chunk46015("".slice),
  m = Chunk46015("".replace),
  g = Chunk46015([].join),
  E = Chunk507604 && !Chunk621523(function() {
    return 8 !== p(function() {}, "length", {
      value: 8
    }).length
  }),
  b = String(String).split("String"),
  y = module.exports = function(e, t, n) {
    "Symbol(" === h(_(t), 0, 7) && (t = "[" + m(_(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!o(e, "name") || l && e.name !== t) && (s ? p(e, "name", {
      value: t,
      configurable: true
    }) : e.name = t), E && n && o(n, "arity") && e.length !== n.arity && p(e, "length", {
      value: n.arity
    });
    try {
      n && o(n, "constructor") && n.constructor ? s && p(e, "prototype", {
        writable: false
      }) : e.prototype && (e.prototype = true)
    } catch (e) {}
    var r = d(e);
    return o(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e
  };
Function.prototype.toString = y(function() {
  return Chunk880181(this) && f(this).source || Chunk845691(this)
}, "toString")