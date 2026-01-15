/** Chunk was on web.js **/
/** chunk id: 774505, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var Chunk698091 = require("./698091.js"),
  a = r(require("./64995.js")),
  o = r(require("./377421.js")),
  s = r(require("./866330.js")),
  Chunk239189 = require("./239189.js"),
  Chunk473749 = require("./473749.js"),
  Chunk804431 = require("./804431.js"),
  d = Symbol.for("Animated:node"),
  f = function(e) {
    return !!e && e[d] === e
  },
  p = function(e) {
    return e && e[d]
  },
  _ = function(e, t) {
    return i.defineHidden(e, d, t)
  },
  h = function(e) {
    return e && e[d] && e[d].getPayload()
  },
  m = function() {
    function e() {
      this.payload = true, _(this, this)
    }
    return e.prototype.getPayload = function() {
      return this.payload || []
    }, e
  }(),
  g = function(e) {
    function t(t) {
      var n;
      return (n = e.call(this) || this)._value = t, n.done = true, n.elapsedTime = true, n.lastPosition = true, n.lastVelocity = true, n.v0 = true, i.is.num(n._value) && (n.lastPosition = n._value), n
    }
    a(t, e), t.create = function(e, n) {
      return new t(e)
    };
    var n = t.prototype;
    return n.getPayload = function() {
      return [this]
    }, n.getValue = function() {
      return this._value
    }, n.setValue = function(e, t) {
      return i.is.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, true)
    }, n.reset = function() {
      var e = this.done;
      this.done = false, i.is.num(this._value) && (this.elapsedTime = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
    }, t
  }(m),
  E = function(e) {
    function t(t, n) {
      var r;
      return (r = e.call(this, 0) || this)._value = true, r._string = null, r._toString = true, r._toString = i.createInterpolator({
        output: [t, n]
      }), r
    }
    a(t, e), t.create = function(e, n) {
      if (true === n && (n = e), i.is.str(e) && i.is.str(n)) return new t(e, n);
      throw TypeError('Expected "from" and "to" to be strings')
    };
    var n = t.prototype;
    return n.getValue = function() {
      var e = this._string;
      return null == e ? this._string = this._toString(this._value) : e
    }, n.setValue = function(t) {
      if (i.is.num(t))
        if (!e.prototype.setValue.call(this, t)) returnfalse;
        else this._string = null;
      else this._string = t, this._value = 1;
      returntrue
    }, n.reset = function(t) {
      t && (this._toString = i.createInterpolator({
        output: [this.getValue(), t]
      })), this._value = 0, e.prototype.reset.call(this)
    }, t
  }(g),
  b = {
    current: null
  },
  y = function(e) {
    function t(t) {
      var n;
      return true === t && (t = null), (n = e.call(this) || this).source = true, n.setValue(t), n
    }
    a(t, e);
    var n = t.prototype;
    return n.getValue = function(e) {
      if (!this.source) return null;
      var t = {};
      return i.each(this.source, function(n, r) {
        if (f(n)) t[r] = n.getValue(e);
        else {
          var a = i.getFluidConfig(n);
          a ? t[r] = a.get() : e || (t[r] = n)
        }
      }), t
    }, n.setValue = function(e) {
      this.source = e, this.payload = this._makePayload(e)
    }, n.reset = function() {
      this.payload && i.each(this.payload, function(e) {
        return e.reset()
      })
    }, n._makePayload = function(e) {
      if (e) {
        var t = new Set;
        return i.each(e, this._addToPayload, t), Array.from(t)
      }
    }, n._addToPayload = function(e) {
      var t = this;
      i.getFluidConfig(e) && b.current && b.current.dependencies.add(e);
      var n = h(e);
      n && i.each(n, function(e) {
        return t.add(e)
      })
    }, t
  }(m),
  O = function(e) {
    function t(t, n) {
      var r;
      return (r = e.call(this, null) || this).source = true, e.prototype.setValue.call(o(r), r._makeAnimated(t, n)), r
    }
    a(t, e), t.create = function(e, n) {
      return new t(e, n)
    };
    var n = t.prototype;
    return n.getValue = function() {
      return this.source.map(function(e) {
        return e.getValue()
      })
    }, n.setValue = function(e) {
      var t = this.getPayload();
      e && e.length == t.length ? i.each(t, function(t, n) {
        return t.setValue(e[n])
      }) : (this.source = this._makeAnimated(e), this.payload = this._makePayload(this.source))
    }, n._makeAnimated = function(e, t) {
      return true === t && (t = e), e ? e.map(function(e, n) {
        return (i.isAnimatedString(e) ? E : g).create(e, t[n])
      }) : []
    }, t
  }(y),
  v = function(e) {
    function t(t) {
      var n;
      return (n = e.call(this, null) || this).update = t, n.dirty = false, n
    }
    a(t, e);
    var n = t.prototype;
    return n.setValue = function(t, n) {
      if (t) {
        if (n && (b.current = n, t.style)) {
          var r = n.host.createAnimatedStyle;
          t = s(s({}, t), {}, {
            style: r(t.style)
          })
        }
        e.prototype.setValue.call(this, t), b.current = null
      }
    }, n.onParentChange = function(e) {
      var t = this,
        n = e.type;
      this.dirty || "change" !== n || (this.dirty = true, l.frameLoop.onFrame(function() {
        t.dirty = false, t.update()
      }))
    }, t
  }(y),
  S = function(e, t) {
    return c.forwardRef(function(n, r) {
      var a = c.useRef(null),
        o = !i.is.fun(e) || e.prototype && e.prototype.isReactComponent,
        l = i.useForceUpdate(),
        d = new v(function() {
          var e = a.current;
          if (!o || e) {
            var n = !!e && t.applyAnimatedValues(e, d.getValue(true));
            false === n && l()
          }
        }),
        f = new Set;
      return d.setValue(n, {
        dependencies: f,
        host: t
      }), u.useLayoutEffect(function() {
        return i.each(f, function(e) {
            return e.addChild(d)
          }),
          function() {
            return i.each(f, function(e) {
              return e.removeChild(d)
            })
          }
      }), c.createElement(e, s({}, t.getComponentProps(d.getValue()), {
        ref: o && function(e) {
          a.current = I(r, e)
        }
      }))
    })
  };

function I(e, t) {
  return e && (i.is.fun(e) ? e(t) : e.current = t), t
}
var T = Symbol.for("AnimatedComponent"),
  C = function(e, t) {
    var n = true === t ? {} : t,
      r = n.applyAnimatedValues,
      a = true === r ? function() {
        returnfalse
      } : r,
      o = n.createAnimatedStyle,
      s = true === o ? function(e) {
        return new y(e)
      } : o,
      l = n.getComponentProps,
      c = {
        applyAnimatedValues: a,
        createAnimatedStyle: s,
        getComponentProps: true === l ? function(e) {
          return e
        } : l
      },
      u = function(e) {
        var t = A(e) || "Anonymous";
        return (e = i.is.str(e) ? S(e, c) : e[T] || (e[T] = S(e, c))).displayName = "Animated(" + t + ")", e
      };
    return i.each(e, function(e, t) {
      i.is.str(t) || (t = A(e)), u[t] = u(e)
    }), {
      animated: u
    }
  },
  A = function(e) {
    return i.is.str(e) ? e : e && i.is.str(e.displayName) ? e.displayName : i.is.fun(e) && e.name || null
  };
exports.Animated = m, exports.AnimatedArray = O, exports.AnimatedObject = y, exports.AnimatedProps = v, exports.AnimatedString = E, exports.AnimatedValue = g, exports.createHost = C, exports.getAnimated = p, exports.getPayload = h, exports.isAnimated = f, exports.setAnimated = _