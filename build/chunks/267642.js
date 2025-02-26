/** Chunk was on web.js **/
"use strict";
n.d(t, {
  A3: () => y,
  FZ: () => b,
  Je: () => I,
  KK: () => Z,
  Qi: () => V,
  Ro: () => E,
  U2: () => S,
  Vx: () => k,
  _k: () => j,
  _p: () => C,
  aq: () => x,
  cP: () => T,
  e9: () => A,
  f2: () => w,
  gZ: () => B,
  ge: () => R,
  ig: () => O,
  nW: () => N,
  rF: () => P,
  tb: () => D,
  tl: () => H,
  vn: () => U,
  vx: () => L,
  yw: () => F
}), n(411104), n(47120), n(627341), n(230036);
var r = n(392711),
  i = n.n(r);
n(913527);
var o = n(278074),
  a = n(274136),
  s = n(179360),
  l = n(314884),
  c = n(78839),
  u = n(424218),
  d = n(823379),
  f = n(63063),
  _ = n(74538),
  p = n(981631),
  h = n(474936),
  g = n(388032);
Object.freeze({
  1: 1,
  2: 2,
  3: 3,
  4: 6,
  5: 9,
  6: 12,
  7: 15,
  8: 18,
  9: 24
});
let m = 96;
var E = function(e) {
  return e[e.EMOJI = 1] = "EMOJI", e[e.AUDIO = 2] = "AUDIO", e[e.ANIMATED = 3] = "ANIMATED", e[e.CUSTOMIZATION = 4] = "CUSTOMIZATION", e[e.UPLOAD = 5] = "UPLOAD", e[e.VANITY = 6] = "VANITY", e[e.STREAM = 7] = "STREAM", e[e.STICKER = 8] = "STICKER", e[e.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", e[e.STAGE_VIDEO = 12] = "STAGE_VIDEO", e[e.SOUNDBOARD = 13] = "SOUNDBOARD", e
}({});
let v = [p.Eu4.NONE, p.Eu4.TIER_1, p.Eu4.TIER_2, p.Eu4.TIER_3],
  b = (e, t) => {
    var n;
    return e === p.Eu4.NONE ? p.Eu4.TIER_1 : null === (n = G(t).find(t => t.tier === e)) || void 0 === n ? void 0 : n.nextTier
  },
  y = (e, t) => null != t && t.hasFeature(p.oNc.MORE_STICKERS) && e === p.Eu4.TIER_3 ? a.D.MAX_STICKER_SLOTS : h.$8[e],
  O = e => h.pH[e],
  S = (e, t) => null != t && t.hasFeature(p.oNc.MORE_SOUNDBOARD) ? m : h._k[e],
  I = e => {
    if (e === p.Eu4.NONE) return h._k[e];
    let t = v[v.indexOf(e) - 1];
    return h._k[e] - h._k[t]
  },
  T = e => [{
    tier: p.Eu4.TIER_1,
    title: g.NW.string(g.t["lK+WOT"]),
    perks: [{
      title: g.NW.formatToPlainString(g.t.dnLAws, {
        adding: h.HO[p.Eu4.TIER_1].limits.emoji - h.HO[p.Eu4.NONE].limits.emoji,
        total: h.HO[p.Eu4.TIER_1].limits.emoji
      }),
      description: g.NW.string(g.t["/Guvxs"]),
      icon: 1
    }, {
      title: g.NW.formatToPlainString(g.t["/9p2/v"], {
        adding: O(p.Eu4.TIER_1),
        total: y(p.Eu4.TIER_1)
      }),
      description: g.NW.string(g.t.JfsnDQ),
      icon: 8
    }, {
      title: g.NW.formatToPlainString(g.t.NRuk5u, {
        soundCount: I(p.Eu4.TIER_1),
        totalSoundCount: S(p.Eu4.TIER_1)
      }),
      description: g.NW.string(g.t.Oq7OVl),
      icon: 13
    }, {
      title: g.NW.formatToPlainString(g.t.zoT1ZG, {
        bitrate: h.HO[p.Eu4.TIER_1].limits.bitrate / 1e3
      }),
      description: g.NW.string(g.t["8a03jo"]),
      icon: 2
    }, {
      title: g.NW.string(g.t.h0s84e),
      description: g.NW.format(g.t["t+0cbm"], {}),
      icon: 3
    }, {
      title: g.NW.string(g.t.vjPGPj),
      description: g.NW.string(g.t.tG4MMT),
      icon: 4
    }, {
      title: g.NW.string(g.t.cObMZG),
      description: g.NW.string(g.t["puH/9f"]),
      icon: 7
    }].filter(d.lm)
  }, {
    tier: p.Eu4.TIER_2,
    title: g.NW.string(g.t["34GpBQ"]),
    perks: [{
      title: g.NW.formatToPlainString(g.t.dnLAws, {
        adding: h.HO[p.Eu4.TIER_2].limits.emoji - h.HO[p.Eu4.TIER_1].limits.emoji,
        total: h.HO[p.Eu4.TIER_2].limits.emoji
      }),
      description: g.NW.string(g.t.fRiNh4),
      icon: 1
    }, {
      title: g.NW.formatToPlainString(g.t["/9p2/v"], {
        adding: O(p.Eu4.TIER_2),
        total: y(p.Eu4.TIER_2)
      }),
      description: g.NW.string(g.t.t4TM29),
      icon: 8
    }, {
      title: g.NW.formatToPlainString(g.t.NRuk5u, {
        soundCount: I(p.Eu4.TIER_2),
        totalSoundCount: S(p.Eu4.TIER_2)
      }),
      description: g.NW.string(g.t.pEYlPT),
      icon: 13
    }, {
      title: g.NW.formatToPlainString(g.t.zoT1ZG, {
        bitrate: h.HO[p.Eu4.TIER_2].limits.bitrate / 1e3
      }),
      description: g.NW.string(g.t["nzRo/P"]),
      icon: 2
    }, {
      title: g.NW.string(g.t["+KhQKC"]),
      description: g.NW.string(g.t.ZWf10N),
      icon: 4
    }, {
      title: g.NW.formatToPlainString(g.t.t95LnJ, {
        fileSize: (0, u.BU)(h.HO[p.Eu4.TIER_2].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: g.NW.format(g.t["yvht6+"], {}),
      icon: 5
    }, {
      title: g.NW.string(g.t.bmaoND),
      description: g.NW.string(g.t.WZW2Bg),
      icon: 7
    }, {
      title: g.NW.string(g.t.BHtqcX),
      description: g.NW.string(g.t.ukVcER),
      icon: 11
    }, e ? {
      title: g.NW.formatToPlainString(g.t.T8P3TE, {
        limit: p.eez
      }),
      description: g.NW.formatToPlainString(g.t.T8P3TE, {
        limit: p.eez
      }),
      icon: 12
    } : null].filter(d.lm)
  }, {
    tier: p.Eu4.TIER_3,
    title: g.NW.string(g.t.P7LdcX),
    perks: [{
      title: g.NW.formatToPlainString(g.t.dnLAws, {
        adding: h.HO[p.Eu4.TIER_3].limits.emoji - h.HO[p.Eu4.TIER_2].limits.emoji,
        total: h.HO[p.Eu4.TIER_3].limits.emoji
      }),
      description: g.NW.string(g.t.AfJxnZ),
      icon: 1
    }, {
      title: g.NW.formatToPlainString(g.t["/9p2/v"], {
        adding: O(p.Eu4.TIER_3),
        total: y(p.Eu4.TIER_3)
      }),
      description: g.NW.string(g.t["+ZI4QU"]),
      icon: 8
    }, {
      title: g.NW.formatToPlainString(g.t.NRuk5u, {
        soundCount: I(p.Eu4.TIER_3),
        totalSoundCount: S(p.Eu4.TIER_3)
      }),
      description: g.NW.string(g.t["8omJSU"]),
      icon: 13
    }, {
      title: g.NW.formatToPlainString(g.t.zoT1ZG, {
        bitrate: h.HO[p.Eu4.TIER_3].limits.bitrate / 1e3
      }),
      description: g.NW.string(g.t.cOkbp6),
      icon: 2
    }, {
      title: g.NW.string(g.t.C2w2cH),
      description: g.NW.format(g.t["3Reos7"], {
        helpdeskArticle: f.Z.getArticleURL(p.BhN.GUILD_VANITY_URL)
      }),
      icon: 6
    }, {
      title: g.NW.formatToPlainString(g.t.t95LnJ, {
        fileSize: (0, u.BU)(h.HO[p.Eu4.TIER_3].limits.fileSize / 1024, {
          useKibibytes: !0
        })
      }),
      description: g.NW.format(g.t.IwDqSE, {}),
      icon: 5
    }, {
      title: g.NW.string(g.t.z0GtBA),
      description: g.NW.string(g.t.v92GNT),
      icon: 3
    }, e ? {
      title: g.NW.formatToPlainString(g.t.T8P3TE, {
        limit: p.RcX
      }),
      description: g.NW.formatToPlainString(g.t.T8P3TE, {
        limit: p.RcX
      }),
      icon: 12
    } : null].filter(d.lm)
  }];

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      useLevels: n = !0
    } = t;
  switch (e) {
    case p.Eu4.NONE:
      return n ? g.NW.string(g.t.LcKgJS) : g.NW.string(g.t.mx8j2t);
    case p.Eu4.TIER_1:
      return g.NW.string(g.t.nzXtaW);
    case p.Eu4.TIER_2:
      return g.NW.string(g.t["h33/ub"]);
    case p.Eu4.TIER_3:
      return g.NW.string(g.t.BfF6EB);
    default:
      throw Error("Not a valid tier type")
  }
}

function A(e) {
  switch (e) {
    case p.Eu4.NONE:
      return g.NW.string(g.t.LcKgJS);
    case p.Eu4.TIER_1:
      return g.NW.string(g.t.xRjU1d);
    case p.Eu4.TIER_2:
      return g.NW.string(g.t.C7e2Bg);
    case p.Eu4.TIER_3:
      return g.NW.string(g.t.avGxmp);
    default:
      throw Error("Not a valid tier type")
  }
}
let C = i().memoize(e => h.HO[p.Eu4.TIER_1].features.includes(e) ? p.Eu4.TIER_1 : h.HO[p.Eu4.TIER_2].features.includes(e) ? p.Eu4.TIER_2 : h.HO[p.Eu4.TIER_3].features.includes(e) ? p.Eu4.TIER_3 : null),
  R = e => e === p.Eu4.NONE ? p.Qqv.NONE : e === p.Eu4.TIER_1 ? p.Qqv.TIER_1 : e === p.Eu4.TIER_2 ? p.Qqv.TIER_2 : e === p.Eu4.TIER_3 ? p.Qqv.TIER_3 : null;

function P(e, t) {
  for (let n of G(t))
    if (e >= n.amount) return n.tier;
  return p.Eu4.NONE
}

function D(e, t) {
  return null == t || null != e && e >= t
}

function w(e, t) {
  return D(e.premiumTier, t)
}

function L(e) {
  return i().values(e).filter(e => e.isAvailable())
}

function x(e) {
  let {
    fractionalState: t
  } = e, n = c.ZP.getPremiumTypeSubscription();
  l.Z.hasFetched || (0, s.X8)();
  let r = L(l.Z.boostSlots),
    i = null == n ? void 0 : n.isPausedOrPausePending,
    a = r.length > 0,
    u = g.NW.format(g.t.kJ1AZG, {
      helpCenterLink: f.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT)
    }),
    d = (0, o.EQ)({
      isPausedOrPausePending: i,
      fractionalState: t,
      canApplyBoosts: a
    }).with({
      isPausedOrPausePending: !0,
      fractionalState: h.a$.FP_SUB_PAUSED,
      canApplyBoosts: !1
    }, () => u).with({
      isPausedOrPausePending: void 0,
      fractionalState: h.a$.FP_ONLY
    }, () => u).with({
      isPausedOrPausePending: !1,
      fractionalState: h.a$.FP_ONLY
    }, () => u).with({
      isPausedOrPausePending: !0,
      fractionalState: h.a$.NONE
    }, () => g.NW.string(g.t.mOWsFx)).otherwise(() => null);
  if (null != d) return d;
  let {
    numAvailableGuildBoostSlots: m,
    numCanceledGuildBoostSlots: E
  } = Object.values(l.Z.boostSlots).reduce((e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
    numAvailableGuildBoostSlots: 0,
    numCanceledGuildBoostSlots: 0
  });
  if (null == n || m > 0) return null;
  if (n.status === p.O0b.PAST_DUE) return g.NW.string(g.t.De4Vm5);
  if (n.status === p.O0b.ACCOUNT_HOLD) return g.NW.string(g.t.JakNQ0);
  if (E > 0) return g.NW.string(g.t.x25mZW);
  if (null == n.renewalMutations) return null;
  let v = _.uV(n.renewalMutations.additionalPlans);
  return _.uV(n.additionalPlans) > v ? g.NW.string(g.t.x25mZW) : g.NW.string(g.t["W/bb8f"])
}

function M(e) {
  return e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1)
}

