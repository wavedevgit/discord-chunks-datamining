/** Chunk was on 98206 **/
/** chunk id: 86392, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => c
});
var Chunk573654 = require("./573654.js");

function i(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
var a = false,
  o = false,
  c = function() {
    var e;

    function n(e) {
      if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
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
          (0, Chunk573654.k)(!o, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
          try {
            return o = true, this.internalMonitor.isDraggingSource(this.sourceId)
          } finally {
            o = false
          }
        }
      }, {
        key: "subscribeToStateChange",
        value: function(e, n) {
          return this.internalMonitor.subscribeToStateChange(e, n)
        }
      }, {
        key: "isDraggingSource",
        value: function(e) {
          return this.internalMonitor.isDraggingSource(e)
        }
      }, {
        key: "isOverTarget",
        value: function(e, n) {
          return this.internalMonitor.isOverTarget(e, n)
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
      function(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
        }
      }(exports.prototype, module), exports
  }()