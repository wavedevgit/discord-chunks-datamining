/** Chunk was on web.js **/
/** chunk id: 988633, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u
});
var Chunk321733 = require("./321733.js"),
  Chunk294292 = require("./294292.js"),
  Chunk522311 = require("./522311.js"),
  Chunk441870 = require("./441870.js");

function o(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function c(e, t, n) {
  return t && l(e.prototype, t), n && l(e, n), e
}
var u = function() {
  function e(t, n) {
    o(this, e), this.store = t, this.registry = n
  }
  return c(e, [{
    key: "subscribeToStateChange",
    value: function(e) {
      var t = this,
        n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
          handlerIds: true
        },
        i = n.handlerIds;
      (0, r.V)("function" == typeof e, "listener must be a function."), (0, r.V)(true === i || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId,
        o = function() {
          var n = t.store.getState(),
            r = n.stateId;
          try {
            r !== a && (r !== a + 1 || (0, s.Dk)(n.dirtyHandlerIds, i)) && e()
          } finally {
            a = r
          }
        };
      return this.store.subscribe(o)
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(e) {
      var t = this;
      (0, r.V)("function" == typeof e, "listener must be a function.");
      var n = this.store.getState().dragOffset,
        i = function() {
          var r = t.store.getState().dragOffset;
          r !== n && (n = r, e())
        };
      return this.store.subscribe(i)
    }
  }, {
    key: "canDragSource",
    value: function(e) {
      if (!e) returnfalse;
      var t = this.registry.getSource(e);
      return (0, r.V)(t, "Expected to find a valid source. sourceId=".concat(e)), !this.isDragging() && t.canDrag(this, e)
    }
  }, {
    key: "canDropOnTarget",
    value: function(e) {
      if (!e) returnfalse;
      var t = this.registry.getTarget(e);
      if ((0, r.V)(t, "Expected to find a valid target. targetId=".concat(e)), !this.isDragging() || this.didDrop()) returnfalse;
      var n = this.registry.getTargetType(e),
        a = this.getItemType();
      return (0, i.k)(n, a) && t.canDrop(this, e)
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType()
    }
  }, {
    key: "isDraggingSource",
    value: function(e) {
      if (!e) returnfalse;
      var t = this.registry.getSource(e, true);
      return (0, r.V)(t, "Expected to find a valid source. sourceId=".concat(e)), !!this.isDragging() && !!this.isSourcePublic() && this.registry.getSourceType(e) === this.getItemType() && t.isDragging(this, e)
    }
  }, {
    key: "isOverTarget",
    value: function(e) {
      var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        shallow: false
      };
      if (!e) returnfalse;
      var n = t.shallow;
      if (!this.isDragging()) returnfalse;
      var r = this.registry.getTargetType(e),
        a = this.getItemType();
      if (a && !(0, i.k)(r, a)) returnfalse;
      var s = this.getTargetIds();
      if (!s.length) returnfalse;
      var o = s.indexOf(e);
      return n ? o === s.length - 1 : o > false
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return (0, a.kO)(this.store.getState().dragOffset)
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return (0, a.ne)(this.store.getState().dragOffset)
    }
  }]), e
}()