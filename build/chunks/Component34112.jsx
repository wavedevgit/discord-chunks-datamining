/** Chunk was on 64982 **/
/** chunk id: 34112, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./781311.js"), require("./539338.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk442837 = require("./442837.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk134433 = require("./134433.jsx"),
  Chunk646892 = require("./646892.jsx"),
  Chunk741247 = require("./741247.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk402235 = require("./402235.js"),
  Chunk48950 = require("./48950.jsx"),
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

function D(e) {
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

function A(e, t) {
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
  } = e, g = (0, c.e7)([N.Z], () => N.Z.getRoleMemberCount(n.id), [n.id]), m = (0, c.e7)([O.Z], () => O.Z.getHighestRole(n), [n]), f = u.trim();
  i.useEffect(() => {
    (0, y.E)(n.id)
  }, [n.id]);
  let h = i.useRef(false);
  i.useEffect(() => {
    h.current || "" === u.trimStart() || (C.default.track(P.rMx.SEARCH_STARTED, {
      search_type: "Roles"
    }), h.current = true)
  }, [u]);
  let b = i.useMemo(() => a.filter(e => (0, E.uo)(e, f)), [a, f]),
    x = i.useMemo(() => [...a, l], [a, l]),
    {
      draggingId: j,
      handleDragStart: v,
      handleDragReset: _,
      handleDragComplete: I
    } = (0, S.Z)(x),
    T = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === b.length) return (0, r.jsx)(G, {}, "empty-role");
      let o = b[l];
      return (0, r.jsx)(M, {
        role: o,
        guild: n,
        highestRole: m,
        currentPosition: l,
        memberCount: null != (i = null == g ? true : g[o.id]) ? i : 0,
        onDragStart: v,
        onDragReset: _,
        onDragComplete: I,
        disableHover: null != j,
        disableDrag: a.length !== b.length,
        setEditRoleId: t,
        setSelectedSection: s
      }, o.id)
    }, [b, n, m, g, v, _, I, j, a, t, s]);
  return (0, r.jsx)(p.Xi, {
    sections: [Math.max(b.length, 1)],
    sectionHeight: d,
    renderSection: o,
    rowHeight: 61,
    renderRow: T
  })
}

function G() {
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
      children: Chunk388032.intl.string(Chunk388032.t["vR7M+y"])
    })]
  })
}

function M(e) {
  var t, l, c;
  let {
    role: d,
    guild: p,
    highestRole: x,
    currentPosition: v,
    memberCount: _,
    onDragStart: O,
    onDragReset: C,
    onDragComplete: y,
    disableHover: N,
    disableDrag: E,
    setEditRoleId: S,
    setSelectedSection: P
  } = e, k = (0, I.T)(p, x, d), G = null != k, [M, B] = i.useState(false), F = i.useMemo(() => ({
    type: L,
    item: () => (O(d.id), {
      id: d.id,
      position: v
    }),
    canDrag: () => M && !G,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      if (null == n) return void C();
      y(n.roleId)
    }
  }), [d, O, C, y, G, M, v]), [{
    isDragging: H
  }, z] = (0, s.c)(F), W = i.useMemo(() => ({
    accept: L,
    canDrop: () => !G,
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
  }), [G, d]), [{
    dragSourcePosition: V
  }, K] = (0, o.L)(W), Y = i.useCallback(e => {
    (0, m.jW)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 741247));
      return t => (0, r.jsx)(e, A(D({}, t), {
        role: d,
        guild: p
      }))
    })
  }, [p, d]), q = (0, b.e)(p, d);
  if (H) return (0, r.jsx)("div", {
    ref: e => {
      z(e)
    },
    className: a()(Z.roleRow, Z.roleRowDragging)
  });

  function X() {
    S(d.id)
  }
  return (0, r.jsxs)(g.P3F, {
    className: a()(Z.roleRow, {
      [Z.roleRowDisableHover]: N,
      [Z.containerDragBefore]: null != V && v < V,
      [Z.containerDragAfter]: null != V && v > V
    }),
    onClick: X,
    onContextMenu: Y,
    innerRef: e => {
      z(K(e))
    },
    "data-dnd-name": d.name,
    "aria-label": w.intl.formatToPlainString(w.t.Vu0Acc, {
      name: d.name,
      count: "".concat(_)
    }),
    children: [(0, r.jsx)("div", {
      className: a()(Z.dragIcon, R.dragSpacing, {
        [Z.dragIconHidden]: G || E
      }),
      onMouseEnter: () => B(true),
      onMouseLeave: () => B(false),
      children: (0, r.jsx)(g.Vni, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: a()(Z.roleNameContainer, R.roleNameSpacing),
      children: [(null == (t = d.tags) ? true : t.guild_connections) === null ? (0, r.jsx)(f.Z, {
        className: Z.roleFlowerStar,
        color: d.colorString,
        size: 24
      }) : (0, r.jsx)(U, {
        guildId: p.id,
        role: d,
        size: 24,
        className: Z.roleIcon,
        defaultIconClassName: Z.shield
      }), null != k ? (0, r.jsx)(I.Z, {
        className: Z.lock,
        tooltipText: k
      }) : null, (0, r.jsx)(g.Text, {
        className: Z.roleName,
        color: "header-primary",
        variant: "text-md/medium",
        children: d.name
      }), (null == (l = d.tags) ? true : l.subscription_listing_id) != null && (0, r.jsx)(j.Z, {
        className: Z.subscriptionRoleIcon,
        "aria-label": w.intl.string(w.t.a2Ak8b)
      }), (null == (c = d.tags) ? true : c.is_guild_product_role) === true && (0, r.jsx)(h.Z, {})]
    }), (0, r.jsx)(u.u, {
      text: w.intl.string(w.t.CW75t0),
      "aria-label": w.intl.formatToPlainString(w.t.Fgs8fD, {
        count: "".concat(_)
      }),
      position: "right",
      children: (0, r.jsxs)(g.P3F, {
        className: a()(Z.memberCountContainer, R.memberSpacing),
        onClick: function() {
          X(), P(T.ZI.MEMBERS)
        },
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/normal",
          color: "none",
          children: _
        }), (0, r.jsx)(g.tBG, {
          size: "custom",
          color: "currentColor",
          className: Z.person,
          width: 20,
          height: 20
        })]
      })
    }), (0, r.jsxs)("div", {
      className: a()(Z.buttonsContainer, R.buttonsSpacing),
      children: [(0, r.jsx)(u.u, {
        text: G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75uw),
        children: (0, r.jsx)(g.hU, {
          variant: "secondary",
          "aria-label": G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75uw),
          icon: G ? g.tEF : g.vdY,
          onClick: X
        })
      }), (0, r.jsx)(u.u, {
        text: w.intl.string(w.t["UKOtz+"]),
        shouldShow: q,
        children: (0, r.jsx)(g.hU, {
          variant: "secondary",
          "aria-label": w.intl.string(w.t["UKOtz+"]),
          icon: g.xhG,
          onClick: Y,
          disabled: !q
        })
      })]
    })]
  })
}

function U(e) {
  var t, n, i, l;
  let {
    guildId: s,
    role: o,
    size: c,
    enableTooltip: u,
    className: m,
    defaultIconClassName: p
  } = e, {
    hasGradient: f,
    stops: h,
    gradientId: b
  } = (0, d.De)(null == (t = o.colorStrings) ? true : t.primaryColor, null == (n = o.colorStrings) ? true : n.secondaryColor, null == (i = o.colorStrings) ? true : i.tertiaryColor), j = (0, v.yH)(s, o), O = (0, x.p9)({
    guildId: s,
    roleId: o.id,
    size: c
  });
  if (null != O) return (0, r.jsx)(_.Z, A(D({}, O), {
    className: m,
    enableTooltip: u
  }));
  let C = null != (l = o.colorString) ? l : P.Pbq;
  return j && f && (C = "url(#".concat(b, ")")), (0, r.jsxs)(r.Fragment, {
    children: [j && f && (0, r.jsx)("svg", {
      width: "0",
      height: "0",
      style: {
        position: "absolute"
      },
      children: (0, r.jsx)("linearGradient", {
        id: b,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: h
      })
    }), (0, r.jsx)(g.lZ8, {
      size: "custom",
      className: a()(m, p),
      color: C,
      width: c,
      height: c
    })]
  })
}