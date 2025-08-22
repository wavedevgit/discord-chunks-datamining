/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => ey,
  B6: () => X,
  Bd: () => em,
  GI: () => eu,
  Gd: () => eT,
  I: () => eh,
  J2: () => G,
  Jf: () => er,
  KX: () => ef,
  OH: () => e_,
  Qy: () => eS,
  Rf: () => en,
  Yj: () => q,
  _Q: () => ep,
  _s: () => ed,
  bA: () => Y,
  e5: () => H,
  eN: () => W,
  eQ: () => ev,
  fN: () => es,
  iO: () => eo,
  kJ: () => el,
  me: () => eE,
  qI: () => eO,
  qb: () => eb,
  t5: () => ea,
  tP: () => z,
  uA: () => ei,
  vf: () => eI,
  z: () => ee,
  z6: () => ec,
  zB: () => eA
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
let k = false,
  U = 1;

function G() {
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
    c = (0, Chunk977156.cB)({
      location: Chunk46140.dr.USE_QUESTS
    }),
    u = Chunk937797.D.useConfig({
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

function B(e) {
  return e.sort((e, t) => {
    var n, r, i, a, o, s, l, c;
    let u = !(0, T.zi)(e);
    if (!(0, T.zi)(t) !== u) return u ? k : U;
    let d = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
      f = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
      _ = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
      p = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
    return u ? d !== f ? d ? U : k : _ !== p ? _ ? k : U : Z(null == (o = e.config) ? true : o.expiresAt, null == (s = t.config) ? true : s.expiresAt, 1) : d !== f ? d ? k : U : _ !== p ? _ ? k : U : Z(null == (l = e.config) ? true : l.expiresAt, null == (c = t.config) ? true : c.expiresAt, 0)
  })
}

function Z(e, t, n) {
  let r = 0 === n ? k : U;
  return e.localeCompare(t) * r
}

function V(e) {
  let t = r.useRef([]);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (t.current.length > 0 && t.current.length === e.length) return t.current;
    let n = B(e).map(e => e.id);
    return t.current = n, n
  }, [e])
}

function F(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? k : U : Z(D.r.build(e.config).rewardsExpireAt, D.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var H = function(e) {
  return e.ALL = "all", e.CLAIMED = "claimed", e
}({});

function Y(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n,
    hasFetched: r
  } = G({
    fetchPolicy: "cache-and-network",
    callerSource: "use_filtered_quests"
  }), i = new Map(t.map(e => [e.id, e])), a = V(t), o = F(t), s = [], l = [];
  for (let t of s = "all" === e ? a : o) {
    let e = i.get(t);
    null != e && l.push(e)
  }
  return {
    quests: l,
    isFetchingCurrentQuests: n,
    hasFetched: r
  }
}

function W() {
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

function K() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function z(e) {
  return (0, l.e7)([A.Z], () => null != e && A.Z.isQuestExpired(e.id), [e])
}

function q(e) {
  return r.useMemo(() => (0, T.q8)(e) || (0, T.Pb)(e) || (0, T.pO)(e) || (0, T.Vl)(e) ? M.intl.string(M.t.hvVgAQ) : M.intl.string(M.t.lwQdjI), [e])
}

function X(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, l.e7)([p.default], () => p.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function Q(e) {
  return (0, l.e7)([A.Z], () => A.Z.isProgressingOnDesktop(e.id))
}

function J(e) {
  return r.useMemo(() => (0, T.Bz)(e), [e])
}

function $(e) {
  let t = (0, l.e7)([A.Z], () => A.Z.getOptimisticProgress(e.id, a.X.WATCH_VIDEO));
  return r.useMemo(() => (0, T.BM)(e), [e, t])
}

function ee(e) {
  let t = Q(e),
    n = J(e),
    r = $(e);
  return t || n || r
}
let et = 1,
  en = e => {
    let t = r.useCallback(() => (0, T.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = ee(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, g.Z.Millis.SECOND * et);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function er(e) {
  return r.useMemo(() => (0, T.b7)(e), [e])
}
let ei = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = ed({
    quest: t
  }), a = (0, I.WD)();
  return () => {
    i ? (0, T.gI)({
      quest: t
    }, {
      content: n,
      ctaContent: v.jZ.CONNECT_CONSOLE_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    }) : (0, T.V$)({
      quest: t
    }, {
      content: n,
      ctaContent: v.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
      impressionId: null == a ? true : a.getId(),
      sourceQuestContent: r
    })
  }
};

function ea(e, t, n, r) {
  let {
    targetMinutes: i
  } = en(e), a = er(e), o = ei({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  });
  if ((0, T.$J)(e) && !(0, T.Nj)({
      quest: e
    })) return M.intl.format(M.t["l4S+cX"], {
    minutes: i,
    onClick: o,
    gameTitle: D.r.build(e.config).application.name
  });
  if ((0, T.$J)(e)) return M.intl.format(M.t.Ajlcd3, {
    minutes: i,
    onClick: o,
    gameTitle: D.r.build(e.config).application.name
  });
  if ((0, T.q8)(e)) {
    let t = D.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? M.intl.string(M.t["o+e9ys"]) : M.intl.formatToPlainString(M.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, T.pO)(e) && (0, T.KM)(e)) return M.intl.format(M.t["1NaRSk"], {
    minutes: i
  });
  let s = M.t["6zWtV1"];
  return (0, T.Nj)({
    quest: e
  }) && (s = M.t["wmOh/v"]), M.intl.format(s, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function eo() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = G({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = K();
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
        a = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !Chunk754700) {
        Chunk647438.push(exports);
        continue
      }
    }
    return Chunk647438
  }, [module, require, exports])
}

function es(e) {
  let t = (0, l.e7)([A.Z], () => A.Z.quests),
    n = r.useMemo(() => {
      let n = (0, T.MM)(t, x.tt);
      return (0, T.Jg)(n, e)
    }, [e, t]);
  return z(n) ? null : n
}

function el(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, S.Wf)(e),
    handleProgress: t => (0, S.Wf)(e, t),
    handleResetStatusClick: () => (0, S.eT)(e),
    handleResetDismissibilityClick: () => (0, S.T0)(e),
    handleOverrideDeliveryClick: () => (0, S.EW)(e)
  }), [e])
}

function ec() {
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
let eu = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [s, c] = r.useState([]), [u, d] = r.useState(false), f = (0, l.e7)([h.Z], () => h.Z.getAccounts());
    return r.useEffect(() => {
      c(e => e.filter(e => e.type !== o.K.EXPIRED_CREDENTIAL))
    }, [f]), {
      startConsoleQuest: r.useCallback(async () => {
        if (u) return;
        null == i || i(), d(true);
        let e = null;
        try {
          e = await (0, S.CS)(t, n), c(e.errorHints)
        } finally {
          var r;
          d(false), null == a || a(null != (r = null == e ? true : e.errorHints) ? r : [])
        }
      }, [u, i, a, n, t]),
      startingConsoleQuest: u,
      errorHints: s
    }
  },
  ed = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = ec(), r = ee(t), i = 0 === n.length;
    return (0, T.$J)(t) && i && !r
  },
  ef = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = ec(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
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
var e_ = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function ep(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = en(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eh(e) {
  let t = (0, l.e7)([p.default], () => p.default.locale),
    {
      percentComplete: n
    } = en(e),
    r = er(e),
    i = null != r ? r.percentComplete : n,
    a = 100 * i,
    o = null != r ? "".concat(null == r ? true : r.progress, "/").concat(null == r ? true : r.target) : (0, b.T3)(t, i, {
      roundingMode: "floor"
    });
  return {
    completedRatio: i,
    percentComplete: a,
    completedRatioDisplay: o
  }
}

function em(e, t) {
  var n, r;
  let i = en(e),
    a = (0, T.b7)(e),
    o = (0, P.DD)({
      quest: e,
      taskDetails: i,
      location: x.dr.QUEST_HOME_DESKTOP,
      questContent: C.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t
    }),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = X(null == (r = e.userStatus) ? true : r.claimedAt);
  return s ? M.intl.formatToPlainString(M.t.lOVr0N, {
    claimDate: l
  }) : null != a ? a.description : null != o ? o : null
}

function eg(e) {
  return [(0, l.e7)([A.Z], () => A.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, S.OR)(e, t), [e])]
}

function eE(e, t) {
  let [n, o] = eg(e.id), s = r.useMemo(() => (0, T.yH)(e), [e]), l = s.includes(x.cd.DESKTOP), c = s.includes(x.cd.CONSOLE), u = Q(e), d = J(e), f = r.useMemo(() => (0, i.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: a.X.PLAY_ON_DESKTOP
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.PLAY_ON_DESKTOP_V2
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.PLAY_ACTIVITY
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.WATCH_VIDEO
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.WATCH_VIDEO_ON_MOBILE
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.STREAM_ON_DESKTOP
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.PLAY_ON_XBOX
  }, () => x.cd.CONSOLE).with({
    taskType: a.X.PLAY_ON_PLAYSTATION
  }, () => x.cd.CONSOLE).with({
    taskType: a.X.ACHIEVEMENT_IN_GAME
  }, () => x.cd.DESKTOP).with({
    taskType: a.X.ACHIEVEMENT_IN_ACTIVITY
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
  }, () => c && l ? C.LI.SELECT : c ? C.LI.CONSOLE : C.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), s, o]
}

function eb(e) {
  var t, n;
  let r = er(e),
    i = en(e),
    [o] = eE(e, i),
    s = z(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = a.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !s && u && (d || f && o === C.LI.DESKTOP),
    p = (0, y.isWeb)() && _ && !(0, T.Gd)(e),
    h = (0, y.isMac)() && i.taskType === a.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(M.intl.string(M.t.MFGxFB)), p && m.push(M.intl.string(M.t.BV6xDg)), m
}

function ey(e) {
  var t;
  return null != (t = (0, l.e7)([A.Z], () => A.Z.quests).get(e)) ? t : null
}

function eO(e) {
  let {
    mode: t,
    questContent: n,
    sourceQuestContent: i,
    questId: a
  } = e, o = r.useRef(null);
  r.useEffect(() => {
    null != a && o.current !== t && ((0, v.Ic)({
      mode: t,
      prevMode: o.current,
      questContent: n,
      questId: a,
      sourceQuestContent: i
    }), o.current = t)
  }, [a, n, t, i]), r.useEffect(() => {
    if (null != a) return () => {
      (0, v.Ic)({
        mode: null,
        prevMode: o.current,
        questContent: n,
        questId: a,
        sourceQuestContent: i
      })
    }
  }, [a, n, i])
}

function ev(e) {
  var t, n;
  let r = (0, l.e7)([p.default], () => p.default.locale),
    i = en(e),
    [a] = eE(e, i),
    o = er(e),
    s = (null == (t = e.userStatus) ? true : t.completedAt) != null,
    c = null != o ? o.percentComplete : i.percentComplete;
  if (s) return M.intl.string(M.t["ij5E//"]);
  if ((null == (n = e.userStatus) ? true : n.enrolledAt) != null && c > 0) {
    let e = (0, b.T3)(r, c, {
      roundingMode: "floor"
    });
    return M.intl.formatToPlainString(M.t.lVZaXF, {
      percent: e
    })
  }
  return a === C.LI.SELECT ? M.intl.string(M.t.EMrUHR) : (0, T.$J)(e) ? M.intl.string(M.t.mOrpXF) : M.intl.string(M.t["7e5k7O"])
}

function eI(e) {
  var t;
  let {
    quest: n,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o
  } = e, s = X(r.useMemo(() => D.r.build(n.config).rewardsExpireAt, [n.config])), l = en(n), c = er(n), u = (null == (t = n.userStatus) ? true : t.completedAt) != null, d = ee(n), f = (0, P.DD)({
    quest: n,
    location: x.dr.QUESTS_BAR,
    questContent: C.jn.QUEST_BAR_V2,
    taskDetails: l,
    sourceQuestContent: a
  }), _ = null != c ? c.percentComplete : l.percentComplete;
  if (u) return M.intl.formatToPlainString(M.t.APddvL, {
    expirationDate: s
  });
  if (i)
    if (o === C.LI.SELECT) return M.intl.string(M.t.sWUpNz);
    else return f;
  if ((0, T.q8)(n)) return M.intl.string(M.t["o+e9ys"]);
  if (_ > 0)
    if (!d) return M.intl.string(M.t.mOrpXF);
    else return (0, T.AV)({
      quest: n,
      taskDetails: l,
      thirdPartyTaskDetails: null != c ? c : true
    });
  return M.intl.string(M.t.S6UUc3)
}

function eT(e, t) {
  let n = (0, l.e7)([A.Z], () => A.Z.getQuest(e), [e]),
    i = (0, c.ZP)(),
    a = r.useMemo(() => (null == n ? true : n.config.features.includes(x.S7.QUESTS_CDN)) === true, [n]);
  return r.useMemo(() => (null == n ? true : n.config.cosponsorMetadata) == null ? null : (0, w.Rt)(e, n.config.cosponsorMetadata.logotype, {
    theme: null != t ? t : (0, s.wj)(i) ? L.BRd.DARK : L.BRd.LIGHT,
    newCdn: a
  }), [i, t, e, null == n ? true : n.config.cosponsorMetadata, a])
}

function eS(e) {
  let t = D.r.build(e).defaultRewardName,
    n = (0, T.Kr)(e),
    r = (0, T.FX)(e),
    i = (0, T._p)(e),
    a = (0, T.f$)(e),
    o = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
    s = (0, O.I5)(o, j.p9.TIER_2);
  if (null == n) return M.intl.formatToPlainString(M.t.l9uXLy, {
    decorationName: t
  });
  let c = M.intl.formatToPlainString(M.t.o97tNj, {
      rewardName: t
    }),
    u = M.intl.formatToPlainString(M.t.PkyRZm, {
      rewardName: t,
      expirationDate: r
    }),
    d = M.intl.formatToPlainString(M.t.ie4YKy, {
      rewardName: t,
      duration: n
    }),
    f = M.intl.formatToPlainString(M.t.yCpc0d, {
      duration: n,
      rewardName: t
    }),
    _ = s ? c : d,
    p = s ? u : f,
    h = i ? _ : p;
  return a ? h : M.intl.formatToPlainString(M.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function eA(e) {
  let t = (0, l.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, d.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, _.uL)(L.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}