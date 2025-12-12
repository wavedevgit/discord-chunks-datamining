/** Chunk was on web.js **/
/** chunk id: 41959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c,
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk73346 = require("./73346.js"),
  Chunk372982 = require("./372982.js"),
  c = function(e) {
    return e[e.SMALL = 40] = "SMALL", e[e.MEDIUM = 66] = "MEDIUM", e[e.LARGE = 128] = "LARGE", e
  }({});
let u = {
    40: Chunk372982.small,
    66: Chunk372982.medium,
    128: Chunk372982.large
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