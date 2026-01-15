/** Chunk was on web.js **/
/** chunk id: 511746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk158821 = require("./158821.js"),
  Chunk134915 = require("./134915.js"),
  Chunk746367 = require("./746367.js"),
  Chunk226098 = require("./226098.js"),
  Chunk975898 = require("./975898.js");

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
      labelProps: p,
      inputProps: _,
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
    labelProps: (0, i.d)(p, v, (0, r.useMemo)(() => ({
      onMouseDown: e => e.preventDefault()
    }), [])),
    inputProps: {
      ..._,
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