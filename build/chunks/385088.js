/** Chunk was on web.js **/
/** chunk id: 385088, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => a
});
var Chunk795074 = require("./795074.js"),
  Chunk164088 = require("./164088.js");

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
  return n ? (a = a ? `${l} ${a}` : l, c = {
    id: l,
    htmlFor: "label" === s ? t : true
  }) : a || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
    labelProps: c,
    fieldProps: (0, i.b)({
      id: t,
      "aria-label": o,
      "aria-labelledby": a
    })
  }
}