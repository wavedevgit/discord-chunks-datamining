/** Chunk was on 97492 **/
/** chunk id: 66149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./801541.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk397927 = require("./397927.js"),
  Chunk375901 = require("./375901.js"),
  Chunk491182 = require("./491182.jsx"),
  Chunk371741 = require("./371741.jsx"),
  Chunk922529 = require("./922529.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410132 = require("./410132.js"),
  Chunk119907 = require("./119907.js");

function A(e) {
  let {
    expanded: t,
    onClick: n,
    count: l,
    compact: i,
    collapsedReason: a
  } = e, c = (0, s.YW)({
    collapsedReason: a
  }).with({
    collapsedReason: b.t["VFWjc+"]
  }, () => (0, r.jsx)(o.G3N, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  })).with({
    collapsedReason: b.t["+FcYM/"]
  }, () => (0, r.jsx)(o.KTN, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  })).otherwise(() => (0, r.jsx)(o.PGe, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  }));
  return (0, r.jsx)(u.A, {
    compact: i,
    role: "group",
    childrenMessageContent: (0, r.jsx)(p.A, {
      compact: i,
      className: g.L9,
      iconNode: c,
      children: (0, r.jsxs)("div", {
        className: g.Fo,
        children: [b.intl.format(a, {
          count: l
        }), " —", " ", (0, r.jsx)(o.DUT, {
          tag: "span",
          onClick: n,
          className: g.rB,
          children: t ? b.intl.string(b.t.fgq1gs) : b.intl.string(b.t.XJuakA)
        })]
      })
    })
  })
}
let y = Chunk64700.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: i,
    compact: s = false,
    unreadId: o,
    collapsedReason: u
  } = e, {
    hasJumpTarget: p = false
  } = n, [b, y] = l.useState(p), O = l.useCallback(() => y(e => !e), []);
  l.useEffect(() => {
    p && y(true)
  }, [p]);
  let j = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, r.jsxs)("div", {
    className: a()({
      [m._A]: true,
      [g.sz]: b
    }),
    children: [n.hasUnread && (!b || (null == (t = n.content[0]) ? true : t.type) === h.TZK.DIVIDER) ? (0, r.jsx)(f.A, {
      isUnread: true,
      id: o
    }, "divider") : null, (0, r.jsx)(A, {
      count: j,
      compact: s,
      expanded: b,
      onClick: O,
      collapsedReason: u
    }, "collapsed-message-item"), b ? n.content.map((e, t) => {
      if (e.type === h.TZK.DIVIDER && t > 0) {
        var l, a;
        let e = null != (l = null == (a = n.content[t + 1]) ? true : a.isGroupStart) && l;
        return (0, r.jsx)(f.A, {
          isUnread: true,
          isBeforeGroup: e,
          id: o
        }, "divider")
      }
      if (e.type === h.TZK.MESSAGE || e.type === h.TZK.THREAD_STARTER_MESSAGE) {
        let t = e.type === h.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
        return (0, r.jsx)(t, {
          id: (0, c.j)(i.id, e.content.id),
          className: g.__invalid_blocked,
          compact: s,
          channel: i,
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