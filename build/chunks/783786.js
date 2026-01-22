/** Chunk was on web.js **/
/** chunk id: 783786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a
});
var Chunk723906 = require("./723906.js"),
  Chunk48284 = require("./48284.js");

function a(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": a,
    "aria-label": s,
    labelElementType: o = "label"
  } = e;
  t = (0, r.Bi)(t);
  let l = (0, r.Bi)(),
    c = {};
  return n && (a = a ? `${l} ${a}` : l, c = {
    id: l,
    htmlFor: "label" === o ? t : true
  }), {
    labelProps: c,
    fieldProps: (0, i.b)({
      id: t,
      "aria-label": s,
      "aria-labelledby": a
    })
  }
}