function k(e, t) {
  return j(e, t) > 0
}

function j(e, t) {
  let n = P(e.length, t),
    r = U(t)[n],
    i = e.filter(e => null != e.endsAt);
  return r - (e.length - i.length)
}

function U(e) {
  return p.oCV
}

function G(e) {
  let t = U(e);
  return [{
    tier: p.Eu4.TIER_3,
    amount: t[p.Eu4.TIER_3],
    nextTier: null
  }, {
    tier: p.Eu4.TIER_2,
    amount: t[p.Eu4.TIER_2],
    nextTier: p.Eu4.TIER_3
  }, {
    tier: p.Eu4.TIER_1,
    amount: t[p.Eu4.TIER_1],
    nextTier: p.Eu4.TIER_2
  }]
}

function B(e, t) {
  let n = j(e, t);
  if (n > 0) {
    let t = M(e).filter(e => null != e.endsAt);
    return t[t.length - n].endsAt
  }
  return null
}

function V(e, t) {
  let n = O(t),
    r = v.indexOf(t);
  if (-1 === r) return 0;
  let i = v[r - 1],
    o = null != i ? y(i) : 0,
    a = y(t);
  return Math.max(0, n - e.slice(o, a).length)
}

function F(e, t, n) {
  return -1 === v.indexOf(n) ? 0 : Math.max(0, S(n, e) - t.length)
}

function Z(e, t) {
  let n = e.premiumSubscriberCount;
  return Math.max(0, U(e.id)[t] - n)
}

function H(e) {
  var t;
  return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === p.O0b.CANCELED || e.canceled
}