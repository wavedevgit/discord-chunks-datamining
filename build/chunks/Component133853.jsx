/** Chunk was on 86383 **/
/** chunk id: 133853, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var s, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk788524 = require("./788524.js");

function u(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class p extends(s = Chunk647438.Component) {
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
      opacity: module,
      transform: exports.enabled ? true : [{
        translateY: module.interpolate({
          inputRange: [0, 1],
          outputRange: ["-100px", "0px"]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk748780.Z.a, {
      href: Chunk981631.Z5c.INDEX,
      target: "_blank",
      rel: "noopener",
      className: r()(Chunk788524.logo, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...t) {
    super(...t), u(this, "anim", new o.Z.Value(0)), u(this, "animate", t => {
      o.Z.spring(this.anim, {
        toValue: t,
        friction: 10,
        tension: 100
      }).start()
    })
  }
}
u(p, "contextType", Chunk481060.Sfi)