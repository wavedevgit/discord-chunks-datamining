/** Chunk was on 34740 **/
/** chunk id: 356647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => f
}), require("./388685.js"), require("./997841.js");
var Chunk602715 = require("./602715.js"),
  Chunk95015 = require("./95015.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk258732 = require("./258732.js"),
  Chunk314897 = require("./314897.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk981631 = require("./981631.js");
let p = new Map;

function h(e, t) {
  let n = (0, u.ZP)({
      channelId: t,
      type: d.uaV.IN_GAME_MESSAGE_NUX,
      content: "",
      author: e.author,
      flags: d.iLy.EPHEMERAL,
      state: d.yb.SENT
    }),
    i = (0, c.e5)(n);
  return i.applicationId = e.applicationId, i.timestamp = e.timestamp, i
}

function f(e, t) {
  let n = function(e, t) {
    var n, l;
    if (p.get(t.id) === e.id) return h(e, t.id);
    if (null == e.applicationId || !(0, r.yE)(e.flags, d.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === s.default.getId() || null != e.activity || (0, r.yE)(null != (n = t.recipientFlags) ? n : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX) || p.has(t.id)) return null;
    let a = h(e, t.id);
    p.set(t.id, e.id);
    let c = (0, r.mB)(null != (l = t.recipientFlags) ? l : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX, true);
    return o.Z.updatePrivateChannelRecipientFlags(t.id, c), a
  }(e, t);
  if (null != n) return {
    message: n,
    position: "before"
  };
  let f = function(e, t) {
    if (!(0, l.NS)() || null == e.attachments.find(e => {
        var t;
        return (0, r.yE)(null != (t = e.flags) ? t : 0, d.J0y.IS_CLIP)
      }) || e.author.id === s.default.getId()) return null;
    let {
      clipId: n,
      remoteTriggerClipId: i
    } = function(e) {
      let t = "__CLIP_METADATA__",
        n = e.indexOf(t);
      if (false === n) return {};
      let i = n + t.length,
        r = e.substring(i);
      try {
        let e = JSON.parse(r);
        return {
          clipId: e.id,
          remoteTriggerClipId: e.remoteTriggerClipId
        }
      } catch (e) {
        return {}
      }
    }(e.content);
    if (null == n && null == i) return null;
    let o = a.Z.getMatchingGroupClip(n, i);
    if (null == o || a.Z.wasClipSharedInChannel(o.id, t.id)) return null;
    var p = t.id;
    let h = (0, u.ZP)({
        channelId: p,
        type: 65,
        content: "",
        author: e.author,
        state: d.yb.SENT
      }),
      f = (0, c.e5)(h);
    return f.timestamp = e.timestamp, f.messageReference = {
      channel_id: p,
      message_id: e.id
    }, f
  }(e, t);
  return null != f ? {
    message: f,
    position: "after"
  } : null
}