/** Chunk was on web.js **/
/** chunk id: 275759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => ec,
  ZD: () => E,
  hb: () => O
}), require("./896048.js"), require("./321073.js"), require("./638769.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk21119 = require("./21119.js"),
  Chunk153488 = require("./153488.js"),
  Chunk994500 = require("./994500.js"),
  Chunk70730 = require("./70730.js"),
  Chunk652215 = require("./652215.js");

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
  y = 7,
  b = 864e5,
  O = 6048e5,
  v = 12096e5,
  A = 1,
  I = 5,
  S = .7,
  T = .5;

function C() {
  return {
    messageGiftIntentLastShownMap: {},
    lastShownFriendsListGiftIntents: [],
    friendsTabBadgeLastDismissedTime: null,
    giftUnreadNotificationLastDismissedTimes: [],
    profilePopoutGiftIntentsDismissMap: {}
  }
}
let N = C(),
  w = [],
  R = new Set,
  P = new Set,
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
  i.setDate(r.getDate() - y);
  let a = new Date(r.getTime());
  return a.setDate(r.getDate() + y), n > i && n < a
}

function k(e) {
  return !M(e, e.getFullYear()) && M(e, new Date().getFullYear())
}

function U() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  if (e) {
    let e = Math.ceil(w.length / 2);
    w.slice(0, e).forEach(e => {
      R.add(e)
    }), w.forEach(e => {
      P.add(e)
    })
  } else
    for (let e of w) {
      let t = d.A.getUserAffinity(e);
      null != t && t.dmProbability > S && R.add(e), null != t && t.dmProbability > T && P.add(e)
    }
}

function G() {
  if (null != x) return void eo(x);
  if (B(), !f.A.hasConsented(h.YAq.PERSONALIZATION)) return;
  let {
    enabled: e
  } = _.u.getConfig({
    location: "PremiumGiftingIntentStore updateFriendAnniversaries"
  });
  if (e) {
    for (let e of p.A.getFriendIDs()) {
      let t = p.A.getSince(e),
        n = d.A.getUserAffinity(e);
      if (p.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
        let n = new Date(t);
        k(n) && (w.push(e), D[e] = {
          friendsSince: n
        })
      }
    }
    w.sort((e, t) => d.A.compareByDmProbability(e, t)), U()
  }
}

function V(e) {
  return Math.round(o()().diff(e, "years", true))
}

function F() {
  return Array.from(P).some(e => !N.lastShownFriendsListGiftIntents.includes(e))
}

function B() {
  w.length = 0, R.clear(), P.clear(), D = {}
}

function H() {
  B()
}

function Y() {
  N = C(), B()
}

function W() {
  N.lastShownFriendsListGiftIntents = Array.from(w)
}

function K(e) {
  let {
    recipientUserId: t
  } = e;
  X(t)
}

function z() {
  N.giftUnreadNotificationLastDismissedTimes.push(j())
}

function q() {
  let e = j();
  N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(t => e - t <= 7 * b)
}

function Z(e) {
  let {
    recipientUserId: t
  } = e;
  X(t)
}

function X(e) {
  null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = j())
}

function Q() {
  let e = j();
  for (let t in N.messageGiftIntentLastShownMap) e - N.messageGiftIntentLastShownMap[t] > v && delete N.messageGiftIntentLastShownMap[t]
}

function J() {
  let e = j(),
    t = b * y * 2;
  for (let n in N.profilePopoutGiftIntentsDismissMap) e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n]
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
  eo(t)
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

function es() {
  N.profilePopoutGiftIntentsDismissMap = {}
}

function eo(e) {
  B();
  let {
    enabled: t
  } = _.u.getConfig({
    location: "PremiumGiftingIntentStore generateFriendAnniversaries"
  });
  if (!t) return;
  x = e;
  let n = p.A.getFriendIDs().filter(e => !p.A.isIgnored(e));
  a().sampleSize(n, e).forEach(e => {
    let t = p.A.getSince(e);
    if (null != t) {
      let n = new Date(t);
      w.push(e), D[e] = {
        friendsSince: n
      }
    }
  }), w.sort((e, t) => d.A.compareByDmProbability(e, t)), U(true)
}
class el extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (N = C(), null != e) {
      var t;
      N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), N.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap), N.giftUnreadNotificationLastDismissedTimes = Array.from(null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : []), N.profilePopoutGiftIntentsDismissMap = g({}, e.profilePopoutGiftIntentsDismissMap)
    }
    this.syncWith([p.A, d.A, f.A, u.A], G), Q(), q(), J()
  }
  getState() {
    return N
  }
  getFriendAnniversaries() {
    return w
  }
  getNextRecipientUserIDForNotification() {
    if (!this.isNotificationCooldownActive()) return Array.from(R).find(e => null == N.messageGiftIntentLastShownMap[e])
  }
  isNotificationCooldownActive() {
    q();
    let e = N.giftUnreadNotificationLastDismissedTimes;
    if (0 === e.length) returnfalse;
    if (e.length >= I) returntrue;
    let t = j();
    return e.filter(e => t - e <= b).length >= A
  }
  canShowFriendsTabBadge() {
    return F()
  }
  getFriendAnniversaryYears(e) {
    let t = D[e];
    return null == t ? 0 : V(t.friendsSince)
  }
  canShowProfilePopoutGiftIntents(e) {
    return null == N.profilePopoutGiftIntentsDismissMap[e] && null != D[e]
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
    return Array.from(P)
  }
  getGiftUnreadNotificationLastDismissedTimes() {
    return N.giftUnreadNotificationLastDismissedTimes
  }
  getMessageGiftIntentLastShownMap() {
    return N.messageGiftIntentLastShownMap
  }
  getProfilePopoutGiftIntentsDismissMap() {
    return N.profilePopoutGiftIntentsDismissMap
  }
}
m(el, "displayName", "PremiumGiftingIntentStore"), m(el, "persistKey", "PremiumGiftingIntentStore"), m(el, "migrations", [e => {
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
let ec = new el(Chunk73153.h, {
  CONNECTION_OPEN: H,
  LOGOUT: Y,
  MESSAGE_GIFT_INTENT_SHOWN: K,
  FRIENDS_LIST_GIFT_INTENTS_SHOWN: W,
  GIFT_UNREAD_NOTIFICATION_DISMISS: z,
  GIFT_INTENT_FLOW_PURCHASED_GIFT: Z,
  PROFILE_POPOUT_GIFT_INTENTS_DISMISS: ea,
  DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: $,
  DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: ee,
  DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: et,
  DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: en,
  DEV_TOOLS_SET_CURRENT_DATE: er,
  DEV_TOOLS_RESET_CURRENT_DATE: ei,
  DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: es
})