/** Chunk was on 9207 **/
/** chunk id: 874486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk414736 = require("./414736.jsx"),
  Chunk3137 = require("./3137.js"),
  Chunk559908 = require("./559908.js");

function d(e, t, n) {
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
      d(e, t, n[t])
    })
  }
  return e
}
let _ = {
    unlockedAchievements: {}
  },
  p = u({}, _);
class m extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(s.default, o.A, c.Ay);
    let t = null != e ? e : u({}, _);
    for (let e in t) p[e] = t[e]
  }
  getState() {
    return p
  }
  getAllUnlockedAchievements() {
    return p.unlockedAchievements
  }
  getUnlocked(e) {
    var t;
    return null != (t = p.unlockedAchievements[e]) ? t : null
  }
}
d(m, "displayName", "PoggermodeAchievementStore"), d(m, "persistKey", "PoggermodeAchievementStore");
let g = new m(Chunk73153.h, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    var t, n, r;
    let {
      achievementId: i
    } = e;
    if (!o.A.isEnabled()) returnfalse;
    t = i, null != p.unlockedAchievements[t] || (n = u({}, p.unlockedAchievements), r = r = {
      [t]: {
        achievementId: t,
        dateUnlocked: Date.now()
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), p.unlockedAchievements = n, setTimeout(() => {
      (0, a.U)(t, true)
    }, 2e3))
  }
})