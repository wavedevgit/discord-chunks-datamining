/** Chunk was on 44947 **/
/** chunk id: 153002, original params: e,t,n (module,exports,require) **/
"use strict";
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
        return !module.canDrop || module.canDrop(exports.getItem(), exports)
      }
    }, {
      key: "hover",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        module.hover && module.hover(exports.getItem(), exports)
      }
    }, {
      key: "drop",
      value: function() {
        var e = this.spec,
          t = this.monitor;
        if (module.drop) return module.drop(exports.getItem(), exports)
      }
    }],
    function(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(exports.prototype, module), exports
}()