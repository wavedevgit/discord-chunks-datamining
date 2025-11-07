/** Chunk was on 72615 **/
/** chunk id: 344669, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => c
});
var Chunk476098 = require("./476098.js"),
  Chunk156755 = require("./156755.js"),
  Chunk521548 = require("./521548.js");

function o(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
var c = function() {
  var e;

  function n(e) {
    var t = this;
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    o(this, "hooks", (0, r.p)({
      dragSource: function(e, n) {
        t.clearDragSource(), t.dragSourceOptions = n || null, (0, i.d)(e) ? t.dragSourceRef = e : t.dragSourceNode = e, t.reconnectDragSource()
      },
      dragPreview: function(e, n) {
        t.clearDragPreview(), t.dragPreviewOptions = n || null, (0, i.d)(e) ? t.dragPreviewRef = e : t.dragPreviewNode = e, t.reconnectDragPreview()
      }
    })), o(this, "handlerId", null), o(this, "dragSourceRef", null), o(this, "dragSourceNode", true), o(this, "dragSourceOptionsInternal", null), o(this, "dragSourceUnsubscribe", true), o(this, "dragPreviewRef", null), o(this, "dragPreviewNode", true), o(this, "dragPreviewOptionsInternal", null), o(this, "dragPreviewUnsubscribe", true), o(this, "lastConnectedHandlerId", null), o(this, "lastConnectedDragSource", null), o(this, "lastConnectedDragSourceOptions", null), o(this, "lastConnectedDragPreview", null), o(this, "lastConnectedDragPreviewOptions", null), o(this, "backend", true), this.backend = e
  }
  return e = [{
      key: "receiveHandlerId",
      value: function(e) {
        this.handlerId !== e && (this.handlerId = e, this.reconnect())
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
      set: function(e) {
        this.dragSourceOptionsInternal = e
      }
    }, {
      key: "dragPreviewOptions",
      get: function() {
        return this.dragPreviewOptionsInternal
      },
      set: function(e) {
        this.dragPreviewOptionsInternal = e
      }
    }, {
      key: "reconnect",
      value: function() {
        this.reconnectDragSource(), this.reconnectDragPreview()
      }
    }, {
      key: "reconnectDragSource",
      value: function() {
        var e = this.dragSource,
          n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
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
        var e = this.dragPreview,
          n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
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
    function(e, n) {
      for (var t = 0; t < n.length; t++) {
        var r = n[t];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(exports.prototype, module), exports
}()