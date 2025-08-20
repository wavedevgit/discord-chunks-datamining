/** Chunk was on web.js **/
/** chunk id: 276149, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    hangStatusChannel: f,
    onAction: _
  } = e, p = (0, i.e7)([o.Z], () => o.Z.getChannelId() === f.id), h = () => {
    null == _ || _(), a.default.selectVoiceChannel(f.id), s.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
      source: "UserProfilePopout",
      guild_id: f.guild_id,
      channel_id: f.id
    })
  };
  return (0, r.jsx)(l.Z, {
    className: t,
    disabled: p,
    onClick: h,
    color: n,
    look: d,
    fullWidth: true,
    children: u.intl.string(u.t["9C444u"])
  }, "join-hang")
}