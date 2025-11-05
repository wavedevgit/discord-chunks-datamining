/** Chunk was on 14953 **/
/** chunk id: 470134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk923726 = require("./923726.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk642175 = require("./642175.js");

function u(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(d.container, {
      [d.containerHide]: n
    }),
    children: [(0, r.jsx)("div", {
      className: d.notice,
      children: (0, r.jsx)(s.Text, {
        className: d.__invalid_label,
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      })
    }), (0, r.jsx)("div", {
      className: d.noticeArrow
    })]
  })
}

function p(e) {
  let [t, n] = i.useState(), [l, a] = i.useState(), [s, d] = i.useState(false), [p, h] = i.useState(false), {
    enabled: f
  } = (0, o.s1)(e);
  return i.useEffect(() => {
    f && null != t && null != l ? d(t < l) : d(false)
  }, [f, t, l]), {
    horizontalScrollNotice: i.useMemo(() => s ? (0, r.jsx)(u, {
      text: c.intl.string(c.t.RfAAH9),
      hasScrolled: p
    }) : null, [s, p]),
    handleScroll: () => h(true),
    handleSetScrollerRef: e => {
      var t;
      return a(null == e || null == (t = e.getScrollerState()) ? true : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? true : e.clientWidth)
  }
}