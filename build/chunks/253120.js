/** Chunk was on web.js **/
/** chunk id: 253120, original params: e,t,n (module,exports,re quire) **/
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

function s(e, t) {
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
var Chunk336258 = require("./336258.js");
require("./958554.js");
var Chunk497387 = require("./497387.js"),
  Chunk259126 = require("./259126.js"),
  Chunk110799 = require("./110799.js"),
  d = Chunk497387.inOut(Chunk497387.ease);
module.exports = function(e) {
  function t(e) {
    i(this, t);
    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n._toValue = e.toValue, n._easing = true !== e.easing ? e.easing : d, n._duration = true !== e.duration ? e.duration : 500, n._delay = true !== e.delay ? e.delay : 0, n.__isInteraction = true === e.isInteraction || e.isInteraction, n
  }
  return s(t, e), r(t, [{
    key: "start",
    value: function(e, t, n) {
      var r = this;
      this.__active = true, this._fromValue = e, this._onUpdate = t, this.__onEnd = n;
      var i = function() {
        0 === r._duration ? (r._onUpdate(r._toValue), r.__debouncedOnEnd({
          finished: true
        })) : (r._startTime = Date.now(), r._animationFrame = c.current(r.onUpdate.bind(r)))
      };
      this._delay ? this._timeout = setTimeout(i, this._delay) : i()
    }
  }, {
    key: "onUpdate",
    value: function() {
      var e = Date.now();
      if (e >= this._startTime + this._duration) {
        0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), this.__debouncedOnEnd({
          finished: true
        });
        return
      }
      this._onUpdate(this._fromValue + this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = c.current(this.onUpdate.bind(this)))
    }
  }, {
    key: "stop",
    value: function() {
      this.__active = false, clearTimeout(this._timeout), u.current(this._animationFrame), this.__debouncedOnEnd({
        finished: false
      })
    }
  }]), t
}(Chunk336258)