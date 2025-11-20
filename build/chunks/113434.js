/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $I: () => e0,
  B4: () => eF,
  B6: () => eg,
  Bd: () => eU,
  Fy: () => eN,
  GI: () => ew,
  Gd: () => eW,
  I: () => ej,
  J2: () => W,
  Jf: () => eT,
  KX: () => ex,
  MP: () => eJ,
  N8: () => e$,
  OH: () => eM,
  Qy: () => eK,
  Rf: () => eI,
  SU: () => e1,
  Ut: () => e4,
  Wi: () => eh,
  _Q: () => ek,
  _s: () => eL,
  aV: () => eX,
  bA: () => ed,
  e5: () => ec,
  eN: () => ef,
  eQ: () => eH,
  fN: () => eR,
  iO: () => eC,
  kJ: () => eP,
  ly: () => em,
  m4: () => e3,
  me: () => eB,
  qI: () => eV,
  qb: () => eZ,
  t5: () => eA,
  tP: () => ep,
  tR: () => eu,
  uA: () => eS,
  vf: () => eY,
  wF: () => Y,
  z: () => eO,
  z1: () => eQ,
  z6: () => eD,
  zB: () => ez
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
  Chunk956664 = require("./956664.js"),
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
let V = false,
  H = 1,
  Y = "1410358070831480904";

function W() {
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

function K(e, t) {
  var n, r, i, a, o, s;
  let l = e.id === Y,
    c = t.id === Y,
    u = l && (null == (n = e.userStatus) ? true : n.completedAt) == null;
  if (u !== (c && (null == (r = t.userStatus) ? true : r.completedAt) == null)) return u ? V : H;
  let d = !(0, P.zi)(e),
    f = (null == (i = e.userStatus) ? true : i.claimedAt) != null,
    _ = (null == (a = t.userStatus) ? true : a.claimedAt) != null,
    p = (null == (o = e.userStatus) ? true : o.enrolledAt) != null,
    h = (null == (s = t.userStatus) ? true : s.enrolledAt) != null,
    {
      enabled: m,
      minutes: g
    } = (0, L.eC)(G.dr.QUEST_HOME_DESKTOP),
    E = O.Z.Millis.MINUTE * g,
    b = e2(e, E),
    y = e2(t, E);
  return d ? m && b !== y && (b || y) ? b ? H : V : f !== _ ? f ? H : V : p !== h ? p ? V : H : eo(e.config.expiresAt, t.config.expiresAt, 1) : f !== _ ? f ? V : H : p !== h ? p ? V : H : eo(e.config.expiresAt, t.config.expiresAt, 0)
}

function z(e, t) {
  return eo(e.config.startsAt, t.config.startsAt, 0)
}

function q(e, t) {
  var n, r;
  let i = null == (n = e.userStatus) ? true : n.enrolledAt,
    a = null == (r = t.userStatus) ? true : r.enrolledAt;
  return null == i && null == a ? eo(e.config.expiresAt, t.config.expiresAt, 0) : null != i && null == a ? V : null == i && null != a ? H : eo(i, a, 0)
}

function X(e, t) {
  return eo(e.config.expiresAt, t.config.expiresAt, 1)
}

function Q(e) {
  return function(t, n) {
    let r = !(0, P.zi)(t);
    return !(0, P.zi)(n) !== r ? r ? V : H : e(t, n)
  }
}

function J(e) {
  switch (e) {
    case G.yq.MOST_RECENT:
      return z;
    case G.yq.RECENTLY_ENROLLED:
      return q;
    case G.yq.EXPIRING_SOON:
      return X;
    case G.yq.SUGGESTED:
    default:
      return K
  }
}

function $(e, t) {
  switch (t) {
    case G.oH.VIDEO:
      return (0, P.q8)(e);
    case G.oH.PLAY:
      return (0, P.Nj)({
        quest: e
      }) || (0, P.Dr)({
        quest: e
      }) || (0, P.pO)(e);
    default:
      returnfalse
  }
}

function ee(e, t) {
  switch (t) {
    case G.UP.VIRTUAL_CURRENCY:
      return (0, P.xN)(e.config);
    case G.UP.COLLECTIBLE:
      return (0, P.Xv)(e.config);
    case G.UP.IN_GAME:
      return (0, P.vQ)(e.config) || (0, P.wj)(e.config);
    default:
      returnfalse
  }
}

function et(e) {
  switch (e) {
    case "task":
      return $;
    case "reward":
      return ee
  }
}

function en(e, t, n) {
  let r = et(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function er(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return en(e, n, r)
  }))
}
let ei = {};

