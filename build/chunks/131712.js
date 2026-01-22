/** Chunk was on web.js **/
/** chunk id: 131712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk339241 = require("./339241.js"),
  Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");
let s = Math.round(1e10 * Math.random()),
  o = 0;

function l(e) {
  var t, n;
  let l = (0, a.useMemo)(() => e.name || `radio-group-${s}-${++o}`, [e.name]),
    [c, u] = (0, i.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    [d] = (0, a.useState)(c),
    [f, p] = (0, a.useState)(null),
    _ = (0, r.KZ)({
      ...e,
      value: c
    }),
    h = t => {
      e.isReadOnly || e.isDisabled || (u(t), _.commitValidation())
    },
    m = _.displayValidation.isInvalid;
  return {
    ..._,
    name: l,
    selectedValue: c,
    defaultSelectedValue: true !== e.value ? d : null != (n = e.defaultValue) ? n : null,
    setSelectedValue: h,
    lastFocusedValue: f,
    setLastFocusedValue: p,
    isDisabled: e.isDisabled || false,
    isReadOnly: e.isReadOnly || false,
    isRequired: e.isRequired || false,
    validationState: e.validationState || (m ? "invalid" : null),
    isInvalid: m
  }
}