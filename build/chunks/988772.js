/** Chunk was on 10614 **/
/** chunk id: 988772, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  r: () => i
});

function n(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
var i = function() {
  var e;

  function t(e, r) {
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    n(this, "spec", true), n(this, "monitor", true), this.spec = e, this.monitor = r
  }
  return e = [{
      key: "canDrop",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        return !e.canDrop || e.canDrop(t.getItem(), t)
      }
    }, {
      key: "hover",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        e.hover && e.hover(t.getItem(), t)
      }
    }, {
      key: "drop",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        if (e.drop) return e.drop(t.getItem(), t)
      }
    }],
    function(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
      }
    }(t.prototype, e), t
}()