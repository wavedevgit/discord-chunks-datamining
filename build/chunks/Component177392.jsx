/** Chunk was on 61344 **/
/** chunk id: 177392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk971778 = require("./971778.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk144958 = require("./144958.js");

function h() {
  let e = (0, a.bG)([o.A], () => o.A.getError());
  return e ? (0, l.jsx)(p, {
    error: e
  }) : null
}
let p = e => {
  let {
    error: t
  } = e, [n, a] = (0, r.useState)(false), h = (0, s.pnh)(!n, {
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
      case o.L.ERROR_DOWNLOADING_DEPENDENCY:
        return u.intl.string(u.t.D9neaH);
      case o.L.ERROR_ACTIVATING_VOICE_FILTER:
        return u.intl.string(u.t.mNMZZg);
      default:
        return u.intl.string(u.t.F8FvUy)
    }
  })();
  return h(e => n ? null : (0, l.jsx)(i.animated.div, {
    style: e,
    className: d.z,
    children: (0, l.jsxs)("div", {
      className: d.A,
      children: [(0, l.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: p
      }), (0, l.jsx)(s.PMB, {
        noticeType: c.kqX.VOICE_FILTERS_ERROR,
        onClick: () => a(true)
      })]
    })
  }))
}