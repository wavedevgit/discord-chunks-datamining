/** Chunk was on web.js **/
/** chunk id: 480890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => u,
  s: () => c
});
var Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js");

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
    entrypoint: null != a ? a : o.GK.CONTEXT_MENU,
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
    menuName: o,
    location: c,
    entrypoint: u,
    targetUserId: d,
    tileType: f
  } = e, p = a.A.getChannelId(), _ = a.A.getGuildId(), h = null == (t = i.A.getChannel(p)) ? true : t.type, m = r.default.getId();
  s.default.track(l.HAw.CALL_MENU_ITEM_INTERACTED, {
    location: c,
    menu_name: o,
    menu_item_type: n,
    entrypoint: u,
    targets_self: null == d ? true : d === m,
    guild_id: _,
    channel_id: p,
    channel_type: h,
    tile_type: f
  })
}