/** Chunk was on web.js **/
/** chunk id: 340541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LK: () => o,
  _k: () => s,
  t_: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-09_invite_refresh_entrypoints",
  label: "Invites Refresh Entrypoints Only",
  defaultConfig: {
    isVoiceChannelEntrypointEnabled: false,
    isInCallEntrypointEnabled: false,
    isGuildEntrypointEnabled: false,
    isTextChannelEntrypointEnabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Refresh - VC Entrypoints",
    config: {
      isVoiceChannelEntrypointEnabled: true,
      isInCallEntrypointEnabled: false,
      isGuildEntrypointEnabled: false,
      isTextChannelEntrypointEnabled: false
    }
  }, {
    id: 2,
    label: "Refresh - In Call Entrypoints",
    config: {
      isVoiceChannelEntrypointEnabled: false,
      isInCallEntrypointEnabled: true,
      isGuildEntrypointEnabled: false,
      isTextChannelEntrypointEnabled: false
    }
  }, {
    id: 3,
    label: "Refresh - Guild Entrypoints",
    config: {
      isVoiceChannelEntrypointEnabled: false,
      isInCallEntrypointEnabled: false,
      isGuildEntrypointEnabled: true,
      isTextChannelEntrypointEnabled: false
    }
  }, {
    id: 4,
    label: "Refresh - Text Channel Entrypoints",
    config: {
      isVoiceChannelEntrypointEnabled: false,
      isInCallEntrypointEnabled: false,
      isGuildEntrypointEnabled: false,
      isTextChannelEntrypointEnabled: true
    }
  }]
});

function o(e) {
  let {
    location: t
  } = e, {
    isVoiceChannelEntrypointEnabled: n,
    isInCallEntrypointEnabled: r,
    isGuildEntrypointEnabled: i,
    isTextChannelEntrypointEnabled: o
  } = a.getCurrentConfig({
    location: t
  }), s = n || r || i || o;
  return {
    isVoiceChannelEntrypointEnabled: s,
    isInCallEntrypointEnabled: s,
    isGuildEntrypointEnabled: s,
    isTextChannelEntrypointEnabled: s
  }
}

function s(e) {
  let {
    location: t
  } = e, {
    isVoiceChannelEntrypointEnabled: n,
    isInCallEntrypointEnabled: r,
    isGuildEntrypointEnabled: i,
    isTextChannelEntrypointEnabled: o
  } = a.useExperiment({
    location: t
  });
  return {
    isVoiceChannelEntrypointEnabled: n,
    isInCallEntrypointEnabled: r,
    isGuildEntrypointEnabled: i,
    isTextChannelEntrypointEnabled: o
  }
}