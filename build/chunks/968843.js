/** Chunk was on web.js **/
/** chunk id: 968843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $I: () => e$,
  B4: () => eV,
  B6: () => ey,
  Fy: () => eR,
  GI: () => eL,
  Gd: () => eY,
  I: () => eG,
  J2: () => q,
  Jf: () => eA,
  KX: () => eM,
  MP: () => eX,
  N8: () => eJ,
  Nm: () => e2,
  OH: () => ek,
  Qy: () => eW,
  Rf: () => eC,
  SU: () => e0,
  Wi: () => eb,
  _Q: () => eU,
  _s: () => ej,
  aV: () => eq,
  bA: () => em,
  e5: () => ep,
  eN: () => eh,
  fN: () => ew,
  iO: () => eP,
  kJ: () => eD,
  m4: () => e1,
  me: () => eB,
  qI: () => eH,
  qb: () => eF,
  tP: () => eE,
  tR: () => e_,
  uA: () => eN,
  z: () => eI,
  z1: () => eQ,
  z6: () => ex,
  zB: () => eK
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./314940.js");
var Chunk473749 = require("./473749.js");
require("./512722.js");
var Chunk392711 = require("./392711.js"),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk959078 = require("./959078.js"),
  Chunk780384 = require("./780384.js"),
  Chunk442837 = require("./442837.js"),
  Chunk410030 = require("./410030.js"),
  Chunk217774 = require("./217774.js"),
  Chunk15624 = require("./15624.js"),
  Chunk835473 = require("./835473.js");
require("./583434.js");
var Chunk706454 = require("./706454.js"),
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
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk704161 = require("./704161.js"),
  Chunk787695 = require("./787695.js"),
  Chunk36243 = require("./36243.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk862657 = require("./862657.js"),
  Chunk759479 = require("./759479.js"),
  Chunk387745 = require("./387745.js"),
  Chunk115179 = require("./115179.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk542347 = require("./542347.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let K = false,
  z = 1;

function q() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = Chunk473749.useState(false),
    i = (0, Chunk442837.Wu)([Chunk616022.Z], () => [...Chunk616022.Z.quests.values()]),
    a = (0, Chunk442837.Wu)([Chunk616022.Z], () => [...Chunk616022.Z.excludedQuests.values()]),
    {
      isFetchingCurrentQuests: o,
      lastFetchedCurrentQuests: s
    } = (0, Chunk442837.cj)([Chunk616022.Z], () => ({
      isFetchingCurrentQuests: Chunk616022.Z.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: Chunk616022.Z.lastFetchedCurrentQuests
    })),
    l = (0, Chunk787695.c)({
      location: Chunk324805.dr.USE_QUESTS
    }),
    u = Chunk937797.DL.useConfig({
      location: Chunk324805.dr.USE_QUESTS
    });
  return Chunk473749.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk959078) && Chunk780384 && !exports && !Chunk754700) {
      if (require(true), (0, Chunk22095.xw)(), Chunk410030.enabled && "focused" !== Chunk15624.Z.getState()) return;
      let {
        enableNewRequestBehavior: t
      } = Chunk704161.Z.getConfig({
        location: "QuestHookUseQuests"
      });
      if (!exports)(0, Chunk22095.w)(Chunk49436.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk780384, exports, Chunk754700, Chunk959078, module.callerSource, Chunk410030.enabled]), {
    quests: Chunk392711,
    excludedQuests: Chunk278074,
    isFetchingCurrentQuests: Chunk754700,
    hasFetched: exports
  }
}

function Q(e, t, n) {
  var r, i, a, o, s, l;
  let c = e.id === V.wF,
    u = t.id === V.wF,
    d = c && (null == (r = e.userStatus) ? true : r.completedAt) == null;
  if (d !== (u && (null == (i = t.userStatus) ? true : i.completedAt) == null)) return d ? K : z;
  let f = !(0, M.zi)(e),
    p = (null == (a = e.userStatus) ? true : a.claimedAt) != null,
    _ = (null == (o = t.userStatus) ? true : o.claimedAt) != null,
    m = (null == (s = e.userStatus) ? true : s.enrolledAt) != null,
    h = (null == (l = t.userStatus) ? true : l.enrolledAt) != null,
    {
      enabled: g,
      minutes: E
    } = (0, R.eC)(V.dr.QUEST_HOME_DESKTOP),
    y = b.Z.Millis.MINUTE * E,
    O = e3(e, y),
    v = e3(t, y);
  if (f) {
    let {
      takeover: r
    } = n, i = null != r && (0, B.P9)(r, e.id), a = null != r && (0, B.P9)(r, t.id);
    return i !== a && (i || a) ? i ? K : z : g && O !== v && (O || v) ? O ? z : K : p !== _ ? p ? z : K : m !== h ? m ? K : z : eu(e.config.expiresAt, t.config.expiresAt, 1)
  }
  return p !== _ ? p ? K : z : m !== h ? m ? K : z : eu(e.config.expiresAt, t.config.expiresAt, 0)
}

function X(e, t, n) {
  return eu(e.config.startsAt, t.config.startsAt, 0)
}

function J(e, t, n) {
  var r, i;
  let a = null == (r = e.userStatus) ? true : r.enrolledAt,
    o = null == (i = t.userStatus) ? true : i.enrolledAt;
  return null == a && null == o ? eu(e.config.expiresAt, t.config.expiresAt, 0) : null != a && null == o ? K : null == a && null != o ? z : eu(a, o, 0)
}

function $(e, t, n) {
  return eu(e.config.expiresAt, t.config.expiresAt, 1)
}

function ee(e, t) {
  return function(n, r) {
    let i = !(0, M.zi)(n);
    return !(0, M.zi)(r) !== i ? i ? K : z : e(n, r, t)
  }
}

function et(e) {
  switch (e) {
    case V.yq.MOST_RECENT:
      return X;
    case V.yq.RECENTLY_ENROLLED:
      return J;
    case V.yq.EXPIRING_SOON:
      return $;
    case V.yq.SUGGESTED:
    default:
      return Q
  }
}

function en(e, t) {
  switch (t) {
    case V.oH.VIDEO:
      return (0, Z.q8)(e);
    case V.oH.PLAY:
      return (0, Z.Nj)({
        quest: e
      }) || (0, Z.Dr)({
        quest: e
      }) || (0, Z.pO)(e);
    default:
      returnfalse
  }
}

function er(e, t) {
  switch (t) {
    case V.UP.VIRTUAL_CURRENCY:
      return (0, G.xN)(e.config);
    case V.UP.COLLECTIBLE:
      return (0, G.Xv)(e.config);
    case V.UP.IN_GAME:
      return (0, G.vQ)(e.config) || (0, G.wj)(e.config);
    default:
      returnfalse
  }
}

function ei(e) {
  switch (e) {
    case "task":
      return en;
    case "reward":
      return er
  }
}

function ea(e, t, n) {
  let r = ei(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function eo(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return ea(e, n, r)
  }))
}

function es() {
  return {
    takeover: Chunk616022.Z.getQuestHomeTakeoverConfig()
  }
}
let el = {};

function ec(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : el,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : eo(e, r),
    a = ee(et(n), es());
  return i.sort(a)
}

function eu(e, t, n) {
  let r = 0 === n ? K : z;
  return e.localeCompare(t) * r
}

function ed(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    a = r.useRef(t.filters),
    o = r.useRef(0);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && o.current === e.length && i.current === t.sortMethod && a.current === t.filters) return n.current;
    let r = ec(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, a.current = t.filters, o.current = e.length, r
  }, [e, t])
}

function ef(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? K : z : eu(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var ep = function(e) {
    return e.ALL = "all", e.CLAIMED = "claimed", e.PREVIEW_TOOL = "preview_tool", e
  }({}),
  e_ = function(e) {
    return e.TAB = "tab", e.QUEST_ID = "quest_id", e.SORT = "sort", e.FILTER = "filter", e
  }({});

function em(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : el,
    {
      quests: n,
      excludedQuests: r,
      isFetchingCurrentQuests: i,
      hasFetched: a
    } = q({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    o = new Map(n.map(e => [e.id, e])),
    s = ed(n, t),
    l = ef(n),
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

function eh() {
  let e = Chunk473749.useRef(false),
    t = (0, Chunk442837.Wu)([Chunk616022.Z], () => Array.from(Chunk616022.Z.claimedQuests.values())),
    n = (0, Chunk442837.e7)([Chunk616022.Z], () => Chunk616022.Z.isFetchingClaimedQuests);
  return Chunk473749.useEffect(() => {
    require || module.current || (module.current = true, (0, Chunk22095.Ag)())
  }, [require]), {
    claimedQuests: exports,
    isFetchingClaimedQuests: require
  }
}

function eg() {
  return (0, Chunk442837.e7)([Chunk616022.Z], () => Chunk616022.Z.getExpiredQuestsMap())
}

function eE(e) {
  return (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e])
}

function eb(e, t, n) {
  var r;
  let i = (0, c.e7)([m.Z], () => {
      var e;
      return null != (e = m.Z.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []),
    o = (0, c.e7)([g.default], () => {
      var e;
      return null == (e = g.default.getCurrentUser()) ? true : e.id
    }) === n,
    s = (0, c.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e]);
  if (null == e || a || s || o) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, B.Rc)(t, i);
  return !l || !!u
}

function ey(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.e7)([_.default], () => _.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function eO(e) {
  return (0, c.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id))
}

function ev(e) {
  return r.useMemo(() => (0, Z.Bz)(e), [e])
}

function eS(e) {
  let t = (0, c.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, o.X.WATCH_VIDEO));
  return r.useMemo(() => (0, F.BM)(e), [e, t])
}

function eI(e) {
  let t = eO(e),
    n = ev(e),
    r = eS(e);
  return t || n || r
}
let eT = 1,
  eC = e => {
    let t = r.useCallback(() => (0, Z.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = eI(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, b.Z.Millis.SECOND * eT);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function eA(e) {
  return r.useMemo(() => (0, Z.b7)(e), [e])
}
let eN = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = ej({
    quest: t
  }), a = (0, A.WD)();
  return () => {
    i ? (0, U.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: C.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, U.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: C.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eP() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = q({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = eg();
  return Chunk473749.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk473749;
    for (let t of module) {
      var i;
      if (!(0, Chunk862657.vR)(exports, Chunk49436.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk392711) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk473749.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        a = (0, Chunk862657.zE)(exports.userStatus, Chunk49436.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !Chunk278074) {
        Chunk473749.push(exports);
        continue
      }
    }
    return Chunk473749
  }, [module, require, exports])
}

function eR(e) {
  let t = r.useMemo(() => {
    let t = new Set;
    for (let n of e) {
      let e = (0, Z.Gs)(n);
      null != e && t.add(e)
    }
    return Array.from(t)
  }, [e]);
  return (0, p.Z)(t)
}

function ew(e) {
  let t = (0, c.e7)([N.Z], () => N.Z.quests),
    n = eR(Array.from(t.values())),
    i = r.useMemo(() => {
      let n = (0, B.NI)(t, V.tt);
      return (0, k.Jg)(n, e)
    }, [e, t, n]);
  return eE(i) ? null : i
}

function eD(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, T.Wf)(e),
    handleProgress: t => (0, T.Wf)(e, t),
    handleResetStatusClick: () => (0, T.eT)(e),
    handleResetDismissibilityClick: () => (0, T.T0)(e),
    handleOverrideDeliveryClick: () => (0, T.EW)(e)
  }), [e])
}

function ex() {
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
      n = module.filter(e => e.type === H.ABu.XBOX),
      r = module.filter(e => e.type === H.ABu.PLAYSTATION),
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
let eL = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [o, l] = r.useState([]), [u, d] = r.useState(false), f = (0, c.e7)([h.Z], () => h.Z.getAccounts());
    return r.useEffect(() => {
      l(e => e.filter(e => e.type !== s.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, T.CS)(t, n), l(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: o
    }
  },
  ej = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = ex(), r = eI(t), i = 0 === n.length;
    return (0, Z.$J)(t) && i && !r
  },
  eM = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = ex(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk473749 || !require && Chunk473749, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DG, {
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
var ek = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eU(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = eC(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eG(e) {
  let t = (0, c.e7)([_.default], () => _.default.locale),
    {
      percentComplete: n
    } = eC(e),
    r = eA(e),
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

function eZ(e) {
  return [(0, c.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, T.OR)(e, t), [e])]
}

function eB(e, t) {
  let [n, i] = eZ(e.id), s = r.useMemo(() => (0, U.yH)(e), [e]), l = s.includes(V.cd.DESKTOP), c = s.includes(V.cd.CONSOLE), u = eO(e), d = ev(e), f = r.useMemo(() => (0, a.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: o.X.PLAY_ON_DESKTOP
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_DESKTOP_V2
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.PLAY_ACTIVITY
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.WATCH_VIDEO_ON_MOBILE
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.STREAM_ON_DESKTOP
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.PLAY_ON_XBOX
  }, () => V.cd.CONSOLE).with({
    taskType: o.X.PLAY_ON_PLAYSTATION
  }, () => V.cd.CONSOLE).with({
    taskType: o.X.ACHIEVEMENT_IN_GAME
  }, () => V.cd.DESKTOP).with({
    taskType: o.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => V.cd.DESKTOP).exhaustive(), [t]), p = u ? V.cd.DESKTOP : d ? V.cd.CONSOLE : null;
  return [r.useMemo(() => (0, a.EQ)({
    lastPlatformProgress: f,
    currentProgressingPlatform: p,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: V.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: V.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: V.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: V.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: V.cd.CONSOLE
  }, () => P.LI.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: V.cd.DESKTOP
  }, () => P.LI.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? P.LI.SELECT : c ? P.LI.CONSOLE : P.LI.DESKTOP).exhaustive(), [c, l, f, p, n]), s, i]
}

function eF(e) {
  var t, n;
  let r = eA(e),
    i = eC(e),
    [a] = eB(e, i),
    s = eE(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = o.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    p = l && !c && !s && u && (d || f && a === P.LI.DESKTOP),
    _ = (0, S.isWeb)() && p && !(0, U.Gd)(e),
    m = (0, S.isMac)() && i.taskType === o.X.STREAM_ON_DESKTOP && p,
    h = [];
  return m && h.push(W.intl.string(W.t.MFGxFM)), _ && h.push(W.intl.string(W.t.BV6xDm)), h
}

function eV(e) {
  var t;
  return null != (t = (0, c.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null
}

function eH(e) {
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

function eY(e, t) {
  let n = (0, c.e7)([N.Z], () => N.Z.getQuest(e), [e]),
    i = (0, u.ZP)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.wj)(i) ? H.BRd.DARK : H.BRd.LIGHT;
    return (0, L.fh)(n, L.eC.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function eW(e) {
  let t = (0, G.w8)(e),
    n = (0, G.Kr)(e),
    r = (0, G.FX)(e),
    i = (0, G._p)(e),
    a = (0, G.f$)(e),
    o = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
    s = (0, I.I5)(o, Y.PremiumTypes.TIER_2);
  if (null == n) return W.intl.formatToPlainString(W.t.l9uXL8, {
    decorationName: t
  });
  let l = W.intl.formatToPlainString(W.t.o97tNn, {
      rewardName: t
    }),
    u = W.intl.formatToPlainString(W.t.PkyRZo, {
      rewardName: t,
      expirationDate: r
    }),
    d = W.intl.formatToPlainString(W.t.ie4YK0, {
      rewardName: t,
      duration: n
    }),
    f = W.intl.formatToPlainString(W.t.yCpc0U, {
      duration: n,
      rewardName: t
    }),
    p = s ? l : d,
    _ = s ? u : f,
    m = i ? p : _;
  return a ? m : W.intl.formatToPlainString(W.t.tTlItm, {
    duration: n,
    decorationName: t
  })
}

function eK(e) {
  let t = (0, Z.nY)(e);
  return {
    launchInGameActivity: (0, d.Z)({
      applicationId: t
    })
  }
}
let ez = () => (0, Chunk442837.Wu)([Chunk616022.Z], () => [...Chunk616022.Z.quests.values()]).some(e => e.preview),
  eq = () => {
    let e = (0, Chunk36243.T)({
        location: Chunk324805.dr.QUEST_PREVIEW_TOOL_2
      }),
      t = ez();
    return module && exports
  },
  eQ = e => {
    var t;
    let n = (null == e ? true : e.userStatus) != null && (0, M.zE)(e.userStatus, P.jn.ACTIVITY_PANEL),
      r = eE(null != e ? e : null),
      i = (null == e || null == (t = e.userStatus) ? true : t.claimedAt) != null,
      a = (0, c.e7)([N.Z], () => null != N.Z.questEnrollmentBlockedUntil, []);
    return !n && !r && !i && !a
  },
  eX = () => {
    let e = (0, Chunk442837.Wu)([Chunk616022.Z], () => [...Chunk616022.Z.quests.values()]);
    return Chunk473749.useMemo(() => module.filter(e => e.preview), [module])
  };

function eJ() {
  return Chunk473749.useMemo(() => Chunk324805.Ew.map(e => {
    let [t, n] = e;
    return {
      heading: (0, j.T2)(t),
      options: n
    }
  }), [])
}

function e$() {
  return Chunk473749.useMemo(() => Object.keys(Chunk324805.yq).map(e => ({
    label: (0, j.NL)(V.yq[e]),
    value: V.yq[e]
  })), [])
}

function e0(e) {
  let {
    selectedSortMethod: t,
    selectedFilters: n,
    numQuestsVisible: i
  } = e, a = r.useRef(null), o = r.useRef(null);
  r.useEffect(() => {
    E.default.track(H.rMx.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: t,
      previous_sort_method: a.current
    }), a.current = t
  }, [t]), r.useEffect(() => {
    var e;
    let t = n.map(e => e.filter);
    E.default.track(H.rMx.QUEST_HOME_FILTERS_CHANGED, {
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
        return (null == (e = g.default.getCurrentUser()) ? true : e.isStaff()) === true
      }, []);
    return t || n || e.preview
  },
  e3 = (e, t) => {
    var n, r, i;
    let a = (null == (n = e.userStatus) ? true : n.completedAt) != null;
    return (null == (r = e.userStatus) ? true : r.enrolledAt) != null && !a && Date.now() - new Date(null == (i = e.userStatus) ? true : i.enrolledAt).getTime() > t
  };

function e2() {
  let {
    enabled: e
  } = Chunk937797.n0.useConfig({
    location: Chunk324805.dr.QUEST_HOME_DESKTOP
  }), [t, n] = Chunk473749.useState(module), [i, a] = Chunk473749.useState(module), [o, s] = Chunk473749.useState(false), [l, u] = Chunk473749.useState(false), {
    isFetching: d,
    takeoverConfig: f
  } = (0, Chunk442837.cj)([Chunk616022.Z], () => ({
    isFetching: Chunk616022.Z.isFetchingQuestHomeTakeover(),
    takeoverConfig: Chunk616022.Z.getQuestHomeTakeoverConfig()
  })), p = Chunk473749.useMemo(() => {
    if (!module || null == Chunk15624) return null;
    let t = new Date,
      n = new Date(Chunk15624.startsAt),
      r = new Date(Chunk15624.expiresAt);
    return exports < require || exports > Chunk473749 ? null : Chunk15624
  }, [module, Chunk15624]);
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
      try {
        if (null == Chunk15624) return;
        await Promise.all([(0, Chunk956664.pt)(Chunk15624.assetHeroImage.url), (0, Chunk956664.pt)(Chunk15624.assetSponsorImage.url)])
      } catch (e) {
        Chunk410030(true)
      } finally {
        Chunk278074(false)
      }
    }()
  }, [Chunk15624]), {
    takeover: Chunk754700 || Chunk780384 ? null : Chunk835473,
    isLoading: exports || Chunk217774 || Chunk392711
  }
}