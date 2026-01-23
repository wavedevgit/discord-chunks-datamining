/** Chunk was on web.js **/
/** chunk id: 598770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {
    lastSeenNewlyAddedEmojiIds: {}
  },
  _ = p,
  h = {};

function m() {
  _ = p, h = {}
}

function g(e) {
  var t;
  let {
    guildId: n,
    emojiId: r
  } = e, i = null != (t = h[n]) ? t : _.lastSeenNewlyAddedEmojiIds[n];
  null == i || 0 > l.default.compare(i.id, r) ? h[n] = {
    id: r,
    lastSeen: Date.now(),
    acknowledged: true
  } : h[n] = f(u({}, i), {
    acknowledged: true
  })
}

function E(e) {
  var t;
  let {
    guildId: n,
    emojiId: r
  } = e, i = null != (t = h[n]) ? t : _.lastSeenNewlyAddedEmojiIds[n];
  (null == i || 0 > l.default.compare(i.id, r)) && (h[n] = {
    id: r,
    lastSeen: Date.now(),
    acknowledged: false
  })
}

function y() {
  for (let e in h) _.lastSeenNewlyAddedEmojiIds[e] = h[e]
}

function b() {
  _ = p, y()
}
class O extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    _ = null != e ? e : p
  }
  getState() {
    return _
  }
  getLastSeenEmojiByGuild(e) {
    return _.lastSeenNewlyAddedEmojiIds[e]
  }
  isNewerThanLastSeen(e, t) {
    if (null == e || null == t) returnfalse;
    let n = this.getLastSeenEmojiByGuild(e);
    if (null == n || l.default.compare(t, n.id) > 0) returntrue;
    {
      let e = a()(n.lastSeen);
      return a()().isBefore(e.add(2, "weeks")) && !n.acknowledged
    }
  }
}
c(O, "displayName", "NewlyAddedEmojiStore"), c(O, "persistKey", "NewlyAddedEmojiStore"), c(O, "migrations", [e => {
  let t = e.lastSeenNewlyAddedEmojiIds,
    n = {};
  for (let e in t) {
    let r = t[e];
    n[e] = {
      id: r,
      lastSeen: Date.now(),
      acknowledged: false
    }
  }
  return {
    lastSeenNewlyAddedEmojiIds: n
  }
}]);
let v = new O(Chunk73153.h, {
  LOGOUT: m,
  NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: g,
  NEWLY_ADDED_EMOJI_SEEN_PENDING: E,
  NEWLY_ADDED_EMOJI_SEEN_UPDATED: y,
  CLEAR_CACHES: b,
  CONNECTION_CLOSED: y
})