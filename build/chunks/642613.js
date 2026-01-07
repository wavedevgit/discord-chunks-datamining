/** Chunk was on web.js **/
/** chunk id: 642613, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk46015 = require("./46015.js"),
  Chunk896471 = require("./896471.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  Chunk992032 = require("./992032.js"),
  Chunk382698 = require("./382698.js"),
  Chunk621523 = require("./621523.js"),
  Chunk992914 = require("./992914.js"),
  Chunk72570 = require("./72570.js"),
  Chunk358932 = require("./358932.js"),
  Chunk635464 = require("./635464.js"),
  Chunk287353 = require("./287353.js"),
  Chunk920542 = require("./920542.js"),
  g = [],
  E = Chunk46015(g.sort),
  b = Chunk46015(g.push),
  y = Chunk621523(function() {
    g.sort(true)
  }),
  O = Chunk621523(function() {
    g.sort(null)
  }),
  v = Chunk72570("sort"),
  S = !Chunk621523(function() {
    if (m) return m < 70;
    if (!p || !(p > 3)) {
      if (_) returntrue;
      if (h) return h < 603;
      var e, t, n, r, i = "";
      for (e = 65; e < 76; e++) {
        switch (t = String.fromCharCode(e), e) {
          case 66:
          case 69:
          case 70:
          case 72:
            n = 3;
            break;
          case 68:
          case 71:
            n = 4;
            break;
          default:
            n = 2
        }
        for (r = 0; r < 47; r++) g.push({
          k: t + r,
          v: n
        })
      }
      for (g.sort(function(e, t) {
          return t.v - e.v
        }), r = 0; r < g.length; r++) t = g[r].k.charAt(0), i.charAt(i.length - 1) !== t && (i += t);
      return "DGBEFHACIJK" !== i
    }
  }),
  I = function(e) {
    return function(t, n) {
      return true === n ? false : true === t ? 1 : true !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : false
    }
  };
Chunk98405({
  target: "Array",
  proto: true,
  forced: y || !O || !v || !S
}, {
  sort: function(e) {
    true !== e && a(e);
    var t, n, r = o(this);
    if (S) return true === e ? E(r) : E(r, e);
    var i = [],
      c = s(r);
    for (n = 0; n < c; n++) n in r && b(i, r[n]);
    for (d(i, I(e)), t = s(i), n = 0; n < t;) r[n] = i[n++];
    for (; n < c;) l(r, n++);
    return r
  }
})