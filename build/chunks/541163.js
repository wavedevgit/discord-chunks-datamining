/** Chunk was on 10614 **/
/** chunk id: 541163, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => u
});
var Chunk611886 = require("./611886.js"),
  Chunk251874 = require("./251874.js"),
  Chunk816885 = require("./816885.js");

function a(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
var u = function() {
  var e;

  function t(e) {
    var r = this;
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    a(this, "hooks", (0, n.i)({
      dragSource: function(e, t) {
        r.clearDragSource(), r.dragSourceOptions = t || null, (0, i.i)(e) ? r.dragSourceRef = e : r.dragSourceNode = e, r.reconnectDragSource()
      },
      dragPreview: function(e, t) {
        r.clearDragPreview(), r.dragPreviewOptions = t || null, (0, i.i)(e) ? r.dragPreviewRef = e : r.dragPreviewNode = e, r.reconnectDragPreview()
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
          t = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (t && this.disconnectDragSource(), this.handlerId) {
          if (!e) {
            this.lastConnectedDragSource = e;
            return
          }
          t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions))
        }
      }
    }, {
      key: "reconnectDragPreview",
      value: function() {
        var e = this.dragPreview,
          t = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (t && this.disconnectDragPreview(), this.handlerId) {
          if (!e) {
            this.lastConnectedDragPreview = e;
            return
          }
          t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = e, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, e, this.dragPreviewOptions))
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
        return !(0, o.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
      }
    }, {
      key: "didDragPreviewOptionsChange",
      value: function() {
        return !(0, o.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
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
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
      }
    }(t.prototype, e), t
}()