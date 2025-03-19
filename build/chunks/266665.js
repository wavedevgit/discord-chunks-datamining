/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(999153),
  o = n(584922),
  c = n(866442),
  A = n(442837),
  d = n(481060),
  u = n(239091),
  g = n(749210),
  f = n(493773),
  m = n(607070),
  p = n(605436),
  h = n(134433),
  C = n(325476),
  b = n(496675),
  v = n(671533),
  x = n(946724),
  N = n(970129),
  j = n(712181),
  E = n(420966),
  I = n(203377),
  O = n(981631),
  y = n(388032),
  w = n(210747);

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function B(e, t) {
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
let D = "DRAGGABLE_ROLE";

function T(e) {
  var t, i;
  let s, {
      guild: A,
      role: g,
      highestRole: f,
      selectedItem: m,
      onClick: C,
      currentPosition: b,
      onDragStart: v,
      onDragReset: x,
      onDragComplete: j,
      roleStyle: E
    } = e,
    I = (0, N.T)(A, f, g),
    y = (0, p.pM)(A.id, g.id),
    T = null == I && !y,
    S = (null === (t = g.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
    [, L] = (0, l.c)({
      type: D,
      item: () => (v(g.id), {
        id: g.id,
        position: b
      }),
      canDrag: () => T,
      end: (e, t) => {
        let n = t.getDropResult();
        if (null == n) {
          x();
          return
        }
        j(n.roleId)
      }
    }),
    [{
      dragSourcePosition: R
    }, Q] = (0, o.L)({
      accept: D,
      canDrop: () => T,
      collect: e => {
        let t = e.getItem();
        return null != t && e.isOver() && e.canDrop() ? {
          dragSourcePosition: t.position
        } : {
          dragSourcePosition: null
        }
      },
      drop: () => ({
        roleId: g.id
      })
    }),
    Z = null !== (i = g.colorString) && void 0 !== i ? i : (0, c.Rf)(O.p6O);
  return s = S ? (0, r.jsx)(h.Z, {
    size: 12,
    color: g.colorString,
    className: w.verifiedRoleIcon
  }) : "dot" === E ? (0, r.jsx)(d.FhE, {
    color: Z,
    background: !1,
    tooltip: !1
  }) : (0, r.jsx)(d.xko, {
    color: Z
  }), (0, r.jsxs)(d.njP.Item, {
    className: a()(w.row, {
      [w.dragBefore]: null !== R && b < R,
      [w.dragAfter]: null !== R && b > R
    }),
    id: g.id,
    selectedItem: m,
    itemType: "side",
    onClick: C,
    onContextMenu: function(e) {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 741247));
        return t => (0, r.jsx)(e, B(P({}, t), {
          role: g,
          guild: A
        }))
      })
    },
    "aria-label": g.name,
    clickableRef: e => {
      var t;
      return L(Q(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null))
    },
    children: [s, null != I ? (0, r.jsx)(N.Z, {
      className: w.lock,
      tooltipText: I
    }) : null, (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: y ? "header-primary" : "interactive-active",
      lineClamp: 1,
      children: g.name
    })]
  })
}

function S(e) {
  let {
    guild: t,
    currentRoleId: n,
    setCurrentRoleId: s,
    setSelectedSection: l
  } = e, o = (0, A.e7)([x.Z], () => x.Z.roles), c = (0, A.e7)([b.Z], () => b.Z.getHighestRole(t)), u = (0, A.e7)([m.Z], () => m.Z.roleStyle), [p, h] = i.useState(o.length), {
    scrolledToTop: N,
    handleScroll: O
  } = (0, E.V)(), {
    handleDragStart: D,
    handleDragReset: S,
    handleDragComplete: L
  } = (0, j.Z)(o), R = i.useRef(null), Q = i.useCallback(e => {
    var t, n;
    let r = o.findIndex(t => t.id === e);
    null === (n = R.current) || void 0 === n || null === (t = n.getScrollerNode()) || void 0 === t || t.scrollTo({
      top: Math.max((r - 2) * 34, 0)
    })
  }, [o]);
  (0, f.ZP)(() => {
    Q(n)
  }), i.useEffect(() => {
    o.length > p && Q(n), o.length !== p && h(o.length)
  }, [o.length, p, h, Q, n]);
  let Z = () => {
    g.Z.createRole(t.id), l(I.ZI.DISPLAY)
  };
  return (0, r.jsx)(C.ZP.Sidebar, {
    className: w.sidebar,
    children: (0, r.jsxs)("div", {
      className: w.container,
      children: [(0, r.jsxs)("div", {
        className: a()(w.titleContainer, {
          [w.titleElevated]: !N
        }),
        children: [(0, r.jsxs)(d.P3F, {
          className: w.title,
          onClick: () => s(null),
          children: [(0, r.jsx)(v.Z, {
            direction: v.Z.Directions.LEFT
          }), (0, r.jsx)(d.Text, {
            className: w.titleText,
            variant: "text-md/semibold",
            color: "none",
            children: y.NW.string(y.t["13/7kZ"])
          })]
        }), (0, r.jsx)(d.ua7, {
          position: "top",
          "aria-label": y.NW.string(y.t.AbxKtr),
          text: (0, r.jsx)(d.Text, {
            className: w.tooltip,
            variant: "text-sm/normal",
            children: y.NW.string(y.t.AbxKtr)
          }),
          children: e => (0, r.jsx)(d.P3F, B(P({
            className: w.addRole
          }, e), {
            onClick: Z,
            children: (0, r.jsx)(d.qJs, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          }))
        })]
      }), (0, r.jsx)(d.Den, {
        className: w.list,
        ref: R,
        onScroll: O,
        children: (0, r.jsx)(d.njP, {
          selectedItem: n,
          onItemSelect: e => s(e),
          orientation: "vertical",
          children: o.map((e, i) => (0, r.jsx)(T, {
            guild: t,
            role: e,
            highestRole: c,
            selectedItem: n,
            onClick: () => s(e.id),
            currentPosition: i,
            onDragStart: D,
            onDragReset: S,
            onDragComplete: L,
            roleStyle: u
          }, e.id))
        })
      })]
    })
  })
}