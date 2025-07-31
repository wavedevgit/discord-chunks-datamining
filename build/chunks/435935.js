/** Chunk was on 69416 **/
"use strict";
r.d(t, {
  k: () => y
});
var l, n, i = r(255367),
  o = r(73800),
  s = r(120356),
  a = r.n(s),
  f = r(742421),
  u = r(765890);

function c(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    VERTICAL: f.flexVertical,
    HORIZONTAL: f.flexHorizontal,
    HORIZONTAL_REVERSE: f.flexHorizontalReverse
  },
  g = {
    START: f.flexJustifyStart,
    END: f.flexJustifyEnd,
    CENTER: f.flexJustifyCenter,
    BETWEEN: f.flexJustifyBetween,
    AROUND: f.flexJustifyAround
  },
  v = {
    NO_WRAP: f.flexNowrap,
    WRAP: f.flexWrap,
    WRAP_REVERSE: f.flexWrapReverse
  },
  w = {
    START: f.flexAlignStart,
    END: f.flexAlignEnd,
    CENTER: f.flexAlignCenter,
    STRETCH: f.flexAlignStretch
  },
  b = {
    SMALL: u.flexGutterSmall,
    LARGE: u.flexGutterLarge
  };
class m extends(l = o.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: r,
        shrink: l,
        grow: n,
        basis: s,
        style: f,
        wrap: c
      } = e,
      h = x(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      g = d({
        style: d({
          flexGrow: n,
          flexShrink: l,
          flexBasis: s
        }, f),
        className: r === u.flexChild ? r : a()(u.flexChild, r)
      }, h);
    if (!c && "string" != typeof t && 1 === o.Children.count(t)) {
      let e = o.Children.only(t);
      return g.style = d({}, g.style, e.props.style), g.className = a()(e.props.className, r), o.cloneElement(e, g)
    }
    return (0, i.jsx)("div", p(d({}, g), {
      children: t
    }))
  }
}
c(m, "defaultProps", {
  className: u.flexChild,
  style: {},
  wrap: !1
});
class y extends(n = o.PureComponent) {
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
        grow: c,
        basis: h,
        style: g,
        gutter: v
      } = e,
      w = x(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      b = d({
        flexShrink: f,
        flexGrow: c,
        flexBasis: h
      }, g);
    return (0, i.jsx)("div", p(d({
      style: b,
      className: a()(u.flex, l, n, o, s, v, r)
    }, w), {
      children: t
    }))
  }
}
c(y, "Child", m), c(y, "Direction", h), c(y, "Align", w), c(y, "Justify", g), c(y, "Wrap", v), c(y, "Gutter", b), c(y, "defaultProps", {
  direction: h.HORIZONTAL,
  justify: g.START,
  align: w.STRETCH,
  wrap: v.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})