/** Chunk was on 52199 **/
/** chunk id: 725951, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => S,
  f: () => p
});
var n, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk73939 = require("./73939.js"),
  Chunk752327 = require("./752327.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      d(e, t, r[t])
    })
  }
  return e
}
var p = ((n = {})[n.RIGHT = false] = "RIGHT", n[n.LEFT = 1] = "LEFT", n);
let f = {
  friction: 7,
  tension: 40,
  clamp: true
};
class g extends Chunk64700.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), o.A.spring(this._animated, h({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    o.A.spring(this._animated, h({
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
    return (0, l.jsx)(o.A.div, {
      style: this.getStyle(),
      className: u.A,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), d(this, "_animated", true), this._animated = new o.A.Value(false * e.direction)
  }
}
let S = e => {
  let {
    children: t,
    step: r,
    direction: n,
    className: s,
    springSettings: a = f,
    fadeInOut: o = false
  } = e;
  return (0, l.jsx)(c.F, {
    component: "div",
    className: i()(u.Q, s),
    children: (0, l.jsx)(g, {
      direction: n,
      springSettings: a,
      fadeInOut: o,
      children: t
    }, r)
  })
}