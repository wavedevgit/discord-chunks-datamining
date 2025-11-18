/** Chunk was on web.js **/
/** chunk id: 435935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => I
});
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk911597 = require("./911597.js"),
  Chunk133378 = require("./133378.js");

function d(e, t, n) {
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
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
    VERTICAL: Chunk911597.flexVertical,
    HORIZONTAL: Chunk911597.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk911597.flexHorizontalReverse
  },
  E = {
    START: Chunk911597.flexJustifyStart,
    END: Chunk911597.flexJustifyEnd,
    CENTER: Chunk911597.flexJustifyCenter,
    BETWEEN: Chunk911597.flexJustifyBetween,
    AROUND: Chunk911597.flexJustifyAround
  },
  b = {
    NO_WRAP: Chunk911597.flexNowrap,
    WRAP: Chunk911597.flexWrap,
    WRAP_REVERSE: Chunk911597.flexWrapReverse
  },
  y = {
    START: Chunk911597.flexAlignStart,
    END: Chunk911597.flexAlignEnd,
    CENTER: Chunk911597.flexAlignCenter,
    STRETCH: Chunk911597.flexAlignStretch
  },
  O = {
    SMALL: Chunk133378.flexGutterSmall,
    LARGE: Chunk133378.flexGutterLarge
  };
class v extends(r = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        shrink: r,
        grow: i,
        basis: s,
        style: c,
        wrap: d
      } = module,
      _ = h(module, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      m = f({
        style: f({
          flexGrow: i,
          flexShrink: r,
          flexBasis: Chunk120356
        }, Chunk911597),
        className: require === Chunk133378.flexChild ? require : l()(Chunk133378.flexChild, require)
      }, _);
    if (!d && "string" != typeof exports && 1 === Chunk473749.Children.count(exports)) {
      let e = Chunk473749.Children.only(exports);
      return m.style = f({}, m.style, module.props.style), m.className = l()(module.props.className, require), Chunk473749.cloneElement(module, m)
    }
    return (0, Chunk54381.jsx)("div", p(f({}, m), {
      children: exports
    }))
  }
}
d(v, "defaultProps", {
  className: Chunk133378.flexChild,
  style: {},
  wrap: false
});
class I extends(i = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        direction: r,
        justify: i,
        align: o,
        wrap: s,
        shrink: c,
        grow: d,
        basis: _,
        style: m,
        gutter: g
      } = module,
      E = h(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      b = f({
        flexShrink: Chunk911597,
        flexGrow: d,
        flexBasis: _
      }, m);
    return (0, Chunk54381.jsx)("div", p(f({
      style: b,
      className: l()(Chunk133378.flex, r, i, Chunk473749, Chunk120356, g, require)
    }, E), {
      children: exports
    }))
  }
}
d(I, "Child", v), d(I, "Direction", g), d(I, "Align", y), d(I, "Justify", E), d(I, "Wrap", b), d(I, "Gutter", O), d(I, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: E.START,
  align: y.STRETCH,
  wrap: b.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})