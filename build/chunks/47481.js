/** Chunk was on 57336 **/
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
      messages: h,
      oldestUnreadMessageId: f,
      treatSpam: m,
      summaries: g,
      selectedSummary: b
    } = e,
    y = [],
    C = false,
    v = null != f ? a.default.extractTimestamp(f) : null,
    _ = null;
  return h.forEach(e => {
    var r, x, O;
    let j, E;
    if (null != g && g.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; r = e < (null == g ? true : g.length), r; e++) {
        if (null == g[e]) continue;
        let n = a.default.extractTimestamp(g[e].startId),
          i = a.default.extractTimestamp(g[e].endId);
        if (t >= n && t <= i) {
          if (_ === g[e].id) break;
          y.push({
            type: u.ys_.DIVIDER,
            content: g[e].topic,
            contentKey: g[e].id
          }), _ = g[e].id;
          break
        }
      }
    }
    let S = (0, l.vc)(e.timestamp, "LL");
    S !== t && null == _ && (y.push({
      type: u.ys_.DIVIDER,
      content: S,
      contentKey: S
    }), t = S);
    let P = y[y.length - 1],
      I = null,
      Z = (0, s.DQ)(e);
    C = C || Z;
    let T = function(e, t, n) {
      if (i.V.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
      else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
      return null
    }(p, e, Z && m);
    (null !== T && ([I, P] = (E = x = P, null == x || x.type !== T ? (j = {
      type: T,
      content: [],
      key: e.id
    }, y.push(j)) : E = (j = x).content[j.content.length - 1], [j, E])), f === e.id && null != v) ? (null != P && P.type === u.ys_.DIVIDER ? P.unreadId = e.id : null !== I ? (O = I, e.isFirstMessageInForumPost(p) || O.content.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), O.hasUnread = true) : e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), v = null) : null != v && a.default.extractTimestamp(e.id) > v && (e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), v = null);
    let N = (0, c.f)(e, p);
    null != N && "before" === N.position && y.push({
      type: u.ys_.MESSAGE,
      content: N.message,
      groupId: N.message.id
    });
    let A = (null == P ? true : P.type) === u.ys_.MESSAGE ? d : P;
    (0, o.J)(p, A, e) && (n = e.id);
    let w = {
      type: e.type === u.uaV.THREAD_STARTER_MESSAGE ? u.ys_.THREAD_STARTER_MESSAGE : u.ys_.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = w);
    let {
      jumpSequenceId: M,
      jumpFlash: R,
      jumpTargetId: L
    } = h;
    R && e.id === L && null != M && (w.flashKey = M), h.jumpTargetId === e.id && (w.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(w), w.jumpTarget && (I.hasJumpTarget = true)) : y.push(w), e.isFirstMessageInForumPost(p) && y.push({
      type: u.ys_.FORUM_POST_ACTION_BAR
    }), null != N && "after" === N.position && y.push({
      type: u.ys_.MESSAGE,
      content: N.message,
      groupId: N.message.id
    }), null != b && e.id === b.endId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      contentKey: b.endId,
      isSummaryDivider: true
    })
  }), C && (0, s.P1)(p) && r.Z.trackExposure({
    location: "416cc9_1"
  }), y
}