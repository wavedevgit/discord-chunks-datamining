/** Chunk was on web.js **/
/** chunk id: 745488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l,
  N: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk154579 = require("./154579.js"),
  a = function(e) {
    return e.NONE = "NONE", e.ALL_GUILDS = "ALL_GUILDS", e.SELECTED_GUILD = "SELECTED_GUILD", e.FRECENCY_GUILDS = "FRECENCY_GUILDS", e
  }({});
let o = {
    enabled: false,
    type: "NONE"
  },
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_search_quick_switcher_guild_members",
    label: "Search Quick Switcher Guild Members Experiment",
    defaultConfig: o,
    treatments: [{
      id: 1,
      label: "Enables searching against all guild members by default",
      config: {
        enabled: true,
        type: "ALL_GUILDS"
      }
    }, {
      id: 2,
      label: "Enables searching against members of the selected guild by default",
      config: {
        enabled: true,
        type: "SELECTED_GUILD"
      }
    }, {
      id: 3,
      label: "Enables searching against guilds with the highest frecency by default",
      config: {
        enabled: true,
        type: "FRECENCY_GUILDS"
      }
    }]
  });

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, r = (0, i.ro)({
    location: t,
    autoTrackExposure: n
  }), {
    enabled: a,
    type: o
  } = s.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return {
    enabled: a,
    type: o
  }
}