function ea(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : er(e, r),
    a = Q(J(n));
  return i.sort(a)
}

function eo(e, t, n) {
  let r = 0 === n ? V : H;
  return e.localeCompare(t) * r
}

function es(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    a = r.useRef(t.filters),
    o = r.useRef(0);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters) return n.current;
    let r = ea(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, a.current = t.filters, o.current = e.length, r
  }, [e, t])
}

function el(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? V : H : eo(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var ec = function(e) {
    return e.ALL = "all", e.CLAIMED = "claimed", e.PREVIEW_TOOL = "preview_tool", e
  }({}),
  eu = function(e) {
    return e.TAB = "tab", e.QUEST_ID = "quest_id", e.SORT = "sort", e.FILTER = "filter", e
  }({});

function ed(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ei,
    {
      quests: n,
      excludedQuests: r,
      isFetchingCurrentQuests: i,
      hasFetched: a
    } = W({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    o = new Map(n.map(e => [e.id, e])),
    s = es(n, t),
    l = el(n),
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

function ef() {
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

function e_() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function ep(e) {
  return (0, c.e7)([D.Z], () => null != e && D.Z.isQuestExpired(e.id), [e])
}

function eh(e, t, n) {
  var r;
  let i = (0, c.e7)([g.Z], () => {
      var e;
      return null != (e = g.Z.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.e7)([D.Z], () => null != D.Z.questEnrollmentBlockedUntil, []),
    o = (0, c.e7)([b.default], () => {
      var e;
      return null == (e = b.default.getCurrentUser()) ? true : e.id
    }) === n,
    s = (0, c.e7)([D.Z], () => null != e && D.Z.isQuestExpired(e.id), [e]);
  if (null == e || a || s || o) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, P.Rc)(t, i);
  return !l || !!u
}

function em(e) {
  return r.useMemo(() => {
    var t;
    let n = null == (t = e.config.ctaConfig) ? true : t.buttonLabel;
    return null != n ? n : (0, P.q8)(e) || (0, P.Pb)(e) || (0, P.pO)(e) || (0, P.Vl)(e) || e.config.features.includes(G.S7.NON_GAMING_PLAY_QUEST) ? F.intl.string(F.t.hvVgAZ) : F.intl.string(F.t.lwQdjB)
  }, [e])
}

function eg(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([m.default], () => m.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function eE(e) {
  return (0, c.e7)([D.Z], () => D.Z.isProgressingOnDesktop(e.id))
}

function eb(e) {
  return r.useMemo(() => (0, P.Bz)(e), [e])
}

function ey(e) {
  let t = (0, c.e7)([D.Z], () => D.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, P.BM)(e), [e, t])
}

function eO(e) {
  let t = eE(e),
    n = eb(e),
    r = ey(e);
  return t || n || r
}
let ev = 1,
  eI = e => {
    let t = r.useCallback(() => (0, P.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = eO(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, O.Z.Millis.SECOND * ev);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eT(e) {
  return r.useMemo(() => (0, P.b7)(e), [e])
}
let eS = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eL({
    quest: t
  }), a = (0, R.WD)();
  return () => {
    i ? (0, P.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: N.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, P.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: N.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eA(e, t, n, r) {
  let {
    targetMinutes: i
  } = eI(e), a = eT(e), o = eS({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  }), s = (0, P.Pb)(e);
  if ((0, P.$J)(e) && !(0, P.Nj)({
      quest: e
    })) return F.intl.format(F.t["l4S+cQ"], {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if ((0, P.$J)(e)) return s ? F.intl.format(F.t.gbtCpW, {
    onClick: o,
    minutes: i
  }) : F.intl.format(F.t.Ajlcd7, {
    minutes: i,
    onClick: o,
    gameTitle: e.config.messages.gameTitle
  });
  if (s) return F.intl.format(F.t.Hu8SKW, {
    targetMinutes: i
  });
  if ((0, P.q8)(e)) {
    let t = (0, P.z1)(e.config),
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? F.intl.string(F.t["o+e9yh"]) : F.intl.formatToPlainString(F.t["9m9Mna"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, P.pO)(e))
    if ((0, P.KM)(e)) return F.intl.format(F.t["1NaRSs"], {
      minutes: i
    });
    else return F.intl.format(F.t.xHXCyf, {
      minutes: i,
      activityName: e.config.messages.gameTitle
    });
  let l = F.t["6zWtV8"];
  return (0, P.Nj)({
    quest: e
  }) && (l = e.config.features.includes(G.S7.NON_GAMING_PLAY_QUEST) ? F.t.fe7Xec : F.t["wmOh/q"]), F.intl.format(l, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eC() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = W({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = e_();
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

function eN(e) {
  let t = r.useMemo(() => {
    let t = new Set;
    for (let n of e) {
      let e = (0, P.Gs)(n);
      null != e && t.add(e)
    }
    return Array.from(t)
  }, [e]);
  return (0, p.Z)(t)
}

function eR(e) {
  let t = (0, c.e7)([D.Z], () => D.Z.quests),
    n = eN(Array.from(t.values())),
    i = r.useMemo(() => {
      let n = (0, P.NI)(t, G.tt);
      return (0, P.Jg)(n, e)
    }, [e, t, n]);
  return ep(i) ? null : i
}

function eP(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, C.Wf)(e),
    handleProgress: t => (0, C.Wf)(e, t),
    handleResetStatusClick: () => (0, C.eT)(e),
    handleResetDismissibilityClick: () => (0, C.T0)(e),
    handleOverrideDeliveryClick: () => (0, C.EW)(e)
  }), [e])
}

function eD() {
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
      n = module.filter(e => e.type === B.ABu.XBOX),
      r = module.filter(e => e.type === B.ABu.PLAYSTATION),
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
let ew = e => {
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
  eL = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eD(), r = eO(t), i = 0 === n.length;
    return (0, P.$J)(t) && i && !r
  },
  ex = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eD(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk473749 || !require && Chunk473749, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DG, {
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
var eM = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function ek(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = eI(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function ej(e) {
  let t = (0, c.e7)([m.default], () => m.default.locale),
    {
      percentComplete: n
    } = eI(e),
    r = eT(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, T.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function eU(e, t, n) {
  var r, i;
  let a = eI(e),
    o = (0, P.b7)(e),
    s = (0, j.DD)({
      quest: e,
      taskDetails: a,
      location: G.dr.QUEST_HOME_DESKTOP,
      questContent: w.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t,
      popoutTargetElementRef: n
    }),
    l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    c = eg(null == (i = e.userStatus) ? true : i.claimedAt);
  return l ? F.intl.formatToPlainString(F.t.lOVr0O, {
    claimDate: c
  }) : null != o ? o.description : null != s ? s : null
}

function eG(e) {
  return [(0, c.e7)([D.Z], () => D.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, C.OR)(e, t), [e])]
}

function eB(e, t) {
  let [n, i] = eG(e.id), s = r.useMemo(() => (0, P.yH)(e), [e]), l = s.includes(G.cd.DESKTOP), c = s.includes(G.cd.CONSOLE), u = eE(e), d = eb(e), f = r.useMemo(() => (0, a.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => G.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => G.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => G.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => G.cd.DESKTOP).exhaustive(), [t]), _ = u ? G.cd.DESKTOP : d ? G.cd.CONSOLE : null;
  return [r.useMemo(() => (0, a.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: _,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: G.cd.CONSOLE
  }, () => w.LI.CONSOLE).with({
    currentProgressingPlatform: G.cd.DESKTOP
  }, () => w.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: G.cd.CONSOLE
  }, () => w.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: G.cd.DESKTOP
  }, () => w.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: G.cd.CONSOLE
  }, () => w.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: G.cd.DESKTOP
  }, () => w.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? w.LI.SELECT : c ? w.LI.CONSOLE : w.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, i]
}

function eZ(e) {
  var t, n;
  let r = eT(e),
    i = eI(e),
    [a] = eB(e, i),
    s = ep(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && a === w.LI.DESKTOP),
    p = (0, S.isWeb)() && _ && !(0, P.Gd)(e),
    h = (0, S.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(F.intl.string(F.t.MFGxFM)), p && m.push(F.intl.string(F.t.BV6xDm)), m
}

function eF(e) {
  var t;
  return null != (t = (0, c.e7)([D.Z], () => D.Z.quests).get(e)) ? t : null
}

function eV(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, N.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, N.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function eH(e) {
  var t, n;
  let r = (0, c.e7)([m.default], () => m.default.locale),
    i = eI(e),
    [a] = eB(e, i),
    o = eT(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    l = null != o ? o.percentComplete : i.percentComplete;
  if (s) return F.intl.string(F.t["ij5E/5"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && l > 0) {
    let e = (0, T.T3)(r, l, {
      roundingMode: "floor"
    });
    return F.intl.formatToPlainString(F.t.lVZaXD, {
      percent: e
    })
  }
  return a === w.LI.SELECT ? F.intl.string(F.t.EMrUHQ) : (0, P.$J)(e) ? F.intl.string(F.t.mOrpXG) : F.intl.string(F.t["7e5k7L"])
}

function eY(e) {
  var t, n;
  let {
    quest: r,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o,
    popoutTargetElementRef: s,
    onGameSheetOpened: l,
    onGameSheetClosed: c
  } = e, u = eg(r.config.rewardsConfig.rewardsExpireAt), d = eI(r), f = eT(r), _ = (null == (t = r.userStatus) ? true : t.completedAt) != null, p = (null == (n = r.userStatus) ? true : n.enrolledAt) != null, h = d.percentComplete > 0, m = eO(r), g = (0, j.DD)({
    quest: r,
    location: G.dr.QUESTS_BAR,
    questContent: w.jn.QUEST_BAR_V2,
    taskDetails: d,
    sourceQuestContent: a,
    popoutTargetElementRef: s,
    onGameSheetOpened: l,
    onGameSheetClosed: c
  }), E = null != f ? f.percentComplete : d.percentComplete;
  if (_) return F.intl.formatToPlainString(F.t.APddvF, {
    expirationDate: u
  });
  if (i)
    if (o === w.LI.SELECT) return F.intl.string(F.t.sWUpN8);
    else {
      if (!(0, P.Pb)(r) || !p || h) return g;
      let e = (0, P.B3)(r.config);
      return F.intl.format(F.t["1votF6"], {
        rewardNameWithArticle: e,
        targetMinutes: d.targetMinutes
      })
    } if ((0, P.q8)(r)) return F.intl.string(F.t["o+e9yh"]);
  if (E > 0)
    if (!m) return F.intl.string(F.t.mOrpXG);
    else return (0, P.AV)({
      quest: r,
      taskDetails: d,
      thirdPartyTaskDetails: null != f ? f : true
    });
  return F.intl.string(F.t.S6UUc5)
}

function eW(e, t) {
  let n = (0, c.e7)([D.Z], () => D.Z.getQuest(e), [e]),
    i = (0, u.ZP)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.wj)(i) ? B.BRd.DARK : B.BRd.LIGHT;
    return (0, U.fh)(n, U.eC.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function eK(e) {
  let t = (0, P.w8)(e),
    n = (0, P.Kr)(e),
    r = (0, P.FX)(e),
    i = (0, P._p)(e),
    a = (0, P.f$)(e),
    o = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
    s = (0, A.I5)(o, Z.PremiumTypes.TIER_2);
  if (null == n) return F.intl.formatToPlainString(F.t.l9uXL8, {
    decorationName: t
  });
  let l = F.intl.formatToPlainString(F.t.o97tNn, {
      rewardName: t
    }),
    u = F.intl.formatToPlainString(F.t.PkyRZo, {
      rewardName: t,
      expirationDate: r
    }),
    d = F.intl.formatToPlainString(F.t.ie4YK0, {
      rewardName: t,
      duration: n
    }),
    f = F.intl.formatToPlainString(F.t.yCpc0U, {
      duration: n,
      rewardName: t
    }),
    _ = s ? l : d,
    p = s ? u : f,
    h = i ? _ : p;
  return a ? h : F.intl.formatToPlainString(F.t.tTlItm, {
    duration: n,
    decorationName: t
  })
}

function ez(e) {
  let t = (0, c.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
    n = (0, P.Mo)(e);
  return {
    launchInGameActivity: r.useCallback(() => {
      null != n && (null != t && t.applicationId === n ? (0, f.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, h.uL)(B.Z5c.ACTIVITY_DETAILS(n)))
    }, [t, n])
  }
}
let eq = () => (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]).some(e => e.preview),
  eX = () => {
    let e = (0, Chunk36243.T)({
        location: Chunk46140.dr.QUEST_PREVIEW_TOOL_2
      }),
      t = eq();
    return module && exports
  },
  eQ = e => {
    var t;
    let n = (null == e ? true : e.userStatus) != null && (0, P.zE)(e.userStatus, w.jn.ACTIVITY_PANEL),
      r = ep(null != e ? e : null),
      i = (null == e || null == (t = e.userStatus) ? true : t.claimedAt) != null,
      a = (0, c.e7)([D.Z], () => null != D.Z.questEnrollmentBlockedUntil, []);
    return !n && !r && !i && !a
  },
  eJ = () => {
    let e = (0, Chunk442837.Wu)([Chunk569984.Z], () => [...Chunk569984.Z.quests.values()]);
    return Chunk473749.useMemo(() => module.filter(e => e.preview), [module])
  };

function e$() {
  return Chunk473749.useMemo(() => Chunk46140.Ew.map(e => {
    let [t, n] = e;
    return {
      heading: (0, P.T2)(t),
      options: n
    }
  }), [])
}

function e0() {
  return Chunk473749.useMemo(() => Object.keys(Chunk46140.yq).map(e => ({
    label: (0, P.NL)(G.yq[e]),
    value: G.yq[e]
  })), [])
}

function e1(e) {
  let {
    selectedSortMethod: t,
    selectedFilters: n,
    numQuestsVisible: i
  } = e, a = r.useRef(null), o = r.useRef(null);
  r.useEffect(() => {
    y.default.track(B.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: t,
      previous_sort_method: a.current
    }), a.current = t
  }, [t]), r.useEffect(() => {
    var e;
    let t = n.map(e => e.filter);
    y.default.track(B.rMx.QUEST_HOME_FILTERS_CHANGED, {
      filters: t,
      previous_filters: null != (e = o.current) ? e : [],
      num_quests_visible: i
    }), o.current = t
  }, [n, i])
}
let e3 = e => {
    let t = false,
      n = r.useMemo(() => {
        var e;
        return (null == (e = b.default.getCurrentUser()) ? true : e.isStaff()) === true
      }, []);
    return t || n || e.preview
  },
  e2 = (e, t) => {
    var n, r, i;
    let a = (null == (n = e.userStatus) ? true : n.completedAt) != null;
    return (null == (r = e.userStatus) ? true : r.enrolledAt) != null && !a && Date.now() - new Date(null == (i = e.userStatus) ? true : i.enrolledAt).getTime() > t
  };

function e4() {
  let {
    enabled: e
  } = Chunk937797.n0.useConfig({
    location: Chunk46140.dr.QUEST_HOME_DESKTOP
  }), [t, n] = Chunk473749.useState(module), [i, a] = Chunk473749.useState(module), [o, s] = Chunk473749.useState(false), [l, u] = Chunk473749.useState(false), {
    isFetching: d,
    takeoverConfig: f
  } = (0, Chunk442837.cj)([Chunk569984.Z], () => ({
    isFetching: Chunk569984.Z.isFetchingQuestHomeTakeover(),
    takeoverConfig: Chunk569984.Z.getQuestHomeTakeoverConfig()
  })), _ = Chunk473749.useMemo(() => {
    if (!module || null == Chunk197386) return null;
    let t = new Date,
      n = new Date(Chunk197386.startsAt),
      r = new Date(Chunk197386.expiresAt);
    return exports < require || exports > Chunk473749 ? null : Chunk197386
  }, [module, Chunk197386]);
  return Chunk473749.useEffect(() => {
    module && exports();
    async function t() {
      try {
        await (0, Chunk22095.Kh)()
      } catch (e) {
        Chunk278074(false), Chunk959078(true)
      } finally {
        require(false)
      }
    }
  }, [module]), Chunk473749.useEffect(() => {
    !async function() {
      if (null != Chunk197386) try {
        await Promise.all([(0, Chunk956664.pt)(Chunk197386.assetHeroImage.url), (0, Chunk956664.pt)(Chunk197386.assetSponsorImage.url)])
      } catch (e) {
        Chunk410030(true)
      } finally {
        Chunk278074(false)
      }
    }()
  }, [Chunk197386]), {
    takeover: Chunk754700 || Chunk780384 ? null : Chunk15624,
    isLoading: exports || Chunk317381 || Chunk392711
  }
}