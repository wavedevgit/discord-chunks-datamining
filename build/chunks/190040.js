/** Chunk was on web.js **/
/** chunk id: 190040, original params: e,t,n (module,exports,re quire) **/
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
var Chunk543251 = require("./543251.js");
module.exports = function(e) {
  function t(e, n) {
    i(this, t);
    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return r._strings = e, r._values = n, r
  }
  return o(t, e), r(t, [{
    key: "__transformValue",
    value: function(e) {
      return e instanceof s ? e.__getValue() : e
    }
  }, {
    key: "__getValue",
    value: function() {
      for (var e = this._strings[0], t = 0; t < this._values.length; ++t) e += this.__transformValue(this._values[t]) + this._strings[1 + t];
      return e
    }
  }, {
    key: "__attach",
    value: function() {
      for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof s && this._values[e].__addChild(this)
    }
  }, {
    key: "__detach",
    value: function() {
      for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof s && this._values[e].__removeChild(this)
    }
  }]), t
}(require("./427556.js"))