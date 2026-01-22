/** Chunk was on web.js **/
/** chunk id: 527776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-10_client_meaningfully_online_timer_rollout",
  label: "Friend Online Timer Rollout",
  defaultConfig: {
    useOnlineTimer: false,
    useTestTimerDuration: false
  },
  treatments: [{
    id: 1,
    label: "Use online timer",
    config: {
      useOnlineTimer: true,
      useTestTimerDuration: false
    }
  }, {
    id: 2,
    label: "Use test timer duration",
    config: {
      useOnlineTimer: true,
      useTestTimerDuration: true
    }
  }]
})