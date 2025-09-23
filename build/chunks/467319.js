/** Chunk was on 93375 **/
/** chunk id: 467319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => l,
  a: () => i
});
var Chunk460083 = require("./460083.js");

function l(e) {
  let {
    enabled: t
  } = r.d.getCurrentConfig({
    guildId: e,
    location: "988d4e_3"
  });
  return t
}

function i(e) {
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