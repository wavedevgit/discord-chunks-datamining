/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  KZ: () => p,
  Mt: () => d,
  ZB: () => f
});
var r = n(200651),
  i = n(192379),
  o = n(772848),
  a = n(906732),
  s = n(221292);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = i.createContext(null),
  d = e => {
    let {
      value: t,
      children: n,
      shouldTrackViewOnMount: o = !0
    } = e, {
      analyticsLocations: l
    } = (0, a.ZP)(), d = {
      analyticsLocations: l,
      value: t
    }, f = i.useRef(d);
    return i.useEffect(() => {
      f.current = d
    }), i.useEffect(() => {
      if (!o) return;
      let {
        analyticsLocations: e,
        value: t
      } = f.current;
      (0, s.pQ)(c({
        action: "VIEW",
        analyticsLocations: e
      }, t))
    }, [o]), (0, r.jsx)(u.Provider, {
      value: t,
      children: n
    })
  },
  f = e => {
    var t;
    let {
      layout: n,
      userId: r,
      guildId: a,
      channelId: s,
      messageId: l,
      roleId: c,
      sourceSessionId: d,
      showGuildProfile: f = !0
    } = e, p = null === (t = i.useContext(u)) || void 0 === t ? void 0 : t.sessionId;
    return i.useMemo(() => ({
      sessionId: (0, o.Z)(),
      sourceSessionId: null != d ? d : p,
      layout: n,
      userId: r,
      guildId: a,
      channelId: s,
      messageId: l,
      roleId: c,
      showGuildProfile: f
    }), [p, n, r, a, s, l, c, d, f])
  },
  p = () => {
    let e = i.useContext(u),
      {
        analyticsLocations: t
      } = (0, a.ZP)();
    return {
      context: e,
      trackUserProfileAction: i.useCallback(n => {
        null != e && (0, s.pQ)(c({
          analyticsLocations: t
        }, e, n))
      }, [e, t])
    }
  }