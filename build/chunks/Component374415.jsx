/** Chunk was on web.js **/
/** chunk id: 374415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    fullWidth: _ = false
  } = e, p = i.useMemo(() => ({
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
    children: (0, r.jsx)(a.u.Provider, {
      value: p,
      children: d
    })
  })
}