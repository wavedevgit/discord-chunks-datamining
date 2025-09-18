/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => ej,
  B6: () => ed,
  Bd: () => ew,
  GI: () => eS,
  Gd: () => eG,
  I: () => eP,
  J2: () => Z,
  Jf: () => eE,
  KX: () => eC,
  OH: () => eN,
  Qy: () => eB,
  Rf: () => eg,
  Wi: () => ec,
  Yj: () => eu,
  _Q: () => eR,
  _s: () => eA,
  bA: () => ea,
  e5: () => ei,
  eN: () => eo,
  eQ: () => ek,
  fN: () => ev,
  iO: () => eO,
  kJ: () => eI,
  me: () => ex,
  qI: () => eM,
  qb: () => eL,
  t5: () => ey,
  tP: () => el,
  uA: () => eb,
  vf: () => eU,
  z: () => eh,
  z6: () => eT,
  zB: () => eZ
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
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
  Chunk592125 = require("./592125.js"),
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
let G = false,
  B = 1;

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
  let o = !(0, A.zi)(e),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
    c = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
    u = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
  return o ? s !== l ? s ? B : G : c !== u ? c ? G : B : et(e.config.expiresAt, t.config.expiresAt, 1) : s !== l ? s ? G : B : c !== u ? c ? G : B : et(e.config.expiresAt, t.config.expiresAt, 0)
}

function V(e, t) {
  return et(e.config.startsAt, t.config.startsAt, 0)
}

