/** Chunk was on 67000 **/
/** chunk id: 40153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OG: () => x,
  ZP: () => j,
  Zu: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk692992 = require("./692992.js"),
  Chunk749210 = require("./749210.js"),
  Chunk626135 = require("./626135.js"),
  Chunk727258 = require("./727258.js"),
  Chunk662146 = require("./662146.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602230 = require("./602230.js");

function m(e) {
  let t = i.useRef(null),
    n = e.map(e => e[0]);
  return i.useLayoutEffect(() => {
    let n = requestAnimationFrame(() => {
      let n = t.current;
      if (null != n)
        for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r)
    });
    return () => cancelAnimationFrame(n)
  }, n), t
}

function y(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return s()(t.type !== f.eD.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!r || e.type !== f.eD.FOLDER || t.type !== f.eD.FOLDER) && (e.type !== f.eD.FOLDER || null == t.parentId),
    drop(e) {
      let {
        nodeId: i
      } = e;
      r && t.type !== f.eD.FOLDER && d.default.track(p.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r)
    },
    collect: e => ({
      canDrop: e.canDrop(),
      isOver: e.isOver()
    })
  }
}

function O(e) {
  let {
    name: t,
    targetNode: n,
    combine: l,
    below: a
  } = e, o = i.useMemo(() => y([f.eD.GUILD, f.eD.FOLDER], n, a, l), [n, a, l]), [{
    canDrop: s,
    isOver: u
  }, d] = (0, c.L)(o), h = m([
    [s, b.autoPointerEvents],
    [u, b.dragOver]
  ]);
  return (0, r.jsx)("div", {
    ref: e => {
      h.current = e, d(e)
    },
    "data-dnd-name": g.intl.formatToPlainString(g.t["A5aDw+"], {
      itemName: t
    }),
    className: b.target
  })
}

function v(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: l
  } = e, [{
    canDrop: o,
    isOver: s
  }, u] = (0, c.L)(() => y([f.eD.GUILD], n, true, true));
  i.useEffect(() => {
    null == l || l(s)
  }, [l, s]);
  let d = m([
    [o, b.autoPointerEvents],
    [s, b.dragOver]
  ]);
  return (0, r.jsx)(h.Z, {
    text: t,
    shouldShow: s,
    forceOpen: s,
    disableWrapper: true,
    children: (0, r.jsx)("div", {
      ref: e => {
        d.current = e, u(e)
      },
      "data-dnd-name": g.intl.formatToPlainString(g.t.qiQ0QI, {
        itemName: t
      }),
      className: a()(b.centerTarget, {})
    })
  })
}
let j = Chunk473749.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: i = false,
    below: l = false,
    onDragOverChanged: a
  } = e, o = !i && null == n.parentId;
  return (0, r.jsxs)("div", {
    className: b.wrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)(O, {
      name: t,
      targetNode: n,
      below: l
    }), o ? (0, r.jsx)(v, {
      name: t,
      targetNode: n,
      onDragOverChanged: a
    }) : null]
  })
});

function C(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: i,
    isOver: l
  }, a] = (0, c.L)(() => y([f.eD.GUILD], n, true, true)), o = m([
    [l, b.wrapperOver]
  ]), s = m([
    [l, b.dragOver],
    [i, b.autoPointerEvents]
  ]);
  return (0, r.jsx)("div", {
    ref: o,
    className: b.folderEndWrapper,
    "aria-hidden": true,
    children: (0, r.jsx)("div", {
      className: b.folderTarget,
      children: (0, r.jsx)("div", {
        ref: e => {
          s.current = e, a(e)
        },
        "aria-label": "At end of ".concat(t),
        className: b.target
      })
    })
  })
}

function x(e) {
  let {
    children: t
  } = e, [, n] = (0, c.L)({
    accept: []
  });
  return (0, r.jsx)("div", {
    ref: e => {
      n(e)
    },
    children: t
  })
}