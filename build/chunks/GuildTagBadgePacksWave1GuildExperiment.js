/** Chunk was on web.js **/
/** chunk id: 901005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => a,
  i: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js");
let a = (0, Chunk818083.B)({
  kind: "guild",
  id: "2025-07_guild_tag_badge_packs_wave_1",
  label: "Guild Tag Badge Packs Wave 1",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Guild Tag Badge Packs Wave 1",
    config: {
      enabled: true
    }
  }]
});

function s(e) {
  return null != e && e !== o._ && e !== i.I_8
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = s(e);
  return a.useExperiment({
    guildId: e,
    location: t
  }, {
    disable: !r,
    autoTrackExposure: n
  }).enabled
}