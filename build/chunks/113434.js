/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => eR,
  B6: () => eo,
  Bd: () => eS,
  GI: () => eb,
  Gd: () => ex,
  I: () => eT,
  J2: () => G,
  Jf: () => ef,
  KX: () => eO,
  OH: () => ev,
  Qy: () => eL,
  Rf: () => ed,
  Yj: () => ei,
  _Q: () => eI,
  _s: () => ey,
  bA: () => ee,
  e5: () => $,
  eN: () => et,
  eQ: () => ew,
  fN: () => em,
  iO: () => eh,
  kJ: () => eg,
  me: () => eC,
  qI: () => eP,
  qb: () => eN,
  t5: () => ep,
  tP: () => er,
  uA: () => e_,
  vf: () => eD,
  z: () => ec,
  z6: () => eE,
  zB: () => ej
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
var Chunk647438 = require("./647438.js");
require("./512722.js");
var Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk959078 = require("./959078.js"),
  Chunk780384 = require("./780384.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
  Chunk317381 = require("./317381.js"),
  Chunk197386 = require("./197386.js"),
  Chunk15624 = require("./15624.js");
require("./583434.js");
var Chunk703656 = require("./703656.js"),
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
let M = false,
  U = 1;

function G() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = Chunk647438.useState(false),
    i = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]),
    o = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.excludedQuests.values()]),
    {
      isFetchingCurrentQuests: a,
      lastFetchedCurrentQuests: s
    } = (0, Chunk442837.cj)([Chunk569984.Z], () => ({
      isFetchingCurrentQuests: Chunk569984.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: Chunk569984.Z.lastFetchedCurrentQuests
    })),
    c = (0, Chunk977156.c)({
      location: Chunk46140.dr.USE_QUESTS
    }),
    u = Chunk937797.DL.useConfig({
      location: Chunk46140.dr.USE_QUESTS
    });
  return Chunk647438.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk780384) && Chunk410030 && !exports && !Chunk959078) {
      if (require(true), (0, Chunk272008.xw)(), !Chunk317381.enabled || "focused" === Chunk15624.Z.getState())(0, Chunk272008.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk410030, exports, Chunk959078, Chunk780384, module.callerSource, Chunk317381.enabled]), {
    quests: Chunk278074,
    excludedQuests: Chunk754700,
    isFetchingCurrentQuests: Chunk959078,
    hasFetched: exports
  }
}

function B(e, t) {
  var n, r, i, o;
  let a = !(0, T.zi)(e),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
    c = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
    u = (null == (o = t.userStatus) ? true : o.enrolledAt) != null;
  return a ? s !== l ? s ? U : M : c !== u ? c ? M : U : X(e.config.expiresAt, t.config.expiresAt, 1) : s !== l ? s ? M : U : c !== u ? c ? M : U : X(e.config.expiresAt, t.config.expiresAt, 0)
}

function Z(e, t) {
  return X(e.config.startsAt, t.config.startsAt, 0)
}

function F(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    o = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == o ? X(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == o ? M : null == i && null != o ? U : X(i, o, 0)
}

function V(e, t) {
  return X(e.config.expiresAt, t.config.expiresAt, 1)
}

function H(e) {
  return function(t, n) {
    let r = !(0, T.zi)(t);
    return !(0, T.zi)(n) !== r ? r ? M : U : e(t, n)
  }
}

function Y(e) {
  switch (e) {
    case x._v.MOST_RECENT:
      return Z;
    case x._v.RECENTLY_ENROLLED:
      return F;
    case x._v.EXPIRING_SOON:
      return V;
    case x._v.SUGGESTED:
    default:
      return B
  }
}

function W(e, t) {
  switch (t) {
    case x.j5.REWARD_VIRTUAL_CURRENCY:
      return (0, T.xN)(e.config);
    case x.j5.REWARD_COLLECTIBLE:
      return (0, T.Xv)(e.config);
    case x.j5.REWARD_IN_GAME:
      return (0, T.vQ)(e.config);
    case x.j5.QUEST_TYPE_VIDEO:
      return (0, T.q8)(e);
    case x.j5.QUEST_TYPE_PLAY:
      return (0, T.Nj)({
        quest: e
      }) || (0, T.Dr)({
        quest: e
      }) || (0, T.pO)(e);
    default:
      returnfalse
  }
}

function K(e, t) {
  let n = Array.from(t);
  return e.filter(e => n.some(t => W(e, t)))
}
let z = {};

function q(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : z,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.size ? e : K(e, r),
    o = H(Y(n));
  return i.sort(o)
}

function X(e, t, n) {
  let r = 0 === n ? M : U;
  return e.localeCompare(t) * r
}

function Q(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    o = r.useRef(t.filters);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && n.current.length === e.length && i.current === t.sortMethod && o.current === t.filters) return n.current;
    let r = q(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, o.current = t.filters, r
  }, [e, t])
}

