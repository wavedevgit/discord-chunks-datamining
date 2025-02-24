/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  sS: () => i
});
let r = (0, n(818083).B)({
  kind: "user",
  id: "2024-08_user_profile_blocker_skeleton",
  label: "User Profile Blocker Skeleton",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable User Profile Blocker Skeleton",
    config: {
      enabled: !0
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}