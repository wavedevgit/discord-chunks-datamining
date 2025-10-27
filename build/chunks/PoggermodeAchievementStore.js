/** Chunk was on web.js **/
/** chunk id: 882029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk57562 = require("./57562.jsx"),
  Chunk351780 = require("./351780.js"),
  Chunk843693 = require("./843693.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 2e3,
  h = {
    unlockedAchievements: {}
  },
  m = d({}, h);

function g(e) {
  return null == m.unlockedAchievements[e] && (m.unlockedAchievements = _(d({}, m.unlockedAchievements), {
    [e]: {
      achievementId: e,
      dateUnlocked: Date.now()
    }
  }), setTimeout(() => {
    (0, s.D)(e, true)
  }, p), true)
}

function E(e) {
  let {
    achievementId: t
  } = e;
  if (!l.Z.isEnabled()) returnfalse;
  g(t)
}
class b extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.default, l.Z, c.ZP);
    let t = null != e ? e : d({}, h);
    for (let e in t) m[e] = t[e]
  }
  getState() {
    return m
  }
  getAllUnlockedAchievements() {
    return m.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null != (t = m.unlockedAchievements[e]) ? t : null
  }
}
u(b, "displayName", "PoggermodeAchievementStore"), u(b, "persistKey", "PoggermodeAchievementStore");
let y = new b(Chunk570140.Z, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: E
})