/** Chunk was on web.js **/
/** chunk id: 120324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => f
}), require("./388685.js"), require("./473749.js");
var Chunk374470 = require("./374470.js"),
  Chunk52824 = require("./52824.js"),
  Chunk730606 = require("./730606.jsx"),
  Chunk312097 = require("./312097.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    o = arguments.length > 4 ? arguments[4] : true;
  e.preventDefault(), (0, r.kK)(e.currentTarget) && e.currentTarget.blur(), (0, a.K)(u(l({}, i), {
    items: t,
    startingIndex: n,
    location: null != o ? o : "zoomedMediaModalHelper"
  }))
}

function f(e, t, n) {
  let r = {},
    a = {};
  for (let [s, l] of e.entries()) {
    let c = (0, i.q)({
      proxyURL: l.proxyUrl,
      url: l.url
    });
    r[c] = r => d(r, e, s, t, n), a[c] = () => (0, o.WG)(l, e.length > 1)
  }
  return {
    srcToOnClickOverride: r,
    srcToHandlePreloadImage: a
  }
}