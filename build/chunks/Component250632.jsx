/** Chunk was on 21738 **/
/** chunk id: 250632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk235986 = require("./235986.jsx"),
  Chunk957358 = require("./957358.jsx"),
  Chunk505806 = require("./505806.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk602570 = require("./602570.js");
let d = function(e) {
  let {
    title: t,
    className: n,
    color: i,
    animate: d,
    getHistoricalTotalBytes: p
  } = e;
  return (0, r.jsx)(o.A, {
    getHistoricalTotalBytes: p,
    children: (e, o, p) => {
      var f;
      return (0, r.jsx)("div", {
        className: l()(u.dm, n),
        children: (0, r.jsxs)(a.A, {
          align: a.A.Align.CENTER,
          children: [(0, r.jsxs)(a.A, {
            className: u.Qq,
            direction: a.A.Direction.VERTICAL,
            children: [(0, r.jsx)("div", {
              className: u.DD,
              children: t
            }), (0, r.jsx)("div", {
              className: u.TS,
              children: (f = e[e.length - 1] / o * 1e3) > 1e3 ? c.intl.formatToPlainString(c.t["WU+gTX"], {
                size: Math.round(f / 1e3)
              }) : c.intl.formatToPlainString(c.t.wnF6TH, {
                size: Math.round(f)
              })
            })]
          }), (0, r.jsx)("div", {
            className: u.MQ,
            children: (0, r.jsx)(s.A, {
              data: e,
              maxValue: Math.max(Math.max.apply(null, e), 1e3),
              className: u.CD,
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