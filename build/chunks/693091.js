/** Chunk was on web.js **/
/** chunk id: 693091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AS: () => p,
  S4: () => _,
  X4: () => y
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk522474 = require("./522474.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk830917 = require("./830917.js"),
  Chunk501787 = require("./501787.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Chunk710845.Z("NotificationLayoutManager");
class p {
  updateState(e, t) {
    this.items = e;
    let n = this.locked !== t;
    this.locked = t, this.computeLayout(n)
  }
  initialize(e) {
    if (null == this.resizeObserver) {
      for (let [, {
          element: t
        }] of(this.resizeObserver = new e.ResizeObserver(this.handleResize), this.listeners)) this.resizeObserver.observe(t);
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
      let i = this.listeners.get(Chunk473749.notification.id);
      if (null == Chunk481060) continue;
      let {
        offsetHeight: o
      } = Chunk481060.element;
      (Chunk481060.top !== exports || Chunk481060.height !== Chunk710845 || Chunk481060.index !== require) && (e = true), Chunk481060.top = exports, Chunk481060.height = Chunk710845, Chunk481060.index = require, 0 === exports && (this.matchHeight !== Chunk710845 && (e = true), this.matchHeight = Chunk710845), t += Chunk710845 + 8, require++
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
    d(this, "resizeObserver", true), d(this, "listeners", new Map), d(this, "queuedCompute", false), d(this, "items", []), d(this, "matchHeight", 0), d(this, "locked", true), d(this, "handleResize", e => {
      this.computeLayout()
    }), this.locked = e
  }
}
let _ = Chunk473749.createContext(new p(true));

function m(e, t) {
  return t && e > 4 ? 0 : t ? Math.min(1 - e / 4, 1) : 1
}

function h(e, t) {
  return t ? Math.min(1 - e / 4, 1) : 1
}

function g(e, t, n) {
  return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n
}

function E(e, t) {
  return t && e > 0 ? 0 : 1
}
let b = {
  mass: .8,
  friction: 25,
  tension: 320
};

function y(e, t, n) {
  let [o, d] = (0, i.q_F)(() => ({
    from: {
      opacity: 0,
      scale: 1,
      transform: 0,
      height: 0,
      contentOpacity: 1
    }
  }), true, []), p = r.useRef(d), y = r.useContext(_), O = r.useMemo(() => {
    let t = false;
    return n => {
      null == n ? y.unsubscribe(e) : y.subscribe(e, n, n => {
        var r;
        let {
          locked: i,
          matchHeight: o,
          height: d,
          top: _,
          index: y
        } = n;
        if (null == (r = s.default.getCurrentUser()) ? true : r.isStaff()) {
          let t = a.Z.getWindow(u.$J),
            n = null != t ? l.Z.windowSize((0, c.ZY)(t)) : true;
          f.info("Notification layout update", {
            id: e,
            locked: i,
            matchHeight: o,
            height: d,
            top: _,
            index: y
          }, n)
        }
        let {
          current: O
        } = p, v = {
          opacity: m(y, i),
          scale: h(y, i),
          transform: g(y, i, _),
          contentOpacity: E(y, i),
          height: i ? o : d
        };
        O({
          from: t ? true : {
            opacity: 0,
            scale: 1.1,
            transform: -((i ? o : d) * 1),
            contentOpacity: 1,
            height: i ? o : d
          },
          to: v,
          config: b
        }), t = true
      })
    }
  }, [e, y]);
  return r.useLayoutEffect(() => {
    if (t === i.pJH.YEETED) {
      let t = y.getLayoutSpecs(e);
      if (null == t) return void n();
      p.current({
        to: {
          scale: .8,
          opacity: 0,
          transform: g(t.index, y.locked, t.top) + (y.locked ? 0 : t.height / 2)
        },
        config: b
      }), setTimeout(n, 300)
    }
  }, [t, n, e, y]), {
    ref: O,
    springs: o
  }
}