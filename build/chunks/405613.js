/** Chunk was on web.js **/
/** chunk id: 405613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk134432 = require("./134432.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  let n;
  if (null == e.image) return null;
  null == t && (t = window.screen.width * (0, r.x_)()), t = (0, r.oO)(t);
  let o = window.GLOBAL_ENV.CDN_HOST;
  if (null != o) {
    var a;
    n = "".concat(a = "https:", "//").concat(o, "/guild-events/").concat(e.id, "/").concat(e.image)
  } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
  return n + "?size=".concat(t)
}