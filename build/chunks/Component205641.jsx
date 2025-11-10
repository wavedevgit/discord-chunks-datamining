/** Chunk was on 384 **/
/** chunk id: 205641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk82923 = require("./82923.js"),
  Chunk463299 = require("./463299.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var p = ((i = p || {})[i.HOVERING = 0] = "HOVERING", i[i.FLYING = 1] = "FLYING", i);
let f = Object.freeze({
  HOVERING: {
    Y_DURATION: 1500,
    Y_VALUE: false,
    Y_VALUE_MODIFIER: false,
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY_FALLING: .8,
    FIRE_MAX_INTENSITY_FALLING: 1,
    FIRE_MIN_INTENSITY_RISING: 1,
    FIRE_MAX_INTENSITY_RISING: 1.2
  },
  FALLING: {
    Y_VALUE: 10,
    FIRE_COUNT: 10,
    FIRE_VALUE: .2
  },
  STAGING: {
    DURATION: 500,
    Y_VALUE: 22,
    SHAKE_COUNT: 10,
    SHAKE_INTENSITY: 2,
    FIRE_COUNT: 4,
    FIRE_MIN_INTENSITY: .6,
    FIRE_MAX_INTENSITY: 1
  },
  FLYING: {
    DURATION: 500,
    Y_VALUE: false,
    Y_EASING: Chunk82923.Z.Easing.bezier(.46, .01, 1, false),
    X_VALUE: 200,
    X_EASING: Chunk82923.Z.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function h(e, t, n, r) {
  return u.Z.sequence(d().times(t, i => u.Z.timing(e, {
    toValue: r(i),
    duration: n / t
  })))
}
class b extends(r = Chunk647438.Component) {
  componentDidMount() {
    this.startAnimation()
  }
  componentWillUnmount() {
    this.isUnmounted = true
  }
  componentDidUpdate(e) {
    this.props.stage !== e.stage && this.startAnimation()
  }
  startAnimation() {
    switch (null != this.currentAnimation && this.currentAnimation.stop(), this.props.stage) {
      case 0:
        return this.startHoverAnimate();
      case 1:
        return this.flyAnimate()
    }
  }
  resetAnimation() {
    this.y.setValue(0), this.x.setValue(0), this.opacity.setValue(1), this.fireScale.setValue(1)
  }
  startHoverAnimate() {
    this.resetAnimation(), this.hoverAnimate(f.HOVERING.Y_VALUE)
  }
  createFireAnimation(e, t, n, r) {
    return h(this.fireScale, e, t, () => d().random(n, r))
  }
  async hoverAnimate(e) {
    var t;
    if (0 !== this.props.stage || this.isUnmounted) return;
    let n = e > 1,
      r = n ? f.HOVERING.FIRE_MIN_INTENSITY_FALLING : f.HOVERING.FIRE_MIN_INTENSITY_RISING,
      i = n ? f.HOVERING.FIRE_MAX_INTENSITY_FALLING : f.HOVERING.FIRE_MAX_INTENSITY_RISING,
      l = this.createFireAnimation(f.HOVERING.FIRE_COUNT, f.HOVERING.Y_DURATION, r, i),
      a = u.Z.timing(this.y, {
        toValue: e,
        duration: f.HOVERING.Y_DURATION,
        easing: u.Z.Easing.inOut(u.Z.Easing.ease)
      });
    this.currentAnimation = u.Z.parallel([a, l]), await (null == (t = this.currentAnimation) ? true : t.start()), this.hoverAnimate(e * f.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, n) {
    return h(this.x, e, t, e => d().random(1, n) * (e % 2 == 0 ? 1 : false))
  }
  async flyAnimate() {
    var e;
    let t = Chunk82923.Z.spring(this.y, {
        toValue: f.FALLING.Y_VALUE,
        overshootClamping: true
      }),
      n = Chunk82923.Z.spring(this.fireScale, {
        toValue: f.FALLING.FIRE_VALUE,
        overshootClamping: true
      }),
      r = Chunk82923.Z.parallel([exports, require]),
      i = Chunk82923.Z.timing(this.y, {
        toValue: f.STAGING.Y_VALUE,
        duration: f.STAGING.DURATION
      }),
      l = this.createShakeAnimation(f.STAGING.SHAKE_COUNT, f.STAGING.DURATION, f.STAGING.SHAKE_INTENSITY),
      a = this.createFireAnimation(f.STAGING.FIRE_COUNT, f.STAGING.DURATION, f.STAGING.FIRE_MIN_INTENSITY, f.STAGING.FIRE_MAX_INTENSITY),
      s = Chunk82923.Z.parallel([i, Chunk951288, Chunk647438]),
      o = Chunk82923.Z.timing(this.y, {
        toValue: f.FLYING.Y_VALUE,
        duration: f.FLYING.DURATION,
        easing: f.FLYING.Y_EASING
      }),
      c = Chunk82923.Z.timing(this.x, {
        toValue: f.FLYING.X_VALUE,
        duration: f.FLYING.DURATION,
        easing: f.FLYING.X_EASING
      }),
      d = Chunk82923.Z.timing(this.opacity, {
        toValue: f.FLYING.OPACITY_VALUE,
        duration: f.FLYING.DURATION / f.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: f.FLYING.DURATION / f.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      g = this.createFireAnimation(f.FLYING.FIRE_COUNT, f.FLYING.DURATION, f.FLYING.FIRE_MIN_INTENSITY, f.FLYING.FIRE_MAX_INTENSITY),
      m = Chunk82923.Z.parallel([o, Chunk392711, d, Chunk463299]);
    if (this.currentAnimation = Chunk82923.Z.sequence([r, Chunk120356, m]), await (null == (e = this.currentAnimation) ? true : module.start()), !this.isUnmounted) {
      let {
        onFlyingComplete: e
      } = this.props;
      null != module && module()
    }
  }
  getWumpusStyle() {
    return {
      transform: [{
        translateY: this.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }, {
        translateX: this.x.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }],
      opacity: this.opacity
    }
  }
  getFireStyle() {
    return {
      transform: [{
        scale: this.fireScale
      }]
    }
  }
  render() {
    let {
      className: e,
      style: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk82923.Z.div, {
      className: o()(Chunk463299.animation, module),
      style: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            m(e, t, n[t])
          })
        }
        return e
      }({}, exports, this.getWumpusStyle()),
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk463299.fireTopWrapper,
        children: (0, Chunk951288.jsx)(Chunk82923.Z.div, {
          className: Chunk463299.fire,
          style: this.getFireStyle()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk463299.fireBottomWrapper,
        children: (0, Chunk951288.jsx)(Chunk82923.Z.div, {
          className: Chunk463299.fire,
          style: this.getFireStyle()
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk463299.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "x", new u.Z.Value(0)), m(this, "y", new u.Z.Value(0)), m(this, "opacity", new u.Z.Value(1)), m(this, "fireScale", new u.Z.Value(1)), m(this, "currentAnimation", null), m(this, "isUnmounted", false)
  }
}
m(b, "Stages", p);
let x = b