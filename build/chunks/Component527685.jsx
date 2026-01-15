/** Chunk was on web.js **/
/** chunk id: 527685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NZ: () => u,
  ZP: () => d,
  yB: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./512722.js");
var Chunk410030 = require("./410030.js"),
  Chunk383504 = require("./383504.js"),
  c = function(e) {
    return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
  }({}),
  u = function(e) {
    return e.LIGHT = "light", e.MEDIUM = "medium", e
  }({});
let d = e => {
  var t;
  let {
    progress: n,
    minimum: a = 0,
    maximum: c = 100,
    weight: u = "light",
    variant: d,
    override: f,
    labelledBy: p
  } = e, _ = null != f && "unset" === d, h = (0, s.ZP)(), m = null != (t = null == f ? true : f[h]) ? t : null == f ? true : f.default, g = i.useMemo(() => (n - a) / (c - a) * 100, [n, a, c]), E = n === a, b = _ ? {
    "--custom-background": null == m ? true : m.background,
    "--custom-gradient-start": null == m ? true : m.gradientStart,
    "--custom-gradient-end": null == m ? true : m.gradientEnd,
    "--custom-gradient-glow": null == m ? true : m.gradientEnd
  } : {};
  return (0, r.jsx)("div", {
    className: o()(l.progressContainer, l[u], l[d]),
    style: b,
    children: (0, r.jsxs)("div", {
      className: o()(l.progress, {
        [l.empty]: E
      }),
      style: {
        width: "".concat(g, "%")
      },
      role: "meter",
      "aria-valuenow": n,
      "aria-valuemin": a,
      "aria-valuemax": c,
      "aria-labelledby": p,
      children: [(0, r.jsx)("div", {
        className: o()(l.glow, {
          [l.empty]: E
        })
      }), (0, r.jsx)("div", {
        className: o()(l.bar, l[d], {
          [l.empty]: E
        })
      })]
    })
  })
}