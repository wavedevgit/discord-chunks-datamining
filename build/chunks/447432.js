/** Chunk was on web.js **/
/** chunk id: 447432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s
});
var Chunk783786 = require("./783786.js"),
  Chunk723906 = require("./723906.js"),
  Chunk803082 = require("./803082.js");

function s(e) {
  let {
    description: t,
    errorMessage: n,
    isInvalid: s,
    validationState: o
  } = e, {
    labelProps: l,
    fieldProps: c
  } = (0, r.M)(e), u = (0, i.X1)([!!t, !!n, s, o]), d = (0, i.X1)([!!t, !!n, s, o]);
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