/** Chunk was on web.js **/
/** chunk id: 969357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => u
});
var Chunk573654 = require("./573654.js");

function i(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function a(e, t, n) {
  return t && o(e.prototype, t), n && o(e, n), e
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = false,
  c = false,
  u = function() {
    function e(t) {
      i(this, e), s(this, "internalMonitor", true), s(this, "sourceId", null), this.internalMonitor = t.getMonitor()
    }
    return a(module, [{
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
        (0, Chunk573654.k)(!l, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
          return l = true, this.internalMonitor.canDragSource(this.sourceId)
        } finally {
          l = false
        }
      }
    }, {
      key: "isDragging",
      value: function() {
        if (!this.sourceId) returnfalse;
        (0, Chunk573654.k)(!c, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
          return c = true, this.internalMonitor.isDraggingSource(this.sourceId)
        } finally {
          c = false
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
    }]), module
  }()