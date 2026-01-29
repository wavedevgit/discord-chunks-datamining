/** Chunk was on 1113 **/
/** chunk id: 772577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk567305 = require("./567305.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk801985 = require("./801985.js");

function d(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(u.kL, {
      [u.sz]: n
    }),
    children: [(0, r.jsx)("div", {
      className: u.lm,
      children: (0, r.jsx)(a.Text, {
        className: u.__invalid_label,
        variant: "text-md/medium",
        color: "text-strong",
        children: t
      })
    }), (0, r.jsx)("div", {
      className: u._p
    })]
  })
}

function h(e) {
  let [t, n] = l.useState(), [i, s] = l.useState(), [a, u] = l.useState(false), [h, p] = l.useState(false), {
    enabled: g
  } = (0, o.DN)(e);
  return l.useEffect(() => {
    g && null != t && null != i ? u(t < i) : u(false)
  }, [g, t, i]), {
    horizontalScrollNotice: l.useMemo(() => a ? (0, r.jsx)(d, {
      text: c.intl.string(c.t.RfAAH9),
      hasScrolled: h
    }) : null, [a, h]),
    handleScroll: () => p(true),
    handleSetScrollerRef: e => {
      var t;
      return s(null == e || null == (t = e.getScrollerState()) ? true : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? true : e.clientWidth)
  }
}