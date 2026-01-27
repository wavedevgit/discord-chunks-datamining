/** Chunk was on 41727 **/
/** chunk id: 66149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./801541.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    collapsedReason: s
  } = e, c = (0, a.YW)({
    collapsedReason: s
  }).with({
    collapsedReason: g.t["VFWjc+"]
  }, () => (0, r.jsx)(o.G3N, {
    size: "md",
    color: "currentColor",
    className: m.Q6
  })).with({
    collapsedReason: g.t["+FcYM/"]
  }, () => (0, r.jsx)(o.KTN, {
    size: "md",
    color: "currentColor",
    className: m.Q6
  })).otherwise(() => (0, r.jsx)(o.PGe, {
    size: "md",
    color: "currentColor",
    className: m.Q6
  }));
  return (0, r.jsx)(u.A, {
    compact: i,
    role: "group",
    childrenMessageContent: (0, r.jsx)(h.A, {
      compact: i,
      className: m.L9,
      iconNode: c,
      children: (0, r.jsxs)("div", {
        className: m.Fo,
        children: [g.intl.format(s, {
          count: l
        }), " —", " ", (0, r.jsx)(o.DUT, {
          tag: "span",
          onClick: n,
          className: m.rB,
          children: t ? g.intl.string(g.t.fgq1gs) : g.intl.string(g.t.XJuakA)
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
    compact: a = false,
    unreadId: o,
    collapsedReason: u
  } = e, {
    hasJumpTarget: h = false
  } = n, [g, y] = l.useState(h), _ = l.useCallback(() => y(e => !e), []);
  l.useEffect(() => {
    h && y(true)
  }, [h]);
  let O = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, r.jsxs)("div", {
    className: s()({
      [b._A]: true,
      [m.sz]: g
    }),
    children: [n.hasUnread && (!g || (null == (t = n.content[0]) ? true : t.type) === f.TZK.DIVIDER) ? (0, r.jsx)(p.A, {
      isUnread: true,
      id: o
    }, "divider") : null, (0, r.jsx)(A, {
      count: O,
      compact: a,
      expanded: g,
      onClick: _,
      collapsedReason: u
    }, "collapsed-message-item"), g ? n.content.map((e, t) => {
      if (e.type === f.TZK.DIVIDER && t > 0) {
        var l, s;
        let e = null != (l = null == (s = n.content[t + 1]) ? true : s.isGroupStart) && l;
        return (0, r.jsx)(p.A, {
          isUnread: true,
          isBeforeGroup: e,
          id: o
        }, "divider")
      }
      if (e.type === f.TZK.MESSAGE || e.type === f.TZK.THREAD_STARTER_MESSAGE) {
        let t = e.type === f.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
        return (0, r.jsx)(t, {
          id: (0, c.j)(i.id, e.content.id),
          className: m.__invalid_blocked,
          compact: a,
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