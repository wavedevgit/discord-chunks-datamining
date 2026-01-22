/** Chunk was on web.js **/
/** chunk id: 360881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk803082 = require("./803082.js"),
  Chunk339241 = require("./339241.js"),
  Chunk96441 = require("./96441.js"),
  Chunk8321 = require("./8321.js"),
  Chunk757260 = require("./757260.js");

function c(e, t, n) {
  let c = (0, a.KZ)({
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
    } = (0, l.e)({
      ...e,
      isInvalid: u
    }, t, n);
  (0, s.X)(e, c, n);
  let {
    isIndeterminate: b,
    isRequired: y,
    validationBehavior: O = "aria"
  } = e;
  (0, r.useEffect)(() => {
    n.current && (n.current.indeterminate = !!b)
  });
  let {
    pressProps: A
  } = (0, o.d)({
    isDisabled: g || E,
    onPress() {
      let {
        [a.Lf]: t
      } = e, {
        commitValidation: n
      } = t || c;
      n()
    }
  });
  return {
    labelProps: (0, i.v)(p, A, (0, r.useMemo)(() => ({
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