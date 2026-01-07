/** Chunk was on web.js **/
/** chunk id: 53566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => o
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk372817 = require("./372817.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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
class o {
  disconnect() {
    window.removeEventListener("keydown", this.handleDraggedElementKeyDown, {
      capture: true
    })
  }
  hoverNode(e) {
    var t;
    let n = null == (t = Array.from(this.targetNodes.entries()).find(t => {
      let [n, r] = t;
      return e === r
    })) ? true : t[0];
    null != n && (this.actions.hover([n], {
      clientOffset: a(e)
    }), this.currentHoveredNode = e, this.previewer.render(this.monitor), this.announcer.announceHover(e, n), null == e || e.focus())
  }
  getNextDropTarget() {
    var e;
    return this.focusManager.getNextFocusableElement({
      wrap: false,
      from: null != (e = this.currentHoveredNode) ? e : true
    })
  }
  getPreviousDropTarget() {
    var e;
    return this.focusManager.getPreviousFocusableElement({
      wrap: false,
      from: null != (e = this.currentHoveredNode) ? e : true
    })
  }
  getViableTargets(e) {
    return this.getAllowedTargets(e).sort((e, t) => {
      if (e === t) return 0;
      let n = e.compareDocumentPosition(t);
      return (n & (Node.DOCUMENT_POSITION_FOLLOWING | n & Node.DOCUMENT_POSITION_CONTAINED_BY)) != 0 ? false : +((n & (Node.DOCUMENT_POSITION_PRECEDING | n & Node.DOCUMENT_POSITION_CONTAINS)) != 0)
    })
  }
  getAllowedTargets(e) {
    return null == this.monitor.getItemType() ? Array.from(e.values()) : Array.from(e).reduce((e, t) => {
      let [n, r] = t;
      return this.manager.getMonitor().canDropOnTarget(n) && e.push(r), e
    }, [])
  }
  constructor(e, t, n, a, o) {
    i(this, "targetNodes", true), i(this, "manager", true), i(this, "previewer", true), i(this, "announcer", true), i(this, "currentHoveredNode", true), i(this, "focusManager", true), i(this, "actions", true), i(this, "monitor", true), i(this, "handleDraggedElementKeyDown", true), this.targetNodes = t, this.manager = n, this.previewer = a, this.announcer = o, this.handleDraggedElementKeyDown = async e => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getPreviousDropTarget());
          return;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault(), e.stopPropagation(), this.hoverNode(await this.getNextDropTarget())
      }
    }, this.currentHoveredNode = e, this.focusManager = (0, r.E)({
      getFocusableElements: () => this.getViableTargets(t),
      getActiveElement: () => e.ownerDocument.activeElement
    }), this.actions = n.getActions(), this.monitor = n.getMonitor(), window.addEventListener("keydown", this.handleDraggedElementKeyDown, {
      capture: true
    })
  }
}