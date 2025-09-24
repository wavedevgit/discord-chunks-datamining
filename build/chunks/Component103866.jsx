/** Chunk was on web.js **/
/** chunk id: 103866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => E
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk742746 = require("./742746.js"),
  Chunk993365 = require("./993365.js"),
  Chunk747127 = require("./747127.js"),
  Chunk525751 = require("./525751.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  return "string" == typeof e ? (0, r.jsx)(u.x, {
    variant: "text-md/normal",
    color: "text-secondary",
    children: e
  }) : e
}

function E(e) {
  let {
    controls: t,
    children: n,
    listProps: i
  } = e;
  if (null == n && null == t && null == i) return null;
  let a = g(n);
  return (0, r.jsx)(b, {
    controls: t,
    children: a,
    listProps: i
  })
}

function b(e) {
  var t, n;
  let {
    controls: a,
    children: u,
    listProps: _
  } = e, [h, g] = i.useState(false), [E, b] = i.useState(null != _), y = i.useRef(null), O = (0, d.Z)(y, null == _ ? true : _.ref), v = i.useRef(null), I = (0, s.throttle)(() => {
    var e;
    (null == y ? true : y.current) != null && null != a && g((null == (e = y.current) ? true : e.getDistanceFromTop()) > 12)
  }, 200), T = null != _;
  return i.useLayoutEffect(() => {
    var e, t;
    let n = new ResizeObserver(() => {
        var e, t;
        if (T) return void b(true);
        let n = null != (t = null == y || null == (e = y.current) ? true : e.getScrollerNode()) ? t : null;
        if (null == n || (null == v ? true : v.current) == null) return;
        let r = n.getBoundingClientRect();
        b(v.current.getBoundingClientRect().height > r.height)
      }),
      r = null != (t = null == y || null == (e = y.current) ? true : e.getScrollerNode()) ? t : null;
    return null != r && n.observe(r), (null == v ? true : v.current) != null && n.observe(v.current), () => n.disconnect()
  }, [T]), (0, r.jsxs)(l.y5t, {
    children: [(0, r.jsx)("div", {
      className: o()(f.bodySpacerTop, {
        [f.bodySpacerTopBorder]: E && null == a
      })
    }), null != a && (0, r.jsx)("header", {
      className: o()(f.bodyControls, {
        [f.bodyControlsWithFade]: h
      }),
      children: a
    }), null != _ ? (0, r.jsx)(c._2, m(p({}, _), {
      className: f.bodyList,
      innerAriaOrientation: null != (t = _.innerAriaOrientation) ? t : "vertical",
      innerRole: null != (n = _.innerRole) ? n : "listbox",
      ref: O,
      onScroll: e => {
        var t;
        I(), null == (t = _.onScroll) || t.call(_, e)
      }
    })) : (0, r.jsx)(l.yWw, {
      ref: y,
      className: f.body,
      onScroll: I,
      children: (0, r.jsx)("main", {
        ref: v,
        className: o()(f.bodyInner, {
          [f.bodyInnerShouldScroll]: E
        }),
        children: u
      })
    }), (0, r.jsx)("div", {
      className: o()(f.bodySpacerBottom, {
        [f.bodySpacerBottomBorder]: E
      })
    })]
  })
}