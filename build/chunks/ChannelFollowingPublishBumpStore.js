/** Chunk was on web.js **/
/** chunk id: 212342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./997841.js");
var r, Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk110630 = require("./110630.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = "ChannelFollowingBumpChannels",
  h = new Set,
  g = new Set;

function E(e) {
  var t;
  let {
    channelId: n,
    message: r,
    optimistic: a
  } = e;
  if (a || h.has(n)) returnfalse;
  let o = c.Z.getChannel(n),
    s = d.default.getCurrentUser();
  if (!(null != o && o.type === p.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != s && (null == (t = r.author) ? true : t.id) === s.id ? u.Z.can(p.Plq.SEND_MESSAGES, o) : u.Z.can(p.Plq.MANAGE_MESSAGES, o)) && !i.yE(Number(r.flags), p.iLy.CROSSPOSTED))) returnfalse;
  g.add(r.id)
}

function b(e) {
  let {
    message: t
  } = e;
  g.has(t.id) && i.yE(Number(t.flags), p.iLy.CROSSPOSTED) && g.delete(t.id)
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
  h.add(t), o.K.set(m, h), g.clear()
}

function v(e) {
  g.clear()
}
class S extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk496675.Z, Chunk594174.default), h = new Set(Chunk433517.K.get(m))
  }
  shouldShowBump(e) {
    return g.has(e)
  }
}
_(S, "displayName", "ChannelFollowingPublishBumpStore");
let I = new S(Chunk570140.Z, {
  MESSAGE_CREATE: E,
  MESSAGE_UPDATE: b,
  CHANNEL_SELECT: v,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: y,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O
})