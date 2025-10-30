/** Chunk was on 86863 **/
/** chunk id: 946196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk13941 = require("./13941.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781798 = require("./781798.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getError());
  return module ? (0, Chunk951288.jsx)(p, {
    error: module
  }) : null
}
let p = e => {
  let {
    error: t
  } = e, [n, l] = (0, i.useState)(false), d = (0, a.Yzy)(!n, {
    from: {
      opacity: 0,
      translateY: 20
    },
    enter: {
      opacity: 1,
      translateY: 0
    },
    leave: {
      opacity: 0,
      translateY: 80
    }
  }, "respect-motion-settings"), p = (() => {
    switch (t) {
      case s.r.ERROR_DOWNLOADING_DEPENDENCY:
        return c.intl.string(c.t.D9neaH);
      case s.r.ERROR_ACTIVATING_VOICE_FILTER:
        return c.intl.string(c.t.mNMZZg);
      default:
        return c.intl.string(c.t.F8FvUy)
    }
  })();
  return d(e => n ? null : (0, r.jsx)(o.animated.div, {
    style: e,
    className: u.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: u.visibleFloater,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: p
      }), (0, r.jsx)(a.RyX, {
        onClick: () => l(true)
      })]
    })
  }))
}