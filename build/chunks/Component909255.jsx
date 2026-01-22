/** Chunk was on 21738 **/
/** chunk id: 909255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk84483 = require("./84483.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880055 = require("./880055.js");

function h(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    children: h
  } = e, {
    orbsRewardAmount: A
  } = (0, o.uX)("PremiumOrbRewardsUpsellPopover"), g = i.useCallback(() => {
    n(u.i.TAKE_ACTION), (0, s.pX)(c.BVt.APPLICATION_STORE)
  }, [n]), m = (0, r.jsx)(l.AM, {
    targetElementRef: t,
    onRequestClose: () => n(u.i.USER_DISMISS),
    graphic: {
      type: "image",
      src: f.A
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
      orbsCount: A
    }),
    actions: [{
      text: p.intl.string(p.t.hvVgAZ),
      onClick: g
    }],
    gradientColor: {
      type: "custom",
      start: a.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: a.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: h
    }), m]
  })
}