/** Chunk was on 69773 **/
/** chunk id: 133853, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk827954 = require("./827954.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends(a = Chunk473749.Component) {
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
    return (0, Chunk54381.jsx)(Chunk748780.Z.a, {
      href: Chunk981631.Z5c.INDEX,
      target: "_blank",
      rel: "noopener",
      className: s()(Chunk827954.logo, this.props.className),
      style: this.getAnimatedStyle()
    })
  }
  constructor(...e) {
    super(...e), f(this, "anim", new c.Z.Value(0)), f(this, "animate", e => {
      c.Z.spring(this.anim, {
        toValue: e,
        friction: 10,
        tension: 100
      }).start()
    })
  }
}
f(p, "contextType", Chunk481060.Sfi)