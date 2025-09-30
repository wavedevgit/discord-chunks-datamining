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
  queryId: e => o.McO.ACTIVITIES_DISCORD_CONFIG(e.definition.name),
  get: e => a.Z.getOne(e.definition.name),
  load: async (e, t) => {
    let {
      enabled: n
    } = t.getConfig({
      location: "useActivitiesDiscordConfig"
    });
    n && await (0, i.t)(t.definition.name)
  },
  useStateHook: Chunk442837.e7
})