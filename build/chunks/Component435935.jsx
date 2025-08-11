/** Chunk was on 75708 **/
/** chunk id: 435935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => E
});
var i, r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk742421 = require("./742421.js"),
  Chunk765890 = require("./765890.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      s = Object.keys(e);
    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let h = {
    VERTICAL: Chunk742421.flexVertical,
    HORIZONTAL: Chunk742421.flexHorizontal,
    HORIZONTAL_REVERSE: Chunk742421.flexHorizontalReverse
  },
  f = {
    START: Chunk742421.flexJustifyStart,
    END: Chunk742421.flexJustifyEnd,
    CENTER: Chunk742421.flexJustifyCenter,
    BETWEEN: Chunk742421.flexJustifyBetween,
    AROUND: Chunk742421.flexJustifyAround
  },
  b = {
    NO_WRAP: Chunk742421.flexNowrap,
    WRAP: Chunk742421.flexWrap,
    WRAP_REVERSE: Chunk742421.flexWrapReverse
  },
  x = {
    START: Chunk742421.flexAlignStart,
    END: Chunk742421.flexAlignEnd,
    CENTER: Chunk742421.flexAlignCenter,
    STRETCH: Chunk742421.flexAlignStretch
  },
  _ = {
    SMALL: Chunk765890.flexGutterSmall,
    LARGE: Chunk765890.flexGutterLarge
  };
class j extends(i = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        shrink: i,
        grow: r,
        basis: l,
        style: c,
        wrap: u
      } = module,
      h = g(module, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      f = m({
        style: m({
          flexGrow: r,
          flexShrink: i,
          flexBasis: Chunk120356
        }, Chunk742421),
        className: require === Chunk765890.flexChild ? require : o()(Chunk765890.flexChild, require)
      }, h);
    if (!u && "string" != typeof exports && 1 === Chunk73800.Children.count(exports)) {
      let e = Chunk73800.Children.only(exports);
      return f.style = m({}, f.style, module.props.style), f.className = o()(module.props.className, require), Chunk73800.cloneElement(module, f)
    }
    return (0, Chunk255367.jsx)("div", p(m({}, f), {
      children: exports
    }))
  }
}
u(j, "defaultProps", {
  className: Chunk765890.flexChild,
  style: {},
  wrap: false
});
class E extends(r = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        direction: i,
        justify: r,
        align: a,
        wrap: l,
        shrink: c,
        grow: u,
        basis: h,
        style: f,
        gutter: b
      } = module,
      x = g(module, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      _ = m({
        flexShrink: Chunk742421,
        flexGrow: u,
        flexBasis: h
      }, f);
    return (0, Chunk255367.jsx)("div", p(m({
      style: _,
      className: o()(Chunk765890.flex, i, r, Chunk73800, Chunk120356, b, require)
    }, x), {
      children: exports
    }))
  }
}
u(E, "Child", j), u(E, "Direction", h), u(E, "Align", x), u(E, "Justify", f), u(E, "Wrap", b), u(E, "Gutter", _), u(E, "defaultProps", {
  direction: h.HORIZONTAL,
  justify: f.START,
  align: x.STRETCH,
  wrap: b.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})