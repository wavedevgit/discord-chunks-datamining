/** Chunk was on web.js **/
/** chunk id: 333031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk13245 = require("./13245.js"),
  Chunk928518 = require("./928518.js"),
  Chunk237997 = require("./237997.js"),
  Chunk358085 = require("./358085.js"),
  Chunk837268 = require("./837268.js"),
  Chunk338949 = require("./338949.js"),
  Chunk561064 = require("./561064.js"),
  Chunk501787 = require("./501787.js"),
  Chunk149123 = require("./149123.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e, t) {
  return {
    name: e,
    left: Math.ceil(t.left),
    top: Math.ceil(t.top),
    right: Math.ceil(t.right),
    bottom: Math.ceil(t.bottom)
  }
}
class I {
  observe(e) {
    var t;
    if (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver) {
      this.mutationObserver = new MutationObserver(this.handleMutations);
      let e = _.Z.getWindow(b.$J);
      null != e && this.mutationObserver.observe(null == e ? true : e.document.body, {
        subtree: true,
        attributes: true
      })
    }
    let n = this.zones.get(e);
    null != n && this.resizeObserver.unobserve(n.element);
    let r = e.getBoundingClientRect();
    this.zones.set(e, {
      element: e,
      zone: v(null != (t = null == n ? true : n.zone.name) ? t : (0, c.Z)(), r)
    }), this.elements.add(e), this.resizeObserver.observe(e), this.updateZones()
  }
  unobserve(e) {
    var t;
    null != this.zones.get(e) && (null == (t = this.resizeObserver) || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones())
  }
  updateZones() {
    if (!Chunk358085.isPlatformEmbedded) return;
    let e = Chunk928518.Z.getWindow(Chunk501787.$J);
    null != module && Chunk13245.Z.setClickZones(Array.from(this.zones.values()).map(t => {
      let {
        zone: n
      } = t;
      return {
        name: n.name,
        left: n.left / e.innerWidth,
        top: n.top / e.innerHeight,
        right: n.right / e.innerWidth,
        bottom: n.bottom / e.innerHeight
      }
    }))
  }
  cleanUp() {
    var e, t;
    this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null == (e = this.resizeObserver) || module.disconnect(), null == (t = this.mutationObserver) || exports.disconnect(), this.updateZones()
  }
  constructor(e) {
    O(this, "resizeObserver", true), O(this, "mutationObserver", true), O(this, "zones", new Map), O(this, "elements", new Set), O(this, "window", true), O(this, "handleResize", () => {
      this.globalUpdate()
    }), O(this, "handleMutations", () => {
      this.globalUpdate()
    }), O(this, "globalUpdate", l()(() => {
      let e = false;
      for (let [t, n] of this.zones) {
        let r = t.getBoundingClientRect(),
          i = v(n.zone.name, r);
        (0, d.Z)(i, n.zone) || (e = true, n = {
          element: n.element,
          zone: i
        }, this.zones.set(t, n))
      }
      e && this.updateZones()
    }, 250, {
      trailing: true,
      maxWait: 1e3
    })), this.window = e
  }
}
let S = Chunk647438.createContext(new I((0, Chunk561064.i)()));

function T(e) {
  let {
    observe: t = true,
    className: n,
    style: a,
    children: s
  } = e, l = i.useContext(S), c = (0, u.e7)([g.Z], () => g.Z.hasRenderDebugMode(m.GO.ClickZones)), d = (0, u.e7)([p.default], () => p.default.disableClickableRegions), [{
    refHandler: f,
    setObserve: _
  }] = i.useState(() => {
    let e = null;
    return {
      setObserve(t) {
        null != e && (t ? l.observe(e) : l.unobserve(e))
      },
      refHandler(t) {
        null != e && l.unobserve(e), e = t
      }
    }
  });
  return i.useLayoutEffect(() => {
    d ? _(false) : _(t)
  }, [t, _, d]), (0, r.jsx)("div", {
    ref: f,
    style: a,
    className: o()(n, y.clickable, c && y.debugMode),
    "data-click-zone": true,
    children: s
  })
}