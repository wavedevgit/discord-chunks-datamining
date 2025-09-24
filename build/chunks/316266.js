/** Chunk was on web.js **/
/** chunk id: 316266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk241879 = require("./241879.js"),
  Chunk427956 = require("./427956.js"),
  Chunk167140 = require("./167140.js"),
  Chunk647438 = require("./647438.js"),
  Chunk922462 = require("./922462.js");

function l(e, t, n) {
  var l, c;
  let u = (0, s.l)({
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isSelected: t.isSelected(e.value),
      defaultSelected: t.defaultValue.includes(e.value),
      onChange(n) {
        n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n)
      }
    }),
    {
      name: d,
      form: f,
      descriptionId: _,
      errorMessageId: p,
      validationBehavior: h
    } = i.k.get(t);
  h = null != (l = e.validationBehavior) ? l : h;
  let {
    realtimeValidation: m
  } = (0, a.Q3)({
    ...e,
    value: u.isSelected,
    name: true,
    validationBehavior: "aria"
  }), g = (0, o.useRef)(a.PS), E = () => {
    t.setInvalid(e.value, m.isInvalid ? m : g.current)
  };
  (0, o.useEffect)(E);
  let b = t.realtimeValidation.isInvalid ? t.realtimeValidation : m,
    y = "native" === h ? t.displayValidation : b,
    O = (0, r.O)({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || d,
      form: e.form || f,
      isRequired: null != (c = e.isRequired) ? c : t.isRequired,
      validationBehavior: h,
      [a.tL]: {
        realtimeValidation: b,
        displayValidation: y,
        resetValidation: t.resetValidation,
        commitValidation: t.commitValidation,
        updateValidation(e) {
          g.current = e, E()
        }
      }
    }, u, n);
  return {
    ...O,
    inputProps: {
      ...O.inputProps,
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? p : null, _].filter(Boolean).join(" ") || true
    }
  }
}