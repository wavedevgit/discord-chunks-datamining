/** Chunk was on 15066 **/
n.d(t, {
  Z: () => g,
  n: () => m
});
var r, a = n(255367),
  i = n(73800),
  l = n(120356),
  s = n.n(l),
  o = n(748780),
  c = n(215569),
  u = n(666532);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
var m = ((r = {})[r.RIGHT = -1] = "RIGHT", r[r.LEFT = 1] = "LEFT", r);
let f = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class h extends i.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), o.Z.spring(this._animated, p({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    o.Z.spring(this._animated, p({
      toValue: this.props.direction
    }, this.props.springSettings)).start(e)
  }
  getStyle() {
    let e = o.Z.accelerate({
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
    return (0, a.jsx)(o.Z.div, {
      style: this.getStyle(),
      className: u.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), d(this, "_animated", void 0), this._animated = new o.Z.Value(-1 * e.direction)
  }
}
let g = e => {
  let {
    children: t,
    step: n,
    direction: r,
    className: i,
    springSettings: l = f,
    fadeInOut: o = !1
  } = e;
  return (0, a.jsx)(c.W, {
    component: "div",
    className: s()(u.animator, i),
    children: (0, a.jsx)(h, {
      direction: r,
      springSettings: l,
      fadeInOut: o,
      children: t
    }, n)
  })
}