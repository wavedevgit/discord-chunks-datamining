/** Chunk was on web.js **/
/** chunk id: 271478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk100392 = require("./100392.js"),
  Chunk102609 = require("./102609.js");

function o(e) {
  let {
    label: t,
    description: n,
    experiment: o,
    experimentId: l,
    overrideInfo: c
  } = e;
  return (0, r.jsx)(i.l6P, {
    label: t,
    description: n,
    value: null != c ? c.variantId : true,
    clearable: null != c,
    options: (0, a.hp)(o),
    onSelectionChange: e => (0, s.t$)(o.system, l, e),
    selectionMode: "single",
    fullWidth: true
  })
}