/** Chunk was on 7384 **/
/** chunk id: 674343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk36703 = require("./36703.js"),
  Chunk684554 = require("./684554.js");
let d = (0, Chunk313201.hQ)();

function u(e) {
  let {
    volume: t,
    title: n,
    description: r,
    label: l,
    onVolumeChange: u,
    refreshStyles: m = false
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.soundboardRow, {
      [c.refresh]: m
    }),
    children: [(0, i.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, i.jsx)(a.xJW, {
        title: n,
        children: (0, i.jsx)(a.R94, {
          children: r
        })
      })
    }), (0, i.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, i.jsx)(a.xJW, {
        title: l,
        titleId: d,
        children: (0, i.jsx)(a.iRW, {
          initialValue: (0, o.P)(t),
          maxValue: 100,
          onValueRender: e => "".concat(e.toFixed(0), "%"),
          onValueChange: u,
          "aria-labelledby": d
        })
      })
    })]
  })
}