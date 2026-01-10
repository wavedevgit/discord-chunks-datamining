/** Chunk was on 81985 **/
/** chunk id: 470134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk923726 = require("./923726.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk67996 = require("./67996.js");

function d(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(u.container, {
      [u.containerHide]: n
    }),
    children: [(0, r.jsx)("div", {
      className: u.notice,
      children: (0, r.jsx)(o.Text, {
        className: u.__invalid_label,
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      })
    }), (0, r.jsx)("div", {
      className: u.noticeArrow
    })]
  })
}

function p(e) {
  let [t, n] = i.useState(), [l, a] = i.useState(), [o, u] = i.useState(false), [p, f] = i.useState(false), {
    enabled: h
  } = (0, s.s1)(e);
  return i.useEffect(() => {
    h && null != t && null != l ? u(t < l) : u(false)
  }, [h, t, l]), {
    horizontalScrollNotice: i.useMemo(() => o ? (0, r.jsx)(d, {
      text: c.intl.string(c.t.RfAAH9),
      hasScrolled: p
    }) : null, [o, p]),
    handleScroll: () => f(true),
    handleSetScrollerRef: e => {
      var t;
      return a(null == e || null == (t = e.getScrollerState()) ? true : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? true : e.clientWidth)
  }
}