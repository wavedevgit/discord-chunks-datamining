/** Chunk was on web.js **/
/** chunk id: 102597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk652215 = require("./652215.js");

function i(e) {
  let {
    CDN_HOST: t,
    PROJECT_ENV: n
  } = window.GLOBAL_ENV;
  return "development" !== n ? "https://".concat(t).concat(r.Rsh.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Rsh.SOUNDBOARD_SOUND(e))
}