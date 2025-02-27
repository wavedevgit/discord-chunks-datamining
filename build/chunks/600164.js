/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(183550),
  l = n(612064);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = {
    VERTICAL: l.vertical,
    HORIZONTAL: s.horizontal,
    HORIZONTAL_REVERSE: s.horizontalReverse
  },
  g = {
    START: l.justifyStart,
    END: l.justifyEnd,
    CENTER: l.justifyCenter,
    BETWEEN: l.justifyBetween,
    AROUND: l.justifyAround
  },
  m = {
    START: l.alignStart,
    END: l.alignEnd,
    CENTER: l.alignCenter,
    STRETCH: l.alignStretch,
    BASELINE: l.alignBaseline
  },
  E = {
    NO_WRAP: l.noWrap,
    WRAP: l.wrap,
    WRAP_REVERSE: l.wrapReverse
  },
  v = e => {
    var {
      children: t,
      className: n,
      shrink: o = 1,
      grow: l = 1,
      basis: c = "auto",
      style: d,
      wrap: p = !1
    } = e, h = _(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]);
    let g = u({
      className: n = null != n ? n : s.flexChild,
      style: u({
        flexGrow: l,
        flexShrink: o,
        flexBasis: c
      }, d)
    }, h);
    if (!p && "string" != typeof t && 1 === i.Children.count(t)) {
      let e = i.Children.only(t);
      return g.style = u({}, g.style, e.props.style), g.className = a()(e.props.className, n), i.cloneElement(e, g)
    }
    return (0, r.jsx)("div", f(u({}, g), {
      children: t
    }))
  },
  b = e => {
    var {
      children: t,
      className: n,
      direction: i = h.HORIZONTAL,
      justify: o = g.START,
      align: l = m.STRETCH,
      wrap: c = E.NO_WRAP,
      shrink: d = 1,
      grow: p = 1,
      basis: v = "auto",
      style: b
    } = e, y = _(e, ["children", "className", "direction", "justify", "align", "wrap", "shrink", "grow", "basis", "style"]);
    return (0, r.jsx)("div", f(u({
      style: u({
        flexShrink: d,
        flexGrow: p,
        flexBasis: v
      }, b),
      className: a()(s.flex, i, o, l, c, n)
    }, y), {
      children: t
    }))
  };
b.Child = v, b.Direction = h, b.Align = m, b.Justify = g, b.Wrap = E;
let y = b