/** Chunk was on web.js **/
/** chunk id: 949493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk924356 = require("./924356.jsx"),
  Chunk901151 = require("./901151.jsx"),
  Chunk24400 = require("./24400.jsx"),
  Chunk122897 = require("./122897.jsx"),
  Chunk694569 = require("./694569.jsx"),
  Chunk540204 = require("./540204.jsx"),
  Chunk893996 = require("./893996.jsx"),
  Chunk273927 = require("./273927.jsx"),
  Chunk211466 = require("./211466.jsx"),
  Chunk864239 = require("./864239.jsx"),
  Chunk190014 = require("./190014.jsx"),
  Chunk301812 = require("./301812.jsx"),
  Chunk988043 = require("./988043.jsx"),
  Chunk919539 = require("./919539.jsx"),
  Chunk441007 = require("./441007.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk583139 = require("./583139.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let N = () => (0, r.jsxs)(h.Z, {
    title: A.intl.string(A.t.xVRG4P),
    webSetting: I.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
    children: [(0, r.jsx)(g.n, {}), (0, r.jsx)(f.Z, {}), (0, r.jsx)(d.Z, {}), (0, r.jsx)(c.Z, {}), (0, r.jsx)(E.Z, {})]
  }),
  P = () => (0, r.jsxs)(h.Z, {
    title: A.intl.string(A.t["y62Z/d"]),
    webSetting: I.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
    children: [(0, r.jsx)(a.F, {
      setting: I.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
      children: (0, r.jsx)(_.Z, {})
    }), (0, r.jsx)(O.Z, {}), (0, r.jsx)(v.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(b.Z, {})]
  }),
  w = () => (0, r.jsxs)(h.Z, {
    title: A.intl.string(A.t["1Qn8iV"]),
    webSetting: I.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m.ZP, {})]
  }),
  R = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(N, {}), (0, r.jsx)(P, {}), (0, r.jsx)(w, {})]
  });

function D() {
  let e = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
    t = [{
      title: A.intl.string(A.t["/7xJCF"]),
      component: R,
      setting: I.s6.CONTENT_SOCIAL_DISCORD_TAB
    }, {
      title: A.intl.string(A.t.YpCiMt),
      component: u.Z,
      setting: I.s6.CONTENT_SOCIAL_CONNECTED_GAMES
    }];
  return (0, r.jsx)(s.N, {
    header: A.intl.string(A.t["+o1pDZ"]),
    notice: (0, r.jsx)(S.Z, {
      page: S.N.CONTENT_AND_SOCIAL
    }),
    children: (0, r.jsx)(l.Z, {
      parentSetting: I.s6.CONTENT_SOCIAL,
      settingsSection: C.oAB.CONTENT_AND_SOCIAL,
      tabs: t,
      defaultTabIndex: e === T.C ? 1 : true
    })
  })
}