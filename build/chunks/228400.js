/** Chunk was on web.js **/
/** chunk id: 228400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => l
});
var Chunk134915 = require("./134915.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");
let o = Math.round(1e10 * Math.random()),
  s = 0;

function l(e) {
  var t, n;
  let l = (0, a.useMemo)(() => e.name || `radio-group-${o}-${++s}`, [e.name]),
    [c, u] = (0, i.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
    [d] = (0, a.useState)(c),
    [f, p] = (0, a.useState)(null),
    _ = (0, r.Q3)({
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