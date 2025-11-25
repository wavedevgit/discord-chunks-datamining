/** Chunk was on web.js **/
/** chunk id: 616022, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, v, I, T, S, A, C, N;
require.d(exports, {
  Z: () => e2
}), require("./388685.js");
var R, Chunk392711 = require("./392711.js"),
  Chunk754700 = require("./754700.js"),
  Chunk887003 = require("./887003.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk704161 = require("./704161.js"),
  Chunk535584 = require("./535584.js"),
  Chunk324805 = require("./324805.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = 6 * Chunk70956.Z.Millis.HOUR,
  K = new Map,
  z = null,
  q = null,
  X = false,
  Q = null,
  J = new Map,
  $ = 5e3,
  ee = 864e6;

function et() {
  r = false, i = false, a = new Map, o = false, s = new Map, l = new Map, c = new Map, u = new Map, d = 0, f = 0, _ = new Set, p = new Set, h = new Set, m = new Set, g = new Set, K = new Map, b = new Map, y = new Map, O = new Map, v = null, I = new Map, E = new Set, T = new Map, S = new Map, eX(), A = null, N = new Map, J = new Map, C = new Map
}

function en(e, t) {
  var n, r, i, a;
  if (null != t.userStatus)
    for (let o of Object.values(null != (r = null == (n = t.userStatus) ? true : n.progress) ? r : {})) !(0, P.isNil)(o) && D.T.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? true : i.lastBeatAt) != null ? E.add(e) : (null == (a = o.heartbeat) ? true : a.lastBeatAt) == null && E.delete(e))
}

function er(e, t) {
  let n = (l = new Map(l)).get(e);
  if (null != n) {
    let r = V({}, n, t);
    if (en(e, t), l.set(e, r), N.has(e)) {
      let n = N.get(e);
      null != n && (N = new Map(N)).set(e, V({}, n, t))
    }
  }
}

function ei(e, t) {
  let n = new Map(b);
  n.set(e, t), b = n
}

function ea(e, t) {
  ei(e, t);
  let n = l.get(e),
    r = null == n ? true : n.userStatus;
  null != r && null == r.claimedAt && er(e, {
    userStatus: W(V({}, r), {
      claimedAt: t.claimedAt
    })
  })
}

function eo(e) {
  var t;
  let {
    entitlements: n
  } = e, r = null == (t = n.items[0].tenantMetadata) ? true : t.questRewards.reward;
  return (null == r ? true : r.tag) !== w.w.REWARD_CODE ? null : r.rewardCode
}

function es(e, t) {
  let n = new Map(y);
  n.set(e, t.items), y = n;
  let r = l.get(e),
    i = null == r ? true : r.userStatus;
  if (null != i && null == i.claimedAt) {
    var a;
    let n = eo({
      entitlements: t
    });
    null != n && ei(e, n), er(e, {
      userStatus: W(V({}, i), {
        claimedAt: t.claimedAt,
        claimedTier: null != (a = null == n ? true : n.tier) ? a : null
      })
    })
  }
}

function el(e) {
  null != O.get(e) && (O = new Map(O)).delete(e)
}

function ec() {
  eX(), et()
}

function eu() {
  r = true
}

function ed(e) {
  let {
    quests: t,
    excludedQuests: n,
    questEnrollmentBlockedUntil: i
  } = e;
  d = Date.now(), r = false, l = new Map, s = new Map;
  let a = new Map;
  for (let e of t) l.set(e.id, e), s.set(e.id, e.config), a.set(e.id, (0, j.zi)(e)), e.targetedContent.includes(k.jn.QUEST_BAR) && (0, B.T)({
    location: Z.dr.QUESTS_STORE
  }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"));
  for (let e of (c = new Map, n)) c.set(e.id, e);
  for (let e of null == N ? true : N.values()) l.has(e.id) || (l.set(e.id, e), s.set(e.id, e.config), a.set(e.id, (0, j.zi)(e)));
  S = a, eq(), A = null != i ? new Date(i) : null
}

function ef() {
  d = 0, r = false
}

function e_(e) {
  let {
    placement: t
  } = e;
  i = true, (a = new Map(a)).set(t, true)
}

function ep(e) {
  let {
    questId: t
  } = e;
  (g = new Set(g)).add(t), (J = new Map(J)).delete(t)
}

function eh(e) {
  let {
    questId: t,
    quest: n
  } = e;
  (g = new Set(g)).delete(t), (N = new Map(N)).set(t, n), (l = new Map(l)).set(t, n), (s = new Map(s)).set(t, n.config), (J = new Map(J)).delete(t)
}

function em(e) {
  let {
    questId: t,
    error: n
  } = e;
  (g = new Set(g)).delete(t), (J = new Map(J)).set(t, n)
}

function eg() {
  o = true
}

function eE(e) {
  let {
    quests: t
  } = e;
  for (let e of (o = false, u = new Map, t)) u.set(e.id, e)
}

function eb() {
  o = false
}

function ey(e) {
  let {
    questId: t,
    streamKey: n,
    userStatus: r
  } = e;
  E.add(t), er(t, {
    userStatus: r
  }), null != n && el(n)
}

function eO(e) {
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

function ev(e) {
  let {
    streamKey: t
  } = e;
  el(t)
}

function eI(e) {
  let t = new Set(_);
  t.delete(e), _ = t
}

function eT(e) {
  let {
    questId: t
  } = e, n = new Set(_);
  n.add(t), _ = n
}

function eS(e) {
  let {
    enrolledQuestUserStatus: t
  } = e;
  er(t.questId, {
    userStatus: t
  }), eI(t.questId)
}

function eA(e) {
  let {
    questId: t
  } = e;
  eI(t)
}

function eC(e) {
  let {
    questId: t
  } = e, n = new Set(h);
  n.add(t), h = n
}

function eN(e) {
  let {
    questId: t,
    rewardCode: n
  } = e, r = new Set(h);
  r.delete(t), h = r, ea(t, n)
}

function eR(e) {
  let {
    questId: t
  } = e, n = new Set(h);
  n.delete(t), h = n
}

function eP(e) {
  let {
    questId: t
  } = e, n = new Set(p);
  n.add(t), p = n
}

function eD(e) {
  let {
    questId: t,
    entitlements: n
  } = e, r = new Set(p);
  r.delete(t), p = r, es(t, n)
}

function ew(e) {
  let {
    questId: t
  } = e, n = new Set(p);
  n.delete(t), p = n
}

function eL(e) {
  let t = new Set(m);
  t.delete(e), m = t
}

function ex(e) {
  let {
    questId: t
  } = e, n = new Set(m);
  n.add(t), m = n
}

function eM(e) {
  let {
    dismissedQuestUserStatus: t
  } = e;
  er(t.questId, {
    userStatus: t
  }), eL(t.questId)
}

function ek(e) {
  let {
    questId: t
  } = e;
  eL(t)
}

function ej(e) {
  let {
    streamKey: t
  } = e;
  el(t)
}

function eU(e) {
  let {
    user_status: t
  } = e, n = (0, B.T)({
    location: Z.dr.QUESTS_STORE
  });
  n.log("Received user status update for ".concat(t.quest_id), t);
  let r = (0, j.U3)(t);
  er(t.quest_id, {
    userStatus: r
  });
  let i = l.get(t.quest_id);
  if (null != i) {
    let e = (0, j.zi)(i);
    S.get(t.quest_id) !== e && (S = new Map(S).set(t.quest_id, e))
  }
  0 === Object.keys(r.progress).length && K.has(r.questId) && (n.log("Removing optimistic progress for ".concat(r.questId)), K.delete(r.questId))
}

function eG(e) {
  let {
    previewQuestUserStatus: t
  } = e;
  er(t.questId, {
    userStatus: t
  }), null == t.claimedAt && (b = new Map(b)).delete(t.questId), null == t.enrolledAt && ((I = new Map(I)).delete(t.questId), U.ZP.getState().resetQuest(t.questId));
  let n = l.get(t.questId);
  if (null != n) {
    let e = (0, j.zi)(n);
    S.get(t.questId) !== e && (S = new Map(S).set(t.questId, e))
  }
}

function eB(e) {
  let {
    questId: t
  } = e;
  v = v === t ? null : t
}

function eZ(e) {
  let {
    questId: t,
    platform: n
  } = e;
  I = new Map(I), null == n ? I.delete(t) : I.set(t, n)
}

function eF(e) {
  var t;
  let {
    questId: n,
    taskEventName: r,
    progress: i
  } = e, a = null != (t = K.get(n)) ? t : new Map;
  a.set(r, i), K.set(n, a)
}

function eV(e) {
  let {
    questId: t
  } = e;
  K.has(t) && K.delete(t), U.ZP.getState().resetQuest(t)
}

function eH(e) {
  let {
    quest: t,
    placement: n,
    adDecisionData: r,
    adContext: o,
    responseTtlSeconds: s,
    metadataRaw: l,
    fetchedAt: c
  } = e;
  f = Date.now(), i = false, (a = new Map(a)).set(n, false);
  let {
    enableNewRequestBehavior: u
  } = G.Z.getConfig({
    location: "handleFetchQuestToDeliverSuccess"
  });
  if (u) {
    var d, _, p;
    let e = {
      questId: null != (d = null == t ? true : t.id) ? d : null,
      fetchedAt: c,
      ttlMillis: eW(s),
      adSetId: null != (_ = null == r ? true : r.ad_set_id) ? _ : null,
      adRequestId: null != (p = null == r ? true : r.decision_id) ? p : null
    };
    (C = new Map(C)).set(n, e)
  } else null == t ? T.delete(n) : T.set(n, {
    quest: t,
    adDecisionData: r,
    adContext: o,
    metadataRaw: l
  })
}

function eW(e) {
  if (null == e) return Y;
  let t = 1e3 * e;
  return t < Y && t > 0 ? t : Y
}

function eY(e) {
  let {
    placement: t
  } = e;
  T.delete(t), f = Date.now(), i = false, (a = new Map(a)).set(t, false)
}

function eK() {
  let e = false,
    t = new Map(S);
  l.forEach((n, r) => {
    true !== t.get(r) && ((0, j.zi)(n) ? (t.set(r, true), e = true) : t.has(r) || t.set(r, false))
  }), module && (S = exports, e3.emitChange())
}

function ez() {
  eK();
  let e = (0, Chunk509212.UE)(Array.from(l.values()));
  if (null == module) return;
  let t = Math.max($, module - Date.now() + 2e3);
  exports > ee || (z = setTimeout(() => {
    ez()
  }, exports))
}

function eq() {
  eX(), ez()
}

function eX() {
  null != z && (clearTimeout(z), z = null)
}

function eQ(e) {
  let {
    quest_enrollment_blocked_until: t
  } = e;
  A = null != t ? new Date(t) : null
}

function eJ() {
  X = true
}

function e$(e) {
  X = false, q = Date.now(), Q = e.takeover
}

function e0() {
  X = false
}
et();
class e1 extends(R = Chunk442837.ZP.Store) {
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
    return o
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
    return null != (t = null == a ? true : a.get(e)) && t
  }
  get questDeliveryOverride() {
    return l.get(null != v ? v : "")
  }
  get questToDeliverForPlacement() {
    return T
  }
  get questEnrollmentBlockedUntil() {
    return A
  }
  get questAdDecisionByPlacement() {
    return C
  }
  getFetchQuestPreviewError(e) {
    return J.get(e)
  }
  isEnrolling(e) {
    return _.has(e)
  }
  isClaimingReward(e) {
    return p.has(e)
  }
  isFetchingRewardCode(e) {
    return h.has(e)
  }
  isDismissingContent(e) {
    return m.has(e)
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
    return null != (t = I.get(e)) ? t : null
  }
  getOptimisticProgress(e, t) {
    var n;
    return null == (n = K.get(e)) ? true : n.get(t)
  }
  getExpiredQuestsMap() {
    return S
  }
  isQuestExpired(e) {
    var t;
    return null != (t = S.get(e)) && t
  }
  getQuestLoadedViaPreview(e) {
    return N.get(e)
  }
  isFetchingQuestHomeTakeover() {
    return X
  }
  getQuestHomeTakeoverConfig() {
    return Q
  }
  getLastFetchedQuestHomeTakeover() {
    return q
  }
}
F(e1, "displayName", "QuestStore");
let e3 = new e1(Chunk570140.Z, {
    LOGOUT: ec,
    QUESTS_FETCH_CURRENT_QUESTS_BEGIN: eu,
    QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: ed,
    QUESTS_FETCH_CURRENT_QUESTS_FAILURE: ef,
    QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eg,
    QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: eE,
    QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eb,
    QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: e_,
    QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eH,
    QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eY,
    QUESTS_FETCH_PREVIEW_BEGIN: ep,
    QUESTS_FETCH_PREVIEW_SUCCESS: eh,
    QUESTS_FETCH_PREVIEW_FAILURE: em,
    QUESTS_SEND_HEARTBEAT_SUCCESS: ey,
    QUESTS_SEND_HEARTBEAT_FAILURE: eO,
    QUESTS_ENROLL_BEGIN: eT,
    QUESTS_ENROLL_SUCCESS: eS,
    QUESTS_ENROLL_FAILURE: eA,
    QUESTS_FETCH_REWARD_CODE_BEGIN: eC,
    QUESTS_FETCH_REWARD_CODE_SUCCESS: eN,
    QUESTS_FETCH_REWARD_CODE_FAILURE: eR,
    QUESTS_CLAIM_REWARD_BEGIN: eP,
    QUESTS_CLAIM_REWARD_SUCCESS: eD,
    QUESTS_CLAIM_REWARD_FAILURE: ew,
    QUESTS_DISMISS_CONTENT_BEGIN: ex,
    QUESTS_DISMISS_CONTENT_SUCCESS: eM,
    QUESTS_DISMISS_CONTENT_FAILURE: ek,
    QUESTS_USER_STATUS_UPDATE: eU,
    STREAM_CLOSE: ev,
    QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: ej,
    QUESTS_PREVIEW_UPDATE_SUCCESS: eG,
    QUESTS_DELIVERY_OVERRIDE: eB,
    QUESTS_SELECT_TASK_PLATFORM: eZ,
    QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eF,
    QUESTS_RESET_OPTIMISTIC_PROGRESS: eV,
    QUESTS_USER_COMPLETION_UPDATE: eQ,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: eJ,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e$,
    QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e0
  }),
  e2 = e3