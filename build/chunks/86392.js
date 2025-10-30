/** Chunk was on 95661 **/
/** chunk id: 86392, original params: t,e,i (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk573654 = require("./573654.js");

function r(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
var a = false,
  s = false,
  o = function() {
    var t;

    function e(t) {
      if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
      r(this, "internalMonitor", true), r(this, "sourceId", null), this.internalMonitor = t.getMonitor()
    }
    return t = [{
        key: "receiveHandlerId",
        value: function(t) {
          this.sourceId = t
        }
      }, {
        key: "getHandlerId",
        value: function() {
          return this.sourceId
        }
      }, {
        key: "canDrag",
        value: function() {
          (0, Chunk573654.k)(!a, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
          try {
            return a = true, this.internalMonitor.canDragSource(this.sourceId)
          } finally {
            a = false
          }
        }
      }, {
        key: "isDragging",
        value: function() {
          if (!this.sourceId) returnfalse;
          (0, Chunk573654.k)(!s, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
          try {
            return s = true, this.internalMonitor.isDraggingSource(this.sourceId)
          } finally {
            s = false
          }
        }
      }, {
        key: "subscribeToStateChange",
        value: function(t, e) {
          return this.internalMonitor.subscribeToStateChange(t, e)
        }
      }, {
        key: "isDraggingSource",
        value: function(t) {
          return this.internalMonitor.isDraggingSource(t)
        }
      }, {
        key: "isOverTarget",
        value: function(t, e) {
          return this.internalMonitor.isOverTarget(t, e)
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
        value: function(t) {
          return this.internalMonitor.subscribeToOffsetChange(t)
        }
      }, {
        key: "canDragSource",
        value: function(t) {
          return this.internalMonitor.canDragSource(t)
        }
      }, {
        key: "canDropOnTarget",
        value: function(t) {
          return this.internalMonitor.canDropOnTarget(t)
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
      function(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n)
        }
      }(exports.prototype, module), exports
  }()