/** Chunk was on web.js **/
/** chunk id: 241879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk933492 = require("./933492.js"),
  Chunk167140 = require("./167140.js"),
  Chunk300319 = require("./300319.js"),
  Chunk146810 = require("./146810.js"),
  Chunk543348 = require("./543348.js");

function c(e, t, n) {
  let c = (0, a.Q3)({
      ...e,
      value: t.isSelected
    }),
    {
      isInvalid: u,
      validationErrors: d,
      validationDetails: f
    } = c.displayValidation,
    {
      labelProps: _,
      inputProps: p,
      isSelected: h,
      isPressed: m,
      isDisabled: g,
      isReadOnly: E
    } = (0, l.O)({
      ...e,
      isInvalid: u
    }, t, n);
  (0, o.Q)(e, c, n);
  let {
    isIndeterminate: b,
    isRequired: y,
    validationBehavior: O = "aria"
  } = e;
  (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = !!b)
  });
  let {
    pressProps: v
  } = (0, s.r)({
    isDisabled: g || E,
    onPress() {
      let {
        [a.tL]: t
      } = e, {
        commitValidation: n
      } = t || c;
      n()
    }
  });
  return {
    labelProps: (0, i.d)(_, v),
    inputProps: {
      ...p,
      checked: h,
      "aria-required": y && "aria" === O || true,
      required: y && "native" === O
    },
    isSelected: h,
    isPressed: m,
    isDisabled: g,
    isReadOnly: E,
    isInvalid: u,
    validationErrors: d,
    validationDetails: f
  }
}