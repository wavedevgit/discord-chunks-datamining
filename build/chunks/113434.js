/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => eT,
  B6: () => $,
  Bd: () => ey,
  DU: () => ed,
  GI: () => ep,
  Gd: () => eR,
  I: () => eb,
  J2: () => F,
  Jf: () => eo,
  KX: () => em,
  OH: () => eg,
  Qy: () => eP,
  Rf: () => ea,
  Yj: () => J,
  _Q: () => eE,
  _s: () => eh,
  bA: () => z,
  e5: () => K,
  eN: () => q,
  eQ: () => eN,
  fN: () => eu,
  iO: () => ec,
  kJ: () => ef,
  me: () => ev,
  qI: () => eA,
  qb: () => eI,
  sf: () => eS,
  t5: () => el,
  tP: () => Q,
  uA: () => es,
  vf: () => eC,
  z: () => er,
  z6: () => e_,
  zB: () => ew
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
var Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk959078 = require("./959078.js"),
  Chunk780384 = require("./780384.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
  Chunk317381 = require("./317381.js"),
  Chunk197386 = require("./197386.js"),
  Chunk15624 = require("./15624.js"),
  Chunk583434 = require("./583434.js"),
  Chunk703656 = require("./703656.js"),
  Chunk706454 = require("./706454.js"),
  Chunk553795 = require("./553795.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk63063 = require("./63063.js"),
  Chunk930153 = require("./930153.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk977156 = require("./977156.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let B = false,
  V = 1;

function F() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = Chunk73800.useState(false),
    i = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]),
    a = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.excludedQuests.values()]),
    {
      isFetchingCurrentQuests: o,
      lastFetchedCurrentQuests: s
    } = (0, Chunk442837.cj)([Chunk569984.Z], () => ({
      isFetchingCurrentQuests: Chunk569984.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: Chunk569984.Z.lastFetchedCurrentQuests
    })),
    l = (0, Chunk977156.cB)({
      location: Chunk46140.dr.USE_QUESTS
    }),
    c = Chunk937797.D.useConfig({
      location: Chunk46140.dr.USE_QUESTS
    });
  return Chunk73800.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk754700) && Chunk959078 && !exports && !Chunk278074) {
      if (require(true), (0, Chunk272008.xw)(), !Chunk780384.enabled || "focused" === Chunk15624.Z.getState())(0, Chunk272008.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk959078, exports, Chunk278074, Chunk754700, module.callerSource, Chunk780384.enabled]), {
    quests: Chunk512722,
    excludedQuests: a,
    isFetchingCurrentQuests: Chunk278074
  }
}

function Z(e) {
  return e.sort((e, t) => {
    var n, r, i, a, o, s, l, c;
    let u = !(0, N.zi)(e);
    if (!(0, N.zi)(t) !== u) return u ? B : V;
    let d = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
      f = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
      _ = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
      p = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
    return u ? d !== f ? d ? V : B : _ !== p ? _ ? B : V : H(null == (o = e.config) ? true : o.expiresAt, null == (s = t.config) ? true : s.expiresAt, 1) : d !== f ? d ? B : V : _ !== p ? _ ? B : V : H(null == (l = e.config) ? true : l.expiresAt, null == (c = t.config) ? true : c.expiresAt, 0)
  })
}

function H(e, t, n) {
  let r = 0 === n ? B : V;
  return e.localeCompare(t) * r
}

function Y(e) {
  let t = r.useRef([]);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (t.current.length > 0 && t.current.length === e.length) return t.current;
    let n = Z(e).map(e => e.id);
    return t.current = n, n
  }, [e])
}

