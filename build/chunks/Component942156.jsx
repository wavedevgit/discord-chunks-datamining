/** Chunk was on 99673 **/
/** chunk id: 942156, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  h = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk505802 = require("./505802.js");

function u(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class p extends(s = Chunk64700.Component) {
  componentDidMount() {
    this.props.show && this.animate(1)
  }
  componentDidUpdate(t) {
    t.show !== this.props.show && this.animate(+!!this.props.show)
  }
  getAnimatedStyle() {
    let {
      anim: t
    } = this, {
      reducedMotion: e
    } = this.context;
    return {
      opacity: t,
      transform: e.enabled ? true : [{
        translateY: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["-100px", "0px"]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  render() {
    return (0, n.jsx)(l.A.a, {
      href: c.BVt.INDEX,
      target: "_blank",
      rel: "noopener",
      className: h()(d.w, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...t) {
    super(...t), u(this, "anim", new l.A.Value(0)), u(this, "animate", t => {
      l.A.spring(this.anim, {
        toValue: t,
        friction: 10,
        tension: 100
      }).start()
    })
  }
}
u(p, "contextType", Chunk397927.CZY)