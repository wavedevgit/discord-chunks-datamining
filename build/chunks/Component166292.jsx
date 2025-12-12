/** Chunk was on web.js **/
/** chunk id: 166292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk696638 = require("./696638.js");

function s(e) {
  let {
    node: t
  } = e;
  return (0, r.jsx)("div", {
    className: a.split,
    children: t.layout.map(e => (0, r.jsx)(o.Z, {
      node: e
    }, e.key))
  })
}
let l = Chunk473749.memo(s)