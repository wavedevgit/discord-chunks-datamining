/** Chunk was on 63141 **/
/** chunk id: 692546, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var i, Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
let b = {
    x: 0,
    y: 0
  },
  m = false;

function y(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  m = true, b.x = t, b.y = n
}
let v = new Map;

function O(e, t) {
  if (null == t) v.delete(e), 0 === v.size && (window.removeEventListener("mousemove", y), m = false);
  else {
    let n = v.get(e);
    if (null != n && (0, l.Z)(n.zone, t.zone)) return;
    0 === v.size && window.addEventListener("mousemove", y), v.set(e, t)
  }
  if (p.isPlatformEmbedded)
    if (u.default.isCurrentPidOutOfProcess()) {
      let e = Array.from(v.values()).map(e => {
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
      let e = (0, f.M)();
      if (null == e) return;
      e.broadcastCommand({
        message: "set_click_zones",
        zones: Array.from(v.values()).map(e => {
          let {
            zone: t
          } = e;
          return t
        })
      }), n = e, E || (n.setClickZoneCallback((e, t, n) => {
        let i = v.get(e);
        null != i && (m || (b.x = t, b.y = n), i.instance.click())
      }), E = true)
    }
}
let E = false;
class x extends(i = Chunk473749.PureComponent) {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), O(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return Chunk473749.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, Chunk671999.B)("click", b.x, b.y);
    (0, Chunk671999.J)(module, b.x, b.y)
  }
  constructor(...e) {
    super(...e), g(this, "zone", s().uniqueId("ClickArea")), g(this, "interval", new c.Xp), g(this, "updateZone", () => {
      let e = this.props.contentDomRef.current;
      if ((0, o.kK)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: r
        } = e.getBoundingClientRect();
        O(this.zone, {
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
g(x, "defaultProps", {
  observe: true,
  observeInterval: 1e3
})