/** Chunk was on web.js **/
/** chunk id: 575196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e3: () => l,
  gj: () => O,
  yf: () => v,
  yz: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk691324 = require("./691324.js"),
  Chunk780384 = require("./780384.js"),
  Chunk629935 = require("./629935.js");
let l = "custom-theme-background",
  c = .05,
  u = .9,
  d = 30,
  f = .7,
  _ = 60,
  p = .4,
  h = 30,
  m = false,
  g = 30,
  E = 40,
  b = .1,
  y = .05;

function O(e, t, n, r) {
  let a = e.slice();
  1 === e.length && a.push(e[0]);
  let O = e.map(e => i()(e).luminance()),
    v = i()(e[O.indexOf(Math.min(...O))]),
    I = i()(e[O.indexOf(Math.max(...O))]),
    T = "linear-gradient(".concat(t, "deg, ").concat(a.join(", "), ")"),
    S = (0, o.wj)(r),
    A = {
      light: i()(I).set("hsl.s", 1).set("hsl.l", u),
      dark: i()(v).set("hsl.s", 1).set("hsl.l", c)
    },
    C = 100 - n,
    N = "\n      --custom-theme-background: ".concat(T, ";\n      ", "--custom-background-gradient-chat-opacity-base-light", ": 0.95;\n      ", "--custom-background-gradient-highest-opacity-base-light", ": 1.0;\n      ", "--custom-background-gradient-opacity-mix-amount", ": ").concat(((d + f * C) / 100).toFixed(2), ";\n      ", "--custom-theme-border-color-amount", ": 5%;\n      "),
    R = S ? "\n      ".concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ").concat(_ + p * C, "%;\n      ").concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ").concat(g, "%;\n    ") : "\n      ".concat(s.Yk.THEME_BASE_MIX_AMOUNT, ": ").concat(h + m * n, "%;\n      ").concat(s.Yk.THEME_TEXT_MIX_AMOUNT, ": ").concat(E, "%;\n    "),
    P = "\n      ".concat(s.Yk.DARK_THEME_BASE_COLOR, ": ").concat(A.dark.css(), ";\n      ").concat(s.Yk.DARK_THEME_BASE_COLOR_HSL, ": ").concat((0, s.dw)(A.dark), ";\n      ").concat(s.Yk.DARK_THEME_TEXT_COLOR, ": ").concat(i()(v).set("hsl.l", ((100 - b * C) / 100).toFixed(2)).css(), ";\n    "),
    w = "\n      ".concat(s.Yk.LIGHT_THEME_BASE_COLOR, ": ").concat(A.light.css(), ";\n      ").concat(s.Yk.LIGHT_THEME_BASE_COLOR_HSL, ": ").concat((0, s.dw)(A.light), ";\n      ").concat(s.Yk.LIGHT_THEME_TEXT_COLOR, ": ").concat(i()(I).set("hsl.l", (y * C / 100).toFixed(2)).css(), ";\n    ");
  return ".".concat(l, " {\n      ").concat(N, "\n      ").concat(R, "\n      ").concat(P, "\n      ").concat(w, "\n      }")
}

function v(e, t) {
  let n = a.b[e.colors[0].token].hex,
    r = a.b[e.colors[e.colors.length - 1].token].hex,
    i = (0, s.W4)({
      enabled: true,
      primaryColor: n,
      secondaryColor: r,
      isDarkTheme: (0, o.wj)(e.theme)
    }),
    c = "\n      ".concat(Object.entries(i).map(e => {
      let [t, n] = e;
      return "".concat(t, ": ").concat(n, ";")
    }).join("\n"), "\n    ");
  return ".".concat(l, " {\n      ", "--custom-theme-background", ": ").concat(t, ";\n      ", "--custom-theme-primary-color", ": ").concat(n, ";\n      ", "--custom-theme-secondary-color", ": ").concat(r, ";\n      ").concat(c, "\n    }")
}
let I = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = e.slice();
  return 1 === e.length && n.push(e[0]), "linear-gradient(".concat(t, "deg, ").concat(n.join(", "), ")")
}