/** Chunk was on web.js **/
/** chunk id: 407699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116573 = require("./116573.js");

function p(e) {
  let {
    userId: t,
    size: n = "refresh_sm",
    className: i
  } = e, p = (0, c.ML)(t), _ = (0, c.vh)(t), m = (0, a.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getUserProfile(t)) ? true : e.fetchError
  });
  return p.length > 0 || _.length > 0 || null == m ? null : (0, r.jsxs)("div", {
    className: o()(f.container, i),
    children: [(0, r.jsx)(l.Mgn, {
      size: n,
      color: s.Z.colors.STATUS_WARNING.css
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: d.intl.string(d.t.p3Q9Y2)
    })]
  })
}