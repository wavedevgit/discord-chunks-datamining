/** Chunk was on web.js **/
/** chunk id: 82856, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => g,
  y: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js"),
  Chunk970815 = require("./970815.jsx");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g() {
  let e = (0, Chunk442837.e7)([Chunk479766.Z], () => Chunk479766.Z.balancePillOverlay);
  return (0, Chunk493773.ZP)(() => {
    setTimeout(() => {
      module || (0, Chunk751648.qD)(true)
    }, 300)
  }), (0, Chunk473749.useEffect)(() => () => {
    !(0, Chunk481060.$sL)() && module && (0, Chunk751648.qD)(false)
  }, [module]), null
}

function E(e) {
  var {
    pillRef: t
  } = e, n = h(e, ["pillRef"]);
  let {
    balancePillOverlay: i
  } = (0, a.cj)([c.Z], () => ({
    balancePillOverlay: c.Z.balancePillOverlay
  })), s = (0, r.jsx)(u.A4, f({
    ref: t
  }, n)), l = (0, r.jsx)(u.A4, p(f({}, n), {
    isInModalOverlay: true,
    disabled: true
  })), d = null != t.current ? t.current.offsetHeight : 36;
  return (0, r.jsx)(o.yRy, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => l,
    position: "bottom",
    align: "right",
    shouldShow: i,
    spacing: -d,
    animation: o.yRy.Animation.NONE,
    targetElementRef: t,
    positionKey: "".concat(n.balance, "-").concat(i),
    children: () => s
  })
}