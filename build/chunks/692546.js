/** Chunk was on 63141 **/
/** chunk id: 692546, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var i, Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk902704 = require("./902704.js"),
  Chunk846519 = require("./846519.js"),
  Chunk13245 = require("./13245.js"),
  Chunk808506 = require("./808506.js"),
  Chunk372679 = require("./372679.js"),
  Chunk671999 = require("./671999.js"),
  Chunk358085 = require("./358085.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
    x: 0,
    y: 0
  },
  y = false;

function _(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  y = true, m.x = t, m.y = n
}
let O = new Map;

function b(e, t) {
  if (null == t) O.delete(e), 0 === O.size && (window.removeEventListener("mousemove", _), y = false);
  else {
    let n = O.get(e);
    if (null != n && (0, a.Z)(n.zone, t.zone)) return;
    0 === O.size && window.addEventListener("mousemove", _), O.set(e, t)
  }
  if (f.isPlatformEmbedded)
    if (u.default.isCurrentPidOutOfProcess()) {
      let e = Array.from(O.values()).map(e => {
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
      d.Z.setClickZones(e)
    } else {
      var n;
      let e = (0, p.M)();
      if (null == e) return;
      e.broadcastCommand({
        message: "set_click_zones",
        zones: Array.from(O.values()).map(e => {
          let {
            zone: t
          } = e;
          return t
        })
      }), n = e, v || (n.setClickZoneCallback((e, t, n) => {
        let i = O.get(e);
        null != i && (y || (m.x = t, m.y = n), i.instance.click())
      }), v = true)
    }
}
let v = false;
class E extends(i = Chunk647438.PureComponent) {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), b(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return Chunk647438.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, Chunk671999.B)("click", m.x, m.y);
    (0, Chunk671999.J)(module, m.x, m.y)
  }
  constructor(...e) {
    super(...e), g(this, "zone", o().uniqueId("ClickArea")), g(this, "interval", new c.Xp), g(this, "updateZone", () => {
      let e = this.props.contentDomRef.current;
      if ((0, l.kK)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: r
        } = e.getBoundingClientRect();
        b(this.zone, {
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
g(E, "defaultProps", {
  observe: true,
  observeInterval: 1e3
})