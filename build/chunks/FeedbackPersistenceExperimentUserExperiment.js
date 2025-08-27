/** Chunk was on web.js **/
/** chunk id: 250454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");

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
    persistToBackend: false,
    showMobileOptOuts: false
  },
  u = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-05_feedback_persistence_experiment",
    label: "Feedback metadata persistence",
    defaultConfig: c,
    treatments: [{
      id: 1,
      label: "Persist impression times and opt-outs to backend; show mobile opt-outs",
      config: l(o({}, c), {
        persistToBackend: true,
        showMobileOptOuts: true
      })
    }]
  });

function d(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return u.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}