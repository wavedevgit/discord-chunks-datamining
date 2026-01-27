/** Chunk was on web.js **/
/** chunk id: 153469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gc: () => l,
  V9: () => I,
  dY: () => v,
  hK: () => c,
  hm: () => A
}), require("./321073.js"), require("./896048.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk345815 = require("./345815.js");
let l = "custom-theme-background",
  c = "custom-client-theme",
  u = .05,
  d = .9,
  f = 30,
  p = .7,
  _ = 60,
  h = .4,
  m = 30,
  g = false,
  E = 30,
  y = 40,
  b = .1,
  O = .05;

function v(e, t, n, r) {
  let a = e.slice();
  1 === e.length && a.push(e[0]);
  let c = e.map(e => i()(e).luminance()),
    v = i()(e[c.indexOf(Math.min(...c))]),
    A = i()(e[c.indexOf(Math.max(...c))]),
    I = "linear-gradient(".concat(t, "deg, ").concat(a.join(", "), ")"),
    S = (0, o.Mw)(r),
    T = {
      light: i()(A).set("hsl.s", 1).set("hsl.l", d),
      dark: i()(v).set("hsl.s", 1).set("hsl.l", u)
    },
    C = 100 - n,
    N = "\n      --custom-theme-background: ".concat(I, ";\n      ", "--custom-background-gradient-chat-opacity-base-light", ": 0.95;\n      ", "--custom-background-gradient-highest-opacity-base-light", ": 1.0;\n      ", "--custom-background-gradient-opacity-mix-amount", ": ").concat(((f + p * C) / 100).toFixed(2), ";\n      ", "--custom-theme-border-color-amount", ": 5%;\n      "),
    w = S ? "\n      ".concat(s.RB.THEME_BASE_MIX_AMOUNT, ": ").concat(_ + h * C, "%;\n      ").concat(s.RB.THEME_TEXT_MIX_AMOUNT, ": ").concat(E, "%;\n    ") : "\n      ".concat(s.RB.THEME_BASE_MIX_AMOUNT, ": ").concat(m + g * n, "%;\n      ").concat(s.RB.THEME_TEXT_MIX_AMOUNT, ": ").concat(y, "%;\n    "),
    R = "\n      ".concat(s.RB.DARK_THEME_BASE_COLOR, ": ").concat(T.dark.css(), ";\n      ").concat(s.RB.DARK_THEME_BASE_COLOR_HSL, ": ").concat((0, s.FT)(T.dark), ";\n      ").concat(s.RB.DARK_THEME_TEXT_COLOR, ": ").concat(i()(v).set("hsl.l", ((100 - b * C) / 100).toFixed(2)).css(), ";\n    "),
    P = "\n      ".concat(s.RB.LIGHT_THEME_BASE_COLOR, ": ").concat(T.light.css(), ";\n      ").concat(s.RB.LIGHT_THEME_BASE_COLOR_HSL, ": ").concat((0, s.FT)(T.light), ";\n      ").concat(s.RB.LIGHT_THEME_TEXT_COLOR, ": ").concat(i()(A).set("hsl.l", (O * C / 100).toFixed(2)).css(), ";\n    ");
  return ".".concat(l, " {\n      ").concat(N, "\n      ").concat(w, "\n      ").concat(R, "\n      ").concat(P, "\n      }")
}

function A(e, t) {
  let n = a.A.unsafe_rawColors[e.colors[0].token].resolve({
      saturation: 1
    }).hex(),
    r = a.A.unsafe_rawColors[e.colors[e.colors.length - 1].token].resolve({
      saturation: 1
    }).hex(),
    i = (0, s.Zk)({
      enabled: true,
      primaryColor: n,
      secondaryColor: r,
      isDarkTheme: (0, o.Mw)(e.theme)
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