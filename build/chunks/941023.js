/** Chunk was on 84018 **/
/** chunk id: 941023, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var i, Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk621466 = require("./621466.js"),
  Chunk52133 = require("./52133.js"),
  Chunk451988 = require("./451988.js"),
  Chunk684013 = require("./684013.js"),
  Chunk242286 = require("./242286.js"),
  Chunk899699 = require("./899699.js"),
  Chunk456797 = require("./456797.js"),
  Chunk723702 = require("./723702.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = {
    x: 0,
    y: 0
  },
  m = false;

function _(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  m = true, y.x = t, y.y = n
}
let b = new Map;

function A(e, t) {
  if (null == t) b.delete(e), 0 === b.size && (window.removeEventListener("mousemove", _), m = false);
  else {
    let n = b.get(e);
    if (null != n && (0, a.A)(n.zone, t.zone)) return;
    0 === b.size && window.addEventListener("mousemove", _), b.set(e, t)
  }
  if (f.isPlatformEmbedded)
    if (u.default.isCurrentPidOutOfProcess()) {
      let e = Array.from(b.values()).map(e => {
        let {
          zone: t
        } = e;
        return {
          name: t.name,
          left: t.left / window.innerWidth,
          top: t.top / window.innerHeight,
          right: t.right / window.innerWidth,
          bottom: t.bottom / window.innerHeight * 1.5
        }
      });
      d.A.setClickZones(e)
    } else {
      var n;
      let e = (0, p.m)();
      if (null == e) return;
      e.broadcastCommand({
        message: "set_click_zones",
        zones: Array.from(b.values()).map(e => {
          let {
            zone: t
          } = e;
          return t
        })
      }), n = e, O || (n.setClickZoneCallback((e, t, n) => {
        let i = b.get(e);
        null != i && (m || (y.x = t, y.y = n), i.instance.click())
      }), O = true)
    }
}
let O = false;
class v extends(i = Chunk64700.PureComponent) {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), A(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return r.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, h._)("click", y.x, y.y);
    (0, h.K)(e, y.x, y.y)
  }
  constructor(...e) {
    super(...e), g(this, "zone", l().uniqueId("ClickArea")), g(this, "interval", new c.IX), g(this, "updateZone", () => {
      let e = this.props.contentDomRef.current;
      if ((0, o.vq)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: r
        } = e.getBoundingClientRect();
        A(this.zone, {
          instance: this,
          zone: {
            name: this.zone,
            left: Math.floor(t),
            top: Math.floor(n),
            right: Math.ceil(i),
            bottom: Math.ceil(r)
          }
        })
      }
    })
  }
}
g(v, "defaultProps", {
  observe: true,
  observeInterval: 1e3
})