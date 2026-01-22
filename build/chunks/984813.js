/** Chunk was on web.js **/
/** chunk id: 984813, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PP: () => u,
  mz: () => d,
  z0: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk617617 = require("./617617.js"),
  Chunk980504 = require("./980504.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
var u = function(e) {
  return e[e.GLOBAL = 0] = "GLOBAL", e[e.GUILD = 1] = "GUILD", e
}({});

function d(e) {
  return (0, r.bG)([i.A], () => {
    var t, n;
    return p(e, null != (t = null == (n = i.A.settings.guilds) ? true : n.guilds) ? t : {})
  })
}

function f(e) {
  var t, n;
  return p(e, null != (t = null == (n = i.A.settings.guilds) ? true : n.guilds) ? t : {})
}

function p(e, t) {
  var n, r;
  let i = null == (n = t[e]) ? true : n.joinSound,
    s = null == (r = t[a.XH]) ? true : r.joinSound,
    l = null != i ? i : s;
  return null != l ? c(o({}, l), {
    type: +(null != i)
  }) : true
}