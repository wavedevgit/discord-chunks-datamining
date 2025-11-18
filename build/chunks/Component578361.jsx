/** Chunk was on web.js **/
/** chunk id: 578361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  n: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk228034 = require("./228034.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
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
var f = function(e) {
  return e[e.RIGHT = false] = "RIGHT", e[e.LEFT = 1] = "LEFT", e
}({});
let _ = {
  friction: 7,
  tension: 40,
  clamp: true
};
class p extends Chunk473749.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), s.Z.spring(this._animated, d({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    s.Z.spring(this._animated, d({
      toValue: this.props.direction
    }, this.props.springSettings)).start(e)
  }
  getStyle() {
    let e = Chunk748780.Z.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    });
    return this.props.fadeInOut && (module.opacity = this._animated.interpolate({
      inputRange: [false, 0, 1],
      outputRange: [0, 1, 0]
    })), module
  }
  render() {
    return (0, Chunk54381.jsx)(Chunk748780.Z.div, {
      style: this.getStyle(),
      className: Chunk228034.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", true), this._animated = new s.Z.Value(false * e.direction)
  }
}
let h = e => {
  let {
    children: t,
    step: n,
    direction: i,
    className: a,
    springSettings: s = _,
    fadeInOut: u = false
  } = e;
  return (0, r.jsx)(l.W, {
    component: "div",
    className: o()(c.animator, a),
    children: (0, r.jsx)(p, {
      direction: i,
      springSettings: s,
      fadeInOut: u,
      children: t
    }, n)
  })
}