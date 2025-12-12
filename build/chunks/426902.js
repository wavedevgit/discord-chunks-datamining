/** Chunk was on web.js **/
/** chunk id: 426902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o
});
var Chunk844454 = require("./844454.js"),
  Chunk752689 = require("./752689.js"),
  Chunk158821 = require("./158821.js");

function o(e) {
  let {
    description: t,
    errorMessage: n,
    isInvalid: o,
    validationState: s
  } = e, {
    labelProps: l,
    fieldProps: c
  } = (0, r.N)(e), u = (0, i.mp)([!!t, !!n, o, s]), d = (0, i.mp)([!!t, !!n, o, s]);
  return {
    labelProps: l,
    fieldProps: c = (0, a.d)(c, {
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