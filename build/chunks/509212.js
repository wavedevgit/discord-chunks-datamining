/** Chunk was on web.js **/
/** chunk id: 509212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => eD,
  $J: () => e9,
  AV: () => ef,
  B2: () => tA,
  B3: () => tm,
  BM: () => tn,
  Bg: () => eE,
  Bz: () => tt,
  C1: () => td,
  C9: () => tu,
  Dr: () => eP,
  F9: () => tT,
  FI: () => tb,
  FX: () => em,
  Fs: () => tf,
  GN: () => e_,
  Gd: () => tE,
  HJ: () => e7,
  Jg: () => eA,
  K: () => ev,
  KM: () => eL,
  Kr: () => eg,
  LM: () => eI,
  MM: () => tD,
  Mo: () => tx,
  Nj: () => eR,
  OG: () => ts,
  PB: () => e6,
  PM: () => eu,
  Pb: () => ex,
  Qe: () => Z,
  U3: () => $,
  V$: () => ta,
  VB: () => tO,
  Vl: () => e$,
  WP: () => ee,
  Xh: () => es,
  Xv: () => ey,
  Z5: () => eG,
  ZS: () => tI,
  ZZ: () => Y,
  Zp: () => ty,
  _D: () => H,
  _j: () => tc,
  _p: () => th,
  b7: () => eQ,
  bA: () => tS,
  f$: () => tp,
  f2: () => eU,
  fY: () => ti,
  gI: () => to,
  hF: () => tP,
  hQ: () => er,
  iQ: () => q,
  il: () => eX,
  jY: () => tN,
  lQ: () => K,
  nc: () => eM,
  o9: () => ek,
  oo: () => eC,
  pO: () => ew,
  q6: () => X,
  q8: () => e8,
  qe: () => tC,
  t2: () => ed,
  u7: () => tg,
  uN: () => tR,
  vB: () => tL,
  vQ: () => eO,
  vR: () => eT,
  xN: () => eb,
  xn: () => eh,
  yH: () => t_,
  yI: () => ei,
  ys: () => eS,
  zE: () => ep,
  zK: () => ej,
  zi: () => z
}), require("./388685.js"), require("./314940.js"), require("./953529.js"), require("./415506.js"), require("./642613.js"), require("./784620.js"), require("./973216.js"), require("./539854.js");
var Chunk991998 = require("./991998.js"),
  Chunk392711 = require("./392711.js"),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk551910 = require("./551910.js"),
  Chunk34738 = require("./34738.js"),
  Chunk887003 = require("./887003.js"),
  Chunk820827 = require("./820827.js"),
  Chunk570140 = require("./570140.js"),
  Chunk230711 = require("./230711.js"),
  Chunk782568 = require("./782568.js");
require("./597688.js");
var Chunk231757 = require("./231757.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk866960 = require("./866960.js"),
  Chunk572004 = require("./572004.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk960048 = require("./960048.js"),
  Chunk617136 = require("./617136.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk566078 = require("./566078.js"),
  Chunk312046 = require("./312046.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = 2592e6,
  B = new Set([Chunk34738.n.PREMIUM_EXTENSION, Chunk34738.n.PREMIUM_PERMANENT]);

function Z(e) {
  try {
    return (0, o.EQ)(e.config).with({
      config_version: 2
    }, () => true).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? true : t.config_version, "'"), n), false
  }
}
let F = e => e.application_id === x.Ev || e.platform === D.M7m.XBOX,
  V = e => e.platform === D.M7m.PS4 || e.platform === D.M7m.PS5;

function H(e, t) {
  if (null == e) returnfalse;
  let n = e.name.toLowerCase(),
    r = R.r.build(t.config).application.name.toLowerCase();
  return F(e) || V(e) ? n === r : null != e.application_id && W(e.application_id, t)
}

function Y(e, t) {
  for (let [n, r] of e)
    if (H(t, r) && !z(r)) return r
}

function W(e, t) {
  return null != R.r.build(t.config).application.ids.find(t => t === e)
}

function K(e, t) {
  let n;
  for (let [r, i] of e)
    if (W(t, i) && !z(i)) {
      n = i;
      break
    } return n
}

function z(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function q(e) {
  if (!z(e)) returnfalse;
  let t = Date.now() - G,
    n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t)
}

function X(e) {
  return (0, o.EQ)(e).with({
    config_version: 2
  }, e => (0, P.Q)(e)).exhaustive()
}

function Q(e) {
  return null == e ? null : {
    lastBeatAt: e.last_beat_at,
    expiresAt: e.expires_at
  }
}

function J(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    eventName: r.event_name,
    value: r.value,
    updatedAt: r.updated_at,
    completedAt: r.completed_at,
    heartbeat: Q(r.heartbeat)
  };
  return t
}

function $(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    enrolledAt: e.enrolled_at,
    completedAt: e.completed_at,
    claimedAt: e.claimed_at,
    claimedTier: null != (t = e.claimed_tier) ? t : null,
    lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
    streamProgressSeconds: e.stream_progress_seconds,
    dismissedQuestContent: e.dismissed_quest_content,
    progress: J(e.progress)
  }
}

function ee(e) {
  return {
    id: e.id,
    preview: e.preview,
    config: X(e.config),
    userStatus: null == e.user_status ? null : $(e.user_status),
    targetedContent: e.targeted_content
  }
}

function et(e) {
  return e.type === c.w.VIRTUAL_CURRENCY ? {
    skuId: e.sku_id,
    type: e.type,
    name: e.name,
    nameWithArticle: e.name_with_article,
    collectibleProduct: e.collectible_product,
    orbQuantity: e.orb_quantity
  } : {
    skuId: e.sku_id,
    type: e.type,
    name: e.name,
    nameWithArticle: e.name_with_article,
    asset: e.asset,
    assetVideo: e.asset_video,
    collectibleProduct: e.collectible_product
  }
}

function en(e) {
  return {
    id: e.id,
    startsAt: e.starts_at,
    expiresAt: e.expires_at,
    features: e.features,
    messages: {
      questName: e.messages.quest_name,
      gamePublisher: e.messages.game_publisher,
      gameTitle: e.messages.game_title
    },
    assets: {
      hero: e.assets.hero,
      heroVideo: e.assets.hero_video,
      questBarHero: e.assets.quest_bar_hero,
      questBarHeroVideo: e.assets.quest_bar_hero_video,
      gameTile: e.assets.game_tile,
      logotype: e.assets.logotype
    },
    colors: {
      primary: e.colors.primary,
      secondary: e.colors.secondary
    },
    rewards: e.rewards.map(et),
    cosponsorMetadata: (0, P.s)(e.cosponsor_metadata)
  }
}

function er(e) {
  return {
    id: e.id,
    config: en(e.config),
    userStatus: null == e.user_status ? null : $(e.user_status)
  }
}

function ei(e) {
  var t;
  return {
    userId: e.user_id,
    questId: e.quest_id,
    code: e.code,
    platform: e.platform,
    claimedAt: e.claimed_at,
    tier: null != (t = e.tier) ? t : null
  }
}

function eo(e) {
  if ((null == e ? true : e.quest_rewards) == null) return null;
  let t = e.quest_rewards;
  switch (t.reward.tag) {
    case c.w.IN_GAME:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag
          }
        }
      };
    case c.w.REWARD_CODE:
      return {
        questRewards: {
          reward: {
            tag: t.reward.tag,
            rewardCode: ei(t.reward.reward_code)
          }
        }
      }
  }
}

function ea(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: eo(e.tenant_metadata),
    consumed: e.consumed
  }
}

function es(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(ea),
    errors: e.errors
  }
}

function el(e) {
  return {
    eventName: e.event_name,
    title: e.title,
    description: e.description,
    target: e.target
  }
}
let ec = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function eu(e, t, n) {
  let r = t.get(n);
  if (null == r) return;
  let i = e.get(r.quest.id);
  if (null != i && !z(i)) return i
}
let ed = e => {
  switch (e) {
    case A.y$.XBOX:
      return L.intl.string(L.t.G84UWV);
    case A.y$.PLAYSTATION:
      return L.intl.string(L.t["6IeKx8"]);
    case A.y$.SWITCH:
      return L.intl.string(L.t["1pp0sr"]);
    case A.y$.PC:
      return L.intl.string(L.t["YK+wUl"]);
    case A.y$.CROSS_PLATFORM:
      return L.intl.string(L.t.UWVbzc)
  }
};

function ef(e) {
  var t, n;
  let {
    quest: r,
    taskDetails: i,
    thirdPartyTaskDetails: o
  } = e;
  if ((null == (t = r.userStatus) ? true : t.completedAt) != null) return L.intl.string(L.t.BzFeTE);
  if ((null == (n = r.userStatus) ? true : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = i, t = null != o ? o.percentComplete : e;
    return t >= .75 ? L.intl.string(L.t.gvCR4O) : t >= .45 && t <= .55 ? L.intl.string(L.t.JNx8sL) : t > 0 ? L.intl.string(L.t.JMbfnZ) : L.intl.string(L.t["7e5k7O"])
  }
  return L.intl.formatToPlainString(L.t.EQa7oq, {
    questName: r.config.messages.questName
  })
}

function e_(e) {
  return Object.keys(w.a_).includes(A.jn[e])
}

function ep(e, t) {
  if (!e_(t)) returnfalse;
  let n = A.jn[t];
  return (0, y.yE)(e.dismissedQuestContent, w.a_[n])
}

function eh(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === c.w.COLLECTIBLE);
  return (null == t ? true : t.type) === c.w.COLLECTIBLE ? t : null
}

function em(e) {
  let t = eh(e);
  return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? tl(t.expiresAtPremium) : null
}

function eg(e) {
  let t = eh(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = new Date(e.expiresAt),
    i = new Date(t.expiresAt),
    o = (0, r.Z)(i, n),
    a = Math.floor(o / 30) + +(o % 30 >= 25);
  if (a >= 12) {
    let e = Math.floor(a / 12);
    return L.intl.formatToPlainString(L.t.PClsr6, {
      years: e
    })
  } {
    if (a > 0) return L.intl.formatToPlainString(L.t.kridzM, {
      months: a
    });
    let e = (0, r.Z)(i, n);
    if (!(e >= 7)) return L.intl.formatToPlainString(L.t.k2UNz8, {
      days: e
    });
    {
      let t = Math.ceil(e / 7);
      return L.intl.formatToPlainString(L.t.EmoBDw, {
        weeks: t
      })
    }
  }
}

function eE(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.FRACTIONAL_PREMIUM)
}

function eb(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.VIRTUAL_CURRENCY)
}

function ey(e) {
  return null != eh(e)
}

function eO(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.IN_GAME)
}

function ev(e) {
  var t;
  return null != (t = e.rewardsConfig.rewards.find(e => e.type === c.w.IN_GAME)) ? t : null
}

function eI(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === c.w.VIRTUAL_CURRENCY);
  return null == t ? true : t.orbQuantity
}

function eT(e, t) {
  return e.targetedContent.includes(t)
}

function eS(e, t) {
  v.Z.captureException(e, U(k({}, t), {
    tags: U(k({}, null == t ? true : t.tags), {
      app_context: "quests"
    })
  }))
}

function eA(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    let t = Y(e, n);
    if (null != t) return t
  }
  return null
}

function eC(e) {
  let {
    quest: {
      config: t
    }
  } = e, n = t.rewardsConfig;
  return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.type === c.w.REWARD_CODE)
}

function eN(e) {
  return null != e.taskConfigV2.tasks[a.X.PLAY_ON_DESKTOP]
}

function eR(e) {
  let {
    quest: t
  } = e;
  return eN(t.config)
}

function eP(e) {
  let {
    quest: t
  } = e;
  return null != t.config.taskConfigV2.tasks[a.X.STREAM_ON_DESKTOP]
}

function ew(e) {
  return null != e.config.taskConfigV2.tasks[a.X.PLAY_ACTIVITY]
}

function eD(e) {
  return null != e && eR({
    quest: e
  })
}

function ex(e) {
  if (null == e) returnfalse;
  let t = R.r.build(e.config).applications;
  return null != t && t.length > 1
}

function eL(e) {
  let t = R.r.build(e.config).application.id;
  return ew(e) && t === w.Ts
}

function ej(e, t) {
  return R.r.build(e.config).features.has(t)
}

function ek(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return r.type === c.w.REWARD_CODE ? r : null
}

function eM(e, t) {
  let n = R.r.build(e.config).application.link;
  (0, I._3)({
    questId: e.id,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), E.S.dispatch(D.CkL.QUEST_GAME_LINK_OPENED), (0, _.Z)(n)
}
let eU = (e, t) => {
  (0, I._3)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, g.JG)(ec(e))
};

function eG(e) {
  var t;
  return (0, N.CD)("QuestUtils") && (null != (t = null == e ? true : e.length) ? t : 0) > 1
}

function eB(e) {
  return (null == e ? true : e.type) === a.X.PLAY_ON_DESKTOP
}
let eZ = (e, t) => e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0,
  eF = e => tt(e) || S.Z.isProgressingOnDesktop(e.id),
  eV = (e, t) => {
    var n, r, o, a;
    let s = null == (a = e.userStatus) || null == (o = a.progress) || null == (r = o[t.type]) || null == (n = r.heartbeat) ? true : n.lastBeatAt;
    if (null == s || !eF(e)) return 0;
    let l = Date.now() - new Date(s).valueOf();
    return (0, i.floor)(l / b.Z.Millis.SECOND, 2)
  },
  eH = (e, t) => {
    var n, r, i, o, a;
    let s = null == (r = e.userStatus) || null == (n = r.progress) ? true : n[t.type],
      l = null != (a = null != (o = null == s ? true : s.value) ? o : null == (i = e.userStatus) ? true : i.streamProgressSeconds) ? a : 0;
    if (e8(e)) {
      let n = S.Z.getOptimisticProgress(e.id, t.type);
      return null == n || n < l ? l : n
    }
    return l + eV(e, t)
  },
  eY = .99,
  eW = (e, t) => {
    var n;
    let r = t.target;
    if ((null == (n = e.userStatus) ? true : n.completedAt) != null) return r;
    let o = Math.min(r * eY, eH(e, t));
    return Math.max((0, i.floor)(o, 2), 0)
  },
  eK = e => {
    var t, n;
    let {
      quest: r,
      taskType: i,
      includeTaskTypes: o = a.T.ALL
    } = e, s = r.config.taskConfigV2, l = null != i ? i : null == (t = Object.values(s.tasks).filter(e => o.has(e.type))[0]) ? true : t.type, c = null != (n = s.tasks[l]) ? n : s.tasks[a.X.STREAM_ON_DESKTOP];
    if (null == c) throw Error("No task with type ".concat(i, " found for quest ").concat(r.id, "!"));
    let u = c.target,
      d = eW(r, c),
      f = eB(c) && null != c.applications ? c.applications.map(e => e.id) : true;
    return {
      progressSeconds: d,
      targetSeconds: u,
      targetMinutes: Math.ceil(u / b.Z.Seconds.MINUTE),
      percentComplete: eZ(u, d),
      taskType: l,
      applications: f
    }
  },
  ez = e => a.T.ALL.has(e) ? e : null,
  eq = e => {
    var t, n;
    let {
      quest: r,
      includeTaskTypes: i = a.T.ALL
    } = e;
    for (let e of Object.values(null != (n = null == (t = r.userStatus) ? true : t.progress) ? n : {}).sort((e, t) => {
        var n, r;
        let i = null == e || null == (n = e.heartbeat) ? true : n.lastBeatAt,
          o = null == t || null == (r = t.heartbeat) ? true : r.lastBeatAt;
        return null != i && null != o ? new Date(i).valueOf() > new Date(o).valueOf() ? false : 1 : null == i && null == o && (null == e ? true : e.updatedAt) != null && (null == t ? true : t.updatedAt) != null ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? false : 1 : null != i && null == o ? false : 1
      }).filter(O.lm)) {
      let t = ez(e.eventName);
      if (null != t && (null == i ? true : i.has(t))) return eK({
        quest: r,
        taskType: t,
        includeTaskTypes: i
      })
    }
    return eK({
      quest: r,
      includeTaskTypes: i
    })
  },
  eX = (e, t) => {
    if (e$(e)) return {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: a.X.STREAM_ON_DESKTOP
    };
    if (e4(e)) return eq({
      quest: e,
      includeTaskTypes: null != t ? t : tt(e) ? a.T.CONSOLE : a.T.ALL
    });
    if (e8(e))
      if (e5(e)) return eK({
        quest: e,
        taskType: a.X.WATCH_VIDEO_ON_MOBILE
      });
      else return eK({
        quest: e,
        taskType: a.X.WATCH_VIDEO
      });
    return eD(e) ? eK({
      quest: e,
      taskType: a.X.PLAY_ON_DESKTOP
    }) : ew(e) ? eK({
      quest: e,
      taskType: a.X.PLAY_ACTIVITY
    }) : eK({
      quest: e,
      taskType: a.X.STREAM_ON_DESKTOP
    })
  };

function eQ(e) {
  var t, n, r, i;
  let o = R.r.build(e.config).defaultInGameTask;
  if (null == o) return null;
  let a = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[o.eventName]) ? true : t.value) ? i : 0,
    s = eZ(o.target, a);
  return {
    title: o.messages.taskTitle,
    description: o.messages.taskDescription,
    target: o.target,
    progress: a,
    percentComplete: s
  }
}
let eJ = e => t => e.some(e => null != t.config.taskConfigV2.tasks[e]);

function e$(e) {
  return Array.from(a.T.IN_GAME).some(t => null != e.config.taskConfigV2.tasks[t])
}

function e0(e) {
  return e1(e.targetSeconds - e.progressSeconds)
}

function e1(e) {
  return {
    minutes: Math.max(0, Math.floor(e / 60)),
    seconds: Math.max(0, Math.floor(e % 60))
  }
}

function e2(e) {
  let t = e0(e);
  return e3(t.minutes, t.seconds)
}

function e3(e, t) {
  return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"))
}
let e4 = eJ([Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION]),
  e8 = eJ([Chunk754700.X.WATCH_VIDEO, Chunk754700.X.WATCH_VIDEO_ON_MOBILE]),
  e6 = eJ([Chunk754700.X.WATCH_VIDEO]),
  e5 = eJ([Chunk754700.X.WATCH_VIDEO_ON_MOBILE]),
  e7 = e => e5(e) && !e6(e);

function e9(e) {
  return e4(e)
}
let te = (e, t) => {
  var n, r;
  let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? true : n.expiresAt;
  if (null == i) returnfalse;
  let o = new Date(i).valueOf();
  return !isNaN(o) && o > Date.now()
};

function tt(e) {
  return null != e.userStatus && (te(e.userStatus, a.X.PLAY_ON_XBOX) || te(e.userStatus, a.X.PLAY_ON_PLAYSTATION))
}

function tn(e) {
  return !!e8(e) && (0, n(952265).nf)(tg(e.id))
}

function tr() {
  Chunk230711.Z.open(Chunk981631.oAB.CONNECTIONS)
}

function ti(e, t) {
  let {
    platformType: n,
    quest: r
  } = e;
  (0, I._3)({
    questId: r.id,
    questContent: t.content,
    sourceQuestContent: t.sourceQuestContent,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId
  }), (0, p.Z)({
    platformType: n,
    location: t.ctaContent
  })
}

function to(e, t) {
  let {
    quest: n
  } = e;
  (0, I._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentRowIndex: t.rowIndex,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  });
  let r = tm(n);
  if (1 === r.length) return (0, p.Z)({
    platformType: r.at(0)
  });
  d.Z.dispatch({
    type: "CONNECTIONS_GRID_MODAL_SHOW",
    onComplete: e => (0, p.Z)({
      platformType: e
    }),
    includedPlatformTypes: new Set(r)
  })
}

function ta(e, t) {
  let {
    quest: n
  } = e;
  (0, I._3)({
    questId: n.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), tr()
}

function ts() {
  return window.location.pathname.startsWith(Chunk981631.Z5c.QUEST_HOME)
}

function tl(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    dateStyle: "short"
  };
  return null == e ? "" : new Date(e).toLocaleDateString(h.default.locale, t)
}

function tc(e) {
  return "xbox" === e.connected_account_type ? D.ABu.XBOX : D.ABu.PLAYSTATION
}

function tu(e) {
  return tc(e) === D.ABu.XBOX ? L.t.mytEv7 : L.t.iDiwb2
}

function td(e) {
  var t, n, r, i;
  let {
    quest: o,
    rewardCode: a,
    selectedPlatformType: s,
    sharedQuestFields: l
  } = e, c = eC({
    quest: o
  }), u = null != s ? s : null == a ? true : a.platform, d = c ? ek({
    quest: o,
    idx: null != (r = null == a ? true : a.tier) ? r : null == (t = o.userStatus) ? true : t.claimedTier
  }) : null, f = null != (i = null == d || null == (n = d.messages) ? true : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
  return null != u ? f[u] : true
}

function tf(e) {
  let {
    isTargetedDisclosure: t,
    gamePublisher: n,
    gameTitle: r,
    cosponsorName: i
  } = e;
  return t ? null == i ? L.intl.formatToPlainString(L.t.Piihy8, {
    gamePublisher: n
  }) : L.intl.formatToPlainString(L.t.DV47Gx, {
    gamePublisher: n,
    cosponsorName: i
  }) : L.intl.formatToPlainString(L.t.tOWwxM, {
    gamePublisher: n,
    gameTitle: r
  })
}

function t_(e) {
  let t = eR({
      quest: e
    }) || eP({
      quest: e
    }),
    n = e4(e),
    r = [];
  return t && r.push(w.cd.DESKTOP), n && r.push(w.cd.CONSOLE), r
}

function tp(e) {
  var t;
  let n = null == (t = eh(e)) ? true : t.expirationMode;
  return null != n && B.has(n)
}

function th(e) {
  var t;
  return tp(e) && (null == (t = eh(e)) ? true : t.expirationMode) === l.n.PREMIUM_PERMANENT
}

function tm(e) {
  let t = Object.keys(e.config.taskConfigV2.tasks),
    n = [];
  for (let e of t) switch (e) {
    case a.X.PLAY_ON_XBOX:
      n.push(D.ABu.XBOX);
      break;
    case a.X.PLAY_ON_PLAYSTATION:
      n.push(D.ABu.PLAYSTATION)
  }
  return n
}

function tg(e) {
  return "VIDEO-QUEST-".concat(e)
}

function tE(e) {
  let t = e8(e),
    n = ew(e);
  return t || n
}

function tb(e, t) {
  var n, r;
  z(e) || (null == (n = e.userStatus) ? true : n.enrolledAt) == null || (null == (r = e.userStatus) ? true : r.completedAt) != null || (0, T.cT)(e.id, t)
}

function ty(e) {
  return ({
    [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA
  })[e]
}

function tO(e) {
  let t = ty(e);
  return null != t && w.v6.has(t)
}
let tv = "landscape";

function tI(e) {
  let t = e.assets.video;
  return null == t || null == t.width || null == t.height ? tv : t.width > t.height ? "landscape" : "portrait"
}
let tT = e => e.percentComplete > 0 ? L.intl.formatToPlainString(L.t["c59/Tk"], {
  remainTime: e2(e)
}) : L.intl.formatToPlainString(L.t.GNsKiY, {
  remainTime: e2(e)
});

function tS(e, t) {
  return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round(e / t * 100) / 100)
}

function tA(e) {
  var t, n;
  let r = R.r.build(e).defaultWatchVideoTask;
  return null != (n = null != (t = null == r ? true : r.messages.videoEndCtaButtonLabel) ? t : null == r ? true : r.messages.videoEndCtaTitle) ? n : L.intl.string(L.t.iiTtpK)
}

function tC(e, t) {
  var n;
  let {
    quest: r,
    adDecisionData: i
  } = null != (n = S.Z.questToDeliverForPlacement.get(ty(t))) ? n : {};
  return null != i && (null == r ? true : r.id) === e ? i : w.Jp
}

function tN(e) {
  var t;
  let {
    metadataRaw: n
  } = null != (t = S.Z.questToDeliverForPlacement.get(ty(e))) ? t : {};
  return n
}

function tR(e) {
  var t;
  let {
    adContext: n
  } = null != (t = S.Z.questToDeliverForPlacement.get(ty(e))) ? t : {};
  return n
}

function tP(e) {
  var t, n;
  let r = null != (n = null == (t = e.userStatus) ? true : t.claimedTier) ? n : 0;
  return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r]
}

function tw(e) {
  return new Set(Object.keys(e.config.taskConfigV2.tasks))
}

function tD(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    for (let e of tw(i))
      if (t.has(e)) {
        n.set(r, i);
        break
      } return n
}

function tx(e) {
  var t, n;
  let {
    questId: r,
    sourceQuestContent: i,
    videoSessionId: o
  } = e, a = C.ZP.getState().getVideoProgress(r);
  if (null == a) return;
  let s = S.Z.getQuest(r);
  null != s && (null == (t = s.userStatus) ? true : t.enrolledAt) != null && (null == (n = s.userStatus) ? true : n.completedAt) == null && tb(s, a.maxTimestampSec);
  let l = tS(a.maxTimestampSec, a.duration);
  (0, I.dA)({
    questId: r,
    event: D.rMx.QUEST_VIDEO_PROGRESSED,
    properties: {
      progress: l,
      video_timestamp_seconds: a.maxTimestampSec,
      video_session_id: o
    },
    sourceQuestContent: i
  }), (0, I.dA)({
    questId: r,
    event: D.rMx.QUEST_VIDEO_MODAL_CLOSED,
    properties: {
      video_progress: l,
      video_session_id: o,
      network_connection_speed: m.Z.getEffectiveConnectionSpeed()
    },
    sourceQuestContent: i
  })
}

function tL(e) {
  return e.sharePolicy !== u.X.NOT_SHAREABLE
}