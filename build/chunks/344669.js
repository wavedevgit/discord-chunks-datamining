/** Chunk was on 76802 **/
/** chunk id: 344669, original params: t,e,i (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk476098 = require("./476098.js"),
  Chunk156755 = require("./156755.js"),
  Chunk521548 = require("./521548.js");

function s(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
var o = function() {
  var t;

  function e(t) {
    var i = this;
    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
    s(this, "hooks", (0, n.p)({
      dragSource: function(t, e) {
        i.clearDragSource(), i.dragSourceOptions = e || null, (0, r.d)(t) ? i.dragSourceRef = t : i.dragSourceNode = t, i.reconnectDragSource()
      },
      dragPreview: function(t, e) {
        i.clearDragPreview(), i.dragPreviewOptions = e || null, (0, r.d)(t) ? i.dragPreviewRef = t : i.dragPreviewNode = t, i.reconnectDragPreview()
      }
    })), s(this, "handlerId", null), s(this, "dragSourceRef", null), s(this, "dragSourceNode", true), s(this, "dragSourceOptionsInternal", null), s(this, "dragSourceUnsubscribe", true), s(this, "dragPreviewRef", null), s(this, "dragPreviewNode", true), s(this, "dragPreviewOptionsInternal", null), s(this, "dragPreviewUnsubscribe", true), s(this, "lastConnectedHandlerId", null), s(this, "lastConnectedDragSource", null), s(this, "lastConnectedDragSourceOptions", null), s(this, "lastConnectedDragPreview", null), s(this, "lastConnectedDragPreviewOptions", null), s(this, "backend", true), this.backend = t
  }
  return t = [{
      key: "receiveHandlerId",
      value: function(t) {
        this.handlerId !== t && (this.handlerId = t, this.reconnect())
      }
    }, {
      key: "connectTarget",
      get: function() {
        return this.dragSource
      }
    }, {
      key: "dragSourceOptions",
      get: function() {
        return this.dragSourceOptionsInternal
      },
      set: function(t) {
        this.dragSourceOptionsInternal = t
      }
    }, {
      key: "dragPreviewOptions",
      get: function() {
        return this.dragPreviewOptionsInternal
      },
      set: function(t) {
        this.dragPreviewOptionsInternal = t
      }
    }, {
      key: "reconnect",
      value: function() {
        this.reconnectDragSource(), this.reconnectDragPreview()
      }
    }, {
      key: "reconnectDragSource",
      value: function() {
        var t = this.dragSource,
          e = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (exports && this.disconnectDragSource(), this.handlerId) {
          if (!module) {
            this.lastConnectedDragSource = module;
            return
          }
          exports && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = module, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, module, this.dragSourceOptions))
        }
      }
    }, {
      key: "reconnectDragPreview",
      value: function() {
        var t = this.dragPreview,
          e = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (exports && this.disconnectDragPreview(), this.handlerId) {
          if (!module) {
            this.lastConnectedDragPreview = module;
            return
          }
          exports && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = module, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, module, this.dragPreviewOptions))
        }
      }
    }, {
      key: "didHandlerIdChange",
      value: function() {
        return this.lastConnectedHandlerId !== this.handlerId
      }
    }, {
      key: "didConnectedDragSourceChange",
      value: function() {
        return this.lastConnectedDragSource !== this.dragSource
      }
    }, {
      key: "didConnectedDragPreviewChange",
      value: function() {
        return this.lastConnectedDragPreview !== this.dragPreview
      }
    }, {
      key: "didDragSourceOptionsChange",
      value: function() {
        return !(0, Chunk521548.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
      }
    }, {
      key: "didDragPreviewOptionsChange",
      value: function() {
        return !(0, Chunk521548.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
      }
    }, {
      key: "disconnectDragSource",
      value: function() {
        this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = true)
      }
    }, {
      key: "disconnectDragPreview",
      value: function() {
        this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = true, this.dragPreviewNode = null, this.dragPreviewRef = null)
      }
    }, {
      key: "dragSource",
      get: function() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
      }
    }, {
      key: "dragPreview",
      get: function() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
      }
    }, {
      key: "clearDragSource",
      value: function() {
        this.dragSourceNode = null, this.dragSourceRef = null
      }
    }, {
      key: "clearDragPreview",
      value: function() {
        this.dragPreviewNode = null, this.dragPreviewRef = null
      }
    }],
    function(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n)
      }
    }(exports.prototype, module), exports
}()