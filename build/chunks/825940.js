/** Chunk was on web.js **/
/** chunk id: 825940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => d
}), require("./442837.js");
var Chunk427164 = require("./427164.js");
require("./633289.js");
var Chunk751823 = require("./751823.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = {
    preferSystemEffects: false
  },
  u = (0, Chunk427164.le)({
    name: "2025-12-windows-audio-effects",
    kind: "user",
    defaultConfig: c,
    variations: {
      1: l(o({}, c), {
        preferSystemEffects: true
      })
    }
  });

function d(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = i.L.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? u.definition.defaultConfig : u.getConfig({
    location: t
  })
}