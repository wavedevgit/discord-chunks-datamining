/** Chunk was on web.js **/
/** chunk id: 875527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hu: () => f,
  wt: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk818083 = require("./818083.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk358085 = require("./358085.js");
let l = new Set(["943265993613008967"]),
  c = (0, Chunk818083.B)({
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
  u = () => (0, Chunk358085.isWindows)() || (0, Chunk358085.isMac)();

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
  }), d = (0, r.e7)([o.Z, a.Z], () => a.Z.getChannel(o.Z.getVoiceChannelId())), f = !s || null != d && l.has(d.guild_id);
  return !__OVERLAY__ && i && u() && f
}