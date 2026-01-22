/** Chunk was on web.js **/
/** chunk id: 302614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  l = require.n(Chunk111956),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk684013 = require("./684013.js"),
  Chunk869146 = require("./869146.js"),
  Chunk256415 = require("./256415.js"),
  Chunk723702 = require("./723702.js"),
  Chunk41984 = require("./41984.js"),
  Chunk127242 = require("./127242.js"),
  Chunk545807 = require("./545807.js"),
  Chunk392164 = require("./392164.js"),
  Chunk722240 = require("./722240.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e, t) {
  return {
    name: e,
    left: Math.ceil(t.left),
    top: Math.ceil(t.top),
    right: Math.ceil(t.right),
    bottom: Math.ceil(t.bottom)
  }
}
class v {
  observe(e) {
    var t;
    if (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver) {
      this.mutationObserver = new MutationObserver(this.handleMutations);
      let e = p.A.getWindow(b.f);
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
      zone: A(null != (t = null == n ? true : n.zone.name) ? t : (0, c.A)(), r)
    }), this.elements.add(e), this.resizeObserver.observe(e), this.updateZones()
  }
  unobserve(e) {
    var t;
    null != this.zones.get(e) && (null == (t = this.resizeObserver) || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones())
  }
  updateZones() {
    if (!h.isPlatformEmbedded) return;
    let e = p.A.getWindow(b.f);
    null != e && f.A.setClickZones(Array.from(this.zones.values()).map(t => {
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
    this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null == (e = this.resizeObserver) || e.disconnect(), null == (t = this.mutationObserver) || t.disconnect(), this.updateZones()
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
          i = A(n.zone.name, r);
        (0, d.A)(i, n.zone) || (e = true, n = {
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
let S = Chunk64700.createContext(new v((0, Chunk545807.b)()));

function I(e) {
  let {
    observe: t = true,
    className: n,
    style: a,
    children: o
  } = e, l = i.useContext(S), c = (0, u.bG)([g.A], () => g.A.hasRenderDebugMode(m.x7.ClickZones)), d = (0, u.bG)([_.default], () => _.default.disableClickableRegions), [{
    refHandler: f,
    setObserve: p
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
    d ? p(false) : p(t)
  }, [t, p, d]), (0, r.jsx)("div", {
    ref: f,
    style: a,
    className: s()(n, y.v, c && y.p),
    "data-click-zone": true,
    children: o
  })
}