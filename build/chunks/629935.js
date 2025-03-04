/** Chunk was on web.js **/
"use strict";
n.d(t, {
  W4: () => g
}), n(47120);
var r = n(688619),
  i = n.n(r);
let o = "--theme-base-color-amount",
  a = "--theme-text-color-amount",
  s = "--theme-base-color-light",
  l = "--theme-text-color-light",
  c = "--theme-base-color-light-hsl",
  u = "--theme-base-color-dark",
  d = "--theme-text-color-dark",
  f = "--theme-base-color-dark-hsl",
  _ = 50,
  p = 38;

function h(e) {
  let {
    primaryColor: t,
    secondaryColor: n,
    isDarkTheme: r
  } = e, o = i()(t), a = i()(n), [s, l] = o.luminance() > a.luminance() ? [o, a] : [a, o], c = l.get("hsl.h");
  (0 === c || Number.isNaN(c)) && (l = s);
  let u = r ? s.set("hsl.s", 1) : l.set("hsl.s", 1),
    d = u.get("hsl.h"),
    f = d >= 200 && d <= 300 ? r ? .8 : .25 : r ? .95 : .15;
  return u = u.set("hsl.l", f), {
    base: r ? l.set("hsl.s", 1).set("hsl.l", .05) : s.set("hsl.s", 1).set("hsl.l", .9),
    text: u
  }
}

function g(e) {
  let {
    enabled: t,
    primaryColor: n,
    secondaryColor: r,
    baseMixAmount: i = _,
    textMixAmount: g = p
  } = e, {
    base: E,
    text: v
  } = h({
    primaryColor: n,
    secondaryColor: r,
    isDarkTheme: !0
  }), {
    base: b,
    text: y
  } = h({
    primaryColor: n,
    secondaryColor: r,
    isDarkTheme: !1
  });
  return {
    [c]: m(b),
    [s]: b.css(),
    [l]: y.css(),
    [f]: m(E),
    [u]: E.css(),
    [d]: v.css(),
    [o]: "".concat(t ? i : 0, "%"),
    [a]: "".concat(t ? g : 0, "%"),
    "--bg-overlay-selected": "unset",
    "--bg-overlay-hover": "unset",
    "--bg-overlay-active": "unset"
  }
}

function m(e) {
  let [t, n, r] = e.hsl();
  return "".concat(Number.isNaN(t) ? 0 : t, " ").concat(100 * n, "% ").concat(100 * r, "%")
}