function J(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? M : U : X(D.r.build(e.config).rewardsExpireAt, D.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var $ = function(e) {
  return e.ALL = "all", e.CLAIMED = "claimed", e
}({});

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : z,
    {
      quests: n,
      isFetchingCurrentQuests: r,
      hasFetched: i
    } = G({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    o = new Map(n.map(e => [e.id, e])),
    a = Q(n, t),
    s = J(n),
    l = [],
    c = [];
  for (let t of l = "all" === e ? a : s) {
    let e = o.get(t);
    null != e && c.push(e)
  }
  return {
    quests: c,
    isFetchingCurrentQuests: r,
    hasFetched: i
  }
}

function et() {
  let e = Chunk647438.useRef(false),
    t = (0, Chunk442837.Wu)([Chunk569984.Z], () => Array.from(Chunk569984.Z.claimedQuests.values())),
    n = (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.isFetchingClaimedQuests);
  return Chunk647438.useEffect(() => {
    require || module.current || (module.current = true, (0, Chunk272008.Ag)())
  }, [require]), {
    claimedQuests: exports,
    isFetchingClaimedQuests: require
  }
}

function en() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function er(e) {
  return (0, l.e7)([A.Z], () => null != e && A.Z.isQuestExpired(e.id), [e])
}

function ei(e) {
  return r.useMemo(() => (0, T.q8)(e) || (0, T.Pb)(e) || (0, T.pO)(e) || (0, T.Vl)(e) ? k.intl.string(k.t.hvVgAQ) : k.intl.string(k.t.lwQdjI), [e])
}

function eo(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, l.e7)([p.default], () => p.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function ea(e) {
  return (0, l.e7)([A.Z], () => A.Z.isProgressingOnDesktop(e.id))
}

function es(e) {
  return r.useMemo(() => (0, T.Bz)(e), [e])
}

function el(e) {
  let t = (0, l.e7)([A.Z], () => A.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, T.BM)(e), [e, t])
}

function ec(e) {
  let t = ea(e),
    n = es(e),
    r = el(e);
  return t || n || r
}
let eu = 1,
  ed = e => {
    let t = r.useCallback(() => (0, T.il)(e), [e]),
      [n, i] = r.useState(t()),
      o = r.useCallback(() => i(t()), [t]),
      a = ec(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !a) return void o();
      let i = window.setInterval(() => {
        o()
      }, g.Z.Millis.SECOND * eu);
      return () => {
        clearInterval(i), o()
      }
    }, [e, a, o]), n
  };

function ef(e) {
  return r.useMemo(() => (0, T.b7)(e), [e])
}
let e_ = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = ey({
    quest: t
  }), o = (0, I.WD)();
  return () => {
    i ? (0, T.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: v.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == o ? true : o.getId(),
      sourceQuestContent: r
    }) : (0, T.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: v.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == o ? true : o.getId(),
      sourceQuestContent: r
    })
  }
};

function ep(e, t, n, r) {
  let {
    targetMinutes: i
  } = ed(e), o = ef(e), a = e_({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  });
  if ((0, T.$J)(e) && !(0, T.Nj)({
      quest: e
    })) return k.intl.format(k.t["l4S+cX"], {
    minutes: i,
    onClick: a,
    gameTitle: D.r.build(e.config).application.name
  });
  if ((0, T.$J)(e)) return k.intl.format(k.t.Ajlcd3, {
    minutes: i,
    onClick: a,
    gameTitle: D.r.build(e.config).application.name
  });
  if ((0, T.q8)(e)) {
    let t = D.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? k.intl.string(k.t["o+e9ys"]) : k.intl.formatToPlainString(k.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != o) return o.title;
  if ((0, T.pO)(e) && (0, T.KM)(e)) return k.intl.format(k.t["1NaRSk"], {
    minutes: i
  });
  let s = k.t["6zWtV1"];
  return (0, T.Nj)({
    quest: e
  }) && (s = k.t["wmOh/v"]), k.intl.format(s, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eh() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = G({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = en();
  return Chunk647438.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk647438;
    for (let t of module) {
      var i;
      if (!(0, Chunk509212.vR)(exports, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk278074) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk647438.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        o = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !Chunk754700) {
        Chunk647438.push(exports);
        continue
      }
    }
    return Chunk647438
  }, [module, require, exports])
}

function em(e) {
  let t = (0, l.e7)([A.Z], () => A.Z.quests),
    n = r.useMemo(() => {
      let n = (0, T.MM)(t, x.tt);
      return (0, T.Jg)(n, e)
    }, [e, t]);
  return er(n) ? null : n
}

function eg(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, S.Wf)(e),
    handleProgress: t => (0, S.Wf)(e, t),
    handleResetStatusClick: () => (0, S.eT)(e),
    handleResetDismissibilityClick: () => (0, S.T0)(e),
    handleOverrideDeliveryClick: () => (0, S.EW)(e)
  }), [e])
}

