/** Chunk was on 21738 **/
/** chunk id: 305498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk880055 = require("./880055.js");

function g(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    lastGrantedRewardAmount: g,
    children: f
  } = e, m = i.useCallback(() => {
    n(u.i.TAKE_ACTION), (0, o.pX)("".concat(c.BVt.NITRO_HOME, "?section=orbs"))
  }, [n]), A = (0, r.jsx)(l.AM, {
    targetElementRef: t,
    onRequestClose: () => n(u.i.USER_DISMISS),
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
    title: p.intl.string(d.default["78+gLr"]),
    body: p.intl.formatToPlainString(d.default.Ry1TXC, {
      orbsCount: g
    }),
    actions: [{
      text: p.intl.string(p.t.RzWDqY),
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
      children: f
    }), A]
  })
}