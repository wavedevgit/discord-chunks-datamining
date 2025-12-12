/** Chunk was on web.js **/
/** chunk id: 574176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  bN: () => a,
  gx: () => s,
  n5: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-07_hang_status",
  label: "Hang Statuses",
  defaultConfig: {
    enableHangStatus: false,
    setDefaultStatus: false,
    showEmptyChannelTopic: true,
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
      showEmptyChannelTopic: false,
      allowPermanentClear: false,
      defaultStatusVariant: "illocons"
    }
  }, {
    id: 2,
    label: "Enable Hang Status with Twemoji - chilling default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      showEmptyChannelTopic: false,
      allowPermanentClear: false,
      defaultStatusVariant: "twemoji"
    }
  }, {
    id: 3,
    label: "Enable Hang Status with Twemoji - neutral default",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      showEmptyChannelTopic: false,
      allowPermanentClear: false,
      defaultStatusVariant: "twemojimild"
    }
  }, {
    id: 4,
    label: "Enable Hang Status with Twemoji - neutral default, allow clearing statuses",
    config: {
      enableHangStatus: true,
      setDefaultStatus: true,
      showEmptyChannelTopic: false,
      allowPermanentClear: true,
      defaultStatusVariant: "twemojimild"
    }
  }]
});

function a(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return o.useExperiment({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  })
}

function s(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return o.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  })
}