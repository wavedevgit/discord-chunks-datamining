/** Chunk was on 23357 **/
/** chunk id: 896737, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk764908 = require("./764908.js"),
  Chunk691593 = require("./691593.js"),
  Chunk475424 = require("./475424.js"),
  Chunk174344 = require("./174344.js"),
  Chunk691840 = require("./691840.js"),
  Chunk565130 = require("./565130.js"),
  Chunk779688 = require("./779688.js"),
  Chunk862097 = require("./862097.js"),
  Chunk271537 = require("./271537.js"),
  Chunk761762 = require("./761762.js"),
  Chunk882854 = require("./882854.js"),
  Chunk306983 = require("./306983.js"),
  Chunk569314 = require("./569314.js"),
  v = [],
  g = Chunk764908(v.sort),
  b = Chunk764908(v.push),
  _ = Chunk779688(function() {
    v.sort(true)
  }),
  k = Chunk779688(function() {
    v.sort(null)
  }),
  C = Chunk271537("sort"),
  Z = !Chunk779688(function() {
    if (m) return m < 70;
    if (!h || !(h > 3)) {
      if (f) returntrue;
      if (y) return y < 603;
      var e, t, n, r, o = "";
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
        for (r = 0; r < 47; r++) v.push({
          k: t + r,
          v: n
        })
      }
      for (v.sort(function(e, t) {
          return t.v - e.v
        }), r = 0; r < v.length; r++) t = v[r].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
      return "DGBEFHACIJK" !== o
    }
  });
Chunk220159({
  target: "Array",
  proto: true,
  forced: _ || !k || !C || !Z
}, {
  sort: function(e) {
    true !== e && a(e);
    var t, n, r = i(this);
    if (Z) return true === e ? g(r) : g(r, e);
    var o = [],
      u = s(r);
    for (n = 0; n < u; n++) n in r && b(o, r[n]);
    for (d(o, function(t, n) {
        return true === n ? false : true === t ? 1 : true !== e ? +e(t, n) || 0 : l(t) > l(n) ? 1 : false
      }), t = s(o), n = 0; n < t;) r[n] = o[n++];
    for (; n < u;) c(r, n++);
    return r
  }
})