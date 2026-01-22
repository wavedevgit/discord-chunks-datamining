/** Chunk was on 47841 **/
/** chunk id: 474001, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk593100 = require("./593100.js"),
  Chunk6697 = require("./6697.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var b = ((i = b || {})[i.HOVERING = 0] = "HOVERING", i[i.FLYING = 1] = "FLYING", i);
let m = Object.freeze({
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
    Y_EASING: Chunk593100.A.Easing.bezier(.46, .01, 1, false),
    X_VALUE: 200,
    X_EASING: Chunk593100.A.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function p(e, t, n, r) {
  return u.A.sequence(d().times(t, i => u.A.timing(e, {
    toValue: r(i),
    duration: n / t
  })))
}
class x extends(r = Chunk64700.Component) {
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
    this.resetAnimation(), this.hoverAnimate(m.HOVERING.Y_VALUE)
  }
  createFireAnimation(e, t, n, r) {
    return p(this.fireScale, e, t, () => d().random(n, r))
  }
  async hoverAnimate(e) {
    var t;
    if (0 !== this.props.stage || this.isUnmounted) return;
    let n = e > 1,
      r = n ? m.HOVERING.FIRE_MIN_INTENSITY_FALLING : m.HOVERING.FIRE_MIN_INTENSITY_RISING,
      i = n ? m.HOVERING.FIRE_MAX_INTENSITY_FALLING : m.HOVERING.FIRE_MAX_INTENSITY_RISING,
      l = this.createFireAnimation(m.HOVERING.FIRE_COUNT, m.HOVERING.Y_DURATION, r, i),
      s = u.A.timing(this.y, {
        toValue: e,
        duration: m.HOVERING.Y_DURATION,
        easing: u.A.Easing.inOut(u.A.Easing.ease)
      });
    this.currentAnimation = u.A.parallel([s, l]), await (null == (t = this.currentAnimation) ? true : t.start()), this.hoverAnimate(e * m.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, n) {
    return p(this.x, e, t, e => d().random(1, n) * (e % 2 == 0 ? 1 : false))
  }
  async flyAnimate() {
    var e;
    let t = u.A.spring(this.y, {
        toValue: m.FALLING.Y_VALUE,
        overshootClamping: true
      }),
      n = u.A.spring(this.fireScale, {
        toValue: m.FALLING.FIRE_VALUE,
        overshootClamping: true
      }),
      r = u.A.parallel([t, n]),
      i = u.A.timing(this.y, {
        toValue: m.STAGING.Y_VALUE,
        duration: m.STAGING.DURATION
      }),
      l = this.createShakeAnimation(m.STAGING.SHAKE_COUNT, m.STAGING.DURATION, m.STAGING.SHAKE_INTENSITY),
      s = this.createFireAnimation(m.STAGING.FIRE_COUNT, m.STAGING.DURATION, m.STAGING.FIRE_MIN_INTENSITY, m.STAGING.FIRE_MAX_INTENSITY),
      a = u.A.parallel([i, l, s]),
      c = u.A.timing(this.y, {
        toValue: m.FLYING.Y_VALUE,
        duration: m.FLYING.DURATION,
        easing: m.FLYING.Y_EASING
      }),
      o = u.A.timing(this.x, {
        toValue: m.FLYING.X_VALUE,
        duration: m.FLYING.DURATION,
        easing: m.FLYING.X_EASING
      }),
      d = u.A.timing(this.opacity, {
        toValue: m.FLYING.OPACITY_VALUE,
        duration: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      f = this.createFireAnimation(m.FLYING.FIRE_COUNT, m.FLYING.DURATION, m.FLYING.FIRE_MIN_INTENSITY, m.FLYING.FIRE_MAX_INTENSITY),
      g = u.A.parallel([c, o, d, f]);
    if (this.currentAnimation = u.A.sequence([r, a, g]), await (null == (e = this.currentAnimation) ? true : e.start()), !this.isUnmounted) {
      let {
        onFlyingComplete: e
      } = this.props;
      null != e && e()
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
    return (0, l.jsxs)(u.A.div, {
      className: c()(f.lY, e),
      style: function(e) {
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
      }({}, t, this.getWumpusStyle()),
      children: [(0, l.jsx)("div", {
        className: f.nY,
        children: (0, l.jsx)(u.A.div, {
          className: f.hg,
          style: this.getFireStyle()
        })
      }), (0, l.jsx)("div", {
        className: f.Xd,
        children: (0, l.jsx)(u.A.div, {
          className: f.hg,
          style: this.getFireStyle()
        })
      }), (0, l.jsx)("div", {
        className: f.kX
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "x", new u.A.Value(0)), g(this, "y", new u.A.Value(0)), g(this, "opacity", new u.A.Value(1)), g(this, "fireScale", new u.A.Value(1)), g(this, "currentAnimation", null), g(this, "isUnmounted", false)
  }
}
g(x, "Stages", b);
let h = x