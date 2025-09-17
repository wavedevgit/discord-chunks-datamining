/** Chunk was on web.js **/
/** chunk id: 686534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk197571 = require("./197571.js");

function c(e) {
  let {
    hideBorder: t = false
  } = e, {
    dailyCapReached: n,
    dailyCapOverridden: c
  } = (0, i.cj)([s.Z], () => ({
    dailyCapReached: s.Z.hasUserHitDCCap(),
    dailyCapOverridden: s.Z.dailyCapOverridden
  }));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.xJW, {
      children: (0, r.jsxs)(a.R94, {
        className: l.marginBottom4,
        children: ["Daily Cap Reached: ", n ? "Yes" : "No"]
      })
    }), (0, r.jsx)(a.j7V, {
      value: c,
      onChange: o.Nj,
      hideBorder: t,
      children: "Override Daily Cap"
    })]
  })
}