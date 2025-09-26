/** Chunk was on web.js **/
/** chunk id: 318000, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk427956 = require("./427956.js"),
  Chunk436773 = require("./436773.js"),
  Chunk586235 = require("./586235.js"),
  Chunk893600 = require("./893600.js"),
  Chunk71734 = require("./71734.js");

function l(e, t) {
  let {
    isDisabled: n,
    name: l,
    form: c,
    validationBehavior: u = "aria"
  } = e, {
    isInvalid: d,
    validationErrors: f,
    validationDetails: _
  } = t.displayValidation, {
    labelProps: p,
    fieldProps: h,
    descriptionProps: m,
    errorMessageProps: g
  } = (0, o.U)({
    ...e,
    labelElementType: "span",
    isInvalid: d,
    errorMessage: e.errorMessage || f
  });
  r.k.set(t, {
    name: l,
    form: c,
    descriptionId: m.id,
    errorMessageId: g.id,
    validationBehavior: u
  });
  let E = (0, i.z)(e, {
      labelable: true
    }),
    {
      focusWithinProps: b
    } = (0, s.L)({
      onBlurWithin: e.onBlur,
      onFocusWithin: e.onFocus,
      onFocusWithinChange: e.onFocusChange
    });
  return {
    groupProps: (0, a.d)(E, {
      role: "group",
      "aria-disabled": n || true,
      ...h,
      ...b
    }),
    labelProps: p,
    descriptionProps: m,
    errorMessageProps: g,
    isInvalid: d,
    validationErrors: f,
    validationDetails: _
  }
}