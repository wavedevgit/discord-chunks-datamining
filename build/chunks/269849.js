/** Chunk was on web.js **/
/** chunk id: 269849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => f
}), require("./896048.js"), require("./64700.js");
var Chunk621466 = require("./621466.js"),
  Chunk644447 = require("./644447.js"),
  Chunk369254 = require("./369254.jsx"),
  Chunk256905 = require("./256905.jsx");

function o(e, t, n) {
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
      o(e, t, n[t])
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
    a = arguments.length > 4 ? arguments[4] : true;
  e.preventDefault(), (0, r.vq)(e.currentTarget) && e.currentTarget.blur(), (0, s.R)(u(l({}, i), {
    items: t,
    startingIndex: n,
    location: null != a ? a : "zoomedMediaModalHelper"
  }))
}

function f(e, t, n) {
  let r = {},
    s = {};
  for (let [o, l] of e.entries()) {
    let c = (0, i.E)({
      proxyURL: l.proxyUrl,
      url: l.url
    });
    r[c] = r => d(r, e, o, t, n), s[c] = () => (0, a.Z5)(l, e.length > 1)
  }
  return {
    srcToOnClickOverride: r,
    srcToHandlePreloadImage: s
  }
}