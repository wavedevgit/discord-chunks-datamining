/** Chunk was on 75708 **/
/** chunk id: 578361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  n: () => p
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk666532 = require("./666532.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
var p = ((i = {})[i.RIGHT = false] = "RIGHT", i[i.LEFT = 1] = "LEFT", i);
let g = {
  friction: 7,
  tension: 40,
  clamp: true
};
class h extends Chunk73800.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), o.Z.spring(this._animated, m({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    o.Z.spring(this._animated, m({
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
      className: Chunk666532.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", true), this._animated = new o.Z.Value(false * e.direction)
  }
}
let f = e => {
  let {
    children: t,
    step: n,
    direction: i,
    className: s,
    springSettings: a = g,
    fadeInOut: o = false
  } = e;
  return (0, r.jsx)(c.W, {
    component: "div",
    className: l()(d.animator, s),
    children: (0, r.jsx)(h, {
      direction: i,
      springSettings: a,
      fadeInOut: o,
      children: t
    }, n)
  })
}