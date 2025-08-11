/** Chunk was on web.js **/
/** chunk id: 717029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => s
});
var Chunk608297 = require("./608297.js");

function i(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function a(e, t, n) {
  return t && o(e.prototype, t), n && o(e, n), e
}
var s = function() {
  function e() {
    i(this, module)
  }
  return a(module, [{
    key: "run",
    value: function(e, t, n, i) {
      var o = this.parse(e, t, n, i);
      return o ? {
        setter: new r.gr(o.value, this.validate, this.set, this.priority, this.subPriority),
        rest: o.rest
      } : null
    }
  }, {
    key: "validate",
    value: function(e, t, n) {
      returntrue
    }
  }]), module
}()