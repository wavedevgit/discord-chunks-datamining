/** Chunk was on web.js **/
/** chunk id: 467319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => i,
  a: () => a
});
var Chunk460083 = require("./460083.js");

function i(e) {
  let {
    enabled: t
  } = r.d.getCurrentConfig({
    guildId: e,
    location: "988d4e_3"
  });
  return t
}

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      enabled: n
    } = r.d.useExperiment({
      guildId: e,
      location: "988d4e_4"
    }, {
      autoTrackExposure: t
    });
  return n
}