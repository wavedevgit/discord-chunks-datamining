/** Chunk was on 61344 **/
/** chunk id: 504136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./321073.js"), require("./896048.js");
var Chunk448761 = require("./448761.js"),
  Chunk559149 = require("./559149.js"),
  Chunk405269 = require("./405269.js"),
  Chunk661191 = require("./661191.js"),
  Chunk857069 = require("./857069.js"),
  Chunk694318 = require("./694318.js"),
  Chunk117316 = require("./117316.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let t, n, d, {
      channel: h,
      messages: p,
      oldestUnreadMessageId: f,
      treatSpam: m,
      summaries: g,
      selectedSummary: A
    } = e,
    b = [],
    _ = false,
    y = null != f ? a.default.extractTimestamp(f) : null,
    v = null;
  return p.forEach(e => {
    var r, E, O;
    let C, x;
    if (null != g && g.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; r = e < (null == g ? true : g.length), r; e++) {
        if (null == g[e]) continue;
        let n = a.default.extractTimestamp(g[e].startId),
          l = a.default.extractTimestamp(g[e].endId);
        if (t >= n && t <= l) {
          if (v === g[e].id) break;
          b.push({
            type: u.TZK.DIVIDER,
            content: g[e].topic,
            contentKey: g[e].id
          }), v = g[e].id;
          break
        }
      }
    }
    let S = (0, i.i$)(e.timestamp, "LL");
    S !== t && null == v && (b.push({
      type: u.TZK.DIVIDER,
      content: S,
      contentKey: S
    }), t = S);
    let j = b[b.length - 1],
      I = null,
      T = (0, o.kf)(e);
    _ = _ || T;
    let N = function(e, t, n) {
      if (l.M.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.TZK.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.TZK.MESSAGE_GROUP_IGNORED;
      else if ((0, o.iJ)(e) && n) return u.TZK.MESSAGE_GROUP_SPAMMER;
      return null
    }(h, e, T && m);
    (null !== N && ([I, j] = (x = E = j, null == E || E.type !== N ? (C = {
      type: N,
      content: [],
      key: e.id
    }, b.push(C)) : x = (C = E).content[C.content.length - 1], [C, x])), f === e.id && null != y) ? (null != j && j.type === u.TZK.DIVIDER ? j.unreadId = e.id : null !== I ? (O = I, e.isFirstMessageInForumPost(h) || O.content.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), O.hasUnread = true) : e.isFirstMessageInForumPost(h) || b.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), y = null) : null != y && a.default.extractTimestamp(e.id) > y && (e.isFirstMessageInForumPost(h) || b.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), y = null);
    let P = (0, c.r)(e, h);
    null != P && "before" === P.position && b.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    });
    let w = (null == j ? true : j.type) === u.TZK.MESSAGE ? d : j;
    (0, s.l)(h, w, e) && (n = e.id);
    let R = {
      type: e.type === u.lAJ.THREAD_STARTER_MESSAGE ? u.TZK.THREAD_STARTER_MESSAGE : u.TZK.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = R);
    let {
      jumpSequenceId: D,
      jumpFlash: M,
      jumpTargetId: L
    } = p;
    M && e.id === L && null != D && (R.flashKey = D), p.jumpTargetId === e.id && (R.jumpTarget = true), null != A && e.id === A.startId && A.count > 1 && b.push({
      type: u.TZK.DIVIDER,
      content: A.topic,
      contentKey: A.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(R), R.jumpTarget && (I.hasJumpTarget = true)) : b.push(R), e.isFirstMessageInForumPost(h) && b.push({
      type: u.TZK.FORUM_POST_ACTION_BAR
    }), null != P && "after" === P.position && b.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    }), null != A && e.id === A.endId && A.count > 1 && b.push({
      type: u.TZK.DIVIDER,
      contentKey: A.endId,
      isSummaryDivider: true
    })
  }), _ && (0, o.iJ)(h) && r.A.trackExposure({
    location: "416cc9_1"
  }), b
}