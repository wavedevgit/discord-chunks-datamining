/** Chunk was on web.js **/
/** chunk id: 674343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk36703 = require("./36703.js"),
  Chunk684554 = require("./684554.js");
let l = (0, Chunk313201.hQ)();

function c(e) {
  let {
    volume: t,
    title: n,
    description: a,
    label: c,
    onVolumeChange: u
  } = e;
  return (0, r.jsxs)("div", {
    className: s.soundboardRow,
    children: [(0, r.jsx)("div", {
      className: s.soundboardColumn,
      children: (0, r.jsx)(i.xJW, {
        title: n,
        children: (0, r.jsx)(i.R94, {
          children: a
        })
      })
    }), (0, r.jsx)("div", {
      className: s.soundboardColumn,
      children: (0, r.jsx)(i.xJW, {
        title: c,
        titleId: l,
        children: (0, r.jsx)(i.iRW, {
          initialValue: (0, o.P)(t),
          maxValue: 100,
          onValueRender: e => "".concat(e.toFixed(0), "%"),
          onValueChange: u,
          "aria-labelledby": l
        })
      })
    })]
  })
}