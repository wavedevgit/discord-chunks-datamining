/** Chunk was on web.js **/
/** chunk id: 685908, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  Chunk284009 = require("./284009.js"),
  Chunk313319 = require("./313319.js"),
  Chunk958554 = require("./958554.js"),
  Chunk410641 = require("./410641.js"),
  Chunk868671 = require("./868671.js"),
  Chunk120685 = require("./120685.js"),
  Chunk543881 = require("./543881.js"),
  Chunk197557 = require("./197557.js"),
  Chunk505562 = require("./505562.js"),
  Chunk757927 = require("./757927.js");
require("./336258.js");
var Chunk253120 = require("./253120.js"),
  Chunk905386 = require("./905386.js"),
  Chunk362001 = require("./362001.js"),
  g = function(e, t, n) {
    if (e instanceof o) {
      var i = r({}, t),
        a = r({}, t);
      for (var s in t) {
        var l = t[s],
          c = l.x,
          u = l.y;
        true !== c && true !== u && (i[s] = c, a[s] = u)
      }
      return y([n(e.x, i), n(e.y, a)], {
        stopTogether: false
      })
    }
    return null
  },
  E = function e(t, n) {
    return g(t, n, e) || {
      start: function(e) {
        var r = t,
          i = n;
        r.stopTracking(), n.toValue instanceof a ? r.track(new f(r, n.toValue, _, i, e)) : r.animate(new _(i), e)
      },
      stop: function() {
        t.stopAnimation()
      }
    }
  },
  b = function(e) {
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
          finished: true
        }) : e[t].start(r)
      },
      stop: function() {
        t < e.length && e[t].stop()
      }
    }
  },
  y = function(e, t) {
    var n = 0,
      r = {},
      i = !(t && false === t.stopTogether),
      a = {
        start: function(t) {
          if (n === e.length) {
            t && t({
              finished: true
            });
            return
          }
          e.forEach(function(s, o) {
            var l = function(s) {
              if (r[o] = true, ++n === e.length) {
                n = 0, t && t(s);
                return
              }!s.finished && i && a.stop()
            };
            s ? s.start(l) : l({
              finished: true
            })
          })
        },
        stop: function() {
          e.forEach(function(e, t) {
            r[t] || e.stop(), r[t] = true
          })
        }
      };
    return a
  },
  O = function(e) {
    return E(new s(0), {
      toValue: 0,
      delay: e,
      duration: 0
    })
  },
  A = function(e, t) {
    return y(t.map(function(t, n) {
      return b([O(e * n), t])
    }))
  },
  v = function(e, t) {
    return function() {
      for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
      var o = function e(t, n, r) {
        if ("number" == typeof n) {
          i(t instanceof s, "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue"), t.setValue(n);
          return
        }
        for (var r in i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r), i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r), t) e(t[r], n[r], r)
      };
      e.forEach(function(e, t) {
        o(e, r[t], "arg" + t)
      }), t && t.listener && t.listener.apply(null, r)
    }
  };
module.exports = {
  Value: Chunk958554,
  ValueXY: Chunk410641,
  decay: function e(t, n) {
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
  timing: E,
  spring: function e(t, n) {
    return g(t, n, e) || {
      start: function(e) {
        var r = t,
          i = n;
        r.stopTracking(), n.toValue instanceof a ? r.track(new f(r, n.toValue, m, i, e)) : r.animate(new m(i), e)
      },
      stop: function() {
        t.stopAnimation()
      }
    }
  },
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
  delay: O,
  sequence: b,
  parallel: y,
  stagger: A,
  event: v,
  isAnimated: Chunk757927,
  createAnimatedComponent: require("./587452.js"),
  inject: {
    ApplyAnimatedValues: require("./207147.js").inject,
    InteractionManager: require("./87805.js").inject,
    FlattenStyle: require("./646709.js").inject,
    RequestAnimationFrame: require("./259126.js").inject,
    CancelAnimationFrame: require("./110799.js").inject
  },
  __PropsOnlyForTests: require("./267017.js")
}