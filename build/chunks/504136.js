/** Chunk was on 41727 **/
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
      channel: p,
      messages: h,
      oldestUnreadMessageId: f,
      treatSpam: g,
      summaries: m,
      selectedSummary: b
    } = e,
    A = [],
    y = false,
    _ = null != f ? s.default.extractTimestamp(f) : null,
    O = null;
  return h.forEach(e => {
    var l, j, v;
    let x, E;
    if (null != m && m.length > 0) {
      let t = s.default.extractTimestamp(e.id);
      for (let e = 0; l = e < (null == m ? true : m.length), l; e++) {
        if (null == m[e]) continue;
        let n = s.default.extractTimestamp(m[e].startId),
          r = s.default.extractTimestamp(m[e].endId);
        if (t >= n && t <= r) {
          if (O === m[e].id) break;
          A.push({
            type: u.TZK.DIVIDER,
            content: m[e].topic,
            contentKey: m[e].id
          }), O = m[e].id;
          break
        }
      }
    }
    let C = (0, i.i$)(e.timestamp, "LL");
    C !== t && null == O && (A.push({
      type: u.TZK.DIVIDER,
      content: C,
      contentKey: C
    }), t = C);
    let S = A[A.length - 1],
      I = null,
      N = (0, o.kf)(e);
    y = y || N;
    let T = function(e, t, n) {
      if (r.M.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.TZK.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.TZK.MESSAGE_GROUP_IGNORED;
      else if ((0, o.iJ)(e) && n) return u.TZK.MESSAGE_GROUP_SPAMMER;
      return null
    }(p, e, N && g);
    (null !== T && ([I, S] = (E = j = S, null == j || j.type !== T ? (x = {
      type: T,
      content: [],
      key: e.id
    }, A.push(x)) : E = (x = j).content[x.content.length - 1], [x, E])), f === e.id && null != _) ? (null != S && S.type === u.TZK.DIVIDER ? S.unreadId = e.id : null !== I ? (v = I, e.isFirstMessageInForumPost(p) || v.content.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), v.hasUnread = true) : e.isFirstMessageInForumPost(p) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), _ = null) : null != _ && s.default.extractTimestamp(e.id) > _ && (e.isFirstMessageInForumPost(p) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), _ = null);
    let P = (0, c.r)(e, p);
    null != P && "before" === P.position && A.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    });
    let w = (null == S ? true : S.type) === u.TZK.MESSAGE ? d : S;
    (0, a.l)(p, w, e) && (n = e.id);
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
    } = h;
    M && e.id === L && null != D && (R.flashKey = D), h.jumpTargetId === e.id && (R.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && A.push({
      type: u.TZK.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(R), R.jumpTarget && (I.hasJumpTarget = true)) : A.push(R), e.isFirstMessageInForumPost(p) && A.push({
      type: u.TZK.FORUM_POST_ACTION_BAR
    }), null != P && "after" === P.position && A.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    }), null != b && e.id === b.endId && b.count > 1 && A.push({
      type: u.TZK.DIVIDER,
      contentKey: b.endId,
      isSummaryDivider: true
    })
  }), y && (0, o.iJ)(p) && l.A.trackExposure({
    location: "416cc9_1"
  }), A
}