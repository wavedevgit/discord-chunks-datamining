/** Chunk was on web.js **/
/** chunk id: 397312, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o
});
var Chunk366718 = require("./366718.js"),
  Chunk743994 = require("./743994.js"),
  Chunk506523 = require("./506523.js");

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