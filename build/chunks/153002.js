/** Chunk was on 92078 **/
/** chunk id: 153002, original params: n,r,t (module,exports,require) **/
require.d(exports, {
  e: () => o
});

function e(n, r, t) {
  return r in n ? Object.defineProperty(n, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : n[r] = t, n
}
var o = function() {
  var n;

  function r(n, t) {
    if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
    e(this, "spec", true), e(this, "monitor", true), this.spec = n, this.monitor = t
  }
  return n = [{
      key: "canDrop",
      value: function() {
        var n = this.spec,
          r = this.monitor;
        return !module.canDrop || module.canDrop(exports.getItem(), exports)
      }
    }, {
      key: "hover",
      value: function() {
        var n = this.spec,
          r = this.monitor;
        module.hover && module.hover(exports.getItem(), exports)
      }
    }, {
      key: "drop",
      value: function() {
        var n = this.spec,
          r = this.monitor;
        if (module.drop) return module.drop(exports.getItem(), exports)
      }
    }],
    function(n, r) {
      for (var t = 0; t < r.length; t++) {
        var e = r[t];
        e.enumerable = e.enumerable || false, e.configurable = true, "value" in e && (e.writable = true), Object.defineProperty(n, e.key, e)
      }
    }(exports.prototype, module), exports
}()