/** Chunk was on 17534 **/
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
      oldestUnreadMessageId: g,
      treatSpam: f,
      summaries: m,
      selectedSummary: b
    } = e,
    A = [],
    y = false,
    O = null != g ? s.default.extractTimestamp(g) : null,
    _ = null;
  return p.forEach(e => {
    var l, j, x;
    let v, E;
    if (null != m && m.length > 0) {
      let t = s.default.extractTimestamp(e.id);
      for (let e = 0; l = e < (null == m ? true : m.length), l; e++) {
        if (null == m[e]) continue;
        let n = s.default.extractTimestamp(m[e].startId),
          r = s.default.extractTimestamp(m[e].endId);
        if (t >= n && t <= r) {
          if (_ === m[e].id) break;
          A.push({
            type: u.TZK.DIVIDER,
            content: m[e].topic,
            contentKey: m[e].id
          }), _ = m[e].id;
          break
        }
      }
    }
    let C = (0, i.i$)(e.timestamp, "LL");
    C !== t && null == _ && (A.push({
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
    }(h, e, N && f);
    (null !== T && ([I, S] = (E = j = S, null == j || j.type !== T ? (v = {
      type: T,
      content: [],
      key: e.id
    }, A.push(v)) : E = (v = j).content[v.content.length - 1], [v, E])), g === e.id && null != O) ? (null != S && S.type === u.TZK.DIVIDER ? S.unreadId = e.id : null !== I ? (x = I, e.isFirstMessageInForumPost(h) || x.content.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), x.hasUnread = true) : e.isFirstMessageInForumPost(h) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), O = null) : null != O && s.default.extractTimestamp(e.id) > O && (e.isFirstMessageInForumPost(h) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), O = null);
    let P = (0, c.r)(e, h);
    null != P && "before" === P.position && A.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    });
    let w = (null == S ? true : S.type) === u.TZK.MESSAGE ? d : S;
    (0, a.l)(h, w, e) && (n = e.id);
    let R = {
      type: e.type === u.lAJ.THREAD_STARTER_MESSAGE ? u.TZK.THREAD_STARTER_MESSAGE : u.TZK.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = R);
    let {
      jumpSequenceId: D,
      jumpFlash: L,
      jumpTargetId: M
    } = p;
    L && e.id === M && null != D && (R.flashKey = D), p.jumpTargetId === e.id && (R.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && A.push({
      type: u.TZK.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(R), R.jumpTarget && (I.hasJumpTarget = true)) : A.push(R), e.isFirstMessageInForumPost(h) && A.push({
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
  }), y && (0, o.iJ)(h) && l.A.trackExposure({
    location: "416cc9_1"
  }), A
}