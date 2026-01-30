/** Chunk was on 78376 **/
/** chunk id: 946015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => O
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk112303 = require("./112303.js"),
  Chunk50567 = require("./50567.js");

function u(e, t, n) {
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
      u(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let g = {
    VERTICAL: Chunk112303.yG,
    HORIZONTAL: Chunk112303.OZ,
    HORIZONTAL_REVERSE: Chunk112303.y0
  },
  A = {
    START: Chunk112303.KF,
    END: Chunk112303.HA,
    CENTER: Chunk112303.pb,
    BETWEEN: Chunk112303.G1,
    AROUND: Chunk112303.nm
  },
  f = {
    NO_WRAP: Chunk112303.B,
    WRAP: Chunk112303.aR,
    WRAP_REVERSE: Chunk112303.KM
  },
  b = {
    START: Chunk112303.j$,
    END: Chunk112303.S_,
    CENTER: Chunk112303.YO,
    STRETCH: Chunk112303.ai
  },
  h = {
    SMALL: Chunk50567.sf,
    LARGE: Chunk50567.S6
  };
class E extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        shrink: r,
        grow: i,
        basis: a,
        style: c,
        wrap: u
      } = e,
      g = m(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
      A = _({
        style: _({
          flexGrow: i,
          flexShrink: r,
          flexBasis: a
        }, c),
        className: n === d.Gu ? n : o()(d.Gu, n)
      }, g);
    if (!u && "string" != typeof t && 1 === s.Children.count(t)) {
      let e = s.Children.only(t);
      return A.style = _({}, A.style, e.props.style), A.className = o()(e.props.className, n), s.cloneElement(e, A)
    }
    return (0, l.jsx)("div", p(_({}, A), {
      children: t
    }))
  }
}
u(E, "defaultProps", {
  className: Chunk50567.Gu,
  style: {},
  wrap: false
});
class O extends(i = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        children: t,
        className: n,
        direction: r,
        justify: i,
        align: s,
        wrap: a,
        shrink: c,
        grow: u,
        basis: g,
        style: A,
        gutter: f
      } = e,
      b = m(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style", "gutter"]),
      h = _({
        flexShrink: c,
        flexGrow: u,
        flexBasis: g
      }, A);
    return (0, l.jsx)("div", p(_({
      style: h,
      className: o()(d.Uu, r, i, s, a, f, n)
    }, b), {
      children: t
    }))
  }
}
u(O, "Child", E), u(O, "Direction", g), u(O, "Align", b), u(O, "Justify", A), u(O, "Wrap", f), u(O, "Gutter", h), u(O, "defaultProps", {
  direction: g.HORIZONTAL,
  justify: A.START,
  align: b.STRETCH,
  wrap: f.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
})