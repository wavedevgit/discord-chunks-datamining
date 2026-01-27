/** Chunk was on web.js **/
/** chunk id: 315606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => _,
  d: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk250105 = require("./250105.js"),
  Chunk217222 = require("./217222.js"),
  Chunk128319 = require("./128319.js");

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
let d = {
    defaultWatchMultipleStreams: false
  },
  f = (0, Chunk250105.Ay)({
    name: "2025-08-go-live-default-multiwatch",
    kind: "user",
    defaultConfig: d,
    variations: {
      1: u(l({}, d), {
        defaultWatchMultipleStreams: true
      })
    }
  });

function p(e) {
  let {
    location: t
  } = e, {
    isInHoldout: n
  } = o.p.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: true
  });
  return n ? f.definition.defaultConfig : f.getConfig({
    location: t
  })
}

function _(e) {
  let {
    location: t
  } = e;
  return (0, r.bG)([a.A], () => p({
    location: t
  }))
}