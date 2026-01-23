/** Chunk was on web.js **/
/** chunk id: 376546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l
});
var Chunk150724 = require("./150724.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk447432 = require("./447432.js"),
  Chunk744493 = require("./744493.js");

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
    fieldProps: h,
    descriptionProps: m,
    errorMessageProps: g
  } = (0, s.M)({
    ...e,
    labelElementType: "span",
    isInvalid: d,
    errorMessage: e.errorMessage || f
  });
  r.n.set(t, {
    name: l,
    form: c,
    descriptionId: m.id,
    errorMessageId: g.id,
    validationBehavior: u
  });
  let E = (0, i.$)(e, {
      labelable: true
    }),
    {
      focusWithinProps: y
    } = (0, o.R)({
      onBlurWithin: e.onBlur,
      onFocusWithin: e.onFocus,
      onFocusWithinChange: e.onFocusChange
    });
  return {
    groupProps: (0, a.v)(E, {
      role: "group",
      "aria-disabled": n || true,
      ...h,
      ...y
    }),
    labelProps: _,
    descriptionProps: m,
    errorMessageProps: g,
    isInvalid: d,
    validationErrors: f,
    validationDetails: p
  }
}