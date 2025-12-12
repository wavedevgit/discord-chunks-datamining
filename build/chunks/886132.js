/** Chunk was on web.js **/
/** chunk id: 886132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  a: () => p
});
var Chunk231053 = require("./231053.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var c = function(e) {
  return e.GET_PREMIUM = "GET_PREMIUM", e.JOIN_GUILD = "JOIN_GUILD", e.UNAVAILABLE = "UNAVAILABLE", e
}({});
let u = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: r,
      emojiComesFromCurrentGuild: i,
      isDiscoverable: o
    } = e, a = "Custom Emoji Popout";
    return t && !n && o ? a = "Custom Emoji Popout (Cross-Server)" : t || !n || r ? t || n || (a = o ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : a = i ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", a
  },
  d = e => {
    let {
      sourceType: t,
      expressionSourceApplication: n,
      isPremium: o,
      hasJoinedEmojiSourceGuild: a,
      isUnusableRoleSubscriptionEmoji: s,
      isDiscoverable: l,
      emojiComesFromCurrentGuild: c,
      userIsRoleSubscriber: u,
      isRoleSubscriptionEmoji: d,
      shouldHideRoleSubscriptionCTA: f,
      onOpenPremiumSettings: p
    } = e, _ = null;
    return t === r.w6.APPLICATION && null != n ? i.intl.formatToPlainString(i.t.uERlTd, {
      appName: n.name
    }) : o ? a ? d ? f && s ? i.intl.string(i.t.xFb68j) : s ? u ? i.intl.string(i.t.vLklfF) : i.intl.string(i.t["g8i/bf"]) : i.intl.string(i.t.Eoynp0) : c ? i.intl.string(i.t.hU4kIe) : i.intl.string(i.t.GM0xaX) : l ? i.intl.string(i.t.xE9WGt) : i.intl.string(i.t["0LMpW+"]) : a ? f && s ? i.intl.string(i.t.xFb68j) : s ? u ? i.intl.string(i.t.vLklfF) : i.intl.string(i.t["g8i/bf"]) : c ? i.intl.string(i.t.ICPhqa) : i.intl.string(i.t.jQy3aM) : l ? i.intl.string(i.t.FJ6Z01) : i.intl.format(i.t.U6vLcA, {
      openPremiumSettings: p
    })
  },
  f = e => {
    let {
      isPremium: t,
      hasJoinedEmojiSourceGuild: n,
      isUnusableRoleSubscriptionEmoji: r,
      isDiscoverable: o
    } = e, a = n && !r, s = !n && o, l = !t && (a || s);
    return t && s ? {
      type: "JOIN_GUILD",
      text: i.intl.string(i.t.riu2R5),
      description: null
    } : l ? {
      type: "GET_PREMIUM",
      text: i.intl.string(i.t["gl/XHJ"]),
      description: null
    } : {
      type: "UNAVAILABLE",
      text: null,
      description: null
    }
  },
  p = e => {
    let t = d(e),
      n = u(e);
    return l(a({}, f(e)), {
      emojiDescription: t,
      analyticsType: n
    })
  }