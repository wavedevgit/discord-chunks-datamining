/** Chunk was on web.js **/
/** chunk id: 714510, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NA: () => Q,
  VX: () => W,
  XR: () => X,
  gj: () => H,
  mU: () => B,
  tH: () => Y,
  wT: () => R
}), require("./228524.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js");
require("./166352.js");
var Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk773669 = require("./773669.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk474090 = require("./474090.js"),
  Chunk341915 = require("./341915.js"),
  Chunk537928 = require("./537928.jsx"),
  Chunk245853 = require("./245853.js"),
  Chunk651892 = require("./651892.js"),
  Chunk92246 = require("./92246.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk890687 = require("./890687.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = "NVIDIA GeForce NOW";

function w(e, t, n) {
  return n ? A.intl.formatToPlainString(e, t) : A.intl.format(e, t)
}

function R(e, t, n, r) {
  let {
    targetMinutes: i
  } = (0, y.fc)(e), a = (0, y.I3)(e), o = (0, y.BL)({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, E.ui)(e);
  if ((0, g.g5)(e) && !(0, g.t)({
      quest: e
    })) return A.intl.format(A.t["l4S+cQ"], {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if ((0, g.g5)(e)) return s ? A.intl.format(A.t.gbtCpW, {
    onClick: o,
    minutes: i
  }) : A.intl.format(A.t.Ajlcd7, {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if (s) return A.intl.format(A.t.Hu8SKW, {
    targetMinutes: i
  });
  if ((0, g.vv)(e)) {
    let t = (0, g.Xi)(e.config),
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? A.intl.string(A.t["o+e9yh"]) : A.intl.formatToPlainString(A.t["9m9Mna"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, g.vl)(e))
    if ((0, E._e)(e)) return A.intl.format(A.t["1NaRSs"], {
      minutes: i
    });
    else return A.intl.format(A.t.xHXCyf, {
      minutes: i,
      activityName: e.config.messages.gameTitle
    });
  let l = A.t["6zWtV8"];
  return (0, g.t)({
    quest: e
  }) && (l = e.config.features.includes(b.Li.NON_GAMING_PLAY_QUEST) ? A.t.fe7Xec : A.t["wmOh/q"]), A.intl.format(l, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function P(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: a,
      collectibleRewardDuration: o,
      onGameTitleClick: s
    } = e,
    l = (0, m.mH)(n.config),
    {
      targetMinutes: c
    } = r,
    u = n.config.messages.gameTitle,
    d = (0, m.JX)(n.config),
    f = (0, m.Y7)(n.config),
    p = n.config.features.includes(b.Li.NON_GAMING_PLAY_QUEST),
    _ = null != s;
  return w(t = a && d ? f ? p ? A.t.ztXW8V : _ ? A.t.tQoqXX : A.t["eb/Sna"] : p ? A.t["1AcTqm"] : _ ? A.t.klYWbT : A.t.ziB0HF : d || null != o ? p ? A.t.enQ3jU : _ ? A.t["4JS2QJ"] : A.t.AwuMRS : p ? A.t["e+K3xJ"] : _ ? A.t.GFdaUK : A.t.NIimTt, {
    gameTitle: u,
    streamingDurationRequirement: c,
    rewardNameWithArticle: l,
    duration: o,
    targetMinutes: c,
    onGameTitleClick: s
  }, i)
}

function D(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: a,
      collectibleRewardDuration: o,
      onGameTitleClick: s
    } = e,
    l = (0, m.mH)(n.config),
    {
      targetMinutes: c
    } = r,
    u = n.config.messages.gameTitle,
    d = (0, m.JX)(n.config),
    f = (0, m.Y7)(n.config),
    p = null != s;
  return w(t = a && d ? f ? p ? A.t.tQoqXX : A.t["eb/Sna"] : p ? A.t.klYWbT : A.t.ziB0HF : d || null != o ? p ? A.t["4JS2QJ"] : A.t.AwuMRS : p ? A.t.GFdaUK : A.t.NIimTt, {
    gameTitle: u,
    targetMinutes: c,
    rewardNameWithArticle: l,
    duration: o,
    streamingDurationRequirement: c,
    onGameTitleClick: s
  }, i)
}

function L(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: a,
      collectibleRewardDuration: o,
      onGameTitleClick: s
    } = e,
    l = (0, m.mH)(n.config),
    {
      targetMinutes: c
    } = r,
    u = n.config.messages.gameTitle,
    d = (0, m.JX)(n.config),
    f = (0, m.Y7)(n.config),
    p = n.config.features.includes(b.Li.NON_GAMING_PLAY_QUEST),
    _ = null != s;
  return w(t = a && d ? f ? p ? A.t.ztXW8V : _ ? A.t.tQoqXX : A.t["eb/Sna"] : p ? A.t["1AcTqm"] : _ ? A.t.klYWbT : A.t.ziB0HF : d || null != o ? p ? A.t.enQ3jU : _ ? A.t["4JS2QJ"] : A.t.AwuMRS : p ? A.t["03VJqu"] : _ ? A.t.NrD2h8 : A.t.FZL5Q5, {
    gameTitle: u,
    streamingDurationRequirement: c,
    rewardNameWithArticle: l,
    duration: o,
    questReward: l,
    onGameTitleClick: s
  }, i)
}

function x(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r,
    onGameTitleClick: i
  } = e, {
    targetMinutes: a
  } = n, o = t.config.messages.gameTitle;
  return w(null != i ? A.t.HHVg4i : A.t["a/ia7F"], {
    gameTitle: o,
    streamingDurationRequirement: a,
    onGameTitleClick: i
  }, r)
}

function M(e, t, n, r) {
  var i;
  let a, o = (0, g.Xi)(e.config),
    s = null != (i = null == o ? true : o.messages.videoTitle) ? i : "video",
    l = (0, m.mH)(e.config),
    c = (0, m.JX)(e.config),
    u = (0, m.Y7)(e.config);
  return w(a = c && n ? u ? A.t["xqX+r5"] : A.t["vs/xBu"] : c || null != t ? A.t["W/HkLO"] : e.id === b.Fw ? A.t.Rsd5bL : A.t["g+InPC"], {
    videoTitle: s,
    rewardNameWithArticle: l,
    duration: t
  }, r)
}

function j(e) {
  let {
    quest: t,
    taskDetails: n,
    withoutMarkdown: r,
    questContent: i
  } = e, a = n.targetMinutes, o = (0, m.mH)(t.config);
  return (0, E._e)(t) ? w(A.t.VYwSSu, {
    streamingDurationRequirement: a,
    questReward: o
  }, r) : t.config.features.includes(b.Li.CLOUD_GAMING_ACTIVITY) ? i === f.uF.QUESTS_EMBED ? w(A.t["C+2RxC"], {
    activityName: t.config.messages.gameTitle,
    providerName: N,
    providerLink: c.A.getArticleURL(O.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
    questReward: o
  }, r) : w(A.t["0NNM3l"], {
    activityName: t.config.messages.gameTitle,
    providerName: N,
    providerLink: c.A.getArticleURL(O.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
    streamingDurationRequirement: a,
    questReward: o
  }, r) : w(A.t.UuzHh8, {
    activityName: t.config.messages.gameTitle,
    streamingDurationRequirement: a,
    questReward: o
  }, r)
}

function k(e) {
  let t, {
      quest: n,
      taskDetails: r,
      withoutMarkdown: i,
      hasNitro: a,
      collectibleRewardDuration: o,
      onGameTitleClick: s
    } = e,
    l = (0, m.mH)(n.config),
    {
      targetMinutes: c
    } = r,
    u = n.config.messages.gameTitle,
    d = (0, m.JX)(n.config),
    f = (0, m.Y7)(n.config),
    p = null != s;
  return w(t = a && d ? f ? p ? A.t.l9yxDa : A.t["X8Yt/1"] : p ? A.t.eEuma3 : A.t.smG9ql : d || null != o ? p ? A.t.Cko4a4 : A.t.BLyDvO : p ? A.t.ER9rII : A.t["hkJ+Gs"], {
    gameTitle: u,
    streamingDurationRequirement: c,
    duration: o,
    questReward: l,
    onGameTitleClick: s
  }, i)
}

function U(e) {
  var t;
  let {
    quest: n,
    gameSheetHook: r,
    rewardNameWithArticle: i,
    targetMinutes: a
  } = e, o = {
    [b.Li.PACKAGE_ACTION_ADVENTURE]: A.t.H485IA,
    [b.Li.PACKAGE_RPG_MMO]: A.t["3XS8Ni"],
    [b.Li.PACKAGE_RACING_SPORTS]: A.t["X+UCju"],
    [b.Li.PACKAGE_SANDBOX_CREATIVE]: A.t["6o4n1Q"],
    [b.Li.PACKAGE_FAMILY_FRIENDLY]: A.t.DUsNmf,
    [b.Li.PACKAGE_HOLIDAY_SEASON]: A.t["cWP8/Z"],
    [b.Li.PACKAGE_NEW_YEARS]: A.t["8+sIJz"]
  }, s = n.config.features.find(e => e in o), l = null != (t = null != s ? o[s] : null) ? t : A.t.CDeHul;
  return A.intl.format(l, {
    rewardNameWithArticle: i,
    targetMinutes: a,
    gameSheetHook: r
  })
}

function G(e) {
  let {
    quest: t,
    taskDetails: n,
    sourceQuestContent: r,
    withoutMarkdown: i,
    popoutTargetElementRef: a,
    onGameSheetOpened: o,
    onGameSheetClosed: s
  } = e, l = (0, m.mH)(t.config), {
    targetMinutes: c,
    applications: u
  } = n;
  if (i) return A.intl.formatToPlainString(A.t["1votF6"], {
    rewardNameWithArticle: l,
    targetMinutes: c
  });
  let d = (0, p.z)({
    quest: t,
    sourceQuestContent: r,
    applications: null != u ? u : [],
    popoutTargetElementRef: a,
    onGameSheetOpened: o,
    onGameSheetClosed: s
  });
  return U({
    quest: t,
    rewardNameWithArticle: l,
    targetMinutes: c,
    gameSheetHook: d
  })
}

function F(e) {
  let {
    quest: t,
    taskDetails: n,
    questContent: r,
    thirdPartyTaskDetails: i,
    sourceQuestContent: a,
    withoutMarkdown: o,
    currentUser: s,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u,
    onGameTitleClick: f
  } = e, p = (0, d.ki)(s, v.PremiumTypes.TIER_2), _ = (0, m.k5)(t.config), h = (0, g.g5)(t) && (0, g.xZ)(t);
  if ((0, E.ui)(t)) return G({
    quest: t,
    taskDetails: n,
    sourceQuestContent: a,
    withoutMarkdown: o,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  });
  if (h) return P({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    hasNitro: p,
    collectibleRewardDuration: _,
    onGameTitleClick: f
  });
  if ((0, g.g5)(t)) return D({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    hasNitro: p,
    collectibleRewardDuration: _,
    onGameTitleClick: f
  });
  if ((0, g.xZ)(t)) return L({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    hasNitro: p,
    collectibleRewardDuration: _,
    onGameTitleClick: f
  });
  if ((0, m.kr)({
      quest: t
    })) return x({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    onGameTitleClick: f
  });
  else if ((0, g.vv)(t)) return M(t, _, p, o);
  else if ((0, g.vl)(t)) return j({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    questContent: r
  });
  return null != i ? i.description : k({
    quest: t,
    taskDetails: n,
    withoutMarkdown: o,
    hasNitro: p,
    collectibleRewardDuration: _,
    onGameTitleClick: f
  })
}

function V(e) {
  var t;
  return F(C(S({}, e), {
    currentUser: null != (t = e.currentUser) ? t : l.default.getCurrentUser(),
    popoutTargetElementRef: e.popoutTargetElementRef,
    onGameSheetOpened: e.onGameSheetOpened,
    onGameSheetClosed: e.onGameSheetClosed,
    onGameTitleClick: e.onGameTitleClick
  }))
}

function B(e) {
  var t;
  let {
    quest: n,
    questContent: r,
    sourceQuestContent: s,
    gameProfileSource: c
  } = e, u = (0, y.BL)({
    quest: n,
    questContent: r,
    sourceQuestContent: s
  }), d = (0, i.bG)([l.default], () => l.default.getCurrentUser()), f = (0, y.I3)(n), p = null == (t = (0, g._3)(n)) ? true : t[0], h = (0, o.A)({
    applicationId: p,
    location: b.rE.QUEST_INSTRUCTIONS,
    source: null != c ? c : a.Ob.QuestHome
  }), {
    enabled: m
  } = _.RJ.getConfig({
    location: b.rE.QUEST_INSTRUCTIONS
  }), E = m;
  return V(C(S({}, e), {
    connectedConsoleLinkOnClick: u,
    currentUser: d,
    withoutMarkdown: false,
    thirdPartyTaskDetails: null != f ? f : true,
    onGameTitleClick: E ? h : true
  }))
}

function H(e, t, n, r) {
  var i, a;
  let o = (0, y.fc)(e),
    s = (0, g.JC)(e),
    l = B({
      quest: e,
      taskDetails: o,
      location: b.rE.QUEST_HOME_DESKTOP,
      questContent: f.uF.QUEST_HOME_DESKTOP,
      sourceQuestContent: t,
      popoutTargetElementRef: r,
      gameProfileSource: n
    }),
    c = (null == (i = e.userStatus) ? true : i.claimedAt) != null,
    u = (0, y.S5)(null == (a = e.userStatus) ? true : a.claimedAt);
  return c ? A.intl.formatToPlainString(A.t.lOVr0O, {
    claimDate: u
  }) : null != s ? s.description : null != l ? l : null
}

function Y(e) {
  var t, n;
  let {
    quest: r,
    isExpanded: i,
    sourceQuestContent: o,
    activeScreen: s,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  } = e, d = r.config.rewardsConfig.rewardsExpireAt, p = (0, y.S5)(d), _ = (0, y.fc)(r), O = (0, y.I3)(r), v = (null == (t = r.userStatus) ? true : t.completedAt) != null, I = (null == (n = r.userStatus) ? true : n.enrolledAt) != null, S = _.percentComplete > 0, T = (0, y.Vn)(r), C = B({
    quest: r,
    location: b.rE.QUESTS_BAR,
    questContent: f.uF.QUEST_BAR_V2,
    taskDetails: _,
    sourceQuestContent: o,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u,
    gameProfileSource: a.Ob.QuestBar
  }), N = null != O ? O.percentComplete : _.percentComplete;
  if (v) return A.intl.formatToPlainString(A.t.APddvF, {
    expirationDate: p
  });
  if (i)
    if (s === f.X0.SELECT) return A.intl.string(A.t.sWUpN8);
    else {
      if (!(0, E.ui)(r) || !I || S) return C;
      let e = (0, m.mH)(r.config);
      return A.intl.format(A.t["1votF6"], {
        rewardNameWithArticle: e,
        targetMinutes: _.targetMinutes
      })
    } if ((0, g.vv)(r)) return A.intl.string(A.t["o+e9yh"]);
  if (N > 0)
    if (!T) return A.intl.string(A.t.mOrpXG);
    else return (0, h.YT)({
      quest: r,
      taskDetails: _,
      thirdPartyTaskDetails: null != O ? O : true
    });
  return A.intl.string(A.t.S6UUc5)
}

function W(e) {
  var t, n;
  let r = (0, i.bG)([s.default], () => s.default.locale),
    a = (0, y.fc)(e),
    [o] = (0, y.Qo)(e, a),
    l = (0, y.I3)(e),
    c = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    d = null != l ? l.percentComplete : a.percentComplete;
  if (c) return A.intl.string(A.t["ij5E/5"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && d > 0) {
    let e = (0, u.l9)(r, d, {
      roundingMode: "floor"
    });
    return A.intl.formatToPlainString(A.t.lVZaXD, {
      percent: e
    })
  }
  return o === f.X0.SELECT ? A.intl.string(A.t.EMrUHQ) : (0, g.g5)(e) ? A.intl.string(A.t.mOrpXG) : A.intl.string(A.t["7e5k7L"])
}

function K(e) {
  return (0, g.IO)(e)
}

function z(e) {
  return (0, g.g5)(e) || (0, g.vl)(e) ? 0 : (0, g.fE)({
    quest: e
  }) ? 1 : K(e) ? 2 : 3 * !!(0, g.Cr)(e)
}

function q(e) {
  return r.useMemo(() => z(e), [e])
}

function Z(e, t) {
  returntrue
}

function Q(e) {
  let {
    quest: t,
    application: n,
    shortText: r = false
  } = e;
  switch (q(t)) {
    case 0:
      if (Z(t, n)) {
        if (t.config.features.includes(b.Li.CLOUD_GAMING_ACTIVITY)) return A.intl.string(A.t["+qoymD"]);
        if (t.config.features.includes(b.Li.START_QUEST_CTA)) return A.intl.string(r ? A.t.E4kW5O : A.t["Ie9++s"])
      }
      return A.intl.string(A.t.l7E81v);
    case 1:
      return A.intl.string(A.t.l7E81v);
    case 2:
      return A.intl.string(A.t.umdNin);
    case 3:
      return t.config.features.includes(b.Li.START_QUEST_CTA) && Z(t, n) ? A.intl.string(r ? A.t.CkUzLd : A.t["hRIVy+"]) : A.intl.string(A.t.l7E81v)
  }
}

function X(e) {
  var t, n, r, i, a;
  let {
    quest: o,
    rewardCode: s
  } = e, l = (0, m.kr)({
    quest: o
  }), c = null != (t = null == s ? true : s.platform) ? t : f.pY.CROSS_PLATFORM, u = l ? (0, m.cg)({
    quest: o,
    idx: null != (n = null == s ? true : s.tier) ? n : null == (i = o.userStatus) ? true : i.claimedTier
  }) : null, d = (0, h.xv)(o.config), p = null != (r = null == u || null == (a = u.messages) ? true : a.redemptionInstructionsByPlatform) ? r : d.messages.redemptionInstructionsByPlatform;
  return null != c ? p[c] : true
}