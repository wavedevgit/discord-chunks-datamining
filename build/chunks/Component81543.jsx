/** Chunk was on 29679 **/
/** chunk id: 81543, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h,
  n: () => m
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk469416 = require("./469416.js");

function u(e, t, n) {
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
      u(e, t, n[t])
    })
  }
  return e
}
var m = ((r = {})[r.RIGHT = false] = "RIGHT", r[r.LEFT = 1] = "LEFT", r);
let p = {
  friction: 10,
  tension: 40,
  overshootClamping: true
};
class f extends Chunk647438.PureComponent {
  componentWillEnter(e) {
    var t, n;
    null == (t = (n = this.props).onAnimationStart) || t.call(n), this._animated.setValue(-this.props.direction), o.Z.spring(this._animated, g({
      toValue: 0
    }, p)).start(() => {
      var t, n;
      e(), null == (t = (n = this.props).onAnimationEnd) || t.call(n)
    })
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    o.Z.spring(this._animated, g({
      toValue: this.props.direction
    }, p)).start(e)
  }
  getStyle() {
    return Chunk748780.Z.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    })
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      style: this.getStyle(),
      className: Chunk469416.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", true), this._animated = new o.Z.Value(false * e.direction)
  }
}
let h = e => {
  let {
    children: t,
    step: n,
    direction: r,
    className: l,
    onAnimationStart: a,
    onAnimationEnd: o
  } = e;
  return (0, i.jsx)(c.W, {
    component: "div",
    className: s()(d.animator, l),
    children: (0, i.jsx)(f, {
      direction: r,
      onAnimationStart: a,
      onAnimationEnd: o,
      children: t
    }, n)
  })
}