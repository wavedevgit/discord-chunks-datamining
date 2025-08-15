/** Chunk was on 34082 **/
/** chunk id: 405613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk134432 = require("./134432.js"),
  Chunk981631 = require("./981631.js");

function i(e, t) {
  let n;
  if (null == e.image) return null;
  null == t && (t = window.screen.width * (0, r.x_)()), t = (0, r.oO)(t);
  let i = window.GLOBAL_ENV.CDN_HOST;
  if (null != i) n = "".concat("https:", "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image);
  else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + l.ANM.GUILD_EVENT_IMAGE(e.id, e.image, "png");
  return n + "?size=".concat(t)
}