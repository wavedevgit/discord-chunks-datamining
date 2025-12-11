/** Chunk was on web.js **/
/** chunk id: 441623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => er,
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

function C() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null,
    giftUnreadNotificationLastDismissedTimes: []
  }
}
let A = C(),
  N = [],
  P = new Set,
  R = {},
  w = null,
  D = null;

function x() {
  return null != D ? D : Date.now()
}

function L(e, t) {
  let n = new Date,
    r = new Date(e.getTime());
  r.setFullYear(t);
  let i = new Date(r.getTime());
  i.setDate(r.getDate() - b);
  let a = new Date(r.getTime());
  return a.setDate(r.getDate() + b), n > i && n < a
}

function j(e) {
  return !L(e, e.getFullYear()) && L(e, new Date().getFullYear())
}

function M() {
  if (null != w) return void et(w);
  if (G(), !Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) return;
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
      j(require) && (N.push(module), R[module] = {
        friendsSince: require
      })
    }
  }
  N.sort((e, t) => {
    let n = d.Z.getUserAffinity(e),
      r = d.Z.getUserAffinity(t),
      i = null != n ? n.dmProbability : 0;
    return (null != r ? r.dmProbability : 0) - i
  });
  let t = 0;
  for (let e of N) null != Chunk752048.Z.getUserAffinity(module) && Chunk752048.Z.getUserAffinity(module).dmProbability > T && exports < E && (P.add(module), exports++)
}

function k(e) {
  return Math.round(s()().diff(e, "years", true))
}

function U() {
  return Array.from(P).some(e => null == A.messageGiftIntentLastShownMap[e])
}

function G() {
  N.length = 0, P.clear(), R = {}
}

function Z() {
  G()
}

function F() {
  A = C(), G()
}

function B() {
  A.lastShownFriendsListGiftIntents = Array.from(P)
}

function V(e) {
  let {
    recipientUserId: t
  } = e;
  K(t)
}

function H() {
  A.giftUnreadNotificationLastDismissedTimes.push(x())
}

function Y() {
  let e = x();
  A.giftUnreadNotificationLastDismissedTimes = A.giftUnreadNotificationLastDismissedTimes.filter(t => e - t <= 7 * y)
}

function W(e) {
  let {
    recipientUserId: t
  } = e;
  K(t)
}

function K(e) {
  null == A.messageGiftIntentLastShownMap[e] && (A.messageGiftIntentLastShownMap[e] = x())
}

function z() {
  let e = x();
  for (let t in A.messageGiftIntentLastShownMap) module - A.messageGiftIntentLastShownMap[exports] > v && delete A.messageGiftIntentLastShownMap[exports]
}

function q() {
  A.lastShownFriendsListGiftIntents = []
}

function Q() {
  A.messageGiftIntentLastShownMap = {}
}

function X() {
  A.giftUnreadNotificationLastDismissedTimes = []
}

function J(e) {
  let {
    total: t
  } = e;
  if (null == t) {
    w = null, M();
    return
  }
  et(t)
}

function $(e) {
  let {
    date: t
  } = e;
  D = t
}

function ee() {
  D = null
}

function et(e) {
  G();
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
  for (let e of N)
    if (null == A.messageGiftIntentLastShownMap[e] && (P.add(e), ++r >= E)) break
}
class en extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (A = C(), null != e) {
      var t;
      A.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, A.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), A.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap), A.giftUnreadNotificationLastDismissedTimes = Array.from(null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : [])
    }
    this.syncWith([p.Z, d.Z, f.Z, u.Z], M), z(), Y()
  }
  getState() {
    return A
  }
  getFriendAnniversaries() {
    return N
  }
  isFreshTopAffinityFriendAnniversary(e) {
    let {
      userId: t
    } = e;
    return P.has(t) && null == A.messageGiftIntentLastShownMap[t]
  }
  canShowGiftNotification() {
    Y();
    let e = A.giftUnreadNotificationLastDismissedTimes;
    if (!U()) returnfalse;
    if (0 === module.length) returntrue;
    if (module.length >= I) returnfalse;
    let t = x();
    return !(module.filter(e => t - e <= y).length >= S)
  }
  canShowFriendsTabBadge() {
    return U()
  }
  getFriendAnniversaryYears(e) {
    let t = R[e];
    return null == t ? 0 : k(t.friendsSince)
  }
  isGiftIntentMessageInCooldown(e) {
    return null != A.messageGiftIntentLastShownMap[e]
  }
  getDevToolTotalFriendAnniversaries() {
    return w
  }
  getDevToolCurrentDate() {
    return D
  }
  getGiftUnreadNotificationLastDismissedTimes() {
    return A.giftUnreadNotificationLastDismissedTimes
  }
  getMessageGiftIntentLastShownMap() {
    return A.messageGiftIntentLastShownMap
  }
}
h(en, "displayName", "PremiumGiftingIntentStore"), h(en, "persistKey", "PremiumGiftingIntentStore"), h(en, "migrations", [e => {
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
let er = new en(Chunk570140.Z, {
  CONNECTION_OPEN: Z,
  LOGOUT: F,
  MESSAGE_GIFT_INTENT_SHOWN: V,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: B,
  GIFT_UNREAD_NOTIFICATION_DISMISS: H,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: W,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: q,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: Q,
  DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: X,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: J,
  DEV_TOOLS_SET_CURRENT_DATE: $,
  DEV_TOOLS_RESET_CURRENT_DATE: ee
})