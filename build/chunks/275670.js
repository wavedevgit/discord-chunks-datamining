/** Chunk was on 53870 **/
/** chunk id: 275670, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  e: () => o
});

function r(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
var o = function() {
  var t;

  function n(t, e) {
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    r(this, "spec", true), r(this, "monitor", true), this.spec = t, this.monitor = e
  }
  return t = [{
      key: "canDrop",
      value: function() {
        var t = this.spec,
          n = this.monitor;
        return !module.canDrop || module.canDrop(exports.getItem(), exports)
      }
    }, {
      key: "hover",
      value: function() {
        var t = this.spec,
          n = this.monitor;
        module.hover && module.hover(exports.getItem(), exports)
      }
    }, {
      key: "drop",
      value: function() {
        var t = this.spec,
          n = this.monitor;
        if (module.drop) return module.drop(exports.getItem(), exports)
      }
    }],
    function(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, r.key, r)
      }
    }(exports.prototype, module), exports
}()