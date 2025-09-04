/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => eL,
  B6: () => eu,
  Bd: () => eP,
  GI: () => eS,
  Gd: () => eU,
  I: () => eR,
  J2: () => Z,
  Jf: () => eg,
  KX: () => eA,
  OH: () => eC,
  Qy: () => eG,
  Rf: () => em,
  Yj: () => ec,
  _Q: () => eN,
  _s: () => eT,
  bA: () => ea,
  e5: () => ei,
  eN: () => eo,
  eQ: () => eM,
  fN: () => eO,
  iO: () => ey,
  kJ: () => ev,
  me: () => eD,
  qI: () => ej,
  qb: () => ex,
  t5: () => eb,
  tP: () => el,
  uA: () => eE,
  vf: () => ek,
  z: () => ep,
  z6: () => eI,
  zB: () => eB
}), require("./388685.js"), require("./642613.js"), require("./290780.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
var Chunk647438 = require("./647438.js");
require("./512722.js");
var Chunk392711 = require("./392711.js"),
  Chunk278074 = require("./278074.js"),
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
let U = false,
  G = 1,
  B = "1410358070831480904";

function Z() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = Chunk647438.useState(false),
    i = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]),
    a = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.excludedQuests.values()]),
    {
      isFetchingCurrentQuests: o,
      lastFetchedCurrentQuests: s
    } = (0, Chunk442837.cj)([Chunk569984.Z], () => ({
      isFetchingCurrentQuests: Chunk569984.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: Chunk569984.Z.lastFetchedCurrentQuests
    })),
    l = (0, Chunk977156.c)({
      location: Chunk46140.dr.USE_QUESTS
    }),
    u = Chunk937797.DL.useConfig({
      location: Chunk46140.dr.USE_QUESTS
    });
  return Chunk647438.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk959078) && Chunk780384 && !exports && !Chunk754700) {
      if (require(true), (0, Chunk272008.xw)(), !Chunk410030.enabled || "focused" === Chunk15624.Z.getState())(0, Chunk272008.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk780384, exports, Chunk754700, Chunk959078, module.callerSource, Chunk410030.enabled]), {
    quests: Chunk392711,
    excludedQuests: Chunk278074,
    isFetchingCurrentQuests: Chunk754700,
    hasFetched: exports
  }
}

function F(e, t) {
  var n, r, i, a;
  let o = !(0, T.zi)(e),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
    c = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
    u = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
  return o ? s !== l ? s ? G : U : c !== u ? c ? U : G : et(e.config.expiresAt, t.config.expiresAt, 1) : s !== l ? s ? U : G : c !== u ? c ? U : G : et(e.config.expiresAt, t.config.expiresAt, 0)
}

function V(e, t) {
  return et(e.config.startsAt, t.config.startsAt, 0)
}

function H(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    a = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == a ? et(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == a ? U : null == i && null != a ? G : et(i, a, 0)
}

function Y(e, t) {
  return et(e.config.expiresAt, t.config.expiresAt, 1)
}

function W(e) {
  return function(t, n) {
    let r = !(0, T.zi)(t);
    return !(0, T.zi)(n) !== r ? r ? U : G : e(t, n)
  }
}

function K(e) {
  switch (e) {
    case L.yq.MOST_RECENT:
      return V;
    case L.yq.RECENTLY_ENROLLED:
      return H;
    case L.yq.EXPIRING_SOON:
      return Y;
    case L.yq.SUGGESTED:
    default:
      return F
  }
}

function z(e, t) {
  switch (t) {
    case L.XJ.TASK_VIDEO:
      return (0, T.q8)(e);
    case L.XJ.TASK_PLAY:
      return (0, T.Nj)({
        quest: e
      }) || (0, T.Dr)({
        quest: e
      }) || (0, T.pO)(e);
    default:
      returnfalse
  }
}

function q(e, t) {
  switch (t) {
    case L.XJ.REWARD_VIRTUAL_CURRENCY:
      return (0, T.xN)(e.config);
    case L.XJ.REWARD_COLLECTIBLE:
      return (0, T.Xv)(e.config);
    case L.XJ.REWARD_IN_GAME:
      return (0, T.vQ)(e.config);
    default:
      returnfalse
  }
}

function X(e) {
  switch (e) {
    case "task":
      return z;
    case "reward":
      return q
  }
}

function Q(e, t, n) {
  let r = X(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function J(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return Q(e, n, r)
  }))
}
let $ = {};

