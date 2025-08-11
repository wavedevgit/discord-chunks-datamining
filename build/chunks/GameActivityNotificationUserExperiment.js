/** Chunk was on 93886 **/
/** chunk id: 890022, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  _x: () => c,
  dm: () => s,
  uw: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk752048 = require("./752048.js"),
  Chunk699516 = require("./699516.js");
let i = (0, Chunk818083.B)({
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
  switch (i.getCurrentConfig({
      location: "filterPresences"
    }).fromUserType) {
    case 2:
      return [];
    case 0:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return l.Z.isFriend(t.id)
      });
    case 1:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return l.Z.isFriend(t.id) || r.Z.isHighlyAffinedVCUser(t.id)
      });
    default:
      return e
  }
}

function o(e) {
  return 2 !== i.getCurrentConfig({
    location: e
  }).fromUserType
}

function c(e) {
  return 2 !== i.useExperiment({
    location: e
  }).fromUserType
}