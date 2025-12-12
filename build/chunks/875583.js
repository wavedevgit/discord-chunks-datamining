/** Chunk was on web.js **/
/** chunk id: 875583, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = function() {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
  }
}();

function i(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function o(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}

function a(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Chunk830884 = require("./830884.js");
require("./227705.js");
var Chunk907237 = require("./907237.js"),
  Chunk712742 = require("./712742.js"),
  Chunk512722 = require("./512722.js"),
  Chunk356118 = require("./356118.js");

function f(e, t) {
  return null == e ? t : e
}
module.exports = function(e) {
  function t(e) {
    i(this, t);
    var n, r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return r._overshootClamping = f(e.overshootClamping, false), r._restDisplacementThreshold = f(e.restDisplacementThreshold, .001), r._restSpeedThreshold = f(e.restSpeedThreshold, .001), r._initialVelocity = e.velocity, r._lastVelocity = f(e.velocity, 0), r._toValue = e.toValue, r.__isInteraction = true === e.isInteraction || e.isInteraction, true !== e.bounciness || true !== e.speed ? (u(true === e.tension && true === e.friction, "You can only define bounciness/speed or tension/friction but not both"), n = d.fromBouncinessAndSpeed(f(e.bounciness, 8), f(e.speed, 12))) : n = d.fromOrigamiTensionAndFriction(f(e.tension, 40), f(e.friction, 7)), r._tension = n.tension, r._friction = n.friction, r
  }
  return a(t, e), r(t, [{
    key: "start",
    value: function(e, n, r, i) {
      if (this.__active = true, this._startPosition = e, this._lastPosition = this._startPosition, this._onUpdate = n, this.__onEnd = r, this._lastTime = Date.now(), i instanceof t) {
        var o = i.getInternalState();
        this._lastPosition = o.lastPosition, this._lastVelocity = o.lastVelocity, this._lastTime = o.lastTime
      }
      true !== this._initialVelocity && null !== this._initialVelocity && (this._lastVelocity = this._initialVelocity), this.onUpdate()
    }
  }, {
    key: "getInternalState",
    value: function() {
      return {
        lastPosition: this._lastPosition,
        lastVelocity: this._lastVelocity,
        lastTime: this._lastTime
      }
    }
  }, {
    key: "onUpdate",
    value: function() {
      var e = this._lastPosition,
        t = this._lastVelocity,
        n = this._lastPosition,
        r = this._lastVelocity,
        i = 64,
        o = Date.now();
      o > this._lastTime + i && (o = this._lastTime + i);
      for (var a = 1, s = Math.floor((o - this._lastTime) / a), c = 0; c < s; ++c) {
        var u = a / 1e3,
          d = t,
          f = this._tension * (this._toValue - n) - this._friction * r,
          n = e + d * u / 2,
          r = t + f * u / 2,
          p = r,
          _ = this._tension * (this._toValue - n) - this._friction * r;
        n = e + p * u / 2;
        var m = r = t + _ * u / 2,
          h = this._tension * (this._toValue - n) - this._friction * r;
        n = e + m * u / 2;
        var g = r = t + h * u / 2,
          E = this._tension * (this._toValue - n) - this._friction * r;
        n = e + m * u / 2, r = t + h * u / 2;
        var b = (f + 2 * (_ + h) + E) / 6;
        e += (d + 2 * (p + m) + g) / 6 * u, t += b * u
      }
      if (this._lastTime = o, this._lastPosition = e, this._lastVelocity = t, this._onUpdate(e), this.__active) {
        var y = false;
        this._overshootClamping && 0 !== this._tension && (y = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
        var O = Math.abs(t) <= this._restSpeedThreshold,
          v = true;
        if (0 !== this._tension && (v = Math.abs(this._toValue - e) <= this._restDisplacementThreshold), y || O && v) {
          0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({
            finished: true
          });
          return
        }
        this._animationFrame = l.current(this.onUpdate.bind(this))
      }
    }
  }, {
    key: "stop",
    value: function() {
      this.__active = false, c.current(this._animationFrame), this.__debouncedOnEnd({
        finished: false
      })
    }
  }]), t
}(Chunk830884)