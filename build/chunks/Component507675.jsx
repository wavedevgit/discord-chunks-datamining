/** Chunk was on web.js **/
/** chunk id: 507675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk600164 = require("./600164.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk265251 = require("./265251.js");

function s(e) {
  let {
    mainText: t,
    supportingText: n,
    errorCodeText: s,
    children: l,
    size: c
  } = e;
  return (0, r.jsxs)(i.Z, {
    className: a.root,
    justify: i.Z.Justify.CENTER,
    align: i.Z.Align.CENTER,
    direction: i.Z.Direction.VERTICAL,
    children: [(0, r.jsx)(o.Z, {
      header: t,
      description: n,
      errorCodeMessage: s,
      size: c
    }), l]
  })
}