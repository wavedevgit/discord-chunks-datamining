/** Chunk was on web.js **/
/** chunk id: 928108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => a,
  p: () => i
});
var Chunk853066 = require("./853066.js");

function i(e) {
  let {
    enabled: t
  } = r.R.getCurrentConfig({
    guildId: e,
    location: "988d4e_3"
  });
  return t
}

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      enabled: n
    } = r.R.useExperiment({
      guildId: e,
      location: "988d4e_4"
    }, {
      autoTrackExposure: t
    });
  return n
}