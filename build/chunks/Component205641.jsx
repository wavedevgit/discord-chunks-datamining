/** Chunk was on 9536 **/
/** chunk id: 205641, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk82923 = require("./82923.js"),
  Chunk583943 = require("./583943.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var m = ((i = m || {})[i.HOVERING = 0] = "HOVERING", i[i.FLYING = 1] = "FLYING", i);
let b = Object.freeze({
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

function p(e, t, n, r) {
  return u.Z.sequence(d().times(t, i => u.Z.timing(e, {
    toValue: r(i),
    duration: n / t
  })))
}
class h extends(r = Chunk473749.Component) {
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
    this.resetAnimation(), this.hoverAnimate(b.HOVERING.Y_VALUE)
  }
  createFireAnimation(e, t, n, r) {
    return p(this.fireScale, e, t, () => d().random(n, r))
  }
  async hoverAnimate(e) {
    var t;
    if (0 !== this.props.stage || this.isUnmounted) return;
    let n = e > 1,
      r = n ? b.HOVERING.FIRE_MIN_INTENSITY_FALLING : b.HOVERING.FIRE_MIN_INTENSITY_RISING,
      i = n ? b.HOVERING.FIRE_MAX_INTENSITY_FALLING : b.HOVERING.FIRE_MAX_INTENSITY_RISING,
      l = this.createFireAnimation(b.HOVERING.FIRE_COUNT, b.HOVERING.Y_DURATION, r, i),
      a = u.Z.timing(this.y, {
        toValue: e,
        duration: b.HOVERING.Y_DURATION,
        easing: u.Z.Easing.inOut(u.Z.Easing.ease)
      });
    this.currentAnimation = u.Z.parallel([a, l]), await (null == (t = this.currentAnimation) ? true : t.start()), this.hoverAnimate(e * b.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, n) {
    return p(this.x, e, t, e => d().random(1, n) * (e % 2 == 0 ? 1 : false))
  }
  async flyAnimate() {
    var e;
    let t = Chunk82923.Z.spring(this.y, {
        toValue: b.FALLING.Y_VALUE,
        overshootClamping: true
      }),
      n = Chunk82923.Z.spring(this.fireScale, {
        toValue: b.FALLING.FIRE_VALUE,
        overshootClamping: true
      }),
      r = Chunk82923.Z.parallel([exports, require]),
      i = Chunk82923.Z.timing(this.y, {
        toValue: b.STAGING.Y_VALUE,
        duration: b.STAGING.DURATION
      }),
      l = this.createShakeAnimation(b.STAGING.SHAKE_COUNT, b.STAGING.DURATION, b.STAGING.SHAKE_INTENSITY),
      a = this.createFireAnimation(b.STAGING.FIRE_COUNT, b.STAGING.DURATION, b.STAGING.FIRE_MIN_INTENSITY, b.STAGING.FIRE_MAX_INTENSITY),
      s = Chunk82923.Z.parallel([i, Chunk54381, Chunk473749]),
      o = Chunk82923.Z.timing(this.y, {
        toValue: b.FLYING.Y_VALUE,
        duration: b.FLYING.DURATION,
        easing: b.FLYING.Y_EASING
      }),
      c = Chunk82923.Z.timing(this.x, {
        toValue: b.FLYING.X_VALUE,
        duration: b.FLYING.DURATION,
        easing: b.FLYING.X_EASING
      }),
      d = Chunk82923.Z.timing(this.opacity, {
        toValue: b.FLYING.OPACITY_VALUE,
        duration: b.FLYING.DURATION / b.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: b.FLYING.DURATION / b.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      g = this.createFireAnimation(b.FLYING.FIRE_COUNT, b.FLYING.DURATION, b.FLYING.FIRE_MIN_INTENSITY, b.FLYING.FIRE_MAX_INTENSITY),
      f = Chunk82923.Z.parallel([o, Chunk392711, d, Chunk583943]);
    if (this.currentAnimation = Chunk82923.Z.sequence([r, Chunk120356, f]), await (null == (e = this.currentAnimation) ? true : module.start()), !this.isUnmounted) {
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
    return (0, Chunk54381.jsxs)(Chunk82923.Z.div, {
      className: o()(Chunk583943.animation, module),
      style: function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            f(e, t, n[t])
          })
        }
        return e
      }({}, exports, this.getWumpusStyle()),
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk583943.fireTopWrapper,
        children: (0, Chunk54381.jsx)(Chunk82923.Z.div, {
          className: Chunk583943.fire,
          style: this.getFireStyle()
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk583943.fireBottomWrapper,
        children: (0, Chunk54381.jsx)(Chunk82923.Z.div, {
          className: Chunk583943.fire,
          style: this.getFireStyle()
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk583943.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "x", new u.Z.Value(0)), f(this, "y", new u.Z.Value(0)), f(this, "opacity", new u.Z.Value(1)), f(this, "fireScale", new u.Z.Value(1)), f(this, "currentAnimation", null), f(this, "isUnmounted", false)
  }
}
f(h, "Stages", m);
let x = h