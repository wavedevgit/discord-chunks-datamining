/** Chunk was on web.js **/
/** chunk id: 616022, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, p, _, h, m, g, E, b, y, O, v, S, I, T, C, A, N, P, w, R;
require.d(exports, {
  Z: () => te
}), require("./388685.js");
var D, Chunk392711 = require("./392711.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk704161 = require("./704161.js"),
  Chunk535584 = require("./535584.js"),
  Chunk862657 = require("./862657.js"),
  Chunk552943 = require("./552943.js"),
  Chunk324805 = require("./324805.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = 6 * Chunk70956.Z.Millis.HOUR,
  X = new Map,
  J = null,
  $ = null,
  ee = false,
  et = null,
  en = new Map,
  er = 5e3,
  ei = 864e6;

function ea() {
  r = false, i = false, a = new Map, o = false, s = false, l = new Map, c = new Map, u = new Map, d = new Map, f = new Map, p = 0, _ = 0, h = new Set, m = new Set, g = new Set, E = new Set, b = new Set, X = new Map, O = new Map, v = new Map, S = new Map, I = null, T = new Map, y = new Set, C = new Map, A = new Map, N = new Map, e2(), P = null, R = new Map, en = new Map, w = new Map
}

function eo(e, t) {
  var n, r, i, a;
  if (null != t.userStatus)
    for (let o of Object.values(null != (r = null == (n = t.userStatus) ? true : n.progress) ? r : {})) !(0, x.isNil)(o) && L.T.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? true : i.lastBeatAt) != null ? y.add(e) : (null == (a = o.heartbeat) ? true : a.lastBeatAt) == null && y.delete(e))
}

function es(e, t) {
  let n = (u = new Map(u)).get(e);
  if (null != n) {
    let r = K({}, n, t);
    if (eo(e, t), u.set(e, r), R.has(e)) {
      let n = R.get(e);
      null != n && (R = new Map(R)).set(e, K({}, n, t))
    }
  }
}

function el(e, t) {
  let n = new Map(O);
  n.set(e, t), O = n
}

function ec(e, t) {
  el(e, t);
  let n = u.get(e),
    r = null == n ? true : n.userStatus;
  null != r && null == r.claimedAt && es(e, {
    userStatus: q(K({}, r), {
      claimedAt: t.claimedAt
    })
  })
}

function eu(e) {
  var t;
  let {
    entitlements: n
  } = e, r = null == (t = n.items[0].tenantMetadata) ? true : t.questRewards.reward;
  return (null == r ? true : r.tag) !== j.w.REWARD_CODE ? null : r.rewardCode
}

function ed(e, t) {
  let n = new Map(v);
  n.set(e, t.items), v = n;
  let r = u.get(e),
    i = null == r ? true : r.userStatus;
  if (null != i && null == i.claimedAt) {
    var a;
    let n = eu({
      entitlements: t
    });
    null != n && el(e, n), es(e, {
      userStatus: q(K({}, i), {
        claimedAt: t.claimedAt,
        claimedTier: null != (a = null == n ? true : n.tier) ? a : null
      })
    })
  }
}

function ef(e) {
  null != S.get(e) && (S = new Map(S)).delete(e)
}

function ep() {
  e2(), ea()
}

function e_() {
  r = true
}

function eh(e) {
  let {
    quests: t,
    excludedQuests: n,
    questEnrollmentBlockedUntil: i
  } = e;
  p = Date.now(), r = false, u = new Map, c = new Map;
  let a = new Map;
  for (let e of t) u.set(e.id, e), c.set(e.id, e.config), a.set(e.id, (0, V.zi)(e)), e.targetedContent.includes(G.jn.QUEST_BAR) && (0, B.T)({
    location: Y.dr.QUESTS_STORE
  }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"));
  for (let e of (d = new Map, n)) d.set(e.id, e);
  for (let e of null == R ? true : R.values()) u.has(e.id) || (u.set(e.id, e), c.set(e.id, e.config), a.set(e.id, (0, V.zi)(e)));
  N = a, e3(), P = null != i ? new Date(i) : null
}

function em() {
  p = 0, r = false
}

function eg(e) {
  let {
    placement: t
  } = e;
  i = true, (a = new Map(a)).set(t, true)
}

function eE(e) {
  let {
    questId: t
  } = e;
  (b = new Set(b)).add(t), (en = new Map(en)).delete(t)
}

function eb(e) {
  let {
    questId: t,
    quest: n
  } = e;
  (b = new Set(b)).delete(t), (R = new Map(R)).set(t, n), (u = new Map(u)).set(t, n), (c = new Map(c)).set(t, n.config), (en = new Map(en)).delete(t)
}

function ey(e) {
  let {
    questId: t,
    error: n
  } = e;
  (b = new Set(b)).delete(t), (en = new Map(en)).set(t, n)
}

function eO() {
  o = true
}

function ev(e) {
  let {
    quests: t
  } = e;
  for (let e of (o = false, f = new Map, t)) f.set(e.id, e)
}

function eS() {
  o = false
}

function eI(e) {
  let {
    questId: t,
    streamKey: n,
    userStatus: r
  } = e;
  y.add(t), es(t, {
    userStatus: r
  }), null != n && ef(n)
}

function eT(e) {
  let {
    questId: t,
    streamKey: n
  } = e;
  null != n && null == S.get(n) && (S = new Map(S)).set(n, {
    questId: t,
    streamKey: n,
    firstFailedAt: Date.now()
  })
}

function eC(e) {
  let {
    streamKey: t
  } = e;
  ef(t)
}

function eA(e) {
  let t = new Set(h);
  t.delete(e), h = t
}

function eN(e) {
  let {
    questId: t
  } = e, n = new Set(h);
  n.add(t), h = n
}

function eP(e) {
  let {
    enrolledQuestUserStatus: t
  } = e;
  es(t.questId, {
    userStatus: t
  }), eA(t.questId)
}

function ew(e) {
  let {
    questId: t
  } = e;
  eA(t)
}

function eR(e) {
  let {
    questId: t
  } = e, n = new Set(g);
  n.add(t), g = n
}

function eD(e) {
  let {
    questId: t,
    rewardCode: n
  } = e, r = new Set(g);
  r.delete(t), g = r, ec(t, n)
}

function ex(e) {
  let {
    questId: t
  } = e, n = new Set(g);
  n.delete(t), g = n
}

function eL(e) {
  let {
    questId: t
  } = e, n = new Set(m);
  n.add(t), m = n
}

function ej(e) {
  let {
    questId: t,
    entitlements: n
  } = e, r = new Set(m);
  r.delete(t), m = r, ed(t, n)
}

function eM(e) {
  let {
    questId: t
  } = e, n = new Set(m);
  n.delete(t), m = n
}

function ek(e) {
  let t = new Set(E);
  t.delete(e), E = t
}

function eU(e) {
  let {
    questId: t
  } = e, n = new Set(E);
  n.add(t), E = n
}

function eG(e) {
  let {
    dismissedQuestUserStatus: t
  } = e;
  es(t.questId, {
    userStatus: t
  }), ek(t.questId)
}

function eZ(e) {
  let {
    questId: t
  } = e;
  ek(t)
}

function eF(e) {
  let {
    streamKey: t
  } = e;
  ef(t)
}

function eB(e) {
  let {
    user_status: t
  } = e, n = (0, B.T)({
    location: Y.dr.QUESTS_STORE
  });
  n.log("Received user status update for ".concat(t.quest_id), t);
  let r = (0, H.U3)(t);
  es(t.quest_id, {
    userStatus: r
  });
  let i = u.get(t.quest_id);
  if (null != i) {
    let e = (0, V.zi)(i);
    N.get(t.quest_id) !== e && (N = new Map(N).set(t.quest_id, e))
  }
  0 === Object.keys(r.progress).length && X.has(r.questId) && (n.log("Removing optimistic progress for ".concat(r.questId)), X.delete(r.questId))
}

function eV(e) {
  let {
    previewQuestUserStatus: t
  } = e;
  es(t.questId, {
    userStatus: t
  }), null == t.claimedAt && (O = new Map(O)).delete(t.questId), null == t.enrolledAt && ((T = new Map(T)).delete(t.questId), Z.ZP.getState().resetQuest(t.questId));
  let n = u.get(t.questId);
  if (null != n) {
    let e = (0, V.zi)(n);
    N.get(t.questId) !== e && (N = new Map(N).set(t.questId, e))
  }
}

function eH(e) {
  let {
    questId: t
  } = e;
  I = I === t ? null : t
}

function eY(e) {
  let {
    questId: t,
    platform: n
  } = e;
  T = new Map(T), null == n ? T.delete(t) : T.set(t, n)
}

function eW(e) {
  var t;
  let {
    questId: n,
    taskEventName: r,
    progress: i
  } = e, a = null != (t = X.get(n)) ? t : new Map;
  a.set(r, i), X.set(n, a)
}

function eK(e) {
  let {
    questId: t
  } = e;
  X.has(t) && X.delete(t), Z.ZP.getState().resetQuest(t)
}

function ez(e) {
  let {
    quest: t,
    placement: n,
    adDecisionData: r,
    adContext: o,
    responseTtlSeconds: s,
    metadataRaw: l,
    metadataSealed: c,
    trafficMetadataRaw: u,
    trafficMetadataSealed: d,
    fetchedAt: f
  } = e;
  _ = Date.now(), i = false, (a = new Map(a)).set(n, false);
  let {
    enableNewRequestBehavior: p
  } = F.Z.getConfig({
    location: "handleFetchQuestToDeliverSuccess"
  });
  if (p) {
    var h;
    let e = {
      questId: null != (h = null == t ? true : t.id) ? h : null,
      fetchedAt: f,
      ttlMillis: eq(s),
      adDecisionData: r,
      adContext: o,
      metadataRaw: l,
      metadataSealed: c,
      trafficMetadataRaw: u,
      trafficMetadataSealed: d
    };
    (w = new Map(w)).set(n, e)
  } else null == t ? C.delete(n) : C.set(n, {
    quest: t,
    adDecisionData: r,
    adContext: o,
    metadataRaw: l,
    metadataSealed: c,
    trafficMetadataRaw: u,
    trafficMetadataSealed: d
  })
}

function eq(e) {
  if (null == e) return Q;
  let t = 1e3 * e;
  return t < Q && t > 0 ? t : Q
}

function eQ(e) {
  let {
    placement: t
  } = e;
  C.delete(t), _ = Date.now(), i = false, (a = new Map(a)).set(t, false)
}

function eX(e) {
  let {
    content: t
  } = e;
  s = true, (l = new Map(l)).set(t, true)
}

function eJ(e) {
  let {
    quests: t,
    metadataRaw: n,
    content: r
  } = e;
  s = false, (l = new Map(l)).set(r, false), 0 === t.size ? A.delete(r) : A.set(r, {
    quests: t,
    metadataRaw: n
  })
}

function e$(e) {
  let {
    content: t
  } = e;
  A.delete(t), s = false, (l = new Map(l)).set(t, false)
}

function e0() {
  let e = false,
    t = new Map(N);
  u.forEach((n, r) => {
    true !== t.get(r) && ((0, V.zi)(n) ? (t.set(r, true), e = true) : t.has(r) || t.set(r, false))
  }), e && (N = t, e9.emitChange())
}

function e1() {
  e0();
  let e = (0, V.UE)(Array.from(u.values()));
  if (null == e) return;
  let t = Math.max(er, e - Date.now() + 2e3);
  t > ei || (J = setTimeout(() => {
    e1()
  }, t))
}

function e3() {
  e2(), e1()
}

function e2() {
  null != J && (clearTimeout(J), J = null)
}

function e4(e) {
  let {
    quest_enrollment_blocked_until: t
  } = e;
  P = null != t ? new Date(t) : null
}

function e5() {
  ee = true
}

function e8(e) {
  ee = false, $ = Date.now(), et = e.takeover
}

function e6() {
  ee = false
}
ea();
class e7 extends(D = Chunk442837.ZP.Store) {
  get quests() {
    return u
  }
  get excludedQuests() {
    return d
  }
  get claimedQuests() {
    return f
  }
  get isFetchingCurrentQuests() {
    return r
  }
  get isFetchingClaimedQuests() {
    return o
  }
  isFetchingQuestPreview(e) {
    return b.has(e)
  }
  get lastFetchedCurrentQuests() {
    return p
  }
  get lastFetchedQuestToDeliver() {
    return _
  }
  get isFetchingQuestToDeliver() {
    return i
  }
  isFetchingQuestToDeliverByPlacement(e) {
    var t;
    return null != (t = null == a ? true : a.get(e)) && t
  }
  get questDeliveryOverride() {
    return u.get(null != I ? I : "")
  }
  get questToDeliverForPlacement() {
    return C
  }
  get questEnrollmentBlockedUntil() {
    return P
  }
  get questAdDecisionByPlacement() {
    return w
  }
  getFetchQuestPreviewError(e) {
    return en.get(e)
  }
  isEnrolling(e) {
    return h.has(e)
  }
  isClaimingReward(e) {
    return m.has(e)
  }
  isFetchingRewardCode(e) {
    return g.has(e)
  }
  isDismissingContent(e) {
    return E.has(e)
  }
  getRewardCode(e) {
    return O.get(e)
  }
  getRewards(e) {
    return v.get(e)
  }
  getStreamHeartbeatFailure(e) {
    return S.get(e)
  }
  getQuest(e) {
    return u.get(e)
  }
  getQuestConfig(e) {
    return c.get(e)
  }
  get questConfigs() {
    return c
  }
  isProgressingOnDesktop(e) {
    return y.has(e)
  }
  selectedTaskPlatform(e) {
    var t;
    return null != (t = T.get(e)) ? t : null
  }
  getOptimisticProgress(e, t) {
    var n;
    return null == (n = X.get(e)) ? true : n.get(t)
  }
  getExpiredQuestsMap() {
    return N
  }
  isQuestExpired(e) {
    var t;
    return null != (t = N.get(e)) && t
  }
  getQuestLoadedViaPreview(e) {
    return R.get(e)
  }
  isFetchingQuestHomeTakeover() {
    return ee
  }
  getQuestHomeTakeoverConfig() {
    return et
  }
  getLastFetchedQuestHomeTakeover() {
    return $
  }
  get isFetchingEarnedQuestToDeliver() {
    return s
  }
  isFetchingEarnedQuestToDeliverByPlacement(e) {
    var t;
    return null != (t = null == l ? true : l.get(e)) && t
  }
  get earnedQuestForPlacement() {
    return A
  }
}
W(e7, "displayName", "QuestStore");
let e9 = new e7(Chunk570140.Z, {
    LOGOUT: ep,
    QUESTS_FETCH_CURRENT_QUESTS_BEGIN: e_,
    QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: eh,
    QUESTS_FETCH_CURRENT_QUESTS_FAILURE: em,
    QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eO,
    QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: ev,
    QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eS,
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: eg,
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: ez,
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eQ,
    QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: eX,
    QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: eJ,
    QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: e$,
    QUESTS_FETCH_PREVIEW_BEGIN: eE,
    QUESTS_FETCH_PREVIEW_SUCCESS: eb,
    QUESTS_FETCH_PREVIEW_FAILURE: ey,
    QUESTS_SEND_HEARTBEAT_SUCCESS: eI,
    QUESTS_SEND_HEARTBEAT_FAILURE: eT,
    QUESTS_ENROLL_BEGIN: eN,
    QUESTS_ENROLL_SUCCESS: eP,
    QUESTS_ENROLL_FAILURE: ew,
    QUESTS_FETCH_REWARD_CODE_BEGIN: eR,
    QUESTS_FETCH_REWARD_CODE_SUCCESS: eD,
    QUESTS_FETCH_REWARD_CODE_FAILURE: ex,
    QUESTS_CLAIM_REWARD_BEGIN: eL,
    QUESTS_CLAIM_REWARD_SUCCESS: ej,
    QUESTS_CLAIM_REWARD_FAILURE: eM,
    QUESTS_DISMISS_CONTENT_BEGIN: eU,
    QUESTS_DISMISS_CONTENT_SUCCESS: eG,
    QUESTS_DISMISS_CONTENT_FAILURE: eZ,
    QUESTS_USER_STATUS_UPDATE: eB,
    STREAM_CLOSE: eC,
    QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eF,
    QUESTS_PREVIEW_UPDATE_SUCCESS: eV,
    QUESTS_DELIVERY_OVERRIDE: eH,
    QUESTS_SELECT_TASK_PLATFORM: eY,
    QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eW,
    QUESTS_RESET_OPTIMISTIC_PROGRESS: eK,
    QUESTS_USER_COMPLETION_UPDATE: e4,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: e5,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e8,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e6
  }),
  te = e9