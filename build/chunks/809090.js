/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(686546),
  l = n(768581),
  c = n(895924),
  u = n(467895),
  d = n(970952);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
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

function E(e) {
  var {
    section: t,
    isSelected: n,
    width: o,
    height: f,
    className: _,
    selectable: g = !1,
    isSquircle: E,
    onFocus: v,
    onBlur: b,
    onMouseOver: y,
    onMouseLeave: O
  } = e, S = m(e, ["section", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]);
  let [I, T] = i.useState(!1), N = i.useCallback(() => {
    T(!0), null == v || v()
  }, [v]), A = i.useCallback(() => {
    T(!1), null == b || b()
  }, [b]), C = i.useCallback(() => {
    T(!0), null == y || y()
  }, [y]), R = i.useCallback(() => {
    T(!1), null == O || O()
  }, [O]), P = i.useMemo(() => {
    if (t.type === c.Qi.APPLICATION) {
      var e;
      return l.ZP.getApplicationIconURL({
        id: t.id,
        icon: t.icon,
        bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
        botIconFirst: !0,
        size: o
      })
    }
    return d
  }, [t, o]);
  return (0, r.jsx)("div", h(p({}, S), {
    className: a()(u.wrapper, _, {
      [u.selectable]: g,
      [u.selected]: g && n
    }),
    onFocus: N,
    onBlur: A,
    onMouseOver: C,
    onMouseLeave: R,
    children: (0, r.jsx)(s.ZP, {
      className: u.mask,
      mask: E || g && (n || I) ? s.QS.SQUIRCLE : s.QS.AVATAR_DEFAULT,
      width: o,
      height: f,
      children: (0, r.jsx)("img", {
        alt: "",
        className: u.icon,
        style: {
          width: o,
          height: f
        },
        src: P
      })
    })
  }))
}