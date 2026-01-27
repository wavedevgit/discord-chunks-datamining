/** Chunk was on web.js **/
/** chunk id: 447432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk783786 = require("./783786.js"),
  Chunk723906 = require("./723906.js"),
  Chunk803082 = require("./803082.js");

function o(e) {
  let {
    description: t,
    errorMessage: n,
    isInvalid: o,
    validationState: s
  } = e, {
    labelProps: l,
    fieldProps: c
  } = (0, r.M)(e), u = (0, i.X1)([!!t, !!n, o, s]), d = (0, i.X1)([!!t, !!n, o, s]);
  return {
    labelProps: l,
    fieldProps: c = (0, a.v)(c, {
      "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || true
    }),
    descriptionProps: {
      id: u
    },
    errorMessageProps: {
      id: d
    }
  }
}