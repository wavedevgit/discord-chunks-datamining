/** Chunk was on web.js **/
/** chunk id: 64027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk821541 = require("./821541.jsx"),
  Chunk986794 = require("./986794.js");

function s(e) {
  let {
    size: t = "md",
    direction: n = "horizontal",
    justify: s,
    align: l,
    padding: c,
    className: u,
    children: d,
    wrap: f = true,
    fullWidth: _ = false,
    fullWidthContainer: p = false
  } = e, h = i.useMemo(() => ({
    size: t,
    fullWidth: _
  }), [t, _]);
  return (0, r.jsx)(a.K, {
    direction: n,
    gap: 8,
    justify: s,
    align: l,
    wrap: f,
    padding: c,
    className: u,
    fullWidth: !!p || _,
    children: (0, r.jsx)(o.u.Provider, {
      value: h,
      children: d
    })
  })
}