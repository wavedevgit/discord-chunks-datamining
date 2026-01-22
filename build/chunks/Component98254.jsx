/** Chunk was on web.js **/
/** chunk id: 98254, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    useSubtitle: o,
    useOptions: l,
    fieldLayout: c,
    clearable: u
  } = t, d = t.setValue, f = s(), p = null == o ? true : o(), _ = n(), h = l();
  return (0, r.jsx)(a.L, {
    children: (0, r.jsx)(i.l6P, {
      selectionMode: "single",
      label: f,
      description: p,
      options: h,
      value: _,
      clearable: u,
      onSelectionChange: d,
      layout: c,
      fullWidth: true
    })
  })
}