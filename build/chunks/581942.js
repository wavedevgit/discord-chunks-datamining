/** Chunk was on web.js **/
/** chunk id: 581942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => _
});
var Chunk269605 = require("./269605.js"),
  Chunk796598 = require("./796598.js"),
  Chunk198420 = require("./198420.js"),
  Chunk41010 = require("./41010.js"),
  Chunk461927 = require("./461927.js");

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? l(Object(n), true).forEach(function(t) {
      p(e, t, n[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    })
  }
  return e
}

function u(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function d(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function f(e, t, n) {
  return t && d(e.prototype, t), n && d(e, n), e
}

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var _ = function() {
  function e(t, n, o) {
    var l = this;
    u(this, e), p(this, "options", true), p(this, "actions", true), p(this, "monitor", true), p(this, "registry", true), p(this, "enterLeaveCounter", true), p(this, "sourcePreviewNodes", new Map), p(this, "sourcePreviewNodeOptions", new Map), p(this, "sourceNodes", new Map), p(this, "sourceNodeOptions", new Map), p(this, "dragStartSourceIds", null), p(this, "dropTargetIds", []), p(this, "dragEnterTargetIds", []), p(this, "currentNativeSource", null), p(this, "currentNativeHandle", null), p(this, "currentDragSourceNode", null), p(this, "altKeyPressed", false), p(this, "mouseMoveTimeoutTimer", null), p(this, "asyncEndDragFrameId", null), p(this, "dragOverTargetIds", null), p(this, "getSourceClientOffset", function(e) {
      var t = l.sourceNodes.get(e);
      return t && (0, i.Dg)(t) || null
    }), p(this, "endDragNativeItem", function() {
      l.isDraggingNativeItem() && (l.actions.endDrag(), l.currentNativeHandle && l.registry.removeSource(l.currentNativeHandle), l.currentNativeHandle = null, l.currentNativeSource = null)
    }), p(this, "isNodeInDocument", function(e) {
      return !!(e && l.document && l.document.body && l.document.body.contains(e))
    }), p(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var e = l.currentDragSourceNode;
      !(null == e || l.isNodeInDocument(e)) && l.clearCurrentDragSourceNode() && l.monitor.isDragging() && l.actions.endDrag()
    }), p(this, "handleTopDragStartCapture", function() {
      l.clearCurrentDragSourceNode(), l.dragStartSourceIds = []
    }), p(this, "handleTopDragStart", function(e) {
      if (!e.defaultPrevented) {
        var t = l.dragStartSourceIds;
        l.dragStartSourceIds = null;
        var n = (0, i.b$)(e);
        l.monitor.isDragging() && l.actions.endDrag(), l.actions.beginDrag(t || [], {
          publishSource: false,
          getSourceClientOffset: l.getSourceClientOffset,
          clientOffset: n
        });
        var r = e.dataTransfer,
          o = (0, a.c)(r);
        if (l.monitor.isDragging()) {
          if (r && "function" == typeof r.setDragImage) {
            var s = l.monitor.getSourceId(),
              c = l.sourceNodes.get(s),
              u = l.sourcePreviewNodes.get(s) || c;
            if (u) {
              var d = l.getCurrentSourcePreviewNodeOptions(),
                f = d.anchorX,
                p = d.anchorY,
                _ = d.offsetX,
                h = d.offsetY,
                m = {
                  anchorX: f,
                  anchorY: p
                },
                g = {
                  offsetX: _,
                  offsetY: h
                },
                E = (0, i.yA)(c, u, n, m, g);
              r.setDragImage(u, E.x, E.y)
            }
          }
          try {
            null == r || r.setData("application/json", {})
          } catch (e) {}
          l.setCurrentDragSourceNode(e.target), l.getCurrentSourcePreviewNodeOptions().captureDraggingState ? l.actions.publishDragSource() : setTimeout(function() {
            return l.actions.publishDragSource()
          }, 0)
        } else if (o) l.beginDragNativeItem(o);
        else {
          if (r && !r.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute("draggable"))) return;
          e.preventDefault()
        }
      }
    }), p(this, "handleTopDragEndCapture", function() {
      l.clearCurrentDragSourceNode() && l.monitor.isDragging() && l.actions.endDrag()
    }), p(this, "handleTopDragEnterCapture", function(e) {
      if (l.dragEnterTargetIds = [], !(!l.enterLeaveCounter.enter(e.target) || l.monitor.isDragging())) {
        var t = e.dataTransfer,
          n = (0, a.c)(t);
        n && l.beginDragNativeItem(n, t)
      }
    }), p(this, "handleTopDragEnter", function(e) {
      var t = l.dragEnterTargetIds;
      if (l.dragEnterTargetIds = [], l.monitor.isDragging()) {
        l.altKeyPressed = e.altKey, t.length > 0 && l.actions.hover(t, {
          clientOffset: (0, i.b$)(e)
        });
        var n = t.some(function(e) {
          return l.monitor.canDropOnTarget(e)
        });
        n && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect()))
      }
    }), p(this, "handleTopDragOverCapture", function() {
      l.dragOverTargetIds = []
    }), p(this, "handleTopDragOver", function(e) {
      var t = l.dragOverTargetIds;
      if (l.dragOverTargetIds = [], !l.monitor.isDragging()) {
        e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none");
        return
      }
      l.altKeyPressed = e.altKey, l.actions.hover(t || [], {
        clientOffset: (0, i.b$)(e)
      }), (t || []).some(function(e) {
        return l.monitor.canDropOnTarget(e)
      }) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = l.getCurrentDropEffect())) : l.isDraggingNativeItem() ? e.preventDefault() : (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "none"))
    }), p(this, "handleTopDragLeaveCapture", function(e) {
      l.isDraggingNativeItem() && e.preventDefault(), l.enterLeaveCounter.leave(e.target) && l.isDraggingNativeItem() && setTimeout(function() {
        return l.endDragNativeItem()
      }, 0)
    }), p(this, "handleTopDropCapture", function(e) {
      if (l.dropTargetIds = [], l.isDraggingNativeItem()) {
        var t;
        e.preventDefault(), null == (t = l.currentNativeSource) || t.loadDataTransfer(e.dataTransfer)
      } else(0, a.c)(e.dataTransfer) && e.preventDefault();
      l.enterLeaveCounter.reset()
    }), p(this, "handleTopDrop", function(e) {
      var t = l.dropTargetIds;
      l.dropTargetIds = [], l.actions.hover(t, {
        clientOffset: (0, i.b$)(e)
      }), l.actions.drop({
        dropEffect: l.getCurrentDropEffect()
      }), l.isDraggingNativeItem() ? l.endDragNativeItem() : l.monitor.isDragging() && l.actions.endDrag()
    }), p(this, "handleSelectStart", function(e) {
      var t = e.target;
      "function" != typeof t.dragDrop || "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable || (e.preventDefault(), t.dragDrop())
    }), this.options = new s.s(n, o), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new r.C(this.isNodeInDocument)
  }
  return f(e, [{
    key: "profile",
    value: function() {
      var e, t;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: (null == (e = this.dragStartSourceIds) ? true : e.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: (null == (t = this.dragOverTargetIds) ? true : t.length) || 0
      }
    }
  }, {
    key: "window",
    get: function() {
      return this.options.window
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document
    }
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement
    }
  }, {
    key: "setup",
    value: function() {
      var e = this.rootElement;
      if (true !== e) {
        if (e.__isReactDndBackendSetUp) throw Error("Cannot have two HTML5 backends at the same time.");
        e.__isReactDndBackendSetUp = true, this.addEventListeners(e)
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var e, t = this.rootElement;
      true !== t && (t.__isReactDndBackendSetUp = false, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId && (null == (e = this.window) || e.cancelAnimationFrame(this.asyncEndDragFrameId)))
    }
  }, {
    key: "connectDragPreview",
    value: function(e, t, n) {
      var r = this;
      return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t),
        function() {
          r.sourcePreviewNodes.delete(e), r.sourcePreviewNodeOptions.delete(e)
        }
    }
  }, {
    key: "connectDragSource",
    value: function(e, t, n) {
      var r = this;
      this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
      var i = function(t) {
          return r.handleDragStart(t, e)
        },
        a = function(e) {
          return r.handleSelectStart(e)
        };
      return t.setAttribute("draggable", "true"), t.addEventListener("dragstart", i), t.addEventListener("selectstart", a),
        function() {
          r.sourceNodes.delete(e), r.sourceNodeOptions.delete(e), t.removeEventListener("dragstart", i), t.removeEventListener("selectstart", a), t.setAttribute("draggable", "false")
        }
    }
  }, {
    key: "connectDropTarget",
    value: function(e, t) {
      var n = this,
        r = function(t) {
          return n.handleDragEnter(t, e)
        },
        i = function(t) {
          return n.handleDragOver(t, e)
        },
        a = function(t) {
          return n.handleDrop(t, e)
        };
      return t.addEventListener("dragenter", r), t.addEventListener("dragover", i), t.addEventListener("drop", a),
        function() {
          t.removeEventListener("dragenter", r), t.removeEventListener("dragover", i), t.removeEventListener("drop", a)
        }
    }
  }, {
    key: "addEventListeners",
    value: function(e) {
      e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, true), e.addEventListener("dragend", this.handleTopDragEndCapture, true), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, true), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, true), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, true), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, true))
    }
  }, {
    key: "removeEventListeners",
    value: function(e) {
      e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, true), e.removeEventListener("dragend", this.handleTopDragEndCapture, true), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, true), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, true), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, true))
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var e = this.monitor.getSourceId(),
        t = this.sourceNodeOptions.get(e);
      return c({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, t || {})
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var e = this.monitor.getSourceId();
      return c({
        anchorX: .5,
        anchorY: .5,
        captureDraggingState: false
      }, this.sourcePreviewNodeOptions.get(e) || {})
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var e = this.monitor.getItemType();
      return Object.keys(o).some(function(t) {
        return o[t] === e
      })
    }
  }, {
    key: "beginDragNativeItem",
    value: function(e, t) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = (0, a.h)(e, t), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle])
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(e) {
      var t = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
      var n = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var e;
        return null == (e = t.rootElement) ? true : e.addEventListener("mousemove", t.endDragIfSourceWasRemovedFromDOM, true)
      }, n)
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var e;
          null == (e = this.window) || e.clearTimeout(this.mouseMoveTimeoutTimer || true), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true)
        }
        return this.mouseMoveTimeoutTimer = null, true
      }
      returnfalse
    }
  }, {
    key: "handleDragStart",
    value: function(e, t) {
      e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(t))
    }
  }, {
    key: "handleDragEnter",
    value: function(e, t) {
      this.dragEnterTargetIds.unshift(t)
    }
  }, {
    key: "handleDragOver",
    value: function(e, t) {
      null === this.dragOverTargetIds && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(t)
    }
  }, {
    key: "handleDrop",
    value: function(e, t) {
      this.dropTargetIds.unshift(t)
    }
  }]), e
}()