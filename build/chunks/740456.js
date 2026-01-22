/** Chunk was on 94678 **/
/** chunk id: 740456, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk675879 = require("./675879.js"),
  Chunk760326 = require("./760326.js"),
  Chunk407057 = require("./407057.js"),
  Chunk512008 = require("./512008.js"),
  c = require("./164336.js").f,
  Chunk989447 = require("./989447.js"),
  Chunk753123 = require("./753123.js"),
  Chunk357377 = require("./357377.js"),
  Chunk226775 = require("./226775.js"),
  Chunk909797 = require("./909797.js"),
  y = false,
  h = Chunk226775("meta"),
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
      var t = a.f,
        r = o([].splice),
        e = {};
      e[h] = 1, t(e).length && (a.f = function(e) {
        for (var n = t(e), o = 0, s = n.length; o < s; o++)
          if (n[o] === h) {
            r(n, o, 1);
            break
          } return n
      }, n({
        target: "Object",
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: f.f
      }))
    },
    fastKey: function(t, r) {
      if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      if (!u(t, h)) {
        if (!p(t)) return "F";
        if (!r) return "E";
        d(t)
      }
      return t[h].objectID
    },
    getWeakData: function(t, r) {
      if (!u(t, h)) {
        if (!p(t)) returntrue;
        if (!r) returnfalse;
        d(t)
      }
      return t[h].weakData
    },
    onFreeze: function(t) {
      return v && y && p(t) && !u(t, h) && d(t), t
    }
  };
Chunk760326[h] = true