/** Chunk was on web.js **/
/** chunk id: 795318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => u,
  u: () => c
});
var Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      targetUserId: r,
      tileType: i,
      entrypoint: a
    } = n;
  return n => u({
    menuItemProps: n,
    menuName: e,
    location: t,
    entrypoint: null != a ? a : s.A5.CONTEXT_MENU,
    targetUserId: r,
    tileType: i
  })
}

function u(e) {
  var t;
  let {
    menuItemProps: {
      type: n
    },
    menuName: s,
    location: c,
    entrypoint: u,
    targetUserId: d,
    tileType: f
  } = e, p = a.Z.getChannelId(), _ = a.Z.getGuildId(), m = null == (t = i.Z.getChannel(p)) ? true : t.type, h = r.default.getId();
  o.default.track(l.rMx.CALL_MENU_ITEM_INTERACTED, {
    location: c,
    menu_name: s,
    menu_item_type: n,
    entrypoint: u,
    targets_self: null == d ? true : d === h,
    guild_id: _,
    channel_id: p,
    channel_type: m,
    tile_type: f
  })
}