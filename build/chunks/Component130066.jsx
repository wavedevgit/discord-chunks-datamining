/** Chunk was on web.js **/
/** chunk id: 130066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
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
let N = () => (0, r.jsxs)(h.A, {
    title: C.intl.string(C.t.xVRG4P),
    webSetting: I.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
    children: [(0, r.jsx)(g.f, {}), (0, r.jsx)(f.A, {}), (0, r.jsx)(d.A, {}), (0, r.jsx)(c.A, {}), (0, r.jsx)(E.A, {})]
  }),
  w = () => (0, r.jsxs)(h.A, {
    title: C.intl.string(C.t["y62Z/d"]),
    webSetting: I.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
    children: [(0, r.jsx)(a.x, {
      setting: I.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
      children: (0, r.jsx)(_.A, {})
    }), (0, r.jsx)(O.A, {}), (0, r.jsx)(v.A, {}), (0, r.jsx)(b.A, {}), (0, r.jsx)(y.A, {})]
  }),
  R = () => (0, r.jsxs)(h.A, {
    title: C.intl.string(C.t["1Qn8iV"]),
    webSetting: I.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
    children: [(0, r.jsx)(p.A, {}), (0, r.jsx)(m.Ay, {})]
  }),
  P = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {}), (0, r.jsx)(w, {}), (0, r.jsx)(R, {})]
  });

function D() {
  let e = (0, i.bG)([s.A], () => s.A.getSubsection()),
    t = [{
      title: C.intl.string(C.t["/7xJCF"]),
      component: P,
      setting: I.H.CONTENT_SOCIAL_DISCORD_TAB
    }, {
      title: C.intl.string(C.t.YpCiMt),
      component: u.A,
      setting: I.H.CONTENT_SOCIAL_CONNECTED_GAMES
    }];
  return (0, r.jsx)(o.R, {
    header: C.intl.string(C.t["+o1pDZ"]),
    notice: (0, r.jsx)(A.A, {
      page: A.R.CONTENT_AND_SOCIAL
    }),
    children: (0, r.jsx)(l.A, {
      parentSetting: I.H.CONTENT_SOCIAL,
      settingsSection: T.nc_.CONTENT_AND_SOCIAL,
      tabs: t,
      defaultTabIndex: e === S.k ? 1 : true
    })
  })
}