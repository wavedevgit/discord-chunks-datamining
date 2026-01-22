/** Chunk was on 1272 **/
/** chunk id: 171558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk375527 = require("./375527.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk618435 = require("./618435.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701602 = require("./701602.js");

function g(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    children: g
  } = e, {
    orbsRewardAmount: h
  } = (0, s.er)("PremiumOrbRewardsUpsellPopover"), m = i.useCallback(() => {
    n(u.L.TAKE_ACTION), (0, o.uL)(c.Z5c.APPLICATION_STORE)
  }, [n]), b = (0, r.jsx)(l.J2, {
    targetElementRef: t,
    onRequestClose: () => n(u.L.USER_DISMISS),
    graphic: {
      type: "image",
      src: f.Z
    },
    badge: {
      type: "beta",
      variant: "expressive"
    },
    alignmentStrategy: "edge",
    align: "top",
    position: "right",
    caretConfig: {
      align: "start"
    },
    size: "md",
    title: p.intl.string(d.default["3BI7j6"]),
    body: p.intl.formatToPlainString(d.default.FGYM4u, {
      orbsCount: h
    }),
    actions: [{
      text: p.intl.string(p.t.hvVgAZ),
      onClick: m
    }],
    gradientColor: {
      type: "custom",
      start: a.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: a.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: g
    }), b]
  })
}