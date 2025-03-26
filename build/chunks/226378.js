/** Chunk was on 52272 **/
n.d(t, {
  NL: () => c
});
var r = n(192379),
  i = n(595519),
  o = n(527805),
  a = n(388032);

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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
      disabled: !1,
      isJoinAction: !u,
      text: u ? a.NW.string(a.t.I0v0Qk) : a.NW.string(a.t.sqe0ho),
      tooltip: void 0
    }, p = (0, i.WS)(c);
    if (null != t && null != r && t.launchId === r.launchId) return s(l({}, d), {
      disabled: !0,
      text: a.NW.string(a.t.DPfdsr),
      tooltip: a.NW.string(a.t.wJNK8P)
    });
    if (u) return s(l({}, d), {
      disabled: !p,
      tooltip: p ? void 0 : a.NW.string(a.t.f41E1t)
    });
    if (null != n && n !== o.Fw.CAN_JOIN) {
      let e;
      switch (n) {
        case o.Fw.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          e = a.NW.string(a.t.hHGrW1);
          break;
        case o.Fw.ACTIVITY_AGE_GATED:
          e = a.NW.string(a.t["4WuFRE"]);
          break;
        case o.Fw.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          e = a.NW.string(a.t.uGDCc3);
          break;
        case o.Fw.ACTIVITY_NOT_SUPPORTED_ON_OS:
          e = a.NW.string(a.t.UXoQTk);
          break;
        case o.Fw.CHANNEL_FULL:
          e = a.NW.string(a.t.rZfiNj);
          break;
        case o.Fw.NO_CHANNEL_CONNECT_PERMISSION:
          e = a.NW.string(a.t.w5SApq);
          break;
        case o.Fw.NO_CHANNEL:
        case o.Fw.NO_GUILD:
        case o.Fw.NO_USER:
        case o.Fw.IS_AFK_CHANNEL:
          e = a.NW.string(a.t.Etp6uL)
      }
      return s(l({}, d), {
        disabled: !0,
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