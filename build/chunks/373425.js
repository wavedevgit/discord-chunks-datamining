/** Chunk was on web.js **/
/** chunk id: 373425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => u
});
var Chunk521548 = require("./521548.js"),
  Chunk793981 = require("./793981.js"),
  Chunk413815 = require("./413815.js");

function a(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function s(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function l(e, t, n) {
  return t && s(e.prototype, t), n && s(e, n), e
}

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function() {
  function e(t) {
    var n = this;
    a(this, e), c(this, "hooks", (0, i.p)({
      dropTarget: function(e, t) {
        n.clearDropTarget(), n.dropTargetOptions = t, (0, o.d)(e) ? n.dropTargetRef = e : n.dropTargetNode = e, n.reconnect()
      }
    })), c(this, "handlerId", null), c(this, "dropTargetRef", null), c(this, "dropTargetNode", true), c(this, "dropTargetOptionsInternal", null), c(this, "unsubscribeDropTarget", true), c(this, "lastConnectedHandlerId", null), c(this, "lastConnectedDropTarget", null), c(this, "lastConnectedDropTargetOptions", null), c(this, "backend", true), this.backend = t
  }
  return l(module, [{
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
  }]), module
}()