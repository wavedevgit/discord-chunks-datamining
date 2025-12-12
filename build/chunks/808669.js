/** Chunk was on web.js **/
/** chunk id: 808669, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = function() {
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

function a(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function o(e, t) {
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
var Chunk543251 = require("./543251.js"),
  Chunk513311 = require("./513311.js");
module.exports = function(e) {
  function t(e, n) {
    a(this, t);
    var i = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return e.style && (e = r({}, e, {
      style: new c(e.style)
    })), i._props = e, i._callback = n, i.__attach(), i
  }
  return s(t, e), i(t, [{
    key: "__getValue",
    value: function() {
      var e = {};
      for (var t in this._props) {
        var n = this._props[t];
        n instanceof l ? e[t] = n.__getValue() : e[t] = n
      }
      return e
    }
  }, {
    key: "__getAnimatedValue",
    value: function() {
      var e = {};
      for (var t in this._props) {
        var n = this._props[t];
        n instanceof l && (e[t] = n.__getAnimatedValue())
      }
      return e
    }
  }, {
    key: "__attach",
    value: function() {
      for (var e in this._props) {
        var t = this._props[e];
        t instanceof l && t.__addChild(this)
      }
    }
  }, {
    key: "__detach",
    value: function() {
      for (var e in this._props) {
        var t = this._props[e];
        t instanceof l && t.__removeChild(this)
      }
    }
  }, {
    key: "update",
    value: function() {
      this._callback()
    }
  }]), t
}(Chunk543251)