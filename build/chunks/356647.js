/** Chunk was on 88647 **/
/** chunk id: 356647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => p
}), require("./388685.js"), require("./997841.js");
var Chunk602715 = require("./602715.js"),
  Chunk258732 = require("./258732.js"),
  Chunk314897 = require("./314897.js"),
  Chunk630388 = require("./630388.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk981631 = require("./981631.js");
let u = new Map;

function d(e, t) {
  let n = (0, s.ZP)({
      channelId: t,
      type: c.uaV.IN_GAME_MESSAGE_NUX,
      content: "",
      author: e.author,
      flags: c.iLy.EPHEMERAL,
      state: c.yb.SENT
    }),
    r = (0, o.e5)(n);
  return r.applicationId = e.applicationId, r.timestamp = e.timestamp, r
}

function p(e, t) {
  let n = function(e, t) {
    var n, o;
    if (u.get(t.id) === e.id) return d(e, t.id);
    if (null == e.applicationId || !(0, a.yE)(e.flags, c.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === l.default.getId() || null != e.activity || (0, a.yE)(null != (n = t.recipientFlags) ? n : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX) || u.has(t.id)) return null;
    let s = d(e, t.id);
    u.set(t.id, e.id);
    let p = (0, a.mB)(null != (o = t.recipientFlags) ? o : 0, r.V.DISMISSED_IN_GAME_MESSAGE_NUX, true);
    return i.Z.updatePrivateChannelRecipientFlags(t.id, p), s
  }(e, t);
  return null != n ? n : null
}