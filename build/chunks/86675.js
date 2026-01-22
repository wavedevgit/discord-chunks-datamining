/** Chunk was on web.js **/
/** chunk id: 86675, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  A: () => i
});
class i {
  createDragPreview(e) {
    if (null == this.container || null == this.svg || null == this.foreignObject) return;
    let {
      width: t,
      height: n
    } = e.getBoundingClientRect();
    this.svg.setAttribute("viewBox", "0 0 ".concat(t, " ").concat(n)), this.svg.setAttribute("width", "".concat(t)), this.svg.setAttribute("height", "".concat(n)), this.foreignObject.setAttribute("x", "0"), this.foreignObject.setAttribute("y", "0"), this.foreignObject.setAttribute("width", "".concat(t)), this.foreignObject.setAttribute("height", "".concat(n));
    let r = e.cloneNode(true);
    this.foreignObject.appendChild(r)
  }
  render(e) {
    let t = this.container;
    if (null == t) return;
    let n = e.getSourceClientOffset();
    null == n || e.isDragging() && (t.style.position = "fixed", t.style.left = "".concat(n.x + 30, "px"), t.style.top = "".concat(n.y + 15, "px"))
  }
  clear() {
    null != this.foreignObject && (this.foreignObject.innerHTML = "")
  }
  constructor(e) {
    r(this, "container", true), r(this, "svg", true), r(this, "foreignObject", true), this.container = null == e ? true : e.createElement("div");
    const t = this.svg = null == e ? true : e.createElement("svg");
    null != t && (t.style.contain = "paint"), this.foreignObject = null == e ? true : e.createElement("foreignObject"), null != this.container && null != this.svg && null != this.foreignObject && (this.container.className = "drag-previewer", this.container.style.cssText = "z-index: 1000; filter: drop-shadow(0 0 0 var(--background-surface-high)) drop-shadow(var(--elevation-high))", this.svg.appendChild(this.foreignObject), this.container.appendChild(this.svg), null == e || e.body.appendChild(this.container))
  }
}