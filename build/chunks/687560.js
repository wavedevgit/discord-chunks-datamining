/** Chunk was on web.js **/
/** chunk id: 687560, original params: e,t,n (module,exports,re quire) **/
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

function a(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}

function o(e, t) {
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
var Chunk830884 = require("./830884.js"),
  Chunk907237 = require("./907237.js"),
  Chunk712742 = require("./712742.js");
module.exports = function(e) {
  function t(e) {
    i(this, t);
    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n._deceleration = true !== e.deceleration ? e.deceleration : .998, n._velocity = e.velocity, n.__isInteraction = true === e.isInteraction || e.isInteraction, n
  }
  return o(t, e), r(t, [{
    key: "start",
    value: function(e, t, n) {
      this.__active = true, this._lastValue = e, this._fromValue = e, this._onUpdate = t, this.__onEnd = n, this._startTime = Date.now(), this._animationFrame = l.current(this.onUpdate.bind(this))
    }
  }, {
    key: "onUpdate",
    value: function() {
      var e = Date.now(),
        t = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)));
      if (this._onUpdate(t), .1 > Math.abs(this._lastValue - t)) return void this.__debouncedOnEnd({
        finished: true
      });
      this._lastValue = t, this.__active && (this._animationFrame = l.current(this.onUpdate.bind(this)))
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