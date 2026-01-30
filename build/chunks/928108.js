/** Chunk was on 65614 **/
/** chunk id: 928108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => l,
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

function l(e) {
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