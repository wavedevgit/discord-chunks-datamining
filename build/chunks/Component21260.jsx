/** Chunk was on web.js **/
/** chunk id: 21260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AJ: () => _,
  Ep: () => h,
  te: () => p,
  zP: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk393238 = require("./393238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk384934 = require("./384934.js");

function d(e) {
  let {
    items: t,
    maxLines: n,
    itemWidths: r,
    itemGapPx: i,
    containerWidth: o,
    overflowWidth: a
  } = e, s = 0, l = 0, c = 0;
  for (let e = 0; e < t.length; e++) {
    let u = r[e];
    if (isNaN(u) || u > o) continue;
    let d = s === n - 1,
      f = e === t.length - 1;
    if (!(Math.round(l + u + (d && !f ? a + i : 0)) < Math.round(o))) {
      if (d) break;
      s++, l = 0
    }
    c = e, l += u + i
  }
  return c
}

function f(e) {
  let {
    itemGapPx: t,
    items: n,
    maxLines: r,
    containerWidth: o
  } = e, [a, s] = i.useState(0), l = i.useRef([]), c = i.useRef(0), u = i.useRef(0), f = i.useRef(null), p = i.useCallback((e, t) => {
    l.current[e] = t
  }, []);
  return i.useLayoutEffect(() => {
    var e;
    if (null == f.current) return;
    l.current.length = n.length, c.current = null != (e = f.current.getBoundingClientRect().width) ? e : 0;
    let i = d({
      items: n,
      maxLines: r,
      itemGapPx: t,
      containerWidth: o,
      itemWidths: l.current,
      overflowWidth: c.current
    });
    i !== u.current && (u.current = i, s(e => e + 1))
  }, [o, t, n, r]), i.useMemo(() => ({
    lastVisibleIndex: u.current,
    onItemLayout: p,
    overflowItemsRef: f,
    itemWidthsRef: l,
    version: a
  }), [p, a])
}

function p(e) {
  let {
    items: t,
    renderItem: n
  } = e;
  return (0, r.jsx)(s.u, {
    __unsupportedReactNodeAsText: (0, r.jsx)("div", {
      className: u.tooltip,
      children: t.map(n)
    }),
    "aria-label": "overflow",
    children: (0, r.jsx)("div", {
      children: n(c.intl.formatToPlainString(c.t.vGclWm, {
        count: t.length
      }))
    })
  })
}

function _(e) {
  let {
    onItemLayout: t,
    index: n,
    children: o
  } = e, a = i.useRef(null);
  return i.useLayoutEffect(() => {
    null != a.current && t(n, a.current.getBoundingClientRect().width)
  }), (0, r.jsx)("div", {
    ref: a,
    children: o
  })
}

function m(e) {
  return "string" == typeof e ? e : e.key
}

function h(e) {
  let {
    className: t,
    items: n,
    renderItem: o,
    itemGapPx: s = 0,
    maxLines: d,
    renderOverflow: h
  } = e, {
    ref: g,
    width: E = 0
  } = (0, l.ZP)(), {
    lastVisibleIndex: b,
    onItemLayout: y,
    overflowItemsRef: O
  } = f({
    items: n,
    itemGapPx: s,
    maxLines: d,
    containerWidth: E
  }), v = i.useCallback(e => (0, r.jsx)(p, {
    items: e,
    renderItem: o
  }), [o]), S = null != h ? h : v, I = i.useMemo(() => n.slice(0, b + 1), [n, b]), T = i.useMemo(() => n.slice(b + 1), [n, b]);
  return (0, r.jsxs)("div", {
    className: a()(t, u.items),
    ref: g,
    children: [(0, r.jsxs)("div", {
      "aria-hidden": true,
      className: u.measurements,
      children: [(0, r.jsx)("div", {
        className: u.itemMeasurements,
        children: n.map((e, t) => (0, r.jsx)(_, {
          index: t,
          onItemLayout: y,
          children: o(e)
        }, m(e)))
      }), (0, r.jsx)("div", {
        className: u.overflowMeasurement,
        ref: O,
        children: o(c.intl.formatToPlainString(c.t.vGclWm, {
          count: Number("1".concat(n.length))
        }))
      })]
    }), I.map(o), T.length > 0 && S(T)]
  })
}