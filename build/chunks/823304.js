/** Chunk was on 53870 **/
/** chunk id: 823304, original params: t,n,e (module,exports,require) **/
function r(t) {
  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}
require.d(exports, {
  O: () => i
});

function o(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
var i = function() {
  var t;

  function n(t, e, r) {
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    o(this, "spec", true), o(this, "monitor", true), o(this, "connector", true), this.spec = t, this.monitor = e, this.connector = r
  }
  return t = [{
      key: "beginDrag",
      value: function() {
        var t, n = this.spec,
          e = this.monitor;
        return null != (t = "object" === r(n.item) ? n.item : "function" == typeof n.item ? n.item(e) : {}) ? t : null
      }
    }, {
      key: "canDrag",
      value: function() {
        var t = this.spec,
          n = this.monitor;
        return "boolean" == typeof t.canDrag ? t.canDrag : "function" != typeof t.canDrag || t.canDrag(n)
      }
    }, {
      key: "isDragging",
      value: function(t, n) {
        var e = this.spec,
          r = this.monitor,
          o = e.isDragging;
        return o ? o(r) : n === t.getSourceId()
      }
    }, {
      key: "endDrag",
      value: function() {
        var t = this.spec,
          n = this.monitor,
          e = this.connector,
          r = t.end;
        r && r(n.getItem(), n), e.reconnect()
      }
    }],
    function(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, r.key, r)
      }
    }(n.prototype, t), n
}()