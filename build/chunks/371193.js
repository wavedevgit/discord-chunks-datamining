/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = n(512722),
  o = n(129629),
  a = n(420633),
  s = n(52738),
  l = n(535308),
  c = n(11746),
  u = n(728613),
  d = n(322659),
  f = n(919924),
  p = n(691181);
n(328794);
var _ = n(549639),
  h = n(466657),
  m = n(173821),
  g = function(e, t, n) {
    if (e instanceof s) {
      var i = r({}, t),
        o = r({}, t);
      for (var a in t) {
        var l = t[a],
          c = l.x,
          u = l.y;
        void 0 !== c && void 0 !== u && (i[a] = c, o[a] = u)
      }
      return O([n(e.x, i), n(e.y, o)], {
        stopTogether: !1
      })
    }
    return null
  },
  E = function e(t, n) {
    return g(t, n, e) || {
      start: function(e) {
        var r = t,
          i = n;
        r.stopTracking(), n.toValue instanceof o ? r.track(new f(r, n.toValue, m, i, e)) : r.animate(new m(i), e)
      },
      stop: function() {
        t.stopAnimation()
      }
    }
  },
  v = function e(t, n) {
    return g(t, n, e) || {
      start: function(e) {
        var r = t,
          i = n;
        r.stopTracking(), n.toValue instanceof o ? r.track(new f(r, n.toValue, _, i, e)) : r.animate(new _(i), e)
      },
      stop: function() {
        t.stopAnimation()
      }
    }
  },
  b = function e(t, n) {
    return g(t, n, e) || {
      start: function(e) {
        var r = t,
          i = n;
        r.stopTracking(), r.animate(new h(i), e)
      },
      stop: function() {
        t.stopAnimation()
      }
    }
  },
  y = function(e) {
    var t = 0;
    return {
      start: function(n) {
        var r = function r(i) {
          if (!i.finished || ++t === e.length) {
            n && n(i);
            return
          }
          e[t].start(r)
        };
        0 === e.length ? n && n({
          finished: !0
        }) : e[t].start(r)
      },
      stop: function() {
        t < e.length && e[t].stop()
      }
    }
  },
  O = function(e, t) {
    var n = 0,
      r = {},
      i = !(t && !1 === t.stopTogether),
      o = {
        start: function(t) {
          if (n === e.length) {
            t && t({
              finished: !0
            });
            return
          }
          e.forEach(function(a, s) {
            var l = function(a) {
              if (r[s] = !0, ++n === e.length) {
                n = 0, t && t(a);
                return
              }!a.finished && i && o.stop()
            };
            a ? a.start(l) : l({
              finished: !0
            })
          })
        },
        stop: function() {
          e.forEach(function(e, t) {
            r[t] || e.stop(), r[t] = !0
          })
        }
      };
    return o
  },
  S = function(e) {
    return v(new a(0), {
      toValue: 0,
      delay: e,
      duration: 0
    })
  },
  I = function(e, t) {
    return O(t.map(function(t, n) {
      return y([S(e * n), t])
    }))
  },
  T = function(e, t) {
    return function() {
      for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      var s = function e(t, n, r) {
        if ("number" == typeof n) {
          i(t instanceof a, "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue"), t.setValue(n);
          return
        }
        for (var r in i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r), i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r), t) e(t[r], n[r], r)
      };
      e.forEach(function(e, t) {
        s(e, r[t], "arg" + t)
      }), t && t.listener && t.listener.apply(null, r)
    }
  };
e.exports = {
  Value: a,
  ValueXY: s,
  decay: b,
  timing: v,
  spring: E,
  add: function(e, t) {
    return new l(e, t)
  },
  multiply: function(e, t) {
    return new c(e, t)
  },
  modulo: function(e, t) {
    return new u(e, t)
  },
  template: function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return new d(e, n)
  },
  delay: S,
  sequence: y,
  parallel: O,
  stagger: I,
  event: T,
  isAnimated: p,
  createAnimatedComponent: n(350323),
  inject: {
    ApplyAnimatedValues: n(457958).inject,
    InteractionManager: n(431732).inject,
    FlattenStyle: n(108012).inject,
    RequestAnimationFrame: n(601102).inject,
    CancelAnimationFrame: n(887442).inject
  },
  __PropsOnlyForTests: n(724027)
}