/** Chunk was on web.js **/
/** chunk id: 426902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk844454 = require("./844454.js"),
  Chunk752689 = require("./752689.js"),
  Chunk158821 = require("./158821.js");

function a(e) {
  let {
    description: t,
    errorMessage: n,
    isInvalid: a,
    validationState: s
  } = e, {
    labelProps: l,
    fieldProps: c
  } = (0, r.N)(e), u = (0, i.mp)([!!t, !!n, a, s]), d = (0, i.mp)([!!t, !!n, a, s]);
  return {
    labelProps: l,
    fieldProps: c = (0, o.d)(c, {
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