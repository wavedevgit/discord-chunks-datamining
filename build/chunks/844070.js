/** Chunk was on web.js **/
/** chunk id: 844070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => d,
  z: () => f
});
var Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
  Chunk292556 = require("./292556.js"),
  Chunk100527 = require("./100527.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  o.default.showNotification(s.ZP.getUserAvatarURL(e), e.username, t, {}, {
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
      } = n(892001);
      t({
        userId: e.id,
        sourceAnalyticsLocations: [a.Z.FRIEND_REQUEST_NOTIFICATION]
      })
    }
    i.Z.transitionToSection(l.pJs.PENDING, {
      explicit: true
    })
  })
}

function f(e) {
  u(e, c.intl.string(c.t.MYr3Ka), () => {
    r.Z.openPrivateChannel({
      recipientIds: e.id
    })
  })
}