/** Chunk was on web.js **/
/** chunk id: 458217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OB: () => c,
  Pf: () => u,
  Tr: () => o
}), require("./896048.js"), require("./65821.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784);
let a = 3,
  s = 100,
  o = {
    NonText: 3,
    Text: 4.5,
    HighContrastText: 7
  };

function l(e) {
  let [t, n, r, i] = e.rgba();
  return "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")")
}

function c(e) {
  var t, n, r;
  let c = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    u = null != (t = c.contrastRatio) ? t : o.NonText,
    d = null != (n = c.tolerance) ? n : a,
    f = i()(null != (r = c.base) ? r : e),
    p = i()(e),
    _ = f.luminance(),
    h = p,
    m = u,
    g = u + d,
    E = i().contrast(f, p),
    y = s;
  for (; y-- > 0;) {
    let e = E < m,
      t = E > g;
    if (!e && !t) break;
    let n = h.luminance() > _;
    h = t && n || e && !n ? h.darken() : h.brighten(), E = i().contrast(f, h)
  }
  return l(h)
}

function u(e, t) {
  return l(i()(e).brighten(t))
}