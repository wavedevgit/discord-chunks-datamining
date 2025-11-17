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
    channel: s
  } = e, c = null == t, d = {
    disabled: false,
    isJoinAction: !c,
    text: c ? o.intl.string(o.t.RscU7I) : o.intl.string(o.t.sqe0hj),
    tooltip: true
  }, f = (0, i.WS)(s);
  if (null != t && null != r && t.launchId === r.launchId) return u(l({}, d), {
    disabled: true,
    text: o.intl.string(o.t.DPfdsq),
    tooltip: true
  });
  if (c) return u(l({}, d), {
    disabled: !f,
    tooltip: f ? true : o.intl.string(o.t.f41E1g)
  });
  if (null != n && n !== a.Fw.CAN_JOIN) {
    let e;
    switch (n) {
      case a.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
        e = o.intl.string(o.t.hHGrWz);
        break;
      case a.Fw.ACTIVITY_AGE_GATED:
        e = o.intl.string(o.t["4WuFRE"]);
        break;
      case a.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
        e = o.intl.string(o.t.uGDCcw);
        break;
      case a.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
        e = o.intl.string(o.t.UXoQTp);
        break;
      case a.Fw.CHANNEL_FULL:
        e = o.intl.string(o.t.rZfiNq);
        break;
      case a.Fw.NO_CHANNEL_CONNECT_PERMISSION:
        e = o.intl.string(o.t.w5SAps);
        break;
      case a.Fw.NO_CHANNEL:
      case a.Fw.NO_GUILD:
      case a.Fw.NO_USER:
      case a.Fw.IS_AFK_CHANNEL:
        e = o.intl.string(o.t.Etp6uI)
    }
    return u(l({}, d), {
      disabled: true,
      tooltip: e
    })
  }
  return d
}