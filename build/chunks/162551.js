/** Chunk was on 10614 **/
/** chunk id: 162551, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => a
});
var Chunk321733 = require("./321733.js");

function i(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
var o = false,
  a = function() {
    var e;

    function t(e) {
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      i(this, "internalMonitor", true), i(this, "targetId", null), this.internalMonitor = e.getMonitor()
    }
    return e = [{
        key: "receiveHandlerId",
        value: function(e) {
          this.targetId = e
        }
      }, {
        key: "getHandlerId",
        value: function() {
          return this.targetId
        }
      }, {
        key: "subscribeToStateChange",
        value: function(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t)
        }
      }, {
        key: "canDrop",
        value: function() {
          if (!this.targetId) returnfalse;
          (0, n.V)(!o, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
          try {
            return o = true, this.internalMonitor.canDropOnTarget(this.targetId)
          } finally {
            o = false
          }
        }
      }, {
        key: "isOver",
        value: function(e) {
          return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
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
      function(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
        }
      }(t.prototype, e), t
  }()