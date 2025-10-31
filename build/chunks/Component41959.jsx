/** Chunk was on web.js **/
/** chunk id: 41959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c,
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk73346 = require("./73346.js"),
  Chunk777036 = require("./777036.js"),
  c = function(e) {
    return e[e.SMALL = 40] = "SMALL", e[e.MEDIUM = 66] = "MEDIUM", e[e.LARGE = 128] = "LARGE", e
  }({});
let u = {
    40: Chunk777036.small,
    66: Chunk777036.medium,
    128: Chunk777036.large
  },
  d = e => {
    let t, {
      application: n,
      size: i,
      asset: c,
      className: d
    } = e;
    return t = null != c ? (0, s._W)(n.id, c, i) : o.ZP.getApplicationIconURL({
      id: n.id,
      icon: n.icon,
      size: i
    }), (0, r.jsx)("img", {
      alt: "",
      src: t,
      className: a()(l.icon, u[i], d)
    })
  }