/** Chunk was on web.js **/
/** chunk id: 921254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ji: () => x,
  O_: () => w,
  qA: () => c,
  uR: () => L
});
var Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js");

function o(e, t) {
  var n = e.x,
    r = e.y;
  return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
}

function a(e, t, n, r) {
  var i = t > 0 ? false : 1,
    o = Math.abs(t);
  return .5 * e * r * n * o * o * i
}
var s = function() {
    function e(e) {
      this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.airResistanceArea = e.airResistanceArea, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
    }
    return module.prototype.getNewForces = function(e, t) {
      var n = e.wind * t,
        r = -e.gravity * t;
      return {
        x: n + a(this.dragCoefficient.x, this.velocity.x, this.airResistanceArea.x, e.density),
        y: r + a(this.dragCoefficient.y, this.velocity.y, this.airResistanceArea.y, e.density)
      }
    }, module.prototype.update = function(e) {
      var t = Date.now(),
        n = (t - this._lastUpdatedAt) / 100;
      this.rotation.update(n), this.dragCoefficient.update(n);
      var r = this.getNewForces(e, n),
        i = r.x,
        o = r.y;
      this.velocity.update(n), this.velocity.x += i, this.velocity.y += o, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this.opacity.value = Math.max(this.opacity.value, 0), this._lastUpdatedAt = t
    }, module.prototype.previewPositionUpdate = function(e, t) {
      var n = t / 100,
        r = this.velocity.previewUpdate(n),
        i = this.getNewForces(e, n),
        o = i.x,
        a = i.y;
      r.x += o, r.y += a;
      var s = this.position.previewUpdate(n);
      return s.x += r.x * n, s.y += r.y * n, s
    }, module.prototype.draw = function(e, t) {
      t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore()
    }, module.prototype.shouldDestroy = function(e, t) {
      return this.opacity.value < 0 || t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height || t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width || t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
    }, Object.defineProperty(module.prototype, "width", {
      get: function() {
        return this.size.x
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(module.prototype, "height", {
      get: function() {
        return this.size.y
      },
      enumerable: false,
      configurable: true
    }), module.prototype.addForce = function(e) {
      this.velocity.x += e.x, this.velocity.y += e.y
    }, module
  }(),
  l = {
    velocity: {
      type: "static",
      value: 0
    },
    rotation: {
      type: "static",
      value: 0
    },
    dragCoefficient: {
      type: "static",
      value: 1.66
    },
    airResistanceArea: {
      type: "static",
      value: .001
    },
    opacity: {
      type: "static",
      value: 1
    }
  },
  c = function(e) {
    var t = true === e ? {} : e,
      n = t.gravity,
      r = t.wind,
      i = t.density;
    this.gravity = false, this.wind = 0, this.density = 1.2041, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind, this.density = null != i ? i : this.density
  },
  u = function(e, t) {
    return (u = Object.setPrototypeOf || ({
      __proto__: []
    }) instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    })(e, t)
  };

function d(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

  function n() {
    this.constructor = e
  }
  u(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var f = function() {
  return (f = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++)
      for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e
  }).apply(this, arguments)
};

function p(e, t, n, r) {
  return new(n || (n = Promise))(function(i, o) {
    function a(e) {
      try {
        l(r.next(e))
      } catch (e) {
        o(e)
      }
    }

    function s(e) {
      try {
        l(r.throw(e))
      } catch (e) {
        o(e)
      }
    }

    function l(e) {
      var t;
      e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
        e(t)
      })).then(a, s)
    }
    l((r = r.apply(e, t || [])).next())
  })
}

function _(e, t) {
  var n, r, i, o, a = {
    label: 0,
    sent: function() {
      if (1 & i[0]) throw i[1];
      return i[1]
    },
    trys: [],
    ops: []
  };
  return o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function s(s) {
    return function(l) {
      return function(s) {
        if (n) throw TypeError("Generator is already executing.");
        for (; o && (o = 0, s[0] && (a = 0)), a;) try {
          if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
          switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
            case 0:
            case 1:
              i = s;
              break;
            case 4:
              return a.label++, {
                value: s[1],
                done: false
              };
            case 5:
              a.label++, r = s[1], s = [0];
              continue;
            case 7:
              s = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                a = 0;
                continue
              }
              if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                a.label = s[1];
                break
              }
              if (6 === s[0] && a.label < i[1]) {
                a.label = i[1], i = s;
                break
              }
              if (i && a.label < i[2]) {
                a.label = i[2], a.ops.push(s);
                break
              }
              i[2] && a.ops.pop(), a.trys.pop();
              continue
          }
          s = t.call(e, a)
        } catch (e) {
          s = [6, e], r = 0
        } finally {
          n = i = 0
        }
        if (5 & s[0]) throw s[1];
        return {
          value: s[0] ? s[1] : true,
          done: true
        }
      }([s, l])
    }
  }
}
var m = function(e) {
    this.value = e
  },
  h = function() {
    function e(e, t, n) {
      this._x = e, this._y = n ? e : t
    }
    return module.prototype.update = function(e) {
      this._x.update(e), this._y.update(e)
    }, module.prototype.previewUpdate = function(e) {
      return {
        x: this._x.previewUpdate(e),
        y: this._y.previewUpdate(e)
      }
    }, Object.defineProperty(module.prototype, "x", {
      get: function() {
        return this._x.value
      },
      set: function(e) {
        this._x.value = e
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(module.prototype, "y", {
      get: function() {
        return this._y.value
      },
      set: function(e) {
        this._y.value = e
      },
      enumerable: false,
      configurable: true
    }), module
  }(),
  g = function(e) {
    function t(t, n, r, i) {
      var o = e.call(this, t, n, i) || this;
      return o._z = i ? t : r, o
    }
    return d(t, e), t.prototype.update = function(t) {
      e.prototype.update.call(this, t), this._z.update(t)
    }, t.prototype.previewUpdate = function(t) {
      var n = e.prototype.previewUpdate.call(this, t);
      return f(f({}, n), {
        z: this._z.previewUpdate(t)
      })
    }, Object.defineProperty(t.prototype, "z", {
      get: function() {
        return this._z.value
      },
      set: function(e) {
        this._z.value = e
      },
      enumerable: false,
      configurable: true
    }), t
  }(h),
  E = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this
    }
    return d(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
      return this.value
    }, t
  }(m),
  b = function(e) {
    function t(t, n) {
      var r = e.call(this, t) || this;
      return r.addValue = n, r
    }
    return d(t, e), t.prototype.update = function(e) {
      this.value = this.previewUpdate(e)
    }, t.prototype.previewUpdate = function(e) {
      return this.value + this.addValue * e
    }, t
  }(m),
  y = function(e) {
    function t(t, n, r, i, o, a) {
      var s = e.call(this, t) || this;
      s.min = n, s.max = r, s.duration = i;
      var l = s.value / (s.max - s.min) * s.duration,
        c = isNaN(l) ? 0 : l;
      return s.timePassed = c < 0 ? s.duration - c : c, s.directionMultiplier = o, s.easingFunction = a, s
    }
    return d(t, e), t.prototype.update = function(e) {
      var t = this.doUpdate(e),
        n = t[0],
        r = t[1],
        i = t[2];
      this.value = n, this.directionMultiplier = i, this.timePassed = r
    }, t.prototype.previewUpdate = function(e) {
      return this.doUpdate(e)[0]
    }, t.prototype.doUpdate = function(e) {
      var t = this.max - this.min,
        n = this.timePassed + e * this.directionMultiplier,
        r = Math.min(Math.max(n, 0), this.duration),
        i = n < 0 || n > this.duration ? false * this.directionMultiplier : this.directionMultiplier,
        o = this.easingFunction(r, this.min, t, this.duration);
      return [isNaN(o) ? 0 : o, r, i]
    }, t
  }(m);

function O(e, t) {
  return e === t ? e : Math.random() * (t - e + 1) + e
}

function v(e) {
  var t = Math.floor(O(0, e.length - 1));
  return [e[t], t]
}

function S(e, t) {
  return v([e, t])[0]
}

function I(e) {
  return "number" == typeof e ? {
    x: e,
    y: e
  } : e
}

function T(e) {
  return "number" == typeof e ? {
    x: e,
    y: e,
    z: e
  } : e
}

function C(e) {
  return function(e) {
    switch (e.type) {
      case "static":
        return new E(e.value);
      case "static-random":
        return new E(O(e.minValue, e.maxValue));
      case "linear":
        return new b(e.value, e.addValue);
      case "linear-random":
        return new b(O(e.minValue, e.maxValue), O(e.minAddValue, e.maxAddValue));
      case "oscillating":
        return new y(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
      case "oscillating-random":
        return new y(O(e.minValue, e.maxValue), O(e.minStart, e.maxStart), O(e.minFinal, e.maxFinal), O(e.minDuration, e.maxDuration), S(e.minDirection, e.maxDirection), v(e.easingFunctions)[0])
    }
  }(f(f({}, e), {
    valueType: "number"
  }))
}

function A(e) {
  return function(e) {
    switch (e.type) {
      case "static":
        var t = I(e.value);
        return new h(new E(t.x), new E(t.y), e.uniformVectorValues);
      case "static-random":
        var n = I(e.minValue),
          r = I(e.maxValue);
        return new h(new E(O(n.x, r.x)), new E(O(n.y, r.y)), e.uniformVectorValues);
      case "linear":
        t = I(e.value);
        var i = I(e.addValue);
        return new h(new b(t.x, i.x), new b(t.y, i.y), e.uniformVectorValues);
      case "linear-random":
        n = I(e.minValue), r = I(e.maxValue);
        var o = I(e.minAddValue),
          a = I(e.maxAddValue);
        return new h(new b(O(n.x, r.x), O(o.x, a.x)), new b(O(n.y, r.y), O(o.x, a.x)), e.uniformVectorValues);
      case "oscillating":
        t = I(e.value);
        var s = I(e.start),
          l = I(e.final),
          c = I(e.duration),
          u = I(e.direction);
        return new h(new y(t.x, s.x, l.x, c.x, u.x, e.easingFunction), new y(t.y, s.y, l.y, c.x, u.y, e.easingFunction), e.uniformVectorValues);
      case "oscillating-random":
        n = I(e.minValue), r = I(e.maxValue);
        var d = I(e.minStart),
          f = I(e.maxStart),
          p = I(e.minFinal),
          _ = I(e.maxFinal),
          m = I(e.minDuration),
          g = I(e.maxDuration),
          T = I(e.minDirection),
          C = I(e.maxDirection);
        return new h(new y(O(n.x, r.x), O(d.x, f.x), O(p.x, _.x), O(m.x, g.x), S(T.x, C.x), v(e.easingFunctions)[0]), new y(O(n.y, r.y), O(d.y, f.y), O(p.y, _.y), O(m.y, g.y), S(T.y, C.y), v(e.easingFunctions)[0]), e.uniformVectorValues)
    }
  }(f(f({}, e), {
    valueType: "Vector2"
  }))
}

function N(e) {
  return function(e) {
    switch (e.type) {
      case "static":
        var t = T(e.value);
        return new g(new E(t.x), new E(t.y), new E(t.z), e.uniformVectorValues);
      case "static-random":
        var n = T(e.minValue),
          r = T(e.maxValue);
        return new g(new E(O(n.x, r.x)), new E(O(n.y, r.y)), new E(O(n.z, r.z)), e.uniformVectorValues);
      case "linear":
        t = T(e.value);
        var i = T(e.addValue);
        return new g(new b(t.x, i.x), new b(t.y, i.y), new b(t.z, i.z), e.uniformVectorValues);
      case "linear-random":
        n = T(e.minValue), r = T(e.maxValue);
        var o = T(e.minAddValue),
          a = T(e.maxAddValue);
        return new g(new b(O(n.x, r.x), O(o.x, a.x)), new b(O(n.y, r.y), O(o.y, a.y)), new b(O(n.z, r.z), O(o.z, a.z)), e.uniformVectorValues);
      case "oscillating":
        t = T(e.value);
        var s = T(e.start),
          l = T(e.final),
          c = T(e.duration),
          u = T(e.direction);
        return new g(new y(t.x, s.x, l.x, c.x, u.x, e.easingFunction), new y(t.y, s.y, l.y, c.z, u.y, e.easingFunction), new y(t.z, s.z, l.z, c.z, u.z, e.easingFunction), e.uniformVectorValues);
      case "oscillating-random":
        n = T(e.minValue), r = T(e.maxValue);
        var d = T(e.minStart),
          f = T(e.maxStart),
          p = T(e.minFinal),
          _ = T(e.maxFinal),
          m = T(e.minDuration),
          h = T(e.maxDuration),
          I = T(e.minDirection),
          C = T(e.maxDirection);
        return new g(new y(O(n.x, r.x), O(d.x, f.x), O(p.x, _.x), O(m.x, h.x), S(I.x, C.x), v(e.easingFunctions)[0]), new y(O(n.y, r.y), O(d.y, f.y), O(p.y, _.y), O(m.y, h.y), S(I.y, C.y), v(e.easingFunctions)[0]), new y(O(n.z, r.z), O(d.z, f.z), O(p.z, _.z), O(m.z, h.z), S(I.z, C.z), v(e.easingFunctions)[0]), e.uniformVectorValues)
    }
  }(f(f({}, e), {
    valueType: "Vector3"
  }))
}

function P(e, t, n, r, i) {
  var o = function(e, t) {
      return f(f({
        id: t
      }, l), e)
    }(t, e),
    a = function(e, t) {
      if (null != e) {
        var n = t.sprites.findIndex(function(t) {
          var n, r;
          return n = t, "string" == typeof(r = e) ? n.src === r && n.colorize : n.src === r.src && n.colorize === r.colorize
        });
        if (false !== n) return [e, n]
      }
      return v(t.sprites)
    }(r, n),
    c = a[0],
    u = a[1],
    d = function(e, t, n) {
      if (! function(e) {
          return "string" == typeof e || e.colorize
        }(e)) return 0;
      var r = null != t ? n.colors.findIndex(function(e) {
        return e === t
      }) : false;
      return false !== r ? r : Math.floor(O(0, n.colors.length - 1))
    }(null != r ? r : c, i, n);
  return new s({
    id: e,
    position: A(o.position),
    velocity: A(o.velocity),
    rotation: N(o.rotation),
    dragCoefficient: A(o.dragCoefficient),
    size: A(o.size),
    opacity: C(o.opacity),
    airResistanceArea: A(o.airResistanceArea),
    spriteX: d * n.spriteWidth + 2 * d,
    spriteY: u * n.spriteHeight + 2 * u,
    spriteWidth: n.spriteWidth,
    spriteHeight: n.spriteHeight
  })
}

function R() {
  var e = Chunk473749.useRef(false),
    t = Chunk473749.useRef({}),
    n = Chunk473749.useCallback(function(e) {
      for (var n in t.current) t.current[n](e)
    }, []);
  return Chunk473749.useEffect(function() {
    return function() {
      return require(false)
    }
  }, [require]), Chunk473749.useMemo(function() {
    return {
      isReady: module.current,
      addReadyListener: function(n) {
        var r = (0, i.Z)();
        return t.current[r] = n, e.current && n(e.current), r
      },
      removeReadyListener: function(e) {
        delete t.current[e]
      },
      setIsReady: function(t) {
        e.current = t, n(t)
      }
    }
  }, [require])
}
var w = Chunk473749.forwardRef(function(e, t) {
    var a = e.className,
      s = e.environment,
      l = e.onClick,
      c = e.onMouseDown,
      u = e.onMouseMove,
      d = e.onMouseUp,
      p = e.onBeforeRender,
      _ = e.onAfterRender,
      m = e.requestAnimationFrame,
      h = true === m ? window.requestAnimationFrame : m,
      g = e.cancelAnimationFrame,
      E = true === g ? window.cancelAnimationFrame : g,
      b = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
      }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender", "requestAnimationFrame", "cancelAnimationFrame"]),
      y = r.useRef(null),
      O = R(),
      v = O.isReady,
      S = O.addReadyListener,
      I = O.removeReadyListener,
      T = O.setIsReady,
      C = r.useRef(new Map),
      A = r.useRef(null),
      N = r.useRef(0),
      w = r.useRef(0),
      D = r.useCallback(function() {
        var e = y.current;
        if (null != e) {
          var t = e.getContext("2d");
          if (null != t) {
            t.clearRect(0, 0, e.width, e.height), null == p || p(t), C.current.forEach(function(n, r) {
              var i = n.confetti,
                o = n.spriteCanvas;
              i.update(s), i.draw(o, t), i.shouldDestroy(e, s) && C.current.delete(r)
            }), null == _ || _(t), C.current.size > 0 ? A.current = h(D) : (t.clearRect(0, 0, e.width, e.height), A.current = null);
            var n = Date.now();
            0 !== N.current && (w.current = 1e3 / (n - N.current)), N.current = n
          }
        }
      }, [s, _, p, h]);
    r.useEffect(function() {
      null != A.current && (E(A.current), A.current = h(D))
    }, [E, D, h]);
    var x = r.useCallback(function(e, t) {
        C.current.set(e.id, {
          confetti: e,
          spriteCanvas: t
        }), null == A.current && D()
      }, [D]),
      L = r.useCallback(function(e, t, n, r, o) {
        var a, s = P(null != (a = e.id) ? a : (0, i.Z)(), e, n, r, o);
        return x(s, t), s
      }, [x]),
      j = r.useCallback(function(e) {
        C.current.delete(e)
      }, []),
      M = r.useCallback(function() {
        return C.current.clear()
      }, []),
      k = r.useCallback(function() {
        return y.current
      }, []);
    r.useImperativeHandle(t, function() {
      return {
        createConfetti: L,
        addConfetti: x,
        deleteConfetti: j,
        clearConfetti: M,
        getCanvas: k,
        addReadyListener: S,
        removeReadyListener: I,
        isReady: v
      }
    }, [L, x, j, M, k, S, I, v]);
    var U = r.useCallback(function(e, t) {
        var n, r, i = t.clickHandler,
          a = t.mouseHandler;
        if (null != i || null != a) {
          var l = null == (n = y.current) ? true : n.getBoundingClientRect();
          if (null != l) {
            var c = function(e, t) {
              if (null == t) throw Error("element should not be null");
              var n = t.getBoundingClientRect();
              return {
                x: e.clientX - n.left,
                y: e.clientY - n.top
              }
            }(e, y.current);
            if (o(c, {
                x: l.left,
                y: l.top,
                width: l.width,
                height: l.height
              })) {
              if (null != a) return a(e);
              if (null != i) {
                var u = false / w.current * 2,
                  d = function(e, t) {
                    for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                      var i = r[n];
                      if (null != i && t(i)) return i
                    }
                    return null
                  }(C.current, function(e) {
                    var t = e.confetti,
                      n = t.previewPositionUpdate(s, u);
                    return o(c, {
                      x: n.x - t.width / 2,
                      y: n.y - t.height / 2,
                      width: t.width,
                      height: t.height
                    })
                  });
                i(e, null != (r = null == d ? true : d.confetti) ? r : null)
              }
            }
          }
        }
      }, [s]),
      G = r.useCallback(function(e) {
        return U(e, {
          clickHandler: l
        })
      }, [U, l]),
      Z = r.useCallback(function(e) {
        return U(e, {
          clickHandler: c
        })
      }, [U, c]),
      F = r.useCallback(function(e) {
        return U(e, {
          mouseHandler: u
        })
      }, [U, u]),
      B = r.useCallback(function(e) {
        return U(e, {
          mouseHandler: d
        })
      }, [U, d]);
    return r.useEffect(function() {
      var e = function(e, t, n) {
        null != n && window.addEventListener(e, t)
      };
      return e("click", G, l), e("mousedown", Z, c), e("mousemove", F, u), e("mouseup", B, d),
        function() {
          window.removeEventListener("click", G), window.removeEventListener("mousedown", Z), window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", F)
        }
    }, [G, Z, F, B, l, c, u, d]), r.useEffect(function() {
      var e = y.current,
        t = new ResizeObserver(function() {
          ! function(e) {
            if (null != e) {
              var t = e.getBoundingClientRect(),
                r = t.width,
                i = t.height;
              e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
            }
          }(y.current), T(true)
        });
      return null != e && t.observe(e),
        function() {
          null != e && t.unobserve(e)
        }
    }, [T]), r.createElement("canvas", f({}, b, {
      className: a,
      ref: y
    }))
  }),
  D = {
    display: "none",
    position: "absolute",
    width: 0,
    height: 0,
    left: "-100%"
  },
  x = Chunk473749.forwardRef(function(e, t) {
    var n = e.className,
      i = e.visible,
      o = true !== i && i,
      a = e.sprites,
      s = e.colors,
      l = e.spriteWidth,
      c = e.spriteHeight,
      u = r.useRef(null),
      d = r.useRef([]),
      f = R(),
      m = f.isReady,
      h = f.addReadyListener,
      g = f.removeReadyListener,
      E = f.setIsReady;
    r.useImperativeHandle(t, function() {
      return {
        getCanvas: function() {
          return u.current
        },
        getCreateData: function() {
          return {
            sprites: d.current,
            colors: s,
            spriteWidth: l,
            spriteHeight: c
          }
        },
        addReadyListener: h,
        removeReadyListener: g,
        isReady: m
      }
    }, [h, s, m, g, c, l]);
    var b = r.useCallback(function() {
        var e = u.current,
          t = null == e ? true : e.getContext("2d", {
            willReadFrequently: true
          });
        null != t && null != e && (t.clearRect(0, 0, e.width, e.height), d.current.forEach(function(e, n) {
          var r = function(r, i) {
            var o = l * i + 2 * i,
              a = c * n + 2 * n;
            if (t.drawImage(e.image, o, a, l, c), null != r) {
              for (var s = t.getImageData(o, a, l, c), u = function(e) {
                  "#" === e[0] && (e = e.slice(1));
                  var t = parseInt(e, 16);
                  return {
                    r: t >> 16 & 255,
                    g: t >> 8 & 255,
                    b: 255 & t
                  }
                }(r), d = 0; d < s.data.length; d += 4) s.data[d] = u.r, s.data[d + 1] = u.g, s.data[d + 2] = u.b;
              t.putImageData(s, o, a)
            }
          };
          e.colorize ? s.forEach(function(e, t) {
            return r(e, t)
          }) : r(null, 0)
        }))
      }, [s, c, l]),
      y = r.useCallback(function() {
        var e = a.map(function(e) {
          var t = new Image,
            n = "string" == typeof e ? e : e.src,
            r = "string" == typeof e || e.colorize;
          t.src = n;
          var i = new Promise(function(e) {
            t.onload = e
          });
          return {
            colorize: r,
            image: t,
            src: n,
            loadPromise: i
          }
        });
        return Promise.all(e.map(function(e) {
          return e.loadPromise
        })).then(function() {
          d.current = e.map(function(e) {
            return {
              colorize: e.colorize,
              image: e.image,
              src: e.src
            }
          })
        })
      }, [a]),
      O = r.useCallback(function() {
        return p(true, true, true, function() {
          return _(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, y()];
              case 1:
                return e.sent(), b(), E(true), [2]
            }
          })
        })
      }, [y, b, E]);
    return r.useEffect(function() {
      O()
    }, [O]), r.useEffect(function() {
      null != u.current && (u.current.width = (l + 2) * Math.max(s.length, 1), u.current.height = (c + 2) * a.length)
    }, [s.length, c, l, a.length]), r.createElement("canvas", {
      ref: u,
      className: n,
      style: o ? true : D
    })
  });

function L(e, t) {
  var n, i, o = r.useState(null != (n = null == t ? true : t.isReady) && n),
    a = o[0],
    s = o[1],
    l = r.useState(null != (i = null == e ? true : e.isReady) && i),
    c = l[0],
    u = l[1];
  r.useEffect(function() {
    var e = null == t ? true : t.addReadyListener(s);
    return function() {
      null != e && (null == t || t.removeReadyListener(e))
    }
  }, [t]), r.useEffect(function() {
    var t = null == e ? true : e.addReadyListener(u);
    return function() {
      null != t && (null == e || e.removeReadyListener(t))
    }
  }, [e]);
  var d = r.useCallback(function(n, r) {
      var i = true === r ? {} : r,
        o = i.sprite,
        a = i.color,
        s = null == t ? true : t.getCreateData(),
        l = null == t ? true : t.getCanvas();
      if (null != l && null != s && 0 !== s.sprites.length) return null == e ? true : e.createConfetti(n, l, s, o, a)
    }, [e, t]),
    f = r.useCallback(function(e, t, n) {
      for (var r = [], i = 0; i < t; i++) {
        var o = d(e, n);
        o && r.push(o)
      }
      return r
    }, [d]),
    p = r.useCallback(function(n) {
      var r = null == t ? true : t.getCanvas();
      null != r && (null == e || e.addConfetti(n, r))
    }, [e, t]),
    _ = r.useCallback(function(t) {
      null == e || e.deleteConfetti(t)
    }, [e]),
    m = r.useCallback(function() {
      return null == e ? true : e.clearConfetti()
    }, [e]);
  return r.useMemo(function() {
    return {
      createConfetti: d,
      createMultipleConfetti: f,
      addConfetti: p,
      clearConfetti: m,
      deleteConfetti: _,
      isReady: null != t && null != e && c && a
    }
  }, [p, m, e, d, f, _, c, a, t])
}