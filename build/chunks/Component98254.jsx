/** Chunk was on 78376 **/
/** chunk id: 98254, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function s(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    useTitle: s,
    useSubtitle: a,
    useOptions: o,
    fieldLayout: c,
    clearable: d
  } = t, u = t.setValue, _ = s(), p = null == a ? true : a(), m = n(), g = o();
  return (0, r.jsx)(l.L, {
    children: (0, r.jsx)(i.l6P, {
      selectionMode: "single",
      label: _,
      description: p,
      options: g,
      value: m,
      clearable: d,
      onSelectionChange: u,
      layout: c,
      fullWidth: true
    })
  })
}