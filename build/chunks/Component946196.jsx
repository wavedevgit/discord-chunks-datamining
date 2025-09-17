/** Chunk was on web.js **/
/** chunk id: 946196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk938288 = require("./938288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk240527 = require("./240527.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk709706.Z], () => Chunk709706.Z.getError());
  return module ? (0, Chunk951288.jsx)(f, {
    error: module
  }) : null
}
let f = e => {
  let {
    error: t
  } = e, [n, o] = (0, i.useState)(false), d = (0, s.Yzy)(!n, {
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
  }, "respect-motion-settings"), f = (() => {
    switch (t) {
      case l.r.ERROR_DOWNLOADING_DEPENDENCY:
        return c.intl.string(c.t.D9neaG);
      case l.r.ERROR_ACTIVATING_VOICE_FILTER:
        return c.intl.string(c.t.mNMZZm);
      default:
        return c.intl.string(c.t.F8FvU1)
    }
  })();
  return d(e => n ? null : (0, r.jsx)(a.animated.div, {
    style: e,
    className: u.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: u.visibleFloater,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: f
      }), (0, r.jsx)(s.RyX, {
        onClick: () => o(true)
      })]
    })
  }))
}