/** Chunk was on web.js **/
/** chunk id: 441623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
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

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}
let E = 5,
  b = 15,
  y = 7,
  O = 6048e5,
  v = 12096e5;

function I() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null
  }
}
let T = I(),
  S = [],
  A = new Set,
  C = {},
  N = null;

function R(e, t) {
  let n = new Date,
    r = new Date(e.getTime());
  r.setFullYear(t);
  let i = new Date(r.getTime());
  i.setDate(r.getDate() - y);
  let a = new Date(r.getTime());
  return a.setDate(r.getDate() + y), n > i && n < a
}

function P(e) {
  return !R(e, e.getFullYear()) && R(e, new Date().getFullYear())
}

function D() {
  if (null != N) return void K(N);
  if (x(), !Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) return;
  let {
    enabled: e
  } = Chunk522558.w.getConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  });
  if (module) {
    for (let e of Chunk699516.Z.getFriendIDs()) {
      if (S.length >= b) break;
      let t = Chunk699516.Z.getSince(module),
        n = Chunk752048.Z.getUserAffinity(module);
      if (!Chunk699516.Z.isIgnored(module) && null != require && require.communicationProbability > 0 && null != exports) {
        let n = new Date(exports);
        P(require) && (S.push(module), C[module] = {
          friendsSince: require
        })
      }
    }
    S.sort((e, t) => {
      let n = d.Z.getUserAffinity(e),
        r = d.Z.getUserAffinity(t),
        i = null != n ? n.communicationProbability : 0;
      return (null != r ? r.communicationProbability : 0) - i
    }), A = new Set(S.slice(0, E))
  }
}

function w(e) {
  return Math.round(s()().diff(e, "years", true))
}

function L() {
  return Array.from(A).some(e => !T.lastShownFriendsListGiftIntents.includes(e))
}

function x() {
  S.length = 0, A.clear(), C = {}
}

function M() {
  x()
}

function k() {
  T = I(), x()
}

function j() {
  T.lastShownFriendsListGiftIntents = Array.from(A)
}

function U(e) {
  let {
    recipientUserId: t
  } = e;
  Z(t)
}

function G() {
  T.friendsTabBadgeLastDismissedTime = Date.now()
}

function B(e) {
  let {
    recipientUserId: t
  } = e;
  Z(t)
}

function Z(e) {
  null == T.messageGiftIntentLastShownMap[e] && (T.messageGiftIntentLastShownMap[e] = Date.now())
}

function F() {
  for (let e in T.messageGiftIntentLastShownMap) {
    let t = T.messageGiftIntentLastShownMap[module];
    Date.now() - exports > v && delete T.messageGiftIntentLastShownMap[module]
  }
}

function V() {
  T.lastShownFriendsListGiftIntents = []
}

function H() {
  T.messageGiftIntentLastShownMap = {}
}

function Y() {
  T.friendsTabBadgeLastDismissedTime = null
}

function W(e) {
  let {
    total: t
  } = e;
  if (null == t) {
    N = null, D();
    return
  }
  K(t)
}

function K(e) {
  x();
  let {
    enabled: t
  } = p.w.getConfig({
    location: "PremiumGiftingIntentStore generateFriendAnniversaries"
  });
  if (!t) return;
  N = e;
  let n = _.Z.getFriendIDs().filter(e => !_.Z.isIgnored(e));
  a().sampleSize(n, e).forEach(e => {
    let t = _.Z.getSince(e);
    if (null != t) {
      let n = new Date(t);
      S.push(e), C[e] = {
        friendsSince: n
      }
    }
  }), A = new Set(S.slice(0, E))
}
class z extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    T = I(), null != e && (T.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, T.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), T.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap)), this.syncWith([_.Z, d.Z, f.Z, u.Z], D), F()
  }
  getState() {
    return T
  }
  getFriendAnniversaries() {
    return S
  }
  isTopAffinityFriendAnniversary(e) {
    let {
      userId: t
    } = e, {
      enabled: n
    } = p.w.getConfig({
      location: "PremiumGiftingIntentStore isTopAffinityFriendAnniversary"
    });
    return !!n && A.has(t)
  }
  canShowFriendsTabBadge() {
    var e;
    let t = null != (e = T.friendsTabBadgeLastDismissedTime) ? module : 0;
    return !(Date.now() - exports <= O) && L()
  }
  getFriendAnniversaryYears(e) {
    let t = C[e];
    return null == t ? 0 : w(t.friendsSince)
  }
  isGiftIntentMessageInCooldown(e) {
    return null != T.messageGiftIntentLastShownMap[e]
  }
  getDevToolTotalFriendAnniversaries() {
    return N
  }
}
m(z, "displayName", "PremiumGiftingIntentStore"), m(z, "persistKey", "PremiumGiftingIntentStore"), m(z, "migrations", [e => {
  var t, n;
  return null == e ? e : {
    friendsTabBadgeLastDismissedTime: null != (t = e.friendsTabBadgeLastDismissedTime) ? t : null,
    lastShownFriendsListGiftIntents: null != (n = e.lastShownFriendsListGiftIntents) ? n : [],
    messageGiftIntentLastShownMap: {}
  }
}]);
let q = new z(Chunk570140.Z, {
  CONNECTION_OPEN: M,
  LOGOUT: k,
  MESSAGE_GIFT_INTENT_SHOWN: U,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: j,
  FRIENDS_TAB_BADGE_DISMISS: G,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: B,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: V,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: H,
  DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: Y,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: W
})