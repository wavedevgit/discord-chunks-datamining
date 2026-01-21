/** Chunk was on web.js **/
/** chunk id: 944414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk970184 = require("./970184.jsx");

function u(e) {
  var t;
  let {
    type: n,
    default: a
  } = e, u = (0, c.CJ)();
  o()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: d,
    executeStateUpdate: f
  } = u.useComponentState(e, null != a ? {
    type: n,
    value: a
  } : true), p = i.useMemo(() => (null == d ? true : d.type) === n && d.value, [d, n]), _ = e => {
    f({
      type: n,
      value: e
    })
  }, h = null == (t = u.getParents(e)) ? true : t[0], m = (null == h ? true : h.type) === l.re.LABEL ? h : true;
  return o()(null != m, "CheckboxActionComponent must be a child of a Label component"), (0, r.jsx)(s.Checkbox, {
    label: m.label,
    description: m.description,
    checked: p,
    onChange: _
  })
}