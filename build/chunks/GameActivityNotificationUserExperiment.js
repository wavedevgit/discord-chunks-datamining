/** Chunk was on 97162 **/
/** chunk id: 890022, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  _x: () => l,
  dm: () => o,
  uw: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk752048 = require("./752048.js"),
  Chunk699516 = require("./699516.js");
let c = (0, Chunk818083.B)({
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

function o(e) {
  switch (c.getCurrentConfig({
      location: "filterPresences"
    }).fromUserType) {
    case 2:
      return [];
    case 0:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return r.Z.isFriend(t.id)
      });
    case 1:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return r.Z.isFriend(t.id) || i.Z.isHighlyAffinedVCUser(t.id)
      });
    default:
      return e
  }
}

function s(e) {
  return 2 !== c.getCurrentConfig({
    location: e
  }).fromUserType
}

function l(e) {
  return 2 !== c.useExperiment({
    location: e
  }).fromUserType
}