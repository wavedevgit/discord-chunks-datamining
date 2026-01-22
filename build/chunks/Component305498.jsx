/** Chunk was on 21738 **/
/** chunk id: 305498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk84483 = require("./84483.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880055 = require("./880055.js");

function A(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    children: A
  } = e, {
    orbsRewardAmount: g
  } = (0, c.uX)("PremiumOrbRewardsOrbDropPopover"), m = i.useCallback(() => {
    n(d.i.TAKE_ACTION), (0, o.pX)(u.BVt.APPLICATION_STORE)
  }, [n]), b = (0, r.jsx)(l.AM, {
    targetElementRef: t,
    onRequestClose: () => n(d.i.USER_DISMISS),
    graphic: {
      type: "image",
      src: h.A
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
      orbsCount: g
    }),
    actions: [{
      text: f.intl.string(f.t.RzWDqY),
      icon: a.tvc,
      onClick: m
    }],
    gradientColor: {
      type: "custom",
      start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: A
    }), b]
  })
}