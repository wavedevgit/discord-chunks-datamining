/** Chunk was on 76977 **/
n.d(t, {
  Z: () => x
}), n(47120);
var i, r = n(192379),
  o = n(392711),
  s = n.n(o),
  l = n(995295),
  a = n(374470),
  c = n(902704),
  d = n(846519),
  u = n(13245),
  h = n(808506),
  p = n(372679),
  f = n(671999),
  g = n(358085);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let y = {
    x: 0,
    y: 0
  },
  _ = !1;

function v(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  _ = !0, y.x = t, y.y = n
}
let O = new Map;

function b(e, t) {
  if (null == t) O.delete(e), 0 === O.size && (window.removeEventListener("mousemove", v), _ = !1);
  else {
    let n = O.get(e);
    if (null != n && (0, c.Z)(n.zone, t.zone)) return;
    0 === O.size && window.addEventListener("mousemove", v), O.set(e, t)
  }
  if (g.isPlatformEmbedded) {
    if (h.default.isFocusedPidOutOfProcess()) {
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
      u.Z.setClickZones(e)
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
      }), n = e, S || (n.setClickZoneCallback((e, t, n) => {
        let i = O.get(e);
        null != i && (_ || (y.x = t, y.y = n), i.instance.click())
      }), S = !0)
    }
  }
}
let S = !1;
class x extends(i = r.PureComponent) {
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
    return r.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, f.B)("click", y.x, y.y);
    (0, f.J)(e, y.x, y.y)
  }
  constructor(...e) {
    super(...e), m(this, "zone", s().uniqueId("ClickArea")), m(this, "interval", new d.Xp), m(this, "updateZone", () => {
      let e = (0, l.findDOMNode)(this);
      if ((0, a.k)(e)) {
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
m(x, "defaultProps", {
  observe: !0,
  observeInterval: 1e3
})