/** Chunk was on web.js **/
/** chunk id: 903223, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
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

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  $k: () => c,
  Ay: () => d,
  ws: () => u
});
let s = (0, require("./600975.js").C)({
  kind: "guild",
  id: "2026-01_boost_progress_bar_default_on",
  label: "Boost Progress Bar Default On",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Progress bar default-on",
    config: {
      enabled: true
    }
  }]
});

function l(e, t) {
  return !!t && null == e.premiumProgressBarEnabledUserUpdatedAt || e.premiumProgressBarEnabled
}

function c(e, t) {
  let {
    enabled: n
  } = s.getCurrentConfig(i({
    guildId: e.id
  }, t), {
    autoTrackExposure: false
  });
  return l(e, n)
}

function u(e, t) {
  let {
    enabled: n
  } = s.useExperiment(o(i({}, t), {
    guildId: e.id
  }));
  return l(e, n)
}
let d = s