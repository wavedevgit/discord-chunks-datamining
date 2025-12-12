/** Chunk was on web.js **/
/** chunk id: 330055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk72703 = require("./72703.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    avatarHash: t,
    avatarId: n,
    isGuildProfile: s = false,
    avatarAssetOrigin: l = r.q.NEW_ASSET
  } = e;
  i.default.track(o.rMx.USER_AVATAR_UPDATED, {
    animated: (0, a.xR)(t),
    is_guild_profile: s,
    recent_avatar_id: l === r.q.ARCHIVED_ASSET ? Number(n) : true,
    is_edited_recent_avatar: l === r.q.EDITED_ARCHIVED_ASSET
  })
}