/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(596454),
  l = n(633302),
  c = n(695346),
  u = n(556638),
  d = n(905035);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
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

function p(e) {
  let {
    emoji: t,
    className: n,
    animate: i = !0,
    hideTooltip: f = !1,
    tooltipDelay: p = u.X
  } = e, h = c.Yk.useSetting(), m = null != t.id ? ":".concat(t.name, ":") : l.ZP.translateSurrogatesToInlineEmoji(t.name), g = {
    className: o()(d.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && h && i)
  };
  return f ? (0, r.jsx)(s.Z, _({}, g)) : (0, r.jsx)(a.ua7, {
    text: m,
    delay: p,
    children: e => (0, r.jsx)(s.Z, _({}, e, g))
  })
}