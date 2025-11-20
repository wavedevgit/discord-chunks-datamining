/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $I: () => e$,
  B4: () => eZ,
  B6: () => em,
  Bd: () => ej,
  Fy: () => eC,
  GI: () => eD,
  Gd: () => eY,
  I: () => ek,
  J2: () => Y,
  Jf: () => eI,
  KX: () => eL,
  MP: () => eQ,
  N8: () => eJ,
  OH: () => ex,
  Qy: () => eW,
  Rf: () => ev,
  SU: () => e0,
  Wi: () => ep,
  _Q: () => eM,
  _s: () => ew,
  aV: () => eq,
  bA: () => eu,
  e5: () => el,
  eN: () => ed,
  eQ: () => eV,
  fN: () => eN,
  iO: () => eA,
  kJ: () => eR,
  ly: () => eh,
  m4: () => e1,
  me: () => eG,
  qI: () => eF,
  qb: () => eB,
  t5: () => eS,
  tP: () => e_,
  tR: () => ec,
  uA: () => eT,
  vf: () => eH,
  wF: () => H,
  z: () => ey,
  z1: () => eX,
  z6: () => eP,
  zB: () => eK
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
var Chunk473749 = require("./473749.js");
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
  Chunk15624 = require("./15624.js"),
  Chunk835473 = require("./835473.js");
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
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk704161 = require("./704161.js"),
  Chunk36243 = require("./36243.js"),
  Chunk977156 = require("./977156.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let F = false,
  V = 1,
  H = "1410358070831480904";

function Y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = Chunk473749.useState(false),
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
  return Chunk473749.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk959078) && Chunk780384 && !exports && !Chunk754700) {
      if (require(true), (0, Chunk22095.xw)(), Chunk410030.enabled && "focused" !== Chunk15624.Z.getState()) return;
      let {
        enableNewRequestBehavior: t
      } = Chunk704161.Z.getConfig({
        location: "QuestHookUseQuests"
      });
      if (!exports)(0, Chunk22095.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk780384, exports, Chunk754700, Chunk959078, module.callerSource, Chunk410030.enabled]), {
    quests: Chunk392711,
    excludedQuests: Chunk278074,
    isFetchingCurrentQuests: Chunk754700,
    hasFetched: exports
  }
}

function W(e, t) {
  var n, r, i, a, o, s;
  let l = e.id === H,
    c = t.id === H,
    u = l && (null == (n = e.userStatus) ? true : n.completedAt) == null;
  if (u !== (c && (null == (r = t.userStatus) ? true : r.completedAt) == null)) return u ? F : V;
  let d = !(0, R.zi)(e),
    f = (null == (i = e.userStatus) ? true : i.claimedAt) != null,
    _ = (null == (a = t.userStatus) ? true : a.claimedAt) != null,
    p = (null == (o = e.userStatus) ? true : o.enrolledAt) != null,
    h = (null == (s = t.userStatus) ? true : s.enrolledAt) != null,
    {
      enabled: m,
      minutes: g
    } = (0, w.eC)(U.dr.QUEST_HOME_DESKTOP),
    E = O.Z.Millis.MINUTE * g,
    b = e3(e, E),
    y = e3(t, E);
  return d ? m && b !== y && (b || y) ? b ? V : F : f !== _ ? f ? V : F : p !== h ? p ? F : V : ea(e.config.expiresAt, t.config.expiresAt, 1) : f !== _ ? f ? F : V : p !== h ? p ? F : V : ea(e.config.expiresAt, t.config.expiresAt, 0)
}

function K(e, t) {
  return ea(e.config.startsAt, t.config.startsAt, 0)
}

