/** Chunk was on 61344 **/
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
let h = new Map;

function p(e, t) {
  let n = (0, u.Ay)({
      channelId: t,
      type: d.lAJ.IN_GAME_MESSAGE_NUX,
      content: "",
      author: e.author,
      flags: d.pr7.EPHEMERAL,
      state: d.cmJ.SENT
    }),
    l = (0, c.rh)(n);
  return l.applicationId = e.applicationId, l.timestamp = e.timestamp, l
}

function f(e, t) {
  let n = function(e, t) {
    var n, i;
    if (h.get(t.id) === e.id) return p(e, t.id);
    if (null == e.applicationId || !(0, r.Lt)(e.flags, d.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) || !t.isDM() || e.author.id === o.default.getId() || null != e.activity || (0, r.Lt)(null != (n = t.recipientFlags) ? n : 0, l.o.DISMISSED_IN_GAME_MESSAGE_NUX) || h.has(t.id)) return null;
    let a = p(e, t.id);
    h.set(t.id, e.id);
    let c = (0, r.lA)(null != (i = t.recipientFlags) ? i : 0, l.o.DISMISSED_IN_GAME_MESSAGE_NUX, true);
    return s.A.updatePrivateChannelRecipientFlags(t.id, c), a
  }(e, t);
  if (null != n) return {
    message: n,
    position: "before"
  };
  let f = function(e, t) {
    var n;
    let l, s;
    if (!(0, i.J)() || null == e.attachments.find(e => {
        var t;
        return (0, r.Lt)(null != (t = e.flags) ? t : 0, d.sbO.IS_CLIP)
      }) || e.author.id === o.default.getId()) return null;
    let {
      clipId: h,
      remoteTriggerClipId: p
    } = function(e) {
      let t = "__CLIP_METADATA__",
        n = e.indexOf(t);
      if (false === n) return {};
      let l = n + t.length,
        r = e.substring(l);
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
    if (null == h && null == p) return null;
    let f = a.A.getMatchingGroupClip(h, p);
    return null == f || a.A.wasClipSharedInChannel(f.id, t.id) ? null : (n = t.id, l = (0, u.Ay)({
      channelId: n,
      type: 66,
      content: "",
      author: e.author,
      state: d.cmJ.SENT
    }), (s = (0, c.rh)(l)).timestamp = e.timestamp, s.messageReference = {
      channel_id: n,
      message_id: e.id
    }, s)
  }(e, t);
  return null != f ? {
    message: f,
    position: "after"
  } : null
}