/** Chunk was on 1272 **/
/** chunk id: 86826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk44315 = require("./44315.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk120998 = require("./120998.jsx"),
  Chunk353042 = require("./353042.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk403595 = require("./403595.js");
let p = function(e) {
  var t;
  let {
    title: n,
    className: i,
    color: p,
    animate: f,
    gradientStopColor: m,
    getHistoricalTotalBytes: h
  } = e, g = (0, a.Sl)(p).hex, _ = null == (t = (0, a.Sl)(m)) ? true : t.hex;
  return (0, r.jsx)(c.Z, {
    getHistoricalTotalBytes: h,
    children: (e, t, a) => {
      var c;
      return (0, r.jsx)("div", {
        className: l()(d.monitor, i),
        children: (0, r.jsxs)(s.Z, {
          align: s.Z.Align.CENTER,
          children: [(0, r.jsxs)(s.Z, {
            className: d.text,
            direction: s.Z.Direction.VERTICAL,
            children: [(0, r.jsx)("div", {
              className: d.title,
              children: n
            }), (0, r.jsx)("div", {
              className: d.rate,
              children: (c = e[e.length - 1] / t * 1e3) > 1e3 ? u.intl.formatToPlainString(u.t["WU+gTX"], {
                size: Math.round(c / 1e3)
              }) : u.intl.formatToPlainString(u.t.wnF6TH, {
                size: Math.round(c)
              })
            })]
          }), (0, r.jsx)("div", {
            className: d.overflowContainer,
            children: (0, r.jsx)(o.Z, {
              data: e,
              maxValue: Math.max(Math.max.apply(null, e), 1e3),
              className: d.sparkChart,
              updateInterval: t,
              color: g,
              gradientStopColor: _,
              numUpdatesToShow: a,
              animate: f,
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