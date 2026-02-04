/** Chunk was on 71447 **/
/** chunk id: 709747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk383501 = require("./383501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk256415 = require("./256415.js"),
  Chunk810412 = require("./810412.js"),
  Chunk129537 = require("./129537.jsx"),
  Chunk412477 = require("./412477.jsx"),
  Chunk187667 = require("./187667.js"),
  Chunk651813 = require("./651813.js"),
  Chunk320165 = require("./320165.jsx"),
  Chunk121914 = require("./121914.jsx"),
  Chunk197043 = require("./197043.jsx"),
  Chunk919843 = require("./919843.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk141223 = require("./141223.js");

function j(e) {
  let {
    dragStart: t,
    dragging: n
  } = e, [j, C] = (0, l.bG)([A.A], () => A.A.getSessionEntries()), T = (0, l.bG)([A.A], () => A.A.getSelectedChannelId()), w = (0, l.bG)([A.A], () => A.A.getVoiceChatMinimized()), N = (0, l.bG)([s.A], () => {
    var e;
    return null != T && null != (e = s.A.getChannel(T)) ? e : null
  }, [T]);
  r.useEffect(() => {
    null == T || null == N && (0, E.b)(T)
  }, [N, T]);
  let P = (0, l.bG)([u.A], () => (0, y.P)(N, u.A), [N]),
    D = (0, l.bG)([c.A], () => c.A.getChannelId(), []),
    R = r.useMemo(() => null == D || 0 === C ? j : j.filter(e => e.channelId !== D), [j, C, D]),
    L = (0, f.Dk)(() => {
      let e = new Set;
      for (let t of (null != D && e.add(D), R)) e.add(t.channelId);
      return e
    }, [R, D, C]),
    {
      shownUserIds: k,
      contentInventoryIds: M
    } = (0, l.bG)([], () => (function(e) {
      let t = new Set,
        n = new Set;
      for (let o of e) {
        var i, r, l, a;
        let e = null != (i = s.A.getChannel(o)) ? i : null;
        if (null != e) {
          if (e.isDM()) {
            let n = null != (r = null == (l = e.getRecipientId) ? true : l.call(e)) ? r : null;
            null != n && t.add(n);
            continue
          }
          if (e.isMultiUserDM()) {
            for (let n of null != (a = e.recipients) ? a : []) t.add(n);
            continue
          }
          n.add(o)
        }
      }
      return {
        shownUserIds: t,
        contentInventoryIds: n
      }
    })(L), [L]),
    z = (0, f.Dk)(() => k, [k]),
    V = (0, f.Dk)(() => M, [M]);
  r.useEffect(() => {
    (0 !== z.size || 0 !== V.size) && (0, f.Y)(_.uss.TEXT_CHAT_V3, {
      locked: p.default.isInstanceLocked(),
      shownUserIds: Array.from(z),
      liveUserIds: [],
      contentInventoryIds: Array.from(V)
    })
  }, [z, V]);
  let U = (0, l.bG)([h.default], () => (0, y.j)(N, h.default)),
    G = (0, l.bG)([h.default, d.A], () => null == N ? x.intl.string(S.default.uhJexs) : (0, o.m1)(N, h.default, d.A), [N]),
    H = (0, l.bG)([s.A], () => {
      if (null != D && null != s.A.getChannel(D)) returntrue;
      if (0 === C) returnfalse;
      for (let e of j)
        if (null != s.A.getChannel(e.channelId)) returntrue;
      returnfalse
    }, [j, D, C]),
    Y = null != T && !(w && T === D);
  return H ? (0, i.jsxs)("div", {
    className: I.kL,
    children: [(0, i.jsx)("nav", {
      className: I.pz,
      "aria-label": x.intl.string(S.default["2yFtJ1"]),
      onMouseDown: e => {
        0 === e.button && t(g.P.MOVE, e.clientX, e.clientY)
      },
      children: (0, i.jsxs)(a.d_W, {
        children: [null != D ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(v.g, {
            channelId: D,
            selectedVoiceChannelId: D,
            iconVariant: v._.CHANNEL_TYPE
          }, "tiv-".concat(D)), R.length > 0 ? (0, i.jsx)("hr", {
            className: I.mF
          }) : null]
        }) : null, R.map(e => (0, i.jsx)(v.g, {
          channelId: e.channelId,
          selectedVoiceChannelId: D
        }, e.channelId))]
      })
    }), Y ? (0, i.jsxs)("div", {
      className: I.oM,
      children: [(0, i.jsx)(O.A, {
        channel: N,
        user: U,
        guild: P,
        title: G,
        dragStart: t,
        dragging: n
      }), (0, i.jsx)(b.A, {
        selectedChannelId: T
      })]
    }) : null]
  }) : (0, i.jsx)(m.g, {
    emptyText: x.intl.string(S.default["xpv/t5"]),
    icon: a.oyn
  })
}
let C = Chunk64700.memo(function(e) {
  let {
    locked: t,
    dragStart: n,
    dragging: r
  } = e;
  return t ? null : (0, i.jsx)(j, {
    dragStart: n,
    dragging: r
  })
})