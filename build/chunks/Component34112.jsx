/** Chunk was on 6049 **/
/** chunk id: 34112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./781311.js"), require("./539338.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk574981 = require("./574981.js"),
  Chunk194630 = require("./194630.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk134433 = require("./134433.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk646892 = require("./646892.jsx"),
  Chunk741247 = require("./741247.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk402235 = require("./402235.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk480608 = require("./480608.js"),
  Chunk243730 = require("./243730.js"),
  Chunk130341 = require("./130341.js"),
  Chunk970129 = require("./970129.jsx"),
  Chunk712181 = require("./712181.js"),
  Chunk203377 = require("./203377.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk810688 = require("./810688.js"),
  Chunk297827 = require("./297827.js");

function Z(e) {
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

function D(e, t) {
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
let A = "DRAGGABLE_ROLE";

function k(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: l,
    otherRoles: a,
    setSelectedSection: s,
    renderHeader: o,
    headerHeight: d,
    query: u
  } = e, m = (0, c.e7)([C.Z], () => C.Z.getRoleMemberCount(n.id), [n.id]), p = (0, c.e7)([_.Z], () => _.Z.getHighestRole(n), [n]), h = u.trim();
  i.useEffect(() => {
    (0, y.E)(n.id)
  }, [n.id]);
  let f = i.useRef(false);
  i.useEffect(() => {
    f.current || "" === u.trimStart() || (O.default.track(T.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), f.current = true)
  }, [u]);
  let b = i.useMemo(() => a.filter(e => (0, N.uo)(e, h)), [a, h]),
    x = i.useMemo(() => [...a, l], [a, l]),
    {
      draggingId: j,
      handleDragStart: v,
      handleDragReset: I,
      handleDragComplete: S
    } = (0, E.Z)(x),
    P = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === b.length) return (0, r.jsx)(L, {}, "empty-role");
      let o = b[l];
      return (0, r.jsx)(M, {
        role: o,
        guild: n,
        highestRole: p,
        currentPosition: l,
        memberCount: null != (i = null == m ? true : m[o.id]) ? i : 0,
        onDragStart: v,
        onDragReset: I,
        onDragComplete: S,
        disableHover: null != j,
        disableDrag: a.length !== b.length,
        setEditRoleId: t,
        setSelectedSection: s
      }, o.id)
    }, [b, n, p, m, v, I, S, j, a, t, s]);
  return (0, r.jsx)(g.Xi, {
    sections: [Math.max(b.length, 1)],
    sectionHeight: d,
    renderSection: o,
    rowHeight: 61,
    renderRow: P
  })
}

function L() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk810688.emptyRoles,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk297827.dragSpacing
    }), (0, Chunk951288.jsx)(Chunk481060.BFJ, {
      size: "md",
      color: "currentColor"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk810688.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["vR7M+/"])
    })]
  })
}

function M(e) {
  var t, l, c;
  let {
    role: d,
    guild: g,
    highestRole: h,
    currentPosition: x,
    memberCount: v,
    onDragStart: _,
    onDragReset: O,
    onDragComplete: y,
    disableHover: C,
    disableDrag: N,
    setEditRoleId: E,
    setSelectedSection: T
  } = e, k = (0, I.T)(g, h, d), L = null != k, [M, U] = i.useState(false), B = i.useMemo(() => ({
    type: A,
    item: () => (_(d.id), {
      id: d.id,
      position: x
    }),
    canDrag: () => M && !L,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) return void O();
      y(n.roleId)
    }
  }), [d, _, O, y, L, M, x]), [{
    isDragging: F
  }, H] = (0, s.c)(B), z = i.useMemo(() => ({
    accept: A,
    canDrop: () => !L,
    collect: e => {
      let t = e.getItem();
      return null != t && e.isOver() && e.canDrop() ? {
        dragSourcePosition: t.position
      } : {
        dragSourcePosition: null
      }
    },
    drop: () => ({
      roleId: d.id
    })
  }), [L, d]), [{
    dragSourcePosition: W
  }, V] = (0, o.L)(z), Y = i.useCallback(e => {
    (0, m.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 741247));
      return t => (0, r.jsx)(e, D(Z({}, t), {
        role: d,
        guild: g
      }))
    })
  }, [g, d]), K = (0, b.e)(g, d);
  if (F) return (0, r.jsx)("div", {
    ref: e => {
      H(e)
    },
    className: a()(w.roleRow, w.roleRowDragging)
  });

  function q() {
    E(d.id)
  }

  function X() {
    q(), T(S.ZI.MEMBERS)
  }
  return (0, r.jsxs)(u.P3F, {
    className: a()(w.roleRow, {
      [w.roleRowDisableHover]: C,
      [w.containerDragBefore]: null != W && x < W,
      [w.containerDragAfter]: null != W && x > W
    }),
    onClick: q,
    onContextMenu: Y,
    innerRef: e => {
      H(V(e))
    },
    "data-dnd-name": d.name,
    "aria-label": P.intl.formatToPlainString(P.t.Vu0AcX, {
      name: d.name,
      count: "".concat(v)
    }),
    children: [(0, r.jsx)("div", {
      className: a()(w.dragIcon, R.dragSpacing, {
        [w.dragIconHidden]: L || N
      }),
      onMouseEnter: () => U(true),
      onMouseLeave: () => U(false),
      children: (0, r.jsx)(u.Vni, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: a()(w.roleNameContainer, R.roleNameSpacing),
      children: [(null == (t = d.tags) ? true : t.guild_connections) === null ? (0, r.jsx)(p.Z, {
        className: w.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, r.jsx)(G, {
        guildId: g.id,
        role: d,
        size: 24,
        className: w.roleIcon,
        defaultIconClassName: w.shield
      }), null != k ? (0, r.jsx)(I.Z, {
        className: w.lock,
        tooltipText: k
      }) : null, (0, r.jsx)(u.Text, {
        className: w.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null == (l = d.tags) ? true : l.subscription_listing_id) != null && (0, r.jsx)(j.Z, {
        className: w.subscriptionRoleIcon,
        "aria-label": P.intl.string(P.t.a2Ak8f)
      }), (null == (c = d.tags) ? true : c.is_guild_product_role) === true && (0, r.jsx)(f.Z, {})]
    }), (0, r.jsx)(u.ua7, {
      text: P.intl.string(P.t.CW75t7),
      "aria-label": P.intl.formatToPlainString(P.t.Fgs8fH, {
        count: "".concat(v)
      }),
      position: "right",
      children: e => (0, r.jsxs)(u.P3F, D(Z({}, e), {
        className: a()(w.memberCountContainer, R.memberSpacing),
        onClick: X,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "none",
          children: v
        }), (0, r.jsx)(u.tBG, {
          size: "custom",
          color: "currentColor",
          className: w.person,
          width: 20,
          height: 20
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: a()(w.buttonsContainer, R.buttonsSpacing),
      children: [(0, r.jsx)(u.ua7, {
        text: L ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7),
        children: e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": L ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7),
          icon: L ? u.tEF : u.vdY,
          onClick: q
        }))
      }), (0, r.jsx)(u.ua7, {
        text: P.intl.string(P.t.UKOtz8),
        shouldShow: K,
        children: e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": P.intl.string(P.t.UKOtz8),
          icon: u.xhG,
          onClick: Y,
          disabled: !K
        }))
      })]
    })]
  })
}

function G(e) {
  var t, n, i, l;
  let {
    guildId: s,
    role: o,
    size: c,
    enableTooltip: m,
    className: g,
    defaultIconClassName: p
  } = e, {
    hasGradient: f,
    stops: b,
    gradientId: j
  } = (0, d.De)(null == (t = o.colorStrings) ? true : t.primaryColor, null == (n = o.colorStrings) ? true : n.secondaryColor, null == (i = o.colorStrings) ? true : i.tertiaryColor), _ = (0, v.yH)(s, o), O = (0, x.p9)({
    guildId: s,
    roleId: o.id,
    size: c
  });
  if (null != O) return (0, r.jsx)(h.Z, D(Z({}, O), {
    className: g,
    enableTooltip: m
  }));
  let y = null != (l = o.colorString) ? l : T.Pbq;
  return _ && f && (y = "url(#".concat(j, ")")), (0, r.jsxs)(r.Fragment, {
    children: [_ && f && (0, r.jsx)("svg", {
      width: "0",
      height: "0",
      style: {
        position: "absolute"
      },
      children: (0, r.jsx)("linearGradient", {
        id: j,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: b
      })
    }), (0, r.jsx)(u.lZ8, {
      size: "custom",
      className: a()(g, p),
      color: y,
      width: c,
      height: c
    })]
  })
}