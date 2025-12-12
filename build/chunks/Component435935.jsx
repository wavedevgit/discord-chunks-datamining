/** Chunk was on web.js **/
/** chunk id: 435935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => S
});
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk575953 = require("./575953.js"),
  Chunk901195 = require("./901195.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {
    VERTICAL: Chunk575953.flexVertical,
    HORIZONTAL: Chunk575953.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk575953.flexHorizontalReverse
  },
  E = {
    START: Chunk575953.flexJustifyStart,
    END: Chunk575953.flexJustifyEnd,
    CENTER: Chunk575953.flexJustifyCenter,
    BETWEEN: Chunk575953.flexJustifyBetween,
    AROUND: Chunk575953.flexJustifyAround
  },
  b = {
    NO_WRAP: Chunk575953.flexNowrap,
    WRAP: Chunk575953.flexWrap,
    WRAP_REVERSE: Chunk575953.flexWrapReverse
  },
  y = {
    START: Chunk575953.flexAlignStart,
    END: Chunk575953.flexAlignEnd,
    CENTER: Chunk575953.flexAlignCenter,
    STRETCH: Chunk575953.flexAlignStretch
  },
  O = {
    SMALL: Chunk901195.flexGutterSmall,
    LARGE: Chunk901195.flexGutterLarge
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
      p = m(module, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      h = f({
        style: f({
          flexGrow: i,
          flexShrink: r,
          flexBasis: Chunk120356
        }, Chunk575953),
        className: require === Chunk901195.flexChild ? require : l()(Chunk901195.flexChild, require)
      }, p);
    if (!d && "string" != typeof exports && 1 === Chunk473749.Children.count(exports)) {
      let e = Chunk473749.Children.only(exports);
      return h.style = f({}, h.style, module.props.style), h.className = l()(module.props.className, require), Chunk473749.cloneElement(module, h)
    }
    return (0, Chunk54381.jsx)("div", _(f({}, h), {
      children: exports
    }))
  }
}
d(v, "defaultProps", {
  className: Chunk901195.flexChild,
  style: {},
  wrap: false
});
class S extends(i = Chunk473749.PureComponent) {
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
        basis: p,
        style: h,
        gutter: g
      } = module,
      E = m(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      b = f({
        flexShrink: Chunk575953,
        flexGrow: d,
        flexBasis: p
      }, h);
    return (0, Chunk54381.jsx)("div", _(f({
      style: b,
      className: l()(Chunk901195.flex, r, i, Chunk473749, Chunk120356, g, require)
    }, E), {
      children: exports
    }))
  }
}
d(S, "Child", v), d(S, "Direction", g), d(S, "Align", y), d(S, "Justify", E), d(S, "Wrap", b), d(S, "Gutter", O), d(S, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: E.START,
  align: y.STRETCH,
  wrap: b.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})