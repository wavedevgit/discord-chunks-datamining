/** Chunk was on web.js **/
/** chunk id: 674343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk36703 = require("./36703.js"),
  Chunk684554 = require("./684554.js");
let u = (0, Chunk313201.hQ)();

function d(e) {
  let {
    volume: t,
    title: n,
    description: i,
    label: s,
    onVolumeChange: d,
    refreshStyles: f = false
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.soundboardRow, {
      [c.refresh]: f
    }),
    children: [(0, r.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, r.jsx)(o.xJW, {
        title: n,
        children: (0, r.jsx)(o.R94, {
          children: i
        })
      })
    }), (0, r.jsx)("div", {
      className: c.soundboardColumn,
      children: (0, r.jsx)(o.xJW, {
        title: s,
        titleId: u,
        children: (0, r.jsx)(o.iRW, {
          initialValue: (0, l.P)(t),
          maxValue: 100,
          onValueRender: e => "".concat(e.toFixed(0), "%"),
          onValueChange: d,
          "aria-labelledby": u
        })
      })
    })]
  })
}