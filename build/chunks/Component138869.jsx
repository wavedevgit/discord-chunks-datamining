/** Chunk was on web.js **/
/** chunk id: 138869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  V: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk486020 = require("./486020.js"),
  Chunk371794 = require("./371794.js"),
  Chunk544681 = require("./544681.js"),
  c = function(e) {
    return e[e.SMALL = 40] = "SMALL", e[e.MEDIUM = 66] = "MEDIUM", e[e.LARGE = 128] = "LARGE", e
  }({});
let u = {
    40: Chunk544681.EX,
    66: Chunk544681.Y,
    128: Chunk544681.as
  },
  d = e => {
    let t, {
      application: n,
      size: i,
      asset: c,
      className: d
    } = e;
    return t = null != c ? (0, o.YE)(n.id, c, i) : s.Ay.getApplicationIconURL({
      id: n.id,
      icon: n.icon,
      size: i
    }), (0, r.jsx)("img", {
      alt: "",
      src: t,
      className: a()(l.Kk, u[i], d)
    })
  }