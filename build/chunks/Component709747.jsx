/** Chunk was on 71447 **/
/** chunk id: 709747, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
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
  } = e, [j, T] = (0, l.bG)([y.A], () => y.A.getSessionEntries()), C = (0, l.bG)([y.A], () => y.A.getSelectedChannelId()), N = (0, l.bG)([o.A], () => {
    var e;
    return null != C && null != (e = o.A.getChannel(C)) ? e : null
  }, [C]);
  r.useEffect(() => {
    null == C || null == N && (0, O.b)(C)
  }, [N, C]);
  let w = (0, l.bG)([u.A], () => (0, A.P)(N, u.A), [N]),
    P = (0, l.bG)([c.A], () => c.A.getChannelId(), []),
    D = r.useMemo(() => null == P || 0 === T ? j : j.filter(e => e.channelId !== P), [j, T, P]),
    R = (0, f.Dk)(() => {
      let e = new Set;
      for (let t of (null != P && e.add(P), D)) e.add(t.channelId);
      return e
    }, [D, P, T]),
    {
      shownUserIds: k,
      contentInventoryIds: M
    } = (0, l.bG)([], () => (function(e) {
      let t = new Set,
        n = new Set;
      for (let s of e) {
        var i, r, l, a;
        let e = null != (i = o.A.getChannel(s)) ? i : null;
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
          n.add(s)
        }
      }
      return {
        shownUserIds: t,
        contentInventoryIds: n
      }
    })(R), [R]),
    L = (0, f.Dk)(() => k, [k]),
    U = (0, f.Dk)(() => M, [M]);
  r.useEffect(() => {
    (0 !== L.size || 0 !== U.size) && (0, f.Y)(x.uss.TEXT_CHAT_V3, {
      locked: p.default.isInstanceLocked(),
      shownUserIds: Array.from(L),
      liveUserIds: [],
      contentInventoryIds: Array.from(U)
    })
  }, [L, U]);
  let G = (0, l.bG)([h.default], () => (0, A.j)(N, h.default)),
    V = (0, l.bG)([h.default, d.A], () => null == N ? S.intl.string(_.default.uhJexs) : (0, s.m1)(N, h.default, d.A), [N]);
  return (0, l.bG)([o.A], () => {
    if (0 === T) returnfalse;
    if (null != P && null != o.A.getChannel(P)) returntrue;
    for (let e of j)
      if (null != o.A.getChannel(e.channelId)) returntrue;
    returnfalse
  }, [j, P, T]) ? (0, i.jsxs)("div", {
    className: I.kL,
    children: [(0, i.jsx)("nav", {
      className: I.pz,
      "aria-label": S.intl.string(_.default["2yFtJ1"]),
      onMouseDown: e => {
        0 === e.button && t(g.P.MOVE, e.clientX, e.clientY)
      },
      children: (0, i.jsxs)(a.d_W, {
        children: [null != P ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(b.g, {
            channelId: P,
            selectedVoiceChannelId: P,
            iconVariant: b._.CHANNEL_TYPE
          }, "tiv-".concat(P)), (0, i.jsx)("hr", {
            className: I.mF
          })]
        }) : null, D.map(e => (0, i.jsx)(b.g, {
          channelId: e.channelId,
          selectedVoiceChannelId: P
        }, e.channelId))]
      })
    }), (0, i.jsxs)("div", {
      className: I.oM,
      children: [(0, i.jsx)(v.A, {
        channel: N,
        user: G,
        guild: w,
        title: V,
        dragStart: t,
        dragging: n
      }), (0, i.jsx)(E.A, {
        selectedChannelId: C
      })]
    })]
  }) : (0, i.jsx)(m.g, {
    emptyText: S.intl.string(_.default["xpv/t5"]),
    icon: a.oyn
  })
}
let T = Chunk64700.memo(function(e) {
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