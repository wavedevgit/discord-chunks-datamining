/** Chunk was on web.js **/
/** chunk id: 44909, original params: e,t,n (module,exports,re quire) **/
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
    setValue: s,
    useTitle: o,
    useSubtitle: l,
    useOptions: c,
    useBadge: u
  } = t, d = o(), f = null == l ? true : l(), p = n(), _ = c(), h = null == u ? true : u();
  return (0, r.jsx)(a.L, {
    children: (0, r.jsx)(i.z6M, {
      label: d,
      description: f,
      options: _,
      value: p,
      badge: h,
      onChange: e => s(e)
    })
  })
}