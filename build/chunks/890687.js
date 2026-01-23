/** Chunk was on web.js **/
/** chunk id: 890687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $P: () => e1,
  BL: () => ew,
  C5: () => eY,
  Du: () => eL,
  F3: () => eU,
  FA: () => ez,
  H6: () => eW,
  I3: () => eN,
  In: () => eG,
  Iq: () => eg,
  L1: () => eh,
  LS: () => ey,
  NC: () => e_,
  Nb: () => e$,
  O9: () => eV,
  Qh: () => em,
  Qo: () => eB,
  RR: () => eM,
  S5: () => eO,
  UX: () => ek,
  Vn: () => eS,
  Wj: () => ej,
  XD: () => e0,
  YW: () => eD,
  Yl: () => eb,
  _b: () => e6,
  a5: () => eK,
  aC: () => eH,
  cu: () => eR,
  fc: () => eC,
  j$: () => ex,
  mL: () => X,
  nv: () => e2,
  oH: () => eP,
  p5: () => eX,
  pT: () => eJ,
  sb: () => eQ,
  zW: () => eq
}), require("./896048.js"), require("./638769.js"), require("./321073.js"), require("./801541.js");
var Chunk64700 = require("./64700.js");
require("./284009.js");
var Chunk735438 = require("./735438.js"),
  Chunk889137 = require("./889137.js"),
  Chunk412703 = require("./412703.js"),
  Chunk114046 = require("./114046.js"),
  Chunk582754 = require("./582754.js"),
  Chunk311907 = require("./311907.js"),
  Chunk736653 = require("./736653.js"),
  Chunk787389 = require("./787389.js"),
  Chunk183636 = require("./183636.js"),
  Chunk429913 = require("./429913.js");
require("./674658.js");
var Chunk773669 = require("./773669.js"),
  Chunk734057 = require("./734057.js"),
  Chunk962173 = require("./962173.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk975571 = require("./975571.js"),
  Chunk515718 = require("./515718.js"),
  Chunk67486 = require("./67486.js"),
  Chunk252424 = require("./252424.js"),
  Chunk723702 = require("./723702.js"),
  Chunk927578 = require("./927578.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk302654 = require("./302654.js"),
  Chunk677402 = require("./677402.js"),
  Chunk807876 = require("./807876.js"),
  Chunk579473 = require("./579473.js"),
  Chunk651892 = require("./651892.js"),
  Chunk710969 = require("./710969.js"),
  Chunk639214 = require("./639214.js"),
  Chunk901406 = require("./901406.js"),
  Chunk92246 = require("./92246.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk753386 = require("./753386.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let q = false,
  Z = 1;

function X() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {
      fetchPolicy: "cache-only",
      callerSource: "unknown"
    },
    [t, n] = r.useState(false),
    i = (0, c.yK)([w.A], () => [...w.A.quests.values()]),
    a = (0, c.yK)([w.A], () => [...w.A.excludedQuests.values()]),
    {
      isFetchingCurrentQuests: s,
      lastFetchedCurrentQuests: o
    } = (0, c.cf)([w.A], () => ({
      isFetchingCurrentQuests: w.A.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: w.A.lastFetchedCurrentQuests
    })),
    l = (0, x.s)({
      location: Y.rE.USE_QUESTS
    }),
    u = P.Bw.useConfig({
      location: Y.rE.USE_QUESTS
    });
  return r.useEffect(() => {
    if ("cache-only" !== e.fetchPolicy && ("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === o) && l && !t && !s && !(0, v.I)()) {
      if (n(true), (0, T.N1)(), u.enabled && "focused" !== f.A.getState()) return;
      let {
        enableNewRequestBehavior: t
      } = D.A.getConfig({
        location: "QuestHookUseQuests"
      });
      if (!t)(0, T.r8)(R.yW.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(e.callerSource))
    }
  }, [e.fetchPolicy, l, t, s, o, e.callerSource, u.enabled]), {
    quests: i,
    excludedQuests: a,
    isFetchingCurrentQuests: s,
    hasFetched: t
  }
}

function Q(e, t, n) {
  var r, i, a, s, o, l;
  let c = e.id === Y.aJ,
    u = t.id === Y.aJ,
    d = c && (null == (r = e.userStatus) ? true : r.completedAt) == null;
  if (d !== (u && (null == (i = t.userStatus) ? true : i.completedAt) == null)) return d ? q : Z;
  let f = !(0, k.Ic)(e),
    p = (null == (a = e.userStatus) ? true : a.claimedAt) != null,
    _ = (null == (s = t.userStatus) ? true : s.claimedAt) != null,
    h = (null == (o = e.userStatus) ? true : o.enrolledAt) != null,
    m = (null == (l = t.userStatus) ? true : l.enrolledAt) != null,
    {
      enabled: g,
      minutes: E
    } = (0, P.L5)(Y.rE.QUEST_HOME_DESKTOP),
    b = y.A.Millis.MINUTE * E,
    O = e3(e, b),
    v = e3(t, b);
  if (f) {
    let {
      takeover: r
    } = n, i = null != r && (0, B.f0)(r, e.id), a = null != r && (0, B.f0)(r, t.id);
    return i !== a && (i || a) ? i ? q : Z : g && O !== v && (O || v) ? O ? Z : q : p !== _ ? p ? Z : q : h !== m ? h ? q : Z : ed(e.config.expiresAt, t.config.expiresAt, 1)
  }
  return p !== _ ? p ? q : Z : h !== m ? h ? q : Z : ed(e.config.expiresAt, t.config.expiresAt, 0)
}

function J(e, t, n) {
  return ed(e.config.startsAt, t.config.startsAt, 0)
}

function $(e, t, n) {
  var r, i;
  let a = null == (r = e.userStatus) ? true : r.enrolledAt,
    s = null == (i = t.userStatus) ? true : i.enrolledAt;
  return null == a && null == s ? ed(e.config.expiresAt, t.config.expiresAt, 0) : null != a && null == s ? q : null == a && null != s ? Z : ed(a, s, 0)
}

function ee(e, t, n) {
  return ed(e.config.expiresAt, t.config.expiresAt, 1)
}

function et(e, t) {
  return function(n, r) {
    let i = !(0, k.Ic)(n);
    return !(0, k.Ic)(r) !== i ? i ? q : Z : e(n, r, t)
  }
}

function en(e) {
  switch (e) {
    case Y.kL.MOST_RECENT:
      return J;
    case Y.kL.RECENTLY_ENROLLED:
      return $;
    case Y.kL.EXPIRING_SOON:
      return ee;
    case Y.kL.SUGGESTED:
    default:
      return Q
  }
}

function er(e, t) {
  switch (t) {
    case Y.Pc.VIDEO:
      return (0, F.vv)(e);
    case Y.Pc.PLAY:
      return (0, F.t)({
        quest: e
      }) || (0, F.fE)({
        quest: e
      }) || (0, F.vl)(e);
    default:
      returnfalse
  }
}

function ei(e, t) {
  switch (t) {
    case Y.BQ.VIRTUAL_CURRENCY:
      return (0, V.ks)(e.config);
    case Y.BQ.COLLECTIBLE:
      return (0, V.tU)(e.config);
    case Y.BQ.IN_GAME:
      return (0, V.HG)(e.config) || (0, V.r7)(e.config);
    default:
      returnfalse
  }
}

function ea(e) {
  switch (e) {
    case "task":
      return er;
    case "reward":
      return ei
  }
}

function es(e, t, n) {
  let r = ea(t);
  return 0 === n.length || n.some(t => r(e, t.filter))
}

function eo(e, t) {
  if (0 === t.length) return e;
  let n = (0, i.groupBy)(t, "group");
  return e.filter(e => Object.entries(n).every(t => {
    let [n, r] = t;
    return es(e, n, r)
  }))
}

function el() {
  return {
    takeover: w.A.getQuestHomeTakeoverConfig()
  }
}
let ec = {};

function eu(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ec,
    {
      sortMethod: n,
      filters: r
    } = t,
    i = null == r || 0 === r.length ? e : eo(e, r),
    a = et(en(n), el());
  return i.sort(a)
}

function ed(e, t, n) {
  let r = 0 === n ? q : Z;
  return e.localeCompare(t) * r
}

function ef(e, t) {
  let n = r.useRef([]),
    i = r.useRef(t.sortMethod),
    a = r.useRef(t.filters),
    s = r.useRef(0);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (n.current.length > 0 && s.current === e.length && i.current === t.sortMethod && a.current === t.filters) return n.current;
    let r = eu(e, t).map(e => e.id);
    return n.current = r, i.current = t.sortMethod, a.current = t.filters, s.current = e.length, r
  }, [e, t])
}

function ep(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? q : Z : ed(e.config.rewardsConfig.rewardsExpireAt, t.config.rewardsConfig.rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var e_ = function(e) {
    return e.ALL = "all", e.CLAIMED = "claimed", e.PREVIEW_TOOL = "preview_tool", e
  }({}),
  eh = function(e) {
    return e.TAB = "tab", e.QUEST_ID = "quest_id", e.SORT = "sort", e.FILTER = "filter", e
  }({});

function em(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : ec,
    {
      quests: n,
      excludedQuests: r,
      isFetchingCurrentQuests: i,
      hasFetched: a
    } = X({
      fetchPolicy: "cache-and-network",
      callerSource: "use_filtered_quests"
    }),
    s = new Map(n.map(e => [e.id, e])),
    o = ef(n, t),
    l = ep(n),
    c = [],
    u = [];
  for (let t of c = "all" === e ? o : l) {
    let e = s.get(t);
    null != e && u.push(e)
  }
  return {
    quests: u,
    excludedQuests: r,
    isFetchingCurrentQuests: i,
    hasFetched: a
  }
}

function eg() {
  let e = r.useRef(false),
    t = (0, c.yK)([w.A], () => Array.from(w.A.claimedQuests.values())),
    n = (0, c.bG)([w.A], () => w.A.isFetchingClaimedQuests);
  return r.useEffect(() => {
    n || e.current || (e.current = true, (0, T.HA)())
  }, [n]), {
    claimedQuests: t,
    isFetchingClaimedQuests: n
  }
}

function eE() {
  return (0, c.bG)([w.A], () => w.A.getExpiredQuestsMap())
}

function ey(e) {
  return (0, c.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e])
}

function eb(e, t, n) {
  var r;
  let i = (0, c.bG)([h.A], () => {
      var e;
      return null != (e = h.A.getChannel(null == t ? true : t.channelId)) ? e : null
    }),
    a = (0, c.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []),
    s = (0, c.bG)([g.default], () => {
      var e;
      return null == (e = g.default.getCurrentUser()) ? true : e.id
    }) === n,
    o = (0, c.bG)([w.A], () => null != e && w.A.isQuestExpired(e.id), [e]);
  if (null == e || a || o || s) returnfalse;
  let l = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    u = (0, B.Ll)(t, i);
  return !l || !!u
}

function eO(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, c.bG)([_.default], () => _.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function ev(e) {
  return (0, c.bG)([w.A], () => w.A.isProgressingOnDesktop(e.id))
}

function eA(e) {
  return r.useMemo(() => (0, F.YL)(e), [e])
}

function eI(e) {
  let t = (0, c.bG)([w.A], () => w.A.getOptimisticProgress(e.id, s.n.WATCH_VIDEO));
  return r.useMemo(() => (0, H.J$)(e), [e, t])
}

function eS(e) {
  let t = ev(e),
    n = eA(e),
    r = eI(e);
  return t || n || r
}
let eT = 1,
  eC = e => {
    let t = r.useCallback(() => (0, F.Yh)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      s = eS(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !s) return void a();
      let i = window.setInterval(() => {
        a()
      }, y.A.Millis.SECOND * eT);
      return () => {
        clearInterval(i), a()
      }
    }, [e, s, a]), n
  };

function eN(e) {
  return r.useMemo(() => (0, F.JC)(e), [e])
}
let ew = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = eM({
    quest: t
  }), a = (0, N.vU)();
  return () => {
    i ? (0, G.se)({
      quest: t
    }, {
      content: n,
      ctaContent: C.Cy.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, G.b6)({
      quest: t
    }, {
      content: n,
      ctaContent: C.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function eR() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = X({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = eE();
  return r.useMemo(() => {
    let r = [];
    if (t || 0 === e.length) return r;
    for (let t of e) {
      var i;
      if (!(0, k.ZA)(t, R.uF.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = n.get(t.id)) && i) continue;
      if ((null == t ? true : t.userStatus) == null) {
        r.push(t);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        a = (0, k.gO)(t.userStatus, R.uF.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !a) {
        r.push(t);
        continue
      }
    }
    return r
  }, [e, n, t])
}

function eP(e) {
  let t = r.useMemo(() => {
    let t = new Set;
    for (let n of e) {
      let e = (0, F.F9)(n);
      null != e && t.add(e)
    }
    return Array.from(t)
  }, [e]);
  return (0, p.A)(t)
}

function eD(e) {
  let t = (0, c.bG)([w.A], () => w.A.quests),
    n = eP(Array.from(t.values())),
    i = r.useMemo(() => {
      let n = (0, B.$e)(t, Y.zO);
      return (0, U.BM)(n, e)
    }, [e, t, n]);
  return ey(i) ? null : i
}

function ex(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, T.Yb)(e),
    handleProgress: t => (0, T.Yb)(e, t),
    handleResetStatusClick: () => (0, T.UZ)(e),
    handleResetDismissibilityClick: () => (0, T.Gt)(e),
    handleOverrideDeliveryClick: () => (0, T.d6)(e)
  }), [e])
}

function eL() {
  let {
    fetching: e,
    accounts: t
  } = (0, c.cf)([m.A], () => ({
    fetching: m.A.isFetching(),
    accounts: m.A.getAccounts()
  })), {
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: a
  } = r.useMemo(() => {
    let e = t.filter(e => false === e.revoked),
      n = e.filter(e => e.type === W.fg2.XBOX),
      r = e.filter(e => e.type === W.fg2.PLAYSTATION),
      i = n.concat(r);
    return {
      xboxAccounts: n,
      playstationAccounts: r,
      xboxAndPlaystationAccounts: i
    }
  }, [t]);
  return {
    fetching: e,
    xboxAccounts: n,
    playstationAccounts: i,
    xboxAndPlaystationAccounts: a
  }
}
let ej = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [s, l] = r.useState([]), [u, d] = r.useState(false), f = (0, c.bG)([m.A], () => m.A.getAccounts());
    return r.useEffect(() => {
      l(e => e.filter(e => e.type !== o._.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, T.vD)(t, n), l(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: s
    }
  },
  eM = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = eL(), r = eS(t), i = 0 === n.length;
    return (0, F.g5)(t) && i && !r
  },
  ek = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = eL(), n = e.length > 0, r = t.length > 0, i = n && !r || !n && r, a = b.A.getArticleURL(W.MVz.QUEST_HOW_TO_PLAYSTATION), s = b.A.getArticleURL(W.MVz.QUEST_HOW_TO_XBOX), o = z.intl.format(z.t.beN4DG, {
      psHelpdeskArticle: a,
      xboxHelpdeskArticle: s
    }), l = z.intl.format(z.t.HVS7nh, {
      helpdeskArticle: r ? a : s
    });
    return {
      message: i ? l : o,
      xboxURL: s,
      playstationURL: a
    }
  };
var eU = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function eG(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    s = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    o = eC(e).percentComplete > 0;
  return s ? 4 : a ? 3 : o && i ? 2 : 1 * !!i
}

function eV(e) {
  let t = (0, c.bG)([_.default], () => _.default.locale),
    {
      percentComplete: n
    } = eC(e),
    r = eN(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    s = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, A.l9)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: s
  }
}

function eF(e) {
  return [(0, c.bG)([w.A], () => w.A.selectedTaskPlatform(e)), r.useCallback(t => (0, T.lx)(e, t), [e])]
}

function eB(e, t) {
  let [n, i] = eF(e.id), o = r.useMemo(() => (0, G.UR)(e), [e]), l = o.includes(Y.fO.DESKTOP), c = o.includes(Y.fO.CONSOLE), u = ev(e), d = eA(e), f = r.useMemo(() => (0, a.YW)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: s.n.PLAY_ON_DESKTOP
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.PLAY_ON_DESKTOP_V2
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.PLAY_ACTIVITY
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.WATCH_VIDEO
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.WATCH_VIDEO_ON_MOBILE
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.STREAM_ON_DESKTOP
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.PLAY_ON_XBOX
  }, () => Y.fO.CONSOLE).with({
    taskType: s.n.PLAY_ON_PLAYSTATION
  }, () => Y.fO.CONSOLE).with({
    taskType: s.n.ACHIEVEMENT_IN_GAME
  }, () => Y.fO.DESKTOP).with({
    taskType: s.n.ACHIEVEMENT_IN_ACTIVITY
  }, () => Y.fO.DESKTOP).exhaustive(), [t]), p = u ? Y.fO.DESKTOP : d ? Y.fO.CONSOLE : null;
  return [r.useMemo(() => (0, a.YW)({
    lastPlatformProgress: f,
    currentProgressingPlatform: p,
    selectedPlatform: n
  }).with({
    currentProgressingPlatform: Y.fO.CONSOLE
  }, () => R.X0.CONSOLE).with({
    currentProgressingPlatform: Y.fO.DESKTOP
  }, () => R.X0.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: Y.fO.CONSOLE
  }, () => R.X0.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: Y.fO.DESKTOP
  }, () => R.X0.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: Y.fO.CONSOLE
  }, () => R.X0.CONSOLE).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: Y.fO.DESKTOP
  }, () => R.X0.DESKTOP).with({
    currentProgressingPlatform: null,
    lastPlatformProgress: null,
    selectedPlatform: null
  }, () => c && l ? R.X0.SELECT : c ? R.X0.CONSOLE : R.X0.DESKTOP).exhaustive(), [c, l, f, p, n]), o, i]
}

function eH(e) {
  var t, n;
  let r = eN(e),
    i = eC(e),
    [a] = eB(e, i),
    o = ey(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = s.o.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    p = l && !c && !o && u && (d || f && a === R.X0.DESKTOP),
    _ = (0, I.isWeb)() && p && !(0, G.W1)(e),
    h = (0, I.isMac)() && i.taskType === s.n.STREAM_ON_DESKTOP && p,
    m = [];
  return h && m.push(z.intl.string(z.t.MFGxFM)), _ && m.push(z.intl.string(z.t.BV6xDm)), m
}

function eY(e) {
  var t;
  return null != (t = (0, c.bG)([w.A], () => w.A.quests).get(e)) ? t : null
}

function eW(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, s = r.useRef(null);
  r.useEffect(() => {
    null != a && s.current !== t && ((0, C.Mm)({
      mode: t,
      prevMode: s.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), s.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, C.Mm)({
        mode: null,
        prevMode: s.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function eK(e, t) {
  let n = (0, c.bG)([w.A], () => w.A.getQuest(e), [e]),
    i = (0, u.Ay)();
  return r.useMemo(() => {
    if (null == n) return null;
    let e = null != t ? t : (0, l.Mw)(i) ? W.NJ8.DARK : W.NJ8.LIGHT;
    return (0, j.tW)(n, j.fY.COSPONSOR_LOGO_TYPE, e)
  }, [i, t, n])
}

function ez(e) {
  let t = (0, V.mq)(e),
    n = (0, V.k5)(e),
    r = (0, V.$5)(e),
    i = (0, V.Y7)(e),
    a = (0, V.JX)(e),
    s = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
    o = (0, S.TW)(s, K.PremiumTypes.TIER_2);
  if (null == n) return z.intl.formatToPlainString(z.t.l9uXL8, {
    decorationName: t
  });
  let l = z.intl.formatToPlainString(z.t.o97tNn, {
      rewardName: t
    }),
    u = z.intl.formatToPlainString(z.t.PkyRZo, {
      rewardName: t,
      expirationDate: r
    }),
    d = z.intl.formatToPlainString(z.t.ie4YK0, {
      rewardName: t,
      duration: n
    }),
    f = z.intl.formatToPlainString(z.t.yCpc0U, {
      duration: n,
      rewardName: t
    }),
    p = o ? l : d,
    _ = o ? u : f,
    h = i ? p : _;
  return a ? h : z.intl.formatToPlainString(z.t.tTlItm, {
    duration: n,
    decorationName: t
  })
}

function eq(e) {
  let t = (0, F.TP)(e);
  return {
    launchInGameActivity: (0, d.A)({
      applicationId: t
    })
  }
}
let eZ = () => (0, c.yK)([w.A], () => [...w.A.quests.values()]).some(e => e.preview),
  eX = () => {
    let e = (0, L.U)({
        location: Y.rE.QUEST_PREVIEW_TOOL_2
      }),
      t = eZ();
    return e && t
  },
  eQ = e => {
    var t;
    let n = (null == e ? true : e.userStatus) != null && (0, k.gO)(e.userStatus, R.uF.ACTIVITY_PANEL),
      r = ey(null != e ? e : null),
      i = (null == e || null == (t = e.userStatus) ? true : t.claimedAt) != null,
      a = (0, c.bG)([w.A], () => null != w.A.questEnrollmentBlockedUntil, []);
    return !n && !r && !i && !a
  },
  eJ = () => {
    let e = (0, c.yK)([w.A], () => [...w.A.quests.values()]);
    return r.useMemo(() => e.filter(e => e.preview), [e])
  };

function e$() {
  return r.useMemo(() => Y.pc.map(e => {
    let [t, n] = e;
    return {
      heading: (0, M.fx)(t),
      options: n
    }
  }), [])
}

function e0() {
  return r.useMemo(() => Object.keys(Y.kL).map(e => ({
    label: (0, M.Js)(Y.kL[e]),
    value: Y.kL[e]
  })), [])
}

function e1(e) {
  let {
    selectedSortMethod: t,
    selectedFilters: n,
    numQuestsVisible: i
  } = e, a = r.useRef(null), s = r.useRef(null);
  r.useEffect(() => {
    E.default.track(W.HAw.QUEST_HOME_SORT_METHOD_CHANGED, {
      sort_method: t,
      previous_sort_method: a.current
    }), a.current = t
  }, [t]), r.useEffect(() => {
    var e;
    let t = n.map(e => e.filter);
    E.default.track(W.HAw.QUEST_HOME_FILTERS_CHANGED, {
      filters: t,
      previous_filters: null != (e = s.current) ? e : [],
      num_quests_visible: i
    }), s.current = t
  }, [n, i])
}
let e2 = e => {
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

function e6() {
  let {
    enabled: e
  } = P.XM.useConfig({
    location: Y.rE.QUEST_HOME_DESKTOP
  }), [t, n] = r.useState(e), [i, a] = r.useState(e), [s, o] = r.useState(false), [l, u] = r.useState(false), {
    isFetching: d,
    takeoverConfig: f
  } = (0, c.cf)([w.A], () => ({
    isFetching: w.A.isFetchingQuestHomeTakeover(),
    takeoverConfig: w.A.getQuestHomeTakeoverConfig()
  })), p = r.useMemo(() => {
    if (!e || null == f) return null;
    let t = new Date,
      n = new Date(f.startsAt),
      r = new Date(f.expiresAt);
    return t < n || t > r ? null : f
  }, [e, f]);
  return r.useEffect(() => {
    e && t();
    async function t() {
      try {
        await (0, T.Tb)()
      } catch (e) {
        a(false), o(true)
      } finally {
        n(false)
      }
    }
  }, [e]), r.useEffect(() => {
    !async function() {
      try {
        if (null == f) return;
        await Promise.all([(0, O.NN)(f.assetHeroImage.url), (0, O.NN)(f.assetSponsorImage.url)])
      } catch (e) {
        u(true)
      } finally {
        a(false)
      }
    }()
  }, [f]), {
    takeover: s || l ? null : p,
    isLoading: t || d || i
  }
}