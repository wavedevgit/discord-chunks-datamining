/** Chunk was on web.js **/
/** chunk id: 937226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => l
});
var Chunk84854 = require("./84854.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk426902 = require("./426902.js"),
  Chunk921448 = require("./921448.js");

function l(e, t) {
  let {
    isDisabled: n,
    name: l,
    form: c,
    validationBehavior: u = "aria"
  } = e, {
    isInvalid: d,
    validationErrors: f,
    validationDetails: p
  } = t.displayValidation, {
    labelProps: _,
    fieldProps: m,
    descriptionProps: h,
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
    descriptionId: h.id,
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
      ...m,
      ...b
    }),
    labelProps: _,
    descriptionProps: h,
    errorMessageProps: g,
    isInvalid: d,
    validationErrors: f,
    validationDetails: p
  }
}