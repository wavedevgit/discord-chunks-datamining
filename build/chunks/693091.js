/** Chunk was on web.js **/
/** chunk id: 693091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AS: () => a,
  S4: () => s,
  X4: () => _
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  updateState(e, t) {
    this.items = e;
    let n = this.locked !== t;
    this.locked = t, this.computeLayout(n)
  }
  initialize(e) {
    if (null == this.resizeObserver) {
      for (let [, {
          element: n
        }] of(this.resizeObserver = new e.ResizeObserver(this.handleResize), this.listeners)) {
        var t;
        null == (t = this.resizeObserver) || t.observe(n)
      }
      this.queueCompute()
    }
  }
  cleanUp() {
    var e;
    null == (e = this.resizeObserver) || module.disconnect(), this.resizeObserver = true, this.listeners.clear()
  }
  queueCompute() {
    this.queuedCompute || (this.queuedCompute = true, Promise.resolve().then(() => this.computeLayout()))
  }
  computeLayout() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this.queuedCompute = false;
    let t = 0,
      n = 0;
    for (let r of this.items) {
      let i = this.listeners.get(Chunk647438.notification.id);
      if (null == Chunk481060) continue;
      let {
        offsetHeight: o
      } = Chunk481060.element;
      (Chunk481060.top !== exports || Chunk481060.height !== o || Chunk481060.index !== require) && (e = true), Chunk481060.top = exports, Chunk481060.height = o, Chunk481060.index = require, 0 === exports && (this.matchHeight !== o && (e = true), this.matchHeight = o), t += o + 8, require++
    }
    module && this.broadcastLayoutUpdates()
  }
  broadcastLayoutUpdates() {
    for (let e of this.items) {
      let t = this.listeners.get(module.notification.id);
      null != exports && exports.callback({
        locked: this.locked,
        matchHeight: this.matchHeight,
        height: exports.height,
        top: exports.top,
        index: exports.index
      })
    }
  }
  subscribe(e, t, n) {
    var r;
    this.listeners.set(e, {
      notificationId: e,
      callback: n,
      element: t,
      height: 0,
      top: 0,
      index: 0
    }), null == (r = this.resizeObserver) || r.observe(t), this.queueCompute()
  }
  unsubscribe(e) {
    var t;
    let n = this.listeners.get(e);
    null != n && (null == (t = this.resizeObserver) || t.unobserve(n.element), this.listeners.delete(e), this.queueCompute())
  }
  getLayoutSpecs(e) {
    return this.listeners.get(e)
  }
  constructor(e) {
    o(this, "resizeObserver", true), o(this, "listeners", new Map), o(this, "queuedCompute", false), o(this, "items", []), o(this, "matchHeight", 0), o(this, "locked", true), o(this, "handleResize", e => {
      this.computeLayout()
    }), this.locked = e
  }
}
let s = Chunk647438.createContext(new a(true));

function l(e, t) {
  return t && e > 4 ? 0 : t ? Math.min(1 - e / 4, 1) : 1
}

function c(e, t) {
  return t ? Math.min(1 - e / 4, 1) : 1
}

function u(e, t, n) {
  return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n
}

function d(e, t) {
  return t && e > 0 ? 0 : 1
}
let f = {
  mass: .8,
  friction: 25,
  tension: 320
};

function _(e, t, n) {
  let [o, a] = (0, i.q_F)(() => ({
    from: {
      opacity: 0,
      scale: 1,
      transform: 0,
      height: 0,
      contentOpacity: 1
    }
  }), true, []), _ = r.useRef(a), p = r.useContext(s), h = r.useMemo(() => {
    let t = false;
    return n => {
      null == n ? p.unsubscribe(e) : p.subscribe(e, n, e => {
        let {
          locked: n,
          matchHeight: r,
          height: i,
          top: o,
          index: a
        } = e, {
          current: s
        } = _, p = {
          opacity: l(a, n),
          scale: c(a, n),
          transform: u(a, n, o),
          contentOpacity: d(a, n),
          height: n ? r : i
        };
        s({
          from: t ? true : {
            opacity: 0,
            scale: 1.1,
            transform: -((n ? r : i) * 1),
            contentOpacity: 1,
            height: n ? r : i
          },
          to: p,
          config: f
        }), t = true
      })
    }
  }, [e, p]);
  return r.useLayoutEffect(() => {
    if (t === i.pJH.YEETED) {
      let t = p.getLayoutSpecs(e);
      if (null == t) return void n();
      _.current({
        to: {
          scale: .8,
          opacity: 0,
          transform: u(t.index, p.locked, t.top) + (p.locked ? 0 : t.height / 2)
        },
        config: f
      }), setTimeout(n, 300)
    }
  }, [t, n, e, p]), {
    ref: h,
    springs: o
  }
}