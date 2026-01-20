/** Chunk was on 11010 **/
/** chunk id: 946196, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk709706 = require("./709706.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk47343 = require("./47343.js");

function f() {
  let e = (0, a.e7)([c.Z], () => c.Z.getError());
  return e ? (0, r.jsx)(p, {
    error: e
  }) : null
}
let p = e => {
  let {
    error: t
  } = e, [n, a] = (0, i.useState)(false), f = (0, o.Yzy)(!n, {
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
      case c.r.ERROR_DOWNLOADING_DEPENDENCY:
        return u.intl.string(u.t.D9neaH);
      case c.r.ERROR_ACTIVATING_VOICE_FILTER:
        return u.intl.string(u.t.mNMZZg);
      default:
        return u.intl.string(u.t.F8FvUy)
    }
  })();
  return f(e => n ? null : (0, r.jsx)(l.animated.div, {
    style: e,
    className: d.floaterWrapper,
    children: (0, r.jsxs)("div", {
      className: d.visibleFloater,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: p
      }), (0, r.jsx)(o.RyX, {
        noticeType: s.kVF.VOICE_FILTERS_ERROR,
        onClick: () => a(true)
      })]
    })
  }))
}