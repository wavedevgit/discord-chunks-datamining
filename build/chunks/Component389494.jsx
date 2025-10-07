/** Chunk was on web.js **/
/** chunk id: 389494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s,
  y: () => l
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk492435 = require("./492435.js"),
  Chunk438159 = require("./438159.js");

function s(e) {
  return (0, o.v)(e).map(e => ({
    label: e.label,
    value: e.id
  }))
}

function l(e) {
  let {
    label: t,
    description: n,
    experiment: o,
    experimentId: l,
    overrideInfo: c
  } = e;
  return (0, r.jsx)(i.q4e, {
    label: t,
    description: n,
    value: null != c ? c.variantId : null,
    clearable: null != c,
    options: s(o),
    onChange: e => (0, a.rX)(o.system, l, e)
  })
}