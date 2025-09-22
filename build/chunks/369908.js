/** Chunk was on web.js **/
/** chunk id: 369908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk75285 = require("./75285.js"),
  Chunk429350 = require("./429350.js"),
  Chunk218900 = require("./218900.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289395 = require("./289395.js");

function l(e, t, n) {
  var l, c;
  let u = (0, s.l)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    {
      name: d,
      descriptionId: f,
      errorMessageId: _,
      validationBehavior: p
    } = i.k.get(t);
  p = null != (l = e.validationBehavior) ? l : p;
  let {
    realtimeValidation: h
  } = (0, a.Q3)({
    ...e,
    value: u.isSelected,
    name: true,
    validationBehavior: "aria"
  }), m = (0, o.useRef)(a.PS), g = () => {
    t.setInvalid(e.value, h.isInvalid ? h : m.current)
  };
  (0, o.useEffect)(g);
  let E = t.realtimeValidation.isInvalid ? t.realtimeValidation : h,
    b = "native" === p ? t.displayValidation : E,
    y = (0, r.O)({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || d,
      isRequired: null != (c = e.isRequired) ? c : t.isRequired,
      validationBehavior: p,
      [a.tL]: {
        realtimeValidation: E,
        displayValidation: b,
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation,
        updateValidation(e) {
          m.current = e, g()
        }
      }
    }, u, n);
  return {
    ...y,
    inputProps: {
      ...y.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? _ : null, f].filter(Boolean).join(" ") || true
    }
  }
}