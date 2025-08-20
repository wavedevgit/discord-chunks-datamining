/** Chunk was on web.js **/
/** chunk id: 113434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B4: () => ev,
  B6: () => J,
  Bd: () => eE,
  GI: () => ef,
  Gd: () => eC,
  I: () => eg,
  J2: () => Z,
  Jf: () => ea,
  KX: () => ep,
  OH: () => eh,
  Qy: () => eN,
  Rf: () => ei,
  Yj: () => Q,
  _Q: () => em,
  _s: () => e_,
  bA: () => K,
  e5: () => W,
  eN: () => z,
  eQ: () => eS,
  fN: () => ec,
  iO: () => el,
  kJ: () => eu,
  me: () => ey,
  qI: () => eT,
  qb: () => eO,
  sf: () => eI,
  t5: () => es,
  tP: () => X,
  uA: () => eo,
  vf: () => eA,
  z: () => en,
  z6: () => ed,
  zB: () => eR
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./953529.js"), require("./314940.js");
var Chunk647438 = require("./647438.js"),
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
    l = (0, Chunk977156.cB)({
      location: Chunk46140.dr.USE_QUESTS
    }),
    c = Chunk937797.D.useConfig({
      location: Chunk46140.dr.USE_QUESTS
    });
  return Chunk647438.useEffect(() => {
    if ("cache-only" !== module.fetchPolicy && ("cache-and-network" === module.fetchPolicy || "cache-or-network" === module.fetchPolicy && 0 === Chunk754700) && Chunk959078 && !exports && !Chunk278074) {
      if (require(true), (0, Chunk272008.xw)(), !Chunk780384.enabled || "focused" === Chunk15624.Z.getState())(0, Chunk272008.w)(Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, "use_quests_".concat(module.callerSource))
    }
  }, [module.fetchPolicy, Chunk959078, exports, Chunk278074, Chunk754700, module.callerSource, Chunk780384.enabled]), {
    quests: Chunk512722,
    excludedQuests: a,
    isFetchingCurrentQuests: Chunk278074,
    hasFetched: exports
  }
}

function V(e) {
  return e.sort((e, t) => {
    var n, r, i, a, o, s, l, c;
    let u = !(0, A.zi)(e);
    if (!(0, A.zi)(t) !== u) return u ? G : B;
    let d = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
      f = (null == (r = t.userStatus) ? true : r.claimedAt) != null,
      _ = (null == (i = e.userStatus) ? true : i.enrolledAt) != null,
      p = (null == (a = t.userStatus) ? true : a.enrolledAt) != null;
    return u ? d !== f ? d ? B : G : _ !== p ? _ ? G : B : F(null == (o = e.config) ? true : o.expiresAt, null == (s = t.config) ? true : s.expiresAt, 1) : d !== f ? d ? G : B : _ !== p ? _ ? G : B : F(null == (l = e.config) ? true : l.expiresAt, null == (c = t.config) ? true : c.expiresAt, 0)
  })
}

function F(e, t, n) {
  let r = 0 === n ? G : B;
  return e.localeCompare(t) * r
}

function H(e) {
  let t = r.useRef([]);
  return r.useMemo(() => {
    if (0 === e.length) return [];
    if (t.current.length > 0 && t.current.length === e.length) return t.current;
    let n = V(e).map(e => e.id);
    return t.current = n, n
  }, [e])
}

function Y(e) {
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
      return i !== ((null == (r = t.userStatus) ? true : r.claimedAt) == null) ? i ? G : B : F(L.r.build(e.config).rewardsExpireAt, L.r.build(t.config).rewardsExpireAt, 0)
    }).map(e => e.id);
    return n.current = e, e
  }, [t])
}
var W = function(e) {
  return e.ALL = "all", e.CLAIMED = "claimed", e
}({});

function K(e) {
  let {
    quests: t,
    isFetchingCurrentQuests: n,
    hasFetched: r
  } = Z({
    fetchPolicy: "cache-and-network",
    callerSource: "use_filtered_quests"
  }), i = new Map(t.map(e => [e.id, e])), a = H(t), o = Y(t), s = [], l = [];
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

function z() {
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

function q() {
  return (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.getExpiredQuestsMap())
}

function X(e) {
  return (0, u.e7)([N.Z], () => null != e && N.Z.isQuestExpired(e.id), [e])
}

function Q(e) {
  return r.useMemo(() => (0, A.q8)(e) || (0, A.pO)(e) || (0, A.Vl)(e) ? U.intl.string(U.t.hvVgAQ) : U.intl.string(U.t.lwQdjI), [e])
}

function J(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, u.e7)([m.default], () => m.default.locale);
  return r.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function $(e) {
  return (0, u.e7)([N.Z], () => N.Z.isProgressingOnDesktop(e.id))
}

function ee(e) {
  return r.useMemo(() => (0, A.Bz)(e), [e])
}

function et(e) {
  let t = (0, u.e7)([N.Z], () => N.Z.getOptimisticProgress(e.id, s.X.WATCH_VIDEO));
  return r.useMemo(() => (0, A.BM)(e), [e, t])
}

function en(e) {
  let t = $(e),
    n = ee(e),
    r = et(e);
  return t || n || r
}
let er = 1,
  ei = e => {
    let t = r.useCallback(() => (0, A.il)(e), [e]),
      [n, i] = r.useState(t()),
      a = r.useCallback(() => i(t()), [t]),
      o = en(e);
    return r.useEffect(() => {
      var t, n, r;
      if ((null == (t = e.userStatus) ? true : t.enrolledAt) == null || (null == (n = e.userStatus) ? true : n.completedAt) != null || (null == (r = e.userStatus) ? true : r.claimedAt) != null || !o) return void a();
      let i = window.setInterval(() => {
        a()
      }, b.Z.Millis.SECOND * er);
      return () => {
        clearInterval(i), a()
      }
    }, [e, o, a]), n
  };

function ea(e) {
  return r.useMemo(() => (0, A.b7)(e), [e])
}
let eo = e => {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r
  } = e, i = e_({
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

function es(e, t, n, r) {
  let {
    targetMinutes: i
  } = ei(e), a = ea(e), o = eo({
    quest: e,
    questContent: n,
    sourceQuestContent: r
  });
  if ((0, A.$J)(e) && !(0, A.Nj)({
      quest: e
    })) return U.intl.format(U.t["l4S+cX"], {
    minutes: i,
    onClick: o,
    gameTitle: L.r.build(e.config).application.name
  });
  if ((0, A.$J)(e)) return U.intl.format(U.t.Ajlcd3, {
    minutes: i,
    onClick: o,
    gameTitle: L.r.build(e.config).application.name
  });
  if ((0, A.q8)(e)) {
    let t = L.r.build(e.config).defaultWatchVideoTask,
      n = null == t ? true : t.messages.videoTitle;
    return null == n ? U.intl.string(U.t["o+e9ys"]) : U.intl.formatToPlainString(U.t["9m9MnZ"], {
      videoTitle: n
    })
  }
  if (null != a) return a.title;
  if ((0, A.pO)(e) && (0, A.KM)(e)) return U.intl.format(U.t["1NaRSk"], {
    minutes: i
  });
  let s = U.t["6zWtV1"];
  return (0, A.Nj)({
    quest: e
  }) && (s = U.t["wmOh/v"]), U.intl.format(s, {
    minutes: i,
    gameTitle: e.config.messages.gameTitle
  })
}

function el() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = Z({
    fetchPolicy: "cache-or-network",
    callerSource: "settings_badge"
  }), n = q();
  return Chunk647438.useMemo(() => {
    let r = [];
    if (exports || 0 === module.length) return Chunk647438;
    for (let t of module) {
      var i;
      if (!(0, Chunk509212.vR)(exports, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE) || null != (i = require.get(exports.id)) && Chunk512722) continue;
      if ((null == exports ? true : exports.userStatus) == null) {
        Chunk647438.push(exports);
        continue
      }
      let e = null != exports.userStatus.claimedAt,
        a = (0, Chunk509212.zE)(exports.userStatus, Chunk497505.jn.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!module && !a) {
        Chunk647438.push(exports);
        continue
      }
    }
    return Chunk647438
  }, [module, require, exports])
}

function ec(e) {
  let t = (0, u.e7)([N.Z], () => N.Z.quests),
    n = r.useMemo(() => {
      let n = (0, A.MM)(t, j.tt);
      return (0, A.Jg)(n, e)
    }, [e, t]);
  return X(n) ? null : n
}

function eu(e) {
  return r.useMemo(() => ({
    handleComplete: () => (0, C.Wf)(e),
    handleProgress: t => (0, C.Wf)(e, t),
    handleResetStatusClick: () => (0, C.eT)(e),
    handleResetDismissibilityClick: () => (0, C.T0)(e),
    handleOverrideDeliveryClick: () => (0, C.EW)(e)
  }), [e])
}

function ed() {
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
let ef = e => {
    let {
      questId: t,
      preview: n,
      beforeRequest: i,
      afterRequest: a
    } = e, [o, s] = r.useState([]), [c, d] = r.useState(false), f = (0, u.e7)([g.Z], () => g.Z.getAccounts());
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
  e_ = e => {
    let {
      quest: t
    } = e, {
      xboxAndPlaystationAccounts: n
    } = ed(), r = en(t), i = 0 === n.length;
    return (0, A.$J)(t) && i && !r
  },
  ep = () => {
    let {
      xboxAccounts: e,
      playstationAccounts: t
    } = ed(), n = module.length > 0, r = exports.length > 0, i = require && !Chunk647438 || !require && Chunk647438, a = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_PLAYSTATION), o = Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUEST_HOW_TO_XBOX), s = Chunk388032.intl.format(Chunk388032.t.beN4DA, {
      psHelpdeskArticle: a,
      xboxHelpdeskArticle: Chunk278074
    }), l = Chunk388032.intl.format(Chunk388032.t.HVS7np, {
      helpdeskArticle: Chunk647438 ? a : Chunk278074
    });
    return {
      message: Chunk512722 ? Chunk959078 : Chunk754700,
      xboxURL: Chunk278074,
      playstationURL: a
    }
  };
var eh = function(e) {
  return e[e.UNACCEPTED = 0] = "UNACCEPTED", e[e.ACCEPTED = 1] = "ACCEPTED", e[e.IN_PROGRESS = 2] = "IN_PROGRESS", e[e.COMPLETED = 3] = "COMPLETED", e[e.CLAIMED = 4] = "CLAIMED", e
}({});

function em(e) {
  var t, n, r;
  let i = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    a = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    o = (null == (r = e.userStatus) ? true : r.claimedAt) != null,
    s = ei(e).percentComplete > 0;
  return o ? 4 : a ? 3 : s && i ? 2 : 1 * !!i
}

function eg(e) {
  let t = (0, u.e7)([m.default], () => m.default.locale),
    {
      percentComplete: n
    } = ei(e),
    r = ea(e),
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

function eE(e, t) {
  var n, r;
  let i = ei(e),
    a = (0, A.b7)(e),
    o = (0, D.DD)({
      quest: e,
      taskDetails: i,
      location: j.dr.QUEST_HOME_DESKTOP,
      questContent: R.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: t
    }),
    s = (null == (n = e.userStatus) ? true : n.claimedAt) != null,
    l = J(null == (r = e.userStatus) ? true : r.claimedAt);
  return s ? U.intl.formatToPlainString(U.t.lOVr0N, {
    claimDate: l
  }) : null != a ? a.description : null != o ? o : null
}

function eb(e) {
  return [(0, u.e7)([N.Z], () => N.Z.selectedTaskPlatform(e)), r.useCallback(t => (0, C.OR)(e, t), [e])]
}

function ey(e, t) {
  let [n, i] = eb(e.id), a = r.useMemo(() => (0, A.yH)(e), [e]), l = a.includes(j.cd.DESKTOP), c = a.includes(j.cd.CONSOLE), u = $(e), d = ee(e), f = r.useMemo(() => (0, o.EQ)(t).with({
    percentComplete: 0
  }, () => null).with({
    taskType: s.X.PLAY_ON_DESKTOP
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.PLAY_ON_DESKTOP_V2
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.PLAY_ACTIVITY
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.WATCH_VIDEO
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.WATCH_VIDEO_ON_MOBILE
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.STREAM_ON_DESKTOP
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.PLAY_ON_XBOX
  }, () => j.cd.CONSOLE).with({
    taskType: s.X.PLAY_ON_PLAYSTATION
  }, () => j.cd.CONSOLE).with({
    taskType: s.X.ACHIEVEMENT_IN_GAME
  }, () => j.cd.DESKTOP).with({
    taskType: s.X.ACHIEVEMENT_IN_ACTIVITY
  }, () => j.cd.DESKTOP).exhaustive(), [t]), _ = u ? j.cd.DESKTOP : d ? j.cd.CONSOLE : null;
  return [r.useMemo(() => (0, o.EQ)({
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
  }, () => c && l ? R.LI.SELECT : c ? R.LI.CONSOLE : R.LI.DESKTOP).exhaustive(), [c, l, f, _, n]), a, i]
}

function eO(e) {
  var t, n;
  let r = ea(e),
    i = ei(e),
    [a] = ey(e, i),
    o = X(e),
    l = (null == (t = e.userStatus) ? true : t.enrolledAt) != null,
    c = (null == (n = e.userStatus) ? true : n.completedAt) != null,
    u = null == r,
    d = s.T.DESKTOP.has(i.taskType) && i.percentComplete > 0,
    f = 0 === i.percentComplete,
    _ = l && !c && !o && u && (d || f && a === R.LI.DESKTOP),
    p = (0, v.isWeb)() && _ && !(0, A.Gd)(e),
    h = (0, v.isMac)() && i.taskType === s.X.STREAM_ON_DESKTOP && _,
    m = [];
  return h && m.push(U.intl.string(U.t.MFGxFB)), p && m.push(U.intl.string(U.t.BV6xDg)), m
}

function ev(e) {
  var t;
  return null != (t = (0, u.e7)([N.Z], () => N.Z.quests).get(e)) ? t : null
}

function eI(e) {
  let t = (0, u.e7)([N.Z], () => N.Z.getQuest(e), [e]);
  return a()(null != t, "Unknown quest ID ".concat(e)), t
}

function eT(e) {
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

function eS(e) {
  var t, n;
  let r = (0, u.e7)([m.default], () => m.default.locale),
    i = ei(e),
    [a] = ey(e, i),
    o = ea(e),
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

function eA(e) {
  var t;
  let {
    quest: n,
    isExpanded: i,
    sourceQuestContent: a,
    activeScreen: o
  } = e, s = J(r.useMemo(() => L.r.build(n.config).rewardsExpireAt, [n.config])), l = ei(n), c = ea(n), u = (null == (t = n.userStatus) ? true : t.completedAt) != null, d = en(n), f = (0, D.DD)({
    quest: n,
    location: j.dr.QUESTS_BAR,
    questContent: R.jn.QUEST_BAR_V2,
    taskDetails: l,
    sourceQuestContent: a
  }), _ = null != c ? c.percentComplete : l.percentComplete;
  if (u) return U.intl.formatToPlainString(U.t.APddvL, {
    expirationDate: s
  });
  if (i)
    if (o === R.LI.SELECT) return U.intl.string(U.t.sWUpNz);
    else return f;
  if ((0, A.q8)(n)) return U.intl.string(U.t["o+e9ys"]);
  if (_ > 0)
    if (!d) return U.intl.string(U.t.mOrpXF);
    else return (0, A.AV)({
      quest: n,
      taskDetails: l,
      thirdPartyTaskDetails: null != c ? c : true
    });
  return U.intl.string(U.t.S6UUc3)
}

function eC(e, t) {
  let n = (0, u.e7)([N.Z], () => N.Z.getQuest(e), [e]),
    i = (0, d.ZP)(),
    a = r.useMemo(() => (null == n ? true : n.config.features.includes(j.S7.QUESTS_CDN)) === true, [n]);
  return r.useMemo(() => (null == n ? true : n.config.cosponsorMetadata) == null ? null : (0, x.Rt)(e, n.config.cosponsorMetadata.logotype, {
    theme: null != t ? t : (0, c.wj)(i) ? M.BRd.DARK : M.BRd.LIGHT,
    newCdn: a
  }), [i, t, e, null == n ? true : n.config.cosponsorMetadata, a])
}

function eN(e) {
  let t = L.r.build(e).defaultRewardName,
    n = (0, A.Kr)(e),
    r = (0, A.FX)(e),
    i = (0, A._p)(e),
    a = (0, A.f$)(e),
    o = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
    s = (0, I.I5)(o, k.p9.TIER_2);
  if (null == n) return U.intl.formatToPlainString(U.t.l9uXLy, {
    decorationName: t
  });
  let l = U.intl.formatToPlainString(U.t.o97tNj, {
      rewardName: t
    }),
    c = U.intl.formatToPlainString(U.t.PkyRZm, {
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
    p = s ? c : f,
    h = i ? _ : p;
  return a ? h : U.intl.formatToPlainString(U.t.tTlItr, {
    duration: n,
    decorationName: t
  })
}

function eR(e) {
  let t = (0, u.e7)([f.ZP], () => f.ZP.getCurrentEmbeddedActivity());
  return {
    launchInGameActivity: r.useCallback(() => {
      null != t && t.applicationId === e.config.application.id ? (0, _.Z)("guild_id" in t.location ? t.location.guild_id : null, t.location) : (0, h.uL)(M.Z5c.ACTIVITY_DETAILS(e.config.application.id))
    }, [t, e.config.application.id])
  }
}