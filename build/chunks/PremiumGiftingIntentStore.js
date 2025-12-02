/** Chunk was on web.js **/
/** chunk id: 441623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => $,
  n3: () => O,
  zj: () => E
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk752048 = require("./752048.js"),
  Chunk480294 = require("./480294.js"),
  Chunk699516 = require("./699516.js"),
  Chunk522558 = require("./522558.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let E = 5,
  b = 7,
  y = 864e5,
  O = 6048e5,
  v = 12096e5,
  S = 1,
  I = 5,
  T = .7;

function A() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null,
    giftUnreadNotificationLastDismissedTimes: []
  }
}
let C = A(),
  N = [],
  P = new Set,
  R = {},
  w = null;

function D(e, t) {
  let n = new Date,
    r = new Date(e.getTime());
  r.setFullYear(t);
  let i = new Date(r.getTime());
  i.setDate(r.getDate() - b);
  let a = new Date(r.getTime());
  return a.setDate(r.getDate() + b), n > i && n < a
}

function x(e) {
  return !D(e, e.getFullYear()) && D(e, new Date().getFullYear())
}

function L() {
  if (null != w) return void Q(w);
  if (k(), !Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) return;
  let {
    enabled: e
  } = Chunk522558.w.getConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  });
  if (!module) return;
  for (let e of Chunk699516.Z.getFriendIDs()) {
    let t = Chunk699516.Z.getSince(module),
      n = Chunk752048.Z.getUserAffinity(module);
    if (Chunk699516.Z.isFriend(module) && null != require && require.dmProbability > 0 && null != exports) {
      let n = new Date(exports);
      x(require) && (N.push(module), R[module] = {
        friendsSince: require
      })
    }
  }
  N.sort((e, t) => {
    let n = d.Z.getUserAffinity(e),
      r = d.Z.getUserAffinity(t),
      i = null != n ? n.communicationProbability : 0;
    return (null != r ? r.communicationProbability : 0) - i
  });
  let t = 0;
  for (let e of N) null != Chunk752048.Z.getUserAffinity(module) && Chunk752048.Z.getUserAffinity(module).dmProbability > T && exports < E && (P.add(module), exports++)
}

function j(e) {
  return Math.round(s()().diff(e, "years", true))
}

function M() {
  return Array.from(P).some(e => null == C.messageGiftIntentLastShownMap[e])
}

function k() {
  N.length = 0, P.clear(), R = {}
}

function U() {
  k()
}

function G() {
  C = A(), k()
}

function Z() {
  C.lastShownFriendsListGiftIntents = Array.from(P)
}

function B(e) {
  let {
    recipientUserId: t
  } = e;
  Y(t)
}

function F() {
  C.giftUnreadNotificationLastDismissedTimes.push(Date.now())
}

function V() {
  C.giftUnreadNotificationLastDismissedTimes = C.giftUnreadNotificationLastDismissedTimes.filter(e => Date.now() - e <= 7 * y)
}

function H(e) {
  let {
    recipientUserId: t
  } = e;
  Y(t)
}

function Y(e) {
  null == C.messageGiftIntentLastShownMap[e] && (C.messageGiftIntentLastShownMap[e] = Date.now())
}

function W() {
  for (let e in C.messageGiftIntentLastShownMap) {
    let t = C.messageGiftIntentLastShownMap[module];
    Date.now() - exports > v && delete C.messageGiftIntentLastShownMap[module]
  }
}

function K() {
  C.lastShownFriendsListGiftIntents = []
}

function z() {
  C.messageGiftIntentLastShownMap = {}
}

function q() {
  C.giftUnreadNotificationLastDismissedTimes = []
}

function X(e) {
  let {
    total: t
  } = e;
  if (null == t) {
    w = null, L();
    return
  }
  Q(t)
}

function Q(e) {
  k();
  let {
    enabled: t
  } = _.w.getConfig({
    location: "PremiumGiftingIntentStore generateFriendAnniversaries"
  });
  if (!t) return;
  w = e;
  let n = p.Z.getFriendIDs().filter(e => !p.Z.isIgnored(e));
  a().sampleSize(n, e).forEach(e => {
    let t = p.Z.getSince(e);
    if (null != t) {
      let n = new Date(t);
      N.push(e), R[e] = {
        friendsSince: n
      }
    }
  });
  let r = 0;
  for (let e of n)
    if (null == C.messageGiftIntentLastShownMap[e] && (P.add(e), ++r >= E)) break
}
class J extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (C = A(), null != e) {
      var t;
      C.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, C.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), C.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap), C.giftUnreadNotificationLastDismissedTimes = Array.from(null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [])
    }
    this.syncWith([p.Z, d.Z, f.Z, u.Z], L), W(), V()
  }
  getState() {
    return C
  }
  getFriendAnniversaries() {
    return N
  }
  isTopAffinityFriendAnniversary(e) {
    let {
      userId: t
    } = e, {
      enabled: n
    } = _.w.getConfig({
      location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary"
    });
    return !!n && P.has(t) && null == C.messageGiftIntentLastShownMap[t]
  }
  canShowGiftUnreadNotification() {
    V();
    let e = C.giftUnreadNotificationLastDismissedTimes;
    return !!M() && (0 === module.length || !(module.length >= I) && !(module.filter(e => Date.now() - e <= y).length >= S))
  }
  canShowFriendsTabBadge() {
    return M()
  }
  getFriendAnniversaryYears(e) {
    let t = R[e];
    return null == t ? 0 : j(t.friendsSince)
  }
  isGiftIntentMessageInCooldown(e) {
    return null != C.messageGiftIntentLastShownMap[e]
  }
  getDevToolTotalFriendAnniversaries() {
    return w
  }
}
h(J, "displayName", "PremiumGiftingIntentStore"), h(J, "persistKey", "PremiumGiftingIntentStore"), h(J, "migrations", [e => {
  var t, n;
  return null == e ? e : {
    friendsTabBadgeLastDismissedTime: null != (t = e.friendsTabBadgeLastDismissedTime) ? t : null,
    lastShownFriendsListGiftIntents: null != (n = e.lastShownFriendsListGiftIntents) ? n : [],
    messageGiftIntentLastShownMap: {}
  }
}, e => {
  var t, n;
  return null == e ? e : {
    friendsTabBadgeLastDismissedTime: null,
    lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
    messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
    giftUnreadNotificationLastDismissedTimes: []
  }
}]);
let $ = new J(Chunk570140.Z, {
  CONNECTION_OPEN: U,
  LOGOUT: G,
  MESSAGE_GIFT_INTENT_SHOWN: B,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: Z,
  GIFT_UNREAD_NOTIFICATION_DISMISS: F,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: H,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: K,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: z,
  DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: q,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: X
})