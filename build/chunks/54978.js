/** Chunk was on 50448 **/
/** chunk id: 54978, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk764908 = require("./764908.js"),
  Chunk270498 = require("./270498.js"),
  Chunk829575 = require("./829575.js"),
  Chunk185698 = require("./185698.js"),
  c = require("./85328.js").f,
  Chunk777985 = require("./777985.js"),
  Chunk206804 = require("./206804.js"),
  Chunk788811 = require("./788811.js"),
  Chunk290619 = require("./290619.js"),
  Chunk642280 = require("./642280.js"),
  y = false,
  h = Chunk290619("meta"),
  x = 0,
  d = function(t) {
    c(t, h, {
      value: {
        objectID: "O" + x++,
        weakData: {}
      }
    })
  },
  g = module.exports = {
    enable: function() {
      g.enable = function() {}, y = true;
      var t = f.f,
        r = o([].splice),
        n = {};
      n[h] = 1, t(n).length && (f.f = function(n) {
        for (var e = t(n), o = 0, i = e.length; o < i; o++)
          if (e[o] === h) {
            r(e, o, 1);
            break
          } return e
      }, e({
        target: "Object",
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: a.f
      }))
    },
    fastKey: function(t, r) {
      if (!u(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!s(t, h)) {
        if (!p(t)) return "F";
        if (!r) return "E";
        d(t)
      }
      return t[h].objectID
    },
    getWeakData: function(t, r) {
      if (!s(t, h)) {
        if (!p(t)) returntrue;
        if (!r) returnfalse;
        d(t)
      }
      return t[h].weakData
    },
    onFreeze: function(t) {
      return v && y && p(t) && !s(t, h) && d(t), t
    }
  };
Chunk270498[h] = true