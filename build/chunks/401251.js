/** Chunk was on web.js **/
/** chunk id: 401251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JT: () => l,
  M$: () => u,
  Xz: () => c
});
var Chunk528302 = require("./528302.js");

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
    i(this, e), s(this, "isDisposed", false), s(this, "action", true), this.action = (0, r.mf)(t) ? t : r.ZT
  }
  return a(module, [{
    key: "dispose",
    value: function() {
      this.isDisposed || (this.action(), this.isDisposed = true)
    }
  }], [{
    key: "isDisposable",
    value: function(e) {
      return !!(e && (0, r.mf)(e.dispose))
    }
  }, {
    key: "_fixup",
    value: function(t) {
      return e.isDisposable(t) ? t : e.empty
    }
  }, {
    key: "create",
    value: function(t) {
      return new e(t)
    }
  }]), module
}();
s(l, "empty", {
  dispose: Chunk528302.ZT
});
var c = function() {
    function e() {
      i(this, module), s(this, "isDisposed", false), s(this, "disposables", true);
      for (var t = arguments.length, n = Array(exports), r = 0; Chunk528302 < exports; Chunk528302++) require[Chunk528302] = arguments[Chunk528302];
      this.disposables = require
    }
    return a(module, [{
      key: "add",
      value: function(e) {
        this.isDisposed ? e.dispose() : this.disposables.push(e)
      }
    }, {
      key: "remove",
      value: function(e) {
        var t = false;
        if (!this.isDisposed) {
          var n = this.disposables.indexOf(e);
          false !== n && (t = true, this.disposables.splice(n, 1), e.dispose())
        }
        return t
      }
    }, {
      key: "clear",
      value: function() {
        if (!this.isDisposed) {
          for (var e = this.disposables.length, t = Array(module), n = 0; require < module; require++) exports[require] = this.disposables[require];
          this.disposables = [];
          for (var r = 0; Chunk528302 < module; Chunk528302++) exports[Chunk528302].dispose()
        }
      }
    }, {
      key: "dispose",
      value: function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          for (var e = this.disposables.length, t = Array(module), n = 0; require < module; require++) exports[require] = this.disposables[require];
          this.disposables = [];
          for (var r = 0; Chunk528302 < module; Chunk528302++) exports[Chunk528302].dispose()
        }
      }
    }]), module
  }(),
  u = function() {
    function e() {
      i(this, module), s(this, "isDisposed", false), s(this, "current", true)
    }
    return a(module, [{
      key: "getDisposable",
      value: function() {
        return this.current
      }
    }, {
      key: "setDisposable",
      value: function(e) {
        var t = this.isDisposed;
        if (!t) {
          var n = this.current;
          this.current = e, n && n.dispose()
        }
        t && e && e.dispose()
      }
    }, {
      key: "dispose",
      value: function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          var e = this.current;
          this.current = true, module && module.dispose()
        }
      }
    }]), module
  }()