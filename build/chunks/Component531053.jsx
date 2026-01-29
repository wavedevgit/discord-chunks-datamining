/** Chunk was on 1113 **/
/** chunk id: 531053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => _,
  g4: () => j,
  qv: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk522437 = require("./522437.js"),
  Chunk686956 = require("./686956.js"),
  Chunk954571 = require("./954571.js"),
  Chunk263715 = require("./263715.js"),
  Chunk550591 = require("./550591.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk581277 = require("./581277.js");

function b(e) {
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
  return o()(t.type !== h.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
    accept: e,
    canDrop: e => e.nodeId !== t.id && (!r || e.type !== h.PJ.FOLDER || t.type !== h.PJ.FOLDER) && (e.type !== h.PJ.FOLDER || null == t.parentId),
    drop(e) {
      let {
        nodeId: l
      } = e;
      r && t.type !== h.PJ.FOLDER && d.default.track(g.HAw.GUILD_FOLDER_CREATED), u.A.moveById(l, t.id, n, r)
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
    below: s
  } = e, a = l.useMemo(() => A([h.PJ.GUILD, h.PJ.FOLDER], n, s, i), [n, s, i]), [{
    canDrop: o,
    isOver: u
  }, d] = (0, c.H)(a), p = b([
    [o, m.OP],
    [u, m.NQ]
  ]);
  return (0, r.jsx)("div", {
    ref: e => {
      p.current = e, d(e)
    },
    "data-dnd-name": f.intl.formatToPlainString(f.t["A5aDw+"], {
      itemName: t
    }),
    className: m.aC
  })
}

function O(e) {
  let {
    name: t,
    targetNode: n,
    onDragOverChanged: i
  } = e, [{
    canDrop: a,
    isOver: o
  }, u] = (0, c.H)(() => A([h.PJ.GUILD], n, true, true));
  l.useEffect(() => {
    null == i || i(o)
  }, [i, o]);
  let d = b([
    [a, m.OP],
    [o, m.NQ]
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
      "data-dnd-name": f.intl.formatToPlainString(f.t.qiQ0QI, {
        itemName: t
      }),
      className: s()(m.dw, {})
    })
  })
}
let _ = Chunk64700.memo(function(e) {
  let {
    name: t,
    targetNode: n,
    noCombine: l = false,
    below: i = false,
    onDragOverChanged: s
  } = e, a = !l && null == n.parentId;
  return (0, r.jsxs)("div", {
    className: m.iE,
    "aria-hidden": true,
    children: [(0, r.jsx)(y, {
      name: t,
      targetNode: n,
      below: i
    }), a ? (0, r.jsx)(O, {
      name: t,
      targetNode: n,
      onDragOverChanged: s
    }) : null]
  })
});

function x(e) {
  let {
    name: t,
    targetNode: n
  } = e, [{
    canDrop: l,
    isOver: i
  }, s] = (0, c.H)(() => A([h.PJ.GUILD], n, true, true)), a = b([
    [i, m.a7]
  ]), o = b([
    [i, m.NQ],
    [l, m.OP]
  ]);
  return (0, r.jsx)("div", {
    ref: a,
    className: m.Ro,
    "aria-hidden": true,
    children: (0, r.jsx)("div", {
      className: m.aO,
      children: (0, r.jsx)("div", {
        ref: e => {
          o.current = e, s(e)
        },
        "aria-label": "At end of ".concat(t),
        className: m.aC
      })
    })
  })
}

function j(e) {
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