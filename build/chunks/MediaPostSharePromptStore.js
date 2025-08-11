/** Chunk was on web.js **/
/** chunk id: 48929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430198 = require("./430198.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk522579 = require("./522579.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Set;

function _() {
  f = new Set
}

function p(e) {
  var t;
  if (e.isPushNotification) return;
  let n = e.message;
  if (s.default.getId() !== (null == (t = n.author) ? true : t.id) || !(0, u.z9)(n.id, n.channel_id)) return;
  let r = l.Z.getChannel(n.channel_id);
  null != r && null != r.parent_id && a.Z.isChannelGated(r.guild_id, r.parent_id) && f.add(c.default.castMessageIdAsChannelId(e.message.id))
}

function h(e) {
  let {
    threadId: t
  } = e;
  f.delete(t)
}

function m(e) {
  f.clear()
}
class g extends(r = Chunk442837.ZP.Store) {
  shouldDisplayPrompt(e) {
    return f.has(e)
  }
}
d(g, "displayName", "MediaPostSharePromptStore");
let E = new g(Chunk570140.Z, {
  CONNECTION_OPEN: _,
  MESSAGE_CREATE: p,
  DISMISS_MEDIA_POST_SHARE_PROMPT: h,
  LOGOUT: m
})