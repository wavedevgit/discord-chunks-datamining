/** Chunk was on 81985 **/
/** chunk id: 47481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk275726 = require("./275726.js"),
  Chunk135938 = require("./135938.js"),
  Chunk55935 = require("./55935.js"),
  Chunk709054 = require("./709054.js"),
  Chunk554838 = require("./554838.js"),
  Chunk493892 = require("./493892.js"),
  Chunk356647 = require("./356647.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t, n, d, {
      channel: p,
      messages: f,
      oldestUnreadMessageId: h,
      treatSpam: g,
      summaries: m,
      selectedSummary: b
    } = e,
    y = [],
    v = false,
    O = null != h ? a.default.extractTimestamp(h) : null,
    j = null;
  return f.forEach(e => {
    var i, x, C;
    let E, S;
    if (null != m && m.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; i = e < (null == m ? true : m.length), i; e++) {
        if (null == m[e]) continue;
        let n = a.default.extractTimestamp(m[e].startId),
          r = a.default.extractTimestamp(m[e].endId);
        if (t >= n && t <= r) {
          if (j === m[e].id) break;
          y.push({
            type: u.ys_.DIVIDER,
            content: m[e].topic,
            contentKey: m[e].id
          }), j = m[e].id;
          break
        }
      }
    }
    let _ = (0, l.vc)(e.timestamp, "LL");
    _ !== t && null == j && (y.push({
      type: u.ys_.DIVIDER,
      content: _,
      contentKey: _
    }), t = _);
    let I = y[y.length - 1],
      P = null,
      Z = (0, s.DQ)(e);
    v = v || Z;
    let N = function(e, t, n) {
      if (r.V.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
      else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
      return null
    }(p, e, Z && g);
    (null !== N && ([P, I] = (S = x = I, null == x || x.type !== N ? (E = {
      type: N,
      content: [],
      key: e.id
    }, y.push(E)) : S = (E = x).content[E.content.length - 1], [E, S])), h === e.id && null != O) ? (null != I && I.type === u.ys_.DIVIDER ? I.unreadId = e.id : null !== P ? (C = P, e.isFirstMessageInForumPost(p) || C.content.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), C.hasUnread = true) : e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), O = null) : null != O && a.default.extractTimestamp(e.id) > O && (e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), O = null);
    let T = (0, c.f)(e, p);
    null != T && "before" === T.position && y.push({
      type: u.ys_.MESSAGE,
      content: T.message,
      groupId: T.message.id
    });
    let A = (null == I ? true : I.type) === u.ys_.MESSAGE ? d : I;
    (0, o.J)(p, A, e) && (n = e.id);
    let w = {
      type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = w);
    let {
      jumpSequenceId: R,
      jumpFlash: D,
      jumpTargetId: M
    } = f;
    D && e.id === M && null != R && (w.flashKey = R), f.jumpTargetId === e.id && (w.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== P ? (P.content.push(w), w.jumpTarget && (P.hasJumpTarget = true)) : y.push(w), e.isFirstMessageInForumPost(p) && y.push({
      type: u.ys_.FORUM_POST_ACTION_BAR
    }), null != T && "after" === T.position && y.push({
      type: u.ys_.MESSAGE,
      content: T.message,
      groupId: T.message.id
    }), null != b && e.id === b.endId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      contentKey: b.endId,
      isSummaryDivider: true
    })
  }), v && (0, s.P1)(p) && i.Z.trackExposure({
    location: "416cc9_1"
  }), y
}