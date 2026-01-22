/** Chunk was on 10614 **/
/** chunk id: 394886, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => u
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
  a = false,
  u = function() {
    var e;

    function t(e) {
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      i(this, "internalMonitor", true), i(this, "sourceId", null), this.internalMonitor = e.getMonitor()
    }
    return e = [{
        key: "receiveHandlerId",
        value: function(e) {
          this.sourceId = e
        }
      }, {
        key: "getHandlerId",
        value: function() {
          return this.sourceId
        }
      }, {
        key: "canDrag",
        value: function() {
          (0, n.V)(!o, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
          try {
            return o = true, this.internalMonitor.canDragSource(this.sourceId)
          } finally {
            o = false
          }
        }
      }, {
        key: "isDragging",
        value: function() {
          if (!this.sourceId) returnfalse;
          (0, n.V)(!a, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
          try {
            return a = true, this.internalMonitor.isDraggingSource(this.sourceId)
          } finally {
            a = false
          }
        }
      }, {
        key: "subscribeToStateChange",
        value: function(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t)
        }
      }, {
        key: "isDraggingSource",
        value: function(e) {
          return this.internalMonitor.isDraggingSource(e)
        }
      }, {
        key: "isOverTarget",
        value: function(e, t) {
          return this.internalMonitor.isOverTarget(e, t)
        }
      }, {
        key: "getTargetIds",
        value: function() {
          return this.internalMonitor.getTargetIds()
        }
      }, {
        key: "isSourcePublic",
        value: function() {
          return this.internalMonitor.isSourcePublic()
        }
      }, {
        key: "getSourceId",
        value: function() {
          return this.internalMonitor.getSourceId()
        }
      }, {
        key: "subscribeToOffsetChange",
        value: function(e) {
          return this.internalMonitor.subscribeToOffsetChange(e)
        }
      }, {
        key: "canDragSource",
        value: function(e) {
          return this.internalMonitor.canDragSource(e)
        }
      }, {
        key: "canDropOnTarget",
        value: function(e) {
          return this.internalMonitor.canDropOnTarget(e)
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