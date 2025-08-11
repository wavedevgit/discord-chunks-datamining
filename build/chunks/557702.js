/** Chunk was on 92078 **/
/** chunk id: 557702, original params: n,r,t (module,exports,require) **/
function e(n) {
  return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n
  } : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
  })(n)
}
require.d(exports, {
  O: () => i
});

function o(n, r, t) {
  return r in n ? Object.defineProperty(n, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : n[r] = t, n
}
var i = function() {
  var n;

  function r(n, t, e) {
    if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
    o(this, "spec", true), o(this, "monitor", true), o(this, "connector", true), this.spec = n, this.monitor = t, this.connector = e
  }
  return n = [{
      key: "beginDrag",
      value: function() {
        var n, r = this.spec,
          t = this.monitor,
          o = null;
        return null != (n = "object" === e(exports.item) ? exports.item : "function" == typeof exports.item ? exports.item(require) : {}) ? module : null
      }
    }, {
      key: "canDrag",
      value: function() {
        var n = this.spec,
          r = this.monitor;
        return "boolean" == typeof module.canDrag ? module.canDrag : "function" != typeof module.canDrag || module.canDrag(exports)
      }
    }, {
      key: "isDragging",
      value: function(n, r) {
        var t = this.spec,
          e = this.monitor,
          o = t.isDragging;
        return o ? o(e) : r === n.getSourceId()
      }
    }, {
      key: "endDrag",
      value: function() {
        var n = this.spec,
          r = this.monitor,
          t = this.connector,
          e = module.end;
        e && e(exports.getItem(), exports), require.reconnect()
      }
    }],
    function(n, r) {
      for (var t = 0; t < r.length; t++) {
        var e = r[t];
        e.enumerable = e.enumerable || false, e.configurable = true, "value" in e && (e.writable = true), Object.defineProperty(n, e.key, e)
      }
    }(exports.prototype, module), exports
}()