function eE() {
  let {
    fetching: e,
    accounts: t
  } = (0, Chunk442837.cj)([Chunk553795.Z], () => ({
    fetching: Chunk553795.Z.isFetching(),
    accounts: Chunk553795.Z.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: o
  } = Chunk647438.useMemo(() => {
    let e = exports.filter(e => false === e.revoked),
      n = module.filter(e => e.type === L.ABu.XBOX),
      r = module.filter(e => e.type === L.ABu.PLAYSTATION),
      i = require.concat(Chunk647438);
    return {
      xboxAccounts: require,
      playstationAccounts: Chunk647438,
      xboxAndPlaystationAccounts: Chunk278074
    }
  }, [exports]);
  return {
    fetching: module,
    xboxAccounts: require,
    playstationAccounts: Chunk278074,
    xboxAndPlaystationAccounts: Chunk754700
  }
}
let eb = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: o
    } = e, [s, c] = r.useState([]), [u, d] = r.useState(false), f = (0, l.e7)([h.Z], () => h.Z.getAccounts());
    return r.useEffect(() => {
      c(e => e.filter(e => e.type !== a.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, S.CS)(t, n), c(e.errorHints)
        } finally {
          var r;
          d(false), null == o || o(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, o, n, t]),
      startingConsoleQuest: u,
      errorHints: s
    }
  },
  ey = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eE(), r = ec(t), i = 0 === n.length;
    return (0, T.$J)(t) && i && !r
  },
  eO = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eE(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
      psHelpdeskArticle: Chunk754700,
      xboxHelpdeskArticle: Chunk959078
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7np, {
      helpdeskArticle: Chunk647438 ? Chunk754700 : Chunk959078
    });
    return {
      message: Chunk278074 ? Chunk442837 : Chunk780384,
      xboxURL: Chunk959078,
      playstationURL: Chunk754700
    }
  };
var ev = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eI(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    o = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    a = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = ed(e).percentComplete > 0;
  return a ? 4 : o ? 3 : s && i ? 2 : 1 * !!i
}

function eT(e) {
  let t = (0, l.e7)([p.default], () => p.default.locale),
    {
      percentComplete: n
    } = ed(e),
    r = ef(e),
    i = null != r ? r.percentComplete : n,
    o = 100 * i,
    a = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, b.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: o,
    completedRatioDisplay: a
  }
}

function eS(e, t) {
  var n, r;
  let i = ed(e),
    o = (0, T.b7)(e),
    a = (0, P.DD)({
      quest: e,
      taskDetails: i,
      location: x.dr.QUEST_HOME_DESKTOP,
      questContent: C.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t
    }),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = eo(null == (r = e.userStatus) ? true : r.claimedAt);
  return s ? k.intl.formatToPlainString(k.t.lOVr0N, {
    claimDate: l
  }) : null != o ? o.description : null != a ? a : null
}

function eA(e) {
  return [(0, l.e7)([A.Z], () => A.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, S.OR)(e, t), [e])]
}

function eC(e, t) {
  let [n, a] = eA(e.id), s = r.useMemo(() => (0, T.yH)(e), [e]), l = s.includes(x.cd.DESKTOP), c = s.includes(x.cd.CONSOLE), u = ea(e), d = es(e), f = r.useMemo(() => (0, i.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => x.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => x.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => x.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => x.cd.DESKTOP).exhaustive(), [t]), _ = u ? x.cd.DESKTOP : d ? x.cd.CONSOLE : null;
  return [r.useMemo(() => (0, i.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: x.cd.CONSOLE
  }, () => C.LI.CONSOLE).with({
    currentProgressingPlatform: x.cd.DESKTOP
  }, () => C.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: x.cd.CONSOLE
  }, () => C.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: x.cd.DESKTOP
  }, () => C.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: x.cd.CONSOLE
  }, () => C.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: x.cd.DESKTOP
  }, () => C.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? C.LI.SELECT : c ? C.LI.CONSOLE : C.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, a]
}

