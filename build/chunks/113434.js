/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $I: () => eQ,
  B4: () => eG,
  B6: () => eh,
  Bd: () => eM,
  GI: () => eR,
  Gd: () => eV,
  I: () => ex,
  J2: () => H,
  Jf: () => ev,
  KX: () => eD,
  MP: () => eq,
  N8: () => eX,
  OH: () => ew,
  Qy: () => eH,
  Rf: () => eO,
  SU: () => eJ,
  Wi: () => e_,
  _Q: () => eL,
  _s: () => eP,
  aV: () => eK,
  bA: () => ec,
  e5: () => es,
  eN: () => eu,
  eQ: () => eZ,
  fN: () => eA,
  iO: () => eS,
  kJ: () => eC,
  ly: () => ep,
  me: () => ej,
  qI: () => eB,
  qb: () => eU,
  t5: () => eT,
  tP: () => ef,
  tR: () => el,
  uA: () => eI,
  vf: () => eF,
  z: () => eb,
  z1: () => ez,
  z6: () => eN,
  zB: () => eY
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
  Chunk626135 = require("./626135.js"),
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
  Chunk704161 = require("./704161.js"),
  Chunk36243 = require("./36243.js"),
  Chunk977156 = require("./977156.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let F = false,
  V = 1;

function H() {
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
      if (require(true), (0, Chunk272008.xw)(), !Chunk410030.enabled || "focused" === Chunk15624.Z.getState()) {
        let {
          enableNewRequestBehavior: t
        } = Chunk704161.Z.getConfig({
          location: "QuestHookUseQuests"
        });
        if (exports) return;
        (0, Chunk272008.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
      }
    }
  }, [module.fetchPolicy, Chunk780384, exports, Chunk754700, Chunk959078, module.callerSource, Chunk410030.enabled]), {
    quests: Chunk392711,
    excludedQuests: Chunk278074,
    isFetchingCurrentQuests: Chunk754700,
    hasFetched: exports
  }
}

function Y(e, t) {
  var n, r, i, a;
  let o = !(0, C.zi)(e),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
    c = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
    u = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
  return o ? s !== l ? s ? V : F : c !== u ? c ? F : V : ei(e.config.expiresAt, t.config.expiresAt, 1) : s !== l ? s ? F : V : c !== u ? c ? F : V : ei(e.config.expiresAt, t.config.expiresAt, 0)
}

function W(e, t) {
  return ei(e.config.startsAt, t.config.startsAt, 0)
}

function K(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    a = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == a ? ei(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == a ? F : null == i && null != a ? V : ei(i, a, 0)
}

function z(e, t) {
  return ei(e.config.expiresAt, t.config.expiresAt, 1)
}

function q(e) {
  return function(t, n) {
    let r = !(0, C.zi)(t);
    return !(0, C.zi)(n) !== r ? r ? F : V : e(t, n)
  }
}

function X(e) {
  switch (e) {
    case U.yq.MOST_RECENT:
      return W;
    case U.yq.RECENTLY_ENROLLED:
      return K;
    case U.yq.EXPIRING_SOON:
      return z;
    case U.yq.SUGGESTED:
    default:
      return Y
  }
}

function Q(e, t) {
  switch (t) {
    case U.oH.VIDEO:
      return (0, C.q8)(e);
    case U.oH.PLAY:
      return (0, C.Nj)({
        quest: e
      }) || (0, C.Dr)({
        quest: e
      }) || (0, C.pO)(e);
    default:
      returnfalse
  }
}

function J(e, t) {
  switch (t) {
    case U.UP.VIRTUAL_CURRENCY:
      return (0, C.xN)(e.config);
    case U.UP.COLLECTIBLE:
      return (0, C.Xv)(e.config);
    case U.UP.IN_GAME:
      return (0, C.vQ)(e.config) || (0, C.wj)(e.config);
    default:
      returnfalse
  }
}

function $(e) {
  switch (e) {
    case "task":
      return Q;
    case "reward":
      return J
  }
}

function ee(e, t, n) {
  let r = $(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function et(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return ee(e, n, r)
  }))
}
let en = {};

function er(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : en,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : et(e, r),
    a = q(X(n));
  return i.sort(a)
}

function ei(e, t, n) {
  let r = 0 === n ? F : V;
  return e.localeCompare(t) * r
}

function ea(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    a = r.useRef(t.filters),
    o = r.useRef(0);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters) return n.current;
    let r = er(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, a.current = t.filters, o.current = e.length, r
  }, [e, t])
}

