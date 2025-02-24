/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  C: () => O,
  Z: () => w
}), n(301563), n(653041);
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140),
  l = n(704907),
  c = n(581883),
  u = n(592125),
  d = n(430824),
  f = n(944486),
  p = n(914010),
  _ = n(981631),
  h = n(526761);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = 10,
  y = 100,
  O = 100,
  S = new l.ZP({
    computeBonus: () => y,
    computeWeight: e => {
      let t = 1;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, n;
      return null !== (n = null !== (t = d.Z.getGuild(e)) && void 0 !== t ? t : u.Z.getChannel(e)) && void 0 !== n ? n : u.Z.getChannel(u.Z.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: O,
    maxSamples: b
  }),
  I = null,
  T = null;

function N(e) {
  let {
    guildId: t,
    channelId: n
  } = e, r = !1;
  return n !== I && (I = null != n ? n : null, null != n && _.Xyh.test(n) && (r = !0, S.track(n), R.pendingUsages.push({
    key: n,
    timestamp: Date.now()
  }))), t !== T && (T = null != t ? t : null, null != t && _.Xyh.test(t) && (r = !0, S.track(t), R.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), r
}

function A(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  return t === h.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (R.pendingUsages = [], !0)
}

function C() {
  var e;
  let t = null === (e = c.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
  if (null == t) return !1;
  S.overwriteHistory(o().mapValues(t, e => v(g({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), R.pendingUsages)
}
let R = {
  pendingUsages: []
};
class P extends(r = a.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(p.Z, f.Z), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && _.Xyh.test(e.key)), R = e), this.syncWith([c.Z], C)
  }
  getState() {
    return R
  }
  hasPendingUsage() {
    return R.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return S
  }
  getFrequentlyWithoutFetchingLatest() {
    return S.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null !== (t = S.getFrecency(e)) && void 0 !== t ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = u.Z.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return O * b
  }
  getBonusScore() {
    return y
  }
}
m(P, "displayName", "FrecencyStore"), m(P, "persistKey", "FrecencyStore");
let w = new P(s.Z, {
  CHANNEL_SELECT: N,
  VOICE_CHANNEL_SELECT: N,
  USER_SETTINGS_PROTO_UPDATE: A
})