/** Chunk was on web.js **/
/** chunk id: 313271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => s
}), require("./896048.js");
var Chunk621466 = require("./621466.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {
  root: null,
  rootMargin: "0px",
  threshold: .5
};
class s {
  isVisible(e) {
    return null == this._observer || this._visibleComponents.has(e)
  }
  observe(e, t) {
    let n = this._observer;
    if (null == n) return;
    this.unobserve(e);
    let i = t.current;
    (0, r.vq)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), n.observe(i))
  }
  unobserve(e) {
    let t = this._observer;
    if (null == t) return;
    let n = this._components.get(e);
    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
  }
  constructor(e = a) {
    i(this, "_observer", true), i(this, "_options", true), i(this, "_nodes", new WeakMap), i(this, "_components", new WeakMap), i(this, "_visibleComponents", new WeakSet), i(this, "_handleEntries", e => {
      e.forEach(e => {
        let t;
        if (null != e.isIntersecting) t = e.isIntersecting;
        else {
          let {
            threshold: n
          } = this._options;
          t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
        }
        let n = this._nodes.get(e.target);
        if (null != n) {
          let e = false;
          t ? this._visibleComponents.has(n) || (this._visibleComponents.add(n), e = true) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = true), e && n.forceUpdate()
        }
      })
    }), this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
  }
}