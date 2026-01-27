/** Chunk was on 41727 **/
/** chunk id: 117316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => f
}), require("./896048.js"), require("./938796.js");
var Chunk253506 = require("./253506.js"),
  Chunk665260 = require("./665260.js"),
  Chunk734066 = require("./734066.js"),
  Chunk274372 = require("./274372.js"),
  Chunk704844 = require("./704844.js"),
  Chunk961350 = require("./961350.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk652215 = require("./652215.js");
let p = new Map;

function h(e, t) {
  let n = (0, u.Ay)({
      channelId: t,
      type: d.lAJ.IN_GAME_MESSAGE_NUX,
      content: "",
      author: e.author,
      flags: d.pr7.EPHEMERAL,
      state: d.cmJ.SENT
    }),
    r = (0, c.rh)(n);
  return r.applicationId = e.applicationId, r.timestamp = e.timestamp, r
}

function f(e, t) {
  let n = function(e, t) {
    var n, i;
    if (p.get(t.id) === e.id) return h(e, t.id);
    if (null == e.applicationId || !(0, l.Lt)(e.flags, d.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === o.default.getId() || null != e.activity || (0, l.Lt)(null != (n = t.recipientFlags) ? n : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX) || p.has(t.id)) return null;
    let s = h(e, t.id);
    p.set(t.id, e.id);
    let c = (0, l.lA)(null != (i = t.recipientFlags) ? i : 0, r.o.DISMISSED_IN_GAME_MESSAGE_NUX, true);
    return a.A.updatePrivateChannelRecipientFlags(t.id, c), s
  }(e, t);
  if (null != n) return {
    message: n,
    position: "before"
  };
  let f = function(e, t) {
    var n;
    let r, a;
    if (!(0, i.J)() || null == e.attachments.find(e => {
        var t;
        return (0, l.Lt)(null != (t = e.flags) ? t : 0, d.sbO.IS_CLIP)
      }) || e.author.id === o.default.getId()) return null;
    let {
      clipId: p,
      remoteTriggerClipId: h
    } = function(e) {
      let t = "__CLIP_METADATA__",
        n = e.indexOf(t);
      if (false === n) return {};
      let r = n + t.length,
        l = e.substring(r);
      try {
        let e = JSON.parse(l);
        return {
          clipId: e.id,
          remoteTriggerClipId: e.remoteTriggerClipId
        }
      } catch (e) {
        return {}
      }
    }(e.content);
    if (null == p && null == h) return null;
    let f = s.A.getMatchingGroupClip(p, h);
    return null == f || s.A.wasClipSharedInChannel(f.id, t.id) ? null : (n = t.id, r = (0, u.Ay)({
      channelId: n,
      type: 66,
      content: "",
      author: e.author,
      state: d.cmJ.SENT
    }), (a = (0, c.rh)(r)).timestamp = e.timestamp, a.messageReference = {
      channel_id: n,
      message_id: e.id
    }, a)
  }(e, t);
  return null != f ? {
    message: f,
    position: "after"
  } : null
}