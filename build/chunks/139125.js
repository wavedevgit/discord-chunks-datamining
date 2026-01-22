/** Chunk was on 35511 **/
/** chunk id: 139125, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk675879 = require("./675879.js"),
  Chunk999843 = require("./999843.js"),
  Chunk529030 = require("./529030.js"),
  Chunk794779 = require("./794779.js"),
  Chunk656595 = require("./656595.js"),
  Chunk57284 = require("./57284.js"),
  Chunk486816 = require("./486816.js"),
  Chunk709605 = require("./709605.js"),
  Chunk242291 = require("./242291.js"),
  Chunk231588 = require("./231588.js"),
  Chunk625316 = require("./625316.js"),
  Chunk738538 = require("./738538.js"),
  Chunk9910 = require("./9910.js"),
  v = [],
  g = Chunk675879(v.sort),
  b = Chunk675879(v.push),
  A = Chunk486816(function() {
    v.sort(true)
  }),
  _ = Chunk486816(function() {
    v.sort(null)
  }),
  k = Chunk242291("sort"),
  C = !Chunk486816(function() {
    if (m) return m < 70;
    if (!h || !(h > 3)) {
      if (f) returntrue;
      if (y) return y < 603;
      var e, t, n, r, a = "";
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
        }), r = 0; r < v.length; r++) t = v[r].k.charAt(0), a.charAt(a.length - 1) !== t && (a += t);
      return "DGBEFHACIJK" !== a
    }
  });
Chunk834647({
  target: "Array",
  proto: true,
  forced: A || !_ || !k || !C
}, {
  sort: function(e) {
    true !== e && o(e);
    var t, n, r = i(this);
    if (C) return true === e ? g(r) : g(r, e);
    var a = [],
      u = s(r);
    for (n = 0; n < u; n++) n in r && b(a, r[n]);
    for (d(a, function(t, n) {
        return true === n ? false : true === t ? 1 : true !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : false
      }), t = s(a), n = 0; n < t;) r[n] = a[n++];
    for (; n < u;) l(r, n++);
    return r
  }
})