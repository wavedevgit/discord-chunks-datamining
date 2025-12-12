/** Chunk was on web.js **/
/** chunk id: 805204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk511746 = require("./511746.js"),
  Chunk84854 = require("./84854.js"),
  Chunk134915 = require("./134915.js"),
  Chunk473749 = require("./473749.js"),
  Chunk698369 = require("./698369.js");

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
      descriptionId: p,
      errorMessageId: _,
      validationBehavior: m
    } = i.k.get(t);
  m = null != (l = e.validationBehavior) ? l : m;
  let {
    realtimeValidation: h
  } = (0, o.Q3)({
    ...e,
    value: u.isSelected,
    name: true,
    validationBehavior: "aria"
  }), g = (0, a.useRef)(o.PS), E = () => {
    t.setInvalid(e.value, h.isInvalid ? h : g.current)
  };
  (0, a.useEffect)(E);
  let b = t.realtimeValidation.isInvalid ? t.realtimeValidation : h,
    y = "native" === m ? t.displayValidation : b,
    O = (0, r.O)({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || d,
      form: e.form || f,
      isRequired: null != (c = e.isRequired) ? c : t.isRequired,
      validationBehavior: m,
      [o.tL]: {
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
      "aria-describedby": [e["aria-describedby"], t.isInvalid ? _ : null, p].filter(Boolean).join(" ") || true
    }
  }
}