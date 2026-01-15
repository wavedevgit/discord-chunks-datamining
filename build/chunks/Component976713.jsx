/** Chunk was on web.js **/
/** chunk id: 976713, original params: e,t,n (module,exports,re quire) **/
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
    useBadge: u
  } = t, d = s(), f = null == l ? true : l(), p = n(), _ = c(), h = null == u ? true : u();
  return (0, r.jsx)(a.X, {
    children: (0, r.jsx)(i.FXm, {
      label: d,
      description: f,
      options: _,
      value: p,
      badge: h,
      onChange: e => o(e)
    })
  })
}