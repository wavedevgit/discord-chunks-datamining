/** Chunk was on 66866 **/
/** chunk id: 226378, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NL: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk595519 = require("./595519.js"),
  Chunk527805 = require("./527805.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function c(e) {
  let {
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: c,
    channel: u
  } = e;
  return r.useMemo(() => (function(e) {
    let {
      embeddedActivity: t,
      joinability: n,
      currentEmbeddedActivity: r,
      channel: c
    } = e, u = null == t, d = {
      disabled: false,
      isJoinAction: !u,
      text: u ? a.intl.string(a.t.I0v0Qk) : a.intl.string(a.t.sqe0ho),
      tooltip: true
    }, p = (0, i.WS)(c);
    if (null != t && null != r && t.launchId === r.launchId) return s(o({}, d), {
      disabled: true,
      text: a.intl.string(a.t.DPfdsr),
      tooltip: a.intl.string(a.t.wJNK8P)
    });
    if (u) return s(o({}, d), {
      disabled: !p,
      tooltip: p ? true : a.intl.string(a.t.f41E1t)
    });
    if (null != n && n !== l.Fw.CAN_JOIN) {
      let e;
      switch (n) {
        case l.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = a.intl.string(a.t.hHGrW1);
          break;
        case l.Fw.ACTIVITY_AGE_GATED:
          e = a.intl.string(a.t["4WuFRE"]);
          break;
        case l.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = a.intl.string(a.t.uGDCc3);
          break;
        case l.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = a.intl.string(a.t.UXoQTk);
          break;
        case l.Fw.CHANNEL_FULL:
          e = a.intl.string(a.t.rZfiNj);
          break;
        case l.Fw.NO_CHANNEL_CONNECT_PERMISSION:
          e = a.intl.string(a.t.w5SApq);
          break;
        case l.Fw.NO_CHANNEL:
        case l.Fw.NO_GUILD:
        case l.Fw.NO_USER:
        case l.Fw.IS_AFK_CHANNEL:
          e = a.intl.string(a.t.Etp6uL)
      }
      return s(o({}, d), {
        disabled: true,
        tooltip: e
      })
    }
    return d
  })({
    embeddedActivity: t,
    joinability: n,
    currentEmbeddedActivity: c,
    channel: u
  }), [t, n, c, u])
}