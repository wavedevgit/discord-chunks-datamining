/** Chunk was on web.js **/
/** chunk id: 441623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ec,
  n3: () => O,
  nN: () => E
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
  T = .7,
  C = .5;

function A() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null,
    giftUnreadNotificationLastDismissedTimes: [],
    profilePopoutGiftIntentsDismissMap: {}
  }
}
let N = A(),
  P = [],
  R = new Set,
  w = new Set,
  D = {},
  x = null,
  L = null;

function j() {
  return null != L ? L : Date.now()
}

function M(e, t) {
  let n = new Date,
    r = new Date(e.getTime());
  r.setFullYear(t);
  let i = new Date(r.getTime());
  i.setDate(r.getDate() - b);
  let a = new Date(r.getTime());
  return a.setDate(r.getDate() + b), n > i && n < a
}

function k(e) {
  return !M(e, e.getFullYear()) && M(e, new Date().getFullYear())
}

function U() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (module) {
    let e = Math.ceil(P.length / 2);
    P.slice(0, module).forEach(e => {
      R.add(e)
    }), P.forEach(e => {
      w.add(e)
    })
  } else
    for (let e of P) {
      let t = Chunk752048.Z.getUserAffinity(module);
      null != exports && exports.dmProbability > T && R.add(module), null != exports && exports.dmProbability > C && w.add(module)
    }
}

function G() {
  if (null != x) return void es(x);
  if (B(), !Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) return;
  let {
    enabled: e
  } = Chunk522558.w.getConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  });
  if (module) {
    for (let e of Chunk699516.Z.getFriendIDs()) {
      let t = Chunk699516.Z.getSince(module),
        n = Chunk752048.Z.getUserAffinity(module);
      if (Chunk699516.Z.isFriend(module) && null != require && require.dmProbability > 0 && null != exports) {
        let n = new Date(exports);
        k(require) && (P.push(module), D[module] = {
          friendsSince: require
        })
      }
    }
    P.sort((e, t) => d.Z.compareByDmProbability(e, t)), U()
  }
}

function Z(e) {
  return Math.round(s()().diff(e, "years", true))
}

function F() {
  return Array.from(w).some(e => !N.lastShownFriendsListGiftIntents.includes(e))
}

function B() {
  P.length = 0, R.clear(), w.clear(), D = {}
}

function V() {
  B()
}

function H() {
  N = A(), B()
}

function Y() {
  N.lastShownFriendsListGiftIntents = Array.from(P)
}

function W(e) {
  let {
    recipientUserId: t
  } = e;
  Q(t)
}

function K() {
  N.giftUnreadNotificationLastDismissedTimes.push(j())
}

function z() {
  let e = j();
  N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(t => e - t <= 7 * y)
}

function q(e) {
  let {
    recipientUserId: t
  } = e;
  Q(t)
}

function Q(e) {
  null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = j())
}

function X() {
  let e = j();
  for (let t in N.messageGiftIntentLastShownMap) module - N.messageGiftIntentLastShownMap[exports] > v && delete N.messageGiftIntentLastShownMap[exports]
}

function J() {
  let e = j(),
    t = y * b * 2;
  for (let n in N.profilePopoutGiftIntentsDismissMap) module - N.profilePopoutGiftIntentsDismissMap[require] > exports && delete N.profilePopoutGiftIntentsDismissMap[require]
}

function $() {
  N.lastShownFriendsListGiftIntents = []
}

function ee() {
  N.messageGiftIntentLastShownMap = {}
}

function et() {
  N.giftUnreadNotificationLastDismissedTimes = []
}

function en(e) {
  let {
    total: t
  } = e;
  if (null == t) {
    x = null, G();
    return
  }
  es(t)
}

function er(e) {
  let {
    date: t
  } = e;
  L = t
}

function ei() {
  L = null
}

function ea(e) {
  let {
    recipientUserId: t
  } = e;
  N.profilePopoutGiftIntentsDismissMap[t] = j()
}

function eo() {
  N.profilePopoutGiftIntentsDismissMap = {}
}

function es(e) {
  B();
  let {
    enabled: t
  } = _.w.getConfig({
    location: "PremiumGiftingIntentStore generateFriendAnniversaries"
  });
  if (!t) return;
  x = e;
  let n = p.Z.getFriendIDs().filter(e => !p.Z.isIgnored(e));
  a().sampleSize(n, e).forEach(e => {
    let t = p.Z.getSince(e);
    if (null != t) {
      let n = new Date(t);
      P.push(e), D[e] = {
        friendsSince: n
      }
    }
  }), P.sort((e, t) => d.Z.compareByDmProbability(e, t)), U(true)
}
class el extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (N = A(), null != e) {
      var t;
      N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), N.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap), N.giftUnreadNotificationLastDismissedTimes = Array.from(null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : []), N.profilePopoutGiftIntentsDismissMap = g({}, e.profilePopoutGiftIntentsDismissMap)
    }
    this.syncWith([p.Z, d.Z, f.Z, u.Z], G), X(), z(), J()
  }
  getState() {
    return N
  }
  getFriendAnniversaries() {
    return P
  }
  getNextRecipientUserIDForNotification() {
    if (!this.isNotificationCooldownActive()) return Array.from(R).find(e => null == N.messageGiftIntentLastShownMap[e])
  }
  isNotificationCooldownActive() {
    z();
    let e = N.giftUnreadNotificationLastDismissedTimes;
    if (0 === module.length) returnfalse;
    if (module.length >= I) returntrue;
    let t = j();
    return module.filter(e => t - e <= y).length >= S
  }
  canShowFriendsTabBadge() {
    return F()
  }
  getFriendAnniversaryYears(e) {
    let t = D[e];
    return null == t ? 0 : Z(t.friendsSince)
  }
  canShowProfilePopoutGiftIntents(e) {
    return null == N.profilePopoutGiftIntentsDismissMap[e] && this.getFriendAnniversaryYears(e) > 0
  }
  isGiftIntentMessageInCooldown(e) {
    return null != N.messageGiftIntentLastShownMap[e]
  }
  getDevToolTotalFriendAnniversaries() {
    return x
  }
  getDevToolCurrentDate() {
    return L
  }
  getHighestAffinityFriendAnniversaries() {
    return Array.from(R)
  }
  getHighAffinityFriendAnniversaries() {
    return Array.from(w)
  }
  getGiftUnreadNotificationLastDismissedTimes() {
    return N.giftUnreadNotificationLastDismissedTimes
  }
  getMessageGiftIntentLastShownMap() {
    return N.messageGiftIntentLastShownMap
  }
}
h(el, "displayName", "PremiumGiftingIntentStore"), h(el, "persistKey", "PremiumGiftingIntentStore"), h(el, "migrations", [e => {
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
}, e => {
  var t, n, r;
  return null == e ? e : {
    friendsTabBadgeLastDismissedTime: null,
    lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
    messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
    giftUnreadNotificationLastDismissedTimes: null != (r = e.giftUnreadNotificationLastDismissedTimes) ? r : [],
    profilePopoutGiftIntentsDismissMap: {}
  }
}]);
let ec = new el(Chunk570140.Z, {
  CONNECTION_OPEN: V,
  LOGOUT: H,
  MESSAGE_GIFT_INTENT_SHOWN: W,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: Y,
  GIFT_UNREAD_NOTIFICATION_DISMISS: K,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: q,
  PROFILE_POPOUT_GIFT_INTENTS_DISMISS: ea,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: $,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: ee,
  DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: et,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: en,
  DEV_TOOLS_SET_CURRENT_DATE: er,
  DEV_TOOLS_RESET_CURRENT_DATE: ei,
  DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: eo
})