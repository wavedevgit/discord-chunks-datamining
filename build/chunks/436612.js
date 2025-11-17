/** Chunk was on 42604 **/
/** chunk id: 436612, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  JT: () => c,
  M$: () => d,
  Xz: () => u
});
var Chunk487146 = require("./487146.js");

function o(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function i(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
  }
}

function a(e, t, r) {
  return t && i(e.prototype, t), r && i(e, r), e
}

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
var c = function() {
  function e(t) {
    o(this, e), s(this, "isDisposed", false), s(this, "action", true), this.action = (0, n.mf)(t) ? t : n.ZT
  }
  return a(module, [{
    key: "dispose",
    value: function() {
      this.isDisposed || (this.action(), this.isDisposed = true)
    }
  }], [{
    key: "isDisposable",
    value: function(e) {
      return !!(e && (0, n.mf)(e.dispose))
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
s(c, "empty", {
  dispose: Chunk487146.ZT
});
var u = function() {
    function e() {
      o(this, module), s(this, "isDisposed", false), s(this, "disposables", true);
      for (var t = arguments.length, r = Array(exports), n = 0; Chunk487146 < exports; Chunk487146++) require[Chunk487146] = arguments[Chunk487146];
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
          var r = this.disposables.indexOf(e);
          false !== r && (t = true, this.disposables.splice(r, 1), e.dispose())
        }
        return t
      }
    }, {
      key: "clear",
      value: function() {
        if (!this.isDisposed) {
          for (var e = this.disposables.length, t = Array(module), r = 0; require < module; require++) exports[require] = this.disposables[require];
          this.disposables = [];
          for (var n = 0; Chunk487146 < module; Chunk487146++) exports[Chunk487146].dispose()
        }
      }
    }, {
      key: "dispose",
      value: function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          for (var e = this.disposables.length, t = Array(module), r = 0; require < module; require++) exports[require] = this.disposables[require];
          this.disposables = [];
          for (var n = 0; Chunk487146 < module; Chunk487146++) exports[Chunk487146].dispose()
        }
      }
    }]), module
  }(),
  d = function() {
    function e() {
      o(this, module), s(this, "isDisposed", false), s(this, "current", true)
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
          var r = this.current;
          this.current = e, r && r.dispose()
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