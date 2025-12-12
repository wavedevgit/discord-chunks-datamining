/** Chunk was on web.js **/
/** chunk id: 674343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36703 = require("./36703.js");

function o(e) {
  let {
    volume: t,
    description: n,
    label: o,
    onVolumeChange: s
  } = e;
  return (0, r.jsx)(i.iRW, {
    label: o,
    description: n,
    initialValue: (0, a.P)(t),
    maxValue: 100,
    onValueRender: e => "".concat(e.toFixed(0), "%"),
    onValueChange: s
  })
}