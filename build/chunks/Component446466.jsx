/** Chunk was on 1272 **/
/** chunk id: 446466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk375527 = require("./375527.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk618435 = require("./618435.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701602 = require("./701602.js");

function h(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    children: h
  } = e, {
    orbsRewardAmount: m
  } = (0, c.er)("PremiumOrbRewardsOrbDropPopover"), b = i.useCallback(() => {
    n(d.L.TAKE_ACTION), (0, s.uL)(u.Z5c.APPLICATION_STORE)
  }, [n]), E = (0, r.jsx)(l.J2, {
    targetElementRef: t,
    onRequestClose: () => n(d.L.USER_DISMISS),
    graphic: {
      type: "image",
      src: g.Z
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
    title: f.intl.string(p.default["78+gLr"]),
    body: f.intl.formatToPlainString(p.default.Ry1TXC, {
      orbsCount: m
    }),
    actions: [{
      text: f.intl.string(f.t.RzWDqY),
      icon: a.SrA,
      onClick: b
    }],
    gradientColor: {
      type: "custom",
      start: o.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: o.TVs.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: h
    }), E]
  })
}