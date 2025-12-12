/** Chunk was on web.js **/
/** chunk id: 91907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk7284 = require("./7284.js"),
  Chunk256139 = require("./256139.jsx"),
  Chunk866040 = require("./866040.jsx");

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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    user: t,
    text: n,
    channel: o,
    textClassName: d,
    onPopoutClosed: p,
    enableDisplayNameStyles: m = false
  } = e, h = i.useMemo(() => [t], [t]), g = i.useRef(null), E = (0, l.j)({
    displayNameStyles: null == t ? true : t.displayNameStyles
  });
  return (0, r.jsx)(u.Z, {
    targetElementRef: g,
    participants: h,
    channel: o,
    onPopoutClosed: p,
    children: e => (0, r.jsx)(c.Z, _(f({}, e), {
      tag: "span",
      children: (0, r.jsx)(s.xvT, {
        ref: g,
        className: m ? a()(d, E) : d,
        variant: "text-sm/semibold",
        color: "text-strong",
        lineClamp: 1,
        scaleFontToUserSetting: true,
        children: n
      })
    }))
  })
}