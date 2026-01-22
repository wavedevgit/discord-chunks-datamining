/** Chunk was on web.js **/
/** chunk id: 691012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk776231 = require("./776231.js"),
  Chunk652215 = require("./652215.js");

function a(e, t) {
  let n;
  if (null == e.image) return null;
  null == t && (t = window.screen.width * (0, r.mZ)()), t = (0, r.kr)(t);
  let a = window.GLOBAL_ENV.CDN_HOST;
  if (null != a) {
    var s;
    n = "".concat(s = "https:", "//").concat(a, "/guild-events/").concat(e.id, "/").concat(e.image)
  } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.Rsh.GUILD_EVENT_IMAGE(e.id, e.image, "png");
  return n + "?size=".concat(t)
}