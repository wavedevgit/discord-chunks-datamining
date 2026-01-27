/** Chunk was on web.js **/
/** chunk id: 140547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $j: () => o,
  Eh: () => a,
  ko: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let a = (0, Chunk600975.C)({
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
  commonTriggerPoint: Chunk688151.$G.VOICE_CALL,
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

function o(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return a.useExperiment({
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
  return a.getCurrentConfig({
    guildId: t,
    location: n
  }, {
    autoTrackExposure: true
  })
}