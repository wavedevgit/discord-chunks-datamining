/** Chunk was on web.js **/
/** chunk id: 980959, original params: e,t,n (module,exports,re quire) **/
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
  function t(e) {
    i(this, t);
    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n._transforms = e, n
  }
  return o(t, e), r(t, [{
    key: "__getValue",
    value: function() {
      return this._transforms.map(function(e) {
        var t = {};
        for (var n in e) {
          var r = e[n];
          r instanceof s ? t[n] = r.__getValue() : t[n] = r
        }
        return t
      })
    }
  }, {
    key: "__getAnimatedValue",
    value: function() {
      return this._transforms.map(function(e) {
        var t = {};
        for (var n in e) {
          var r = e[n];
          r instanceof s ? t[n] = r.__getAnimatedValue() : t[n] = r
        }
        return t
      })
    }
  }, {
    key: "__attach",
    value: function() {
      var e = this;
      this._transforms.forEach(function(t) {
        for (var n in t) {
          var r = t[n];
          r instanceof s && r.__addChild(e)
        }
      })
    }
  }, {
    key: "__detach",
    value: function() {
      var e = this;
      this._transforms.forEach(function(t) {
        for (var n in t) {
          var r = t[n];
          r instanceof s && r.__removeChild(e)
        }
      })
    }
  }]), t
}(require("./427556.js"))