/** Chunk was on web.js **/
/** chunk id: 3666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ae: () => _,
  Wv: () => f,
  ZV: () => m,
  g2: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk765671 = require("./765671.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk862320 = require("./862320.js");

function d(e) {
  let {
    items: t,
    maxLines: n,
    itemWidths: r,
    itemGapPx: i,
    containerWidth: a,
    overflowWidth: o
  } = e, s = 0, l = 0, c = 0;
  for (let e = 0; e < t.length; e++) {
    let u = r[e];
    if (isNaN(u) || u > a) continue;
    let d = s === n - 1,
      f = e === t.length - 1;
    if (!(Math.round(l + u + (d && !f ? o + i : 0)) < Math.round(a))) {
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
    containerWidth: a
  } = e, [o, s] = i.useState(0), l = i.useRef([]), c = i.useRef(0), u = i.useRef(0), f = i.useRef(null), p = i.useCallback((e, t) => {
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
      containerWidth: a,
      itemWidths: l.current,
      overflowWidth: c.current
    });
    i !== u.current && (u.current = i, s(e => e + 1))
  }, [a, t, n, r]), i.useMemo(() => ({
    lastVisibleIndex: u.current,
    onItemLayout: p,
    overflowItemsRef: f,
    itemWidthsRef: l,
    version: o
  }), [p, o])
}

function p(e) {
  let {
    items: t,
    renderItem: n
  } = e;
  return (0, r.jsx)(s.m, {
    __unsupportedReactNodeAsText: (0, r.jsx)("div", {
      className: u.YL,
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
    children: a
  } = e, o = i.useRef(null);
  return i.useLayoutEffect(() => {
    null == o.current || t(n, o.current.getBoundingClientRect().width)
  }), (0, r.jsx)("div", {
    ref: o,
    children: a
  })
}

function h(e) {
  return "string" == typeof e ? e : e.key
}

function m(e) {
  let {
    className: t,
    items: n,
    renderItem: a,
    itemGapPx: s = 0,
    maxLines: d,
    renderOverflow: m
  } = e, {
    ref: g,
    width: E = 0
  } = (0, l.Ay)(), {
    lastVisibleIndex: y,
    onItemLayout: b,
    overflowItemsRef: O
  } = f({
    items: n,
    itemGapPx: s,
    maxLines: d,
    containerWidth: E
  }), v = i.useCallback(e => (0, r.jsx)(p, {
    items: e,
    renderItem: a
  }), [a]), A = null != m ? m : v, I = i.useMemo(() => n.slice(0, y + 1), [n, y]), S = i.useMemo(() => n.slice(y + 1), [n, y]);
  return (0, r.jsxs)("div", {
    className: o()(t, u.ld),
    ref: g,
    children: [(0, r.jsxs)("div", {
      "aria-hidden": true,
      className: u.Kk,
      children: [(0, r.jsx)("div", {
        className: u.R5,
        children: n.map((e, t) => (0, r.jsx)(_, {
          index: t,
          onItemLayout: b,
          children: a(e)
        }, h(e)))
      }), (0, r.jsx)("div", {
        className: u.zd,
        ref: O,
        children: a(c.intl.formatToPlainString(c.t.vGclWm, {
          count: Number("1".concat(n.length))
        }))
      })]
    }), I.map(a), S.length > 0 && A(S)]
  })
}