/** Chunk was on 21738 **/
/** chunk id: 145293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk707606 = require("./707606.jsx"),
  Chunk490415 = require("./490415.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk142201 = require("./142201.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk107834 = require("./107834.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk187585 = require("./187585.js");
let b = Chunk311907.Ay.connectStores([Chunk287809.default], () => ({
  user: f.default.getCurrentUser()
}))((0, Chunk490415.A)((0, Chunk707606.A)(e => {
  let {
    isAuthenticated: t,
    user: n
  } = e, {
    analyticsLocations: l
  } = (0, u.Ay)(c.A.HOME_PAGE_PREMIUM_TAB);
  return t ? (0, r.jsxs)("div", {
    className: m.ql,
    children: [null == n && (0, r.jsx)(h.A, {}), (0, r.jsx)(u.f5, {
      value: l,
      children: null == n ? (0, r.jsx)(d.A, {
        align: d.A.Align.CENTER,
        justify: d.A.Justify.CENTER,
        children: (0, r.jsx)(a.y$y, {
          className: m.u1
        })
      }) : (0, r.jsx)(p.A, {
        entrypoint: g.tU.ApplicationStoreHome
      })
    })]
  }) : (0, r.jsx)(i.rd, {
    to: A.BVt.LOGIN
  })
})))