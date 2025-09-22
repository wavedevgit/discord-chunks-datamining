/** Chunk was on web.js **/
/** chunk id: 674343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk36703 = require("./36703.js"),
  Chunk684554 = require("./684554.js");

function s(e) {
  let {
    volume: t,
    title: n,
    description: s,
    label: l,
    onVolumeChange: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o.soundboardRow,
    children: [(0, r.jsx)("div", {
      className: o.soundboardColumn,
      children: (0, r.jsx)(i.xJW, {
        title: n,
        children: (0, r.jsx)(i.R94, {
          children: s
        })
      })
    }), (0, r.jsx)("div", {
      className: o.soundboardColumn,
      children: (0, r.jsx)(i.iRW, {
        label: l,
        initialValue: (0, a.P)(t),
        maxValue: 100,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        onValueChange: c
      })
    })]
  })
}