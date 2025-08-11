/** Chunk was on web.js **/
/** chunk id: 429090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => c
});
var Chunk203311 = require("./203311.js");

function i(e, t, n) {
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
      i(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let l = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-04_gdm_born_this_named",
  label: "GDM Born This Named",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function c(e, t) {
  var n, i;
  let a = (0, r.Ig)(e),
    {
      enabled: c
    } = l.useExperiment({
      location: e
    }, s(o({}, t), {
      disable: a || null != (n = null == t ? true : t.disable) && n,
      autoTrackExposure: null == (i = null == t ? true : t.autoTrackExposure) || i
    }));
  return c
}