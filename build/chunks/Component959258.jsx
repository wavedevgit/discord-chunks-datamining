/** Chunk was on web.js **/
/** chunk id: 959258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u,
  v: () => d
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk731965 = require("./731965.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 100,
  l = .7;
class c {
  handleVisible(e, t) {
    var n, r;
    if (this.visibleComponents.has(e.target)) return;
    let i = Math.abs(e.intersectionRect.bottom - Number(null == (n = e.rootBounds) ? true : n.bottom)) < Math.abs(e.intersectionRect.top - Number(null == (r = e.rootBounds) ? true : r.top));
    i ? this.visibleComponents = new Set([e.target, ...this.visibleComponents]) : this.visibleComponents.add(e.target);
    let a = i || this.animatingComponents.size < s;
    a ? this.animatingComponents.add(e.target) : this.animatingComponents.delete(e.target), t.updateState(a), a && this.visibleComponents.size > s && this.stopNodeFromAnimating()
  }
  handleNotVisible(e, t) {
    this.visibleComponents.has(e.target) && (t.updateState(false), this.visibleComponents.delete(e.target), this.animatingComponents.delete(e.target), this.potentiallyAnimateNewNode())
  }
  stopNodeFromAnimating() {
    let e = Array.from(this.visibleComponents);
    for (let t = e.length - 1; t >= 0; t--) {
      let n = e[t];
      if (this.animatingComponents.has(n)) {
        let e = this.registeredNodes.get(n);
        null == e || e.updateState(false), this.animatingComponents.delete(n);
        return
      }
    }
  }
  potentiallyAnimateNewNode() {
    if (this.animatingComponents.size < s && this.visibleComponents.size > this.animatingComponents.size) {
      for (let e of this.visibleComponents)
        if (!this.animatingComponents.has(e)) {
          let t = this.registeredNodes.get(e);
          null == t || t.updateState(true), this.animatingComponents.add(e);
          return
        }
    }
  }
  registerNode(e, t) {
    var n;
    if (this.registeredNodes.has(e)) throw Error("ThoughtfullyAnimated.registeredNode: Unable to register an already registered node...");
    return this.registeredNodes.set(e, {
      updateState: t
    }), null == (n = this.observer) || n.observe(e), () => {
      this.unregisterNode(e)
    }
  }
  unregisterNode(e) {
    var t;
    this.registeredNodes.delete(e), this.animatingComponents.delete(e), this.visibleComponents.delete(e), null == (t = this.observer) || t.unobserve(e), this.potentiallyAnimateNewNode()
  }
  cleanUp() {
    var e;
    null == (e = this.observer) || e.disconnect(), this.registeredNodes.clear(), this.visibleComponents.clear()
  }
  constructor(e = false) {
    if (o(this, "registeredNodes", new Map), o(this, "visibleComponents", new Set), o(this, "animatingComponents", new Set), o(this, "observer", true), e) return;
    this.observer = new window.IntersectionObserver(e => {
      (0, a.j)(() => {
        e.forEach(e => {
          let t = this.registeredNodes.get(e.target);
          null != t && (e.intersectionRatio >= l ? this.handleVisible(e, t) : this.handleNotVisible(e, t))
        })
      })
    }, {
      threshold: l
    })
  }
}
let u = Chunk473749.createContext({
  manager: new c(true),
  useThoughtfullyAnimated: () => ({
    animate: true,
    registerRef: () => {}
  })
});

function d(e) {
  let {
    children: t
  } = e, [n] = i.useState(() => {
    let e = new c;
    return {
      manager: e,
      useThoughtfullyAnimated() {
        let t = i.useRef(null),
          [n, r] = i.useState(false);
        return {
          animate: n,
          registerRef: i.useCallback(n => {
            null != t.current && e.unregisterNode(t.current), t.current = n, null != t.current && e.registerNode(t.current, r)
          }, [])
        }
      }
    }
  });
  return i.useEffect(() => () => n.manager.cleanUp(), [n.manager]), (0, r.jsx)(u.Provider, {
    value: n,
    children: t
  })
}