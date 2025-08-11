/** Chunk was on web.js **/
/** chunk id: 1585, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ps: () => _,
  y9: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js");
require("./956664.js");
var Chunk419061 = require("./419061.js"),
  Chunk981631 = require("./981631.js");

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

function f(e) {
  return "number" != typeof e ? (0, i.pxk)(e) * a.hs : e * a.hs
}
let _ = e => {
  let {
    analyticsLocations: t,
    initialSelectedDecoration: a,
    initialSelectedDecorationId: l,
    isTryItOutFlow: u,
    guild: f,
    onClose: _
  } = e;
  (0, i.ZDy)(async () => {
    (0, o.s1)().location.pathname === s.Z5c.COLLECTIBLES_SHOP_FULLSCREEN && (0, o.uL)(s.Z5c.APP);
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 235400));
    return n => <e{...d(c({}, n), {
      onCloseModal: n.onClose,
      onClose: _,
      analyticsLocations: t,
      initialSelectedDecoration: a,
      initialSelectedDecorationId: l,
      isTryItOutFlow: u,
      guild: f
    })} />
  }, {})
}