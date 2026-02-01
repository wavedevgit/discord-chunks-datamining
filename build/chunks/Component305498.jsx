/** Chunk was on 21738 **/
/** chunk id: 305498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk362599 = require("./362599.jsx"),
  Chunk342494 = require("./342494.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    lastGrantedRewardAmount: g,
    children: m
  } = e, f = i.useCallback(() => {
    n(d.i.TAKE_ACTION), (0, c.pX)("".concat(u.BVt.NITRO_HOME, "?section=orbs"))
  }, [n]), A = (0, r.jsx)(a.AM, {
    targetElementRef: t,
    onRequestClose: () => n(d.i.USER_DISMISS),
    graphic: {
      type: "rive",
      rive: l.Z
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
    title: h.intl.string(p.default["78+gLr"]),
    body: h.intl.formatToPlainString(p.default.Ry1TXC, {
      orbsCount: g
    }),
    actions: [{
      text: h.intl.string(h.t.RzWDqY),
      icon: s.tvc,
      onClick: f
    }],
    gradientColor: {
      type: "custom",
      start: o.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: o.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: m
    }), A]
  })
}