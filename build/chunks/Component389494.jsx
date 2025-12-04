/** Chunk was on web.js **/
/** chunk id: 389494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => s
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk199849 = require("./199849.jsx"),
  Chunk922699 = require("./922699.js"),
  Chunk492435 = require("./492435.js");

function s(e) {
  let {
    label: t,
    description: n,
    experiment: s,
    experimentId: l,
    overrideInfo: c
  } = e;
  return (0, r.jsx)(i.y6, {
    label: t,
    description: n,
    value: null != c ? c.variantId : null,
    clearable: null != c,
    options: (0, a.ak)(s),
    onChange: e => (0, o.rX)(s.system, l, e)
  })
}