/** Chunk was on 82124 **/
/** chunk id: 993397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./314940.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk534091 = require("./534091.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk534469 = require("./534469.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk884193 = require("./884193.js"),
  Chunk548498 = require("./548498.js");

function y(e) {
  let {
    expanded: t,
    onClick: n,
    count: i,
    compact: l,
    collapsedReason: a
  } = e, c = (0, o.EQ)({
    collapsedReason: a
  }).with({
    collapsedReason: g.t["VFWjc+"]
  }, () => (0, r.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  })).with({
    collapsedReason: g.t["+FcYM/"]
  }, () => (0, r.jsx)(s.t6m, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  })).otherwise(() => (0, r.jsx)(s.Dio, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  }));
  return (0, r.jsx)(u.Z, {
    compact: l,
    role: "group",
    childrenMessageContent: (0, r.jsx)(f.Z, {
      compact: l,
      className: m.blockedSystemMessage,
      iconNode: c,
      children: (0, r.jsxs)("div", {
        className: m.blockedMessageText,
        children: [g.intl.format(a, {
          count: i
        }), " —", " ", (0, r.jsx)(s.P3F, {
          tag: "span",
          onClick: n,
          className: m.blockedAction,
          children: t ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA)
        })]
      })
    })
  })
}
let v = Chunk473749.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: l,
    compact: o = false,
    unreadId: s,
    collapsedReason: u
  } = e, {
    hasJumpTarget: f = false
  } = n, [g, v] = i.useState(f), O = i.useCallback(() => v(e => !e), []);
  i.useEffect(() => {
    f && v(true)
  }, [f]);
  let j = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, r.jsxs)("div", {
    className: a()({
      [b.groupStart]: true,
      [m.expanded]: g
    }),
    children: [n.hasUnread && (!g || (null == (t = n.content[0]) ? true : t.type) === h.ys_.DIVIDER) ? (0, r.jsx)(p.Z, {
      isUnread: true,
      id: s
    }, "divider") : null, (0, r.jsx)(y, {
      count: j,
      compact: o,
      expanded: g,
      onClick: O,
      collapsedReason: u
    }, "collapsed-message-item"), g ? n.content.map((e, t) => {
      if (e.type === h.ys_.DIVIDER && t > 0) {
        var i, a;
        let e = null != (a = null == (i = n.content[t + 1]) ? true : i.isGroupStart) && a;
        return (0, r.jsx)(p.Z, {
          isUnread: true,
          isBeforeGroup: e,
          id: s
        }, "divider")
      }
      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
        let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? d.Ru : d.ZP;
        return (0, r.jsx)(t, {
          id: (0, c.p)(l.id, e.content.id),
          className: m.__invalid_blocked,
          compact: o,
          channel: l,
          message: e.content,
          groupId: e.groupId,
          flashKey: e.flashKey,
          isLastItem: false,
          renderContentOnly: false
        }, e.content.id)
      }
    }) : null]
  })
})