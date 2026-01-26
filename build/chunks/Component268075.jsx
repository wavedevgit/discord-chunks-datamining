/** Chunk was on 39048 **/
/** chunk id: 268075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js"),
  Chunk624793 = require("./624793.js"),
  Chunk767143 = require("./767143.jsx"),
  Chunk498642 = require("./498642.js"),
  Chunk818348 = require("./818348.js");

function g(e) {
  let {
    guild: t,
    discoverableGuild: n
  } = e, g = null == t ? true : t.id, {
    memberCount: m,
    onlineCount: p
  } = (0, s.cf)([d.A], () => {
    var e, t;
    return {
      memberCount: null != (e = d.A.getMemberCount(g)) ? e : 1234,
      onlineCount: null != (t = d.A.getOnlineCount(g)) ? t : 1234
    }
  }, [g]), f = i.useRef((0, l.A)()), h = i.useMemo(() => {
    var e, r;
    if (null != n) return o.GO.createFromDiscoverableGuild(n);
    if (null == t) return null;
    let i = a.Ay.getGuildEmoji(t.id);
    return o.GO.createFromDiscoverableGuild((e = function(e) {
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
  return null != h && h.isDiscoverable() ? (0, r.jsx)(c.sX, {
    sourceType: o.rV.GUILD,
    expressionSourceApplication: null,
    expressionSourceGuild: h,
    node: b,
    closePopout: u.tE,
    nonce: f.current,
    demoMode: true
  }) : null
}