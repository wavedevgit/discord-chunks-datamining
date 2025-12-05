/** Chunk was on 59231 **/
/** chunk id: 305765, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => c
});
var Chunk553024 = require("./553024.js"),
  Chunk791241 = require("./791241.js"),
  Chunk521548 = require("./521548.js");

function a(e, n, t) {
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
    a(this, "hooks", (0, r.p)({
      dragSource: function(e, n) {
        t.clearDragSource(), t.dragSourceOptions = n || null, (0, i.d)(e) ? t.dragSourceRef = e : t.dragSourceNode = e, t.reconnectDragSource()
      },
      dragPreview: function(e, n) {
        t.clearDragPreview(), t.dragPreviewOptions = n || null, (0, i.d)(e) ? t.dragPreviewRef = e : t.dragPreviewNode = e, t.reconnectDragPreview()
      }
    })), a(this, "handlerId", null), a(this, "dragSourceRef", null), a(this, "dragSourceNode", true), a(this, "dragSourceOptionsInternal", null), a(this, "dragSourceUnsubscribe", true), a(this, "dragPreviewRef", null), a(this, "dragPreviewNode", true), a(this, "dragPreviewOptionsInternal", null), a(this, "dragPreviewUnsubscribe", true), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDragSource", null), a(this, "lastConnectedDragSourceOptions", null), a(this, "lastConnectedDragPreview", null), a(this, "lastConnectedDragPreviewOptions", null), a(this, "backend", true), this.backend = e
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