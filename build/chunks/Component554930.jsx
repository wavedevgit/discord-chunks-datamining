/** Chunk was on web.js **/
/** chunk id: 554930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk717739 = require("./717739.jsx"),
  Chunk469165 = require("./469165.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587015 = require("./587015.js");
let d = e => {
  let {
    percentage: t
  } = e, n = new Date, d = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(), f = (0, o.e7)([a.default], () => a.default.getCurrentUser()), p = null == f ? true : f.isFractionalPremiumWithNoSubscription();
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(i.xvT, {
      variant: "text-sm/normal",
      color: "text-strong",
      children: p ? c.intl.string(c.t.E1ONHQ) : c.intl.format(c.t["43kZKL"], {
        days: d - n.getDate()
      })
    }), false === p && (0, r.jsx)(l.gu, {
      percentage: t
    }), (0, r.jsx)(s.D, {})]
  })
}