/** Chunk was on web.js **/
/** chunk id: 430993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => O,
  y: () => b
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk879378 = require("./879378.js"),
  l = require.n(Chunk879378),
  Chunk612324 = require("./612324.js"),
  Chunk707554 = require("./707554.jsx"),
  Chunk475825 = require("./475825.js"),
  Chunk599319 = require("./599319.js"),
  Chunk834730 = require("./834730.jsx"),
  Chunk22789 = require("./22789.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  return i.Children.toArray(e).filter(Boolean).length > 0
}

function y(e) {
  return "string" == typeof e ? (0, r.jsx)(p.E, {
    variant: "text-md/normal",
    color: "text-subtle",
    children: e
  }) : e
}

function O(e) {
  let {
    controls: t,
    children: n,
    listProps: i,
    onScroll: a,
    scrollerRef: s
  } = e;
  if (!b(n) && null == t && null == i) return null;
  let o = y(n);
  return (0, r.jsx)(A, {
    controls: t,
    children: o,
    listProps: i,
    onScroll: a,
    scrollerRef: s
  })
}

function A(e) {
  var t, n;
  let {
    controls: a,
    children: o,
    listProps: p,
    onScroll: h,
    scrollerRef: g
  } = e, [b, y] = i.useState(false), [O, A] = i.useState(null != p), v = i.useRef(null), S = (0, c.A)(v, null == p ? true : p.ref, g), I = i.useRef(null), T = i.useRef(true);
  i.useEffect(() => (T.current = l()(() => {
    var e;
    (null == v ? true : v.current) != null && null != a && y((null == (e = v.current) ? true : e.getDistanceFromTop()) > 12)
  }, 200), () => {
    var e;
    null == (e = T.current) || e.cancel()
  }), [a]);
  let C = i.useCallback(() => {
      null != T.current && T.current(), null != h && h()
    }, [T, h]),
    N = null != p;
  return i.useLayoutEffect(() => {
    var e, t;
    let n = new ResizeObserver(() => {
        var e, t;
        if (N) return void A(true);
        let n = null != (e = null == v || null == (t = v.current) ? true : t.getScrollerNode()) ? e : null;
        if (null == n || (null == I ? true : I.current) == null) return;
        let r = n.getBoundingClientRect();
        A(I.current.getBoundingClientRect().height > r.height)
      }),
      r = null != (e = null == v || null == (t = v.current) ? true : t.getScrollerNode()) ? e : null;
    return null != r && n.observe(r), (null == I ? true : I.current) != null && n.observe(I.current), () => n.disconnect()
  }, [N]), (0, r.jsxs)(u.F, {
    children: [(0, r.jsx)("div", {
      className: s()(_.bodySpacerTop, {
        [_.bodySpacerTopBorder]: O && null == a
      })
    }), null != a && (0, r.jsx)("header", {
      className: s()(_.bodyControls, {
        [_.bodyControlsWithFade]: b
      }),
      children: a
    }), null != p ? (0, r.jsx)(d.Ei, E(m({}, p), {
      className: _.bodyList,
      innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
      innerRole: null != (n = p.innerRole) ? n : "listbox",
      ref: S,
      onScroll: e => {
        var t;
        C(), null == (t = p.onScroll) || t.call(p, e)
      }
    })) : (0, r.jsx)(f.Gt, {
      ref: S,
      className: _.body,
      onScroll: C,
      disableFocusRingScope: true,
      children: (0, r.jsx)("main", {
        ref: I,
        className: s()(_.bodyInner, {
          [_.bodyInnerShouldScroll]: O
        }),
        children: o
      })
    }), (0, r.jsx)("div", {
      className: s()(_.bodySpacerBottom, {
        [_.bodySpacerBottomBorder]: O
      })
    })]
  })
}