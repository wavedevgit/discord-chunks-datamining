/** Chunk was on 38342 **/
/** chunk id: 449751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  return r.wS ? (0, i.jsx)(l.sNh, {
    id: "copy-link",
    label: o.intl.string(o.t.Xrt5Po),
    icon: l.xPt,
    action: () => {
      (0, r.JG)("".concat(location.protocol, "//").concat(location.host).concat(a.Z5c.CHANNEL(t.guild_id, t.id, e.id))), s.default.track(a.rMx.MESSAGE_LINK_COPIED, {
        message_id: e.id,
        channel: e.channel_id
      })
    }
  }) : null
}