function z(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    a = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == a ? ea(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == a ? F : null == i && null != a ? V : ea(i, a, 0)
}

function q(e, t) {
  return ea(e.config.expiresAt, t.config.expiresAt, 1)
}

function X(e) {
  return function(t, n) {
    let r = !(0, R.zi)(t);
    return !(0, R.zi)(n) !== r ? r ? F : V : e(t, n)
  }
}

function Q(e) {
  switch (e) {
    case U.yq.MOST_RECENT:
      return K;
    case U.yq.RECENTLY_ENROLLED:
      return z;
    case U.yq.EXPIRING_SOON:
      return q;
    case U.yq.SUGGESTED:
    default:
      return W
  }
}

function J(e, t) {
  switch (t) {
    case U.oH.VIDEO:
      return (0, R.q8)(e);
    case U.oH.PLAY:
      return (0, R.Nj)({
        quest: e
      }) || (0, R.Dr)({
        quest: e
      }) || (0, R.pO)(e);
    default:
      returnfalse
  }
}

function $(e, t) {
  switch (t) {
    case U.UP.VIRTUAL_CURRENCY:
      return (0, R.xN)(e.config);
    case U.UP.COLLECTIBLE:
      return (0, R.Xv)(e.config);
    case U.UP.IN_GAME:
      return (0, R.vQ)(e.config) || (0, R.wj)(e.config);
    default:
      returnfalse
  }
}

function ee(e) {
  switch (e) {
    case "task":
      return J;
    case "reward":
      return $
  }
}

function et(e, t, n) {
  let r = ee(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function en(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return et(e, n, r)
  }))
}
let er = {};

function ei(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : er,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : en(e, r),
    a = X(Q(n));
  return i.sort(a)
}

function ea(e, t, n) {
  let r = 0 === n ? F : V;
  return e.localeCompare(t) * r
}

function eo(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    a = r.useRef(t.filters),
    o = r.useRef(0);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters) return n.current;
    let r = ei(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, a.current = t.filters, o.current = e.length, r
  }, [e, t])
}

