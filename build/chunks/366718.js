/** Chunk was on web.js **/
/** chunk id: 366718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
});
var Chunk743994 = require("./743994.js"),
  Chunk674533 = require("./674533.js");

function a(e) {
  let {
    id: t,
    label: n,
    "aria-labelledby": a,
    "aria-label": o,
    labelElementType: s = "label"
  } = e;
  t = (0, r.Me)(t);
  let l = (0, r.Me)(),
    c = {};
  return n && (a = a ? `${l} ${a}` : l, c = {
    id: l,
    htmlFor: "label" === s ? t : true
  }), {
    labelProps: c,
    fieldProps: (0, i.b)({
      id: t,
      "aria-label": o,
      "aria-labelledby": a
    })
  }
}