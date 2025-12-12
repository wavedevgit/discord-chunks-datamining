/** Chunk was on web.js **/
/** chunk id: 72704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function a(e) {
  let {
    node: t
  } = e, {
    useValue: n,
    setValue: a,
    useTitle: s,
    useSubtitle: l,
    useOptions: c,
    fieldLayout: u
  } = t, d = s(), f = null == l ? true : l(), p = n(), _ = c();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.PhF, {
      selectionMode: "single",
      label: d,
      description: f,
      options: _,
      value: p,
      onSelectionChange: e => {
        null != e && a(e)
      },
      layout: u
    })
  })
}