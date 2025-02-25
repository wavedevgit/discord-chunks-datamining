/** Chunk was on web.js **/
"use strict";
let r, i, o, a, s, l, c, u, d, f, p, _, h, m, g, E, v;
n.d(t, {
  Z: () => eS
}), n(47120);
var b, y = n(392711),
  O = n(754700),
  S = n(887003),
  I = n(442837),
  T = n(570140),
  N = n(497505),
  A = n(918701),
  C = n(184299),
  R = n(5881),
  P = n(46140);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = new Map;

function j() {
  r = !1, i = !1, o = new Map, a = new Map, s = new Map, l = 0, c = new Set, u = new Set, d = new Set, f = new Set, M = new Map, _ = new Map, h = new Map, m = new Map, g = null, E = new Map, p = new Set, v = new Map
}

function k(e, t) {
  var n, r, i, o;
  if (null != t.userStatus)
    for (let a of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) !(0, y.isNil)(a) && O.T.DESKTOP.has(a.eventName) && ((null === (i = a.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) != null ? p.add(e) : (null === (o = a.heartbeat) || void 0 === o ? void 0 : o.lastBeatAt) == null && p.delete(e))
}

function U(e, t) {
  let n = (o = new Map(o)).get(e);
  if (null != n) {
    let r = w({}, n, t);
    k(e, t), o.set(e, r)
  }
}

function G(e, t) {
  let n = new Map(_);
  n.set(e, t), _ = n
}

function B(e, t) {
  G(e, t);
  let n = o.get(e),
    r = null == n ? void 0 : n.userStatus;
  null != r && null == r.claimedAt && U(e, {
    userStatus: x(w({}, r), {
      claimedAt: t.claimedAt
    })
  })
}

function F(e) {
  var t;
  let {
    entitlements: n
  } = e, r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
  return (null == r ? void 0 : r.tag) !== S.w.REWARD_CODE ? null : r.rewardCode
}

function V(e, t) {
  let n = new Map(h);
  n.set(e, t.items), h = n;
  let r = o.get(e),
    i = null == r ? void 0 : r.userStatus;
  if (null != i && null == i.claimedAt) {
    var a;
    let n = F({
      entitlements: t
    });
    null != n && G(e, n), U(e, {
      userStatus: x(w({}, i), {
        claimedAt: t.claimedAt,
        claimedTier: null !== (a = null == n ? void 0 : n.tier) && void 0 !== a ? a : null
      })
    })
  }
}

function Z(e) {
  null != m.get(e) && (m = new Map(m)).delete(e)
}

function H() {
  j()
}

function W() {
  l = Date.now(), r = !0
}

function Y(e) {
  let {
    quests: t,
    excludedQuests: n
  } = e;
  for (let e of (r = !1, o = new Map, t)) o.set(e.id, e), e.targetedContent.includes(N.jn.QUEST_BAR) && (0, R.T)({
    location: P.dr.QUESTS_STORE
  }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"));
  for (let e of (a = new Map, n)) a.set(e.id, e)
}

function K() {
  l = 0, r = !1
}

function z() {
  i = !0
}

function q(e) {
  let {
    quests: t
  } = e;
  for (let e of (i = !1, s = new Map, t)) s.set(e.id, e)
}

function Q() {
  i = !1
}

function X(e) {
  let {
    questId: t,
    streamKey: n,
    userStatus: r
  } = e;
  p.add(t), U(t, {
    userStatus: r
  }), Z(n)
}

function J(e) {
  let {
    questId: t,
    streamKey: n
  } = e;
  null == m.get(n) && (m = new Map(m)).set(n, {
    questId: t,
    streamKey: n,
    firstFailedAt: Date.now()
  })
}

function $(e) {
  let {
    streamKey: t
  } = e;
  Z(t)
}

function ee(e) {
  let t = new Set(c);
  t.delete(e), c = t
}

function et(e) {
  let {
    questId: t
  } = e, n = new Set(c);
  n.add(t), c = n
}

function en(e) {
  let {
    enrolledQuestUserStatus: t
  } = e;
  U(t.questId, {
    userStatus: t
  }), ee(t.questId)
}

function er(e) {
  let {
    questId: t
  } = e;
  ee(t)
}

function ei(e) {
  let {
    questId: t
  } = e, n = new Set(d);
  n.add(t), d = n
}

function eo(e) {
  let {
    questId: t,
    rewardCode: n
  } = e, r = new Set(d);
  r.delete(t), d = r, B(t, n)
}

function ea(e) {
  let {
    questId: t
  } = e, n = new Set(d);
  n.delete(t), d = n
}

function es(e) {
  let {
    questId: t
  } = e, n = new Set(u);
  n.add(t), u = n
}

function el(e) {
  let {
    questId: t,
    entitlements: n
  } = e, r = new Set(u);
  r.delete(t), u = r, V(t, n)
}

function ec(e) {
  let {
    questId: t
  } = e, n = new Set(u);
  n.delete(t), u = n
}

function eu(e) {
  let t = new Set(f);
  t.delete(e), f = t
}

function ed(e) {
  let {
    questId: t
  } = e, n = new Set(f);
  n.add(t), f = n
}

function ef(e) {
  let {
    dismissedQuestUserStatus: t
  } = e;
  U(t.questId, {
    userStatus: t
  }), eu(t.questId)
}

function ep(e) {
  let {
    questId: t
  } = e;
  eu(t)
}

function e_(e) {
  let {
    streamKey: t
  } = e;
  Z(t)
}

function eh(e) {
  let {
    user_status: t
  } = e, n = (0, R.T)({
    location: P.dr.QUESTS_STORE
  });
  n.log("Received user status update for ".concat(t.quest_id), t);
  let r = (0, A.U3)(t);
  U(t.quest_id, {
    userStatus: r
  }), 0 === Object.keys(r.progress).length && M.has(r.questId) && (n.log("Removing optimistic progress for ".concat(r.questId)), M.delete(r.questId))
}

function em(e) {
  let {
    previewQuestUserStatus: t
  } = e;
  U(t.questId, {
    userStatus: t
  }), null == t.claimedAt && (_ = new Map(_)).delete(t.questId), null == t.enrolledAt && ((E = new Map(E)).delete(t.questId), C.ZP.getState().resetQuest(t.questId))
}

function eg(e) {
  let {
    questId: t
  } = e;
  g = g === t ? null : t
}

function eE(e) {
  let {
    questId: t,
    platform: n
  } = e;
  E = new Map(E), null == n ? E.delete(t) : E.set(t, n)
}

function ev(e) {
  var t;
  let {
    questId: n,
    taskEventName: r,
    progress: i
  } = e, o = null !== (t = M.get(n)) && void 0 !== t ? t : new Map;
  o.set(r, i), M.set(n, o)
}

function eb(e) {
  let {
    decisionId: t,
    quest: n,
    placement: r
  } = e;
  null == n ? v.delete(r) : v.set(r, {
    decisionId: t,
    quest: n
  })
}

function ey(e) {
  let {
    placement: t
  } = e;
  v.delete(t)
}
j();
class eO extends(b = I.ZP.Store) {
  get quests() {
    return o
  }
  get excludedQuests() {
    return a
  }
  get claimedQuests() {
    return s
  }
  get isFetchingCurrentQuests() {
    return r
  }
  get isFetchingClaimedQuests() {
    return i
  }
  get lastFetchedCurrentQuests() {
    return l
  }
  get questDeliveryOverride() {
    return o.get(null != g ? g : "")
  }
  get questToDeliverForPlacement() {
    return v
  }
  isEnrolling(e) {
    return c.has(e)
  }
  isClaimingReward(e) {
    return u.has(e)
  }
  isFetchingRewardCode(e) {
    return d.has(e)
  }
  isDismissingContent(e) {
    return f.has(e)
  }
  getRewardCode(e) {
    return _.get(e)
  }
  getRewards(e) {
    return h.get(e)
  }
  getStreamHeartbeatFailure(e) {
    return m.get(e)
  }
  getQuest(e) {
    return o.get(e)
  }
  isProgressingOnDesktop(e) {
    return p.has(e)
  }
  selectedTaskPlatform(e) {
    var t;
    return null !== (t = E.get(e)) && void 0 !== t ? t : null
  }
  getOptimisticProgress(e, t) {
    var n;
    return null === (n = M.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
}
D(eO, "displayName", "QuestsStore");
let eS = new eO(T.Z, {
  LOGOUT: H,
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: W,
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: Y,
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: K,
  QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: z,
  QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: q,
  QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: Q,
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eb,
  QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: ey,
  QUESTS_SEND_HEARTBEAT_SUCCESS: X,
  QUESTS_SEND_HEARTBEAT_FAILURE: J,
  QUESTS_ENROLL_BEGIN: et,
  QUESTS_ENROLL_SUCCESS: en,
  QUESTS_ENROLL_FAILURE: er,
  QUESTS_FETCH_REWARD_CODE_BEGIN: ei,
  QUESTS_FETCH_REWARD_CODE_SUCCESS: eo,
  QUESTS_FETCH_REWARD_CODE_FAILURE: ea,
  QUESTS_CLAIM_REWARD_BEGIN: es,
  QUESTS_CLAIM_REWARD_SUCCESS: el,
  QUESTS_CLAIM_REWARD_FAILURE: ec,
  QUESTS_DISMISS_CONTENT_BEGIN: ed,
  QUESTS_DISMISS_CONTENT_SUCCESS: ef,
  QUESTS_DISMISS_CONTENT_FAILURE: ep,
  QUESTS_USER_STATUS_UPDATE: eh,
  STREAM_CLOSE: $,
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: e_,
  QUESTS_PREVIEW_UPDATE_SUCCESS: em,
  QUESTS_DELIVERY_OVERRIDE: eg,
  QUESTS_SELECT_TASK_PLATFORM: eE,
  QUESTS_UPDATE_OPTIMISTIC_PROGRESS: ev
})