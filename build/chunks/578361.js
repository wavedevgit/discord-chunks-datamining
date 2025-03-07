/** Chunk was on 15066 **/
n.d(t, {
  Z: () => h,
  n: () => p
});
var i, r = n(200651),
  o = n(192379),
  a = n(120356),
  s = n.n(a),
  l = n(748780),
  d = n(215569),
  c = n(315806);

function u(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
var p = ((i = {})[i.RIGHT = -1] = "RIGHT", i[i.LEFT = 1] = "LEFT", i);
let m = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class b extends o.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), l.Z.spring(this._animated, _({
      toValue: 0
    }, this.props.springSettings)).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    l.Z.spring(this._animated, _({
      toValue: this.props.direction
    }, this.props.springSettings)).start(e)
  }
  getStyle() {
    let e = l.Z.accelerate({
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
    return (0, r.jsx)(l.Z.div, {
      style: this.getStyle(),
      className: c.item,
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), u(this, "_animated", void 0), this._animated = new l.Z.Value(-1 * e.direction)
  }
}
let h = e => {
  let {
    children: t,
    step: n,
    direction: i,
    className: o,
    springSettings: a = m,
    fadeInOut: l = !1
  } = e;
  return (0, r.jsx)(d.W, {
    component: "div",
    className: s()(c.animator, o),
    children: (0, r.jsx)(b, {
      direction: i,
      springSettings: a,
      fadeInOut: l,
      children: t
    }, n)
  })
}