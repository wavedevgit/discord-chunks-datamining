/** Chunk was on 10614 **/
/** chunk id: 310594, original params: e,t,r (module,exports,require) **/
function n(e) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
require.d(exports, {
  c: () => o
});

function i(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
var o = function() {
  var e;

  function t(e, r, n) {
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    i(this, "spec", true), i(this, "monitor", true), i(this, "connector", true), this.spec = e, this.monitor = r, this.connector = n
  }
  return e = [{
      key: "beginDrag",
      value: function() {
        var e, t = this.spec,
          r = this.monitor;
        return null != (e = "object" === n(t.item) ? t.item : "function" == typeof t.item ? t.item(r) : {}) ? e : null
      }
    }, {
      key: "canDrag",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        return "boolean" == typeof e.canDrag ? e.canDrag : "function" != typeof e.canDrag || e.canDrag(t)
      }
    }, {
      key: "isDragging",
      value: function(e, t) {
        var r = this.spec,
          n = this.monitor,
          i = r.isDragging;
        return i ? i(n) : t === e.getSourceId()
      }
    }, {
      key: "endDrag",
      value: function() {
        var e = this.spec,
          t = this.monitor,
          r = this.connector,
          n = e.end;
        n && n(t.getItem(), t), r.reconnect()
      }
    }],
    function(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
      }
    }(t.prototype, e), t
}()