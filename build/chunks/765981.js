/** Chunk was on web.js **/
/** chunk id: 765981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => s
});
var Chunk263016 = require("./263016.js");

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
  function e(t, n) {
    var r = this;
    i(this, e), this.isSetUp = false, this.handleRefCountChange = function() {
      var e = r.store.getState().refCount > 0;
      r.backend && (e && !r.isSetUp ? (r.backend.setup(), r.isSetUp = true) : !e && r.isSetUp && (r.backend.teardown(), r.isSetUp = false))
    }, this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange)
  }
  return a(module, [{
    key: "receiveBackend",
    value: function(e) {
      this.backend = e
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry
    }
  }, {
    key: "getActions",
    value: function() {
      var e = this,
        t = this.store.dispatch;

      function n(n) {
        return function() {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
          var a = n.apply(e, i);
          true !== a && t(a)
        }
      }
      var i = (0, Chunk263016.W1)(this);
      return Object.keys(i).reduce(function(e, t) {
        var r = i[t];
        return e[t] = n(r), e
      }, {})
    }
  }, {
    key: "dispatch",
    value: function(e) {
      this.store.dispatch(e)
    }
  }]), module
}()