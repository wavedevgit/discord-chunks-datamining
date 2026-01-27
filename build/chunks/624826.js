/** Chunk was on web.js **/
/** chunk id: 624826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
});
var Chunk392107 = require("./392107.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    avatarHash: t,
    avatarId: n,
    isGuildProfile: s = false,
    avatarAssetOrigin: l = r.E.NEW_ASSET
  } = e;
  i.default.track(o.HAw.USER_AVATAR_UPDATED, {
    animated: (0, a.VI)(t),
    is_guild_profile: s,
    recent_avatar_id: l === r.E.ARCHIVED_ASSET ? Number(n) : true,
    is_edited_recent_avatar: l === r.E.EDITED_ARCHIVED_ASSET
  })
}