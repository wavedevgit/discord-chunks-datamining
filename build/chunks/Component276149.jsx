/** Chunk was on 96750 **/
/** chunk id: 276149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk915863 = require("./915863.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    className: t,
    color: n,
    look: d,
    hangStatusChannel: p,
    onAction: f
  } = e, m = (0, i.e7)([a.Z], () => a.Z.getChannelId() === p.id);
  return (0, r.jsx)(s.Z, {
    className: t,
    disabled: m,
    onClick: () => {
      null == f || f(), l.default.selectVoiceChannel(p.id), o.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: p.guild_id,
        channel_id: p.id
      })
    },
    color: n,
    look: d,
    fullWidth: true,
    children: u.intl.string(u.t["9C444u"])
  }, "join-hang")
}