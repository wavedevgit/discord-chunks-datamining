/** Chunk was on 1815 **/
n.d(t, {
  Z: () => h
});
var r, i = n(442837),
  s = n(570140),
  a = n(314897),
  l = n(57562),
  o = n(351780),
  c = n(843693);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let m = {
    unlockedAchievements: {}
  },
  p = u({}, m);
class g extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.default, c.ZP);
    let t = null != e ? e : u({}, m);
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
    return null !== (t = p.unlockedAchievements[e]) && void 0 !== t ? t : null
  }
}
d(g, "displayName", "PoggermodeAchievementStore"), d(g, "persistKey", "PoggermodeAchievementStore");
let h = new g(s.Z, {
  POGGERMODE_ACHIEVEMENT_UNLOCK: function(e) {
    let {
      achievementId: t
    } = e;
    if (!o.Z.isEnabled()) return !1;
    ! function(e) {
      var t, n;
      if (null == p.unlockedAchievements[e]) p.unlockedAchievements = (t = u({}, p.unlockedAchievements), n = n = {
        [e]: {
          achievementId: e,
          dateUnlocked: Date.now()
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t), setTimeout(() => {
        (0, l.D)(e, !0)
      }, 2e3)
    }(t)
  }
})