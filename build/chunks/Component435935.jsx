/** Chunk was on 69416 **/
/** chunk id: 435935, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => S
});
var l, n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512250 = require("./512250.js"),
  Chunk156843 = require("./156843.js");

function c(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), l.forEach(function(t) {
      c(e, t, r[t])
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

function x(e, t) {
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
let h = {
    VERTICAL: Chunk512250.flexVertical,
    HORIZONTAL: Chunk512250.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk512250.flexHorizontalReverse
  },
  g = {
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
  b = {
    SMALL: Chunk156843.flexGutterSmall,
    LARGE: Chunk156843.flexGutterLarge
  };
class m extends(l = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: r,
        shrink: l,
        grow: n,
        basis: a,
        style: f,
        wrap: c
      } = module,
      h = x(module, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      g = d({
        style: d({
          flexGrow: n,
          flexShrink: l,
          flexBasis: Chunk120356
        }, Chunk512250),
        className: require === Chunk156843.flexChild ? require : s()(Chunk156843.flexChild, require)
      }, h);
    if (!c && "string" != typeof exports && 1 === Chunk73800.Children.count(exports)) {
      let e = Chunk73800.Children.only(exports);
      return g.style = d({}, g.style, module.props.style), g.className = s()(module.props.className, require), Chunk73800.cloneElement(module, g)
    }
    return (0, Chunk255367.jsx)("div", p(d({}, g), {
      children: exports
    }))
  }
}
c(m, "defaultProps", {
  className: Chunk156843.flexChild,
  style: {},
  wrap: false
});
class S extends(n = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: r,
        direction: l,
        justify: n,
        align: o,
        wrap: a,
        shrink: f,
        grow: c,
        basis: h,
        style: g,
        gutter: v
      } = module,
      w = x(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      b = d({
        flexShrink: Chunk512250,
        flexGrow: c,
        flexBasis: h
      }, g);
    return (0, Chunk255367.jsx)("div", p(d({
      style: b,
      className: s()(Chunk156843.flex, l, n, Chunk73800, Chunk120356, v, require)
    }, w), {
      children: exports
    }))
  }
}
c(S, "Child", m), c(S, "Direction", h), c(S, "Align", w), c(S, "Justify", g), c(S, "Wrap", v), c(S, "Gutter", b), c(S, "defaultProps", {
  direction: h.HORIZONTAL,
  justify: g.START,
  align: w.STRETCH,
  wrap: v.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})