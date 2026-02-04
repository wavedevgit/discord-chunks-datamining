/** Chunk was on 17869 **/
/** chunk id: 66149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function b(e) {
  let {
    expanded: t,
    onClick: n,
    count: r,
    compact: i,
    collapsedReason: a,
    canUncollapse: c = true
  } = e, d = (0, s.YW)({
    collapsedReason: a
  }).with({
    collapsedReason: m.t["VFWjc+"]
  }, () => (0, l.jsx)(o.G3N, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  })).with({
    collapsedReason: m.t["+FcYM/"]
  }, () => (0, l.jsx)(o.KTN, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  })).otherwise(() => (0, l.jsx)(o.PGe, {
    size: "md",
    color: "currentColor",
    className: g.Q6
  })), h = c ? d : (0, l.jsx)(o.DUT, {
    tag: "span",
    onClick: n,
    className: g.Y4,
    children: d
  });
  return (0, l.jsx)(u.A, {
    compact: i,
    role: "group",
    childrenMessageContent: (0, l.jsx)(p.A, {
      compact: i,
      className: g.L9,
      iconNode: h,
      children: (0, l.jsxs)("div", {
        className: g.Fo,
        children: [m.intl.format(a, {
          count: r
        }), c && (0, l.jsxs)(l.Fragment, {
          children: [" — ", (0, l.jsx)(o.DUT, {
            tag: "span",
            onClick: n,
            className: g.rB,
            children: t ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA)
          })]
        })]
      })
    })
  })
}
let _ = Chunk64700.memo(function(e) {
  var t;
  let {
    messages: n,
    channel: i,
    compact: s = false,
    unreadId: o,
    collapsedReason: u,
    canUncollapse: p = true
  } = e, {
    hasJumpTarget: m = false
  } = n, [_, y] = r.useState(m && p), [E, v] = r.useState(false), O = r.useCallback(() => {
    p ? y(e => !e) : v(true)
  }, [p]);
  if (r.useEffect(() => {
      m && p && y(true)
    }, [m, p]), E) return null;
  let C = n.hasUnread ? n.content.length - 1 : n.content.length;
  return (0, l.jsxs)("div", {
    className: a()({
      [A._A]: true,
      [g.sz]: _
    }),
    children: [n.hasUnread && (!_ || (null == (t = n.content[0]) ? true : t.type) === f.TZK.DIVIDER) ? (0, l.jsx)(h.A, {
      isUnread: true,
      id: o
    }, "divider") : null, (0, l.jsx)(b, {
      count: C,
      compact: s,
      expanded: _,
      onClick: O,
      collapsedReason: u,
      canUncollapse: p
    }, "collapsed-message-item"), _ ? n.content.map((e, t) => {
      if (e.type === f.TZK.DIVIDER && t > 0) {
        var r, a;
        let e = null != (r = null == (a = n.content[t + 1]) ? true : a.isGroupStart) && r;
        return (0, l.jsx)(h.A, {
          isUnread: true,
          isBeforeGroup: e,
          id: o
        }, "divider")
      }
      if (e.type === f.TZK.MESSAGE || e.type === f.TZK.THREAD_STARTER_MESSAGE) {
        let t = e.type === f.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
        return (0, l.jsx)(t, {
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