/** Chunk was on 29679 **/
/** chunk id: 34112, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./781311.js"), require("./539338.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
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
  Chunk960585 = require("./960585.js"),
  Chunk804306 = require("./804306.js");

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

function L(e) {
  let {
    setEditRoleId: t,
    guild: n,
    everyoneRole: l,
    otherRoles: s,
    setSelectedSection: a,
    renderHeader: o,
    headerHeight: d,
    query: u
  } = e, m = (0, c.e7)([C.Z], () => C.Z.getRoleMemberCount(n.id), [n.id]), p = (0, c.e7)([_.Z], () => _.Z.getHighestRole(n), [n]), f = u.trim();
  i.useEffect(() => {
    (0, y.E)(n.id)
  }, [n.id]);
  let h = i.useRef(false);
  i.useEffect(() => {
    h.current || "" === u.trimStart() || (O.default.track(T.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), h.current = true)
  }, [u]);
  let b = i.useMemo(() => s.filter(e => (0, N.uo)(e, f)), [s, f]),
    x = i.useMemo(() => [...s, l], [s, l]),
    {
      draggingId: j,
      handleDragStart: v,
      handleDragReset: E,
      handleDragComplete: S
    } = (0, I.Z)(x),
    P = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === b.length) return (0, r.jsx)(k, {}, "empty-role");
      let o = b[l];
      return (0, r.jsx)(G, {
        role: o,
        guild: n,
        highestRole: p,
        currentPosition: l,
        memberCount: null != (i = null == m ? true : m[o.id]) ? i : 0,
        onDragStart: v,
        onDragReset: E,
        onDragComplete: S,
        disableHover: null != j,
        disableDrag: s.length !== b.length,
        setEditRoleId: t,
        setSelectedSection: a
      }, o.id)
    }, [b, n, p, m, v, E, S, j, s, t, a]);
  return (0, r.jsx)(g.Xi, {
    sections: [Math.max(b.length, 1)],
    sectionHeight: d,
    renderSection: o,
    rowHeight: 61,
    renderRow: P
  })
}

function k() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk960585.emptyRoles,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk804306.dragSpacing
    }), (0, Chunk951288.jsx)(Chunk481060.BFJ, {
      size: "md",
      color: "currentColor"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk960585.emptyRolesText,
      variant: "text-md/semibold",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["vR7M+/"])
    })]
  })
}

function G(e) {
  var t, l, c;
  let {
    role: d,
    guild: g,
    highestRole: f,
    currentPosition: x,
    memberCount: v,
    onDragStart: _,
    onDragReset: O,
    onDragComplete: y,
    disableHover: C,
    disableDrag: N,
    setEditRoleId: I,
    setSelectedSection: T
  } = e, L = (0, E.T)(g, f, d), k = null != L, [G, U] = i.useState(false), B = i.useMemo(() => ({
    type: A,
    item: () => (_(d.id), {
      id: d.id,
      position: x
    }),
    canDrag: () => G && !k,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) return void O();
      y(n.roleId)
    }
  }), [d, _, O, y, k, G, x]), [{
    isDragging: F
  }, H] = (0, a.c)(B), z = i.useMemo(() => ({
    accept: A,
    canDrop: () => !k,
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
  }), [k, d]), [{
    dragSourcePosition: V
  }, W] = (0, o.L)(z), K = i.useCallback(e => {
    (0, m.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 741247));
      return t => (0, r.jsx)(e, D(Z({}, t), {
        role: d,
        guild: g
      }))
    })
  }, [g, d]), Y = (0, b.e)(g, d);
  if (F) return (0, r.jsx)("div", {
    ref: e => {
      H(e)
    },
    className: s()(w.roleRow, w.roleRowDragging)
  });

  function q() {
    I(d.id)
  }

  function X() {
    q(), T(S.ZI.MEMBERS)
  }
  return (0, r.jsxs)(u.P3F, {
    className: s()(w.roleRow, {
      [w.roleRowDisableHover]: C,
      [w.containerDragBefore]: null != V && x < V,
      [w.containerDragAfter]: null != V && x > V
    }),
    onClick: q,
    onContextMenu: K,
    innerRef: e => {
      H(W(e))
    },
    "data-dnd-name": d.name,
    "aria-label": P.intl.formatToPlainString(P.t.Vu0AcX, {
      name: d.name,
      count: "".concat(v)
    }),
    children: [(0, r.jsx)("div", {
      className: s()(w.dragIcon, R.dragSpacing, {
        [w.dragIconHidden]: k || N
      }),
      onMouseEnter: () => U(true),
      onMouseLeave: () => U(false),
      children: (0, r.jsx)(u.Vni, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: s()(w.roleNameContainer, R.roleNameSpacing),
      children: [(null == (t = d.tags) ? true : t.guild_connections) === null ? (0, r.jsx)(p.Z, {
        className: w.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, r.jsx)(M, {
        guildId: g.id,
        role: d,
        size: 24,
        className: w.roleIcon,
        defaultIconClassName: w.shield
      }), null != L ? (0, r.jsx)(E.Z, {
        className: w.lock,
        tooltipText: L
      }) : null, (0, r.jsx)(u.Text, {
        className: w.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null == (l = d.tags) ? true : l.subscription_listing_id) != null && (0, r.jsx)(j.Z, {
        className: w.subscriptionRoleIcon,
        "aria-label": P.intl.string(P.t.a2Ak8f)
      }), (null == (c = d.tags) ? true : c.is_guild_product_role) === true && (0, r.jsx)(h.Z, {})]
    }), (0, r.jsx)(u.ua7, {
      text: P.intl.string(P.t.CW75t7),
      "aria-label": P.intl.formatToPlainString(P.t.Fgs8fH, {
        count: "".concat(v)
      }),
      position: "right",
      children: e => (0, r.jsxs)(u.P3F, D(Z({}, e), {
        className: s()(w.memberCountContainer, R.memberSpacing),
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
      className: s()(w.buttonsContainer, R.buttonsSpacing),
      children: [(0, r.jsx)(u.ua7, {
        text: k ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7),
        children: e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": k ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75u7),
          icon: k ? u.tEF : u.vdY,
          onClick: q
        }))
      }), (0, r.jsx)(u.ua7, {
        text: P.intl.string(P.t.UKOtz8),
        shouldShow: Y,
        children: e => (0, r.jsx)(u.hU, D(Z({}, e), {
          variant: "secondary",
          "aria-label": P.intl.string(P.t.UKOtz8),
          icon: u.xhG,
          onClick: K,
          disabled: !Y
        }))
      })]
    })]
  })
}

function M(e) {
  var t, n, i, l;
  let {
    guildId: a,
    role: o,
    size: c,
    enableTooltip: m,
    className: g,
    defaultIconClassName: p
  } = e, {
    hasGradient: h,
    stops: b,
    gradientId: j
  } = (0, d.De)(null == (t = o.colorStrings) ? true : t.primaryColor, null == (n = o.colorStrings) ? true : n.secondaryColor, null == (i = o.colorStrings) ? true : i.tertiaryColor), _ = (0, v.yH)(a, o), O = (0, x.p9)({
    guildId: a,
    roleId: o.id,
    size: c
  });
  if (null != O) return (0, r.jsx)(f.Z, D(Z({}, O), {
    className: g,
    enableTooltip: m
  }));
  let y = null != (l = o.colorString) ? l : T.Pbq;
  return _ && h && (y = "url(#".concat(j, ")")), (0, r.jsxs)(r.Fragment, {
    children: [_ && h && (0, r.jsx)("svg", {
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
      className: s()(g, p),
      color: y,
      width: c,
      height: c
    })]
  })
}