function eo(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? F : V : ei(j.r.build(e.config).rewardsExpireAt, j.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var es = function(e) {
    return e.ALL = "all", e.CLAIMED = "claimed", e.PREVIEW_TOOL = "preview_tool", e
  }({}),
  el = function(e) {
    return e.TAB = "tab", e.QUEST_ID = "quest_id", e
  }({});

function ec(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : en,
    {
      quests: n,
      isFetchingCurrentQuests: r,
      hasFetched: i
    } = H({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    a = new Map(n.map(e => [e.id, e])),
    o = ea(n, t),
    s = eo(n),
    l = [],
    c = [];
  for (let t of l = "all" === e ? o : s) {
    let e = a.get(t);
    null != e && c.push(e)
  }
  return {
    quests: c,
    isFetchingCurrentQuests: r,
    hasFetched: i
  }
}

function eu() {
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

function ed() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function ef(e) {
  return (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e])
}

function e_(e, t, n) {
  var r;
  let i = (0, c.e7)([m.Z], () => {
      var e;
      return null != (e = m.Z.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []),
    o = (0, c.e7)([E.default], () => {
      var e;
      return null == (e = E.default.getCurrentUser()) ? true : e.id
    }) === n,
    s = (0, c.e7)([R.Z], () => null != e && R.Z.isQuestExpired(e.id), [e]);
  if (null == e || a || s || o) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, C.Rc)(t, i);
  return !l || !!u
}

function ep(e) {
  return r.useMemo(() => {
    var t;
    let n = null == (t = e.config.ctaConfig) ? true : t.buttonLabel;
    return null != n ? n : (0, C.q8)(e) || (0, C.Pb)(e) || (0, C.pO)(e) || (0, C.Vl)(e) || e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST) ? Z.intl.string(Z.t.hvVgAZ) : Z.intl.string(Z.t.lwQdjB)
  }, [e])
}

function eh(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([h.default], () => h.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function em(e) {
  return (0, c.e7)([R.Z], () => R.Z.isProgressingOnDesktop(e.id))
}

function eg(e) {
  return r.useMemo(() => (0, C.Bz)(e), [e])
}

function eE(e) {
  let t = (0, c.e7)([R.Z], () => R.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, C.BM)(e), [e, t])
}

function eb(e) {
  let t = em(e),
    n = eg(e),
    r = eE(e);
  return t || n || r
}
let ey = 1,
  eO = e => {
    let t = r.useCallback(() => (0, C.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = eb(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, y.Z.Millis.SECOND * ey);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function ev(e) {
  return r.useMemo(() => (0, C.b7)(e), [e])
}
let eI = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eP({
    quest: t
  }), a = (0, A.WD)();
  return () => {
    i ? (0, C.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: S.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, C.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: S.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eT(e, t, n, r) {
  let {
    targetMinutes: i
  } = eO(e), a = ev(e), o = eI({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, C.Pb)(e);
  if ((0, C.$J)(e) && !(0, C.Nj)({
      quest: e
    })) return Z.intl.format(Z.t["l4S+cQ"], {
    minutes: i,
    onClick: o,
    gameTitle: j.r.build(e.config).application.name
  });
  if ((0, C.$J)(e)) return s ? Z.intl.format(Z.t.gbtCpW, {
    onClick: o,
    minutes: i
  }) : Z.intl.format(Z.t.Ajlcd7, {
    minutes: i,
    onClick: o,
    gameTitle: j.r.build(e.config).application.name
  });
  if (s) return Z.intl.format(Z.t.Hu8SKW, {
    targetMinutes: i
  });
  if ((0, C.q8)(e)) {
    let t = j.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? Z.intl.string(Z.t["o+e9yh"]) : Z.intl.formatToPlainString(Z.t["9m9Mna"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, C.pO)(e))
    if ((0, C.KM)(e)) return Z.intl.format(Z.t["1NaRSs"], {
      minutes: i
    });
    else return Z.intl.format(Z.t.xHXCyf, {
      minutes: i,
      activityName: e.config.messages.gameTitle
    });
  let l = Z.t["6zWtV8"];
  return (0, C.Nj)({
    quest: e
  }) && (l = e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST) ? Z.t.fe7Xec : Z.t["wmOh/q"]), Z.intl.format(l, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eS() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = H({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = ed();
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

function eA(e) {
  let t = (0, c.e7)([R.Z], () => R.Z.quests),
    n = r.useMemo(() => {
      let n = (0, C.NI)(t, U.tt);
      return (0, C.Jg)(n, e)
    }, [e, t]);
  return ef(n) ? null : n
}

function eC(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, N.Wf)(e),
    handleProgress: t => (0, N.Wf)(e, t),
    handleResetStatusClick: () => (0, N.eT)(e),
    handleResetDismissibilityClick: () => (0, N.T0)(e),
    handleOverrideDeliveryClick: () => (0, N.EW)(e)
  }), [e])
}

function eN() {
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
      n = module.filter(e => e.type === G.ABu.XBOX),
      r = module.filter(e => e.type === G.ABu.PLAYSTATION),
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
let eR = e => {
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
          e = await (0, N.CS)(t, n), l(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: o
    }
  },
  eP = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eN(), r = eb(t), i = 0 === n.length;
    return (0, C.$J)(t) && i && !r
  },
  eD = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eN(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DG, {
      psHelpdeskArticle: Chunk278074,
      xboxHelpdeskArticle: Chunk754700
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7nh, {
      helpdeskArticle: Chunk647438 ? Chunk278074 : Chunk754700
    });
    return {
      message: Chunk392711 ? Chunk780384 : Chunk959078,
      xboxURL: Chunk754700,
      playstationURL: Chunk278074
    }
  };
var ew = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eL(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = eO(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function ex(e) {
  let t = (0, c.e7)([h.default], () => h.default.locale),
    {
      percentComplete: n
    } = eO(e),
    r = ev(e),
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

function eM(e, t, n) {
  var r, i;
  let a = eO(e),
    o = (0, C.b7)(e),
    s = (0, M.DD)({
      quest: e,
      taskDetails: a,
      location: U.dr.QUEST_HOME_DESKTOP,
      questContent: P.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t,
      popoutTargetElementRef: n
    }),
    l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    c = eh(null == (i = e.userStatus) ? true : i.claimedAt);
  return l ? Z.intl.formatToPlainString(Z.t.lOVr0O, {
    claimDate: c
  }) : null != o ? o.description : null != s ? s : null
}

function ek(e) {
  return [(0, c.e7)([R.Z], () => R.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, N.OR)(e, t), [e])]
}

function ej(e, t) {
  let [n, i] = ek(e.id), s = r.useMemo(() => (0, C.yH)(e), [e]), l = s.includes(U.cd.DESKTOP), c = s.includes(U.cd.CONSOLE), u = em(e), d = eg(e), f = r.useMemo(() => (0, a.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => U.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => U.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => U.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => U.cd.DESKTOP).exhaustive(), [t]), _ = u ? U.cd.DESKTOP : d ? U.cd.CONSOLE : null;
  return [r.useMemo(() => (0, a.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: U.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: U.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: U.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: U.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: U.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: U.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? P.LI.SELECT : c ? P.LI.CONSOLE : P.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, i]
}

function eU(e) {
  var t, n;
  let r = ev(e),
    i = eO(e),
    [a] = ej(e, i),
    s = ef(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === P.LI.DESKTOP),
    p = (0, I.isWeb)() && _ && !(0, C.Gd)(e),
    h = (0, I.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(Z.intl.string(Z.t.MFGxFM)), p && m.push(Z.intl.string(Z.t.BV6xDm)), m
}

function eG(e) {
  var t;
  return null != (t = (0, c.e7)([R.Z], () => R.Z.quests).get(e)) ? t : null
}

function eB(e) {
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

function eZ(e) {
  var t, n;
  let r = (0, c.e7)([h.default], () => h.default.locale),
    i = eO(e),
    [a] = ej(e, i),
    o = ev(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return Z.intl.string(Z.t["ij5E/5"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, v.T3)(r, l, {
      roundingMode: "floor"
    });
    return Z.intl.formatToPlainString(Z.t.lVZaXD, {
      percent: e
    })
  }
  return a === P.LI.SELECT ? Z.intl.string(Z.t.EMrUHQ) : (0, C.$J)(e) ? Z.intl.string(Z.t.mOrpXG) : Z.intl.string(Z.t["7e5k7L"])
}

function eF(e) {
  var t, n;
  let {
    quest: i,
    isExpanded: a,
    sourceQuestContent: o,
    activeScreen: s,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  } = e, d = eh(r.useMemo(() => j.r.build(i.config).rewardsExpireAt, [i.config])), f = eO(i), _ = ev(i), p = (null == (t = i.userStatus) ? true : t.completedAt) != null, h = (null == (n = i.userStatus) ? true : n.enrolledAt) != null, m = f.percentComplete > 0, g = eb(i), E = (0, M.DD)({
    quest: i,
    location: U.dr.QUESTS_BAR,
    questContent: P.jn.QUEST_BAR_V2,
    taskDetails: f,
    sourceQuestContent: o,
    popoutTargetElementRef: l,
    onGameSheetOpened: c,
    onGameSheetClosed: u
  }), b = null != _ ? _.percentComplete : f.percentComplete;
  if (p) return Z.intl.formatToPlainString(Z.t.APddvF, {
    expirationDate: d
  });
  if (a)
    if (s === P.LI.SELECT) return Z.intl.string(Z.t.sWUpN8);
    else {
      if (!(0, C.Pb)(i) || !h || m) return E;
      let e = j.r.build(i.config).defaultRewardNameWithArticle;
      return Z.intl.format(Z.t["1votF6"], {
        rewardNameWithArticle: e,
        targetMinutes: f.targetMinutes
      })
    } if ((0, C.q8)(i)) return Z.intl.string(Z.t["o+e9yh"]);
  if (b > 0)
    if (!g) return Z.intl.string(Z.t.mOrpXG);
    else return (0, C.AV)({
      quest: i,
      taskDetails: f,
      thirdPartyTaskDetails: null != _ ? _ : true
    });
  return Z.intl.string(Z.t.S6UUc5)
}

function eV(e, t) {
  let n = (0, c.e7)([R.Z], () => R.Z.getQuest(e), [e]),
    i = (0, u.ZP)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.wj)(i) ? G.BRd.DARK : G.BRd.LIGHT;
    return (0, k.fh)(n, k.eC.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function eH(e) {
  let t = j.r.build(e).defaultRewardName,
    n = (0, C.Kr)(e),
    r = (0, C.FX)(e),
    i = (0, C._p)(e),
    a = (0, C.f$)(e),
    o = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
    s = (0, T.I5)(o, B.PremiumTypes.TIER_2);
  if (null == n) return Z.intl.formatToPlainString(Z.t.l9uXL8, {
    decorationName: t
  });
  let l = Z.intl.formatToPlainString(Z.t.o97tNn, {
      rewardName: t
    }),
    u = Z.intl.formatToPlainString(Z.t.PkyRZo, {
      rewardName: t,
      expirationDate: r
    }),
    d = Z.intl.formatToPlainString(Z.t.ie4YK0, {
      rewardName: t,
      duration: n
    }),
    f = Z.intl.formatToPlainString(Z.t.yCpc0U, {
      duration: n,
      rewardName: t
    }),
    _ = s ? l : d,
    p = s ? u : f,
    h = i ? _ : p;
  return a ? h : Z.intl.formatToPlainString(Z.t.tTlItm, {
    duration: n,
    decorationName: t
  })
}

function eY(e) {
  let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, p.uL)(G.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}
let eW = () => (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]).some(e => e.preview),
  eK = () => {
    let e = (0, Chunk36243.T)({
        location: Chunk46140.dr.QUEST_PREVIEW_TOOL_2
      }),
      t = eW();
    return module && exports
  },
  ez = e => {
    var t;
    let n = (null == e ? true : e.userStatus) != null && (0, C.zE)(e.userStatus, P.jn.ACTIVITY_PANEL),
      r = ef(null != e ? e : null),
      i = (null == e || null == (t = e.userStatus) ? true : t.claimedAt) != null,
      a = (0, c.e7)([R.Z], () => null != R.Z.questEnrollmentBlockedUntil, []);
    return !n && !r && !i && !a
  },
  eq = () => {
    let e = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]);
    return Chunk647438.useMemo(() => module.filter(e => e.preview), [module])
  };

function eX() {
  return Chunk647438.useMemo(() => Chunk46140.Ew.map(e => {
    let [t, n] = e;
    return {
      heading: (0, C.T2)(t),
      options: n
    }
  }), [])
}

function eQ() {
  return Chunk647438.useMemo(() => Object.keys(Chunk46140.yq).map(e => ({
    label: (0, C.NL)(U.yq[e]),
    value: U.yq[e]
  })), [])
}

function eJ(e) {
  let {
    selectedSortMethod: t,
    selectedFilters: n,
    numQuestsVisible: i
  } = e, a = r.useRef(null), o = r.useRef(null);
  r.useEffect(() => {
    b.default.track(G.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: t,
      previous_sort_method: a.current
    }), a.current = t
  }, [t]), r.useEffect(() => {
    var e;
    let t = n.map(e => e.filter);
    b.default.track(G.rMx.QUEST_HOME_FILTERS_CHANGED, {
      filters: t,
      previous_filters: null != (e = o.current) ? e : [],
      num_quests_visible: i
    }), o.current = t
  }, [n, i])
}