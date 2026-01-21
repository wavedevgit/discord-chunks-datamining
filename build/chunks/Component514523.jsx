/** Chunk was on web.js **/
/** chunk id: 514523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx");

function s(e) {
  let {
    type: t,
    options: n,
    required: s,
    maxValues: l
  } = e, c = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: u,
    executeStateUpdate: d
  } = (0, o.Ee)(e, c.length > 0 ? {
    type: t,
    values: c
  } : true), f = i.useMemo(() => (null == u ? true : u.type) === t ? u.values : [], [u, t]), p = e => {
    d({
      type: t,
      values: e
    })
  };
  return (0, r.jsx)(a.cOn, {
    options: n.map(e => ({
      label: e.label,
      value: e.value,
      description: e.description,
      disabled: f.length >= l && !f.includes(e.value)
    })),
    selectedValues: f,
    onChange: p,
    required: s
  })
}