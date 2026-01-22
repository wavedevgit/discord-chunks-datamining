/** Chunk was on 97492 **/
/** chunk id: 531053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => j,
  g4: () => x,
  qv: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk744818 = require("./744818.js"),
  Chunk686956 = require("./686956.js"),
  Chunk954571 = require("./954571.js"),
  Chunk263715 = require("./263715.js"),
  Chunk550591 = require("./550591.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk581277 = require("./581277.js");

function m(e) {
  let t = l.useRef(null),
    n = e.map(e => e[0]);
  return l.useLayoutEffect(() => {
    let n = requestAnimationFrame(() => {
      let n = t.current;
      if (null != n)
        for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r)
    });
    return () => cancelAnimationFrame(n)
  }, n), t
}

function A(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return o()(t.type !== f.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!r || e.type !== f.PJ.FOLDER || t.type !== f.PJ.FOLDER) && (e.type !== f.PJ.FOLDER || null == t.parentId),
    drop(e) {
      let {
        nodeId: l
      } = e;
      r && t.type !== f.PJ.FOLDER && d.default.track(h.HAw.GUILD_FOLDER_CREATED), u.A.moveById(l, t.id, n, r)
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
    combine: i,
    below: a
  } = e, s = l.useMemo(() => A([f.PJ.GUILD, f.PJ.FOLDER], n, a, i), [n, a, i]), [{
    canDrop: o,
    isOver: u
  }, d] = (0, c.H)(s), p = m([
    [o, g.OP],
    [u, g.NQ]
  ]);
  return (0, r.jsx)("div", {
    ref: e => {
      p.current = e, d(e)
    },
    "data-dnd-name": b.intl.formatToPlainString(b.t["A5aDw+"], {
      itemName: t
    }),
    className: g.aC
  })
}

function O(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: i
  } = e, [{
    canDrop: s,
    isOver: o
  }, u] = (0, c.H)(() => A([f.PJ.GUILD], n, true, true));
  l.useEffect(() => {
    null == i || i(o)
  }, [i, o]);
  let d = m([
    [s, g.OP],
    [o, g.NQ]
  ]);
  return (0, r.jsx)(p.A, {
    text: t,
    shouldShow: o,
    forceOpen: o,
    disableWrapper: true,
    children: (0, r.jsx)("div", {
      ref: e => {
        d.current = e, u(e)
      },
      "data-dnd-name": b.intl.formatToPlainString(b.t.qiQ0QI, {
        itemName: t
      }),
      className: a()(g.dw, {})
    })
  })
}
let j = Chunk64700.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: l = false,
    below: i = false,
    onDragOverChanged: a
  } = e, s = !l && null == n.parentId;
  return (0, r.jsxs)("div", {
    className: g.iE,
    "aria-hidden": true,
    children: [(0, r.jsx)(y, {
      name: t,
      targetNode: n,
      below: i
    }), s ? (0, r.jsx)(O, {
      name: t,
      targetNode: n,
      onDragOverChanged: a
    }) : null]
  })
});

function v(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: l,
    isOver: i
  }, a] = (0, c.H)(() => A([f.PJ.GUILD], n, true, true)), s = m([
    [i, g.a7]
  ]), o = m([
    [i, g.NQ],
    [l, g.OP]
  ]);
  return (0, r.jsx)("div", {
    ref: s,
    className: g.Ro,
    "aria-hidden": true,
    children: (0, r.jsx)("div", {
      className: g.aO,
      children: (0, r.jsx)("div", {
        ref: e => {
          o.current = e, a(e)
        },
        "aria-label": "At end of ".concat(t),
        className: g.aC
      })
    })
  })
}

function x(e) {
  let {
    children: t
  } = e, [, n] = (0, c.H)({
    accept: []
  });
  return (0, r.jsx)("div", {
    ref: e => {
      n(e)
    },
    children: t
  })
}