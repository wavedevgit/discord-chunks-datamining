/** Chunk was on web.js **/
/** chunk id: 75285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk506364 = require("./506364.js"),
  Chunk218900 = require("./218900.js"),
  Chunk836070 = require("./836070.js"),
  Chunk459613 = require("./459613.js"),
  Chunk611333 = require("./611333.js");

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