/** Chunk was on web.js **/
/** chunk id: 996744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cg: () => f,
  Lb: () => d
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk600975 = require("./600975.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk723702 = require("./723702.js");
let l = new Set(["943265993613008967"]),
  c = (0, Chunk600975.C)({
    kind: "user",
    id: "2024-10_flamingo",
    label: "Flamingo",
    defaultConfig: {
      enabled: false,
      isTester: false
    },
    treatments: [{
      id: 1,
      label: "Enabled - Treatment 1",
      config: {
        enabled: true,
        isTester: false
      }
    }, {
      id: 2,
      label: "Enabled - Treatment 2",
      config: {
        enabled: true,
        isTester: false
      }
    }, {
      id: 3,
      label: "Enabled - Treatment 3",
      config: {
        enabled: true,
        isTester: false
      }
    }, {
      id: 4,
      label: "Enabled - Tester",
      config: {
        enabled: true,
        isTester: true
      }
    }]
  }),
  u = () => (0, s.isWindows)() || (0, s.isMac)();

function d(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e;
  if (__OVERLAY__ || !u()) returnfalse;
  let {
    enabled: r
  } = c.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}

function f(e) {
  let {
    location: t,
    autoTrackExposure: n
  } = e, {
    enabled: i,
    isTester: s
  } = c.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }), d = (0, r.bG)([o.A, a.A], () => a.A.getChannel(o.A.getVoiceChannelId())), f = !s || null != d && l.has(d.guild_id);
  return !__OVERLAY__ && i && u() && f
}