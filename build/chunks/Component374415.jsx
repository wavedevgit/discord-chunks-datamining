/** Chunk was on web.js **/
/** chunk id: 374415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk974223 = require("./974223.js");

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
  return (0, r.jsx)(o.Kq, {
    direction: n,
    gap: 8,
    justify: s,
    align: l,
    wrap: f,
    padding: c,
    className: u,
    fullWidth: !!p || _,
    children: (0, r.jsx)(a.u.Provider, {
      value: h,
      children: d
    })
  })
}