/** Chunk was on web.js **/
/** chunk id: 336258, original params: e (module,exports,re quire) **/
"use strict";
var t = function() {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
  }
}();

function n(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}
module.exports = function() {
  function e() {
    n(this, e)
  }
  return t(e, [{
    key: "start",
    value: function(e, t, n, r) {}
  }, {
    key: "stop",
    value: function() {}
  }, {
    key: "__debouncedOnEnd",
    value: function(e) {
      var t = this.__onEnd;
      this.__onEnd = null, t && t(e)
    }
  }]), e
}()