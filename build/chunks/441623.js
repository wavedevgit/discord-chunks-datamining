/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => X
}), n(47120), n(653041), n(230036);
var r, i = n(392711),
  o = n.n(i),
  a = n(913527),
  s = n.n(a),
  l = n(442837),
  c = n(570140),
  u = n(353926),
  d = n(814443),
  f = n(480294),
  p = n(699516),
  _ = n(709054),
  h = n(522558),
  m = n(581025),
  g = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
let b = 5,
  y = 15,
  O = 7,
  S = 6048e5,
  I = 12096e5;

function T() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null
  }
}
let N = T(),
  A = [],
  C = new Set,
  R = {},
  P = null;

function w(e, t) {
  let n = new Date,
    r = new Date(e.getTime());
  r.setFullYear(t);
  let i = new Date(r.getTime());
  i.setDate(r.getDate() - O);
  let o = new Date(r.getTime());
  return o.setDate(r.getDate() + O), n > i && n < o
}

function D(e) {
  return !w(e, e.getFullYear()) && w(e, new Date().getFullYear())
}

function x() {
  if (null != P) {
    q(P);
    return
  }
  if (k(), !f.Z.hasConsented(g.pjP.PERSONALIZATION)) return;
  let {
    enabled: e
  } = m.G.getCurrentConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: t
  } = h.w.getCurrentConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  }, {
    autoTrackExposure: !1
  });
  if (e || t) {
    for (let e of _.default.keys(p.Z.getRelationships())) {
      if (A.length >= y) break;
      let t = p.Z.getSince(e),
        n = d.Z.getUserAffinity(e);
      if (p.Z.getRelationshipType(e) === g.OGo.FRIEND && !p.Z.isIgnored(e) && null != n && n.affinity > 0 && null != t) {
        let n = new Date(t);
        D(n) && (A.push(e), R[e] = {
          friendsSince: n
        })
      }
    }
    A.sort((e, t) => {
      let n = d.Z.getUserAffinity(e),
        r = d.Z.getUserAffinity(t),
        i = null != n ? n.affinity : 0;
      return (null != r ? r.affinity : 0) - i
    }), C = new Set(A.slice(0, b))
  }
}

function L(e) {
  return Math.round(s()().diff(e, "years", !0))
}

function M() {
  return Array.from(C).some(e => !N.lastShownFriendsListGiftIntents.includes(e))
}

function k() {
  A.length = 0, C.clear(), R = {}
}

function j() {
  k()
}

function U() {
  N = T(), k()
}

function G() {
  N.lastShownFriendsListGiftIntents = Array.from(C)
}

function B(e) {
  let {
    recipientUserId: t
  } = e;
  V(t)
}

function Z() {
  N.friendsTabBadgeLastDismissedTime = Date.now()
}

function F(e) {
  let {
    recipientUserId: t
  } = e;
  V(t)
}

function V(e) {
  null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = Date.now())
}

function H() {
  for (let e in N.messageGiftIntentLastShownMap) {
    let t = N.messageGiftIntentLastShownMap[e];
    Date.now() - t > I && delete N.messageGiftIntentLastShownMap[e]
  }
}

function W() {
  N.lastShownFriendsListGiftIntents = []
}

function Y() {
  N.messageGiftIntentLastShownMap = {}
}

function K() {
  N.friendsTabBadgeLastDismissedTime = null
}

function z(e) {
  let {
    total: t
  } = e;
  if (null == t) {
    P = null, x();
    return
  }
  q(t)
}

function q(e) {
  k();
  let {
    enabled: t
  } = h.w.getCurrentConfig({
    location: "PremiumGiftingIntentStore generateFriendAnniversaries"
  }, {
    autoTrackExposure: !1
  });
  if (!t) return;
  P = e;
  let n = p.Z.getFriendIDs().filter(e => !p.Z.isIgnored(e));
  o().sampleSize(n, e).forEach(e => {
    let t = p.Z.getSince(e);
    if (null != t) {
      let n = new Date(t);
      A.push(e), R[e] = {
        friendsSince: n
      }
    }
  }), C = new Set(A.slice(0, b))
}
class Q extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    N = T(), null != e && (N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), N.messageGiftIntentLastShownMap = v({}, e.messageGiftIntentLastShownMap)), this.syncWith([p.Z, d.Z, f.Z, u.Z], x), H()
  }
  getState() {
    return N
  }
  getFriendAnniversaries() {
    return A
  }
  isTopAffinityFriendAnniversary(e) {
    let {
      userId: t
    } = e, {
      enabled: n
    } = h.w.getCurrentConfig({
      location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary"
    }, {
      autoTrackExposure: !1
    });
    return !!n && C.has(t)
  }
  canShowFriendsTabBadge() {
    var e;
    let t = null !== (e = N.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
    return !(Date.now() - t <= S) && M()
  }
  getFriendAnniversaryYears(e) {
    let t = R[e];
    return null == t ? 0 : L(t.friendsSince)
  }
  isGiftIntentMessageInCooldown(e) {
    return null != N.messageGiftIntentLastShownMap[e]
  }
  getDevToolTotalFriendAnniversaries() {
    return P
  }
}
E(Q, "displayName", "PremiumGiftingIntentStore"), E(Q, "persistKey", "PremiumGiftingIntentStore"), E(Q, "migrations", [e => {
  var t, n;
  return null == e ? e : {
    friendsTabBadgeLastDismissedTime: null !== (t = e.friendsTabBadgeLastDismissedTime) && void 0 !== t ? t : null,
    lastShownFriendsListGiftIntents: null !== (n = e.lastShownFriendsListGiftIntents) && void 0 !== n ? n : [],
    messageGiftIntentLastShownMap: {}
  }
}]);
let X = new Q(c.Z, {
  CONNECTION_OPEN: j,
  LOGOUT: U,
  MESSAGE_GIFT_INTENT_SHOWN: B,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: G,
  FRIENDS_TAB_BADGE_DISMISS: Z,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: F,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: W,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Y,
  DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: K,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: z
})