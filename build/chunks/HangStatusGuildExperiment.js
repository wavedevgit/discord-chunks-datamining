/** Chunk was on web.js **/
/** chunk id: 574176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "guild",
  id: "2025-07_hang_status",
  label: "Hang Statuses",
  defaultConfig: {
    enableHangStatus: false,
    setDefaultStatus: false,
    allowChannelTopic: false
  },
  treatments: [{
    id: 1,
    label: "enable hang statuses with no default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: false,
      allowChannelTopic: false
    }
  }, {
    id: 2,
    label: "enable hang statuses with default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: false
    }
  }, {
    id: 3,
    label: "enable hang statuses with channel topic",
    config: {
      enableHangStatus: true,
      setDefaultStatus: false,
      allowChannelTopic: true
    }
  }]
})