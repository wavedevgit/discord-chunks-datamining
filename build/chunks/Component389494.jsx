/** Chunk was on web.js **/
/** chunk id: 389494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a,
  y: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk492435 = require("./492435.js");

function a(e) {
  return e.map(e => ({
    label: e.label,
    value: e.id
  }))
}

function s(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: s
  } = e;
  return (0, r.jsx)(i.q4e, {
    value: null != s ? s.variantId : null,
    clearable: null != s,
    options: a(t.variants),
    onChange: e => (0, o.rX)(t.system, n, e)
  })
}