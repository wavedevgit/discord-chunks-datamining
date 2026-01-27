/** Chunk was on web.js **/
/** chunk id: 667747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => f,
  m: () => d
});
var Chunk308528 = require("./308528.js"),
  Chunk711950 = require("./711950.js"),
  Chunk264686 = require("./264686.js"),
  Chunk793574 = require("./793574.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t, n) {
  a.default.showNotification(s.Ay.getUserAvatarURL(e), e.username, t, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: e.id,
    onClick: n,
    isUserAvatar: true
  })
}

function d(e) {
  u(e, c.intl.string(c.t["t3+Af3"]), () => {
    {
      let {
        openUserProfileModal: t
      } = n(657331);
      t({
        userId: e.id,
        sourceAnalyticsLocations: [o.A.FRIEND_REQUEST_NOTIFICATION]
      })
    }
    i.A.transitionToSection(l.m3P.PENDING, {
      explicit: true
    })
  })
}

function f(e) {
  u(e, c.intl.string(c.t.MYr3Ka), () => {
    r.A.openPrivateChannel({
      recipientIds: e.id
    })
  })
}