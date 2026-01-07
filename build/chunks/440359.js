/** Chunk was on web.js **/
/** chunk id: 440359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => l
});
var Chunk708644 = require("./708644.js");

function i(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function a(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function o(e, t, n) {
  return t && a(e.prototype, t), n && a(e, n), e
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = function() {
  function e(t) {
    i(this, e), s(this, "entered", []), s(this, "isNodeInDocument", true), this.isNodeInDocument = t
  }
  return o(e, [{
    key: "enter",
    value: function(e) {
      var t = this,
        n = this.entered.length,
        i = function(n) {
          return t.isNodeInDocument(n) && (!n.contains || n.contains(e))
        };
      return this.entered = (0, r.G0)(this.entered.filter(i), [e]), 0 === n && this.entered.length > 0
    }
  }, {
    key: "leave",
    value: function(e) {
      var t = this.entered.length;
      return this.entered = (0, r.zu)(this.entered.filter(this.isNodeInDocument), e), t > 0 && 0 === this.entered.length
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = []
    }
  }]), e
}()