function es(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? F : V : ea(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var el = function(e) {
    return e.ALL = "all", e.CLAIMED = "claimed", e.PREVIEW_TOOL = "preview_tool", e
  }({}),
  ec = function(e) {
    return e.TAB = "tab", e.QUEST_ID = "quest_id", e.SORT = "sort", e.FILTER = "filter", e
  }({});

function eu(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : er,
    {
      quests: n,
      excludedQuests: r,
      isFetchingCurrentQuests: i,
      hasFetched: a
    } = Y({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    o = new Map(n.map(e => [e.id, e])),
    s = eo(n, t),
    l = es(n),
    c = [],
    u = [];
  for (let t of c = "all" === e ? s : l) {
    let e = o.get(t);
    null != e && u.push(e)
  }
  return {
    quests: u,
    excludedQuests: r,
    isFetchingCurrentQuests: i,
    hasFetched: a
  }
}

function ed() {
  let e = Chunk473749.useRef(false),
    t = (0, Chunk442837.Wu)([Chunk569984.Z], () => Array.from(Chunk569984.Z.claimedQuests.values())),
    n = (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.isFetchingClaimedQuests);
  return Chunk473749.useEffect(() => {
    require || module.current || (module.current = true, (0, Chunk22095.Ag)())
  }, [require]), {
    claimedQuests: exports,
    isFetchingClaimedQuests: require
  }
}

function ef() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function e_(e) {
  return (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e])
}

function ep(e, t, n) {
  var r;
  let i = (0, c.e7)([g.Z], () => {
      var e;
      return null != (e = g.Z.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []),
    o = (0, c.e7)([b.default], () => {
      var e;
      return null == (e = b.default.getCurrentUser()) ? true : e.id
    }) === n,
    s = (0, c.e7)([P.Z], () => null != e && P.Z.isQuestExpired(e.id), [e]);
  if (null == e || a || s || o) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, R.Rc)(t, i);
  return !l || !!u
}

function eh(e) {
  return r.useMemo(() => {
    var t;
    let n = null == (t = e.config.ctaConfig) ? true : t.buttonLabel;
    return null != n ? n : (0, R.q8)(e) || (0, R.Pb)(e) || (0, R.pO)(e) || (0, R.Vl)(e) || e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST) ? Z.intl.string(Z.t.hvVgAZ) : Z.intl.string(Z.t.lwQdjB)
  }, [e])
}

function em(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([m.default], () => m.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function eg(e) {
  return (0, c.e7)([P.Z], () => P.Z.isProgressingOnDesktop(e.id))
}

function eE(e) {
  return r.useMemo(() => (0, R.Bz)(e), [e])
}

function eb(e) {
  let t = (0, c.e7)([P.Z], () => P.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, R.BM)(e), [e, t])
}

function ey(e) {
  let t = eg(e),
    n = eE(e),
    r = eb(e);
  return t || n || r
}
let eO = 1,
  ev = e => {
    let t = r.useCallback(() => (0, R.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = ey(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, O.Z.Millis.SECOND * eO);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eI(e) {
  return r.useMemo(() => (0, R.b7)(e), [e])
}
let eT = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = ew({
    quest: t
  }), a = (0, N.WD)();
  return () => {
    i ? (0, R.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: C.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, R.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: C.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eS(e, t, n, r) {
  let {
    targetMinutes: i
  } = ev(e), a = eI(e), o = eT({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, R.Pb)(e);
  if ((0, R.$J)(e) && !(0, R.Nj)({
      quest: e
    })) return Z.intl.format(Z.t["l4S+cQ"], {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if ((0, R.$J)(e)) return s ? Z.intl.format(Z.t.gbtCpW, {
    onClick: o,
    minutes: i
  }) : Z.intl.format(Z.t.Ajlcd7, {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if (s) return Z.intl.format(Z.t.Hu8SKW, {
    targetMinutes: i
  });
  if ((0, R.q8)(e)) {
    let t = (0, R.z1)(e.config),
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? Z.intl.string(Z.t["o+e9yh"]) : Z.intl.formatToPlainString(Z.t["9m9Mna"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, R.pO)(e))
    if ((0, R.KM)(e)) return Z.intl.format(Z.t["1NaRSs"], {
      minutes: i
    });
    else return Z.intl.format(Z.t.xHXCyf, {
      minutes: i,
      activityName: e.config.messages.gameTitle
    });
  let l = Z.t["6zWtV8"];
  return (0, R.Nj)({
    quest: e
  }) && (l = e.config.features.includes(U.S7.NON_GAMING_PLAY_QUEST) ? Z.t.fe7Xec : Z.t["wmOh/q"]), Z.intl.format(l, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eA() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = Y({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = ef();
  return Chunk473749.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk473749;
    for (let t of module) {
      var i;
      if (!(0, Chunk509212.vR)(exports, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk392711) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk473749.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        a = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !Chunk278074) {
        Chunk473749.push(exports);
        continue
      }
    }
    return Chunk473749
  }, [module, require, exports])
}

function eC(e) {
  let t = r.useMemo(() => {
    let t = new Set;
    for (let n of e) {
      let e = (0, R.Gs)(n);
      null != e && t.add(e)
    }
    return Array.from(t)
  }, [e]);
  return (0, p.Z)(t)
}

function eN(e) {
  let t = (0, c.e7)([P.Z], () => P.Z.quests),
    n = eC(Array.from(t.values())),
    i = r.useMemo(() => {
      let n = (0, R.NI)(t, U.tt);
      return (0, R.Jg)(n, e)
    }, [e, t, n]);
  return e_(i) ? null : i
}

function eR(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, A.Wf)(e),
    handleProgress: t => (0, A.Wf)(e, t),
    handleResetStatusClick: () => (0, A.eT)(e),
    handleResetDismissibilityClick: () => (0, A.T0)(e),
    handleOverrideDeliveryClick: () => (0, A.EW)(e)
  }), [e])
}

function eP() {
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
  } = Chunk473749.useMemo(() => {
    let e = exports.filter(e => false === e.revoked),
      n = module.filter(e => e.type === G.ABu.XBOX),
      r = module.filter(e => e.type === G.ABu.PLAYSTATION),
      i = require.concat(Chunk473749);
    return {
      xboxAccounts: require,
      playstationAccounts: Chunk473749,
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
let eD = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [o, l] = r.useState([]), [u, d] = r.useState(false), f = (0, c.e7)([E.Z], () => E.Z.getAccounts());
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
  ew = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eP(), r = ey(t), i = 0 === n.length;
    return (0, R.$J)(t) && i && !r
  },
  eL = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eP(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk473749 || !require && Chunk473749, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DG, {
      psHelpdeskArticle: Chunk278074,
      xboxHelpdeskArticle: Chunk754700
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7nh, {
      helpdeskArticle: Chunk473749 ? Chunk278074 : Chunk754700
    });
    return {
      message: Chunk392711 ? Chunk780384 : Chunk959078,
      xboxURL: Chunk754700,
      playstationURL: Chunk278074
    }
  };
var ex = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eM(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = ev(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function ek(e) {
  let t = (0, c.e7)([m.default], () => m.default.locale),
    {
      percentComplete: n
    } = ev(e),
    r = eI(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, I.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function ej(e, t, n) {
  var r, i;
  let a = ev(e),
    o = (0, R.b7)(e),
    s = (0, k.DD)({
      quest: e,
      taskDetails: a,
      location: U.dr.QUEST_HOME_DESKTOP,
      questContent: D.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t,
      popoutTargetElementRef: n
    }),
    l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    c = em(null == (i = e.userStatus) ? true : i.claimedAt);
  return l ? Z.intl.formatToPlainString(Z.t.lOVr0O, {
    claimDate: c
  }) : null != o ? o.description : null != s ? s : null
}

function eU(e) {
  return [(0, c.e7)([P.Z], () => P.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, A.OR)(e, t), [e])]
}

function eG(e, t) {
  let [n, i] = eU(e.id), s = r.useMemo(() => (0, R.yH)(e), [e]), l = s.includes(U.cd.DESKTOP), c = s.includes(U.cd.CONSOLE), u = eg(e), d = eE(e), f = r.useMemo(() => (0, a.EQ)(t).with({
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
  }, () => D.LI.CONSOLE).with({
    currentProgressingPlatform: U.cd.DESKTOP
  }, () => D.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: U.cd.CONSOLE
  }, () => D.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: U.cd.DESKTOP
  }, () => D.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: U.cd.CONSOLE
  }, () => D.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: U.cd.DESKTOP
  }, () => D.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? D.LI.SELECT : c ? D.LI.CONSOLE : D.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, i]
}

function eB(e) {
  var t, n;
  let r = eI(e),
    i = ev(e),
    [a] = eG(e, i),
    s = e_(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === D.LI.DESKTOP),
    p = (0, T.isWeb)() && _ && !(0, R.Gd)(e),
    h = (0, T.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(Z.intl.string(Z.t.MFGxFM)), p && m.push(Z.intl.string(Z.t.BV6xDm)), m
}

function eZ(e) {
  var t;
  return null != (t = (0, c.e7)([P.Z], () => P.Z.quests).get(e)) ? t : null
}

function eF(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, C.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, C.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function eV(e) {
  var t, n;
  let r = (0, c.e7)([m.default], () => m.default.locale),
    i = ev(e),
    [a] = eG(e, i),
    o = eI(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return Z.intl.string(Z.t["ij5E/5"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, I.T3)(r, l, {
      roundingMode: "floor"
    });
    return Z.intl.formatToPlainString(Z.t.lVZaXD, {
      percent: e
    })
  }
  return a === D.LI.SELECT ? Z.intl.string(Z.t.EMrUHQ) : (0, R.$J)(e) ? Z.intl.string(Z.t.mOrpXG) : Z.intl.string(Z.t["7e5k7L"])
}

function eH(e) {
  var t, n;
  let {
    quest: r,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o,
    popoutTargetElementRef: s,
    onGameSheetOpened: l,
    onGameSheetClosed: c
  } = e, u = em(r.config.rewardsConfig.rewardsExpireAt), d = ev(r), f = eI(r), _ = (null == (t = r.userStatus) ? true : t.completedAt) != null, p = (null == (n = r.userStatus) ? true : n.enrolledAt) != null, h = d.percentComplete > 0, m = ey(r), g = (0, k.DD)({
    quest: r,
    location: U.dr.QUESTS_BAR,
    questContent: D.jn.QUEST_BAR_V2,
    taskDetails: d,
    sourceQuestContent: a,
    popoutTargetElementRef: s,
    onGameSheetOpened: l,
    onGameSheetClosed: c
  }), E = null != f ? f.percentComplete : d.percentComplete;
  if (_) return Z.intl.formatToPlainString(Z.t.APddvF, {
    expirationDate: u
  });
  if (i)
    if (o === D.LI.SELECT) return Z.intl.string(Z.t.sWUpN8);
    else {
      if (!(0, R.Pb)(r) || !p || h) return g;
      let e = (0, R.B3)(r.config);
      return Z.intl.format(Z.t["1votF6"], {
        rewardNameWithArticle: e,
        targetMinutes: d.targetMinutes
      })
    } if ((0, R.q8)(r)) return Z.intl.string(Z.t["o+e9yh"]);
  if (E > 0)
    if (!m) return Z.intl.string(Z.t.mOrpXG);
    else return (0, R.AV)({
      quest: r,
      taskDetails: d,
      thirdPartyTaskDetails: null != f ? f : true
    });
  return Z.intl.string(Z.t.S6UUc5)
}

function eY(e, t) {
  let n = (0, c.e7)([P.Z], () => P.Z.getQuest(e), [e]),
    i = (0, u.ZP)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.wj)(i) ? G.BRd.DARK : G.BRd.LIGHT;
    return (0, j.fh)(n, j.eC.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function eW(e) {
  let t = (0, R.w8)(e),
    n = (0, R.Kr)(e),
    r = (0, R.FX)(e),
    i = (0, R._p)(e),
    a = (0, R.f$)(e),
    o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
    s = (0, S.I5)(o, B.PremiumTypes.TIER_2);
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

function eK(e) {
  let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
    n = (0, R.Mo)(e);
  return {
    launchInGameActivity: r.useCallback(() => {
      null != n && (null != t && t.applicationId === n ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, h.uL)(G.Z5c.ACTIVITY_DETAILS(n)))
    }, [t, n])
  }
}
let ez = () => (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]).some(e => e.preview),
  eq = () => {
    let e = (0, Chunk36243.T)({
        location: Chunk46140.dr.QUEST_PREVIEW_TOOL_2
      }),
      t = ez();
    return module && exports
  },
  eX = e => {
    var t;
    let n = (null == e ? true : e.userStatus) != null && (0, R.zE)(e.userStatus, D.jn.ACTIVITY_PANEL),
      r = e_(null != e ? e : null),
      i = (null == e || null == (t = e.userStatus) ? true : t.claimedAt) != null,
      a = (0, c.e7)([P.Z], () => null != P.Z.questEnrollmentBlockedUntil, []);
    return !n && !r && !i && !a
  },
  eQ = () => {
    let e = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]);
    return Chunk473749.useMemo(() => module.filter(e => e.preview), [module])
  };

function eJ() {
  return Chunk473749.useMemo(() => Chunk46140.Ew.map(e => {
    let [t, n] = e;
    return {
      heading: (0, R.T2)(t),
      options: n
    }
  }), [])
}

function e$() {
  return Chunk473749.useMemo(() => Object.keys(Chunk46140.yq).map(e => ({
    label: (0, R.NL)(U.yq[e]),
    value: U.yq[e]
  })), [])
}

function e0(e) {
  let {
    selectedSortMethod: t,
    selectedFilters: n,
    numQuestsVisible: i
  } = e, a = r.useRef(null), o = r.useRef(null);
  r.useEffect(() => {
    y.default.track(G.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: t,
      previous_sort_method: a.current
    }), a.current = t
  }, [t]), r.useEffect(() => {
    var e;
    let t = n.map(e => e.filter);
    y.default.track(G.rMx.QUEST_HOME_FILTERS_CHANGED, {
      filters: t,
      previous_filters: null != (e = o.current) ? e : [],
      num_quests_visible: i
    }), o.current = t
  }, [n, i])
}
let e1 = e => {
    let t = false,
      n = r.useMemo(() => {
        var e;
        return (null == (e = b.default.getCurrentUser()) ? true : e.isStaff()) === true
      }, []);
    return t || n || e.preview
  },
  e3 = (e, t) => {
    var n, r, i;
    let a = (null == (n = e.userStatus) ? true : n.completedAt) != null;
    return (null == (r = e.userStatus) ? true : r.enrolledAt) != null && !a && Date.now() - new Date(null == (i = e.userStatus) ? true : i.enrolledAt).getTime() > t
  }