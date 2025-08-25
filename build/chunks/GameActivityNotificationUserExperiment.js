/** Chunk was on web.js **/
/** chunk id: 890022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _x: () => c,
  dm: () => s,
  uw: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk752048 = require("./752048.js"),
  Chunk699516 = require("./699516.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-04_game_activity_notification",
  label: "Game Activity Notifications",
  defaultConfig: {
    fromUserType: 2
  },
  treatments: [{
    id: 1,
    label: "Show Notifications from Friends Only",
    config: {
      fromUserType: 0
    }
  }, {
    id: 2,
    label: "Show Notifications from Friends and High Affinity Users",
    config: {
      fromUserType: 1
    }
  }]
});

function s(e) {
  switch (a.getCurrentConfig({
      location: "filterPresences"
    }).fromUserType) {
    case 2:
      return [];
    case 0:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return o.Z.isFriend(t.id)
      });
    case 1:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return o.Z.isFriend(t.id) || i.Z.isHighlyAffinedVCUser(t.id)
      });
    default:
      return e
  }
}

function l(e) {
  return 2 !== a.getCurrentConfig({
    location: e
  }).fromUserType
}

function c(e) {
  return 2 !== a.useExperiment({
    location: e
  }).fromUserType
}