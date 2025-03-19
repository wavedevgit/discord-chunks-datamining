/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  k: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(772848),
  a = n(442837),
  l = n(339085),
  o = n(231053),
  c = n(183023),
  A = n(650774),
  d = n(231338);

function u(e) {
  let {
    guild: t,
    discoverableGuild: n
  } = e, u = null == t ? void 0 : t.id, {
    memberCount: g,
    onlineCount: f
  } = (0, a.cj)([A.Z], () => {
    var e, t;
    return {
      memberCount: null !== (e = A.Z.getMemberCount(u)) && void 0 !== e ? e : 1234,
      onlineCount: null !== (t = A.Z.getOnlineCount(u)) && void 0 !== t ? t : 1234
    }
  }, [u]), m = i.useRef((0, s.Z)()), p = i.useMemo(() => {
    var e, r;
    if (null != n) return o.JO.createFromDiscoverableGuild(n);
    if (null == t) return null;
    let i = l.ZP.getGuildEmoji(t.id);
    return o.JO.createFromDiscoverableGuild((e = function(e) {
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
    }({}, t), r = r = {
      premiumSubscriptionCount: null == t ? void 0 : t.premiumSubscriberCount,
      emojis: i,
      emojiCount: i.length,
      presenceCount: f,
      memberCount: g
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    }), e))
  }, [n, t, g, f]), h = i.useMemo(() => {
    var e;
    let t = null == p ? void 0 : null === (e = p.emojis) || void 0 === e ? void 0 : e[0];
    return null != t ? {
      name: t.require_colons ? ":".concat(t.name, ":") : t.name,
      emojiId: t.id,
      animated: t.animated,
      jumboable: !0
    } : {}
  }, [null == p ? void 0 : p.emojis]);
  return null != p && p.isDiscoverable() ? (0, r.jsx)(c.UA, {
    sourceType: o.w6.GUILD,
    expressionSourceApplication: null,
    expressionSourceGuild: p,
    node: h,
    closePopout: d.dG,
    nonce: m.current,
    demoMode: !0
  }) : null
}