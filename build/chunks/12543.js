/** Chunk was on web.js **/
/** chunk id: 12543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk330935 = require("./330935.js");

function i(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function s(e, t, n) {
  return t && a(e.prototype, t), n && a(e, n), e
}
var o = function() {
  function e() {
    i(this, e)
  }
  return s(e, [{
    key: "run",
    value: function(e, t, n, i) {
      var a = this.parse(e, t, n, i);
      return a ? {
        setter: new r.Bc(a.value, this.validate, this.set, this.priority, this.subPriority),
        rest: a.rest
      } : null
    }
  }, {
    key: "validate",
    value: function(e, t, n) {
      returntrue
    }
  }]), e
}()