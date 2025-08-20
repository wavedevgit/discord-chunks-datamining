/** Chunk was on web.js **/
/** chunk id: 509212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => ew,
  $J: () => e5,
  AV: () => ed,
  B2: () => tT,
  B3: () => tp,
  BM: () => te,
  Bg: () => eg,
  Bz: () => e9,
  C1: () => tc,
  C9: () => tl,
  Dr: () => eR,
  F9: () => tv,
  FI: () => tg,
  FX: () => eh,
  Fs: () => tu,
  GN: () => ef,
  Gd: () => tm,
  HJ: () => e6,
  Jg: () => eS,
  K: () => eO,
  KM: () => eD,
  Kr: () => em,
  LM: () => ev,
  MM: () => tP,
  Mo: () => tw,
  Nj: () => eN,
  OG: () => ta,
  PB: () => e4,
  PM: () => ec,
  Qe: () => B,
  U3: () => J,
  V$: () => ti,
  VB: () => tb,
  Vl: () => eQ,
  WP: () => $,
  Xh: () => eo,
  Xv: () => eb,
  ZS: () => tO,
  ZZ: () => H,
  Zp: () => tE,
  _D: () => F,
  _j: () => ts,
  _p: () => t_,
  b7: () => eq,
  bA: () => tI,
  f$: () => tf,
  f2: () => eM,
  fY: () => tn,
  gI: () => tr,
  gv: () => ek,
  hF: () => tN,
  hQ: () => en,
  iQ: () => z,
  il: () => ez,
  jY: () => tA,
  lQ: () => W,
  nc: () => ej,
  o9: () => eL,
  oo: () => eA,
  pO: () => eP,
  q6: () => q,
  q8: () => e3,
  qe: () => tS,
  t2: () => eu,
  u7: () => th,
  uN: () => tC,
  vB: () => tD,
  vQ: () => ey,
  vR: () => eI,
  xN: () => eE,
  xn: () => ep,
  yH: () => td,
  yI: () => er,
  ys: () => eT,
  zE: () => e_,
  zK: () => ex,
  zi: () => K
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
  Chunk566078 = require("./566078.js"),
  Chunk312046 = require("./312046.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
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

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = 2592e6,
  G = new Set([Chunk34738.n.PREMIUM_EXTENSION, Chunk34738.n.PREMIUM_PERMANENT]);

function B(e) {
  try {
    return (0, a.EQ)(e.config).with({
      config_version: 2
    }, () => true).exhaustive()
  } catch (n) {
    var t;
    return console.error("Unknown config version '".concat(null == e || null == (t = e.config) ? true : t.config_version, "'"), n), false
  }
}
let Z = e => e.application_id === D.Ev || e.platform === w.M7m.XBOX,
  V = e => e.platform === w.M7m.PS4 || e.platform === w.M7m.PS5;

function F(e, t) {
  if (null == e) returnfalse;
  let n = e.name.toLowerCase(),
    r = N.r.build(t.config).application.name.toLowerCase();
  return Z(e) || V(e) ? n === r : null != e.application_id && Y(e.application_id, t)
}

function H(e, t) {
  for (let [n, r] of e)
    if (F(t, r) && !K(r)) return r
}

function Y(e, t) {
  return null != N.r.build(t.config).application.ids.find(t => t === e)
}

function W(e, t) {
  let n;
  for (let [r, i] of e)
    if (Y(t, i) && !K(i)) {
      n = i;
      break
    } return n
}

function K(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function z(e) {
  if (!K(e)) returnfalse;
  let t = Date.now() - U,
    n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t)
}

function q(e) {
  return (0, a.EQ)(e).with({
    config_version: 2
  }, e => (0, R.Q)(e)).exhaustive()
}

function X(e) {
  return null == e ? null : {
    lastBeatAt: e.last_beat_at,
    expiresAt: e.expires_at
  }
}

function Q(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = {
    eventName: r.event_name,
    value: r.value,
    updatedAt: r.updated_at,
    completedAt: r.completed_at,
    heartbeat: X(r.heartbeat)
  };
  return t
}

function J(e) {
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
    progress: Q(e.progress)
  }
}

function $(e) {
  return {
    id: e.id,
    preview: e.preview,
    config: q(e.config),
    userStatus: null == e.user_status ? null : J(e.user_status),
    targetedContent: e.targeted_content
  }
}

function ee(e) {
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

function et(e) {
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
    rewards: e.rewards.map(ee),
    cosponsorMetadata: (0, R.s)(e.cosponsor_metadata)
  }
}

function en(e) {
  return {
    id: e.id,
    config: et(e.config),
    userStatus: null == e.user_status ? null : J(e.user_status)
  }
}

function er(e) {
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

function ei(e) {
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
            rewardCode: er(t.reward.reward_code)
          }
        }
      }
  }
}

function ea(e) {
  return {
    skuId: e.sku_id,
    tenantMetadata: ei(e.tenant_metadata),
    consumed: e.consumed
  }
}

function eo(e) {
  return {
    claimedAt: e.claimed_at,
    items: e.entitlements.map(ea),
    errors: e.errors
  }
}

function es(e) {
  return {
    eventName: e.event_name,
    title: e.title,
    description: e.description,
    target: e.target
  }
}
let el = e => "".concat(location.protocol, "//").concat(location.host, "/quests/").concat(e);

function ec(e, t, n) {
  let r = t.get(n);
  if (null == r) return;
  let i = e.get(r.quest.id);
  if (null != i && !K(i)) return i
}
let eu = e => {
  switch (e) {
    case A.y$.XBOX:
      return x.intl.string(x.t.G84UWV);
    case A.y$.PLAYSTATION:
      return x.intl.string(x.t["6IeKx8"]);
    case A.y$.SWITCH:
      return x.intl.string(x.t["1pp0sr"]);
    case A.y$.PC:
      return x.intl.string(x.t["YK+wUl"]);
    case A.y$.CROSS_PLATFORM:
      return x.intl.string(x.t.UWVbzc)
  }
};

function ed(e) {
  var t, n;
  let {
    quest: r,
    taskDetails: i,
    thirdPartyTaskDetails: a
  } = e;
  if ((null == (t = r.userStatus) ? true : t.completedAt) != null) return x.intl.string(x.t.BzFeTE);
  if ((null == (n = r.userStatus) ? true : n.enrolledAt) != null) {
    let {
      percentComplete: e
    } = i, t = null != a ? a.percentComplete : e;
    return t >= .75 ? x.intl.string(x.t.gvCR4O) : t >= .45 && t <= .55 ? x.intl.string(x.t.JNx8sL) : t > 0 ? x.intl.string(x.t.JMbfnZ) : x.intl.string(x.t["7e5k7O"])
  }
  return x.intl.formatToPlainString(x.t.EQa7oq, {
    questName: r.config.messages.questName
  })
}

function ef(e) {
  return Object.keys(P.a_).includes(A.jn[e])
}

function e_(e, t) {
  if (!ef(t)) returnfalse;
  let n = A.jn[t];
  return (0, y.yE)(e.dismissedQuestContent, P.a_[n])
}

function ep(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === c.w.COLLECTIBLE);
  return (null == t ? true : t.type) === c.w.COLLECTIBLE ? t : null
}

function eh(e) {
  let t = ep(e);
  return null != t && "expiresAtPremium" in t && null != t.expiresAtPremium ? to(t.expiresAtPremium) : null
}

function em(e) {
  let t = ep(e);
  if (null == t || !("expiresAt" in t) || null == t.expiresAt) return null;
  let n = new Date(e.expiresAt),
    i = new Date(t.expiresAt),
    a = (0, r.Z)(i, n),
    o = Math.floor(a / 30) + +(a % 30 >= 25);
  if (o >= 12) {
    let e = Math.floor(o / 12);
    return x.intl.formatToPlainString(x.t.PClsr6, {
      years: e
    })
  } {
    if (o > 0) return x.intl.formatToPlainString(x.t.kridzM, {
      months: o
    });
    let e = (0, r.Z)(i, n);
    if (!(e >= 7)) return x.intl.formatToPlainString(x.t.k2UNz8, {
      days: e
    });
    {
      let t = Math.ceil(e / 7);
      return x.intl.formatToPlainString(x.t.EmoBDw, {
        weeks: t
      })
    }
  }
}

function eg(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.FRACTIONAL_PREMIUM)
}

function eE(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.VIRTUAL_CURRENCY)
}

function eb(e) {
  return null != ep(e)
}

function ey(e) {
  return e.rewardsConfig.rewards.some(e => e.type === c.w.IN_GAME)
}

function eO(e) {
  var t;
  return null != (t = e.rewardsConfig.rewards.find(e => e.type === c.w.IN_GAME)) ? t : null
}

function ev(e) {
  let t = e.rewardsConfig.rewards.find(e => e.type === c.w.VIRTUAL_CURRENCY);
  return null == t ? true : t.orbQuantity
}

function eI(e, t) {
  return e.targetedContent.includes(t)
}

function eT(e, t) {
  v.Z.captureException(e, k(j({}, t), {
    tags: k(j({}, null == t ? true : t.tags), {
      app_context: "quests"
    })
  }))
}

function eS(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    let t = H(e, n);
    if (null != t) return t
  }
  return null
}

function eA(e) {
  let {
    quest: {
      config: t
    }
  } = e, n = t.rewardsConfig;
  return n.assignmentMethod === s.j.TIERED && n.rewards.length > 0 && n.rewards.every(e => e.type === c.w.REWARD_CODE)
}

function eC(e) {
  return null != e.taskConfigV2.tasks[o.X.PLAY_ON_DESKTOP]
}

function eN(e) {
  let {
    quest: t
  } = e;
  return eC(t.config)
}

function eR(e) {
  let {
    quest: t
  } = e;
  return null != t.config.taskConfigV2.tasks[o.X.STREAM_ON_DESKTOP]
}

function eP(e) {
  return null != e.config.taskConfigV2.tasks[o.X.PLAY_ACTIVITY]
}

function ew(e) {
  return null != e && eN({
    quest: e
  })
}

function eD(e) {
  let t = N.r.build(e.config).application.id;
  return eP(e) && t === P.Ts
}

function ex(e, t) {
  return N.r.build(e.config).features.has(t)
}

function eL(e) {
  let {
    quest: t,
    idx: n
  } = e;
  if (null == n) return null;
  let r = t.config.rewardsConfig.rewards[n];
  return r.type === c.w.REWARD_CODE ? r : null
}

function ej(e, t) {
  let n = N.r.build(e.config).application.link;
  (0, I._3)({
    questId: e.id,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), E.S.dispatch(w.CkL.QUEST_GAME_LINK_OPENED), (0, _.Z)(n)
}
let eM = (e, t) => {
  (0, I._3)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position,
    impressionId: t.impressionId,
    sourceQuestContent: t.sourceQuestContent
  }), (0, g.JG)(el(e))
};

function ek(e) {
  var t;
  return (null != (t = null == e ? true : e.length) ? t : 0) > 1
}

function eU(e) {
  return (null == e ? true : e.type) === o.X.PLAY_ON_DESKTOP
}
let eG = (e, t) => e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0,
  eB = e => e9(e) || S.Z.isProgressingOnDesktop(e.id),
  eZ = (e, t) => {
    var n, r, a, o;
    let s = null == (o = e.userStatus) || null == (a = o.progress) || null == (r = a[t.type]) || null == (n = r.heartbeat) ? true : n.lastBeatAt;
    if (null == s || !eB(e)) return 0;
    let l = Date.now() - new Date(s).valueOf();
    return (0, i.floor)(l / b.Z.Millis.SECOND, 2)
  },
  eV = (e, t) => {
    var n, r, i, a, o;
    let s = null == (r = e.userStatus) || null == (n = r.progress) ? true : n[t.type],
      l = null != (o = null != (a = null == s ? true : s.value) ? a : null == (i = e.userStatus) ? true : i.streamProgressSeconds) ? o : 0;
    if (e3(e)) {
      let n = S.Z.getOptimisticProgress(e.id, t.type);
      return null == n || n < l ? l : n
    }
    return l + eZ(e, t)
  },
  eF = .99,
  eH = (e, t) => {
    var n;
    let r = t.target;
    if ((null == (n = e.userStatus) ? true : n.completedAt) != null) return r;
    let a = Math.min(r * eF, eV(e, t));
    return Math.max((0, i.floor)(a, 2), 0)
  },
  eY = e => {
    var t, n;
    let {
      quest: r,
      taskType: i,
      includeTaskTypes: a = o.T.ALL
    } = e, s = r.config.taskConfigV2, l = null != i ? i : null == (t = Object.values(s.tasks).filter(e => a.has(e.type))[0]) ? true : t.type, c = null != (n = s.tasks[l]) ? n : s.tasks[o.X.STREAM_ON_DESKTOP];
    if (null == c) throw Error("No task with type ".concat(i, " found for quest ").concat(r.id, "!"));
    let u = c.target,
      d = eH(r, c),
      f = eU(c) && null != c.applications ? c.applications.map(e => e.id) : true;
    return {
      progressSeconds: d,
      targetSeconds: u,
      targetMinutes: Math.ceil(u / b.Z.Seconds.MINUTE),
      percentComplete: eG(u, d),
      taskType: l,
      applications: f
    }
  },
  eW = e => o.T.ALL.has(e) ? e : null,
  eK = e => {
    var t, n;
    let {
      quest: r,
      includeTaskTypes: i = o.T.ALL
    } = e;
    for (let e of Object.values(null != (n = null == (t = r.userStatus) ? true : t.progress) ? n : {}).sort((e, t) => {
        var n, r;
        let i = null == e || null == (n = e.heartbeat) ? true : n.lastBeatAt,
          a = null == t || null == (r = t.heartbeat) ? true : r.lastBeatAt;
        return null != i && null != a ? new Date(i).valueOf() > new Date(a).valueOf() ? false : 1 : null == i && null == a && (null == e ? true : e.updatedAt) != null && (null == t ? true : t.updatedAt) != null ? new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? false : 1 : null != i && null == a ? false : 1
      }).filter(O.lm)) {
      let t = eW(e.eventName);
      if (null != t && (null == i ? true : i.has(t))) return eY({
        quest: r,
        taskType: t,
        includeTaskTypes: i
      })
    }
    return eY({
      quest: r,
      includeTaskTypes: i
    })
  },
  ez = (e, t) => {
    if (eQ(e)) return {
      progressSeconds: 0,
      targetSeconds: 1,
      targetMinutes: 1,
      percentComplete: 0,
      taskType: o.X.STREAM_ON_DESKTOP
    };
    if (e2(e)) return eK({
      quest: e,
      includeTaskTypes: null != t ? t : e9(e) ? o.T.CONSOLE : o.T.ALL
    });
    if (e3(e))
      if (e8(e)) return eY({
        quest: e,
        taskType: o.X.WATCH_VIDEO_ON_MOBILE
      });
      else return eY({
        quest: e,
        taskType: o.X.WATCH_VIDEO
      });
    return ew(e) ? eY({
      quest: e,
      taskType: o.X.PLAY_ON_DESKTOP
    }) : eP(e) ? eY({
      quest: e,
      taskType: o.X.PLAY_ACTIVITY
    }) : eY({
      quest: e,
      taskType: o.X.STREAM_ON_DESKTOP
    })
  };

function eq(e) {
  var t, n, r, i;
  let a = N.r.build(e.config).defaultInGameTask;
  if (null == a) return null;
  let o = null != (i = null == (r = e.userStatus) || null == (n = r.progress) || null == (t = n[a.eventName]) ? true : t.value) ? i : 0,
    s = eG(a.target, o);
  return {
    title: a.messages.taskTitle,
    description: a.messages.taskDescription,
    target: a.target,
    progress: o,
    percentComplete: s
  }
}
let eX = e => t => e.some(e => null != t.config.taskConfigV2.tasks[e]);

function eQ(e) {
  return Array.from(o.T.IN_GAME).some(t => null != e.config.taskConfigV2.tasks[t])
}

function eJ(e) {
  return e$(e.targetSeconds - e.progressSeconds)
}

function e$(e) {
  return {
    minutes: Math.max(0, Math.floor(e / 60)),
    seconds: Math.max(0, Math.floor(e % 60))
  }
}

function e0(e) {
  let t = eJ(e);
  return e1(t.minutes, t.seconds)
}

function e1(e, t) {
  return "".concat(String(e).padStart(2, "0"), ":").concat(String(t).padStart(2, "0"))
}
let e2 = eX([Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION]),
  e3 = eX([Chunk754700.X.WATCH_VIDEO, Chunk754700.X.WATCH_VIDEO_ON_MOBILE]),
  e4 = eX([Chunk754700.X.WATCH_VIDEO]),
  e8 = eX([Chunk754700.X.WATCH_VIDEO_ON_MOBILE]),
  e6 = e => e8(e) && !e4(e);

function e5(e) {
  return e2(e)
}
let e7 = (e, t) => {
  var n, r;
  let i = null == e || null == (r = e.progress[t]) || null == (n = r.heartbeat) ? true : n.expiresAt;
  if (null == i) returnfalse;
  let a = new Date(i).valueOf();
  return !isNaN(a) && a > Date.now()
};

function e9(e) {
  return null != e.userStatus && (e7(e.userStatus, o.X.PLAY_ON_XBOX) || e7(e.userStatus, o.X.PLAY_ON_PLAYSTATION))
}

function te(e) {
  return !!e3(e) && (0, n(952265).nf)(th(e.id))
}

function tt() {
  Chunk230711.Z.open(Chunk981631.oAB.CONNECTIONS)
}

function tn(e, t) {
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

function tr(e, t) {
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
  let r = tp(n);
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

function ti(e, t) {
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
  }), tt()
}

function ta() {
  return window.location.pathname.startsWith(Chunk981631.Z5c.QUEST_HOME)
}

function to(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    dateStyle: "short"
  };
  return null == e ? "" : new Date(e).toLocaleDateString(h.default.locale, t)
}

function ts(e) {
  return "xbox" === e.connected_account_type ? w.ABu.XBOX : w.ABu.PLAYSTATION
}

function tl(e) {
  return ts(e) === w.ABu.XBOX ? x.t.mytEv7 : x.t.iDiwb2
}

function tc(e) {
  var t, n, r, i;
  let {
    quest: a,
    rewardCode: o,
    selectedPlatformType: s,
    sharedQuestFields: l
  } = e, c = eA({
    quest: a
  }), u = null != s ? s : null == o ? true : o.platform, d = c ? eL({
    quest: a,
    idx: null != (r = null == o ? true : o.tier) ? r : null == (t = a.userStatus) ? true : t.claimedTier
  }) : null, f = null != (i = null == d || null == (n = d.messages) ? true : n.redemptionInstructionsByPlatform) ? i : l.defaultRewardRedemptionInstructionsByPlatform;
  return null != u ? f[u] : true
}

function tu(e) {
  let {
    isTargetedDisclosure: t,
    gamePublisher: n,
    gameTitle: r,
    cosponsorName: i
  } = e;
  return t ? null == i ? x.intl.formatToPlainString(x.t.Piihy8, {
    gamePublisher: n
  }) : x.intl.formatToPlainString(x.t.DV47Gx, {
    gamePublisher: n,
    cosponsorName: i
  }) : x.intl.formatToPlainString(x.t.tOWwxM, {
    gamePublisher: n,
    gameTitle: r
  })
}

function td(e) {
  let t = eN({
      quest: e
    }) || eR({
      quest: e
    }),
    n = e2(e),
    r = [];
  return t && r.push(P.cd.DESKTOP), n && r.push(P.cd.CONSOLE), r
}

function tf(e) {
  var t;
  let n = null == (t = ep(e)) ? true : t.expirationMode;
  return null != n && G.has(n)
}

function t_(e) {
  var t;
  return tf(e) && (null == (t = ep(e)) ? true : t.expirationMode) === l.n.PREMIUM_PERMANENT
}

function tp(e) {
  let t = Object.keys(e.config.taskConfigV2.tasks),
    n = [];
  for (let e of t) switch (e) {
    case o.X.PLAY_ON_XBOX:
      n.push(w.ABu.XBOX);
      break;
    case o.X.PLAY_ON_PLAYSTATION:
      n.push(w.ABu.PLAYSTATION)
  }
  return n
}

function th(e) {
  return "VIDEO-QUEST-".concat(e)
}

function tm(e) {
  let t = e3(e),
    n = eP(e);
  return t || n
}

function tg(e, t) {
  var n, r;
  K(e) || (null == (n = e.userStatus) ? true : n.enrolledAt) == null || (null == (r = e.userStatus) ? true : r.completedAt) != null || (0, T.cT)(e.id, t)
}

function tE(e) {
  return ({
    [A.jn.QUEST_BAR]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [A.jn.QUEST_BAR_V2]: A.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [A.jn.QUEST_BAR_MOBILE]: A.Ok.MOBILE_HOME_DOCK_AREA
  })[e]
}

function tb(e) {
  let t = tE(e);
  return null != t && P.v6.has(t)
}
let ty = "landscape";

function tO(e) {
  let t = e.assets.video;
  return null == t || null == t.width || null == t.height ? ty : t.width > t.height ? "landscape" : "portrait"
}
let tv = e => e.percentComplete > 0 ? x.intl.formatToPlainString(x.t["c59/Tk"], {
  remainTime: e0(e)
}) : x.intl.formatToPlainString(x.t.GNsKiY, {
  remainTime: e0(e)
});

function tI(e, t) {
  return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round(e / t * 100) / 100)
}

function tT(e) {
  var t, n;
  let r = N.r.build(e).defaultWatchVideoTask;
  return null != (n = null != (t = null == r ? true : r.messages.videoEndCtaButtonLabel) ? t : null == r ? true : r.messages.videoEndCtaTitle) ? n : x.intl.string(x.t.iiTtpK)
}

function tS(e, t) {
  var n;
  let {
    quest: r,
    adDecisionData: i
  } = null != (n = S.Z.questToDeliverForPlacement.get(tE(t))) ? n : {};
  return null != i && (null == r ? true : r.id) === e ? i : P.Jp
}

function tA(e) {
  var t;
  let {
    metadataRaw: n
  } = null != (t = S.Z.questToDeliverForPlacement.get(tE(e))) ? t : {};
  return n
}

function tC(e) {
  var t;
  let {
    adContext: n
  } = null != (t = S.Z.questToDeliverForPlacement.get(tE(e))) ? t : {};
  return n
}

function tN(e) {
  var t, n;
  let r = null != (n = null == (t = e.userStatus) ? true : t.claimedTier) ? n : 0;
  return "rewardsConfig" in e.config ? e.config.rewardsConfig.rewards[r] : e.config.rewards[r]
}

function tR(e) {
  return new Set(Object.keys(e.config.taskConfigV2.tasks))
}

function tP(e, t) {
  let n = new Map;
  for (let [r, i] of e)
    for (let e of tR(i))
      if (t.has(e)) {
        n.set(r, i);
        break
      } return n
}

function tw(e) {
  var t, n;
  let {
    questId: r,
    sourceQuestContent: i,
    videoSessionId: a
  } = e, o = C.ZP.getState().getVideoProgress(r);
  if (null == o) return;
  let s = S.Z.getQuest(r);
  null != s && (null == (t = s.userStatus) ? true : t.enrolledAt) != null && (null == (n = s.userStatus) ? true : n.completedAt) == null && tg(s, o.maxTimestampSec);
  let l = tI(o.maxTimestampSec, o.duration);
  (0, I.dA)({
    questId: r,
    event: w.rMx.QUEST_VIDEO_PROGRESSED,
    properties: {
      progress: l,
      video_timestamp_seconds: o.maxTimestampSec,
      video_session_id: a
    },
    sourceQuestContent: i
  }), (0, I.dA)({
    questId: r,
    event: w.rMx.QUEST_VIDEO_MODAL_CLOSED,
    properties: {
      video_progress: l,
      video_session_id: a,
      network_connection_speed: m.Z.getEffectiveConnectionSpeed()
    },
    sourceQuestContent: i
  })
}

function tD(e) {
  return e.sharePolicy !== u.X.NOT_SHAREABLE
}