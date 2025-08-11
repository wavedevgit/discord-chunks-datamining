/** Chunk was on web.js **/
/** chunk id: 524962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c
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
  c = function() {
    function e(t) {
      i(this, e), s(this, "internalMonitor", true), s(this, "targetId", null), this.internalMonitor = t.getMonitor()
    }
    return a(module, [{
      key: "receiveHandlerId",
      value: function(e) {
        this.targetId = e
      }
    }, {
      key: "getHandlerId",
      value: function() {
        return this.targetId
      }
    }, {
      key: "subscribeToStateChange",
      value: function(e, t) {
        return this.internalMonitor.subscribeToStateChange(e, t)
      }
    }, {
      key: "canDrop",
      value: function() {
        if (!this.targetId) returnfalse;
        (0, Chunk573654.k)(!l, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
        try {
          return l = true, this.internalMonitor.canDropOnTarget(this.targetId)
        } finally {
          l = false
        }
      }
    }, {
      key: "isOver",
      value: function(e) {
        return !!this.targetId && this.internalMonitor.isOverTarget(this.targetId, e)
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