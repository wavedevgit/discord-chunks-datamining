/** Chunk was on 15066 **/
n.d(t, {
  Z: () => g,
  n: () => p
});
var r, o = n(255367),
  a = n(73800),
  i = n(120356),
  l = n.n(i),
  c = n(748780),
  s = n(215569),
  u = n(666532);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
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
var p = ((r = {})[r.RIGHT = -1] = "RIGHT", r[r.LEFT = 1] = "LEFT", r);
let f = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class m extends a.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, _({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    c.Z.spring(this._animated, _({
      toValue: this.props.direction
    }, this.props.springSettings)).start(e)
  }
  getStyle() {
    let e = c.Z.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    });
    return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    })), e
  }
  render() {
    return (0, o.jsx)(c.Z.div, {
      style: this.getStyle(),
      className: u.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), d(this, "_animated", void 0), this._animated = new c.Z.Value(-1 * e.direction)
  }
}
let g = e => {
  let {
    children: t,
    step: n,
    direction: r,
    className: a,
    springSettings: i = f,
    fadeInOut: c = !1
  } = e;
  return (0, o.jsx)(s.W, {
    component: "div",
    className: l()(u.animator, a),
    children: (0, o.jsx)(m, {
      direction: r,
      springSettings: i,
      fadeInOut: c,
      children: t
    }, n)
  })
}