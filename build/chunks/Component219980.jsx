/** Chunk was on web.js **/
/** chunk id: 219980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js");
require("./964486.js"), require("./786953.js");
var Chunk505274 = require("./505274.js"),
  Chunk448362 = require("./448362.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function _(e) {
  let {
    pillRef: t
  } = e, n = f(e, ["pillRef"]), {
    balancePillOverlay: l
  } = (0, i.cf)([o.A], () => ({
    balancePillOverlay: o.A.balancePillOverlay
  })), u = (0, r.jsx)(s.Gy, c({
    ref: t
  }, n)), p = (0, r.jsx)(s.Gy, d(c({}, n), {
    isInModalOverlay: true,
    disabled: true
  })), _ = null != t.current ? t.current.offsetHeight : 36;
  return (0, r.jsx)(a.YNO, {
    fixed: true,
    autoInvert: false,
    renderPopout: () => p,
    position: "bottom",
    align: "right",
    shouldShow: l,
    spacing: -_,
    animation: a.YNO.Animation.NONE,
    targetElementRef: t,
    positionKey: "".concat(n.balance, "-").concat(l),
    children: () => u
  })
}