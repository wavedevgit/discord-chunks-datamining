/** Chunk was on web.js **/
/** chunk id: 844454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => o
});
var Chunk752689 = require("./752689.js"),
  Chunk951726 = require("./951726.js");

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