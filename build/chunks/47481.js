/** Chunk was on 68197 **/
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
    _ = false,
    C = null != f ? a.default.extractTimestamp(f) : null,
    v = null;
  return h.forEach(e => {
    var i, x, O;
    let j, E;
    if (null != g && g.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; i = e < (null == g ? true : g.length), i; e++) {
        if (null == g[e]) continue;
        let n = a.default.extractTimestamp(g[e].startId),
          r = a.default.extractTimestamp(g[e].endId);
        if (t >= n && t <= r) {
          if (v === g[e].id) break;
          y.push({
            type: u.ys_.DIVIDER,
            content: g[e].topic,
            contentKey: g[e].id
          }), v = g[e].id;
          break
        }
      }
    }
    let S = (0, l.vc)(e.timestamp, "LL");
    S !== t && null == v && (y.push({
      type: u.ys_.DIVIDER,
      content: S,
      contentKey: S
    }), t = S);
    let I = y[y.length - 1],
      P = null,
      Z = (0, s.DQ)(e);
    _ = _ || Z;
    let T = function(e, t, n) {
      if (r.V.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
      else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
      return null
    }(p, e, Z && m);
    (null !== T && ([P, I] = (E = x = I, null == x || x.type !== T ? (j = {
      type: T,
      content: [],
      key: e.id
    }, y.push(j)) : E = (j = x).content[j.content.length - 1], [j, E])), f === e.id && null != C) ? (null != I && I.type === u.ys_.DIVIDER ? I.unreadId = e.id : null !== P ? (O = P, e.isFirstMessageInForumPost(p) || O.content.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), O.hasUnread = true) : e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), C = null) : null != C && a.default.extractTimestamp(e.id) > C && (e.isFirstMessageInForumPost(p) || y.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), C = null);
    let N = (0, c.f)(e, p);
    null != N && y.push({
      type: u.ys_.MESSAGE,
      content: N,
      groupId: N.id
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
      jumpFlash: M,
      jumpTargetId: D
    } = h;
    M && e.id === D && null != R && (w.flashKey = R), h.jumpTargetId === e.id && (w.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== P ? (P.content.push(w), w.jumpTarget && (P.hasJumpTarget = true)) : y.push(w), e.isFirstMessageInForumPost(p) && y.push({
      type: u.ys_.FORUM_POST_ACTION_BAR
    }), null != b && e.id === b.endId && b.count > 1 && y.push({
      type: u.ys_.DIVIDER,
      contentKey: b.endId,
      isSummaryDivider: true
    })
  }), _ && (0, s.P1)(p) && i.Z.trackExposure({
    location: "416cc9_1"
  }), y
}