/** Chunk was on 10023 **/
/** chunk id: 40153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  OG: () => x,
  ZP: () => v,
  Zu: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk692992 = require("./692992.js"),
  Chunk749210 = require("./749210.js"),
  Chunk626135 = require("./626135.js"),
  Chunk727258 = require("./727258.js"),
  Chunk662146 = require("./662146.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494862 = require("./494862.js");

function b(e) {
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

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return s()(t.type !== p.eD.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!r || e.type !== p.eD.FOLDER || t.type !== p.eD.FOLDER) && (e.type !== p.eD.FOLDER || null == t.parentId),
    drop(e) {
      let {
        nodeId: i
      } = e;
      r && t.type !== p.eD.FOLDER && d.default.track(h.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(i, t.id, n, r)
    },
    collect: e => ({
      canDrop: e.canDrop(),
      isOver: e.isOver()
    })
  }
}

function y(e) {
  let {
    name: t,
    targetNode: n,
    combine: l,
    below: o
  } = e, a = i.useMemo(() => _([p.eD.GUILD, p.eD.FOLDER], n, o, l), [n, o, l]), [{
    canDrop: s,
    isOver: u
  }, d] = (0, c.L)(a), f = b([
    [s, m.autoPointerEvents],
    [u, m.dragOver]
  ]);
  return (0, r.jsx)("div", {
    ref: e => {
      f.current = e, d(e)
    },
    "data-dnd-name": g.intl.formatToPlainString(g.t["A5aDw+"], {
      itemName: t
    }),
    className: m.target
  })
}

function O(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: l
  } = e, [{
    canDrop: a,
    isOver: s
  }, u] = (0, c.L)(() => _([p.eD.GUILD], n, true, true));
  i.useEffect(() => {
    null == l || l(s)
  }, [l, s]);
  let d = b([
    [a, m.autoPointerEvents],
    [s, m.dragOver]
  ]);
  return (0, r.jsx)(f.Z, {
    text: t,
    shouldShow: s,
    forceOpen: s,
    disableWrapper: true,
    tooltipClass: m.centerTargetTooltip,
    children: (0, r.jsx)("div", {
      ref: e => {
        d.current = e, u(e)
      },
      "data-dnd-name": g.intl.formatToPlainString(g.t.qiQ0QI, {
        itemName: t
      }),
      className: o()(m.centerTarget, {})
    })
  })
}
let v = Chunk473749.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: i = false,
    below: l = false,
    onDragOverChanged: o
  } = e, a = !i && null == n.parentId;
  return (0, r.jsxs)("div", {
    className: m.wrapper,
    "aria-hidden": true,
    children: [(0, r.jsx)(y, {
      name: t,
      targetNode: n,
      below: l
    }), a ? (0, r.jsx)(O, {
      name: t,
      targetNode: n,
      onDragOverChanged: o
    }) : null]
  })
});

function j(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: i,
    isOver: l
  }, o] = (0, c.L)(() => _([p.eD.GUILD], n, true, true)), a = b([
    [l, m.wrapperOver]
  ]), s = b([
    [l, m.dragOver],
    [i, m.autoPointerEvents]
  ]);
  return (0, r.jsx)("div", {
    ref: a,
    className: m.folderEndWrapper,
    "aria-hidden": true,
    children: (0, r.jsx)("div", {
      className: m.folderTarget,
      children: (0, r.jsx)("div", {
        ref: e => {
          s.current = e, o(e)
        },
        "aria-label": "At end of ".concat(t),
        className: m.target
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