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
    fullWidth: p = false,
    fullWidthContainer: _ = false
  } = e, m = i.useMemo(() => ({
    size: t,
    fullWidth: p
  }), [t, p]);
  return (0, r.jsx)(o.K, {
    direction: n,
    gap: 8,
    justify: s,
    align: l,
    wrap: f,
    padding: c,
    className: u,
    fullWidth: !!_ || p,
    children: (0, r.jsx)(a.u.Provider, {
      value: m,
      children: d
    })
  })
}