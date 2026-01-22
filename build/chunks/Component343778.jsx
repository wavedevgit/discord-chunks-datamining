/** Chunk was on web.js **/
/** chunk id: 343778, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk207963 = require("./207963.jsx");

function o(e) {
  let {
    type: t,
    options: n,
    required: o,
    maxValues: l
  } = e, c = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: u,
    executeStateUpdate: d
  } = (0, s.At)(e, c.length > 0 ? {
    type: t,
    values: c
  } : true), f = i.useMemo(() => (null == u ? true : u.type) === t ? u.values : [], [u, t]), p = e => {
    d({
      type: t,
      values: e
    })
  };
  return (0, r.jsx)(a.$QX, {
    options: n.map(e => ({
      label: e.label,
      value: e.value,
      description: e.description,
      disabled: f.length >= l && !f.includes(e.value)
    })),
    selectedValues: f,
    onChange: p,
    required: o
  })
}