/** Chunk was on 60646 **/
/** chunk id: 52402, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => o
});
var Chunk603901 = require("./603901.js"),
  Chunk763073 = require("./763073.js"),
  Chunk521548 = require("./521548.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = function() {
  var e;

  function t(e) {
    var n = this;
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    l(this, "hooks", (0, r.p)({
      dragSource: function(e, t) {
        n.clearDragSource(), n.dragSourceOptions = t || null, (0, i.d)(e) ? n.dragSourceRef = e : n.dragSourceNode = e, n.reconnectDragSource()
      },
      dragPreview: function(e, t) {
        n.clearDragPreview(), n.dragPreviewOptions = t || null, (0, i.d)(e) ? n.dragPreviewRef = e : n.dragPreviewNode = e, n.reconnectDragPreview()
      }
    })), l(this, "handlerId", null), l(this, "dragSourceRef", null), l(this, "dragSourceNode", true), l(this, "dragSourceOptionsInternal", null), l(this, "dragSourceUnsubscribe", true), l(this, "dragPreviewRef", null), l(this, "dragPreviewNode", true), l(this, "dragPreviewOptionsInternal", null), l(this, "dragPreviewUnsubscribe", true), l(this, "lastConnectedHandlerId", null), l(this, "lastConnectedDragSource", null), l(this, "lastConnectedDragSourceOptions", null), l(this, "lastConnectedDragPreview", null), l(this, "lastConnectedDragPreviewOptions", null), l(this, "backend", true), this.backend = e
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
          t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
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
          t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
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
    function(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(exports.prototype, module), exports
}()