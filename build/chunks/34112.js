/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => R
}), n(566702), n(595690), n(47120);
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
  g = n(493544),
  f = n(134433),
  m = n(91218),
  p = n(646892),
  h = n(741247),
  C = n(518738),
  b = n(549631),
  v = n(496675),
  x = n(626135),
  N = n(480608),
  j = n(243730),
  E = n(130341),
  I = n(970129),
  O = n(712181),
  y = n(203377),
  w = n(981631),
  P = n(388032),
  B = n(837567),
  D = n(785441);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
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
let L = "DRAGGABLE_ROLE";

function R(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: s,
    otherRoles: a,
    setSelectedSection: l,
    renderHeader: o,
    headerHeight: c,
    query: d
  } = e, u = (0, A.e7)([j.Z], () => j.Z.getRoleMemberCount(n.id), [n.id]), f = (0, A.e7)([v.Z], () => v.Z.getHighestRole(n), [n]), m = d.trim();
  i.useEffect(() => {
    (0, N.E)(n.id)
  }, [n.id]);
  let p = i.useRef(!1);
  i.useEffect(() => {
    !p.current && "" !== d.trimStart() && (x.default.track(w.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), p.current = !0)
  }, [d]);
  let h = i.useMemo(() => a.filter(e => (0, E.uo)(e, m)), [a, m]),
    C = i.useMemo(() => [...a, s], [a, s]),
    {
      draggingId: b,
      handleDragStart: I,
      handleDragReset: y,
      handleDragComplete: P
    } = (0, O.Z)(C),
    B = i.useCallback(e => {
      var i;
      let {
        row: s
      } = e;
      if (0 === h.length) return (0, r.jsx)(Q, {}, "empty-role");
      let o = h[s];
      return (0, r.jsx)(Z, {
        role: o,
        guild: n,
        highestRole: f,
        currentPosition: s,
        memberCount: null !== (i = null == u ? void 0 : u[o.id]) && void 0 !== i ? i : 0,
        onDragStart: I,
        onDragReset: y,
        onDragComplete: P,
        disableHover: null != b,
        disableDrag: a.length !== h.length,
        setEditRoleId: t,
        setSelectedSection: l
      }, o.id)
    }, [h, n, f, u, I, y, P, b, a, t, l]);
  return (0, r.jsx)(g.Xi, {
    sections: [Math.max(h.length, 1)],
    sectionHeight: c,
    renderSection: o,
    rowHeight: 61,
    renderRow: B
  })
}

function Q() {
  return (0, r.jsxs)("div", {
    className: B.emptyRoles,
    children: [(0, r.jsx)("div", {
      className: D.dragSpacing
    }), (0, r.jsx)(d.BFJ, {
      size: "md",
      color: "currentColor"
    }), (0, r.jsx)(d.Text, {
      className: B.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: P.NW.string(P.t["vR7M+/"])
    })]
  })
}