function W(e) {
  let t = r.useMemo(() => e.filter(e => {
      var t, n;
      let r = (null == (t = e.userStatus) ? true : t.completedAt) != null,
        i = (null == (n = e.userStatus) ? true : n.claimedAt) != null;
      return r && i
    }), [e]),
    n = r.useRef([]);
  return r.useMemo(() => {
    if (0 === t.length) return [];
    if (n.current.length > 0 && n.current.length === t.length) return n.current;
    let e = t.sort((e, t) => {
      var n, r;
      let i = (null == (n = e.userStatus) ? true : n.claimedAt) == null;
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? B : V : H(M.r.build(e.config).rewardsExpireAt, M.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var K = function(e) {
  return e.ALL = "all", e.CLAIMED = "claimed", e
}({});

function z(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n
  } = F({
    fetchPolicy: "cache-and-network",
    callerSource: "use_filtered_quests"
  }), r = new Map(t.map(e => [e.id, e])), i = Y(t), a = W(t), o = [], s = [];
  for (let t of o = "all" === e ? i : a) {
    let e = r.get(t);
    null != e && s.push(e)
  }
  return {
    quests: s,
    isFetchingCurrentQuests: n
  }
}

function q() {
  let e = Chunk73800.useRef(false),
    t = (0, Chunk442837.Wu)([Chunk569984.Z], () => Array.from(Chunk569984.Z.claimedQuests.values())),
    n = (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.isFetchingClaimedQuests);
  return Chunk73800.useEffect(() => {
    require || module.current || (module.current = true, (0, Chunk272008.Ag)())
  }, [require]), {
    claimedQuests: exports,
    isFetchingClaimedQuests: require
  }
}

function X() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function Q(e) {
  return (0, u.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e])
}

function J(e) {
  return r.useMemo(() => (0, N.q8)(e) || (0, N.pO)(e) || (0, N.Vl)(e) ? G.intl.string(G.t.hvVgAQ) : G.intl.string(G.t.lwQdjI), [e])
}

function $(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.e7)([g.default], () => g.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function ee(e) {
  return (0, u.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id))
}

function et(e) {
  return r.useMemo(() => (0, N.Bz)(e), [e])
}

function en(e) {
  let t = (0, u.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
  return r.useMemo(() => (0, N.BM)(e), [e, t])
}

function er(e) {
  let t = ee(e),
    n = et(e),
    r = en(e);
  return t || n || r
}
let ei = 1,
  ea = e => {
    let t = r.useCallback(() => (0, N.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = er(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, y.Z.Millis.SECOND * ei);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eo(e) {
  return r.useMemo(() => (0, N.b7)(e), [e])
}
let es = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eh({
    quest: t
  }), a = (0, A.WD)();
  return () => {
    i ? (0, N.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: S.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, N.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function el(e, t, n, r) {
  let {
    targetMinutes: i
  } = ea(e), a = eo(e), o = es({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  });
  if ((0, N.$J)(e) && !(0, N.Nj)({
      quest: e
    })) return G.intl.format(G.t["l4S+cX"], {
    minutes: i,
    onClick: o,
    gameTitle: M.r.build(e.config).application.name
  });
  if ((0, N.$J)(e)) return G.intl.format(G.t.Ajlcd3, {
    minutes: i,
    onClick: o,
    gameTitle: M.r.build(e.config).application.name
  });
  if ((0, N.q8)(e)) {
    let t = M.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? G.intl.string(G.t["o+e9ys"]) : G.intl.formatToPlainString(G.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, N.pO)(e) && (0, N.KM)(e)) return G.intl.format(G.t["1NaRSk"], {
    minutes: i
  });
  let s = G.t["6zWtV1"];
  return (0, N.Nj)({
    quest: e
  }) && (s = G.t["wmOh/v"]), G.intl.format(s, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function ec() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = F({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = X();
  return Chunk73800.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk73800;
    for (let t of module) {
      var i;
      if (!(0, Chunk509212.vR)(exports, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk512722) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk73800.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        a = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !a) {
        Chunk73800.push(exports);
        continue
      }
    }
    return Chunk73800
  }, [module, require, exports])
}

function eu(e) {
  let t = (0, u.e7)([R.Z], () => R.Z.quests),
    n = r.useMemo(() => {
      let n = (0, N.MM)(t, k.tt);
      return (0, N.Jg)(n, e)
    }, [e, t]);
  return Q(n) ? null : n
}

function ed(e) {
  var t;
  let n = (0, N.Xv)(e),
    {
      product: r,
      isFetching: i
    } = (0, h.T)(M.r.build(e).defaultReward.skuId);
  return {
    hasQuestCollectibles: n,
    avatarDecoration: null == r || null == (t = r.items) ? true : t[0],
    isFetching: i
  }
}

function ef(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, C.Wf)(e),
    handleProgress: t => (0, C.Wf)(e, t),
    handleResetStatusClick: () => (0, C.eT)(e),
    handleResetDismissibilityClick: () => (0, C.T0)(e),
    handleOverrideDeliveryClick: () => (0, C.EW)(e)
  }), [e])
}

function e_() {
  let {
    fetching: e,
    accounts: t
  } = (0, Chunk442837.cj)([Chunk553795.Z], () => ({
    fetching: Chunk553795.Z.isFetching(),
    accounts: Chunk553795.Z.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: a
  } = Chunk73800.useMemo(() => {
    let e = exports.filter(e => false === e.revoked),
      n = module.filter(e => e.type === j.ABu.XBOX),
      r = module.filter(e => e.type === j.ABu.PLAYSTATION),
      i = require.concat(Chunk73800);
    return {
      xboxAccounts: require,
      playstationAccounts: Chunk73800,
      xboxAndPlaystationAccounts: Chunk512722
    }
  }, [exports]);
  return {
    fetching: module,
    xboxAccounts: require,
    playstationAccounts: Chunk512722,
    xboxAndPlaystationAccounts: a
  }
}
let ep = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [o, s] = r.useState([]), [c, d] = r.useState(false), f = (0, u.e7)([E.Z], () => E.Z.getAccounts());
    return r.useEffect(() => {
      s(e => e.filter(e => e.type !== l.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (c) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, C.CS)(t, n), s(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [c, i, a, n, t]),
      startingConsoleQuest: c,
      errorHints: o
    }
  },
  eh = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = e_(), r = er(t), i = 0 === n.length;
    return (0, N.$J)(t) && i && !r
  },
  em = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = e_(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk73800 || !require && Chunk73800, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
      psHelpdeskArticle: a,
      xboxHelpdeskArticle: Chunk278074
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7np, {
      helpdeskArticle: Chunk73800 ? a : Chunk278074
    });
    return {
      message: Chunk512722 ? Chunk959078 : Chunk754700,
      xboxURL: Chunk278074,
      playstationURL: a
    }
  };
var eg = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eE(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = ea(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eb(e) {
  let t = (0, u.e7)([g.default], () => g.default.locale),
    {
      percentComplete: n
    } = ea(e),
    r = eo(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, v.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function ey(e, t) {
  var n, r;
  let i = ea(e),
    a = (0, N.b7)(e),
    o = (0, L.DD)({
      quest: e,
      taskDetails: i,
      location: k.dr.QUEST_HOME_DESKTOP,
      questContent: P.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t
    }),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = $(null == (r = e.userStatus) ? true : r.claimedAt);
  return s ? G.intl.formatToPlainString(G.t.lOVr0N, {
    claimDate: l
  }) : null != a ? a.description : null != o ? o : null
}

function eO(e) {
  return [(0, u.e7)([R.Z], () => R.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, C.OR)(e, t), [e])]
}

function ev(e, t) {
  let [n, i] = eO(e.id), a = r.useMemo(() => (0, N.yH)(e), [e]), l = a.includes(k.cd.DESKTOP), c = a.includes(k.cd.CONSOLE), u = ee(e), d = et(e), f = r.useMemo(() => (0, o.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: s.X.PLAY_ON_DESKTOP
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.PLAY_ON_DESKTOP_V2
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.PLAY_ACTIVITY
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.WATCH_VIDEO
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.WATCH_VIDEO_ON_MOBILE
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.STREAM_ON_DESKTOP
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.PLAY_ON_XBOX
  }, () => k.cd.CONSOLE).with({
    taskType: s.X.PLAY_ON_PLAYSTATION
  }, () => k.cd.CONSOLE).with({
    taskType: s.X.ACHIEVEMENT_IN_GAME
  }, () => k.cd.DESKTOP).with({
    taskType: s.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => k.cd.DESKTOP).exhaustive(), [t]), _ = u ? k.cd.DESKTOP : d ? k.cd.CONSOLE : null;
  return [r.useMemo(() => (0, o.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: k.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: k.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: k.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: k.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: k.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: k.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? P.LI.SELECT : c ? P.LI.CONSOLE : P.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), a, i]
}

function eI(e) {
  var t, n;
  let r = eo(e),
    i = ea(e),
    [a] = ev(e, i),
    o = Q(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !o && u && (d || f && a === P.LI.DESKTOP),
    p = (0, I.isWeb)() && _ && !(0, N.Gd)(e),
    h = (0, I.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(G.intl.string(G.t.MFGxFB)), p && m.push(G.intl.string(G.t.BV6xDg)), m
}

function eT(e) {
  var t;
  return null != (t = (0, u.e7)([R.Z], () => R.Z.quests).get(e)) ? t : null
}

function eS(e) {
  let t = (0, u.e7)([R.Z], () => R.Z.getQuest(e), [e]);
  return a()(null != t, "Unknown quest ID ".concat(e)), t
}

function eA(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, S.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, S.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function eN(e) {
  var t, n;
  let r = (0, u.e7)([g.default], () => g.default.locale),
    i = ea(e),
    [a] = ev(e, i),
    o = eo(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return G.intl.string(G.t["ij5E//"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, v.T3)(r, l, {
      roundingMode: "floor"
    });
    return G.intl.formatToPlainString(G.t.lVZaXF, {
      percent: e
    })
  }
  return a === P.LI.SELECT ? G.intl.string(G.t.EMrUHR) : (0, N.$J)(e) ? G.intl.string(G.t.mOrpXF) : G.intl.string(G.t["7e5k7O"])
}

function eC(e) {
  var t;
  let {
    quest: n,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o
  } = e, s = $(r.useMemo(() => M.r.build(n.config).rewardsExpireAt, [n.config])), l = ea(n), c = eo(n), u = (null == (t = n.userStatus) ? true : t.completedAt) != null, d = er(n), f = (0, L.DD)({
    quest: n,
    location: k.dr.QUESTS_BAR,
    questContent: P.jn.QUEST_BAR_V2,
    taskDetails: l,
    sourceQuestContent: a
  }), _ = null != c ? c.percentComplete : l.percentComplete;
  if (u) return G.intl.formatToPlainString(G.t.APddvL, {
    expirationDate: s
  });
  if (i)
    if (o === P.LI.SELECT) return G.intl.string(G.t.sWUpNz);
    else return f;
  if ((0, N.q8)(n)) return G.intl.string(G.t["o+e9ys"]);
  if (_ > 0)
    if (!d) return G.intl.string(G.t.mOrpXF);
    else return (0, N.AV)({
      quest: n,
      taskDetails: l,
      thirdPartyTaskDetails: null != c ? c : true
    });
  return G.intl.string(G.t.S6UUc3)
}

function eR(e, t) {
  let n = (0, u.e7)([R.Z], () => R.Z.getQuest(e), [e]),
    i = (0, d.ZP)(),
    a = r.useMemo(() => (null == n ? true : n.config.features.includes(k.S7.QUESTS_CDN)) === true, [n]);
  return r.useMemo(() => (null == n ? true : n.config.cosponsorMetadata) == null ? null : (0, x.Rt)(e, n.config.cosponsorMetadata.logotype, {
    theme: null != t ? t : (0, c.wj)(i) ? j.BRd.DARK : j.BRd.LIGHT,
    newCdn: a
  }), [i, t, e, null == n ? true : n.config.cosponsorMetadata, a])
}

function eP(e) {
  let t = M.r.build(e).defaultRewardName,
    n = (0, N.Kr)(e),
    r = (0, N.FX)(e),
    i = (0, N._p)(e),
    a = (0, N.f$)(e),
    o = (0, u.e7)([b.default], () => b.default.getCurrentUser()),
    s = (0, T.I5)(o, U.p9.TIER_2);
  if (null == n) return G.intl.formatToPlainString(G.t.l9uXLy, {
    decorationName: t
  });
  let l = G.intl.formatToPlainString(G.t.o97tNj, {
      rewardName: t
    }),
    c = G.intl.formatToPlainString(G.t.PkyRZm, {
      rewardName: t,
      expirationDate: r
    }),
    d = G.intl.formatToPlainString(G.t.ie4YKy, {
      rewardName: t,
      duration: n
    }),
    f = G.intl.formatToPlainString(G.t.yCpc0d, {
      duration: n,
      rewardName: t
    }),
    _ = s ? l : d,
    p = s ? c : f,
    h = i ? _ : p;
  return a ? h : G.intl.formatToPlainString(G.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function ew(e) {
  let t = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, _.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, m.uL)(j.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}