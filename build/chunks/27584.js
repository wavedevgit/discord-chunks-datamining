/** Chunk was on web.js **/
/** chunk id: 27584, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
    n = (0, r.e7)([o.default], () => o.default.getId()),
    c = (0, r.e7)([a.Z], () => a.Z.supports(l.AN.DISABLE_VIDEO)),
    u = (0, r.e7)([a.Z], () => a.Z.isLocalVideoDisabled(n, t), [n, t]),
    d = e => {
      let r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
      i.Z.setDisableLocalVideo(n, r, t)
    };
  return [(null == e || e === n) && c, u, d]
}