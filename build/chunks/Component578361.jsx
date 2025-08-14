/** Chunk was on 15066 **/
/** chunk id: 578361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  n: () => f
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk278397 = require("./278397.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
var f = ((r = {})[r.RIGHT = false] = "RIGHT", r[r.LEFT = 1] = "LEFT", r);
let m = {
  friction: 7,
  tension: 40,
  clamp: true
};
class h extends Chunk73800.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), s.Z.spring(this._animated, p({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    s.Z.spring(this._animated, p({
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
    return (0, Chunk255367.jsx)(Chunk748780.Z.div, {
      style: this.getStyle(),
      className: Chunk278397.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), d(this, "_animated", true), this._animated = new s.Z.Value(false * e.direction)
  }
}
let b = e => {
  let {
    children: t,
    step: n,
    direction: r,
    className: a,
    springSettings: i = m,
    fadeInOut: s = false
  } = e;
  return (0, l.jsx)(c.W, {
    component: "div",
    className: o()(u.animator, a),
    children: (0, l.jsx)(h, {
      direction: r,
      springSettings: i,
      fadeInOut: s,
      children: t
    }, n)
  })
}