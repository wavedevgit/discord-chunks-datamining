/** Chunk was on web.js **/
/** chunk id: 407699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    userId: t,
    className: n
  } = e, c = (0, o.ML)(t), u = (0, o.vh)(t), d = (0, i.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getUserProfile(t)) ? true : e.fetchError
  });
  return c.length > 0 || u.length > 0 || null == d ? null : (0, r.jsx)("div", {
    className: n,
    children: (0, r.jsx)(a.M14, {
      type: "warning",
      children: l.intl.string(l.t.p3Q9Y2)
    })
  })
}