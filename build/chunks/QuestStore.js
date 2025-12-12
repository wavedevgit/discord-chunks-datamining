/** Chunk was on web.js **/
/** chunk id: 616022, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, S, I, T, C, A, N;
require.d(exports, {
  Z: () => e4
}), require("./388685.js");
var P, Chunk392711 = require("./392711.js"),
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = 6 * Chunk70956.Z.Millis.HOUR,
  z = new Map,
  q = null,
  Q = null,
  X = false,
  J = null,
  $ = new Map,
  ee = 5e3,
  et = 864e6;

function en() {
  r = false, i = false, o = new Map, a = false, s = new Map, l = new Map, c = new Map, u = new Map, d = 0, f = 0, p = new Set, _ = new Set, m = new Set, h = new Set, g = new Set, z = new Map, b = new Map, y = new Map, O = new Map, v = null, S = new Map, E = new Set, I = new Map, T = new Map, eX(), C = null, N = new Map, $ = new Map, A = new Map
}

function er(e, t) {
  var n, r, i, o;
  if (null != t.userStatus)
    for (let a of Object.values(null != (r = null == (n = t.userStatus) ? true : n.progress) ? r : {})) !(0, R.isNil)(a) && w.T.DESKTOP.has(a.eventName) && ((null == (i = a.heartbeat) ? true : i.lastBeatAt) != null ? E.add(e) : (null == (o = a.heartbeat) ? true : o.lastBeatAt) == null && E.delete(e))
}

function ei(e, t) {
  let n = (l = new Map(l)).get(e);
  if (null != n) {
    let r = H({}, n, t);
    if (er(e, t), l.set(e, r), N.has(e)) {
      let n = N.get(e);
      null != n && (N = new Map(N)).set(e, H({}, n, t))
    }
  }
}

function eo(e, t) {
  let n = new Map(b);
  n.set(e, t), b = n
}

function ea(e, t) {
  eo(e, t);
  let n = l.get(e),
    r = null == n ? true : n.userStatus;
  null != r && null == r.claimedAt && ei(e, {
    userStatus: W(H({}, r), {
      claimedAt: t.claimedAt
    })
  })
}

function es(e) {
  var t;
  let {
    entitlements: n
  } = e, r = null == (t = n.items[0].tenantMetadata) ? true : t.questRewards.reward;
  return (null == r ? true : r.tag) !== D.w.REWARD_CODE ? null : r.rewardCode
}

function el(e, t) {
  let n = new Map(y);
  n.set(e, t.items), y = n;
  let r = l.get(e),
    i = null == r ? true : r.userStatus;
  if (null != i && null == i.claimedAt) {
    var o;
    let n = es({
      entitlements: t
    });
    null != n && eo(e, n), ei(e, {
      userStatus: W(H({}, i), {
        claimedAt: t.claimedAt,
        claimedTier: null != (o = null == n ? true : n.tier) ? o : null
      })
    })
  }
}

function ec(e) {
  null != O.get(e) && (O = new Map(O)).delete(e)
}

function eu() {
  eX(), en()
}

function ed() {
  r = true
}

function ef(e) {
  let {
    quests: t,
    excludedQuests: n,
    questEnrollmentBlockedUntil: i
  } = e;
  d = Date.now(), r = false, l = new Map, s = new Map;
  let o = new Map;
  for (let e of t) l.set(e.id, e), s.set(e.id, e.config), o.set(e.id, (0, Z.zi)(e)), e.targetedContent.includes(M.jn.QUEST_BAR) && (0, G.T)({
    location: B.dr.QUESTS_STORE
  }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"));
  for (let e of (c = new Map, n)) c.set(e.id, e);
  for (let e of null == N ? true : N.values()) l.has(e.id) || (l.set(e.id, e), s.set(e.id, e.config), o.set(e.id, (0, Z.zi)(e)));
  T = o, eQ(), C = null != i ? new Date(i) : null
}

function ep() {
  d = 0, r = false
}

function e_(e) {
  let {
    placement: t
  } = e;
  i = true, (o = new Map(o)).set(t, true)
}

function em(e) {
  let {
    questId: t
  } = e;
  (g = new Set(g)).add(t), ($ = new Map($)).delete(t)
}

function eh(e) {
  let {
    questId: t,
    quest: n
  } = e;
  (g = new Set(g)).delete(t), (N = new Map(N)).set(t, n), (l = new Map(l)).set(t, n), (s = new Map(s)).set(t, n.config), ($ = new Map($)).delete(t)
}

function eg(e) {
  let {
    questId: t,
    error: n
  } = e;
  (g = new Set(g)).delete(t), ($ = new Map($)).set(t, n)
}

function eE() {
  a = true
}

function eb(e) {
  let {
    quests: t
  } = e;
  for (let e of (a = false, u = new Map, t)) u.set(e.id, e)
}

function ey() {
  a = false
}

function eO(e) {
  let {
    questId: t,
    streamKey: n,
    userStatus: r
  } = e;
  E.add(t), ei(t, {
    userStatus: r
  }), null != n && ec(n)
}

function ev(e) {
  let {
    questId: t,
    streamKey: n
  } = e;
  null != n && null == O.get(n) && (O = new Map(O)).set(n, {
    questId: t,
    streamKey: n,
    firstFailedAt: Date.now()
  })
}

function eS(e) {
  let {
    streamKey: t
  } = e;
  ec(t)
}

function eI(e) {
  let t = new Set(p);
  t.delete(e), p = t
}

function eT(e) {
  let {
    questId: t
  } = e, n = new Set(p);
  n.add(t), p = n
}

function eC(e) {
  let {
    enrolledQuestUserStatus: t
  } = e;
  ei(t.questId, {
    userStatus: t
  }), eI(t.questId)
}

function eA(e) {
  let {
    questId: t
  } = e;
  eI(t)
}

function eN(e) {
  let {
    questId: t
  } = e, n = new Set(m);
  n.add(t), m = n
}

function eP(e) {
  let {
    questId: t,
    rewardCode: n
  } = e, r = new Set(m);
  r.delete(t), m = r, ea(t, n)
}

function eR(e) {
  let {
    questId: t
  } = e, n = new Set(m);
  n.delete(t), m = n
}

function ew(e) {
  let {
    questId: t
  } = e, n = new Set(_);
  n.add(t), _ = n
}

function eD(e) {
  let {
    questId: t,
    entitlements: n
  } = e, r = new Set(_);
  r.delete(t), _ = r, el(t, n)
}

function ex(e) {
  let {
    questId: t
  } = e, n = new Set(_);
  n.delete(t), _ = n
}

function eL(e) {
  let t = new Set(h);
  t.delete(e), h = t
}

function ej(e) {
  let {
    questId: t
  } = e, n = new Set(h);
  n.add(t), h = n
}

function eM(e) {
  let {
    dismissedQuestUserStatus: t
  } = e;
  ei(t.questId, {
    userStatus: t
  }), eL(t.questId)
}

function ek(e) {
  let {
    questId: t
  } = e;
  eL(t)
}

function eU(e) {
  let {
    streamKey: t
  } = e;
  ec(t)
}

function eG(e) {
  let {
    user_status: t
  } = e, n = (0, G.T)({
    location: B.dr.QUESTS_STORE
  });
  n.log("Received user status update for ".concat(t.quest_id), t);
  let r = (0, F.U3)(t);
  ei(t.quest_id, {
    userStatus: r
  });
  let i = l.get(t.quest_id);
  if (null != i) {
    let e = (0, Z.zi)(i);
    T.get(t.quest_id) !== e && (T = new Map(T).set(t.quest_id, e))
  }
  0 === Object.keys(r.progress).length && z.has(r.questId) && (n.log("Removing optimistic progress for ".concat(r.questId)), z.delete(r.questId))
}

function eZ(e) {
  let {
    previewQuestUserStatus: t
  } = e;
  ei(t.questId, {
    userStatus: t
  }), null == t.claimedAt && (b = new Map(b)).delete(t.questId), null == t.enrolledAt && ((S = new Map(S)).delete(t.questId), k.ZP.getState().resetQuest(t.questId));
  let n = l.get(t.questId);
  if (null != n) {
    let e = (0, Z.zi)(n);
    T.get(t.questId) !== e && (T = new Map(T).set(t.questId, e))
  }
}

function eF(e) {
  let {
    questId: t
  } = e;
  v = v === t ? null : t
}

function eB(e) {
  let {
    questId: t,
    platform: n
  } = e;
  S = new Map(S), null == n ? S.delete(t) : S.set(t, n)
}

function eV(e) {
  var t;
  let {
    questId: n,
    taskEventName: r,
    progress: i
  } = e, o = null != (t = z.get(n)) ? t : new Map;
  o.set(r, i), z.set(n, o)
}

function eH(e) {
  let {
    questId: t
  } = e;
  z.has(t) && z.delete(t), k.ZP.getState().resetQuest(t)
}

function eY(e) {
  let {
    quest: t,
    placement: n,
    adDecisionData: r,
    adContext: a,
    responseTtlSeconds: s,
    metadataRaw: l,
    metadataSealed: c,
    fetchedAt: u
  } = e;
  f = Date.now(), i = false, (o = new Map(o)).set(n, false);
  let {
    enableNewRequestBehavior: d
  } = U.Z.getConfig({
    location: "handleFetchQuestToDeliverSuccess"
  });
  if (d) {
    var p;
    let e = {
      questId: null != (p = null == t ? true : t.id) ? p : null,
      fetchedAt: u,
      ttlMillis: eW(s),
      adDecisionData: r,
      adContext: a,
      metadataRaw: l,
      metadataSealed: c
    };
    (A = new Map(A)).set(n, e)
  } else null == t ? I.delete(n) : I.set(n, {
    quest: t,
    adDecisionData: r,
    adContext: a,
    metadataRaw: l,
    metadataSealed: c
  })
}

function eW(e) {
  if (null == e) return K;
  let t = 1e3 * e;
  return t < K && t > 0 ? t : K
}

function eK(e) {
  let {
    placement: t
  } = e;
  I.delete(t), f = Date.now(), i = false, (o = new Map(o)).set(t, false)
}

function ez() {
  let e = false,
    t = new Map(T);
  l.forEach((n, r) => {
    true !== t.get(r) && ((0, Z.zi)(n) ? (t.set(r, true), e = true) : t.has(r) || t.set(r, false))
  }), module && (T = exports, e2.emitChange())
}

function eq() {
  ez();
  let e = (0, Chunk862657.UE)(Array.from(l.values()));
  if (null == module) return;
  let t = Math.max(ee, module - Date.now() + 2e3);
  exports > et || (q = setTimeout(() => {
    eq()
  }, exports))
}

function eQ() {
  eX(), eq()
}

function eX() {
  null != q && (clearTimeout(q), q = null)
}

function eJ(e) {
  let {
    quest_enrollment_blocked_until: t
  } = e;
  C = null != t ? new Date(t) : null
}

function e$() {
  X = true
}

function e0(e) {
  X = false, Q = Date.now(), J = e.takeover
}

function e1() {
  X = false
}
en();
class e3 extends(P = Chunk442837.ZP.Store) {
  get quests() {
    return l
  }
  get excludedQuests() {
    return c
  }
  get claimedQuests() {
    return u
  }
  get isFetchingCurrentQuests() {
    return r
  }
  get isFetchingClaimedQuests() {
    return a
  }
  isFetchingQuestPreview(e) {
    return g.has(e)
  }
  get lastFetchedCurrentQuests() {
    return d
  }
  get lastFetchedQuestToDeliver() {
    return f
  }
  get isFetchingQuestToDeliver() {
    return i
  }
  isFetchingQuestToDeliverByPlacement(e) {
    var t;
    return null != (t = null == o ? true : o.get(e)) && t
  }
  get questDeliveryOverride() {
    return l.get(null != v ? v : "")
  }
  get questToDeliverForPlacement() {
    return I
  }
  get questEnrollmentBlockedUntil() {
    return C
  }
  get questAdDecisionByPlacement() {
    return A
  }
  getFetchQuestPreviewError(e) {
    return $.get(e)
  }
  isEnrolling(e) {
    return p.has(e)
  }
  isClaimingReward(e) {
    return _.has(e)
  }
  isFetchingRewardCode(e) {
    return m.has(e)
  }
  isDismissingContent(e) {
    return h.has(e)
  }
  getRewardCode(e) {
    return b.get(e)
  }
  getRewards(e) {
    return y.get(e)
  }
  getStreamHeartbeatFailure(e) {
    return O.get(e)
  }
  getQuest(e) {
    return l.get(e)
  }
  getQuestConfig(e) {
    return s.get(e)
  }
  get questConfigs() {
    return s
  }
  isProgressingOnDesktop(e) {
    return E.has(e)
  }
  selectedTaskPlatform(e) {
    var t;
    return null != (t = S.get(e)) ? t : null
  }
  getOptimisticProgress(e, t) {
    var n;
    return null == (n = z.get(e)) ? true : n.get(t)
  }
  getExpiredQuestsMap() {
    return T
  }
  isQuestExpired(e) {
    var t;
    return null != (t = T.get(e)) && t
  }
  getQuestLoadedViaPreview(e) {
    return N.get(e)
  }
  isFetchingQuestHomeTakeover() {
    return X
  }
  getQuestHomeTakeoverConfig() {
    return J
  }
  getLastFetchedQuestHomeTakeover() {
    return Q
  }
}
V(e3, "displayName", "QuestStore");
let e2 = new e3(Chunk570140.Z, {
    LOGOUT: eu,
    QUESTS_FETCH_CURRENT_QUESTS_BEGIN: ed,
    QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ef,
    QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ep,
    QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eE,
    QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eb,
    QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: ey,
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: e_,
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eY,
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eK,
    QUESTS_FETCH_PREVIEW_BEGIN: em,
    QUESTS_FETCH_PREVIEW_SUCCESS: eh,
    QUESTS_FETCH_PREVIEW_FAILURE: eg,
    QUESTS_SEND_HEARTBEAT_SUCCESS: eO,
    QUESTS_SEND_HEARTBEAT_FAILURE: ev,
    QUESTS_ENROLL_BEGIN: eT,
    QUESTS_ENROLL_SUCCESS: eC,
    QUESTS_ENROLL_FAILURE: eA,
    QUESTS_FETCH_REWARD_CODE_BEGIN: eN,
    QUESTS_FETCH_REWARD_CODE_SUCCESS: eP,
    QUESTS_FETCH_REWARD_CODE_FAILURE: eR,
    QUESTS_CLAIM_REWARD_BEGIN: ew,
    QUESTS_CLAIM_REWARD_SUCCESS: eD,
    QUESTS_CLAIM_REWARD_FAILURE: ex,
    QUESTS_DISMISS_CONTENT_BEGIN: ej,
    QUESTS_DISMISS_CONTENT_SUCCESS: eM,
    QUESTS_DISMISS_CONTENT_FAILURE: ek,
    QUESTS_USER_STATUS_UPDATE: eG,
    STREAM_CLOSE: eS,
    QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eU,
    QUESTS_PREVIEW_UPDATE_SUCCESS: eZ,
    QUESTS_DELIVERY_OVERRIDE: eF,
    QUESTS_SELECT_TASK_PLATFORM: eB,
    QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eV,
    QUESTS_RESET_OPTIMISTIC_PROGRESS: eH,
    QUESTS_USER_COMPLETION_UPDATE: eJ,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: e$,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e0,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e1
  }),
  e4 = e2