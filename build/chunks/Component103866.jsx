/** Chunk was on web.js **/
/** chunk id: 103866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk747127 = require("./747127.js"),
  Chunk525751 = require("./525751.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  return "string" == typeof e ? (0, r.jsx)(l.xvT, {
    variant: "text-md/normal",
    color: "text-secondary",
    children: e
  }) : e
}

function m(e) {
  let {
    controls: t,
    children: n,
    listProps: i
  } = e;
  if (null == n && null == t && null == i) return null;
  let a = h(n);
  return (0, r.jsx)(g, {
    controls: t,
    children: a,
    listProps: i
  })
}

function g(e) {
  var t, n;
  let {
    controls: a,
    children: d,
    listProps: _
  } = e, [h, m] = i.useState(false), [g, E] = i.useState(null != _), b = i.useRef(null), y = (0, c.Z)(b, null == _ ? true : _.ref), O = i.useRef(null), v = (0, s.throttle)(() => {
    var e;
    (null == b ? true : b.current) != null && null != a && m((null == (e = b.current) ? true : e.getDistanceFromTop()) > 12)
  }, 200), I = null != _;
  return i.useLayoutEffect(() => {
    var e, t;
    let n = new ResizeObserver(() => {
        var e, t;
        if (I) return void E(true);
        let n = null != (t = null == b || null == (e = b.current) ? true : e.getScrollerNode()) ? t : null;
        if (null == n || (null == O ? true : O.current) == null) return;
        let r = n.getBoundingClientRect();
        E(O.current.getBoundingClientRect().height > r.height)
      }),
      r = null != (t = null == b || null == (e = b.current) ? true : e.getScrollerNode()) ? t : null;
    return null != r && n.observe(r), (null == O ? true : O.current) != null && n.observe(O.current), () => n.disconnect()
  }, [I]), (0, r.jsxs)(l.y5t, {
    children: [(0, r.jsx)("div", {
      className: o()(u.bodySpacerTop, {
        [u.bodySpacerTopBorder]: g && null == a
      })
    }), null != a && (0, r.jsx)("header", {
      className: o()(u.bodyControls, {
        [u.bodyControlsWithFade]: h
      }),
      children: a
    }), null != _ ? (0, r.jsx)(l._2F, p(f({}, _), {
      className: u.bodyList,
      innerAriaOrientation: null != (t = _.innerAriaOrientation) ? t : "vertical",
      innerRole: null != (n = _.innerRole) ? n : "listbox",
      ref: y,
      onScroll: e => {
        var t;
        v(), null == (t = _.onScroll) || t.call(_, e)
      }
    })) : (0, r.jsx)(l.yWw, {
      ref: b,
      className: u.body,
      onScroll: v,
      children: (0, r.jsx)("main", {
        ref: O,
        className: o()(u.bodyInner, {
          [u.bodyInnerShouldScroll]: g
        }),
        children: d
      })
    }), (0, r.jsx)("div", {
      className: o()(u.bodySpacerBottom, {
        [u.bodySpacerBottomBorder]: g
      })
    })]
  })
}