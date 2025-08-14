/** Chunk was on 74304 **/
/** chunk id: 435935, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => y
});
var l, n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512250 = require("./512250.js"),
  Chunk156843 = require("./156843.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), l.forEach(function(t) {
      d(e, t, r[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      r.push.apply(r, l)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var r, l, n = function(e, t) {
    if (null == e) return {};
    var r, l, n = {},
      i = Object.keys(e);
    for (l = 0; l < i.length; l++) r = i[l], t.indexOf(r) >= 0 || (n[r] = e[r]);
    return n
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++) r = i[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
let g = {
    VERTICAL: Chunk512250.flexVertical,
    HORIZONTAL: Chunk512250.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk512250.flexHorizontalReverse
  },
  x = {
    START: Chunk512250.flexJustifyStart,
    END: Chunk512250.flexJustifyEnd,
    CENTER: Chunk512250.flexJustifyCenter,
    BETWEEN: Chunk512250.flexJustifyBetween,
    AROUND: Chunk512250.flexJustifyAround
  },
  v = {
    NO_WRAP: Chunk512250.flexNowrap,
    WRAP: Chunk512250.flexWrap,
    WRAP_REVERSE: Chunk512250.flexWrapReverse
  },
  w = {
    START: Chunk512250.flexAlignStart,
    END: Chunk512250.flexAlignEnd,
    CENTER: Chunk512250.flexAlignCenter,
    STRETCH: Chunk512250.flexAlignStretch
  },
  m = {
    SMALL: Chunk156843.flexGutterSmall,
    LARGE: Chunk156843.flexGutterLarge
  };
class S extends(l = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: r,
        shrink: l,
        grow: n,
        basis: s,
        style: f,
        wrap: d
      } = module,
      g = h(module, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      x = c({
        style: c({
          flexGrow: n,
          flexShrink: l,
          flexBasis: Chunk120356
        }, Chunk512250),
        className: require === Chunk156843.flexChild ? require : a()(Chunk156843.flexChild, require)
      }, g);
    if (!d && "string" != typeof exports && 1 === Chunk73800.Children.count(exports)) {
      let e = Chunk73800.Children.only(exports);
      return x.style = c({}, x.style, module.props.style), x.className = a()(module.props.className, require), Chunk73800.cloneElement(module, x)
    }
    return (0, Chunk255367.jsx)("div", p(c({}, x), {
      children: exports
    }))
  }
}
d(S, "defaultProps", {
  className: Chunk156843.flexChild,
  style: {},
  wrap: false
});
class y extends(n = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: r,
        direction: l,
        justify: n,
        align: o,
        wrap: s,
        shrink: f,
        grow: d,
        basis: g,
        style: x,
        gutter: v
      } = module,
      w = h(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      m = c({
        flexShrink: Chunk512250,
        flexGrow: d,
        flexBasis: g
      }, x);
    return (0, Chunk255367.jsx)("div", p(c({
      style: m,
      className: a()(Chunk156843.flex, l, n, Chunk73800, Chunk120356, v, require)
    }, w), {
      children: exports
    }))
  }
}
d(y, "Child", S), d(y, "Direction", g), d(y, "Align", w), d(y, "Justify", x), d(y, "Wrap", v), d(y, "Gutter", m), d(y, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: x.START,
  align: w.STRETCH,
  wrap: v.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})