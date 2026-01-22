/** Chunk was on web.js **/
/** chunk id: 725951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  f: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk73939 = require("./73939.js"),
  Chunk752327 = require("./752327.js");

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
let p = {
  friction: 7,
  tension: 40,
  clamp: true
};
class _ extends Chunk64700.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), o.A.spring(this._animated, d({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    o.A.spring(this._animated, d({
      toValue: this.props.direction
    }, this.props.springSettings)).start(e)
  }
  getStyle() {
    let e = o.A.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    });
    return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
      inputRange: [false, 0, 1],
      outputRange: [0, 1, 0]
    })), e
  }
  render() {
    return (0, r.jsx)(o.A.div, {
      style: this.getStyle(),
      className: c.A,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", true), this._animated = new o.A.Value(false * e.direction)
  }
}
let h = e => {
  let {
    children: t,
    step: n,
    direction: i,
    className: a,
    springSettings: o = p,
    fadeInOut: u = false
  } = e;
  return (0, r.jsx)(l.F, {
    component: "div",
    className: s()(c.Q, a),
    children: (0, r.jsx)(_, {
      direction: i,
      springSettings: o,
      fadeInOut: u,
      children: t
    }, n)
  })
}