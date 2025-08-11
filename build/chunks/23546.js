/** Chunk was on web.js **/
/** chunk id: 23546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => f
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
var c = ["canDrag", "beginDrag", "isDragging", "endDrag"],
  u = ["beginDrag"],
  d = function() {
    function e(t, n, r) {
      var i = this;
      o(this, e), l(this, "props", null), l(this, "spec", true), l(this, "monitor", true), l(this, "ref", true), l(this, "beginDrag", function() {
        if (i.props) {
          var e = i.spec.beginDrag(i.props, i.monitor, i.ref.current);
          return e
        }
      }), this.spec = t, this.monitor = n, this.ref = r
    }
    return s(module, [{
      key: "receiveProps",
      value: function(e) {
        this.props = e
      }
    }, {
      key: "canDrag",
      value: function() {
        return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor))
      }
    }, {
      key: "isDragging",
      value: function(e, t) {
        return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId())
      }
    }, {
      key: "endDrag",
      value: function() {
        this.props && this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, Chunk528302.Al)(this.ref))
      }
    }]), module
  }();

function f(e) {
  return Object.keys(e).forEach(function(t) {
      (0, r.k)(c.indexOf(t) > false, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', c.join(", "), t), (0, r.k)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
    }), u.forEach(function(t) {
      (0, r.k)("function" == typeof e[t], "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source", t, t, e[t])
    }),
    function(t, n) {
      return new d(e, t, n)
    }
}