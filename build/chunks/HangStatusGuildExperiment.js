/** Chunk was on web.js **/
/** chunk id: 574176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-07_hang_status",
  label: "Hang Statuses",
  defaultConfig: {
    enableHangStatus: false,
    setDefaultStatus: false,
    allowChannelTopic: true,
    allowPermanentClear: false,
    defaultStatusVariant: "twemoji"
  },
  commonTriggerPoint: Chunk987338.$P.VOICE_CALL,
  treatments: [{
    id: 1,
    label: "Enable Hang Status with illocons - chilling default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: true,
      allowPermanentClear: false,
      defaultStatusVariant: "illocons"
    }
  }, {
    id: 2,
    label: "Enable Hang Status with Twemoji - chilling default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: true,
      allowPermanentClear: false,
      defaultStatusVariant: "twemoji"
    }
  }, {
    id: 3,
    label: "Enable Hang Status with Twemoji - neutral default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: true,
      allowPermanentClear: false,
      defaultStatusVariant: "twemojimild"
    }
  }, {
    id: 4,
    label: "Enable Hang Status with Twemoji - neutral default, allow clearing statuses",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: true,
      allowPermanentClear: true,
      defaultStatusVariant: "twemojimild"
    }
  }, {
    id: 5,
    label: "Enable Hang Status with Twemoji - no default, allow clearing statuses",
    config: {
      enableHangStatus: true,
      setDefaultStatus: false,
      allowChannelTopic: true,
      allowPermanentClear: true,
      defaultStatusVariant: "twemoji"
    }
  }, {
    id: 6,
    label: "Enable Hang Status with original icons - chilling default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      allowChannelTopic: true,
      allowPermanentClear: false,
      defaultStatusVariant: "original"
    }
  }]
})