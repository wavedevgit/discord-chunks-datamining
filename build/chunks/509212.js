/** Chunk was on web.js **/
/** chunk id: 509212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => e_,
  $J: () => eW,
  $V: () => e$,
  AV: () => ei,
  Ah: () => eZ,
  B3: () => e5,
  BI: () => tf,
  Bz: () => ez,
  DR: () => W,
  Dr: () => ef,
  E8: () => e0,
  Fs: () => e2,
  GN: () => ea,
  Gd: () => e8,
  Gs: () => V,
  HJ: () => eY,
  Jg: () => ec,
  KM: () => eh,
  M1: () => td,
  MC: () => B,
  Mo: () => H,
  NI: () => ta,
  NL: () => tl,
  Nj: () => ed,
  Nt: () => tc,
  PB: () => eV,
  PM: () => er,
  Pb: () => em,
  R_: () => tn,
  Rc: () => ts,
  Rt: () => ek,
  T2: () => tu,
  UE: () => et,
  Uy: () => e3,
  V$: () => eJ,
  VB: () => e7,
  V_: () => e9,
  Vl: () => eM,
  ZZ: () => q,
  Zp: () => e6,
  _D: () => z,
  _j: () => e1,
  _x: () => J,
  b7: () => eL,
  f2: () => eO,
  fY: () => eX,
  gI: () => eQ,
  iQ: () => ee,
  il: () => eD,
  jY: () => tt,
  lQ: () => Q,
  nY: () => Y,
  nc: () => ey,
  pO: () => ep,
  q8: () => tp,
  qe: () => te,
  uN: () => tr,
  vB: () => to,
  vR: () => es,
  vj: () => F,
  yH: () => e4,
  ys: () => el,
  zE: () => eo,
  zi: () => $,
  zo: () => eb
}), require("./388685.js"), require("./415506.js"), require("./642613.js"), require("./784620.js"), require("./973216.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk754700 = require("./754700.js"),
  Chunk820827 = require("./820827.js"),
  Chunk319245 = require("./319245.js"),
  Chunk95015 = require("./95015.js"),
  Chunk570140 = require("./570140.js"),
  Chunk782568 = require("./782568.js"),
  Chunk812206 = require("./812206.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk258609 = require("./258609.js"),
  Chunk102172 = require("./102172.js"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk572004 = require("./572004.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = 2592e6,
  U = e => e.application_id === w.Ev || e.platform === R.M7m.XBOX,
  G = e => e.platform === R.M7m.PS4 || e.platform === R.M7m.PS5;

function Z(e, t) {
  if (null == e) return;
  let n = new Set;
  for (let r of t) {
    let t = e.config.taskConfigV2.tasks[r];
    if (null != t && "applications" in t && Array.isArray(t.applications))
      for (let e of t.applications) n.add(e.id)
  }
  return n.size > 0 ? Array.from(n) : true
}

function B(e) {
  if (null == e) return;
  let t = Object.keys(e.config.taskConfigV2.tasks);
  return Z(e, t)
}

function F(e) {
  return Z(e, [i.X.PLAY_ON_DESKTOP])
}

function V(e) {
  let t = Z(e, [i.X.PLAY_ON_XBOX, i.X.PLAY_ON_PLAYSTATION]);
  return null == t ? true : t[0]
}

function H(e) {
  let t = Z(e, [i.X.PLAY_ACTIVITY]);
  return null == t ? true : t[0]
}

function Y(e) {
  let t = Z(e, [i.X.PLAY_ACTIVITY, i.X.ACHIEVEMENT_IN_ACTIVITY]);
  return null == t ? true : t[0]
}

function W(e) {
  let t = Z(e, [i.X.STREAM_ON_DESKTOP]);
  return null == t ? true : t[0]
}

function K(e, t) {
  let n = V(t);
  if (null == n) returnfalse;
  let r = u.Z.getApplication(n);
  return null != r && e === r.name.toLowerCase()
}

function z(e, t) {
  return null != e && (U(e) || G(e) ? K(e.name.toLowerCase(), t) : null != t && t.id === P.Jk && e.application_id === P.$z || null != e.application_id && X(e.application_id, t))
}

function q(e, t) {
  for (let [n, r] of e)
    if (z(t, r) && !$(r)) return r
}

function X(e, t) {
  let n = B(t);
  return null != n && n.some(t => t === e)
}

function Q(e, t) {
  let n;
  for (let [r, i] of e)
    if (X(t, i) && !$(i)) {
      n = i;
      break
    } return n
}

function J(e, t, n) {
  var r;
  let i = Array.isArray(t) ? new Map(t.map(e => [e.id, e])) : t,
    a = Array.isArray(n) ? new Map(n.map(e => [e.id, e])) : n,
    o = i.get(e);
  if (null != o) return o;
  let s = null == (r = a.get(e)) ? true : r.replacementId;
  if (null != s) return i.get(s)
}

function $(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function ee(e) {
  if (!$(e)) returnfalse;
  let t = Date.now() - k,
    n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t)
}

function et(e) {
  let t = null,
    n = Date.now();
  for (let r of e) {
    let e = new Date(r.config.expiresAt).valueOf();
    !(e <= n) && (null == t || e < t) && (t = e)
  }
  return t
}
let en = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function er(e, t, n) {
  let r = t.get(n);
  if (null == r) return;
  let i = e.get(r.quest.id);
  if (null != i && !$(i)) return i
}

function ei(e) {
  var t, n;
  let {
    quest: r,
    taskDetails: i,
    thirdPartyTaskDetails: a
  } = e;
  if ((null == (t = r.userStatus) ? true : t.completedAt) != null) return D.intl.string(D.t.BzFeTF);
  if ((null == (n = r.userStatus) ? true : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = i, t = null != a ? a.percentComplete : e;
    return t >= .75 ? D.intl.string(D.t.gvCR4H) : t >= .45 && t <= .55 ? D.intl.string(D.t.JNx8sG) : t > 0 ? D.intl.string(D.t.JMbfnc) : D.intl.string(D.t["7e5k7L"])
  }
  return D.intl.formatToPlainString(D.t.EQa7os, {
    questName: r.config.messages.questName
  })
}

function ea(e) {
  return Object.keys(P.a_).includes(C.jn[e])
}

function eo(e, t) {
  if (!ea(t)) returnfalse;
  let n = C.jn[t];
  return (0, s.yE)(e.dismissedQuestContent, P.a_[n])
}

function es(e, t) {
  return e.targetedContent.includes(t)
}

function el(e, t) {
  I.Z.captureException(e, M(L({}, t), {
    tags: M(L({}, null == t ? true : t.tags), {
      app_context: "quests"
    })
  }))
}

function ec(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    let t = q(e, n);
    if (null != t) return t
  }
  return null
}

function eu(e) {
  return null != e.taskConfigV2.tasks[i.X.PLAY_ON_DESKTOP]
}

function ed(e) {
  let {
    quest: t
  } = e;
  return eu(t.config)
}

function ef(e) {
  let {
    quest: t
  } = e;
  return null != t.config.taskConfigV2.tasks[i.X.STREAM_ON_DESKTOP]
}

function ep(e) {
  return null != e.config.taskConfigV2.tasks[i.X.PLAY_ACTIVITY]
}

function e_(e) {
  return null != e && ed({
    quest: e
  })
}

function em(e) {
  if (!(0, N.CD)("QuestUtils") || null == e) returnfalse;
  let t = F(e);
  return null != t && t.length > 1
}

function eh(e) {
  return H(e) === P.Ts
}

function eg(e, t) {
  return new Set(e.config.features).has(t)
}

function eE(e) {
  var t, n;
  let r = e.config.ctaConfig;
  return null == r ? null : ((0, S.isIOS)() || "ios" === (0, S.getOS)()) && (null == (t = r.ios) ? true : t.iosAppId) != null ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId) : ((0, S.isAndroid)() || "android" === (0, S.getOS)()) && (null == (n = r.android) ? true : n.androidAppId) != null ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId) : null
}

function eb(e) {
  return e.ctaConfig.link
}

function ey(e, t) {
  let n = eb(e.config),
    r = eE(e);
  null != r && (n = r), (0, T._3)({
    questId: e.id,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), y.S.dispatch(R.CkL.QUEST_GAME_LINK_OPENED), (0, c.Z)(n)
}
let eO = (e, t) => {
  (0, T._3)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, b.JG)(en(e))
};

function ev(e) {
  return (null == e ? true : e.type) === i.X.PLAY_ON_DESKTOP
}
let eS = (e, t) => e > 0 ? (0, r.floor)(Math.min(t / e, 1), 4) : 0,
  eI = e => ez(e) || A.Z.isProgressingOnDesktop(e.id),
  eT = (e, t) => {
    var n, i, a, o;
    let s = null == (o = e.userStatus) || null == (a = o.progress) || null == (i = a[t.type]) || null == (n = i.heartbeat) ? true : n.lastBeatAt;
    if (null == s || !eI(e)) return 0;
    let l = Date.now() - new Date(s).valueOf();
    return (0, r.floor)(l / O.Z.Millis.SECOND, 2)
  },
  eA = (e, t) => {
    var n, r, i, a, o;
    let s = null == (r = e.userStatus) || null == (n = r.progress) ? true : n[t.type],
      l = null != (o = null != (a = null == s ? true : s.value) ? a : null == (i = e.userStatus) ? true : i.streamProgressSeconds) ? o : 0;
    if (tp(e)) {
      let n = A.Z.getOptimisticProgress(e.id, t.type);
      return null == n || n < l ? l : n
    }
    return l + eT(e, t)
  },
  eC = .99,
  eN = (e, t) => {
    var n;
    let i = t.target;
    if ((null == (n = e.userStatus) ? true : n.completedAt) != null) return i;
    let a = Math.min(i * eC, eA(e, t));
    return Math.max((0, r.floor)(a, 2), 0)
  },
  eP = e => {
    var t, n, r;
    let {
      quest: a,
      taskType: o,
      includeTaskTypes: s = i.T.ALL
    } = e, l = a.config.taskConfigV2, c = null != o ? o : null == (t = Object.values(l.tasks).filter(e => s.has(e.type))[0]) ? true : t.type, u = null != (r = l.tasks[c]) ? r : l.tasks[i.X.STREAM_ON_DESKTOP];
    if (null == u) throw Error("No task with type ".concat(o, " found for quest ").concat(a.id, "!"));
    let d = u.target,
      f = eN(a, u),
      p = Object.values(l.tasks).find(ev),
      _ = null == p || null == (n = p.applications) ? true : n.map(e => e.id);
    return {
      progressSeconds: f,
      targetSeconds: d,
      targetMinutes: Math.ceil(d / O.Z.Seconds.MINUTE),
      percentComplete: eS(d, f),
      taskType: c,
      applications: _
    }
  },
  eR = e => i.T.ALL.has(e) ? e : null,
  ew = e => {
    var t, n;
    let {
      quest: r,
      includeTaskTypes: a = i.T.ALL
    } = e;
    for (let e of Object.values(null != (n = null == (t = r.userStatus) ? true : t.progress) ? n : {}).sort((e, t) => {
        var n, r;
        let i = null == e || null == (n = e.heartbeat) ? true : n.lastBeatAt,
          a = null == t || null == (r = t.heartbeat) ? true : r.lastBeatAt;
        return null != i && null != a ? new Date(i).valueOf() > new Date(a).valueOf() ? false : 1 : null == i && null == a && (null == e ? true : e.updatedAt) != null && (null == t ? true : t.updatedAt) != null ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? false : 1 : null != i && null == a ? false : 1
      }).filter(v.lm)) {
      let t = eR(e.eventName);
      if (null != t && (null == a ? true : a.has(t))) return eP({
        quest: r,
        taskType: t,
        includeTaskTypes: a
      })
    }
    return eP({
      quest: r,
      includeTaskTypes: a
    })
  },
  eD = (e, t) => {
    if (eM(e)) return {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: i.X.STREAM_ON_DESKTOP
    };
    if (eF(e)) return ew({
      quest: e,
      includeTaskTypes: null != t ? t : ez(e) ? i.T.CONSOLE : i.T.ALL
    });
    if (tp(e))
      if (eH(e)) return eP({
        quest: e,
        taskType: i.X.WATCH_VIDEO_ON_MOBILE
      });
      else return eP({
        quest: e,
        taskType: i.X.WATCH_VIDEO
      });
    return e_(e) ? eP({
      quest: e,
      taskType: i.X.PLAY_ON_DESKTOP
    }) : ep(e) ? eP({
      quest: e,
      taskType: i.X.PLAY_ACTIVITY
    }) : eP({
      quest: e,
      taskType: i.X.STREAM_ON_DESKTOP
    })
  };

function ex(e) {
  var t;
  let n = e.taskConfigV2.tasks,
    r = n[i.X.ACHIEVEMENT_IN_ACTIVITY],
    a = n[i.X.ACHIEVEMENT_IN_GAME];
  return null != (t = null != r ? r : a) ? t : null
}

function eL(e) {
  var t, n, r, i;
  let a = ex(e.config);
  if (null == a) return null;
  let o = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.type]) ? true : t.value) ? i : 0,
    s = eS(a.target, o);
  return {
    title: a.messages.taskTitle,
    description: a.messages.taskDescription,
    target: a.target,
    progress: o,
    percentComplete: s
  }
}
let ej = e => t => e.some(e => null != t.config.taskConfigV2.tasks[e]);

function eM(e) {
  return Array.from(i.T.IN_GAME).some(t => null != e.config.taskConfigV2.tasks[t])
}

function ek(e) {
  return (eM(e) || ep(e)) && e.config.features.includes(P.S7.START_QUEST_CTA)
}

function eU(e) {
  return eG(e.targetSeconds - e.progressSeconds)
}

function eG(e) {
  return {
    minutes: Math.max(0, Math.floor(e / 60)),
    seconds: Math.max(0, Math.floor(e % 60))
  }
}

function eZ(e) {
  let t = eU(e);
  return eB(t.minutes, t.seconds)
}

function eB(e, t) {
  return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"))
}
let eF = ej([Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION]),
  eV = ej([Chunk754700.X.WATCH_VIDEO]),
  eH = ej([Chunk754700.X.WATCH_VIDEO_ON_MOBILE]),
  eY = e => eH(e) && !eV(e);

function eW(e) {
  return eF(e)
}
let eK = (e, t) => {
  var n, r;
  let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? true : n.expiresAt;
  if (null == i) returnfalse;
  let a = new Date(i).valueOf();
  return !isNaN(a) && a > Date.now()
};

function ez(e) {
  return null != e.userStatus && (eK(e.userStatus, i.X.PLAY_ON_XBOX) || eK(e.userStatus, i.X.PLAY_ON_PLAYSTATION))
}

function eq() {
  {
    letChunk518596 = require("./518596.jsx");
    module(Chunk313789.n.CONNECTIONS_PANEL, {
      section: Chunk981631.oAB.CONNECTIONS
    })
  }
}

function eX(e, t) {
  let {
    platformType: n,
    quest: r
  } = e;
  (0, T._3)({
    questId: r.id,
    questContent: t.content,
    sourceQuestContent: t.sourceQuestContent,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId
  }), (0, d.Z)({
    platformType: n,
    location: t.ctaContent
  })
}

function eQ(e, t) {
  let {
    quest: n
  } = e;
  (0, T._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentRowIndex: t.rowIndex,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  });
  let r = e5(n);
  if (1 === r.length) return (0, d.Z)({
    platformType: r.at(0)
  });
  l.Z.dispatch({
    type: "CONNECTIONS_GRID_MODAL_SHOW",
    onComplete: e => (0, d.Z)({
      platformType: e
    }),
    includedPlatformTypes: new Set(r)
  })
}

function eJ(e, t) {
  let {
    quest: n
  } = e;
  (0, T._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), eq()
}

function e$() {
  return window.location.pathname.startsWith(Chunk981631.Z5c.QUEST_HOME)
}

function e0(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    dateStyle: "short"
  };
  return null == e ? "" : new Date(e).toLocaleDateString(_.default.locale, t)
}

function e1(e) {
  return "xbox" === e.connected_account_type ? R.ABu.XBOX : R.ABu.PLAYSTATION
}

function e3(e) {
  return e1(e) === R.ABu.XBOX ? D.t["mytEv+"] : D.t.iDiwby
}

function e2(e) {
  let {
    isTargetedDisclosure: t,
    gamePublisher: n,
    gameTitle: r,
    cosponsorName: i
  } = e;
  return t ? null == i ? D.intl.formatToPlainString(D.t.Piihy1, {
    gamePublisher: n
  }) : D.intl.formatToPlainString(D.t.DV47Gy, {
    gamePublisher: n,
    cosponsorName: i
  }) : D.intl.formatToPlainString(D.t.euizJY, {
    gamePublisher: n,
    gameTitle: r
  })
}

function e4(e) {
  let t = ed({
      quest: e
    }) || ef({
      quest: e
    }),
    n = eF(e),
    r = [];
  return t && r.push(P.cd.DESKTOP), n && r.push(P.cd.CONSOLE), r
}

function e5(e) {
  let t = Object.keys(e.config.taskConfigV2.tasks),
    n = [];
  for (let e of t) switch (e) {
    case i.X.PLAY_ON_XBOX:
      n.push(R.ABu.XBOX);
      break;
    case i.X.PLAY_ON_PLAYSTATION:
      n.push(R.ABu.PLAYSTATION)
  }
  return n
}

function e8(e) {
  let t = tp(e),
    n = ep(e);
  return t || n
}

function e6(e) {
  return ({
    [C.jn.QUEST_BAR]: C.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [C.jn.QUEST_BAR_V2]: C.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [C.jn.QUEST_BAR_MOBILE]: C.Ok.MOBILE_HOME_DOCK_AREA
  })[e]
}

function e7(e) {
  let t = e6(e);
  return null != t && P.v6.has(t)
}

function e9(e) {
  return null != e.config.ctaConfig.buttonLabel ? e.config.ctaConfig.buttonLabel : tp(e) || em(e) || ep(e) || eM(e) || e.config.features.includes(P.S7.NON_GAMING_PLAY_QUEST) ? D.intl.string(D.t.hvVgAZ) : D.intl.string(D.t.lwQdjB)
}

function te(e, t) {
  var n;
  let {
    quest: r,
    adDecisionData: i
  } = null != (n = A.Z.questToDeliverForPlacement.get(e6(t))) ? n : {};
  return null != i && (null == r ? true : r.id) === e ? i : P.Jp
}

function tt(e) {
  var t;
  let {
    metadataRaw: n
  } = null != (t = A.Z.questToDeliverForPlacement.get(e6(e))) ? t : {};
  return n
}

function tn(e) {
  var t;
  let {
    metadataSealed: n
  } = null != (t = A.Z.questToDeliverForPlacement.get(e6(e))) ? t : {};
  return n
}

function tr(e) {
  var t;
  let {
    adContext: n
  } = null != (t = A.Z.questToDeliverForPlacement.get(e6(e))) ? t : {};
  return n
}

function ti(e) {
  return new Set(Object.keys(e.config.taskConfigV2.tasks))
}

function ta(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    if (!(em(i) || eg(i, P.S7.NON_GAMING_PLAY_QUEST))) {
      for (let e of ti(i))
        if (t.has(e)) {
          n.set(r, i);
          break
        }
    } return n
}

function to(e) {
  return e.sharePolicy !== a.X.NOT_SHAREABLE
}

function ts(e, t) {
  return null != e && null != t && (0, p.p9)(t, E.Z, h.Z, g.Z, f.default)[0]
}

function tl(e) {
  switch (e) {
    case P.yq.SUGGESTED:
      return D.intl.string(D.t.gBfXPZ);
    case P.yq.MOST_RECENT:
      return D.intl.string(D.t.K6oEu2);
    case P.yq.EXPIRING_SOON:
      return D.intl.string(D.t.IB22n3);
    case P.yq.RECENTLY_ENROLLED:
      return D.intl.string(D.t["BB+2tX"])
  }
}

function tc(e) {
  switch (e) {
    case P.UP.VIRTUAL_CURRENCY:
      return D.intl.string(D.t.ElYQFS);
    case P.UP.COLLECTIBLE:
      return D.intl.string(D.t.Jg17Ut);
    case P.UP.IN_GAME:
      return D.intl.string(D.t["O/J2kr"]);
    case P.oH.VIDEO:
      return D.intl.string(D.t.e0iISA);
    case P.oH.PLAY:
      return D.intl.string(D.t["1nJR4p"])
  }
}

function tu(e) {
  switch (e) {
    case "reward":
      return D.intl.string(D.t.vjLqAU);
    case "task":
      return D.intl.string(D.t.Hufmss)
  }
}

function td(e) {
  if (0 === e.rewardsConfig.rewards.length) throw Error("Quest ".concat(e.id, " has no rewards configured"));
  return e.rewardsConfig.rewards[0]
}

function tf(e) {
  return tp({
    config: e
  }) ? o.W.VIDEO : o.W.GAMEPLAY
}
let tp = ej([Chunk754700.X.WATCH_VIDEO, Chunk754700.X.WATCH_VIDEO_ON_MOBILE])