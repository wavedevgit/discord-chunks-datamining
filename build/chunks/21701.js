/** Chunk was on web.js **/
/** chunk id: 21701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => o
});
var Chunk134915 = require("./134915.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function o(e = {}) {
  var t, n;
  let [s, l] = (0, i.z)(e.value, e.defaultValue || [], e.onChange), [c] = (0, a.useState)(s), u = !!e.isRequired && 0 === s.length, d = (0, a.useRef)(new Map), f = (0, r.Q3)({
    ...e,
    value: s
  }), p = f.displayValidation.isInvalid;
  return {
    ...f,
    value: s,
    defaultValue: null != (t = e.defaultValue) ? t : c,
    setValue(t) {
      e.isReadOnly || e.isDisabled || l(t)
    },
    isDisabled: e.isDisabled || false,
    isReadOnly: e.isReadOnly || false,
    isSelected: e => s.includes(e),
    addValue(t) {
      e.isReadOnly || e.isDisabled || s.includes(t) || l(s = s.concat(t))
    },
    removeValue(t) {
      e.isReadOnly || e.isDisabled || s.includes(t) && l(s.filter(e => e !== t))
    },
    toggleValue(t) {
      e.isReadOnly || e.isDisabled || (s.includes(t) ? l(s.filter(e => e !== t)) : l(s.concat(t)))
    },
    setInvalid(e, t) {
      let n = new Map(d.current);
      t.isInvalid ? n.set(e, t) : n.delete(e), d.current = n, f.updateValidation((0, r.W0)(...n.values()))
    },
    validationState: null != (n = e.validationState) ? n : p ? "invalid" : null,
    isInvalid: p,
    isRequired: u
  }
}