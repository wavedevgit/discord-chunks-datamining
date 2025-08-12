/** Chunk was on 74304 **/
/** chunk id: 435935, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => S
});
var l, n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666323 = require("./666323.js"),
  Chunk139580 = require("./139580.js");

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
    VERTICAL: Chunk666323.flexVertical,
    HORIZONTAL: Chunk666323.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk666323.flexHorizontalReverse
  },
  x = {
    START: Chunk666323.flexJustifyStart,
    END: Chunk666323.flexJustifyEnd,
    CENTER: Chunk666323.flexJustifyCenter,
    BETWEEN: Chunk666323.flexJustifyBetween,
    AROUND: Chunk666323.flexJustifyAround
  },
  v = {
    NO_WRAP: Chunk666323.flexNowrap,
    WRAP: Chunk666323.flexWrap,
    WRAP_REVERSE: Chunk666323.flexWrapReverse
  },
  w = {
    START: Chunk666323.flexAlignStart,
    END: Chunk666323.flexAlignEnd,
    CENTER: Chunk666323.flexAlignCenter,
    STRETCH: Chunk666323.flexAlignStretch
  },
  m = {
    SMALL: Chunk139580.flexGutterSmall,
    LARGE: Chunk139580.flexGutterLarge
  };
class y extends(l = Chunk73800.PureComponent) {
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
        }, Chunk666323),
        className: require === Chunk139580.flexChild ? require : a()(Chunk139580.flexChild, require)
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
d(y, "defaultProps", {
  className: Chunk139580.flexChild,
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
        wrap: s,
        shrink: f,
        grow: d,
        basis: g,
        style: x,
        gutter: v
      } = module,
      w = h(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      m = c({
        flexShrink: Chunk666323,
        flexGrow: d,
        flexBasis: g
      }, x);
    return (0, Chunk255367.jsx)("div", p(c({
      style: m,
      className: a()(Chunk139580.flex, l, n, Chunk73800, Chunk120356, v, require)
    }, w), {
      children: exports
    }))
  }
}
d(S, "Child", y), d(S, "Direction", g), d(S, "Align", w), d(S, "Justify", x), d(S, "Wrap", v), d(S, "Gutter", m), d(S, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: x.START,
  align: w.STRETCH,
  wrap: v.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})