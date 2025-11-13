/** Chunk was on 1272 **/
/** chunk id: 753762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  tm: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  id: "2025-09_you_bar",
  label: "You Bar",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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