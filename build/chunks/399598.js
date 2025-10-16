/** Chunk was on web.js **/
/** chunk id: 399598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk721243 = require("./721243.js"),
  Chunk735437 = require("./735437.js"),
  Chunk43341 = require("./43341.js"),
  Chunk923108 = require("./923108.js"),
  Chunk576173 = require("./576173.js");

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