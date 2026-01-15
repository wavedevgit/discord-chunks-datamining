/** Chunk was on web.js **/
/** chunk id: 72704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function o(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    useTitle: o,
    useSubtitle: s,
    useOptions: l,
    fieldLayout: c,
    clearable: u
  } = t, d = t.setValue, f = o(), p = null == s ? true : s(), _ = n(), h = l();
  return (0, r.jsx)(a.X, {
    children: (0, r.jsx)(i.PhF, {
      selectionMode: "single",
      label: f,
      description: p,
      options: h,
      value: _,
      clearable: u,
      onSelectionChange: e => {
        d(e)
      },
      layout: c
    })
  })
}