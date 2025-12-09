/** Chunk was on 73755 **/
/** chunk id: 155409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk260300 = require("./260300.js"),
  Chunk451478 = require("./451478.js"),
  Chunk5560 = require("./5560.jsx"),
  Chunk10401 = require("./10401.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
class f extends(i = Chunk473749.Component) {
  componentDidMount() {
    let {
      visible: e,
      inlineSpecs: t
    } = this.props;
    null == exports && this.show(module)
  }
  componentWillUnmount() {
    let {
      inlineSpecs: e
    } = this.props;
    null == module && this.show(false)
  }
  componentDidUpdate(e) {
    let {
      position: t,
      offsetX: n,
      offsetY: i,
      tutorialId: r,
      visible: l,
      windowSize: a
    } = e;
    r !== this.props.tutorialId ? s.Z.hide(r) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || a !== this.props.windowSize) && this.show(this.props.visible)
  }
  show(e) {
    let {
      childRef: t,
      tutorialId: n,
      position: i,
      offsetX: r,
      offsetY: l,
      visible: o,
      inlineSpecs: c,
      autoInvert: u
    } = this.props;
    if (e && null == c) {
      let e = null == t ? true : t.current;
      if (!(0, a.kK)(e)) return;
      let {
        top: o,
        left: c,
        right: d,
        bottom: p
      } = e.getBoundingClientRect();
      s.Z.show(n, {
        position: i,
        targetWidth: d - c,
        targetHeight: p - o,
        autoInvert: u,
        origin: {
          x: c,
          y: o
        },
        offset: {
          x: r,
          y: l
        }
      })
    } else o && s.Z.hide(n)
  }
  render() {
    let {
      inlineSpecs: e,
      tutorialId: t,
      children: n,
      visible: i,
      windowFocused: a,
      position: o,
      autoInvert: s
    } = this.props, c = Chunk10401.Z.getData()[exports];
    return null != module && null != Chunk451478 ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [require, i && (0, Chunk54381.jsx)(Chunk5560.V, h({
        autoInvert: Chunk260300,
        position: Chunk442837,
        tutorialId: exports,
        tutorialDefinition: Chunk451478,
        focused: Chunk374470
      }, module))]
    }) : Chunk473749.Children.only(require)
  }
}

function m(e) {
  var t, n;
  let {
    tutorialId: i
  } = e, l = (0, o.e7)([d.Z], () => d.Z.shouldShow(i), [i]), a = (0, o.e7)([c.Z], () => c.Z.isFocused()), s = (0, o.e7)([c.Z], () => c.Z.windowSize(), []);
  return (0, r.jsx)(f, (t = h({}, e), n = n = {
    visible: l,
    windowFocused: a,
    windowSize: s
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
p(f, "defaultProps", {
  position: "top",
  offsetX: 0,
  offsetY: 0,
  autoInvert: true
})