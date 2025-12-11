/** Chunk was on 1272 **/
/** chunk id: 86826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk120998 = require("./120998.jsx"),
  Chunk353042 = require("./353042.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk408756 = require("./408756.js");
let d = function(e) {
  let {
    title: t,
    className: n,
    color: i,
    animate: d,
    getHistoricalTotalBytes: p
  } = e;
  return (0, r.jsx)(o.Z, {
    getHistoricalTotalBytes: p,
    children: (e, o, p) => {
      var f;
      return (0, r.jsx)("div", {
        className: l()(u.monitor, n),
        children: (0, r.jsxs)(a.Z, {
          align: a.Z.Align.CENTER,
          children: [(0, r.jsxs)(a.Z, {
            className: u.text,
            direction: a.Z.Direction.VERTICAL,
            children: [(0, r.jsx)("div", {
              className: u.title,
              children: t
            }), (0, r.jsx)("div", {
              className: u.rate,
              children: (f = e[e.length - 1] / o * 1e3) > 1e3 ? c.intl.formatToPlainString(c.t["WU+gTX"], {
                size: Math.round(f / 1e3)
              }) : c.intl.formatToPlainString(c.t.wnF6TH, {
                size: Math.round(f)
              })
            })]
          }), (0, r.jsx)("div", {
            className: u.overflowContainer,
            children: (0, r.jsx)(s.Z, {
              data: e,
              maxValue: Math.max(Math.max.apply(null, e), 1e3),
              className: u.sparkChart,
              updateInterval: o,
              color: i,
              numUpdatesToShow: p,
              animate: d,
              pixelWidth: 600,
              pixelHeight: 48,
              lineWidth: 4
            })
          })]
        })
      })
    }
  })
}