function ee(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : $,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : J(e, r),
    a = W(K(n));
  return i.sort(a)
}

function et(e, t, n) {
  let r = 0 === n ? U : G;
  return e.localeCompare(t) * r
}

function en(e, t, n) {
  let i = r.useRef([]),
    a = r.useRef(t.sortMethod),
    o = r.useRef(t.filters),
    s = r.useRef(n);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (i.current.length > 0 && i.current.length === e.length && a.current === t.sortMethod && o.current === t.filters && s.current === n) return i.current;
    let r = ee(e, t);
    if (n) {
      let e = r.findIndex(e => e.id === B);
      if (e > 0) {
        var l;
        let t = r[e];
        (null == (l = t.userStatus) ? true : l.completedAt) == null && (r.splice(e, 1), r.unshift(t))
      }
    }
    let c = r.map(e => e.id);
    return i.current = c, a.current = t.sortMethod, o.current = t.filters, s.current = n, c
  }, [e, t, n])
}

function er(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? U : G : et(x.r.build(e.config).rewardsExpireAt, x.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var ei = function(e) {
  return e.ALL = "all", e.CLAIMED = "claimed", e
}({});

function ea(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : $,
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    {
      quests: r,
      isFetchingCurrentQuests: i,
      hasFetched: a
    } = Z({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    o = new Map(r.map(e => [e.id, e])),
    s = en(r, t, n),
    l = er(r),
    c = [],
    u = [];
  for (let t of c = "all" === e ? s : l) {
    let e = o.get(t);
    null != e && u.push(e)
  }
  return {
    quests: u,
    isFetchingCurrentQuests: i,
    hasFetched: a
  }
}

function eo() {
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

function es() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function el(e) {
  return (0, c.e7)([C.Z], () => null != e && C.Z.isQuestExpired(e.id), [e])
}

function ec(e) {
  return r.useMemo(() => (0, T.q8)(e) || (0, T.Pb)(e) || (0, T.pO)(e) || (0, T.Vl)(e) ? k.intl.string(k.t.hvVgAQ) : k.intl.string(k.t.lwQdjI), [e])
}

function eu(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([h.default], () => h.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function ed(e) {
  return (0, c.e7)([C.Z], () => C.Z.isProgressingOnDesktop(e.id))
}

function ef(e) {
  return r.useMemo(() => (0, T.Bz)(e), [e])
}

function e_(e) {
  let t = (0, c.e7)([C.Z], () => C.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, T.BM)(e), [e, t])
}

function ep(e) {
  let t = ed(e),
    n = ef(e),
    r = e_(e);
  return t || n || r
}
let eh = 1,
  em = e => {
    let t = r.useCallback(() => (0, T.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = ep(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, E.Z.Millis.SECOND * eh);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eg(e) {
  return r.useMemo(() => (0, T.b7)(e), [e])
}
let eE = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eT({
    quest: t
  }), a = (0, S.WD)();
  return () => {
    i ? (0, T.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: I.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, T.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: I.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eb(e, t, n, r) {
  let {
    targetMinutes: i
  } = em(e), a = eg(e), o = eE({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  });
  if ((0, T.$J)(e) && !(0, T.Nj)({
      quest: e
    })) return k.intl.format(k.t["l4S+cX"], {
    minutes: i,
    onClick: o,
    gameTitle: x.r.build(e.config).application.name
  });
  if ((0, T.$J)(e)) return k.intl.format(k.t.Ajlcd3, {
    minutes: i,
    onClick: o,
    gameTitle: x.r.build(e.config).application.name
  });
  if ((0, T.q8)(e)) {
    let t = x.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? k.intl.string(k.t["o+e9ys"]) : k.intl.formatToPlainString(k.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
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

function ey() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = Z({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = es();
  return Chunk647438.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk647438;
    for (let t of module) {
      var i;
      if (!(0, Chunk509212.vR)(exports, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk392711) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk647438.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        a = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !Chunk278074) {
        Chunk647438.push(exports);
        continue
      }
    }
    return Chunk647438
  }, [module, require, exports])
}

function eO(e) {
  let t = (0, c.e7)([C.Z], () => C.Z.quests),
    n = r.useMemo(() => {
      let n = (0, T.NI)(t, L.tt);
      return (0, T.Jg)(n, e)
    }, [e, t]);
  return el(n) ? null : n
}

function ev(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, A.Wf)(e),
    handleProgress: t => (0, A.Wf)(e, t),
    handleResetStatusClick: () => (0, A.eT)(e),
    handleResetDismissibilityClick: () => (0, A.T0)(e),
    handleOverrideDeliveryClick: () => (0, A.EW)(e)
  }), [e])
}

function eI() {
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
  } = Chunk647438.useMemo(() => {
    let e = exports.filter(e => false === e.revoked),
      n = module.filter(e => e.type === j.ABu.XBOX),
      r = module.filter(e => e.type === j.ABu.PLAYSTATION),
      i = require.concat(Chunk647438);
    return {
      xboxAccounts: require,
      playstationAccounts: Chunk647438,
      xboxAndPlaystationAccounts: Chunk392711
    }
  }, [exports]);
  return {
    fetching: module,
    xboxAccounts: require,
    playstationAccounts: Chunk392711,
    xboxAndPlaystationAccounts: Chunk278074
  }
}
let eS = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [o, l] = r.useState([]), [u, d] = r.useState(false), f = (0, c.e7)([m.Z], () => m.Z.getAccounts());
    return r.useEffect(() => {
      l(e => e.filter(e => e.type !== s.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, A.CS)(t, n), l(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: o
    }
  },
  eT = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eI(), r = ep(t), i = 0 === n.length;
    return (0, T.$J)(t) && i && !r
  },
  eA = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eI(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
      psHelpdeskArticle: Chunk278074,
      xboxHelpdeskArticle: Chunk754700
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7np, {
      helpdeskArticle: Chunk647438 ? Chunk278074 : Chunk754700
    });
    return {
      message: Chunk392711 ? Chunk780384 : Chunk959078,
      xboxURL: Chunk754700,
      playstationURL: Chunk278074
    }
  };
var eC = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eN(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = em(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eR(e) {
  let t = (0, c.e7)([h.default], () => h.default.locale),
    {
      percentComplete: n
    } = em(e),
    r = eg(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, y.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function eP(e, t) {
  var n, r;
  let i = em(e),
    a = (0, T.b7)(e),
    o = (0, w.DD)({
      quest: e,
      taskDetails: i,
      location: L.dr.QUEST_HOME_DESKTOP,
      questContent: N.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t
    }),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = eu(null == (r = e.userStatus) ? true : r.claimedAt);
  return s ? k.intl.formatToPlainString(k.t.lOVr0N, {
    claimDate: l
  }) : null != a ? a.description : null != o ? o : null
}

function ew(e) {
  return [(0, c.e7)([C.Z], () => C.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, A.OR)(e, t), [e])]
}

function eD(e, t) {
  let [n, i] = ew(e.id), s = r.useMemo(() => (0, T.yH)(e), [e]), l = s.includes(L.cd.DESKTOP), c = s.includes(L.cd.CONSOLE), u = ed(e), d = ef(e), f = r.useMemo(() => (0, a.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => L.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => L.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => L.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => L.cd.DESKTOP).exhaustive(), [t]), _ = u ? L.cd.DESKTOP : d ? L.cd.CONSOLE : null;
  return [r.useMemo(() => (0, a.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: L.cd.CONSOLE
  }, () => N.LI.CONSOLE).with({
    currentProgressingPlatform: L.cd.DESKTOP
  }, () => N.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: L.cd.CONSOLE
  }, () => N.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: L.cd.DESKTOP
  }, () => N.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: L.cd.CONSOLE
  }, () => N.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: L.cd.DESKTOP
  }, () => N.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? N.LI.SELECT : c ? N.LI.CONSOLE : N.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, i]
}

function ex(e) {
  var t, n;
  let r = eg(e),
    i = em(e),
    [a] = eD(e, i),
    s = el(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === N.LI.DESKTOP),
    p = (0, O.isWeb)() && _ && !(0, T.Gd)(e),
    h = (0, O.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(k.intl.string(k.t.MFGxFB)), p && m.push(k.intl.string(k.t.BV6xDg)), m
}

function eL(e) {
  var t;
  return null != (t = (0, c.e7)([C.Z], () => C.Z.quests).get(e)) ? t : null
}

function ej(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, I.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, I.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function eM(e) {
  var t, n;
  let r = (0, c.e7)([h.default], () => h.default.locale),
    i = em(e),
    [a] = eD(e, i),
    o = eg(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return k.intl.string(k.t["ij5E//"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, y.T3)(r, l, {
      roundingMode: "floor"
    });
    return k.intl.formatToPlainString(k.t.lVZaXF, {
      percent: e
    })
  }
  return a === N.LI.SELECT ? k.intl.string(k.t.EMrUHR) : (0, T.$J)(e) ? k.intl.string(k.t.mOrpXF) : k.intl.string(k.t["7e5k7O"])
}

function ek(e) {
  var t;
  let {
    quest: n,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o
  } = e, s = eu(r.useMemo(() => x.r.build(n.config).rewardsExpireAt, [n.config])), l = em(n), c = eg(n), u = (null == (t = n.userStatus) ? true : t.completedAt) != null, d = ep(n), f = (0, w.DD)({
    quest: n,
    location: L.dr.QUESTS_BAR,
    questContent: N.jn.QUEST_BAR_V2,
    taskDetails: l,
    sourceQuestContent: a
  }), _ = null != c ? c.percentComplete : l.percentComplete;
  if (u) return k.intl.formatToPlainString(k.t.APddvL, {
    expirationDate: s
  });
  if (i)
    if (o === N.LI.SELECT) return k.intl.string(k.t.sWUpNz);
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

function eU(e, t) {
  let n = (0, c.e7)([C.Z], () => C.Z.getQuest(e), [e]),
    i = (0, u.ZP)(),
    a = r.useMemo(() => (null == n ? true : n.config.features.includes(L.S7.QUESTS_CDN)) === true, [n]);
  return r.useMemo(() => (null == n ? true : n.config.cosponsorMetadata) == null ? null : (0, D.Rt)(e, n.config.cosponsorMetadata.logotype, {
    theme: null != t ? t : (0, l.wj)(i) ? j.BRd.DARK : j.BRd.LIGHT,
    newCdn: a
  }), [i, t, e, null == n ? true : n.config.cosponsorMetadata, a])
}

function eG(e) {
  let t = x.r.build(e).defaultRewardName,
    n = (0, T.Kr)(e),
    r = (0, T.FX)(e),
    i = (0, T._p)(e),
    a = (0, T.f$)(e),
    o = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
    s = (0, v.I5)(o, M.p9.TIER_2);
  if (null == n) return k.intl.formatToPlainString(k.t.l9uXLy, {
    decorationName: t
  });
  let l = k.intl.formatToPlainString(k.t.o97tNj, {
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
    _ = s ? l : d,
    p = s ? u : f,
    h = i ? _ : p;
  return a ? h : k.intl.formatToPlainString(k.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function eB(e) {
  let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, p.uL)(j.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}