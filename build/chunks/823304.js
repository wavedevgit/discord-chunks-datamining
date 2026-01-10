/** Chunk was on 53870 **/
/** chunk id: 823304, original params: e,t,n (module,exports,require) **/
function r(e) {
  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}
require.d(exports, {
  O: () => o
});

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = function() {
  var e;

  function t(e, n, r) {
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    i(this, "spec", true), i(this, "monitor", true), i(this, "connector", true), this.spec = e, this.monitor = n, this.connector = r
  }
  return e = [{
      key: "beginDrag",
      value: function() {
        var e, t = this.spec,
          n = this.monitor;
        return null != (e = "object" === r(t.item) ? t.item : "function" == typeof t.item ? t.item(n) : {}) ? e : null
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
        var n = this.spec,
          r = this.monitor,
          i = n.isDragging;
        return i ? i(r) : t === e.getSourceId()
      }
    }, {
      key: "endDrag",
      value: function() {
        var e = this.spec,
          t = this.monitor,
          n = this.connector,
          r = e.end;
        r && r(t.getItem(), t), n.reconnect()
      }
    }],
    function(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(t.prototype, e), t
}()