function Z(e) {
  var t, s, c;
  let {
    role: A,
    guild: g,
    highestRole: m,
    currentPosition: C,
    memberCount: v,
    onDragStart: x,
    onDragReset: N,
    onDragComplete: j,
    disableHover: E,
    disableDrag: O,
    setEditRoleId: w,
    setSelectedSection: R
  } = e, Q = (0, I.T)(g, m, A), Z = null != Q, [k, M] = i.useState(!1), _ = i.useMemo(() => ({
    type: L,
    item: () => (x(A.id), {
      id: A.id,
      position: C
    }),
    canDrag: () => k && !Z,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) {
        N();
        return
      }
      j(n.roleId)
    }
  }), [A, x, N, j, Z, k, C]), [{
    isDragging: G
  }, F] = (0, l.c)(_), U = i.useMemo(() => ({
    accept: L,
    canDrop: () => !Z,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: A.id
    })
  }), [Z, A]), [{
    dragSourcePosition: H
  }, z] = (0, o.L)(U), X = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 741247));
      return t => (0, r.jsx)(e, S(T({}, t), {
        role: A,
        guild: g
      }))
    })
  }, [g, A]), Y = (0, h.e)(g, A);
  if (G) return (0, r.jsx)("div", {
    ref: F,
    className: a()(B.roleRow, B.roleRowDragging)
  });

  function K() {
    w(A.id)
  }

  function V() {
    K(), R(y.ZI.MEMBERS)
  }
  return (0, r.jsxs)(d.P3F, {
    className: a()(B.roleRow, {
      [B.roleRowDisableHover]: E,
      [B.containerDragBefore]: null != H && C < H,
      [B.containerDragAfter]: null != H && C > H
    }),
    onClick: K,
    onContextMenu: X,
    innerRef: e => F(z(e)),
    "data-dnd-name": A.name,
    "aria-label": P.NW.formatToPlainString(P.t.Vu0AcX, {
      name: A.name,
      count: "".concat(v)
    }),
    children: [(0, r.jsx)("div", {
      className: a()(B.dragIcon, D.dragSpacing, {
        [B.dragIconHidden]: Z || O
      }),
      onMouseEnter: () => M(!0),
      onMouseLeave: () => M(!1),
      children: (0, r.jsx)(d.Vni, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: a()(B.roleNameContainer, D.roleNameSpacing),
      children: [(null === (t = A.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, r.jsx)(f.Z, {
        className: B.roleFlowerStar,
        color: A.colorString,
        size: 24
      }) : (0, r.jsx)(W, {
        guildId: g.id,
        role: A,
        size: 24,
        className: B.roleIcon,
        defaultIconClassName: B.shield
      }), null != Q ? (0, r.jsx)(I.Z, {
        className: B.lock,
        tooltipText: Q
      }) : null, (0, r.jsx)(d.Text, {
        className: B.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: A.name
      }), (null === (s = A.tags) || void 0 === s ? void 0 : s.subscription_listing_id) != null && (0, r.jsx)(b.Z, {
        className: B.subscriptionRoleIcon,
        "aria-label": P.NW.string(P.t.a2Ak8f)
      }), (null === (c = A.tags) || void 0 === c ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(p.Z, {})]
    }), (0, r.jsx)(d.ua7, {
      text: P.NW.string(P.t.CW75t7),
      "aria-label": P.NW.formatToPlainString(P.t.Fgs8fH, {
        count: "".concat(v)
      }),
      position: "right",
      children: e => (0, r.jsxs)(d.P3F, S(T({}, e), {
        className: a()(B.memberCountContainer, D.memberSpacing),
        onClick: V,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "none",
          children: v
        }), (0, r.jsx)(d.tBG, {
          size: "custom",
          color: "currentColor",
          className: B.person,
          width: 20,
          height: 20
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: a()(B.buttonsContainer, D.buttonsSpacing),
      children: [(0, r.jsx)(d.M0o, {
        className: a()(B.circleButton, B.editButton),
        tooltip: Z ? P.NW.string(P.t["HO/oXl"]) : P.NW.string(P.t.bt75u7),
        color: d.YX$.SECONDARY,
        size: d.tT7.SIZE_36,
        icon: Z ? (0, r.jsx)(d.tEF, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }) : (0, r.jsx)(d.vdY, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }),
        onClick: K
      }), (0, r.jsx)(d.M0o, {
        className: B.circleButton,
        tooltip: P.NW.string(P.t.UKOtz8),
        color: d.YX$.SECONDARY,
        size: d.tT7.SIZE_36,
        icon: (0, r.jsx)(d.xhG, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        }),
        onClick: X,
        disabled: !Y
      })]
    })]
  })
}

function W(e) {
  var t;
  let {
    guildId: n,
    role: i,
    size: s,
    enableTooltip: l,
    className: o,
    defaultIconClassName: A
  } = e, u = (0, C.p9)({
    guildId: n,
    roleId: i.id,
    size: s
  });
  return null != u ? (0, r.jsx)(m.Z, S(T({}, u), {
    className: o,
    enableTooltip: l
  })) : (0, r.jsx)(d.lZ8, {
    size: "custom",
    className: a()(o, A),
    color: null !== (t = i.colorString) && void 0 !== t ? t : (0, c.Rf)(w.p6O),
    width: s,
    height: s
  })
}