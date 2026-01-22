/** Chunk was on web.js **/
/** chunk id: 461927, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function a(e, t, n) {
  return t && i(e.prototype, t), n && i(e, n), e
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  s: () => o
});
var o = function() {
  function e(t, n) {
    r(this, e), s(this, "ownerDocument", null), s(this, "globalContext", true), s(this, "optionsArgs", true), this.globalContext = t, this.optionsArgs = n
  }
  return a(e, [{
    key: "window",
    get: function() {
      return this.globalContext ? this.globalContext : "u" > typeof window ? window : true
    }
  }, {
    key: "document",
    get: function() {
      var e;
      return null != (e = this.globalContext) && e.document ? this.globalContext.document : this.window ? this.window.document : true
    }
  }, {
    key: "rootElement",
    get: function() {
      var e;
      return (null == (e = this.optionsArgs) ? true : e.rootElement) || this.window
    }
  }]), e
}()