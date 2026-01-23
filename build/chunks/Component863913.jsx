/** Chunk was on 47841 **/
/** chunk id: 863913, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b,
  f: () => m
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk73939 = require("./73939.js"),
  Chunk209349 = require("./209349.js");

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
class f extends Chunk64700.PureComponent {
  componentWillEnter(e) {
    var t, n;
    null == (t = (n = this.props).onAnimationStart) || t.call(n), this._animated.setValue(-this.props.direction), o.A.spring(this._animated, g({
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
    o.A.spring(this._animated, g({
      toValue: this.props.direction
    }, p)).start(e)
  }
  getStyle() {
    return o.A.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    })
  }
  render() {
    return (0, i.jsx)(o.A.div, {
      style: this.getStyle(),
      className: d.A,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", true), this._animated = new o.A.Value(false * e.direction)
  }
}
let b = e => {
  let {
    children: t,
    step: n,
    direction: r,
    className: l,
    onAnimationStart: s,
    onAnimationEnd: o
  } = e;
  return (0, i.jsx)(c.F, {
    component: "div",
    className: a()(d.Q, l),
    children: (0, i.jsx)(f, {
      direction: r,
      onAnimationStart: s,
      onAnimationEnd: o,
      children: t
    }, n)
  })
}