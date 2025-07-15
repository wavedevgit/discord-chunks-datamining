/** Chunk was on 93955 **/
n.d(t, {
  _x: () => l,
  dm: () => c,
  uw: () => s
});
var a = n(818083),
  r = n(752048),
  i = n(699516);
let o = (0, a.B)({
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

function c(e) {
  switch (o.getCurrentConfig({
      location: "filterPresences"
    }).fromUserType) {
    case 2:
      return [];
    case 0:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return i.Z.isFriend(t.id)
      });
    case 1:
      return e.filter(e => {
        let {
          user: t
        } = e;
        return i.Z.isFriend(t.id) || r.Z.isHighlyAffinedVCUser(t.id)
      });
    default:
      return e
  }
}

function s(e) {
  return 2 !== o.getCurrentConfig({
    location: e
  }).fromUserType
}

function l(e) {
  return 2 !== o.useExperiment({
    location: e
  }).fromUserType
}