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
  Chunk473749.useEffect(() => {
    Chunk570140.Z.wait(() => {
      Chunk355467.jg(), Chunk355467.tZ(), (0, Chunk179360.X8)(), (0, Chunk821849.Y2)(null, null, Chunk981631.JjL.DISCOVERY), (0, Chunk179360.tH)(true)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, Chunk442837.cj)([Chunk78839.Z], () => ({
    hasFetchedSubscriptions: Chunk78839.Z.hasFetchedSubscriptions(),
    premiumSubscription: Chunk78839.Z.getPremiumTypeSubscription()
  })), n = (0, Chunk15640.V)(), a = (0, Chunk442837.e7)([Chunk853872.Z], () => Chunk853872.Z.hasFetchedPaymentSources), y = (0, Chunk442837.e7)([Chunk899667.Z], () => Chunk899667.Z.isFetchingCurrentUserAppliedBoosts);
  return module && require && Chunk120356 && !y ? (0, Chunk54381.jsxs)("div", {
    className: Chunk950099.container,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk950099.background
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk950099.content,
      children: (0, Chunk54381.jsx)(Chunk783739.Z, {
        premiumSubscription: exports
      })
    })]
  }) : (0, Chunk54381.jsx)("div", {
    className: o()(Chunk950099.container, Chunk950099.loading),
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}