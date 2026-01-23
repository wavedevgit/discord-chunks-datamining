/** Chunk was on 86142 **/
/** chunk id: 765624, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk111956 = require("./111956.js"),
  l = require.n(Chunk111956),
  Chunk615300 = require("./615300.js"),
  Chunk607399 = require("./607399.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk240248 = require("./240248.js"),
  Chunk299198 = require("./299198.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let m = (0, Chunk240248.xI)(Chunk319060.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  f = {
    friction: 10,
    tension: 130
  },
  _ = function(e) {
    return class extends i.Component {
      componentDidMount() {
        o.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
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
        a.A.spring(this.anim, g({
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
          className: h.i,
          children: (0, r.jsx)(u.CZY.Consumer, {
            children: t => {
              let {
                reducedMotion: n
              } = t;
              return (0, r.jsx)(a.A.div, {
                className: h.l,
                style: this.getAnimatedStyle(n.enabled),
                children: (0, r.jsx)(e, g({}, this.props))
              })
            }
          })
        })
      }
      constructor(...e) {
        super(...e), p(this, "timeout", true), p(this, "anim", new a.A.Value(0)), p(this, "state", {
          shouldAnimate: !o.Fr
        }), p(this, "handleResize", () => {
          let e = window.innerWidth > m;
          !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({
            shouldAnimate: e
          })
        }), p(this, "handleResizeDebounced", l()(this.handleResize, 60))
      }
    }
  }