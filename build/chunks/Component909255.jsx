/** Chunk was on 21738 **/
/** chunk id: 909255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk362599 = require("./362599.jsx"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    targetElementRef: t,
    dismissPopover: n,
    children: h
  } = e, f = i.useCallback(() => {
    n(u.i.TAKE_ACTION), (0, o.pX)("".concat(c.BVt.NITRO_HOME, "?section=orbs"))
  }, [n]), g = (0, r.jsx)(a.AM, {
    targetElementRef: t,
    onRequestClose: () => n(u.i.USER_DISMISS),
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
    title: p.intl.string(d.default["3BI7j6"]),
    body: p.intl.string(d.default.XNHr3C),
    actions: [{
      text: p.intl.string(p.t.hvVgAZ),
      onClick: f
    }],
    gradientColor: {
      type: "custom",
      start: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_START,
      end: s.LU0.colors.EXPRESSIVE_GRADIENT_PURPLE_END
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: h
    }), g]
  })
}