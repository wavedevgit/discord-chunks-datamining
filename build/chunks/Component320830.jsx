/** Chunk was on 27978 **/
/** chunk id: 320830, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk748780 = require("./748780.js"),
  Chunk873546 = require("./873546.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk401449 = require("./401449.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let p = (0, Chunk624138.Mg)(Chunk477690.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  f = {
    friction: 10,
    tension: 130
  },
  _ = function(e) {
    return class extends i.Component {
      componentDidMount() {
        o.tq || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
      }
      componentWillUnmount() {
        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
      }
      componentWillAppear(e) {
        this.state.shouldAnimate ? this.animateTo(1, e) : e()
      }
      componentWillEnter(e) {
        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(1, e), 40)) : e()
      }
      componentWillLeave(e) {
        this.state.shouldAnimate ? this.animateTo(0, e) : e()
      }
      animateTo(e, t) {
        a.Z.spring(this.anim, m({
          toValue: e
        }, f)).start(t)
      }
      getAnimatedStyle(e) {
        return this.state.shouldAnimate ? {
          opacity: this.anim,
          transform: e ? true : [{
            scale: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [1.05, 1]
            })
          }, {
            translateY: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: ["-70px", "0px"]
            })
          }, {
            translateZ: 0
          }]
        } : null
      }
      render() {
        return (0, r.jsx)("div", {
          className: h.wrapper,
          children: (0, r.jsx)(u.Sfi.Consumer, {
            children: t => {
              let {
                reducedMotion: n
              } = t;
              return (0, r.jsx)(a.Z.div, {
                className: h.animatedDiv,
                style: this.getAnimatedStyle(n.enabled),
                children: (0, r.jsx)(e, m({}, this.props))
              })
            }
          })
        })
      }
      constructor(...e) {
        super(...e), g(this, "timeout", true), g(this, "anim", new a.Z.Value(0)), g(this, "state", {
          shouldAnimate: !o.tq
        }), g(this, "handleResize", () => {
          let e = window.innerWidth > p;
          !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({
            shouldAnimate: e
          })
        }), g(this, "handleResizeDebounced", l()(this.handleResize, 60))
      }
    }
  }