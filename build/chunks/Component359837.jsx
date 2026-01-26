/** Chunk was on 39048 **/
/** chunk id: 359837, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u,
  c: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  let r = (0, l.bG)([o.A], () => !o.A.isRoleHigher(e, t, n), [e, t, n]);
  return i.useMemo(() => r && n.id === (null == t ? true : t.id), [r, n, t]) ? c.intl.string(c.t.PQylOR) : r ? c.intl.string(c.t.UGIjx9) : null
}

function u(e) {
  let {
    className: t,
    tooltipText: n,
    width: i = 16,
    height: l = 16
  } = e;
  return (0, r.jsx)(s.m, {
    text: n,
    children: (0, r.jsx)("div", {
      className: t,
      children: (0, r.jsx)(a.XAi, {
        size: "custom",
        color: "currentColor",
        width: i,
        height: l
      })
    })
  })
}