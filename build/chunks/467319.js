/** Chunk was on 88018 **/
/** chunk id: 467319, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  H: () => o,
  a: () => a
});
var Chunk460083 = require("./460083.js");

function o(n) {
  let {
    enabled: t
  } = i.d.getCurrentConfig({
    guildId: n,
    location: "988d4e_3"
  });
  return t
}

function a(n) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      enabled: e
    } = i.d.useExperiment({
      guildId: n,
      location: "988d4e_4"
    }, {
      autoTrackExposure: t
    });
  return e
}