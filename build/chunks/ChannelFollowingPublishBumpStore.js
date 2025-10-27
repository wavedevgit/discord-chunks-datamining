/** Chunk was on web.js **/
/** chunk id: 212342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk110630 = require("./110630.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = "ChannelFollowingBumpChannels",
  m = new Set,
  g = new Set;

function E(e) {
  var t;
  let {
    channelId: n,
    message: r,
    optimistic: i
  } = e;
  if (i || m.has(n)) returnfalse;
  let a = l.Z.getChannel(n),
    o = u.default.getCurrentUser();
  if (!(null != a && a.type === _.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != o && (null == (t = r.author) ? true : t.id) === o.id ? c.Z.can(_.Plq.SEND_MESSAGES, a) : c.Z.can(_.Plq.MANAGE_MESSAGES, a)) && !d.yE(Number(r.flags), _.iLy.CROSSPOSTED))) returnfalse;
  g.add(r.id)
}

function b(e) {
  let {
    message: t
  } = e;
  g.has(t.id) && d.yE(Number(t.flags), _.iLy.CROSSPOSTED) && g.delete(t.id)
}

function y(e) {
  let {
    messageId: t
  } = e;
  g.delete(t)
}

function O(e) {
  let {
    channelId: t
  } = e;
  m.add(t), a.K.set(h, m), g.clear()
}

function v(e) {
  g.clear()
}
class I extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk496675.Z, Chunk594174.default), m = new Set(Chunk433517.K.get(h))
  }
  shouldShowBump(e) {
    return g.has(e)
  }
}
p(I, "displayName", "ChannelFollowingPublishBumpStore");
let T = new I(Chunk570140.Z, {
  MESSAGE_CREATE: E,
  MESSAGE_UPDATE: b,
  CHANNEL_SELECT: v,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O
})