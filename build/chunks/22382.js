/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(981631);

function i(e) {
  let {
    CDN_HOST: t,
    PROJECT_ENV: n
  } = window.GLOBAL_ENV;
  return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(r.ANM.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.ANM.SOUNDBOARD_SOUND(e))
}