/** Chunk was on web.js **/
/** chunk id: 60902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk208126 = require("./208126.js"),
  Chunk887614 = require("./887614.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk442837.Kb)([Chunk887614.Z], {
  getQueryId: e => e.getConfig({
    location: "useActivitiesDiscordConfig"
  }).enabled ? o.McO.ACTIVITIES_DISCORD_CONFIG(e.definition.name) : null,
  get: e => a.Z.getOne(e.definition.name),
  load: async e => {
    let {
      enabled: t
    } = e.getConfig({
      location: "useActivitiesDiscordConfig"
    });
    t && await (0, i.t)(e.definition.name)
  }
})