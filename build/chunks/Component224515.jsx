/** Chunk was on web.js **/
/** chunk id: 224515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function y() {
  i.useEffect(() => {
    c.h.wait(() => {
      u.hP(), u.$o(), (0, d.CD)(), (0, f.zS)(null, null, E.tF5.DISCOVERY), (0, d.tO)(true)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, o.cf)([m.A], () => ({
    hasFetchedSubscriptions: m.A.hasFetchedSubscriptions(),
    premiumSubscription: m.A.getPremiumTypeSubscription()
  })), n = (0, p.Y)(), a = (0, o.bG)([h.A], () => h.A.hasFetchedPaymentSources), y = (0, o.bG)([_.A], () => _.A.isFetchingCurrentUserAppliedBoosts);
  return e && n && a && !y ? (0, r.jsxs)("div", {
    className: b.kL,
    children: [(0, r.jsx)("div", {
      className: b.Tp
    }), (0, r.jsx)("div", {
      className: b.Qs,
      children: (0, r.jsx)(g.A, {
        premiumSubscription: t
      })
    })]
  }) : (0, r.jsx)("div", {
    className: s()(b.kL, b.Lq),
    children: (0, r.jsx)(l.y$y, {})
  })
}