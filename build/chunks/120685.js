/** Chunk was on web.js **/
/** chunk id: 120685, original params: e,t,n (module,exports,re quire) **/
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
var Chunk698380 = require("./698380.js");
require("./313319.js");
var Chunk958554 = require("./958554.js"),
  Chunk731841 = require("./731841.js"),
  Chunk82322 = require("./82322.js");
module.exports = function(e) {
  function t(e, n) {
    i(this, t);
    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return r._a = "number" == typeof e ? new l(e) : e, r._b = "number" == typeof n ? new l(n) : n, r._listeners = {}, r
  }
  return s(t, e), r(t, [{
    key: "__getValue",
    value: function() {
      return this._a.__getValue() * this._b.__getValue()
    }
  }, {
    key: "addListener",
    value: function(e) {
      var t = this;
      !this._aListener && this._a.addListener && (this._aListener = this._a.addListener(function() {
        for (var e in t._listeners) t._listeners[e]({
          value: t.__getValue()
        })
      })), !this._bListener && this._b.addListener && (this._bListener = this._b.addListener(function() {
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
      return new c(this, u.create(e))
    }
  }, {
    key: "__attach",
    value: function() {
      this._a.__addChild(this), this._b.__addChild(this)
    }
  }, {
    key: "__detach",
    value: function() {
      this._a.__removeChild(this), this._b.__removeChild(this)
    }
  }]), t
}(Chunk698380)