/** Chunk was on 36084 **/
/** chunk id: 27584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk846027 = require("./846027.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Yn.DEFAULT,
    n = (0, r.e7)([l.default], () => l.default.getId()),
    c = (0, r.e7)([o.Z], () => o.Z.supports(a.AN.DISABLE_VIDEO)),
    s = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
  return [(null == e || e === n) && c, s, e => {
    let r = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
    i.Z.setDisableLocalVideo(n, r, t)
  }]
}