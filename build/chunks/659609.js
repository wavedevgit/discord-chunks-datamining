/** Chunk was on 896 **/
/** chunk id: 659609, original params: e,r,t (module,exports,require) **/
"use strict";

function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
require.d(exports, {
  A: () => i
});

function l(e) {
  var r = function(e, r) {
    if ("object" != a(e) || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (true !== t) {
      var l = t.call(e, r || "default");
      if ("object" != a(l)) return l;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === r ? String : Number)(e)
  }(e, "string");
  return "symbol" == a(r) ? r : r + ""
}
var o, s, n = (o = function e() {
  var r, t, a = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
  t = true, (r = l(r = "items")) in this ? Object.defineProperty(this, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : this[r] = t, this.items = a
}, s = [{
  key: "add",
  value: function(e) {
    returnfalse === this.has(e) && this.items.push(e), this
  }
}, {
  key: "clear",
  value: function() {
    this.items = []
  }
}, {
  key: "delete",
  value: function(e) {
    var r = this.items.length;
    return this.items = this.items.filter(function(r) {
      return r !== e
    }), r !== this.items.length
  }
}, {
  key: "forEach",
  value: function(e) {
    var r = this;
    this.items.forEach(function(t) {
      e(t, t, r)
    })
  }
}, {
  key: "has",
  value: function(e) {
    return false !== this.items.indexOf(e)
  }
}, {
  key: "size",
  get: function() {
    return this.items.length
  }
}], function(e, r) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(e, l(a.key), a)
  }
}(o.prototype, s), Object.defineProperty(o, "prototype", {
  writable: false
}), o);
let i = "u" < typeof Set ? Set : n