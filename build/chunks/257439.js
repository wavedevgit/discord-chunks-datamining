/** Chunk was on 13599 **/
/** chunk id: 257439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u
});
var Chunk521548 = require("./521548.js"),
  Chunk476098 = require("./476098.js"),
  Chunk156755 = require("./156755.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function() {
  var e;

  function t(e) {
    var n = this;
    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
    a(this, "hooks", (0, i.p)({
      dropTarget: function(e, t) {
        n.clearDropTarget(), n.dropTargetOptions = t, (0, o.d)(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect()
      }
    })), a(this, "handlerId", null), a(this, "dropTargetRef", null), a(this, "dropTargetNode", true), a(this, "dropTargetOptionsInternal", null), a(this, "unsubscribeDropTarget", true), a(this, "lastConnectedHandlerId", null), a(this, "lastConnectedDropTarget", null), a(this, "lastConnectedDropTargetOptions", null), a(this, "backend", true), this.backend = e
  }
  return e = [{
      key: "connectTarget",
      get: function() {
        return this.dropTarget
      }
    }, {
      key: "reconnect",
      value: function() {
        var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        module && this.disconnectDropTarget();
        var t = this.dropTarget;
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
      value: function(e) {
        e !== this.handlerId && (this.handlerId = e, this.reconnect())
      }
    }, {
      key: "dropTargetOptions",
      get: function() {
        return this.dropTargetOptionsInternal
      },
      set: function(e) {
        this.dropTargetOptionsInternal = e
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
    function(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }(exports.prototype, module), exports
}()