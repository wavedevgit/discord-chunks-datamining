/** Chunk was on 34740 **/
/** chunk id: 993397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./314940.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk492593 = require("./492593.jsx"),
  Chunk534469 = require("./534469.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378661 = require("./378661.js"),
  Chunk360514 = require("./360514.js");

function b(e) {
  let {
    expanded: t,
    onClick: n,
    count: r,
    compact: l,
    collapsedReason: a
  } = e, u = (0, o.EQ)({
    collapsedReason: a
  }).with({
    collapsedReason: f.t["VFWjc+"]
  }, () => (0, i.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  })).with({
    collapsedReason: f.t["+FcYM/"]
  }, () => (0, i.jsx)(s.t6m, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  })).otherwise(() => (0, i.jsx)(s.Dio, {
    size: "md",
    color: "currentColor",
    className: m.blockedIcon
  }));
  return (0, i.jsx)(c.Z, {
    compact: l,
    role: "group",
    childrenMessageContent: (0, i.jsx)(p.Z, {
      compact: l,
      className: m.blockedSystemMessage,
      iconNode: u,
      children: (0, i.jsxs)("div", {
        className: m.blockedMessageText,
        children: [f.intl.format(a, {
          count: r
        }), " —", " ", (0, i.jsx)(s.P3F, {
          tag: "span",
          onClick: n,
          className: m.blockedAction,
          children: t ? f.intl.string(f.t.fgq1gs) : f.intl.string(f.t.XJuakA)
        })]
      })
    })
  })
}
let y = Chunk647438.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: l,
    compact: o = false,
    unreadId: s,
    collapsedReason: c
  } = e, {
    hasJumpTarget: p = false
  } = n, [f, y] = r.useState(p), C = r.useCallback(() => y(e => !e), []), v = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, i.jsxs)("div", {
    className: a()({
      [g.groupStart]: true,
      [m.expanded]: f
    }),
    children: [n.hasUnread && (!f || (null == (t = n.content[0]) ? true : t.type) === h.ys_.DIVIDER) ? (0, i.jsx)(d.Z, {
      isUnread: true,
      id: s
    }, "divider") : null, (0, i.jsx)(b, {
      count: v,
      compact: o,
      expanded: f,
      onClick: C,
      collapsedReason: c
    }, "collapsed-message-item"), f ? n.content.map((e, t) => {
      if (e.type === h.ys_.DIVIDER && t > 0) {
        var r, a;
        let e = null != (a = null == (r = n.content[t + 1]) ? true : r.isGroupStart) && a;
        return (0, i.jsx)(d.Z, {
          isUnread: true,
          isBeforeGroup: e,
          id: s
        }, "divider")
      }
      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
        let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
        return (0, i.jsx)(t, {
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