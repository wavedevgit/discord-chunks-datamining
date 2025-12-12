/** Chunk was on web.js **/
/** chunk id: 226378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NL: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk595519 = require("./595519.js"),
  Chunk527805 = require("./527805.js"),
  Chunk388032 = require("./388032.jsx");

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

function d(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: i,
    channel: o
  } = e;
  return r.useMemo(() => f({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: i,
    channel: o
  }), [t, n, i, o])
}

function f(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: r,
    channel: s
  } = e, c = null == t, d = {
    disabled: false,
    isJoinAction: !c,
    text: c ? a.intl.string(a.t.RscU7I) : a.intl.string(a.t.sqe0hj),
    tooltip: true
  }, f = (0, i.WS)(s);
  if (null != t && null != r && t.launchId === r.launchId) return u(l({}, d), {
    disabled: true,
    text: a.intl.string(a.t.DPfdsq),
    tooltip: true
  });
  if (c) return u(l({}, d), {
    disabled: !f,
    tooltip: f ? true : a.intl.string(a.t.f41E1g)
  });
  if (null != n && n !== o.Fw.CAN_JOIN) {
    let e;
    switch (n) {
      case o.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        e = a.intl.string(a.t.hHGrWz);
        break;
      case o.Fw.ACTIVITY_AGE_GATED:
        e = a.intl.string(a.t["4WuFRE"]);
        break;
      case o.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        e = a.intl.string(a.t.uGDCcw);
        break;
      case o.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
        e = a.intl.string(a.t.UXoQTp);
        break;
      case o.Fw.CHANNEL_FULL:
        e = a.intl.string(a.t.rZfiNq);
        break;
      case o.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        e = a.intl.string(a.t.w5SAps);
        break;
      case o.Fw.NO_CHANNEL:
      case o.Fw.NO_GUILD:
      case o.Fw.NO_USER:
      case o.Fw.IS_AFK_CHANNEL:
        e = a.intl.string(a.t.Etp6uI)
    }
    return u(l({}, d), {
      disabled: true,
      tooltip: e
    })
  }
  return d
}