/** Chunk was on 65354 **/
/** chunk id: 147522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk661824 = require("./661824.jsx"),
  Chunk289481 = require("./289481.jsx"),
  Chunk809780 = require("./809780.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk803205 = require("./803205.js");

function d(e, t, n) {
  let {
    markChannelRead: i,
    markGuildRead: d,
    deleteChannel: p,
    toggle: h,
    getNumUnreadChannels: f
  } = t, g = null;
  return l().flatMap(e, e => {
    let t = e.sortOrder !== g;
    g = e.sortOrder;
    let l = [];
    return t && (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel ? l.push((0, r.jsx)(o.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.intl.string(c.t.roBMzj)
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === s.As.NoNotifications && l.push((0, r.jsx)(o.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.intl.string(c.t["2Ys7nu"])
    }, "disabled-divider"))), l.push((0, r.jsx)(a.Z, {
      channel: e,
      markChannelRead: i,
      markGuildRead: d,
      toggle: h,
      deleteChannel: p,
      onJump: n,
      getNumUnreadChannels: f
    }, e.channelId)), l
  })
}