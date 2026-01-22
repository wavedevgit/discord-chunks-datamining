/** Chunk was on 21738 **/
/** chunk id: 331103, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kf: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk600975.C)({
  id: "2025-09_you_bar",
  label: "You Bar",
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  kind: "user",
  defaultConfig: {
    enabled: false,
    backButtonBadge: false,
    animateBetweenServers: false,
    profileButton: false
  },
  treatments: [{
    id: 1,
    label: "You Bar no profile button",
    config: {
      enabled: true,
      backButtonBadge: true,
      animateBetweenServers: false,
      profileButton: false
    }
  }, {
    id: 2,
    label: "You Bar profile button",
    config: {
      enabled: true,
      backButtonBadge: true,
      animateBetweenServers: false,
      profileButton: true
    }
  }, {
    id: 3,
    label: "You Bar with badged back button and animate between servers",
    config: {
      enabled: true,
      backButtonBadge: true,
      animateBetweenServers: true,
      profileButton: false
    }
  }]
})