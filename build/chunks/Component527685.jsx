/** Chunk was on web.js **/
/** chunk id: 527685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  y: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./512722.js");
var Chunk410030 = require("./410030.js"),
  Chunk49552 = require("./49552.js"),
  c = function(e) {
    return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
  }({});
let u = e => {
  var t;
  let {
    progress: n,
    minimum: a = 0,
    maximum: c = 100,
    variant: u,
    override: d,
    labelledBy: f
  } = e, _ = null != d && "unset" === u, p = (0, s.ZP)(), h = null != (t = null == d ? true : d[p]) ? t : null == d ? true : d.default, m = i.useMemo(() => (n - a) / (c - a) * 100, [n, a, c]), g = n === a, E = _ ? {
    "--custom-background": null == h ? true : h.background,
    "--custom-gradient-start": null == h ? true : h.gradientStart,
    "--custom-gradient-end": null == h ? true : h.gradientEnd,
    "--custom-gradient-glow": null == h ? true : h.gradientEnd
  } : {};
  return (0, r.jsx)("div", {
    className: o()(l.progressContainer, l[u]),
    style: E,
    children: (0, r.jsxs)("div", {
      className: o()(l.progress, {
        [l.empty]: g
      }),
      style: {
        width: "".concat(m, "%")
      },
      role: "meter",
      "aria-valuenow": n,
      "aria-valuemin": a,
      "aria-valuemax": c,
      "aria-labelledby": f,
      children: [(0, r.jsx)("div", {
        className: o()(l.glow, {
          [l.empty]: g
        })
      }), (0, r.jsx)("div", {
        className: o()(l.bar, l[u], {
          [l.empty]: g
        })
      })]
    })
  })
}