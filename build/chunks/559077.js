/** Chunk was on web.js **/
/** chunk id: 559077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk339241 = require("./339241.js"),
  Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");

function s(e = {}) {
  var t, n;
  let [o, l] = (0, i.P)(e.value, e.defaultValue || [], e.onChange), [c] = (0, a.useState)(o), u = !!e.isRequired && 0 === o.length, d = (0, a.useRef)(new Map), f = (0, r.KZ)({
    ...e,
    value: o
  }), p = f.displayValidation.isInvalid;
  return {
    ...f,
    value: o,
    defaultValue: null != (t = e.defaultValue) ? t : c,
    setValue(t) {
      e.isReadOnly || e.isDisabled || l(t)
    },
    isDisabled: e.isDisabled || false,
    isReadOnly: e.isReadOnly || false,
    isSelected: e => o.includes(e),
    addValue(t) {
      e.isReadOnly || e.isDisabled || o.includes(t) || l(o = o.concat(t))
    },
    removeValue(t) {
      e.isReadOnly || e.isDisabled || o.includes(t) && l(o.filter(e => e !== t))
    },
    toggleValue(t) {
      e.isReadOnly || e.isDisabled || (o.includes(t) ? l(o.filter(e => e !== t)) : l(o.concat(t)))
    },
    setInvalid(e, t) {
      let n = new Map(d.current);
      t.isInvalid ? n.set(e, t) : n.delete(e), d.current = n, f.updateValidation((0, r.cX)(...n.values()))
    },
    validationState: null != (n = e.validationState) ? n : p ? "invalid" : null,
    isInvalid: p,
    isRequired: u
  }
}