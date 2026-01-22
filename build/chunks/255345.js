/** Chunk was on web.js **/
/** chunk id: 255345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I3: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk811024 = require("./811024.js"),
  Chunk550151 = require("./550151.js"),
  Chunk985018 = require("./985018.jsx");

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

function d(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: i,
    channel: a
  } = e;
  return r.useMemo(() => f({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: i,
    channel: a
  }), [t, n, i, a])
}

function f(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: r,
    channel: o
  } = e, c = null == t, d = {
    disabled: false,
    isJoinAction: !c,
    text: c ? s.intl.string(s.t.RscU7I) : s.intl.string(s.t.sqe0hj),
    tooltip: true
  }, f = (0, i.pE)(o);
  if (null != t && null != r && t.launchId === r.launchId) return u(l({}, d), {
    disabled: true,
    text: s.intl.string(s.t.DPfdsq),
    tooltip: true
  });
  if (c) return u(l({}, d), {
    disabled: !f,
    tooltip: f ? true : s.intl.string(s.t.f41E1g)
  });
  if (null != n && n !== a.Gy.CAN_JOIN) {
    let e;
    switch (n) {
      case a.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        e = s.intl.string(s.t.hHGrWz);
        break;
      case a.Gy.ACTIVITY_AGE_GATED:
        e = s.intl.string(s.t["4WuFRE"]);
        break;
      case a.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        e = s.intl.string(s.t.uGDCcw);
        break;
      case a.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
        e = s.intl.string(s.t.UXoQTp);
        break;
      case a.Gy.CHANNEL_FULL:
        e = s.intl.string(s.t.rZfiNq);
        break;
      case a.Gy.NO_CHANNEL_CONNECT_PERMISSION:
        e = s.intl.string(s.t.w5SAps);
        break;
      case a.Gy.NO_CHANNEL:
      case a.Gy.NO_GUILD:
      case a.Gy.NO_USER:
      case a.Gy.IS_AFK_CHANNEL:
        e = s.intl.string(s.t.Etp6uI)
    }
    return u(l({}, d), {
      disabled: true,
      tooltip: e
    })
  }
  return d
}