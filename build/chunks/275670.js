/** Chunk was on 53870 **/
/** chunk id: 275670, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => i
});

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var i = function() {
  var e;

  function t(e, n) {
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    r(this, "spec", true), r(this, "monitor", true), this.spec = e, this.monitor = n
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
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(t.prototype, e), t
}()