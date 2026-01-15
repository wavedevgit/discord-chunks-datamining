/** Chunk was on web.js **/
/** chunk id: 950104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DT: () => u,
  Qg: () => c,
  S3: () => s
}), require("./388685.js"), require("./415506.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619);
let a = 3,
  o = 100,
  s = {
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
    u = null != (t = c.contrastRatio) ? t : s.NonText,
    d = null != (n = c.tolerance) ? n : a,
    f = i()(null != (r = c.base) ? r : e),
    p = i()(e),
    _ = f.luminance(),
    h = p,
    m = u,
    g = u + d,
    E = i().contrast(f, p),
    b = o;
  for (; b-- > 0;) {
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