/** Chunk was on 13478 **/
/** chunk id: 946196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk620389 = require("./620389.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk47343 = require("./47343.js");

function p() {
  let e = (0, l.e7)([s.Z], () => s.Z.getError());
  return e ? (0, r.jsx)(m, {
    error: e
  }) : null
}
let m = e => {
  let {
    error: t
  } = e, [n, l] = (0, i.useState)(false), p = (0, a.Yzy)(!n, {
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
  }, "respect-motion-settings"), m = (() => {
    switch (t) {
      case s.r.ERROR_DOWNLOADING_DEPENDENCY:
        return u.intl.string(u.t.D9neaH);
      case s.r.ERROR_ACTIVATING_VOICE_FILTER:
        return u.intl.string(u.t.mNMZZg);
      default:
        return u.intl.string(u.t.F8FvUy)
    }
  })();
  return p(e => n ? null : (0, r.jsx)(o.animated.div, {
    style: e,
    className: d.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: d.visibleFloater,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: m
      }), (0, r.jsx)(a.RyX, {
        noticeType: c.kVF.VOICE_FILTERS_ERROR,
        onClick: () => l(true)
      })]
    })
  }))
}