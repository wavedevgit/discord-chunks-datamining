/** Chunk was on web.js **/
/** chunk id: 698380, original params: e,t,n (module,exports,re quire) **/
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
module.exports = function(e) {
  function t() {
    i(this, t);
    var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return e._children = [], e
  }
  return s(t, e), r(t, [{
    key: "__addChild",
    value: function(e) {
      0 === this._children.length && this.__attach(), this._children.push(e)
    }
  }, {
    key: "__removeChild",
    value: function(e) {
      var t = this._children.indexOf(e);
      false === t ? console.warn("Trying to remove a child that doesn't exist") : (this._children.splice(t, 1), 0 === this._children.length && this.__detach())
    }
  }, {
    key: "__getChildren",
    value: function() {
      return this._children
    }
  }]), t
}(require("./313319.js"))