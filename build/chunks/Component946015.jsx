/** Chunk was on web.js **/
/** chunk id: 946015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => v
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk112303 = require("./112303.js"),
  Chunk50567 = require("./50567.js");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = {
    VERTICAL: Chunk112303.yG,
    HORIZONTAL: Chunk112303.OZ,
    HORIZONTAL_REVERSE: Chunk112303.y0
  },
  E = {
    START: Chunk112303.KF,
    END: Chunk112303.HA,
    CENTER: Chunk112303.pb,
    BETWEEN: Chunk112303.G1,
    AROUND: Chunk112303.nm
  },
  b = {
    NO_WRAP: Chunk112303.B,
    WRAP: Chunk112303.aR,
    WRAP_REVERSE: Chunk112303.KM
  },
  y = {
    START: Chunk112303.j$,
    END: Chunk112303.S_,
    CENTER: Chunk112303.YO,
    STRETCH: Chunk112303.ai
  },
  O = {
    SMALL: Chunk50567.sf,
    LARGE: Chunk50567.S6
  };
class A extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        shrink: r,
        grow: i,
        basis: o,
        style: c,
        wrap: d
      } = e,
      p = h(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      m = f({
        style: f({
          flexGrow: i,
          flexShrink: r,
          flexBasis: o
        }, c),
        className: n === u.Gu ? n : l()(u.Gu, n)
      }, p);
    if (!d && "string" != typeof t && 1 === s.Children.count(t)) {
      let e = s.Children.only(t);
      return m.style = f({}, m.style, e.props.style), m.className = l()(e.props.className, n), s.cloneElement(e, m)
    }
    return (0, a.jsx)("div", _(f({}, m), {
      children: t
    }))
  }
}
d(A, "defaultProps", {
  className: Chunk50567.Gu,
  style: {},
  wrap: false
});
class v extends(i = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        direction: r,
        justify: i,
        align: s,
        wrap: o,
        shrink: c,
        grow: d,
        basis: p,
        style: m,
        gutter: g
      } = e,
      E = h(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      b = f({
        flexShrink: c,
        flexGrow: d,
        flexBasis: p
      }, m);
    return (0, a.jsx)("div", _(f({
      style: b,
      className: l()(u.Uu, r, i, s, o, g, n)
    }, E), {
      children: t
    }))
  }
}
d(v, "Child", A), d(v, "Direction", g), d(v, "Align", y), d(v, "Justify", E), d(v, "Wrap", b), d(v, "Gutter", O), d(v, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: E.START,
  align: y.STRETCH,
  wrap: b.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})