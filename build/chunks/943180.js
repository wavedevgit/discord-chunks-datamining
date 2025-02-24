/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  D: () => i
});
var r = n(471309);

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    {
      enabled: t,
      version: n,
      isBadgeVersion2: i
    } = r.Z.useExperiment({
      location: "experiment_hook"
    }, {
      autoTrackExposure: e
    });
  return {
    enabled: t,
    version: n,
    isBadgeVersion2: i
  }
}