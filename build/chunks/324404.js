/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(995295),
  i = n(374470);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  observe(e) {
    let t = this._observer;
    if (null == t) return;
    this.unobserve(e);
    let n = (0, r.findDOMNode)(e);
    (0, i.k)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
  }
  unobserve(e) {
    let t = this._observer;
    if (null == t) return;
    let n = this._components.get(e);
    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
  }
  constructor(e = a) {
    o(this, "_observer", void 0), o(this, "_options", void 0), o(this, "_nodes", new WeakMap), o(this, "_components", new WeakMap), o(this, "_visibleComponents", new WeakSet), o(this, "_handleEntries", e => {
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
          let e = !1;
          t ? this._visibleComponents.has(n) || (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
        }
      })
    }), this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
  }
}