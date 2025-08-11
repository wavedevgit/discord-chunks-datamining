/** Chunk was on web.js **/
/** chunk id: 127608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u() {
  function e() {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("74023").then(require.bind(require, 431583));
      return t => (0, r.jsx)(e, s({
        source: "Screenshare Unavailable"
      }, t))
    })
  }(0, Chunk481060.ZDy)(async () => {
    let {
      default: t
    } = await require.e("67753").then(require.bind(require, 873809));
    return n => (0, r.jsx)(t, c(s({}, n), {
      header: o.intl.string(o.t.GFr0GR),
      body: o.intl.string(o.t.QSk6Ex),
      confirmText: o.intl.string(o.t.BK8LKy),
      onConfirm: e
    }))
  })
}