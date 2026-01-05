/** Chunk was on 53870 **/
/** chunk id: 471256, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk521548 = require("./521548.js"),
  Chunk603901 = require("./603901.js"),
  Chunk763073 = require("./763073.js");

function a(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[n] = e, t
}
var u = function() {
  var t;

  function n(t) {
    var e = this;
    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
    a(this, "hooks", (0, o.p)({
      dropTarget: function(t, n) {
        e.clearDropTarget(), e.dropTargetOptions = n, (0, i.d)(t) ? e.dropTargetRef = t : e.dropTargetNode = t, e.reconnect()
      }
    })), a(this, "handlerId", null), a(this, "dropTargetRef", null), a(this, "dropTargetNode", true), a(this, "dropTargetOptionsInternal", null), a(this, "unsubscribeDropTarget", true), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDropTarget", null), a(this, "lastConnectedDropTargetOptions", null), a(this, "backend", true), this.backend = t
  }
  return t = [{
      key: "connectTarget",
      get: function() {
        return this.dropTarget
      }
    }, {
      key: "reconnect",
      value: function() {
        var t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        module && this.disconnectDropTarget();
        var n = this.dropTarget;
        if (this.handlerId) {
          if (!exports) {
            this.lastConnectedDropTarget = exports;
            return
          }
          module && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = exports, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, exports, this.dropTargetOptions))
        }
      }
    }, {
      key: "receiveHandlerId",
      value: function(t) {
        t !== this.handlerId && (this.handlerId = t, this.reconnect())
      }
    }, {
      key: "dropTargetOptions",
      get: function() {
        return this.dropTargetOptionsInternal
      },
      set: function(t) {
        this.dropTargetOptionsInternal = t
      }
    }, {
      key: "didHandlerIdChange",
      value: function() {
        return this.lastConnectedHandlerId !== this.handlerId
      }
    }, {
      key: "didDropTargetChange",
      value: function() {
        return this.lastConnectedDropTarget !== this.dropTarget
      }
    }, {
      key: "didOptionsChange",
      value: function() {
        return !(0, Chunk521548.w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
      }
    }, {
      key: "disconnectDropTarget",
      value: function() {
        this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = true)
      }
    }, {
      key: "dropTarget",
      get: function() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
      }
    }, {
      key: "clearDropTarget",
      value: function() {
        this.dropTargetRef = null, this.dropTargetNode = null
      }
    }],
    function(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, r.key, r)
      }
    }(exports.prototype, module), exports
}()