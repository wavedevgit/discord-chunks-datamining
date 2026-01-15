/** Chunk was on web.js **/
/** chunk id: 518560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk797614 = require("./797614.js"),
  Chunk626135 = require("./626135.js"),
  Chunk103879 = require("./103879.js"),
  Chunk451284 = require("./451284.js"),
  Chunk802429 = require("./802429.js"),
  Chunk846488 = require("./846488.js"),
  Chunk181211 = require("./181211.js"),
  Chunk811085 = require("./811085.jsx"),
  Chunk967254 = require("./967254.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196152 = require("./196152.js");

function y() {
  let e = (0, _.Z)(),
    t = (0, p.e)(),
    n = (0, d.P)(),
    y = (0, f.i)();
  (0, s.ZP)(() => {
    u.yq()
  });
  let O = i.useRef(n);
  return (i.useEffect(() => {
    O.current = n
  }), i.useEffect(() => {
    t && (c.default.track(g.rMx.SAFETY_HUB_VIEWED, {
      account_standing: O.current.state
    }), l.Z.increment({
      name: a.V.SAFETY_HUB_VIEW
    }))
  }, [t]), e) ? (0, r.jsx)(o.$jN, {}) : null != y ? (0, r.jsxs)(o.qXd, {
    color: o.DM8.DANGER,
    className: b.nagbar,
    children: [E.intl.string(E.t.TDRvqs), (0, r.jsx)(o.EyT, {
      onClick: () => u.yq(),
      children: E.intl.string(E.t.R1AN4F)
    })]
  }) : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(m.N, {})]
  })
}