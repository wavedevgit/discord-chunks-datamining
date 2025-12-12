/** Chunk was on web.js **/
/** chunk id: 766734, original params: e,t,n (module,exports,re quire) **/
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
  Chunk512722 = require("./512722.js"),
  Chunk443725 = require("./443725.js"),
  Chunk637804 = require("./637804.js");
module.exports = function(e) {
  function t(e, n) {
    i(this, t);
    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return r._parent = e, r._interpolation = n, r._listeners = {}, r
  }
  return o(t, e), r(t, [{
    key: "__getValue",
    value: function() {
      var e = this._parent.__getValue();
      return l("number" == typeof e, "Cannot interpolate an input which is not a number."), this._interpolation(e)
    }
  }, {
    key: "addListener",
    value: function(e) {
      var t = this;
      this._parentListener || (this._parentListener = this._parent.addListener(function() {
        for (var e in t._listeners) t._listeners[e]({
          value: t.__getValue()
        })
      }));
      var n = u();
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
      return new t(this, c.create(e))
    }
  }, {
    key: "__attach",
    value: function() {
      this._parent.__addChild(this)
    }
  }, {
    key: "__detach",
    value: function() {
      this._parent.__removeChild(this), this._parentListener = this._parent.removeListener(this._parentListener)
    }
  }]), t
}(Chunk427556)