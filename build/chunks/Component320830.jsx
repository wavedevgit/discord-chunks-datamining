/** Chunk was on 27978 **/
/** chunk id: 320830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk748780 = require("./748780.js"),
  Chunk873546 = require("./873546.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk955393 = require("./955393.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
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
let m = (0, Chunk624138.Mg)(Chunk477690.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  g = {
    friction: 10,
    tension: 130
  },
  _ = function(e) {
    return class extends i.Component {
      componentDidMount() {
        a.tq || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
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
        s.Z.spring(this.anim, f({
          toValue: e
        }, g)).start(t)
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
              return (0, r.jsx)(s.Z.div, {
                style: this.getAnimatedStyle(n.enabled),
                children: (0, r.jsx)(e, f({}, this.props))
              })
            }
          })
        })
      }
      constructor(...e) {
        super(...e), p(this, "timeout", true), p(this, "anim", new s.Z.Value(0)), p(this, "state", {
          shouldAnimate: !a.tq
        }), p(this, "handleResize", () => {
          let e = window.innerWidth > m;
          !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({
            shouldAnimate: e
          })
        }), p(this, "handleResizeDebounced", o()(this.handleResize, 60))
      }
    }
  }