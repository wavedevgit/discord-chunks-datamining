/** Chunk was on web.js **/
/** chunk id: 825484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk331322 = require("./331322.jsx"),
  Chunk977067 = require("./977067.js");

function o(e) {
  let {
    size: t = "md",
    direction: n = "horizontal",
    justify: o,
    align: l,
    padding: c,
    className: u,
    children: d,
    wrap: f = true,
    fullWidth: p = false,
    fullWidthContainer: _ = false
  } = e, h = i.useMemo(() => ({
    size: t,
    fullWidth: p
  }), [t, p]);
  return (0, r.jsx)(a.B, {
    direction: n,
    gap: 8,
    justify: o,
    align: l,
    wrap: f,
    padding: c,
    className: u,
    fullWidth: !!_ || p,
    children: (0, r.jsx)(s.Z.Provider, {
      value: h,
      children: d
    })
  })
}