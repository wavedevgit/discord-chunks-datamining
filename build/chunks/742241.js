/** Chunk was on 53870 **/
/** chunk id: 742241, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  H: () => a
});
var Chunk573654 = require("./573654.js");

function o(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
var i = false,
  a = function() {
    var t;

    function n(t) {
      if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
      o(this, "internalMonitor", true), o(this, "targetId", null), this.internalMonitor = t.getMonitor()
    }
    return t = [{
        key: "receiveHandlerId",
        value: function(t) {
          this.targetId = t
        }
      }, {
        key: "getHandlerId",
        value: function() {
          return this.targetId
        }
      }, {
        key: "subscribeToStateChange",
        value: function(t, n) {
          return this.internalMonitor.subscribeToStateChange(t, n)
        }
      }, {
        key: "canDrop",
        value: function() {
          if (!this.targetId) returnfalse;
          (0, Chunk573654.k)(!i, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
          try {
            return i = true, this.internalMonitor.canDropOnTarget(this.targetId)
          } finally {
            i = false
          }
        }
      }, {
        key: "isOver",
        value: function(t) {
          return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, t)
        }
      }, {
        key: "getItemType",
        value: function() {
          return this.internalMonitor.getItemType()
        }
      }, {
        key: "getItem",
        value: function() {
          return this.internalMonitor.getItem()
        }
      }, {
        key: "getDropResult",
        value: function() {
          return this.internalMonitor.getDropResult()
        }
      }, {
        key: "didDrop",
        value: function() {
          return this.internalMonitor.didDrop()
        }
      }, {
        key: "getInitialClientOffset",
        value: function() {
          return this.internalMonitor.getInitialClientOffset()
        }
      }, {
        key: "getInitialSourceClientOffset",
        value: function() {
          return this.internalMonitor.getInitialSourceClientOffset()
        }
      }, {
        key: "getSourceClientOffset",
        value: function() {
          return this.internalMonitor.getSourceClientOffset()
        }
      }, {
        key: "getClientOffset",
        value: function() {
          return this.internalMonitor.getClientOffset()
        }
      }, {
        key: "getDifferenceFromInitialOffset",
        value: function() {
          return this.internalMonitor.getDifferenceFromInitialOffset()
        }
      }],
      function(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, r.key, r)
        }
      }(exports.prototype, module), exports
  }()