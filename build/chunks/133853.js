/** Chunk was on 69773 **/
n.d(t, {
  Z: () => p
}), n(47120);
var r, a = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(748780),
  c = n(481060),
  d = n(981631),
  u = n(913018);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(r = o.Component) {
  componentDidMount() {
    this.props.show && this.animate(1)
  }
  componentDidUpdate(e) {
    e.show !== this.props.show && this.animate(+!!this.props.show)
  }
  getAnimatedStyle() {
    let {
      anim: e
    } = this, {
      reducedMotion: t
    } = this.context;
    return {
      opacity: e,
      transform: t.enabled ? void 0 : [{
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["-100px", "0px"]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  render() {
    return (0, a.jsx)(s.Z.a, {
      href: d.Z5c.INDEX,
      target: "_blank",
      rel: "noopener",
      className: i()(u.logo, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...e) {
    super(...e), f(this, "anim", new s.Z.Value(0)), f(this, "animate", e => {
      s.Z.spring(this.anim, {
        toValue: e,
        friction: 10,
        tension: 100
      }).start()
    })
  }
}
f(p, "contextType", c.Sfi)