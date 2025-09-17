/** Chunk was on web.js **/
/** chunk id: 815313, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => l
});
var Chunk167140 = require("./167140.js"),
  Chunk379955 = require("./379955.js"),
  Chunk647438 = require("./647438.js");
let o = Math.round(1e10 * Math.random()),
  s = 0;

function l(e) {
  var t, n;
  let l = (0, a.useMemo)(() => e.name || `radio-group-${o}-${++s}`, [e.name]),
    [c, u] = (0, i.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    [d] = (0, a.useState)(c),
    [f, _] = (0, a.useState)(null),
    p = (0, r.Q3)({
      ...e,
      value: c
    }),
    h = t => {
      e.isReadOnly || e.isDisabled || (u(t), p.commitValidation())
    },
    m = p.displayValidation.isInvalid;
  return {
    ...p,
    name: l,
    selectedValue: c,
    defaultSelectedValue: true !== e.value ? d : null != (n = e.defaultValue) ? n : null,
    setSelectedValue: h,
    lastFocusedValue: f,
    setLastFocusedValue: _,
    isDisabled: e.isDisabled || false,
    isReadOnly: e.isReadOnly || false,
    isRequired: e.isRequired || false,
    validationState: e.validationState || (m ? "invalid" : null),
    isInvalid: m
  }
}