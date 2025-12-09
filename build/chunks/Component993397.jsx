/** Chunk was on 34740 **/
/** chunk id: 993397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk378661 = require("./378661.js"),
  Chunk360514 = require("./360514.js");

function y(e) {
  let {
    expanded: t,
    onClick: n,
    count: r,
    compact: l,
    collapsedReason: a
  } = e, c = (0, o.EQ)({
    collapsedReason: a
  }).with({
    collapsedReason: m.t["VFWjc+"]
  }, () => (0, i.jsx)(s.kZF, {
    size: "md",
    color: "currentColor",
    className: g.blockedIcon
  })).with({
    collapsedReason: m.t["+FcYM/"]
  }, () => (0, i.jsx)(s.t6m, {
    size: "md",
    color: "currentColor",
    className: g.blockedIcon
  })).otherwise(() => (0, i.jsx)(s.Dio, {
    size: "md",
    color: "currentColor",
    className: g.blockedIcon
  }));
  return (0, i.jsx)(u.Z, {
    compact: l,
    role: "group",
    childrenMessageContent: (0, i.jsx)(h.Z, {
      compact: l,
      className: g.blockedSystemMessage,
      iconNode: c,
      children: (0, i.jsxs)("div", {
        className: g.blockedMessageText,
        children: [m.intl.format(a, {
          count: r
        }), " —", " ", (0, i.jsx)(s.P3F, {
          tag: "span",
          onClick: n,
          className: g.blockedAction,
          children: t ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA)
        })]
      })
    })
  })
}
let C = Chunk473749.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: l,
    compact: o = false,
    unreadId: s,
    collapsedReason: u
  } = e, {
    hasJumpTarget: h = false
  } = n, [m, C] = r.useState(h), v = r.useCallback(() => C(e => !e), []);
  r.useEffect(() => {
    h && C(true)
  }, [h]);
  let _ = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, i.jsxs)("div", {
    className: a()({
      [b.groupStart]: true,
      [g.expanded]: m
    }),
    children: [n.hasUnread && (!m || (null == (t = n.content[0]) ? true : t.type) === f.ys_.DIVIDER) ? (0, i.jsx)(p.Z, {
      isUnread: true,
      id: s
    }, "divider") : null, (0, i.jsx)(y, {
      count: _,
      compact: o,
      expanded: m,
      onClick: v,
      collapsedReason: u
    }, "collapsed-message-item"), m ? n.content.map((e, t) => {
      if (e.type === f.ys_.DIVIDER && t > 0) {
        var r, a;
        let e = null != (a = null == (r = n.content[t + 1]) ? true : r.isGroupStart) && a;
        return (0, i.jsx)(p.Z, {
          isUnread: true,
          isBeforeGroup: e,
          id: s
        }, "divider")
      }
      if (e.type === f.ys_.MESSAGE || e.type === f.ys_.THREAD_STARTER_MESSAGE) {
        let t = e.type === f.ys_.THREAD_STARTER_MESSAGE ? d.Ru : d.ZP;
        return (0, i.jsx)(t, {
          id: (0, c.p)(l.id, e.content.id),
          className: g.__invalid_blocked,
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