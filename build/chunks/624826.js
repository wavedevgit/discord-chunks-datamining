/** Chunk was on web.js **/
/** chunk id: 624826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => o
});
var Chunk392107 = require("./392107.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    avatarHash: t,
    avatarId: n,
    isGuildProfile: o = false,
    avatarAssetOrigin: l = r.E.NEW_ASSET
  } = e;
  i.default.track(s.HAw.USER_AVATAR_UPDATED, {
    animated: (0, a.VI)(t),
    is_guild_profile: o,
    recent_avatar_id: l === r.E.ARCHIVED_ASSET ? Number(n) : true,
    is_edited_recent_avatar: l === r.E.EDITED_ARCHIVED_ASSET
  })
}