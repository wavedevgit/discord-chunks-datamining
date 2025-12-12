/** Chunk was on web.js **/
/** chunk id: 605507, original params: e,t,n (module,exports,re quire) **/
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
require("./543251.js");
var Chunk427556 = require("./427556.js"),
  Chunk766734 = require("./766734.js"),
  Chunk443725 = require("./443725.js");
module.exports = function(e) {
  function t(e, n) {
    i(this, t);
    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return r._a = e, r._modulus = n, r._listeners = {}, r
  }
  return o(t, e), r(t, [{
    key: "__getValue",
    value: function() {
      return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus
    }
  }, {
    key: "addListener",
    value: function(e) {
      var t = this;
      this._aListener || (this._aListener = this._a.addListener(function() {
        for (var e in t._listeners) t._listeners[e]({
          value: t.__getValue()
        })
      }));
      var n = guid();
      return this._listeners[n] = e, n
    }
  }, {
    key: "removeListener",
    value: function(e) {
      delete this._listeners[e]
    }
  }, {
    key: "interpolate",
    value: function(e) {
      return new l(this, c.create(e))
    }
  }, {
    key: "__attach",
    value: function() {
      this._a.__addChild(this)
    }
  }, {
    key: "__detach",
    value: function() {
      this._a.__removeChild(this)
    }
  }]), t
}(Chunk427556)