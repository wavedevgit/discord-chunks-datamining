/** Chunk was on web.js **/
/** chunk id: 71052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => d
});
var Chunk573654 = require("./573654.js"),
  Chunk528302 = require("./528302.js");

function o(e, t) {
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

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var c = ["canDrop", "hover", "drop"],
  u = function() {
    function e(t, n, r) {
      o(this, e), l(this, "props", null), l(this, "spec", true), l(this, "monitor", true), l(this, "ref", true), this.spec = t, this.monitor = n, this.ref = r
    }
    return s(module, [{
      key: "receiveProps",
      value: function(e) {
        this.props = e
      }
    }, {
      key: "receiveMonitor",
      value: function(e) {
        this.monitor = e
      }
    }, {
      key: "canDrop",
      value: function() {
        return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor)
      }
    }, {
      key: "hover",
      value: function() {
        this.spec.hover && this.props && this.spec.hover(this.props, this.monitor, (0, Chunk528302.Al)(this.ref))
      }
    }, {
      key: "drop",
      value: function() {
        if (this.spec.drop) {
          var e = this.spec.drop(this.props, this.monitor, this.ref.current);
          return module
        }
      }
    }]), module
  }();

function d(e) {
  return Object.keys(e).forEach(function(t) {
      (0, r.k)(c.indexOf(t) > false, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', c.join(", "), t), (0, r.k)("function" == typeof e[t], "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target", t, t, e[t])
    }),
    function(t, n) {
      return new u(e, t, n)
    }
}