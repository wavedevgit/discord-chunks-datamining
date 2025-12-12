/** Chunk was on web.js **/
/** chunk id: 304445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./415506.js");
var Chunk481386 = require("./481386.js"),
  Chunk38618 = require("./38618.js"),
  Chunk905423 = require("./905423.js"),
  Chunk622143 = require("./622143.js"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 10;
class d {
  initialize() {
    this.cleanup(), this.unlistenHistory = (0, Chunk703656.s1)().listen(this.handleRouteChange);
    let {
      pathname: e
    } = (0, Chunk703656.s1)().location;
    Chunk905423.Z.getState().resetPath(module), this.unlistenKeyboardChange = Chunk905423.Z.subscribe(this.handleKeybindRouteChange), Chunk38618.Z.addChangeListener(this.handleConnectionChange)
  }
  executeRouteRewrites(e, t) {
    if (this.routeChangeCount += 1, this.routeChangeCount < u)
      for (let n of this.rewrites) {
        let i = (0, s.s1)().location.pathname,
          o = n(e, t);
        if (null != o) return (0, r.n)({
          message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
          data: {
            replacePath: o.path,
            previousPath: i
          }
        }), (0, s.dL)(o.path, o.state), true
      } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
    returnfalse
  }
  cleanup() {
    var e, t, n, r;
    null == (e = (t = this).unlistenHistory) || module.call(exports), this.unlistenHistory = true, null == (n = (r = this).unlistenKeyboardChange) || require.call(Chunk481386), this.unlistenKeyboardChange = true, Chunk38618.Z.removeChangeListener(this.handleConnectionChange)
  }
  addRouteChangeListener(e) {
    return null != this.unlistenHistory && e((0, s.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
  }
  addRouteRewriter(e) {
    if (null != this.unlistenHistory) {
      let t = e((0, s.s1)().location, (0, s.s1)().action);
      null != t && (0, s.dL)(t.path, t.state)
    }
    return this.rewrites.add(e), () => this.removeRouteRewriter(e)
  }
  removeRouteChangeListener(e) {
    this.listeners.delete(e)
  }
  removeRouteRewriter(e) {
    this.rewrites.delete(e)
  }
  getHistory() {
    return (0, Chunk703656.s1)()
  }
  constructor() {
    c(this, "unlistenHistory", true), c(this, "unlistenKeyboardChange", true), c(this, "rewrites", new Set), c(this, "listeners", new Set), c(this, "routeChangeCount", 0), c(this, "timer", false), c(this, "connected", false), c(this, "handleConnectionChange", () => {
      let e = Chunk38618.Z.isConnected(),
        t = module && !this.connected;
      this.connected = module, exports && (this.routeChangeCount = 0, this.executeRouteRewrites((0, Chunk703656.s1)().location, "REPLACE"))
    }), c(this, "handleRouteChange", (e, t) => {
      if (this.executeRouteRewrites(e, t)) return;
      if (!(0, a.r)(e)) return void(0, s.dL)(l.Z5c.ME);
      let n = o.Z.getState();
      for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners)) try {
        r(e, t)
      } catch (e) {
        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
      }
      this.routeChangeCount = 0
    }), c(this, "handleKeybindRouteChange", e => {
      let {
        path: t
      } = e;
      false !== this.timer && clearTimeout(this.timer), null != t && (this.timer = setTimeout(this.flushRoute, 200))
    }), c(this, "flushRoute", () => {
      clearTimeout(this.timer);
      let e = Chunk905423.Z.getState();
      null != module.path && (0, Chunk703656.uL)(module.path)
    })
  }
}
let f = new d