/** Chunk was on 384 **/
/** chunk id: 832321, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk339085 = require("./339085.js"),
  Chunk231053 = require("./231053.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk650774 = require("./650774.js"),
  Chunk231338 = require("./231338.js");

function g(e) {
  let {
    guild: t,
    discoverableGuild: n
  } = e, g = null == t ? true : t.id, {
    memberCount: m,
    onlineCount: p
  } = (0, a.cj)([d.Z], () => {
    var e, t;
    return {
      memberCount: null != (e = d.Z.getMemberCount(g)) ? e : 1234,
      onlineCount: null != (t = d.Z.getOnlineCount(g)) ? t : 1234
    }
  }, [g]), f = i.useRef((0, l.Z)()), h = i.useMemo(() => {
    var e, r;
    if (null != n) return o.JO.createFromDiscoverableGuild(n);
    if (null == t) return null;
    let i = s.ZP.getGuildEmoji(t.id);
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
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, t), r = r = {
      premiumSubscriptionCount: null == t ? true : t.premiumSubscriberCount,
      emojis: i,
      emojiCount: i.length,
      presenceCount: p,
      memberCount: m
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
  }, [n, t, m, p]), b = i.useMemo(() => {
    var e;
    let t = null == h || null == (e = h.emojis) ? true : e[0];
    return null != t ? {
      name: t.require_colons ? ":".concat(t.name, ":") : t.name,
      emojiId: t.id,
      animated: t.animated,
      jumboable: true
    } : {}
  }, [null == h ? true : h.emojis]);
  return null != h && h.isDiscoverable() ? (0, r.jsx)(c.UA, {
    sourceType: o.w6.GUILD,
    expressionSourceApplication: null,
    expressionSourceGuild: h,
    node: b,
    closePopout: u.dG,
    nonce: f.current,
    demoMode: true
  }) : null
}