/** Chunk was on 20941 **/
/** chunk id: 343778, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk207963 = require("./207963.jsx");

function s(e) {
  let {
    type: t,
    options: n,
    required: s,
    maxValues: o
  } = e, c = l.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: u,
    executeStateUpdate: d
  } = (0, i.At)(e, c.length > 0 ? {
    type: t,
    values: c
  } : true), m = l.useMemo(() => (null == u ? true : u.type) === t ? u.values : [], [u, t]);
  return (0, r.jsx)(a.$QX, {
    options: n.map(e => ({
      label: e.label,
      value: e.value,
      description: e.description,
      disabled: m.length >= o && !m.includes(e.value)
    })),
    selectedValues: m,
    onChange: e => {
      d({
        type: t,
        values: e
      })
    },
    required: s
  })
}