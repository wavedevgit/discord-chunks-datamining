/** Chunk was on 53870 **/
/** chunk id: 742241, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => a
});
var Chunk573654 = require("./573654.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
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
          (0, r.k)(!o, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
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
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
        }
      }(t.prototype, e), t
  }()