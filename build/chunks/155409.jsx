/** Chunk was on web.js **/
/** chunk id: 155409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk260300 = require("./260300.js"),
  Chunk451478 = require("./451478.js"),
  Chunk5560 = require("./5560.jsx"),
  Chunk10401 = require("./10401.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class m extends(r = Chunk73800.Component) {
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
      visible: o,
      windowSize: a
    } = e;
    i !== this.props.tutorialId ? l.Z.hide(i) : (o !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || r !== this.props.offsetY || a !== this.props.windowSize) && this.show(this.props.visible)
  }
  show(e) {
    let {
      childRef: t,
      tutorialId: n,
      position: r,
      offsetX: i,
      offsetY: o,
      visible: s,
      inlineSpecs: c,
      autoInvert: u
    } = this.props;
    if (e && null == c) {
      let e = null == t ? true : t.current;
      if (!(0, a.k)(e)) return;
      let {
        top: s,
        left: c,
        right: d,
        bottom: f
      } = e.getBoundingClientRect();
      l.Z.show(n, {
        position: r,
        targetWidth: d - c,
        targetHeight: f - s,
        autoInvert: u,
        origin: {
          x: c,
          y: s
        },
        offset: {
          x: i,
          y: o
        }
      })
    } else s && l.Z.hide(n)
  }
  render() {
    let {
      inlineSpecs: e,
      tutorialId: t,
      children: n,
      visible: r,
      windowFocused: a,
      position: s,
      autoInvert: l
    } = this.props, c = Chunk10401.Z.getData()[exports];
    return null != module && null != Chunk451478 ? <Chunk255367.Fragment>{require}{r && <Chunk5560.V{..._({
        autoInvert: Chunk260300,
        position: Chunk442837,
        tutorialId: exports,
        tutorialDefinition: Chunk451478,
        focused: Chunk374470
      }, module)} />}</Chunk255367.Fragment> : Chunk73800.Children.only(require)
  }
}

function g(e) {
  let {
    tutorialId: t
  } = e, n = (0, s.e7)([d.Z], () => d.Z.shouldShow(t), [t]), r = (0, s.e7)([c.Z], () => c.Z.isFocused()), o = (0, s.e7)([c.Z], () => c.Z.windowSize(), []);
  return <m{...h(_({}, e), {
    visible: n,
    windowFocused: r,
    windowSize: o
  })} />
}
f(m, "defaultProps", {
  position: "top",
  offsetX: 0,
  offsetY: 0,
  autoInvert: true
})