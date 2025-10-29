/** Chunk was on 73726 **/
/** chunk id: 155409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
class h extends(r = Chunk647438.Component) {
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
      offsetY: r,
      tutorialId: i,
      visible: l,
      windowSize: a
    } = e;
    i !== this.props.tutorialId ? s.Z.hide(i) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || r !== this.props.offsetY || a !== this.props.windowSize) && this.show(this.props.visible)
  }
  show(e) {
    let {
      childRef: t,
      tutorialId: n,
      position: r,
      offsetX: i,
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
        position: r,
        targetWidth: d - c,
        targetHeight: p - o,
        autoInvert: u,
        origin: {
          x: c,
          y: o
        },
        offset: {
          x: i,
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
      visible: r,
      windowFocused: a,
      position: o,
      autoInvert: s
    } = this.props, c = Chunk10401.Z.getData()[exports];
    return null != module && null != Chunk451478 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [require, r && (0, Chunk951288.jsx)(Chunk5560.V, f({
        autoInvert: Chunk260300,
        position: Chunk442837,
        tutorialId: exports,
        tutorialDefinition: Chunk451478,
        focused: Chunk374470
      }, module))]
    }) : Chunk647438.Children.only(require)
  }
}

function m(e) {
  var t, n;
  let {
    tutorialId: r
  } = e, l = (0, o.e7)([d.Z], () => d.Z.shouldShow(r), [r]), a = (0, o.e7)([c.Z], () => c.Z.isFocused()), s = (0, o.e7)([c.Z], () => c.Z.windowSize(), []);
  return (0, i.jsx)(h, (t = f({}, e), n = n = {
    visible: l,
    windowFocused: a,
    windowSize: s
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
p(h, "defaultProps", {
  position: "top",
  offsetX: 0,
  offsetY: 0,
  autoInvert: true
})