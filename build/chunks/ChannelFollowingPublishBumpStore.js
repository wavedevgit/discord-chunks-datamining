/** Chunk was on web.js **/
/** chunk id: 572957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./938796.js");
var r, Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk812930 = require("./812930.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
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
    optimistic: a
  } = e;
  if (a || m.has(n)) returnfalse;
  let s = c.A.getChannel(n),
    o = d.default.getCurrentUser();
  if (!(null != s && s.type === p.rbe.GUILD_ANNOUNCEMENT && (0, f.A)(r) && (null != o && (null == (t = r.author) ? true : t.id) === o.id ? u.A.can(p.xBc.SEND_MESSAGES, s) : u.A.can(p.xBc.MANAGE_MESSAGES, s)) && !i.Lt(Number(r.flags), p.pr7.CROSSPOSTED))) returnfalse;
  g.add(r.id)
}

function y(e) {
  let {
    message: t
  } = e;
  g.has(t.id) && i.Lt(Number(t.flags), p.pr7.CROSSPOSTED) && g.delete(t.id)
}

function b(e) {
  let {
    messageId: t
  } = e;
  g.delete(t)
}

function O(e) {
  let {
    channelId: t
  } = e;
  m.add(t), s.w.set(h, m), g.clear()
}

function v(e) {
  g.clear()
}
class A extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default, c.A, u.A, d.default), m = new Set(s.w.get(h))
  }
  shouldShowBump(e) {
    return g.has(e)
  }
}
_(A, "displayName", "ChannelFollowingPublishBumpStore");
let I = new A(Chunk73153.h, {
  MESSAGE_CREATE: E,
  MESSAGE_UPDATE: y,
  CHANNEL_SELECT: v,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: b,
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: O
})