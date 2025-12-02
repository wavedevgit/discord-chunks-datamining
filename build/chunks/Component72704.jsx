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
    setValue: o,
    useTitle: s,
    useSubtitle: l,
    useOptions: c,
    fieldLayout: u
  } = t, d = s(), f = null == l ? true : l(), p = n(), _ = c();
  return (0, r.jsx)(a.X, {
    children: (0, r.jsx)(i.q4e, {
      label: d,
      description: f,
      value: p,
      onChange: e => o(e),
      options: _,
      layout: u
    })
  })
}