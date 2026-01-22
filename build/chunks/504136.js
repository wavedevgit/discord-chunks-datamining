/** Chunk was on 97492 **/
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
      channel: f,
      messages: p,
      oldestUnreadMessageId: h,
      treatSpam: b,
      summaries: g,
      selectedSummary: m
    } = e,
    A = [],
    y = false,
    O = null != h ? a.default.extractTimestamp(h) : null,
    j = null;
  return p.forEach(e => {
    var l, v, x;
    let E, _;
    if (null != g && g.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; l = e < (null == g ? true : g.length), l; e++) {
        if (null == g[e]) continue;
        let n = a.default.extractTimestamp(g[e].startId),
          r = a.default.extractTimestamp(g[e].endId);
        if (t >= n && t <= r) {
          if (j === g[e].id) break;
          A.push({
            type: u.TZK.DIVIDER,
            content: g[e].topic,
            contentKey: g[e].id
          }), j = g[e].id;
          break
        }
      }
    }
    let C = (0, i.i$)(e.timestamp, "LL");
    C !== t && null == j && (A.push({
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
    }(f, e, N && b);
    (null !== T && ([I, S] = (_ = v = S, null == v || v.type !== T ? (E = {
      type: T,
      content: [],
      key: e.id
    }, A.push(E)) : _ = (E = v).content[E.content.length - 1], [E, _])), h === e.id && null != O) ? (null != S && S.type === u.TZK.DIVIDER ? S.unreadId = e.id : null !== I ? (x = I, e.isFirstMessageInForumPost(f) || x.content.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), x.hasUnread = true) : e.isFirstMessageInForumPost(f) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), O = null) : null != O && a.default.extractTimestamp(e.id) > O && (e.isFirstMessageInForumPost(f) || A.push({
      type: u.TZK.DIVIDER,
      unreadId: e.id
    }), O = null);
    let P = (0, c.r)(e, f);
    null != P && "before" === P.position && A.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    });
    let w = (null == S ? true : S.type) === u.TZK.MESSAGE ? d : S;
    (0, s.l)(f, w, e) && (n = e.id);
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
    M && e.id === L && null != D && (R.flashKey = D), p.jumpTargetId === e.id && (R.jumpTarget = true), null != m && e.id === m.startId && m.count > 1 && A.push({
      type: u.TZK.DIVIDER,
      content: m.topic,
      contentKey: m.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(R), R.jumpTarget && (I.hasJumpTarget = true)) : A.push(R), e.isFirstMessageInForumPost(f) && A.push({
      type: u.TZK.FORUM_POST_ACTION_BAR
    }), null != P && "after" === P.position && A.push({
      type: u.TZK.MESSAGE,
      content: P.message,
      groupId: P.message.id
    }), null != m && e.id === m.endId && m.count > 1 && A.push({
      type: u.TZK.DIVIDER,
      contentKey: m.endId,
      isSummaryDivider: true
    })
  }), y && (0, o.iJ)(f) && l.A.trackExposure({
    location: "416cc9_1"
  }), A
}