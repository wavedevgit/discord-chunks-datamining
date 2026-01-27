/** Chunk was on web.js **/
/** chunk id: 476311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l
});
var Chunk360881 = require("./360881.js"),
  Chunk150724 = require("./150724.js"),
  Chunk339241 = require("./339241.js"),
  Chunk64700 = require("./64700.js"),
  Chunk823807 = require("./823807.js");

function l(e, t, n) {
  var l, c;
  let u = (0, s.H)({
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
      validationBehavior: h
    } = i.n.get(t);
  h = null != (l = e.validationBehavior) ? l : h;
  let {
    realtimeValidation: m
  } = (0, a.KZ)({
    ...e,
    value: u.isSelected,
    name: true,
    validationBehavior: "aria"
  }), g = (0, o.useRef)(a.YD), E = () => {
    t.setInvalid(e.value, m.isInvalid ? m : g.current)
  };
  (0, o.useEffect)(E);
  let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : m,
    b = "native" === h ? t.displayValidation : y,
    O = (0, r.v)({
      ...e,
      isReadOnly: e.isReadOnly || t.isReadOnly,
      isDisabled: e.isDisabled || t.isDisabled,
      name: e.name || d,
      form: e.form || f,
      isRequired: null != (c = e.isRequired) ? c : t.isRequired,
      validationBehavior: h,
      [a.Lf]: {
        realtimeValidation: y,
        displayValidation: b,
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