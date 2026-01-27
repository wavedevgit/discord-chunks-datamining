/** Chunk was on web.js **/
/** chunk id: 442696, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var Chunk131981 = require("./131981.js"),
  Chunk843455 = require("./843455.js"),
  o = r(require("./42539.js")),
  Chunk64700 = require("./64700.js"),
  l = r(require("./395869.js")),
  c = r(require("./486726.js")),
  u = r(require("./960890.js")),
  d = r(require("./678456.js")),
  Chunk294814 = require("./294814.js"),
  Chunk476575 = require("./476575.js"),
  Chunk337126 = require("./337126.js"),
  h = r(require("./680292.js")),
  Chunk180224 = require("./180224.js"),
  g = r(require("./585458.js")),
  E = r(require("./681334.js")),
  Chunk111806 = require("./111806.js"),
  Chunk269270 = require("./269270.js");

function O(e, t, n) {
  true === n && (n = 1e3), i.useLayoutEffect(function() {
    if (t) {
      var r = 0;
      a.each(e, function(e, i) {
        if (e.current) {
          var o = e.current.controllers;
          if (o.length) {
            var s = n * t[i];
            isNaN(s) ? s = r : r = s, a.each(o, function(e) {
              a.each(e.queue, function(e) {
                e.delay = s + (e.delay || 0)
              }), e.start()
            })
          }
        }
      })
    } else {
      var i = Promise.resolve();
      a.each(e, function(e) {
        var t = e.current || {},
          n = t.controllers,
          r = t.start;
        if (n && n.length) {
          var o = n.map(function(e) {
            var t = e.queue;
            return e.queue = [], t
          });
          i = i.then(function() {
            return a.each(n, function(e, t) {
              var n;
              return (n = e.queue).push.apply(n, o[t])
            }), r()
          })
        }
      })
    }
  })
}
var v = {
    default: {
      tension: 170,
      friction: 26
    },
    gentle: {
      tension: 120,
      friction: 14
    },
    wobbly: {
      tension: 180,
      friction: 12
    },
    stiff: {
      tension: 210,
      friction: 20
    },
    slow: {
      tension: 280,
      friction: 60
    },
    molasses: {
      tension: 280,
      friction: 120
    }
  },
  A = function(e) {
    return e
  },
  I = o(o({}, v.default), {}, {
    mass: 1,
    damping: 1,
    easing: A,
    clamp: false
  }),
  S = function() {
    this.tension = true, this.friction = true, this.frequency = true, this.damping = true, this.mass = true, this.velocity = 0, this.restVelocity = true, this.precision = true, this.progress = true, this.duration = true, this.easing = true, this.clamp = true, this.bounce = true, this.decay = true, this.round = true, Object.assign(this, I)
  };

function T(e, t, n) {
  for (var r in n && (C(n = o({}, n), t), t = o(o({}, n), t)), C(e, t), Object.assign(e, t), I) null == e[r] && (e[r] = I[r]);
  var i = e.mass,
    s = e.frequency,
    l = e.damping;
  return a.is.und(s) || (s < .01 && (s = .01), l < 0 && (l = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * l * i / s), e
}

function C(e, t) {
  if (a.is.und(t.decay)) {
    var n = !a.is.und(t.tension) || !a.is.und(t.friction);
    !n && a.is.und(t.frequency) && a.is.und(t.damping) && a.is.und(t.mass) || (e.duration = true, e.decay = true), n && (e.frequency = true)
  } else e.duration = true
}
var N = [],
  w = function() {
    this.changed = false, this.values = N, this.toValues = null, this.fromValues = N, this.to = true, this.from = true, this.config = new S, this.immediate = false, this.onStart = true, this.onChange = true, this.onRest = []
  };

function R(e) {
  var t = 0;
  if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = P(e))) return function() {
      return t >= e.length ? {
        done: true
      } : {
        done: false,
        value: e[t++]
      }
    };
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  return (t = e[Symbol.iterator]()).next.bind(t)
}

function P(e, t) {
  if (e) {
    if ("string" == typeof e) return D(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
  }
}

function D(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
var L = function(e, t) {
  return _.useMemoOne(e, t || [{}])
};

function x(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return a.is.fun(e) ? e.apply(true, n) : e
}
var M = function(e, t) {
    returntrue === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)))
  },
  j = function(e, t, n) {
    return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : o({}, e))
  },
  k = function(e, t) {
    return !a.is.und(U(e, t))
  },
  U = function(e, t) {
    returntrue === e.default ? e[t] : e.default ? e.default[t] : true
  },
  G = function(e, t, n) {
    true === t && (t = []), true === n && (n = {});
    var r = V;
    e.default && true !== e.default && (r = Object.keys(e = e.default));
    for (var i, o = R(r); !(i = o()).done;) {
      var s = i.value,
        l = e[s];
      a.is.und(l) || t.includes(s) || (n[s] = l)
    }
    return n
  },
  F = function(e, t, n) {
    return G(t, n, e)
  },
  V = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
  B = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onDelayEnd: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onRest: 1,
    onNoopRest: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    keys: 1,
    callId: 1,
    parentId: 1
  };

function H(e) {
  var t = {},
    n = 0;
  if (a.each(e, function(e, r) {
      !B[r] && (t[r] = e, n++)
    }), n) return t
}

function Y(e) {
  var t = H(e);
  if (t) {
    var n = {
      to: t
    };
    return a.each(e, function(e, r) {
      return r in t || (n[r] = e)
    }), n
  }
  return o({}, e)
}

function W(e) {
  var t = a.getFluidConfig(e);
  return t ? W(t.get()) : a.is.arr(e) ? e.map(W) : a.isAnimatedString(e) ? p.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e
}

function K(e, t) {
  var n = t.key,
    r = t.props,
    i = t.state,
    s = t.actions;
  return new Promise(function(t, l) {
    var c, u, d = false,
      f = M(r.cancel, n);

    function p() {
      i.resumeQueue.add(_), u.cancel(), c = u.time - a.Globals.now()
    }

    function _() {
      c > 0 ? (i.pauseQueue.add(p), u = a.Globals.frameLoop.setTimeout(h, c)) : h()
    }

    function h() {
      i.pauseQueue.delete(p), e <= (i.cancelId || 0) && (f = true);
      try {
        s.start(o(o({}, r), {}, {
          callId: e,
          delay: c,
          cancel: f,
          pause: d
        }), t)
      } catch (e) {
        l(e)
      }
    }
    f ? h() : (c = x(r.delay || 0, n), (d = M(r.pause, n)) ? (i.resumeQueue.add(_), s.pause()) : (s.resume(), _()))
  })
}
var z = function(e, t) {
    return 1 == t.length ? t[0] : t.some(function(e) {
      return e.cancelled
    }) ? Q(e) : t.every(function(e) {
      return e.noop
    }) ? q(e) : Z(e, t.every(function(e) {
      return e.finished
    }))
  },
  q = function(e, t) {
    return true === t && (t = e.get()), {
      value: t,
      noop: true,
      finished: true,
      target: e
    }
  },
  Z = function(e, t, n) {
    return true === n && (n = e.get()), {
      value: n,
      finished: t,
      target: e
    }
  },
  Q = function(e, t) {
    return true === t && (t = e.get()), {
      value: t,
      cancelled: true,
      target: e
    }
  };

function X(e) {
  var t = 0;
  if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = J(e))) return function() {
      return t >= e.length ? {
        done: true
      } : {
        done: false,
        value: e[t++]
      }
    };
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  return (t = e[Symbol.iterator]()).next.bind(t)
}

function J(e, t) {
  if (e) {
    if ("string" == typeof e) return $(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(e, t)
  }
}

function $(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function ee(e, t, n, r) {
  return et.apply(this, arguments)
}

function et() {
  return (et = c(l.mark(function e(t, n, r, i) {
    var s, u, d, f, _;
    return l.wrap(function(e) {
      for (;;) switch (e.prev = e.next) {
        case 0:
          if (!n.pause) {
            e.next = 3;
            break
          }
          return e.next = 3, new Promise(function(e) {
            r.resumeQueue.add(e)
          });
        case 3:
          if (s = n.callId, u = n.parentId, d = n.onRest, f = r.asyncTo, _ = r.promise, !(!u && t === f && !n.reset)) {
            e.next = 7;
            break
          }
          return e.abrupt("return", _);
        case 7:
          return e.abrupt("return", r.promise = c(l.mark(function e() {
            var h, m, g, E, y, b, O, v, A;
            return l.wrap(function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return r.asyncId = s, r.asyncTo = t, h = G(n, ["onRest"]), E = new Promise(function(e, t) {
                    return m = e, g = t
                  }), y = function(e) {
                    return function() {
                      var t = function(e) {
                        throw e instanceof er && g(e), e
                      };
                      try {
                        return e.apply(true, arguments).catch(t)
                      } catch (e) {
                        t(e)
                      }
                    }
                  }, b = function(e) {
                    var t = s <= (r.cancelId || 0) && Q(i) || s !== r.asyncId && Z(i, false);
                    if (t) throw e.result = t, e
                  }, O = y(function(e, t) {
                    var n = new er;
                    b(n);
                    var u = a.is.obj(e) ? o({}, e) : o(o({}, t), {}, {
                      to: e
                    });
                    return u.parentId = s, a.each(h, function(e, t) {
                      a.is.und(u[t]) && (u[t] = e)
                    }), i.start(u).then(function() {
                      var e = c(l.mark(function e(t) {
                        return l.wrap(function(e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              if (b(n), !i.is("PAUSED")) {
                                e.next = 4;
                                break
                              }
                              return e.next = 4, new Promise(function(e) {
                                r.resumeQueue.add(e)
                              });
                            case 4:
                              return e.abrupt("return", t);
                            case 5:
                            case "end":
                              return e.stop()
                          }
                        }, e)
                      }));
                      return function(t) {
                        return e.apply(this, arguments)
                      }
                    }())
                  }), e.prev = 7, a.is.arr(t) ? A = (function() {
                    var e = c(l.mark(function e(t) {
                      var n, r, i;
                      return l.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n = X(t);
                          case 1:
                            if ((r = n()).done) {
                              e.next = 7;
                              break
                            }
                            return i = r.value, e.next = 5, O(i);
                          case 5:
                            e.next = 1;
                            break;
                          case 7:
                          case "end":
                            return e.stop()
                        }
                      }, e)
                    }));
                    return function(t) {
                      return e.apply(this, arguments)
                    }
                  })()(t) : a.is.fun(t) && (A = Promise.resolve(t(O, i.stop.bind(i)))), e.next = 11, Promise.all([A.then(m), E]);
                case 11:
                  v = Z(i, true), e.next = 21;
                  break;
                case 14:
                  if (e.prev = 14, e.t0 = e.catch(7), !(e.t0 instanceof er)) {
                    e.next = 20;
                    break
                  }
                  v = e.t0.result, e.next = 21;
                  break;
                case 20:
                  throw e.t0;
                case 21:
                  return e.prev = 21, s == r.asyncId && (r.asyncId = u, r.asyncTo = u ? f : true, r.promise = u ? _ : true), e.finish(21);
                case 24:
                  return a.is.fun(d) && p.batchedUpdates(function() {
                    d(v)
                  }), e.abrupt("return", v);
                case 26:
                case "end":
                  return e.stop()
              }
            }, e, null, [
              [7, 14, 21, 24]
            ])
          }))());
        case 8:
        case "end":
          return e.stop()
      }
    }, e)
  }))).apply(this, arguments)
}

function en(e, t) {
  e.cancelId = t, e.asyncId = e.asyncTo = e.promise = true
}
var er = function(e) {
    function t() {
      var t;
      return (t = e.call(this, "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.") || this).result = true, t
    }
    return d(t, e), t
  }(h(Error)),
  ei = function(e) {
    return e instanceof eo
  },
  ea = 1,
  eo = function(e) {
    function t() {
      for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
      return (t = e.call.apply(e, [this].concat(r)) || this).id = ea++, t.key = true, t._priority = 0, t._children = new Set, t
    }
    d(t, e);
    var n = t.prototype;
    return n.get = function() {
      var e = f.getAnimated(this);
      return e && e.getValue()
    }, n.to = function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return p.to(this, t)
    }, n.interpolate = function() {
      m.deprecateInterpolate();
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return p.to(this, t)
    }, n.addChild = function(e) {
      this._children.size || this._attach(), this._children.add(e)
    }, n.removeChild = function(e) {
      this._children.delete(e), this._children.size || this._detach()
    }, n.onParentChange = function(e) {
      var t = e.type;
      this.idle ? "start" == t && (this._reset(), this._start()) : "reset" == t && this._reset()
    }, n._attach = function() {}, n._detach = function() {}, n._reset = function() {
      this._emit({
        type: "reset",
        parent: this
      })
    }, n._start = function() {
      this._emit({
        type: "start",
        parent: this
      })
    }, n._onChange = function(e, t) {
      true === t && (t = false), this._emit({
        type: "change",
        parent: this,
        value: e,
        idle: t
      })
    }, n._onPriorityChange = function(e) {
      this.idle || p.frameLoop.start(this), this._emit({
        type: "priority",
        parent: this,
        priority: e
      })
    }, n._emit = function(e) {
      a.each(Array.from(this._children), function(t) {
        t.onParentChange(e)
      })
    }, u(t, [{
      key: "priority",
      get: function() {
        return this._priority
      },
      set: function(e) {
        this._priority != e && (this._priority = e, this._onPriorityChange(e))
      }
    }]), t
  }(Chunk843455.FluidValue),
  es = "CREATED",
  el = "IDLE",
  ec = "ACTIVE",
  eu = "PAUSED",
  ed = "DISPOSED",
  ef = function(e) {
    function t(t, n) {
      var r;
      if ((r = e.call(this) || this).key = true, r.animation = new w, r.queue = true, r._phase = es, r._state = {
          pauseQueue: new Set,
          resumeQueue: new Set
        }, r._defaultProps = {}, r._lastCallId = 0, r._lastToId = 0, !a.is.und(t) || !a.is.und(n)) {
        var i = a.is.obj(t) ? o({}, t) : o(o({}, n), {}, {
          from: t
        });
        i.default = true, r.start(i)
      }
      return r
    }
    d(t, e);
    var n = t.prototype;
    return n.advance = function(e) {
      var t = this,
        n = true,
        r = false,
        i = this.animation,
        o = i.config,
        s = i.toValues,
        l = f.getPayload(i.to);
      if (!l) {
        var c = a.getFluidConfig(i.to);
        c && (s = a.toArray(c.get()))
      }
      return i.values.forEach(function(c, u) {
        if (!c.done) {
          var d = l ? l[u].lastPosition : s[u],
            f = i.immediate,
            p = d;
          if (!f) {
            if (p = c.lastPosition, o.tension <= 0) {
              c.done = true;
              return
            }
            var _ = c.elapsedTime += e,
              h = i.fromValues[u],
              m = null != c.v0 ? c.v0 : c.v0 = a.is.arr(o.velocity) ? o.velocity[u] : o.velocity;
            if (a.is.und(o.duration))
              if (o.decay) {
                var g = true === o.decay ? .998 : o.decay,
                  E = Math.exp(-(1 - g) * _);
                p = h + m / (1 - g) * (1 - E), f = .1 > Math.abs(c.lastPosition - p), y = m * E
              } else
                for (var y = null == c.lastVelocity ? m : c.lastVelocity, b = o.precision || (h == d ? .005 : Math.min(1, .001 * Math.abs(d - h))), O = o.restVelocity || b / 10, v = o.clamp ? 0 : o.bounce, A = !a.is.und(v), I = h == d ? c.v0 > 0 : h < d, S = false, T = 1, C = Math.ceil(e / 1), N = 0; N < C && !(!(Math.abs(y) > O) && (f = Math.abs(d - p) <= b)); ++N) {
                  A && (S = p == d || p > d == I) && (y = -y * v, p = d);
                  var w = (-(1e-6 * o.tension) * (p - d) + -(.001 * o.friction) * y) / o.mass;
                  y += w * T, p += y * T
                } else {
                  var R = o.progress || 0;
                  o.duration <= 0 ? R = 1 : R += (1 - R) * Math.min(1, _ / o.duration), y = ((p = h + o.easing(R) * (d - h)) - c.lastPosition) / e, f = 1 == R
                }
            c.lastVelocity = y, Number.isNaN(p) && (console.warn("Got NaN while animating:", t), f = true)
          }
          l && !l[u].done && (f = false), f ? c.done = true : n = false, c.setValue(p, o.round) && (r = true)
        }
      }), n ? this.finish() : r && this._onChange(this.get()), n
    }, n.is = function(e) {
      return this._phase == e
    }, n.set = function(e) {
      var t = this;
      return p.batchedUpdates(function() {
        if (t._focus(e), t._set(e) && !t.is(ec)) return t._onChange(t.get(), true);
        t._stop()
      }), this
    }, n.pause = function() {
      ep(this, "pause"), this.is(eu) || (this._phase = eu, a.flush(this._state.pauseQueue, function(e) {
        return e()
      }))
    }, n.resume = function() {
      ep(this, "resume"), this.is(eu) && (this._start(), a.flush(this._state.resumeQueue, function(e) {
        return e()
      }))
    }, n.finish = function(e) {
      var t = this;
      if (this.resume(), this.is(ec)) {
        var n = this.animation;
        !n.config.decay && a.is.und(e) && (e = n.to), a.is.und(e) || this._set(e), p.batchedUpdates(function() {
          !n.changed && (n.changed = true, n.onStart && n.onStart(t)), t._stop()
        })
      }
      return this
    }, n.update = function(e) {
      return ep(this, "update"), (this.queue || (this.queue = [])).push(e), this
    }, n.start = function() {
      var e = c(l.mark(function e(t, n) {
        var r, i, s = this;
        return l.wrap(function(e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return ep(this, "start"), a.is.und(t) ? (r = this.queue || [], this.queue = []) : r = [a.is.obj(t) ? t : o(o({}, n), {}, {
                to: t
              })], e.next = 4, Promise.all(r.map(function(e) {
                return s._update(e)
              }));
            case 4:
              return i = e.sent, e.abrupt("return", z(this, i));
            case 6:
            case "end":
              return e.stop()
          }
        }, e, this)
      }));
      return function(t, n) {
        return e.apply(this, arguments)
      }
    }(), n.stop = function(e) {
      var t = this;
      return this.is(ed) || (en(this._state, this._lastCallId), this._focus(this.get()), p.batchedUpdates(function() {
        return t._stop(e)
      })), this
    }, n.reset = function() {
      this._update({
        reset: true
      })
    }, n.dispose = function() {
      this.is(ed) || (this.animation && (this.animation.onRest = []), this.stop(), this._phase = ed)
    }, n.onParentChange = function(t) {
      e.prototype.onParentChange.call(this, t), "change" == t.type ? !this.is(ec) && (this._reset(), this.is(eu) || this._start()) : "priority" == t.type && (this.priority = t.priority + 1)
    }, n._prepareNode = function(e) {
      var t = e.to,
        n = e.from,
        r = e.reverse,
        i = this.key || "",
        o = {
          to: t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i],
          from: n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i]
        };
      if (this.is(es)) {
        if (r) {
          var s = [n, t];
          t = s[0], n = s[1]
        }
        n = a.getFluidValue(n);
        var l = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
        l && !a.is.und(n) && l.setValue(n)
      }
      return o
    }, n._updateNode = function(e) {
      var t = f.getAnimated(this);
      if (!a.is.und(e)) {
        var n = this._getNodeType(e);
        t && t.constructor === n || f.setAnimated(this, t = n.create(e))
      }
      return t
    }, n._getNodeType = function(e) {
      var t = f.getAnimated(e);
      return t ? t.constructor : a.is.arr(e) ? f.AnimatedArray : a.isAnimatedString(e) ? f.AnimatedString : f.AnimatedValue
    }, n._update = function(e, t) {
      var n = this,
        r = this._defaultProps,
        i = function(t) {
          var n = U(e, t);
          a.is.und(n) || (r[t] = n), r[t] && (e[t] = r[t])
        };
      i("cancel"), i("pause");
      var o = this._prepareNode(e);
      return K(++this._lastCallId, {
        key: this.key,
        props: e,
        state: this._state,
        actions: {
          pause: this.pause.bind(this),
          resume: this.resume.bind(this),
          start: this._merge.bind(this, o)
        }
      }).then(function(r) {
        if (e.loop && r.finished && !(t && r.noop)) {
          var i = em(e);
          if (i) return n._update(i, true)
        }
        return r
      })
    }, n._merge = function(e, t, n) {
      if (t.cancel) return this.stop(true), n(Q(this));
      var r = this.key,
        i = this.animation,
        o = this._defaultProps,
        s = !a.is.und(e.to),
        l = !a.is.und(e.from);
      if (s || l)
        if (!(t.callId > this._lastToId)) return n(Q(this));
        else this._lastToId = t.callId;
      var c = function(e) {
          return a.is.und(t[e]) ? o[e] : t[e]
        },
        u = e_(c("onDelayEnd"), r);
      u && u(t, this), t.default && F(o, t, ["pause", "cancel"]);
      var d = i.to,
        _ = i.from,
        h = e.to,
        m = true === h ? d : h,
        g = e.from,
        E = true === g ? _ : g;
      if (l && !s && (m = E), t.reverse) {
        var y = [E, m];
        m = y[0], E = y[1]
      }
      var b = !a.isEqual(E, _);
      b && (i.from = E);
      var O = !a.isEqual(m, d);
      O && this._focus(m);
      var v = a.getFluidConfig(m),
        A = a.getFluidConfig(E);
      A && (E = A.get());
      var I = a.is.arr(t.to) || a.is.fun(t.to),
        S = i.config,
        C = S.decay,
        N = S.velocity;
      t.config && !I && T(S, x(t.config, r), t.config !== o.config ? x(o.config, r) : true);
      var w = f.getAnimated(this);
      if (!w || a.is.und(m)) return n(Z(this, true));
      var R = a.is.und(t.reset) ? l && !t.default : !a.is.und(E) && M(t.reset, r),
        P = R ? E : this.get(),
        D = W(m),
        L = a.is.num(D) || a.is.arr(D) || a.isAnimatedString(D),
        j = !I && (!L || M(o.immediate || t.immediate, r));
      if (O)
        if (j) w = this._updateNode(D);
        else {
          var k = this._getNodeType(m);
          if (k !== w.constructor) throw Error("Cannot animate between " + w.constructor.name + " and " + k.name + ', as the "to" prop suggests')
        } var U = w.constructor,
        G = !!v,
        V = false;
      if (!G) {
        var B = R || this.is(es) && b;
        (O || B) && (G = !(V = a.isEqual(W(P), D))), a.isEqual(S.decay, C) && a.isEqual(S.velocity, N) || (G = true)
      }
      if (V && this.is(ec) && (i.changed && !R ? G = true : G || this._stop()), !I) {
        (G || a.getFluidConfig(d)) && (i.values = w.getPayload(), i.toValues = v ? null : U == f.AnimatedString ? [1] : a.toArray(D)), i.immediate = j, i.onStart = e_(c("onStart"), r), i.onChange = e_(c("onChange"), r);
        var H = i.onRest,
          Y = R && !t.onRest ? H[0] || a.noop : eh(e_(c("onRest"), r), this);
        if (G) {
          i.onRest = [Y, eh(n, this)];
          var K = +!R;
          K < H.length && p.batchedUpdates(function() {
            for (; K < H.length; K++) H[K]()
          })
        } else(R || t.onRest) && (i.onRest[0] = Y)
      }
      var z = e_(c("onProps"), r);
      if (z && z(t, this), R && w.setValue(P), I) n(ee(t.to, t, this._state, this));
      else if (G) R && (this._phase = el), this._reset(), this._start();
      else if (this.is(ec) && !O) i.onRest.push(eh(n, this));
      else {
        let e = q(this, P),
          t = e_(c("onNoopRest"), r);
        null != t && t(e), n(e)
      }
    }, n._focus = function(e) {
      var t = this.animation;
      if (e !== t.to) {
        var n = a.getFluidConfig(t.to);
        n && n.removeChild(this), t.to = e;
        var r = 0;
        (n = a.getFluidConfig(e)) && (n.addChild(this), ei(e) && (r = (e.priority || 0) + 1)), this.priority = r
      }
    }, n._set = function(e) {
      var t = a.getFluidConfig(e);
      t && (e = t.get());
      var n = f.getAnimated(this),
        r = n && n.getValue();
      return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r)
    }, n._onChange = function(t, n) {
      true === n && (n = false);
      var r = this.animation;
      r.changed || n || (r.changed = true, r.onStart && r.onStart(this)), r.onChange && r.onChange(t, this), e.prototype._onChange.call(this, t, n)
    }, n._reset = function() {
      var t = this.animation;
      f.getAnimated(this).reset(t.to), this.is(ec) || (t.changed = false), t.immediate || (t.fromValues = t.values.map(function(e) {
        return e.lastPosition
      })), e.prototype._reset.call(this)
    }, n._start = function() {
      this.is(ec) || (this._phase = ec, e.prototype._start.call(this), p.skipAnimation ? this.finish() : p.frameLoop.start(this))
    }, n._stop = function(e) {
      if (this.resume(), this.is(ec)) {
        this._phase = el, this._onChange(this.get(), true);
        var t = this.animation;
        a.each(t.values, function(e) {
          e.done = true
        });
        var n = t.onRest;
        n.length && (t.onRest = [t.toValues ? a.noop : n[0]], t.changed || (n[0] = a.noop), a.each(n, function(t) {
          return t(e)
        }))
      }
    }, u(t, [{
      key: "idle",
      get: function() {
        return !this.is(ec) && !this._state.asyncTo
      }
    }, {
      key: "goal",
      get: function() {
        return a.getFluidValue(this.animation.to)
      }
    }, {
      key: "velocity",
      get: function() {
        var e = f.getAnimated(this);
        return e instanceof f.AnimatedValue ? e.lastVelocity || 0 : e.getPayload().map(function(e) {
          return e.lastVelocity || 0
        })
      }
    }]), t
  }(eo);

function ep(e, t) {
  if (e.is(ed)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object')
}

function e_(e, t) {
  return a.is.fun(e) ? e : t && e ? e[t] : true
}
var eh = function(e, t) {
  var n = t.animation.to;
  return e ? function(r) {
    if (r) e(Q(t));
    else {
      var i = W(n),
        o = W(t.get());
      e(Z(t, a.isEqual(o, i)))
    }
  } : a.noop
};

function em(e, t, n) {
  true === t && (t = e.loop), true === n && (n = e.to);
  var r = x(t);
  if (r) {
    var i = true !== r && Y(r),
      s = (i || e).reverse,
      l = !i || i.reset;
    return eg(o(o({}, e), {}, {
      loop: t,
      default: false,
      to: !s || a.is.arr(n) || a.is.fun(n) ? n : true,
      from: l ? e.from : true,
      reset: l
    }, i))
  }
}

function eg(e) {
  var t = e = Y(e),
    n = t.to,
    r = t.from,
    i = new Set;
  return r ? ey(r, i) : delete e.from, a.is.obj(n) ? ey(n, i) : n || delete e.to, e.keys = i.size ? Array.from(i) : null, e
}

function eE(e) {
  var t = eg(e);
  return a.is.und(t.default) && (t.default = G(t, [true === t.immediate && "immediate"])), t
}

function ey(e, t) {
  a.each(e, function(e, n) {
    return null != e && t.add(n)
  })
}
var eb = ["onStart", "onChange", "onRest"],
  eO = 1,
  ev = function() {
    function e(e, t) {
      this.id = eO++, this.springs = {}, this.queue = [], this._flush = true, this._initialProps = true, this._phase = es, this._lastAsyncId = 0, this._active = new Set, this._state = {
        pauseQueue: new Set,
        resumeQueue: new Set
      }, this._events = {
        onStart: new Set,
        onChange: new Set,
        onRest: new Map
      }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start(e)
    }
    var t = e.prototype;
    return t.is = function(e) {
      return this._phase == e
    }, t.get = function() {
      var e = {};
      return this.each(function(t, n) {
        return e[n] = t.get()
      }), e
    }, t.update = function(e) {
      return e && this.queue.push(eg(e)), this
    }, t.start = function(e) {
      var t = e ? a.toArray(e).map(eg) : this.queue;
      return (e || (this.queue = []), this._flush) ? this._flush(this, t) : (ew(this, t), eA(this, t))
    }, t.stop = function(e) {
      if (a.is.und(e)) this.each(function(e) {
        return e.stop()
      }), en(this._state, this._lastAsyncId);
      else {
        var t = this.springs;
        a.each(a.toArray(e), function(e) {
          return t[e].stop()
        })
      }
      return this
    }, t.pause = function(e) {
      if (a.is.und(e)) this.each(function(e) {
        return e.pause()
      });
      else {
        var t = this.springs;
        a.each(a.toArray(e), function(e) {
          return t[e].pause()
        })
      }
      return this
    }, t.resume = function(e) {
      if (a.is.und(e)) this.each(function(e) {
        return e.resume()
      });
      else {
        var t = this.springs;
        a.each(a.toArray(e), function(e) {
          return t[e].resume()
        })
      }
      return this
    }, t.reset = function() {
      return this.each(function(e) {
        return e.reset()
      }), this
    }, t.each = function(e) {
      a.each(this.springs, e)
    }, t.dispose = function() {
      this._state.asyncTo = true, this.each(function(e) {
        return e.dispose()
      }), this.springs = {}
    }, t._onFrame = function() {
      var e = this,
        t = this._events,
        n = t.onStart,
        r = t.onChange,
        i = t.onRest,
        o = this._active.size > 0;
      o && this._phase != ec && (this._phase = ec, a.flush(n, function(t) {
        return t(e)
      }));
      var s = (r.size || !o && i.size) && this.get();
      a.flush(r, function(e) {
        return e(s)
      }), o || (this._phase = el, a.flush(i, function(e) {
        var t = e[0],
          n = e[1];
        n.value = s, t(n)
      }))
    }, t.onParentChange = function(e) {
      "change" == e.type && (this._active[e.idle ? "delete" : "add"](e.parent), p.frameLoop.onFrame(this._onFrame))
    }, u(e, [{
      key: "idle",
      get: function() {
        return !this._state.asyncTo && Object.values(this.springs).every(function(e) {
          return e.idle
        })
      }
    }]), e
  }();

function eA(e, t) {
  return Promise.all(t.map(function(t) {
    return eI(e, t)
  })).then(function(t) {
    return z(e, t)
  })
}

function eI(e, t, n) {
  var r = t.to,
    i = t.loop,
    o = t.onRest;
  i && (t.loop = false);
  var s = a.is.arr(r) || a.is.fun(r) ? r : true;
  s ? (t.to = true, t.onRest = true) : a.each(eb, function(n) {
    var r = t[n];
    if (a.is.fun(r)) {
      var i = e._events[n];
      i instanceof Set ? t[n] = function() {
        return i.add(r)
      } : t[n] = function(e) {
        var t = e.finished,
          n = e.cancelled,
          a = i.get(r);
        a ? (t || (a.finished = false), n && (a.cancelled = true)) : i.set(r, {
          value: null,
          finished: t,
          cancelled: n
        })
      }
    }
  });
  var l = (t.keys || Object.keys(e.springs)).map(function(n) {
      return e.springs[n].start(t)
    }),
    c = e._state;
  return s ? l.push(K(++e._lastAsyncId, {
    props: t,
    state: c,
    actions: {
      pause: a.noop,
      resume: a.noop,
      start: function(t, n) {
        t.onRest = o, t.cancel ? k(t, "cancel") && en(c, t.callId) : n(ee(s, t, c, e))
      }
    }
  })) : t.keys || true !== t.cancel || en(c, e._lastAsyncId), Promise.all(l).then(function(a) {
    var o = z(e, a);
    if (i && o.finished && !(n && o.noop)) {
      var s = em(t, i, r);
      if (s) return ew(e, [s]), eI(e, s, true)
    }
    return o
  })
}

function eS(e, t) {
  var n = o({}, e.springs);
  return t && a.each(a.toArray(t), function(e) {
    a.is.und(e.keys) && (e = eg(e)), a.is.obj(e.to) || (e = o(o({}, e), {}, {
      to: true
    })), eN(n, e, function(e) {
      return eC(e)
    })
  }), n
}

function eT(e, t) {
  a.each(t, function(t, n) {
    e.springs[n] || (e.springs[n] = t, t.addChild(e))
  })
}

function eC(e, t) {
  var n = new ef;
  return n.key = e, t && n.addChild(t), n
}

function eN(e, t, n) {
  t.keys && a.each(t.keys, function(r) {
    (e[r] || (e[r] = n(r)))._prepareNode(t)
  })
}

function ew(e, t) {
  a.each(t, function(t) {
    eN(e.springs, t, function(t) {
      return eC(t, e)
    })
  })
}
var eR = Chunk64700.createContext({}),
  eP = function(e) {
    var t = e.children,
      n = g(e, ["children"]),
      r = s.useContext(eR);
    n = L(function() {
      return o(o({}, r), n)
    }, [r, n.pause, n.cancel, n.immediate, n.config]);
    var i = eR.Provider;
    return s.createElement(i, {
      value: n
    }, t)
  };
eP.Provider = eR.Provider, eP.Consumer = eR.Consumer;
var eD = function() {
    return s.useContext(eR)
  },
  eL = {
    create: function(e) {
      return {
        get controllers() {
          return e()
        },
        update: function(t) {
          return a.each(e(), function(e, n) {
            e.update(j(t, n, e))
          }), this
        },
        start: function(t) {
          return c(l.mark(function n() {
            var r;
            return l.wrap(function(n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  return n.next = 2, Promise.all(e().map(function(e, n) {
                    var r = j(t, n, e);
                    return e.start(r)
                  }));
                case 2:
                  return r = n.sent, n.abrupt("return", {
                    value: r.map(function(e) {
                      return e.value
                    }),
                    finished: r.every(function(e) {
                      return e.finished
                    })
                  });
                case 4:
                case "end":
                  return n.stop()
              }
            }, n)
          }))()
        },
        stop: function(t) {
          return a.each(e(), function(e) {
            return e.stop(t)
          })
        },
        pause: function(t) {
          return a.each(e(), function(e) {
            return e.pause(t)
          })
        },
        resume: function(t) {
          return a.each(e(), function(e) {
            return e.resume(t)
          })
        }
      }
    }
  };

function ex(e, t, n) {
  var r = a.is.fun(t) && t;
  r && !n && (n = []);
  var l = s.useRef(0),
    c = a.useForceUpdate(),
    u = s.useState(function() {
      return {
        ctrls: [],
        queue: [],
        flush: function(e, t) {
          var n = eS(e, t);
          return !(l.current > 0) || u.queue.length || Object.keys(n).some(function(t) {
            return !e.springs[t]
          }) ? new Promise(function(r) {
            eT(e, n), u.queue.push(function() {
              r(eA(e, t))
            }), c()
          }) : eA(e, t)
        }
      }
    })[0],
    d = s.useRef(),
    f = [].concat(u.ctrls),
    p = [],
    _ = a.usePrev(e) || 0,
    h = f.slice(e, _);

  function m(e, n) {
    for (var i = e; i < n; i++) {
      var a = f[i] || (f[i] = new ev(null, u.flush)),
        o = r ? r(i, a) : t[i];
      o && (o = p[i] = eE(o), 0 == i && (d.current = o.ref, o.ref = true))
    }
  }
  L(function() {
    f.length = e, m(_, e)
  }, [e]), L(function() {
    m(0, Math.min(_, e))
  }, n);
  var g = s.useMemo(function() {
      return eL.create(function() {
        return u.ctrls
      })
    }, []),
    E = f.map(function(e, t) {
      return eS(e, p[t])
    }),
    y = eD();
  i.useLayoutEffect(function() {
    l.current++, u.ctrls = f, d.current && (d.current.current = g);
    var e = u.queue;
    e.length && (u.queue = [], a.each(e, function(e) {
      return e()
    })), a.each(h, function(e) {
      return e.dispose()
    }), a.each(f, function(e, t) {
      eT(e, E[t]), e.start({
        default: y
      });
      var n = p[t];
      n && (d.current ? e.queue.push(n) : e.start(n))
    })
  }), a.useOnce(function() {
    return function() {
      a.each(u.ctrls, function(e) {
        return e.dispose()
      })
    }
  });
  var b = E.map(function(e) {
    return o({}, e)
  });
  return r || 3 == arguments.length ? [b, g.start, g.stop] : b
}

function eM(e, t) {
  var n = a.is.fun(e),
    r = ex(1, n ? e : [e], n ? t || [] : t),
    i = r[0][0],
    o = r[1],
    s = r[2];
  return n || 2 == arguments.length ? [i, o, s] : i
}

function ej(e, t, n) {
  var r = a.is.fun(t) && t;
  r && !n && (n = []);
  var o = [],
    s = ex(e, function(e, n) {
      return o[e] = n, j(t, e, n)
    }, n || [{}]);
  if (i.useLayoutEffect(function() {
      for (var e = a.is.obj(t) && t.reverse, n = 0; n < o.length; n++) {
        var r = o[n + (e ? 1 : false)];
        r && o[n].update({
          to: r.springs
        }).start()
      }
    }, n), r || 3 == arguments.length) {
    var l = s[1];
    return s[1] = _.useCallbackOne(function(e) {
      var t = a.is.obj(e) && e.reverse;
      return l(function(n, r) {
        var i = j(e, n, r),
          a = o[n + (t ? 1 : false)];
        return a && (i.to = a.springs), i
      })
    }, n), s
  }
  return s[0]
}
var ek = "mount",
  eU = "enter",
  eG = "update",
  eF = "leave";

function eV(e, t, n) {
  var r = t.ref,
    l = t.reset,
    c = t.sort,
    u = t.trail,
    d = true === u ? 0 : u,
    f = t.expires,
    p = true === f || f,
    _ = a.toArray(e),
    h = [],
    m = eB(_, t),
    g = s.useRef(null),
    E = l ? null : g.current;
  i.useLayoutEffect(function() {
    g.current = h
  }), a.useOnce(function() {
    return function() {
      return a.each(g.current, function(e) {
        e.expired && clearTimeout(e.expirationId), e.ctrl.dispose()
      })
    }
  });
  var y = [];
  if (E && a.each(E, function(e, t) {
      e.expired ? clearTimeout(e.expirationId) : ~(t = y[t] = m.indexOf(e.key)) && (h[t] = e)
    }), a.each(_, function(e, t) {
      h[t] || (h[t] = {
        key: m[t],
        item: e,
        phase: ek,
        ctrl: new ev
      })
    }), y.length) {
    var b = false;
    a.each(y, function(e, n) {
      var r = E[n];
      ~e ? (b = h.indexOf(r), h[b] = o(o({}, r), {}, {
        item: _[e]
      })) : t.leave && h.splice(++b, 0, r)
    })
  }
  a.is.fun(c) && h.sort(function(e, t) {
    return c(e.item, t.item)
  });
  var O = -d,
    v = a.useForceUpdate(),
    A = G(t),
    I = new Map;
  a.each(h, function(e, n) {
    var r, i, s = e.key,
      l = e.phase;
    if (l == ek) r = t.enter, i = eU;
    else {
      var c = 0 > m.indexOf(s);
      if (l != eF)
        if (c) r = t.leave, i = eF;
        else {
          if (!(r = t.update)) return;
          i = eG
        }
      else {
        if (c) return;
        r = t.enter, i = eU
      }
    }
    if (r = x(r, e.item, n), !(r = a.is.obj(r) ? Y(r) : {
        to: r
      }).config) {
      var u = t.config || A.config;
      r.config = x(u, e.item, n)
    }
    var f = o(o({}, A), {}, {
      delay: O += d,
      reset: false
    }, r);
    i == eU && a.is.und(f.from) && (f.from = x(a.is.und(t.initial) || E ? t.from : t.initial, e.item, n));
    var _ = f.onRest;
    f.onRest = f.onNoopRest = function(e) {
      var t = g.current,
        n = t.find(function(e) {
          return e.key === s
        });
      if (n) {
        if (a.is.fun(_) && true !== e.noop && _(e, n), e.cancelled && n.phase != eG) {
          n.phase = l;
          return
        }
        if (n.ctrl.idle) {
          var r = t.every(function(e) {
            return e.ctrl.idle
          });
          if (n.phase == eF) {
            var i = x(p, n.item);
            if (false !== i) {
              var o = true === i ? 0 : i;
              if (n.expired = true, !r && o > 0) {
                o <= 0x7fffffff && (n.expirationId = setTimeout(v, o));
                return
              }
            }
          }
          r && t.some(function(e) {
            return e.expired
          }) && v()
        }
      }
    };
    var h = eS(e.ctrl, f);
    I.set(e, {
      phase: i,
      springs: h,
      payload: f
    })
  });
  var S = eD();
  i.useLayoutEffect(function() {
    a.each(h, function(e) {
      e.ctrl.start({
        default: S
      })
    })
  }, [S]);
  var T = s.useMemo(function() {
    return eL.create(function() {
      return g.current.map(function(e) {
        return e.ctrl
      })
    })
  }, []);
  s.useImperativeHandle(r, function() {
    return T
  }), i.useLayoutEffect(function() {
    a.each(I, function(e, t) {
      var n = e.phase,
        i = e.springs,
        a = e.payload;
      eT(t.ctrl, i), S.cancel || (t.phase = n, n == eU && t.ctrl.start({
        default: S
      }), t.ctrl[r ? "update" : "start"](a))
    })
  }, l ? true : n);
  var C = function(e) {
    return s.createElement(s.Fragment, null, h.map(function(t, n) {
      var r = e(o({}, (I.get(t) || t.ctrl).springs), t.item, t, n);
      return r && r.type ? s.createElement(r.type, o({}, r.props, {
        key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
        ref: r.ref
      })) : r
    }))
  };
  return 3 == arguments.length ? [C, T.start, T.stop] : C
}

function eB(e, t) {
  var n = t.key,
    r = t.keys,
    i = true === r ? n : r;
  return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i)
}

function eH(e) {
  return (0, e.children)(eM(g(e, ["children"])))
}

function eY(e) {
  var t = e.items,
    n = e.children,
    r = g(e, ["items", "children"]),
    i = ej(t.length, r);
  return t.map(function(e, t) {
    var r = n(e, t);
    return a.is.fun(r) ? r(i[t]) : r
  })
}

function eW(e) {
  var t = e.items,
    n = e.children,
    r = g(e, ["items", "children"]);
  return s.createElement(s.Fragment, null, eV(t, r)(n))
}
var eK = function(e) {
    function t(t, n) {
      (r = e.call(this) || this).source = t, r.key = true, r.idle = true, r.calc = true, r.calc = a.createInterpolator.apply(true, n);
      var r, i = r._get(),
        o = a.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
      return f.setAnimated(E(r), o.create(i)), r
    }
    d(t, e);
    var n = t.prototype;
    return n.advance = function(e) {
      var t = this._get(),
        n = this.get();
      a.isEqual(t, n) || (f.getAnimated(this).setValue(t), this._onChange(t, this.idle))
    }, n._get = function() {
      var e = a.is.arr(this.source) ? this.source.map(function(e) {
        return e.get()
      }) : a.toArray(this.source.get());
      return this.calc.apply(this, e)
    }, n._reset = function() {
      a.each(f.getPayload(this), function(e) {
        return e.reset()
      }), e.prototype._reset.call(this)
    }, n._start = function() {
      this.idle = false, e.prototype._start.call(this), p.skipAnimation ? (this.idle = true, this.advance()) : p.frameLoop.start(this)
    }, n._attach = function() {
      var e = this,
        t = true,
        n = 1;
      a.each(a.toArray(this.source), function(r) {
        ei(r) && (r.idle || (t = false), n = Math.max(n, r.priority + 1)), r.addChild(e)
      }), this.priority = n, t || (this._reset(), this._start())
    }, n._detach = function() {
      var e = this;
      a.each(a.toArray(this.source), function(t) {
        t.removeChild(e)
      }), this.idle = true
    }, n.onParentChange = function(t) {
      "start" == t.type ? this.advance() : "change" == t.type ? this.idle ? this.advance() : t.idle && (this.idle = a.toArray(this.source).every(function(e) {
        returnfalse !== e.idle
      }), this.idle && (this.advance(), a.each(f.getPayload(this), function(e) {
        e.done = true
      }))) : "priority" == t.type && (this.priority = a.toArray(this.source).reduce(function(e, t) {
        return Math.max(e, (t.priority || 0) + 1)
      }, 0)), e.prototype.onParentChange.call(this, t)
    }, t
  }(eo),
  ez = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return new eK(e, n)
  },
  eq = function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return m.deprecateInterpolate(), new eK(e, n)
  };
Chunk843455.Globals.assign({
  createStringInterpolator: Chunk111806.createStringInterpolator,
  to: function(e, t) {
    return new eK(e, t)
  }
});
var eZ = function() {
  return a.Globals.frameLoop.advance()
};
Object.keys(Chunk269270).forEach(function(e) {
  "default" !== e && Object.defineProperty(t, e, {
    enumerable: true,
    get: function() {
      return b[e]
    }
  })
}), Object.defineProperty(exports, "FrameLoop", {
  enumerable: true,
  get: function() {
    return a.FrameLoop
  }
}), Object.defineProperty(exports, "Globals", {
  enumerable: true,
  get: function() {
    return a.Globals
  }
}), Object.defineProperty(exports, "createInterpolator", {
  enumerable: true,
  get: function() {
    return a.createInterpolator
  }
}), exports.BailSignal = er, exports.Controller = ev, exports.FrameValue = eo, exports.Interpolation = eK, exports.Spring = eH, exports.SpringContext = eP, exports.SpringHandle = eL, exports.SpringValue = ef, exports.Trail = eY, exports.Transition = eW, exports.config = v, exports.inferTo = Y, exports.interpolate = eq, exports.to = ez, exports.update = eZ, exports.useChain = O, exports.useSpring = eM, exports.useSprings = ex, exports.useTrail = ej, exports.useTransition = eV