/** Chunk was on web.js **/
/** chunk id: 340541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SK: () => a,
  _k: () => l,
  jW: () => s,
  t_: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-03_invites_refresh",
    label: "Invites Refresh",
    defaultConfig: {
      enabled: false,
      entrypoints: false,
      modal: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enabled - Treatment 1 (Full Invites Refresh)",
      config: {
        enabled: true,
        entrypoints: true,
        modal: true
      }
    }, {
      id: 2,
      label: "Enabled - Treatment 2 (New Entrypoints, Old Modal)",
      config: {
        enabled: true,
        entrypoints: true,
        modal: false
      }
    }, {
      id: 3,
      label: "Enabled - Treatment 3 (Old Entrypoints, New Modal)",
      config: {
        enabled: true,
        entrypoints: false,
        modal: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-09_invite_refresh_entrypoints",
    label: "Invites Refresh",
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

function s(e) {
  let {
    location: t
  } = e, {
    enabled: n,
    entrypoints: r,
    modal: i
  } = a.getCurrentConfig({
    location: t
  }), {
    isVoiceChannelEntrypointEnabled: s,
    isInCallEntrypointEnabled: l,
    isGuildEntrypointEnabled: c,
    isTextChannelEntrypointEnabled: u
  } = o.getCurrentConfig({
    location: t
  });
  return {
    enabled: n,
    entrypoints: r,
    modal: i,
    isVoiceChannelEntrypointEnabled: s,
    isInCallEntrypointEnabled: l,
    isGuildEntrypointEnabled: c,
    isTextChannelEntrypointEnabled: u
  }
}

function l(e) {
  let {
    location: t
  } = e, {
    enabled: n,
    entrypoints: r,
    modal: i
  } = a.useExperiment({
    location: t
  }), {
    isVoiceChannelEntrypointEnabled: s,
    isInCallEntrypointEnabled: l,
    isGuildEntrypointEnabled: c,
    isTextChannelEntrypointEnabled: u
  } = o.useExperiment({
    location: t
  });
  return {
    enabled: n,
    entrypoints: r,
    modal: i,
    isVoiceChannelEntrypointEnabled: s,
    isInCallEntrypointEnabled: l,
    isGuildEntrypointEnabled: c,
    isTextChannelEntrypointEnabled: u
  }
}