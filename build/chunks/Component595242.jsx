/** Chunk was on web.js **/
/** chunk id: 595242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk821849 = require("./821849.js"),
  Chunk15640 = require("./15640.js"),
  Chunk899667 = require("./899667.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk783739 = require("./783739.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk950099 = require("./950099.js");

function y() {
  i.useEffect(() => {
    c.Z.wait(() => {
      u.jg(), u.tZ(), (0, d.X8)(), (0, f.Y2)(null, null, E.JjL.DISCOVERY), (0, d.tH)(true)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, s.cj)([m.Z], () => ({
    hasFetchedSubscriptions: m.Z.hasFetchedSubscriptions(),
    premiumSubscription: m.Z.getPremiumTypeSubscription()
  })), n = (0, p.V)(), a = (0, s.e7)([h.Z], () => h.Z.hasFetchedPaymentSources), y = (0, s.e7)([_.Z], () => _.Z.isFetchingCurrentUserAppliedBoosts);
  return e && n && a && !y ? (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)("div", {
      className: b.background
    }), (0, r.jsx)("div", {
      className: b.content,
      children: (0, r.jsx)(g.Z, {
        premiumSubscription: t
      })
    })]
  }) : (0, r.jsx)("div", {
    className: o()(b.container, b.loading),
    children: (0, r.jsx)(l.$jN, {})
  })
}