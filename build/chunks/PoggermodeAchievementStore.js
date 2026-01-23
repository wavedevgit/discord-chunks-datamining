/** Chunk was on web.js **/
/** chunk id: 874486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk414736 = require("./414736.jsx"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 2e3,
  h = {
    unlockedAchievements: {}
  },
  m = d({}, h);

function g(e) {
  return null == m.unlockedAchievements[e] && (m.unlockedAchievements = p(d({}, m.unlockedAchievements), {
    [e]: {
      achievementId: e,
      dateUnlocked: Date.now()
    }
  }), setTimeout(() => {
    (0, o.U)(e, true)
  }, _), true)
}

function E(e) {
  let {
    achievementId: t
  } = e;
  if (!l.A.isEnabled()) returnfalse;
  g(t)
}
class y extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(s.default, l.A, c.Ay);
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
u(y, "displayName", "PoggermodeAchievementStore"), u(y, "persistKey", "PoggermodeAchievementStore");
let b = new y(Chunk73153.h, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: E
})