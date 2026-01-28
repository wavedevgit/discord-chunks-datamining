/** Chunk was on 60449 **/
/** chunk id: 224515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk923408 = require("./923408.js"),
  Chunk73825 = require("./73825.js"),
  Chunk160946 = require("./160946.js"),
  Chunk859241 = require("./859241.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk653183 = require("./653183.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk417711 = require("./417711.js");

function E() {
  s.useEffect(() => {
    c.h.wait(() => {
      d.hP(), d.$o(), (0, u.CD)(), (0, g.zS)(null, null, j.tF5.DISCOVERY), (0, u.tO)(true)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, a.cf)([p.A], () => ({
    hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
    premiumSubscription: p.A.getPremiumTypeSubscription()
  })), n = (0, h.Y)(), l = (0, a.bG)([A.A], () => A.A.hasFetchedPaymentSources), E = (0, a.bG)([x.A], () => x.A.isFetchingCurrentUserAppliedBoosts);
  return e && n && l && !E ? (0, i.jsxs)("div", {
    className: O.kL,
    children: [(0, i.jsx)("div", {
      className: O.Tp
    }), (0, i.jsx)("div", {
      className: O.Qs,
      children: (0, i.jsx)(m.A, {
        premiumSubscription: t
      })
    })]
  }) : (0, i.jsx)("div", {
    className: r()(O.kL, O.Lq),
    children: (0, i.jsx)(o.y$y, {})
  })
}