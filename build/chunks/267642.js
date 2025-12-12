/** Chunk was on web.js **/
/** chunk id: 267642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => T,
  FZ: () => I,
  Hl: () => X,
  Je: () => N,
  Jh: () => L,
  KK: () => W,
  Oe: () => S,
  Qi: () => B,
  Ro: () => O,
  _k: () => G,
  _p: () => D,
  aq: () => k,
  cP: () => P,
  e9: () => w,
  ee: () => z,
  gZ: () => F,
  ge: () => x,
  ig: () => C,
  nL: () => H,
  nW: () => R,
  tb: () => j,
  tl: () => K,
  vx: () => M,
  y4: () => Y,
  yw: () => V
}), require("./583741.js"), require("./415506.js"), require("./388685.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711);
require("./913527.js");
var Chunk274136 = require("./274136.js"),
  Chunk179360 = require("./179360.js"),
  Chunk317169 = require("./317169.js"),
  Chunk151494 = require("./151494.js"),
  Chunk430824 = require("./430824.js"),
  Chunk314884 = require("./314884.js"),
  Chunk78839 = require("./78839.js"),
  Chunk424218 = require("./424218.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
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
var O = function(e) {
  return e[e.EMOJI = 1] = "EMOJI", e[e.AUDIO = 2] = "AUDIO", e[e.ANIMATED = 3] = "ANIMATED", e[e.CUSTOMIZATION = 4] = "CUSTOMIZATION", e[e.UPLOAD = 5] = "UPLOAD", e[e.VANITY = 6] = "VANITY", e[e.STREAM = 7] = "STREAM", e[e.STICKER = 8] = "STICKER", e[e.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", e[e.STAGE_VIDEO = 12] = "STAGE_VIDEO", e[e.SOUNDBOARD = 13] = "SOUNDBOARD", e
}({});
let v = [Chunk981631.Eu4.NONE, Chunk981631.Eu4.TIER_1, Chunk981631.Eu4.TIER_2, Chunk981631.Eu4.TIER_3],
  S = v.slice().reverse(),
  I = e => {
    var t;
    return e === g.Eu4.NONE ? g.Eu4.TIER_1 : null == (t = Z.find(t => t.tier === e)) ? true : t.nextTier
  },
  T = (e, t) => null != t && t.features.has(g.GuildFeatures.MORE_STICKERS) && e === g.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : b.$8[e],
  C = e => b.pH[e],
  A = (e, t) => null != t && t.features.has(g.GuildFeatures.MORE_SOUNDBOARD) ? b.w1 : b._k[e],
  N = e => {
    if (e === g.Eu4.NONE) return b._k[e];
    let t = v[v.indexOf(e) - 1];
    return b._k[e] - b._k[t]
  },
  P = e => [{
    tier: g.Eu4.TIER_1,
    title: y.intl.string(y.t["lK+WOT"]),
    perks: [{
      title: y.intl.formatToPlainString(y.t.dnLAwl, {
        adding: b.HO[g.Eu4.TIER_1].limits.emoji - b.HO[g.Eu4.NONE].limits.emoji,
        total: b.HO[g.Eu4.TIER_1].limits.emoji
      }),
      description: y.intl.string(y.t["/Guvxs"]),
      icon: 1
    }, {
      title: y.intl.formatToPlainString(y.t["/9p2/g"], {
        adding: C(g.Eu4.TIER_1),
        total: T(g.Eu4.TIER_1)
      }),
      description: y.intl.string(y.t.JfsnDQ),
      icon: 8
    }, {
      title: y.intl.formatToPlainString(y.t.NRuk5m, {
        soundCount: N(g.Eu4.TIER_1),
        totalSoundCount: A(g.Eu4.TIER_1)
      }),
      description: y.intl.string(y.t.Oq7OVl),
      icon: 13
    }, {
      title: y.intl.formatToPlainString(y.t.zoT1ZE, {
        bitrate: b.HO[g.Eu4.TIER_1].limits.bitrate / 1e3
      }),
      description: y.intl.string(y.t["8a03jk"]),
      icon: 2
    }, {
      title: y.intl.string(y.t.h0s84V),
      description: y.intl.format(y.t["t+0cbk"], {}),
      icon: 3
    }, {
      title: y.intl.string(y.t.vjPGPp),
      description: y.intl.string(y.t.tG4MMU),
      icon: 4
    }, {
      title: y.intl.string(y.t.cObMZD),
      description: y.intl.string(y.t["puH/9R"]),
      icon: 7
    }].filter(p.lm)
  }, {
    tier: g.Eu4.TIER_2,
    title: y.intl.string(y.t["34GpBc"]),
    perks: [{
      title: y.intl.formatToPlainString(y.t.dnLAwl, {
        adding: b.HO[g.Eu4.TIER_2].limits.emoji - b.HO[g.Eu4.TIER_1].limits.emoji,
        total: b.HO[g.Eu4.TIER_2].limits.emoji
      }),
      description: y.intl.string(y.t.fRiNhw),
      icon: 1
    }, {
      title: y.intl.formatToPlainString(y.t["/9p2/g"], {
        adding: C(g.Eu4.TIER_2),
        total: T(g.Eu4.TIER_2)
      }),
      description: y.intl.string(y.t.t4TM28),
      icon: 8
    }, {
      title: y.intl.formatToPlainString(y.t.NRuk5m, {
        soundCount: N(g.Eu4.TIER_2),
        totalSoundCount: A(g.Eu4.TIER_2)
      }),
      description: y.intl.string(y.t.pEYlPZ),
      icon: 13
    }, {
      title: y.intl.formatToPlainString(y.t.zoT1ZE, {
        bitrate: b.HO[g.Eu4.TIER_2].limits.bitrate / 1e3
      }),
      description: y.intl.string(y.t["nzRo/I"]),
      icon: 2
    }, {
      title: y.intl.string(y.t["+KhQKM"]),
      description: y.intl.string(y.t.ZWf10P),
      icon: 4
    }, {
      title: y.intl.formatToPlainString(y.t.t95LnM, {
        fileSize: (0, f.BU)(b.HO[g.Eu4.TIER_2].limits.fileSize / 1024, {
          useKibibytes: true
        })
      }),
      description: y.intl.format(y.t.yvht65, {}),
      icon: 5
    }, {
      title: y.intl.string(y.t.bmaoNI),
      description: y.intl.string(y.t.WZW2Bj),
      icon: 7
    }, {
      title: y.intl.string(y.t.BHtqcV),
      description: y.intl.string(y.t.ukVcEe),
      icon: 11
    }, e ? {
      title: y.intl.formatToPlainString(y.t.T8P3TH, {
        limit: g.eez
      }),
      description: y.intl.formatToPlainString(y.t.T8P3TH, {
        limit: g.eez
      }),
      icon: 12
    } : null].filter(p.lm)
  }, {
    tier: g.Eu4.TIER_3,
    title: y.intl.string(y.t.P7LdcQ),
    perks: [{
      title: y.intl.formatToPlainString(y.t.dnLAwl, {
        adding: b.HO[g.Eu4.TIER_3].limits.emoji - b.HO[g.Eu4.TIER_2].limits.emoji,
        total: b.HO[g.Eu4.TIER_3].limits.emoji
      }),
      description: y.intl.string(y.t.AfJxnV),
      icon: 1
    }, {
      title: y.intl.formatToPlainString(y.t["/9p2/g"], {
        adding: C(g.Eu4.TIER_3),
        total: T(g.Eu4.TIER_3)
      }),
      description: y.intl.string(y.t["+ZI4QZ"]),
      icon: 8
    }, {
      title: y.intl.formatToPlainString(y.t.NRuk5m, {
        soundCount: N(g.Eu4.TIER_3),
        totalSoundCount: A(g.Eu4.TIER_3)
      }),
      description: y.intl.string(y.t["8omJSY"]),
      icon: 13
    }, {
      title: y.intl.formatToPlainString(y.t.zoT1ZE, {
        bitrate: b.HO[g.Eu4.TIER_3].limits.bitrate / 1e3
      }),
      description: y.intl.string(y.t["cOkbp/"]),
      icon: 2
    }, {
      title: y.intl.string(y.t.C2w2cM),
      description: y.intl.format(y.t["3Reosx"], {
        helpdeskArticle: _.Z.getArticleURL(g.BhN.GUILD_VANITY_URL)
      }),
      icon: 6
    }, {
      title: y.intl.formatToPlainString(y.t.t95LnM, {
        fileSize: (0, f.BU)(b.HO[g.Eu4.TIER_3].limits.fileSize / 1024, {
          useKibibytes: true
        })
      }),
      description: y.intl.format(y.t.IwDqSL, {}),
      icon: 5
    }, {
      title: y.intl.string(y.t.z0GtBG),
      description: y.intl.string(y.t.v92GNV),
      icon: 3
    }, e ? {
      title: y.intl.formatToPlainString(y.t.T8P3TH, {
        limit: g.RcX
      }),
      description: y.intl.formatToPlainString(y.t.T8P3TH, {
        limit: g.RcX
      }),
      icon: 12
    } : null].filter(p.lm)
  }];

function R(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      useLevels: n = true
    } = t;
  switch (e) {
    case g.Eu4.NONE:
      return n ? y.intl.string(y.t.LcKgJd) : y.intl.string(y.t.mx8j2m);
    case g.Eu4.TIER_1:
      return y.intl.string(y.t.nzXtaS);
    case g.Eu4.TIER_2:
      return y.intl.string(y.t["h33/uW"]);
    case g.Eu4.TIER_3:
      return y.intl.string(y.t.BfF6ED);
    default:
      throw Error("Not a valid tier type")
  }
}

function w(e) {
  switch (e) {
    case g.Eu4.NONE:
      return y.intl.string(y.t.LcKgJd);
    case g.Eu4.TIER_1:
      return y.intl.string(y.t.xRjU1V);
    case g.Eu4.TIER_2:
      return y.intl.string(y.t.C7e2Bo);
    case g.Eu4.TIER_3:
      return y.intl.string(y.t.avGxmk);
    default:
      throw Error("Not a valid tier type")
  }
}
let D = i().memoize(e => b.HO[g.Eu4.TIER_1].features.includes(e) ? g.Eu4.TIER_1 : b.HO[g.Eu4.TIER_2].features.includes(e) ? g.Eu4.TIER_2 : b.HO[g.Eu4.TIER_3].features.includes(e) ? g.Eu4.TIER_3 : null),
  x = e => e === g.Eu4.NONE ? g.AnalyticsObjectTypes.NONE : e === g.Eu4.TIER_1 ? g.AnalyticsObjectTypes.TIER_1 : e === g.Eu4.TIER_2 ? g.AnalyticsObjectTypes.TIER_2 : e === g.Eu4.TIER_3 ? g.AnalyticsObjectTypes.TIER_3 : null;

function L(e) {
  var t;
  let n = null == (t = c.Z.getGuild(e)) ? true : t.premiumTier;
  return null != n ? n : g.Eu4.NONE
}

function j(e, t) {
  return null == t || null != e && e >= t
}

function M(e) {
  return i().values(e).filter(e => e.isAvailable())
}

function k(e) {
  let {
    fractionalState: t
  } = e, n = d.Z.getPremiumTypeSubscription();
  u.Z.hasFetched || u.Z.isFetching || (0, a.X8)();
  let r = M(u.Z.boostSlots),
    i = null == n ? true : n.isPausedOrPausePending,
    o = r.length > 0;
  if (i && t === b.a$.NONE && !o) return y.intl.string(y.t.mOWsF1);
  let {
    numAvailableGuildBoostSlots: s,
    numCanceledGuildBoostSlots: l
  } = Object.values(u.Z.boostSlots).reduce((e, t) => (K(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
    numAvailableGuildBoostSlots: 0,
    numCanceledGuildBoostSlots: 0
  });
  if (null == n || s > 0) return null;
  if (n.status === g.O0b.PAST_DUE) return y.intl.string(y.t.De4Vm6);
  if (n.status === g.O0b.ACCOUNT_HOLD) return y.intl.string(y.t.JakNQ8);
  if (l > 0) return y.intl.string(y.t.x25mZR);
  if (null == n.renewalMutations) return null;
  let c = m.uV(n.renewalMutations.additionalPlans);
  return m.uV(n.additionalPlans) > c ? y.intl.string(y.t.x25mZR) : y.intl.string(y.t["W/bb8f"])
}

function U(e) {
  return e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : false)
}

function G(e, t) {
  var n;
  if ((null == (n = c.Z.getGuild(t)) ? true : n.features.has(g.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true) return 0;
  let r = L(t),
    i = g.oCV[r],
    o = e.filter(e => null != e.endsAt);
  return i - (e.length - o.length)
}
let Z = [{
  tier: Chunk981631.Eu4.TIER_3,
  amount: Chunk981631.oCV[Chunk981631.Eu4.TIER_3],
  nextTier: null
}, {
  tier: Chunk981631.Eu4.TIER_2,
  amount: Chunk981631.oCV[Chunk981631.Eu4.TIER_2],
  nextTier: Chunk981631.Eu4.TIER_3
}, {
  tier: Chunk981631.Eu4.TIER_1,
  amount: Chunk981631.oCV[Chunk981631.Eu4.TIER_1],
  nextTier: Chunk981631.Eu4.TIER_2
}];

function F(e, t) {
  let n = G(e, t);
  if (n > 0) {
    let r = U(e).filter(e => null != e.endsAt),
      i = r.length - n;
    i < 0 && h.Z.addBreadcrumb({
      category: "premium",
      message: "Negative index while checking grace period ending date.",
      data: {
        subscriptionLength: e.length,
        subscriptionsNeededForPremiumTier: g.oCV[L(t)],
        endingSubscriptionLength: r.length
      }
    });
    let o = r[Math.max(i, 0)];
    return null == o ? true : o.endsAt
  }
  return null
}

function B(e, t) {
  let n = C(t),
    r = v.indexOf(t);
  if (false === r) return 0;
  let i = v[r - 1],
    o = null != i ? T(i) : 0,
    a = T(t);
  return Math.max(0, n - e.slice(o, a).length)
}

function V(e, t, n) {
  return false === v.indexOf(n) ? 0 : Math.max(0, H(e) - t.length)
}

function H(e) {
  var t, n;
  let r = b.XB + (null != (n = null == (t = e.premiumFeatures) ? true : t.additionalSoundSlots) ? n : 0);
  return Math.max(e.features.has(g.GuildFeatures.MORE_SOUNDBOARD) ? b.w1 : b.XB, r)
}

function Y(e) {
  var t, n;
  let r = E.xD + (null != (n = null == (t = e.premiumFeatures) ? true : t.additionalEmojiSlots) ? n : 0);
  return Math.max(e.features.has(g.GuildFeatures.MORE_EMOJI) ? E.IE : E.xD, r)
}

function W(e, t) {
  let n = (0, s.I)(e.id).available;
  return Math.max(0, g.oCV[t] - n)
}

function K(e) {
  var t;
  return (null == (t = e.subscription) ? true : t.status) === g.O0b.CANCELED || e.canceled
}

function z(e) {
  var t;
  return null != (t = S.find(t => e >= g.oCV[t])) ? t : g.Eu4.NONE
}

function q(e) {
  var t;
  return null != (t = v.find(t => e < g.oCV[t])) ? t : g.Eu4.TIER_3
}
let Q = {
  [Chunk981631.Eu4.NONE]: 0,
  [Chunk981631.Eu4.TIER_1]: 1 / 3,
  [Chunk981631.Eu4.TIER_2]: 2 / 3,
  [Chunk981631.Eu4.TIER_3]: 1
};

function X(e) {
  let t = (0, l.I)(e.id),
    n = z(t),
    r = q(t),
    i = g.oCV[n],
    o = (t - i) / (g.oCV[r] - i),
    a = Q[n],
    s = Q[r];
  return {
    fillFactor: n === g.Eu4.TIER_3 ? 1 : o * (s - a) + a,
    totalAvailableBoostsCount: t
  }
}