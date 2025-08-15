/** Chunk was on 96750 **/
/** chunk id: 276149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    hangStatusChannel: f,
    onAction: p
  } = e, m = (0, i.e7)([a.Z], () => a.Z.getChannelId() === f.id);
  return (0, r.jsx)(s.Z, {
    className: t,
    disabled: m,
    onClick: () => {
      null == p || p(), l.default.selectVoiceChannel(f.id), o.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: f.guild_id,
        channel_id: f.id
      })
    },
    color: n,
    look: d,
    fullWidth: true,
    children: u.intl.string(u.t["9C444u"])
  }, "join-hang")
}