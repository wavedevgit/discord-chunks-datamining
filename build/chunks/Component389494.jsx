/** Chunk was on web.js **/
/** chunk id: 389494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s,
  y: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk492435 = require("./492435.js"),
  Chunk438159 = require("./438159.js");

function s(e) {
  return (0, a.v)(e).map(e => ({
    label: e.label,
    value: e.id
  }))
}

function l(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a
  } = e;
  return (0, r.jsx)(i.q4e, {
    value: null != a ? a.variantId : null,
    clearable: null != a,
    options: s(t),
    onChange: e => (0, o.rX)(t.system, n, e)
  })
}