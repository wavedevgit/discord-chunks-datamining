/** Chunk was on web.js **/
/** chunk id: 560688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk131951 = require("./131951.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

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
  a.Z.supports(o.AN.VIDEO) ? (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("67753").then(n.bind(n, 873809));
    return n => (0, r.jsx)(t, d(c({}, n), {
      header: s.intl.string(s.t["8jSzSe"]),
      body: s.intl.string(s.t.bhqSWl),
      confirmText: s.intl.string(s.t.BddRzS),
      onConfirm: e
    }))
  }) : (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("67753").then(n.bind(n, 873809));
    return a => (0, r.jsx)(t, d(c({}, a), {
      header: s.intl.string(s.t.XLw6FF),
      body: s.intl.string(s.t.wVjKGi),
      confirmText: s.intl.string(s.t["BK8LK+"]),
      onConfirm: () => {
        null == e || e(), (0, i.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
          return t => (0, r.jsx)(e, c({
            source: "Video unsupported browser"
          }, t))
        })
      }
    }))
  })
}