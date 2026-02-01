/** Chunk was on 42402 **/
/** chunk id: 792967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./114821.js"), require("./339614.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk813516 = require("./813516.jsx"),
  Chunk5658 = require("./5658.jsx"),
  Chunk712209 = require("./712209.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk48355 = require("./48355.js");

function d(e, t, n) {
  let {
    markChannelRead: l,
    markGuildRead: d,
    deleteChannel: p,
    toggle: h,
    getNumUnreadChannels: g
  } = t, f = null;
  return i().flatMap(e, e => {
    let t = e.sortOrder !== f;
    f = e.sortOrder;
    let i = [];
    return t && (e.hasLoadedAnything && e.sortOrder === o.xB.ReallyOldChannel ? i.push((0, r.jsx)(s.A, {
      className: u.y,
      contentClassName: u.$,
      children: c.intl.string(c.t.roBMzj)
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.xB.NoNotifications && i.push((0, r.jsx)(s.A, {
      className: u.y,
      contentClassName: u.$,
      children: c.intl.string(c.t["2Ys7nu"])
    }, "disabled-divider"))), i.push((0, r.jsx)(a.A, {
      channel: e,
      markChannelRead: l,
      markGuildRead: d,
      toggle: h,
      deleteChannel: p,
      onJump: n,
      getNumUnreadChannels: g
    }, e.channelId)), i
  })
}