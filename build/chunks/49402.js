/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  I: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(803997),
  a = n.n(o),
  s = n(489948),
  l = n(821541),
  c = n(780900);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
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

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e, t, n) {
  let o = (0, c.G6)(e);
  return i.forwardRef(function(u, f) {
    var {
      children: h,
      className: m,
      dir: g = "ltr",
      orientation: E = "vertical",
      fade: v = !1,
      customTheme: b = !1,
      paddingFix: y = !0,
      style: O,
      gap: S,
      experimental_useStack: I
    } = u, T = _(u, ["children", "className", "dir", "orientation", "fade", "customTheme", "paddingFix", "style", "gap", "experimental_useStack"]);
    let {
      scrollerRef: N,
      getScrollerState: A
    } = (0, c.Ke)(), C = (0, c.t2)(N, E);
    i.useImperativeHandle(f, () => d({
      getScrollerNode: () => N.current,
      getScrollerState: A
    }, (0, c.Ue)(N, A, C, E)), [N, A, E, C]);
    let R = (0, c.tT)({
      paddingFix: y,
      orientation: E,
      dir: g,
      className: m,
      scrollerRef: N,
      specs: o
    });
    return I ? (0, r.jsx)(l.K, p(d({
      gap: S,
      ref: N,
      className: a()(m, {
        [e]: !0,
        [t]: v,
        [n]: b
      }),
      style: (0, c.uT)(O, E),
      dir: g
    }, T), {
      children: (0, r.jsxs)(s.Jc, {
        containerRef: N,
        children: [h, R]
      })
    })) : (0, r.jsx)("div", p(d({
      ref: N,
      className: a()(m, {
        [e]: !0,
        [t]: v,
        [n]: b
      }),
      style: (0, c.uT)(O, E),
      dir: g
    }, T), {
      children: (0, r.jsxs)(s.Jc, {
        containerRef: N,
        children: [h, R]
      })
    }))
  })
}