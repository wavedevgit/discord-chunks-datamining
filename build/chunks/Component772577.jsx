/** Chunk was on 97492 **/
/** chunk id: 772577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
    className: a()(u.kL, {
      [u.sz]: n
    }),
    children: [(0, r.jsx)("div", {
      className: u.lm,
      children: (0, r.jsx)(s.Text, {
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

function f(e) {
  let [t, n] = l.useState(), [i, a] = l.useState(), [s, u] = l.useState(false), [f, p] = l.useState(false), {
    enabled: h
  } = (0, o.DN)(e);
  return l.useEffect(() => {
    h && null != t && null != i ? u(t < i) : u(false)
  }, [h, t, i]), {
    horizontalScrollNotice: l.useMemo(() => s ? (0, r.jsx)(d, {
      text: c.intl.string(c.t.RfAAH9),
      hasScrolled: f
    }) : null, [s, f]),
    handleScroll: () => p(true),
    handleSetScrollerRef: e => {
      var t;
      return a(null == e || null == (t = e.getScrollerState()) ? true : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? true : e.clientWidth)
  }
}