function H(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    a = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == a ? et(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == a ? G : null == i && null != a ? B : et(i, a, 0)
}

function Y(e, t) {
  return et(e.config.expiresAt, t.config.expiresAt, 1)
}

function W(e) {
  return function(t, n) {
    let r = !(0, A.zi)(t);
    return !(0, A.zi)(n) !== r ? r ? G : B : e(t, n)
  }
}

function K(e) {
  switch (e) {
    case j.yq.MOST_RECENT:
      return V;
    case j.yq.RECENTLY_ENROLLED:
      return H;
    case j.yq.EXPIRING_SOON:
      return Y;
    case j.yq.SUGGESTED:
    default:
      return F
  }
}

function z(e, t) {
  switch (t) {
    case j.XJ.TASK_VIDEO:
      return (0, A.q8)(e);
    case j.XJ.TASK_PLAY:
      return (0, A.Nj)({
        quest: e
      }) || (0, A.Dr)({
        quest: e
      }) || (0, A.pO)(e);
    default:
      returnfalse
  }
}

function q(e, t) {
  switch (t) {
    case j.XJ.REWARD_VIRTUAL_CURRENCY:
      return (0, A.xN)(e.config);
    case j.XJ.REWARD_COLLECTIBLE:
      return (0, A.Xv)(e.config);
    case j.XJ.REWARD_IN_GAME:
      return (0, A.vQ)(e.config);
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
  let r = 0 === n ? G : B;
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
    let r = ee(e, t).map(e => e.id);
    return i.current = r, a.current = t.sortMethod, o.current = t.filters, s.current = n, r
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? G : B : et(L.r.build(e.config).rewardsExpireAt, L.r.build(t.config).rewardsExpireAt, 0)
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
  return (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e])
}

function ec(e, t, n) {
  var r;
  let i = (0, c.e7)([m.Z], () => {
      var e;
      return null != (e = m.Z.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []),
    o = (0, c.e7)([E.default], () => {
      var e;
      return null == (e = E.default.getCurrentUser()) ? true : e.id
    }) === n,
    s = (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
  if (null == e || a || s || o) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, A.Rc)(t, i);
  return !l || !!u
}

function eu(e) {
  return r.useMemo(() => (0, A.q8)(e) || (0, A.Pb)(e) || (0, A.pO)(e) || (0, A.Vl)(e) ? U.intl.string(U.t.hvVgAQ) : U.intl.string(U.t.lwQdjI), [e])
}

function ed(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([h.default], () => h.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function ef(e) {
  return (0, c.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id))
}

function e_(e) {
  return r.useMemo(() => (0, A.Bz)(e), [e])
}

function ep(e) {
  let t = (0, c.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, A.BM)(e), [e, t])
}

function eh(e) {
  let t = ef(e),
    n = e_(e),
    r = ep(e);
  return t || n || r
}
let em = 1,
  eg = e => {
    let t = r.useCallback(() => (0, A.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = eh(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, b.Z.Millis.SECOND * em);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eE(e) {
  return r.useMemo(() => (0, A.b7)(e), [e])
}
let eb = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eA({
    quest: t
  }), a = (0, S.WD)();
  return () => {
    i ? (0, A.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: T.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, A.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: T.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function ey(e, t, n, r) {
  let {
    targetMinutes: i
  } = eg(e), a = eE(e), o = eb({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, A.Pb)(e);
  if ((0, A.$J)(e) && !(0, A.Nj)({
      quest: e
    })) return U.intl.format(U.t["l4S+cX"], {
    minutes: i,
    onClick: o,
    gameTitle: L.r.build(e.config).application.name
  });
  if ((0, A.$J)(e)) return s ? U.intl.format(U.t.gbtCpa, {
    onClick: o,
    minutes: i
  }) : U.intl.format(U.t.Ajlcd3, {
    minutes: i,
    onClick: o,
    gameTitle: L.r.build(e.config).application.name
  });
  if (s) return U.intl.format(U.t.Hu8SKS, {
    targetMinutes: i
  });
  if ((0, A.q8)(e)) {
    let t = L.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? U.intl.string(U.t["o+e9ys"]) : U.intl.formatToPlainString(U.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, A.pO)(e))
    if ((0, A.KM)(e)) return U.intl.format(U.t["1NaRSk"], {
      minutes: i
    });
    else return U.intl.format(U.t.xHXCyc, {
      minutes: i,
      activityName: e.config.application.name
    });
  let l = U.t["6zWtV1"];
  return (0, A.Nj)({
    quest: e
  }) && (l = U.t["wmOh/v"]), U.intl.format(l, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eO() {
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

function ev(e) {
  let t = (0, c.e7)([N.Z], () => N.Z.quests),
    n = r.useMemo(() => {
      let n = (0, A.NI)(t, j.tt);
      return (0, A.Jg)(n, e)
    }, [e, t]);
  return el(n) ? null : n
}

function eI(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, C.Wf)(e),
    handleProgress: t => (0, C.Wf)(e, t),
    handleResetStatusClick: () => (0, C.eT)(e),
    handleResetDismissibilityClick: () => (0, C.T0)(e),
    handleOverrideDeliveryClick: () => (0, C.EW)(e)
  }), [e])
}

function eT() {
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
      n = module.filter(e => e.type === M.ABu.XBOX),
      r = module.filter(e => e.type === M.ABu.PLAYSTATION),
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
    } = e, [o, l] = r.useState([]), [u, d] = r.useState(false), f = (0, c.e7)([g.Z], () => g.Z.getAccounts());
    return r.useEffect(() => {
      l(e => e.filter(e => e.type !== s.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, C.CS)(t, n), l(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: o
    }
  },
  eA = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eT(), r = eh(t), i = 0 === n.length;
    return (0, A.$J)(t) && i && !r
  },
  eC = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eT(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
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
var eN = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eR(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = eg(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eP(e) {
  let t = (0, c.e7)([h.default], () => h.default.locale),
    {
      percentComplete: n
    } = eg(e),
    r = eE(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, O.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function ew(e, t, n) {
  var r, i;
  let a = eg(e),
    o = (0, A.b7)(e),
    s = (0, D.DD)({
      quest: e,
      taskDetails: a,
      location: j.dr.QUEST_HOME_DESKTOP,
      questContent: R.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t,
      popoutTargetElementRef: n
    }),
    l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    c = ed(null == (i = e.userStatus) ? true : i.claimedAt);
  return l ? U.intl.formatToPlainString(U.t.lOVr0N, {
    claimDate: c
  }) : null != o ? o.description : null != s ? s : null
}

function eD(e) {
  return [(0, c.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, C.OR)(e, t), [e])]
}

function ex(e, t) {
  let [n, i] = eD(e.id), s = r.useMemo(() => (0, A.yH)(e), [e]), l = s.includes(j.cd.DESKTOP), c = s.includes(j.cd.CONSOLE), u = ef(e), d = e_(e), f = r.useMemo(() => (0, a.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => j.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => j.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => j.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => j.cd.DESKTOP).exhaustive(), [t]), _ = u ? j.cd.DESKTOP : d ? j.cd.CONSOLE : null;
  return [r.useMemo(() => (0, a.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: j.cd.CONSOLE
  }, () => R.LI.CONSOLE).with({
    currentProgressingPlatform: j.cd.DESKTOP
  }, () => R.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: j.cd.CONSOLE
  }, () => R.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: j.cd.DESKTOP
  }, () => R.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: j.cd.CONSOLE
  }, () => R.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: j.cd.DESKTOP
  }, () => R.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? R.LI.SELECT : c ? R.LI.CONSOLE : R.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, i]
}

function eL(e) {
  var t, n;
  let r = eE(e),
    i = eg(e),
    [a] = ex(e, i),
    s = el(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === R.LI.DESKTOP),
    p = (0, v.isWeb)() && _ && !(0, A.Gd)(e),
    h = (0, v.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(U.intl.string(U.t.MFGxFB)), p && m.push(U.intl.string(U.t.BV6xDg)), m
}

function ej(e) {
  var t;
  return null != (t = (0, c.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null
}

function eM(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, T.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, T.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function ek(e) {
  var t, n;
  let r = (0, c.e7)([h.default], () => h.default.locale),
    i = eg(e),
    [a] = ex(e, i),
    o = eE(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return U.intl.string(U.t["ij5E//"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, O.T3)(r, l, {
      roundingMode: "floor"
    });
    return U.intl.formatToPlainString(U.t.lVZaXF, {
      percent: e
    })
  }
  return a === R.LI.SELECT ? U.intl.string(U.t.EMrUHR) : (0, A.$J)(e) ? U.intl.string(U.t.mOrpXF) : U.intl.string(U.t["7e5k7O"])
}

function eU(e) {
  var t, n;
  let {
    quest: i,
    isExpanded: a,
    sourceQuestContent: o,
    activeScreen: s,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  } = e, d = ed(r.useMemo(() => L.r.build(i.config).rewardsExpireAt, [i.config])), f = eg(i), _ = eE(i), p = (null == (t = i.userStatus) ? true : t.completedAt) != null, h = (null == (n = i.userStatus) ? true : n.enrolledAt) != null, m = f.percentComplete > 0, g = eh(i), E = (0, D.DD)({
    quest: i,
    location: j.dr.QUESTS_BAR,
    questContent: R.jn.QUEST_BAR_V2,
    taskDetails: f,
    sourceQuestContent: o,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  }), b = null != _ ? _.percentComplete : f.percentComplete;
  if (p) return U.intl.formatToPlainString(U.t.APddvL, {
    expirationDate: d
  });
  if (a)
    if (s === R.LI.SELECT) return U.intl.string(U.t.sWUpNz);
    else {
      if (!(0, A.Pb)(i) || !h || m) return E;
      let e = L.r.build(i.config).defaultRewardNameWithArticle;
      return U.intl.format(U.t["1votFx"], {
        rewardNameWithArticle: e,
        targetMinutes: f.targetMinutes
      })
    } if ((0, A.q8)(i)) return U.intl.string(U.t["o+e9ys"]);
  if (b > 0)
    if (!g) return U.intl.string(U.t.mOrpXF);
    else return (0, A.AV)({
      quest: i,
      taskDetails: f,
      thirdPartyTaskDetails: null != _ ? _ : true
    });
  return U.intl.string(U.t.S6UUc3)
}

function eG(e, t) {
  let n = (0, c.e7)([N.Z], () => N.Z.getQuest(e), [e]),
    i = (0, u.ZP)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT;
    return (0, x.fh)(n, x.eC.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function eB(e) {
  let t = L.r.build(e).defaultRewardName,
    n = (0, A.Kr)(e),
    r = (0, A.FX)(e),
    i = (0, A._p)(e),
    a = (0, A.f$)(e),
    o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
    s = (0, I.I5)(o, k.p9.TIER_2);
  if (null == n) return U.intl.formatToPlainString(U.t.l9uXLy, {
    decorationName: t
  });
  let l = U.intl.formatToPlainString(U.t.o97tNj, {
      rewardName: t
    }),
    u = U.intl.formatToPlainString(U.t.PkyRZm, {
      rewardName: t,
      expirationDate: r
    }),
    d = U.intl.formatToPlainString(U.t.ie4YKy, {
      rewardName: t,
      duration: n
    }),
    f = U.intl.formatToPlainString(U.t.yCpc0d, {
      duration: n,
      rewardName: t
    }),
    _ = s ? l : d,
    p = s ? u : f,
    h = i ? _ : p;
  return a ? h : U.intl.formatToPlainString(U.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function eZ(e) {
  let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, p.uL)(M.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}