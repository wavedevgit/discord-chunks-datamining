/** Chunk was on web.js **/
"use strict";
n.d(t, {
  L: () => b
}), n(653041);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(512969),
  l = n(481060),
  c = n(624138),
  u = n(368673);

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
let m = [18, 18, 16, 16, 14, 12, 10];

function E(e) {
  var t;
  return null !== (t = m[e.length - 1]) && void 0 !== t ? t : m[m.length - 1]
}

function v(e, t) {
  return a()({
    [u.childWrapper]: !0,
    [u.childWrapperNoHoverBg]: "always" === e,
    [u.childWrapperHoverScale]: "on-hover" === e && t
  })
}
let b = e => {
  let t, n;
  var {
    backgroundStyle: o = "always",
    children: d,
    icon: _,
    name: g,
    ariaLabel: m,
    className: b,
    style: y,
    to: O,
    onClick: S,
    selected: I = !1
  } = e, T = h(e, ["backgroundStyle", "children", "icon", "name", "ariaLabel", "className", "style", "to", "onClick", "selected"]);
  let N = (0, s.k6)();
  null == _ && null != g && (n = E(t = (0, c.Zg)(g)));
  let A = i.useCallback(e => {
      if (null == O);
      else if ("string" == typeof O) N.push(O);
      else {
        let {
          pathname: e = "",
          state: t
        } = O;
        N.push(e, t)
      }
      null != S && S(e)
    }, [N, O, S]),
    C = (0, l.dQu)(l.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, r.jsxs)(l.P3F, p(f({}, T), {
    onClick: A,
    className: a()(b, u.wrapper, {
      [u.selected]: I
    }),
    "aria-label": null != m && "" !== m ? m : null != g ? g : "",
    style: p(f({}, y), {
      fontSize: n
    }),
    focusProps: {
      enabled: !1
    },
    children: [null != t ? (0, r.jsx)("div", {
      className: a()(v(o, !1), u.acronym),
      "aria-hidden": !0,
      children: t
    }) : null, null != _ ? (0, r.jsx)("img", {
      className: u.icon,
      src: _,
      alt: " ",
      width: C,
      height: C,
      "aria-hidden": !0
    }) : null, null != d ? (0, r.jsx)("div", {
      className: v(o, !0),
      children: d
    }) : null]
  }))
}