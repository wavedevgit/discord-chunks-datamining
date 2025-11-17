/** Chunk was on web.js **/
/** chunk id: 282003, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  Chunk512722 = require("./512722.js"),
  Chunk543251 = require("./543251.js"),
  Chunk227705 = require("./227705.js"),
  Chunk879173 = require("./879173.js"),
  Chunk947827 = require("./947827.js"),
  Chunk791059 = require("./791059.js"),
  Chunk605507 = require("./605507.js"),
  Chunk190040 = require("./190040.js"),
  Chunk46817 = require("./46817.js"),
  Chunk187006 = require("./187006.js");
require("./830884.js");
var Chunk365049 = require("./365049.js"),
  Chunk687560 = require("./687560.js"),
  Chunk875583 = require("./875583.js"),
  g = function(e, t, n) {
    if (e instanceof s) {
      var i = r({}, t),
        a = r({}, t);
      for (var o in t) {
        var l = t[o],
          c = l.x,
          u = l.y;
        true !== c && true !== u && (i[o] = c, a[o] = u)
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
        r.stopTracking(), n.toValue instanceof a ? r.track(new f(r, n.toValue, p, i, e)) : r.animate(new p(i), e)
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
          e.forEach(function(o, s) {
            var l = function(o) {
              if (r[s] = true, ++n === e.length) {
                n = 0, t && t(o);
                return
              }!o.finished && i && a.stop()
            };
            o ? o.start(l) : l({
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
    return E(new o(0), {
      toValue: 0,
      delay: e,
      duration: 0
    })
  },
  v = function(e, t) {
    return y(t.map(function(t, n) {
      return b([O(e * n), t])
    }))
  },
  I = function(e, t) {
    return function() {
      for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
      var s = function e(t, n, r) {
        if ("number" == typeof n) {
          i(t instanceof o, "Bad mapping of type " + typeof t + " for key " + r + ", event value must map to AnimatedValue"), t.setValue(n);
          return
        }
        for (var r in i("object" == typeof t, "Bad mapping of type " + typeof t + " for key " + r), i("object" == typeof n, "Bad event of type " + typeof n + " for key " + r), t) e(t[r], n[r], r)
      };
      e.forEach(function(e, t) {
        s(e, r[t], "arg" + t)
      }), t && t.listener && t.listener.apply(null, r)
    }
  };
module.exports = {
  Value: Chunk227705,
  ValueXY: Chunk879173,
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
  stagger: v,
  event: I,
  isAnimated: Chunk187006,
  createAnimatedComponent: require("./533254.js"),
  inject: {
    ApplyAnimatedValues: require("./171726.js").inject,
    InteractionManager: require("./344665.js").inject,
    FlattenStyle: require("./330890.js").inject,
    RequestAnimationFrame: require("./907237.js").inject,
    CancelAnimationFrame: require("./712742.js").inject
  },
  __PropsOnlyForTests: require("./808669.js")
}