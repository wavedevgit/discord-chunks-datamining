/** Chunk was on web.js **/
/** chunk id: 430993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => O,
  y: () => y
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function y(e) {
  return i.Children.toArray(e).filter(Boolean).length > 0
}

function b(e) {
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
    scrollerRef: o
  } = e;
  if (!y(n) && null == t && null == i) return null;
  let s = b(n);
  return (0, r.jsx)(v, {
    controls: t,
    children: s,
    listProps: i,
    onScroll: a,
    scrollerRef: o
  })
}

function v(e) {
  var t, n;
  let {
    controls: a,
    children: s,
    listProps: p,
    onScroll: h,
    scrollerRef: g
  } = e, [y, b] = i.useState(false), [O, v] = i.useState(null != p), A = i.useRef(null), I = (0, c.A)(A, null == p ? true : p.ref, g), S = i.useRef(null), T = i.useRef(true);
  i.useEffect(() => (T.current = l()(() => {
    var e;
    (null == A ? true : A.current) != null && null != a && b((null == (e = A.current) ? true : e.getDistanceFromTop()) > 12)
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
        if (N) return void v(true);
        let n = null != (e = null == A || null == (t = A.current) ? true : t.getScrollerNode()) ? e : null;
        if (null == n || (null == S ? true : S.current) == null) return;
        let r = n.getBoundingClientRect();
        v(S.current.getBoundingClientRect().height > r.height)
      }),
      r = null != (e = null == A || null == (t = A.current) ? true : t.getScrollerNode()) ? e : null;
    return null != r && n.observe(r), (null == S ? true : S.current) != null && n.observe(S.current), () => n.disconnect()
  }, [N]), (0, r.jsxs)(u.F, {
    children: [(0, r.jsx)("div", {
      className: o()(_.bodySpacerTop, {
        [_.bodySpacerTopBorder]: O && null == a
      })
    }), null != a && (0, r.jsx)("header", {
      className: o()(_.bodyControls, {
        [_.bodyControlsWithFade]: y
      }),
      children: a
    }), null != p ? (0, r.jsx)(d.Ei, E(m({}, p), {
      className: _.bodyList,
      innerAriaOrientation: null != (t = p.innerAriaOrientation) ? t : "vertical",
      innerRole: null != (n = p.innerRole) ? n : "listbox",
      ref: I,
      onScroll: e => {
        var t;
        C(), null == (t = p.onScroll) || t.call(p, e)
      }
    })) : (0, r.jsx)(f.Gt, {
      ref: I,
      className: _.body,
      onScroll: C,
      disableFocusRingScope: true,
      children: (0, r.jsx)("main", {
        ref: S,
        className: o()(_.bodyInner, {
          [_.bodyInnerShouldScroll]: O
        }),
        children: s
      })
    }), (0, r.jsx)("div", {
      className: o()(_.bodySpacerBottom, {
        [_.bodySpacerBottomBorder]: O
      })
    })]
  })
}