function eN(e) {
  var t, n;
  let r = ef(e),
    i = ed(e),
    [a] = eC(e, i),
    s = er(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === C.LI.DESKTOP),
    p = (0, y.isWeb)() && _ && !(0, T.Gd)(e),
    h = (0, y.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(k.intl.string(k.t.MFGxFB)), p && m.push(k.intl.string(k.t.BV6xDg)), m
}

function eR(e) {
  var t;
  return null != (t = (0, l.e7)([A.Z], () => A.Z.quests).get(e)) ? t : null
}

function eP(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: o
  } = e, a = r.useRef(null);
  r.useEffect(() => {
    null != o && a.current !== t && ((0, v.Ic)({
      mode: t,
      prevMode: a.current,
      questContent: n,
      questId: o,
      sourceQuestContent: i
    }), a.current = t)
  }, [o, n, t, i]), r.useEffect(() => {
    if (null != o) return () => {
      (0, v.Ic)({
        mode: null,
        prevMode: a.current,
        questContent: n,
        questId: o,
        sourceQuestContent: i
      })
    }
  }, [o, n, i])
}

function ew(e) {
  var t, n;
  let r = (0, l.e7)([p.default], () => p.default.locale),
    i = ed(e),
    [o] = eC(e, i),
    a = ef(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    c = null != a ? a.percentComplete : i.percentComplete;
  if (s) return k.intl.string(k.t["ij5E//"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && c > 0) {
    let e = (0, b.T3)(r, c, {
      roundingMode: "floor"
    });
    return k.intl.formatToPlainString(k.t.lVZaXF, {
      percent: e
    })
  }
  return o === C.LI.SELECT ? k.intl.string(k.t.EMrUHR) : (0, T.$J)(e) ? k.intl.string(k.t.mOrpXF) : k.intl.string(k.t["7e5k7O"])
}

function eD(e) {
  var t;
  let {
    quest: n,
    isExpanded: i,
    sourceQuestContent: o,
    activeScreen: a
  } = e, s = eo(r.useMemo(() => D.r.build(n.config).rewardsExpireAt, [n.config])), l = ed(n), c = ef(n), u = (null == (t = n.userStatus) ? true : t.completedAt) != null, d = ec(n), f = (0, P.DD)({
    quest: n,
    location: x.dr.QUESTS_BAR,
    questContent: C.jn.QUEST_BAR_V2,
    taskDetails: l,
    sourceQuestContent: o
  }), _ = null != c ? c.percentComplete : l.percentComplete;
  if (u) return k.intl.formatToPlainString(k.t.APddvL, {
    expirationDate: s
  });
  if (i)
    if (a === C.LI.SELECT) return k.intl.string(k.t.sWUpNz);
    else return f;
  if ((0, T.q8)(n)) return k.intl.string(k.t["o+e9ys"]);
  if (_ > 0)
    if (!d) return k.intl.string(k.t.mOrpXF);
    else return (0, T.AV)({
      quest: n,
      taskDetails: l,
      thirdPartyTaskDetails: null != c ? c : true
    });
  return k.intl.string(k.t.S6UUc3)
}

function ex(e, t) {
  let n = (0, l.e7)([A.Z], () => A.Z.getQuest(e), [e]),
    i = (0, c.ZP)(),
    o = r.useMemo(() => (null == n ? true : n.config.features.includes(x.S7.QUESTS_CDN)) === true, [n]);
  return r.useMemo(() => (null == n ? true : n.config.cosponsorMetadata) == null ? null : (0, w.Rt)(e, n.config.cosponsorMetadata.logotype, {
    theme: null != t ? t : (0, s.wj)(i) ? L.BRd.DARK : L.BRd.LIGHT,
    newCdn: o
  }), [i, t, e, null == n ? true : n.config.cosponsorMetadata, o])
}

function eL(e) {
  let t = D.r.build(e).defaultRewardName,
    n = (0, T.Kr)(e),
    r = (0, T.FX)(e),
    i = (0, T._p)(e),
    o = (0, T.f$)(e),
    a = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
    s = (0, O.I5)(a, j.p9.TIER_2);
  if (null == n) return k.intl.formatToPlainString(k.t.l9uXLy, {
    decorationName: t
  });
  let c = k.intl.formatToPlainString(k.t.o97tNj, {
      rewardName: t
    }),
    u = k.intl.formatToPlainString(k.t.PkyRZm, {
      rewardName: t,
      expirationDate: r
    }),
    d = k.intl.formatToPlainString(k.t.ie4YKy, {
      rewardName: t,
      duration: n
    }),
    f = k.intl.formatToPlainString(k.t.yCpc0d, {
      duration: n,
      rewardName: t
    }),
    _ = s ? c : d,
    p = s ? u : f,
    h = i ? _ : p;
  return o ? h : k.intl.formatToPlainString(k.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function ej(e) {
  let t = (0, l.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, d.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, _.uL)(L.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}