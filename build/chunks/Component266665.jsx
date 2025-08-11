/** Chunk was on 22988 **/
/** chunk id: 266665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk562075 = require("./562075.js"),
  Chunk539202 = require("./539202.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk325476 = require("./325476.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk946724 = require("./946724.js"),
  Chunk970129 = require("./970129.jsx"),
  Chunk712181 = require("./712181.js"),
  Chunk420966 = require("./420966.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk563836 = require("./563836.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = "DRAGGABLE_ROLE";

function R(e) {
  var t, i;
  let l, {
      guild: c,
      role: m,
      highestRole: g,
      selectedItem: p,
      onClick: f,
      currentPosition: j,
      onDragStart: v,
      onDragReset: _,
      onDragComplete: y,
      roleStyle: C
    } = e,
    N = (0, O.T)(c, g, m),
    E = (0, x.fI)(m),
    R = null == N && !E,
    Z = (null == (t = m.tags) ? true : t.guild_connections) !== true,
    D = (0, b._f)(c.id, m, m.colorStrings),
    [, A] = (0, s.c)({
      type: w,
      item: () => (v(m.id), {
        id: m.id,
        position: j
      }),
      canDrag: () => R,
      end: (e, t) => {
        let n = t.getDropResult();
        if (null == n) return void _();
        y(n.roleId)
      }
    }),
    [{
      dragSourcePosition: k
    }, L] = (0, o.L)({
      accept: w,
      canDrop: () => R,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: m.id
      })
    }),
    M = null != (i = m.colorString) ? i : I.Pbq;
  return l = Z ? (0, r.jsx)(h.Z, {
    size: 12,
    color: m.colorString,
    className: S.verifiedRoleIcon
  }) : "dot" === C ? (0, r.jsx)(d.FhE, {
    color: M,
    colors: D,
    background: false,
    tooltip: false
  }) : (0, r.jsx)(d.xko, {
    color: M,
    colors: D
  }), (0, r.jsxs)(d.njP.Item, {
    className: a()(S.row, {
      [S.dragBefore]: null !== k && j < k,
      [S.dragAfter]: null !== k && j > k
    }),
    id: m.id,
    selectedItem: p,
    itemType: "side",
    onClick: f,
    onContextMenu: function(e) {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 741247));
        return t => (0, r.jsx)(e, P(T({}, t), {
          role: m,
          guild: c
        }))
      })
    },
    "aria-label": m.name,
    clickableRef: e => {
      var t;
      A(L(null != (t = null == e ? true : e.ref) ? t : null))
    },
    children: [l, null != N ? (0, r.jsx)(O.Z, {
      className: S.lock,
      tooltipText: N
    }) : null, (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: E ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: m.name
    })]
  })
}

function Z(e) {
  let {
    guild: t,
    currentRoleId: n,
    setCurrentRoleId: l,
    setSelectedSection: s
  } = e, o = (0, c.e7)([_.Z], () => _.Z.roles), u = (0, c.e7)([j.Z], () => j.Z.getHighestRole(t)), h = (0, c.e7)([p.Z], () => p.Z.roleStyle), [b, x] = i.useState(o.length), {
    scrolledToTop: O,
    handleScroll: I
  } = (0, C.V)(), {
    handleDragStart: w,
    handleDragReset: Z,
    handleDragComplete: D
  } = (0, y.Z)(o), A = i.useRef(null), k = i.useCallback(e => {
    var t, n;
    let r = o.findIndex(t => t.id === e);
    null == (n = A.current) || null == (t = n.getScrollerNode()) || t.scrollTo({
      top: Math.max((r - 2) * 34, 0)
    })
  }, [o]);
  (0, g.ZP)(() => {
    k(n)
  }), i.useEffect(() => {
    o.length > b && k(n), o.length !== b && x(o.length)
  }, [o.length, b, x, k, n]);
  let L = () => {
    m.Z.createRole(t.id), s(N.ZI.DISPLAY)
  };
  return (0, r.jsx)(f.ZP.Sidebar, {
    className: S.sidebar,
    children: (0, r.jsxs)("div", {
      className: S.container,
      children: [(0, r.jsxs)("div", {
        className: a()(S.titleContainer, {
          [S.titleElevated]: !O
        }),
        children: [(0, r.jsxs)(d.P3F, {
          className: S.title,
          onClick: () => l(null),
          children: [(0, r.jsx)(v.Z, {
            direction: v.Z.Directions.LEFT
          }), (0, r.jsx)(d.Text, {
            className: S.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: E.intl.string(E.t["13/7kZ"])
          })]
        }), (0, r.jsx)(d.ua7, {
          position: "top",
          "aria-label": E.intl.string(E.t.AbxKtr),
          text: (0, r.jsx)(d.Text, {
            className: S.tooltip,
            variant: "text-sm/normal",
            children: E.intl.string(E.t.AbxKtr)
          }),
          children: e => (0, r.jsx)(d.P3F, P(T({
            className: S.addRole
          }, e), {
            onClick: L,
            children: (0, r.jsx)(d.qJs, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          }))
        })]
      }), (0, r.jsx)(d.Den, {
        className: S.list,
        ref: A,
        onScroll: I,
        children: (0, r.jsx)(d.njP, {
          selectedItem: n,
          onItemSelect: e => l(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, r.jsx)(R, {
            guild: t,
            role: e,
            highestRole: u,
            selectedItem: n,
            onClick: () => l(e.id),
            currentPosition: i,
            onDragStart: w,
            onDragReset: Z,
            onDragComplete: D,
            roleStyle: h
          }, e.id))
        })
      })]
    })
  })
}