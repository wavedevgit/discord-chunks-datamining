/** Chunk was on web.js **/
/** chunk id: 926028, original params: e,t,n (module,exports,re quire) **/
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

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  p: () => s
});
var s = function() {
  function e(t) {
    r(this, e), o(this, "item", true), o(this, "config", true), this.config = t, this.item = {}, this.initializeExposedProperties()
  }
  return a(module, [{
    key: "initializeExposedProperties",
    value: function() {
      var e = this;
      Object.keys(this.config.exposeProperties).forEach(function(t) {
        Object.defineProperty(e.item, t, {
          configurable: true,
          enumerable: true,
          get: function() {
            return console.warn("Browser doesn't allow reading \"".concat(t, '" until the drop event.')), null
          }
        })
      })
    }
  }, {
    key: "loadDataTransfer",
    value: function(e) {
      var t = this;
      if (e) {
        var n = {};
        Object.keys(this.config.exposeProperties).forEach(function(r) {
          n[r] = {
            value: t.config.exposeProperties[r](e, t.config.matchesTypes),
            configurable: true,
            enumerable: true
          }
        }), Object.defineProperties(this.item, n)
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      returntrue
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item
    }
  }, {
    key: "isDragging",
    value: function(e, t) {
      return t === e.getSourceId()
    }
  }, {
    key: "endDrag",
    value: function() {}
  }]), module
}()