/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(47120);
var r, i, s = n(200651),
  a = n(192379),
  l = n(120356),
  o = n.n(l),
  c = n(392711),
  A = n.n(c),
  d = n(82923),
  u = n(310734);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var f = ((i = f || {})[i.HOVERING = 0] = "HOVERING", i[i.FLYING = 1] = "FLYING", i);
let m = Object.freeze({
  HOVERING: {
    Y_DURATION: 1500,
    Y_VALUE: -5,
    Y_VALUE_MODIFIER: -1,
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
    Y_VALUE: -1e3,
    Y_EASING: d.Z.Easing.bezier(.46, .01, 1, -.3),
    X_VALUE: 200,
    X_EASING: d.Z.Easing.bezier(.65, .05, 1, .25),
    FIRE_COUNT: 10,
    FIRE_MIN_INTENSITY: 1.2,
    FIRE_MAX_INTENSITY: 1.4,
    OPACITY_VALUE: 0,
    OPACITY_DURATION_DIVIDEND: 2
  }
});

function p(e, t, n, r) {
  return d.Z.sequence(A().times(t, i => d.Z.timing(e, {
    toValue: r(i),
    duration: n / t
  })))
}
class h extends(r = a.Component) {
  componentDidMount() {
    this.startAnimation()
  }
  componentWillUnmount() {
    this.isUnmounted = !0
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
    return p(this.fireScale, e, t, () => A().random(n, r))
  }
  async hoverAnimate(e) {
    var t;
    if (0 !== this.props.stage || this.isUnmounted) return;
    let n = e > 1,
      r = n ? m.HOVERING.FIRE_MIN_INTENSITY_FALLING : m.HOVERING.FIRE_MIN_INTENSITY_RISING,
      i = n ? m.HOVERING.FIRE_MAX_INTENSITY_FALLING : m.HOVERING.FIRE_MAX_INTENSITY_RISING,
      s = this.createFireAnimation(m.HOVERING.FIRE_COUNT, m.HOVERING.Y_DURATION, r, i),
      a = d.Z.timing(this.y, {
        toValue: e,
        duration: m.HOVERING.Y_DURATION,
        easing: d.Z.Easing.inOut(d.Z.Easing.ease)
      });
    this.currentAnimation = d.Z.parallel([a, s]), await (null === (t = this.currentAnimation) || void 0 === t ? void 0 : t.start()), this.hoverAnimate(e * m.HOVERING.Y_VALUE_MODIFIER)
  }
  createShakeAnimation(e, t, n) {
    return p(this.x, e, t, e => A().random(1, n) * (e % 2 == 0 ? 1 : -1))
  }
  async flyAnimate() {
    var e;
    let t = d.Z.spring(this.y, {
        toValue: m.FALLING.Y_VALUE,
        overshootClamping: !0
      }),
      n = d.Z.spring(this.fireScale, {
        toValue: m.FALLING.FIRE_VALUE,
        overshootClamping: !0
      }),
      r = d.Z.parallel([t, n]),
      i = d.Z.timing(this.y, {
        toValue: m.STAGING.Y_VALUE,
        duration: m.STAGING.DURATION
      }),
      s = this.createShakeAnimation(m.STAGING.SHAKE_COUNT, m.STAGING.DURATION, m.STAGING.SHAKE_INTENSITY),
      a = this.createFireAnimation(m.STAGING.FIRE_COUNT, m.STAGING.DURATION, m.STAGING.FIRE_MIN_INTENSITY, m.STAGING.FIRE_MAX_INTENSITY),
      l = d.Z.parallel([i, s, a]),
      o = d.Z.timing(this.y, {
        toValue: m.FLYING.Y_VALUE,
        duration: m.FLYING.DURATION,
        easing: m.FLYING.Y_EASING
      }),
      c = d.Z.timing(this.x, {
        toValue: m.FLYING.X_VALUE,
        duration: m.FLYING.DURATION,
        easing: m.FLYING.X_EASING
      }),
      A = d.Z.timing(this.opacity, {
        toValue: m.FLYING.OPACITY_VALUE,
        duration: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
        delay: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND
      }),
      u = this.createFireAnimation(m.FLYING.FIRE_COUNT, m.FLYING.DURATION, m.FLYING.FIRE_MIN_INTENSITY, m.FLYING.FIRE_MAX_INTENSITY),
      g = d.Z.parallel([o, c, A, u]);
    if (this.currentAnimation = d.Z.sequence([r, l, g]), await (null === (e = this.currentAnimation) || void 0 === e ? void 0 : e.start()), !this.isUnmounted) {
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
    return (0, s.jsxs)(d.Z.div, {
      className: o()(u.animation, e),
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
      children: [(0, s.jsx)("div", {
        className: u.fireTopWrapper,
        children: (0, s.jsx)(d.Z.div, {
          className: u.fire,
          style: this.getFireStyle()
        })
      }), (0, s.jsx)("div", {
        className: u.fireBottomWrapper,
        children: (0, s.jsx)(d.Z.div, {
          className: u.fire,
          style: this.getFireStyle()
        })
      }), (0, s.jsx)("div", {
        className: u.wumpus
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "x", new d.Z.Value(0)), g(this, "y", new d.Z.Value(0)), g(this, "opacity", new d.Z.Value(1)), g(this, "fireScale", new d.Z.Value(1)), g(this, "currentAnimation", null), g(this, "isUnmounted", !1)
  }
}
g(h, "Stages", f);
let C = h