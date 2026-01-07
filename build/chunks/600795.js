/** Chunk was on web.js **/
/** chunk id: 600795, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tm: () => d,
  ZP: () => _
}), require("./415506.js"), require("./388685.js");
var Chunk547545 = require("./547545.js"),
  Chunk444591 = require("./444591.js"),
  Chunk53566 = require("./53566.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [" ", "Enter"],
  l = ["Escape"];

function c(e) {
  e.preventDefault(), e.stopImmediatePropagation()
}

function u(e, t) {
  return t.includes(e.key)
}

function d(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return !!n && false === e.isTrusted || (null == (t = e.key) ? true : t.toLowerCase()) === "d" && (e.metaKey || e.ctrlKey) && !e.altKey
}

function f(e) {
  if (null == e) return {
    x: 0,
    y: 0
  };
  let t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
  if (null == t) return {
    x: 0,
    y: 0
  };
  let {
    top: n,
    left: r
  } = t.getBoundingClientRect();
  return {
    x: r,
    y: n
  }
}
class p {
  setup() {
    var e;
    if (p.isSetUp) throw Error("Cannot have two Keyboard backends at the same time.");
    p.isSetUp = true, this._handlingFirstEvent = true, null == (e = this.context.window) || e.addEventListener("keydown", this.handleGlobalKeyDown, {
      capture: true
    })
  }
  teardown() {
    var e;
    p.isSetUp = false, null == (e = this.context.window) || e.removeEventListener("keydown", this.handleGlobalKeyDown, {
      capture: true
    }), this.endDrag()
  }
  setDndMode(e) {
    var t;
    null == (t = this.options) || t.onDndModeChanged(e)
  }
  profile() {
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodes: this.sourceNodes.size
    }
  }
  connectDragSource(e, t) {
    let n = this.handleDragStart.bind(this, e);
    return this.sourceNodes.set(e, t), t.addEventListener("keydown", n), () => {
      this.sourceNodes.delete(e), t.removeEventListener("keydown", n)
    }
  }
  connectDragPreview(e, t, n) {
    return this.sourcePreviewNodeOptions.set(e, n), this.sourcePreviewNodes.set(e, t), () => {
      this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e)
    }
  }
  connectDropTarget(e, t) {
    return this.targetNodes.set(e, t), t.addEventListener("keydown", this.handleDrop), t.tabIndex = Math.max(false, t.tabIndex), () => {
      this.targetNodes.delete(e), t.removeEventListener("keydown", this.handleDrop)
    }
  }
  endDrag(e) {
    var t;
    null != e && c(e), null == (t = this._navigator) || t.disconnect(), this._previewer.clear(), this.monitor.isDragging() && this.actions.endDrag(), this.setDndMode(false)
  }
  constructor(e, t, n) {
    o(this, "manager", true), o(this, "actions", true), o(this, "monitor", true), o(this, "context", true), o(this, "options", true), o(this, "sourceNodes", true), o(this, "sourcePreviewNodes", true), o(this, "sourcePreviewNodeOptions", true), o(this, "targetNodes", true), o(this, "_navigator", true), o(this, "_previewer", true), o(this, "_announcer", true), o(this, "_handlingFirstEvent", false), o(this, "handleGlobalKeyDown", e => {
      this.monitor.isDragging() && u(e, l) && (this.endDrag(e), this._announcer.announceCancel())
    }), o(this, "getSourceClientOffset", e => f(this.sourceNodes.get(e))), o(this, "handleDragStart", (e, t) => {
      var n;
      if (!d(t, this._handlingFirstEvent) || (this._handlingFirstEvent = false, !this.monitor.canDragSource(e))) return;
      if (this.monitor.isDragging()) return void this.actions.publishDragSource();
      c(t);
      let r = this.sourceNodes.get(e);
      null != r && (this._navigator = new a.n(r, this.targetNodes, this.manager, this._previewer, this._announcer), this._previewer.createDragPreview(null != (n = this.sourcePreviewNodes.get(e)) ? n : r), this.actions.beginDrag([e], {
        clientOffset: this.getSourceClientOffset(e),
        getSourceClientOffset: this.getSourceClientOffset,
        publishSource: false
      }), this._previewer.render(this.monitor), this.setDndMode(true), this._announcer.announceDrag(r, e))
    }), o(this, "handleDrop", e => {
      u(e, s) && (this.actions.drop(), this.endDrag(e), this._announcer.announceDrop())
    }), this.manager = e, this.actions = e.getActions(), this.monitor = e.getMonitor(), this.context = t, this.options = n, this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this._previewer = new i.Z(t.document), this._announcer = new r.Z(null == n ? true : n.announcer)
  }
}
o(p, "isSetUp", true);
let _ = (e, t, n) => new p(e, t, n)