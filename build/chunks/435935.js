/** Chunk was on web.js **/
"use strict";
n.d(t, {
  k: () => S
});
var r, i, o = n(200651),
  a = n(192379),
  s = n(557533),
  l = n.n(s),
  c = n(386553),
  u = n(626837);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = {
    VERTICAL: c.flexVertical,
    HORIZONTAL: c.flexHorizontal,
    HORIZONTAL_REVERSE: c.flexHorizontalReverse
  },
  E = {
    START: c.flexJustifyStart,
    END: c.flexJustifyEnd,
    CENTER: c.flexJustifyCenter,
    BETWEEN: c.flexJustifyBetween,
    AROUND: c.flexJustifyAround
  },
  v = {
    NO_WRAP: c.flexNowrap,
    WRAP: c.flexWrap,
    WRAP_REVERSE: c.flexWrapReverse
  },
  b = {
    START: c.flexAlignStart,
    END: c.flexAlignEnd,
    CENTER: c.flexAlignCenter,
    STRETCH: c.flexAlignStretch
  },
  y = {
    SMALL: u.flexGutterSmall,
    LARGE: u.flexGutterLarge
  };
class O extends(r = a.PureComponent) {
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
      } = e,
      _ = h(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      g = f({
        style: f({
          flexGrow: i,
          flexShrink: r,
          flexBasis: s
        }, c),
        className: n === u.flexChild ? n : l()(u.flexChild, n)
      }, _);
    if (!d && "string" != typeof t && 1 === a.Children.count(t)) {
      let e = a.Children.only(t);
      return g.style = f({}, g.style, e.props.style), g.className = l()(e.props.className, n), a.cloneElement(e, g)
    }
    return (0, o.jsx)("div", p(f({}, g), {
      children: t
    }))
  }
}
d(O, "defaultProps", {
  className: u.flexChild,
  style: {},
  wrap: !1
});
class S extends(i = a.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        direction: r,
        justify: i,
        align: a,
        wrap: s,
        shrink: c,
        grow: d,
        basis: _,
        style: g,
        gutter: m
      } = e,
      E = h(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      v = f({
        flexShrink: c,
        flexGrow: d,
        flexBasis: _
      }, g);
    return (0, o.jsx)("div", p(f({
      style: v,
      className: l()(u.flex, r, i, a, s, m, n)
    }, E), {
      children: t
    }))
  }
}
d(S, "Child", O), d(S, "Direction", m), d(S, "Align", b), d(S, "Justify", E), d(S, "Wrap", v), d(S, "Gutter", y), d(S, "defaultProps", {
  direction: m.HORIZONTAL,
  justify: E.START,
  align: b.STRETCH,
  wrap: v.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})