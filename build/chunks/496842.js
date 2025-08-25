/** Chunk was on web.js **/
/** chunk id: 496842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk39807 = require("./39807.js"),
  Chunk955650 = require("./955650.js");

function o(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": o,
    "aria-label": a,
    labelElementType: s = "label"
  } = e;
  t = (0, r.Me)(t);
  let l = (0, r.Me)(),
    c = {};
  return n && (o = o ? `${l} ${o}` : l, c = {
    id: l,
    htmlFor: "label" === s ? t : true
  }), {
    labelProps: c,
    fieldProps: (0, i.b)({
      id: t,
      "aria-label": a,
      "aria-labelledby": o
    })
  }
}