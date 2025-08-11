/** Chunk was on web.js **/
/** chunk id: 41959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c,
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk73346 = require("./73346.js"),
  Chunk700307 = require("./700307.js"),
  c = function(e) {
    return e[e.SMALL = 40] = "SMALL", e[e.MEDIUM = 66] = "MEDIUM", e
  }({});
let u = {
    40: Chunk700307.small,
    66: Chunk700307.medium
  },
  d = e => {
    let t, {
      application: n,
      size: i,
      asset: c,
      className: d
    } = e;
    return t = null != c ? (0, s._W)(n.id, c, i) : a.ZP.getApplicationIconURL({
      id: n.id,
      icon: n.icon,
      size: i
    }), (0, r.jsx)("img", {
      alt: "",
      src: t,
      className: o()(l.icon, u[i], d)
    })
  }