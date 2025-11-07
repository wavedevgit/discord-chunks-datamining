/** Chunk was on 13140 **/
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
      treatSpam: m,
      summaries: g,
      selectedSummary: b
    } = e,
    _ = [],
    y = false,
    C = null != h ? a.default.extractTimestamp(h) : null,
    v = null;
  return f.forEach(e => {
    var i, O, x;
    let E, j;
    if (null != g && g.length > 0) {
      let t = a.default.extractTimestamp(e.id);
      for (let e = 0; i = e < (null == g ? true : g.length), i; e++) {
        if (null == g[e]) continue;
        let n = a.default.extractTimestamp(g[e].startId),
          r = a.default.extractTimestamp(g[e].endId);
        if (t >= n && t <= r) {
          if (v === g[e].id) break;
          _.push({
            type: u.ys_.DIVIDER,
            content: g[e].topic,
            contentKey: g[e].id
          }), v = g[e].id;
          break
        }
      }
    }
    let S = (0, l.vc)(e.timestamp, "LL");
    S !== t && null == v && (_.push({
      type: u.ys_.DIVIDER,
      content: S,
      contentKey: S
    }), t = S);
    let P = _[_.length - 1],
      I = null,
      Z = (0, s.DQ)(e);
    y = y || Z;
    let T = function(e, t, n) {
      if (r.V.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ys_.MESSAGE_GROUP_BLOCKED;
      else if (t.ignored) return u.ys_.MESSAGE_GROUP_IGNORED;
      else if ((0, s.P1)(e) && n) return u.ys_.MESSAGE_GROUP_SPAMMER;
      return null
    }(p, e, Z && m);
    (null !== T && ([I, P] = (j = O = P, null == O || O.type !== T ? (E = {
      type: T,
      content: [],
      key: e.id
    }, _.push(E)) : j = (E = O).content[E.content.length - 1], [E, j])), h === e.id && null != C) ? (null != P && P.type === u.ys_.DIVIDER ? P.unreadId = e.id : null !== I ? (x = I, e.isFirstMessageInForumPost(p) || x.content.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), x.hasUnread = true) : e.isFirstMessageInForumPost(p) || _.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), C = null) : null != C && a.default.extractTimestamp(e.id) > C && (e.isFirstMessageInForumPost(p) || _.push({
      type: u.ys_.DIVIDER,
      unreadId: e.id
    }), C = null);
    let N = (0, c.f)(e, p);
    null != N && "before" === N.position && _.push({
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
      jumpTargetId: D
    } = f;
    R && e.id === D && null != M && (w.flashKey = M), f.jumpTargetId === e.id && (w.jumpTarget = true), null != b && e.id === b.startId && b.count > 1 && _.push({
      type: u.ys_.DIVIDER,
      content: b.topic,
      contentKey: b.startId,
      isSummaryDivider: true
    }), null !== I ? (I.content.push(w), w.jumpTarget && (I.hasJumpTarget = true)) : _.push(w), e.isFirstMessageInForumPost(p) && _.push({
      type: u.ys_.FORUM_POST_ACTION_BAR
    }), null != N && "after" === N.position && _.push({
      type: u.ys_.MESSAGE,
      content: N.message,
      groupId: N.message.id
    }), null != b && e.id === b.endId && b.count > 1 && _.push({
      type: u.ys_.DIVIDER,
      contentKey: b.endId,
      isSummaryDivider: true
    })
  }), y && (0, s.P1)(p) && i.Z.trackExposure({
    location: "416cc9_1"
  }), _
}