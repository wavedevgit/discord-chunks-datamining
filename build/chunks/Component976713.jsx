/** Chunk was on web.js **/
/** chunk id: 976713, original params: e,t,n (module,exports,re quire) **/
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
    useOptions: c
  } = t, u = s(), d = null == l ? true : l(), f = n(), p = c();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.FXm, {
      label: u,
      description: d,
      options: p,
      value: f,
      onChange: e => a(e)
    })
  })
}