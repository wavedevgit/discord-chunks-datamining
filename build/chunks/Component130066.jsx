/** Chunk was on 44669 **/
/** chunk id: 130066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk524738 = require("./524738.jsx"),
  Chunk378631 = require("./378631.jsx"),
  Chunk962789 = require("./962789.jsx"),
  Chunk476009 = require("./476009.jsx"),
  Chunk585052 = require("./585052.jsx"),
  Chunk831320 = require("./831320.jsx"),
  Chunk965563 = require("./965563.jsx"),
  Chunk320134 = require("./320134.jsx"),
  Chunk604151 = require("./604151.jsx"),
  Chunk638130 = require("./638130.jsx"),
  Chunk389242 = require("./389242.jsx"),
  Chunk772538 = require("./772538.jsx"),
  Chunk61610 = require("./61610.jsx"),
  Chunk751461 = require("./751461.jsx"),
  Chunk638324 = require("./638324.jsx"),
  Chunk428854 = require("./428854.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk190363 = require("./190363.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let I = () => (0, r.jsxs)(f.A, {
    title: S.intl.string(S.t.xVRG4P),
    webSetting: v.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
    children: [(0, r.jsx)(b.f, {}), (0, r.jsx)(p.A, {}), (0, r.jsx)(d.A, {}), (0, r.jsx)(c.A, {}), (0, r.jsx)(A.A, {})]
  }),
  N = () => (0, r.jsxs)(f.A, {
    title: S.intl.string(S.t["y62Z/d"]),
    webSetting: v.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
    children: [(0, r.jsx)(i.x, {
      setting: v.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
      children: (0, r.jsx)(g.A, {})
    }), (0, r.jsx)(j.A, {}), (0, r.jsx)(_.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(y.A, {})]
  }),
  T = () => (0, r.jsxs)(f.A, {
    title: S.intl.string(S.t["1Qn8iV"]),
    webSetting: v.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
    children: [(0, r.jsx)(h.A, {}), (0, r.jsx)(m.Ay, {})]
  }),
  P = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {}), (0, r.jsx)(N, {}), (0, r.jsx)(T, {})]
  });

function w() {
  let e = (0, l.bG)([s.A], () => s.A.getSubsection()),
    t = [{
      title: S.intl.string(S.t["/7xJCF"]),
      component: P,
      setting: v.H.CONTENT_SOCIAL_DISCORD_TAB
    }, {
      title: S.intl.string(S.t.YpCiMt),
      component: u.A,
      setting: v.H.CONTENT_SOCIAL_CONNECTED_GAMES
    }];
  return (0, r.jsx)(a.R, {
    header: S.intl.string(S.t["+o1pDZ"]),
    notice: (0, r.jsx)(x.A, {
      page: x.R.CONTENT_AND_SOCIAL
    }),
    children: (0, r.jsx)(o.A, {
      parentSetting: v.H.CONTENT_SOCIAL,
      settingsSection: C.nc_.CONTENT_AND_SOCIAL,
      tabs: t,
      defaultTabIndex: e === E.k ? 1 : true
    })
  })
}