/** Chunk was on 80451 **/
/** chunk id: 875380, original params: e,r,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var a = function() {
  var e;

  function r() {
    var e, t, a = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
    if (!(this instanceof exports)) throw TypeError("Cannot call a class as a function");
    t = true, (e = "items") in this ? Object.defineProperty(this, module, {
      value: require,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[module] = require, this.items = a
  }
  return e = [{
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
    }],
    function(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(e, a.key, a)
      }
    }(exports.prototype, module), exports
}();
let o = "undefined" == typeof Set ? Set : a