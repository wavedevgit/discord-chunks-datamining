/** Chunk was on 47841 **/
/** chunk id: 69090, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./733351.js"), require("./867070.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36075 = require("./36075.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk63104 = require("./63104.jsx"),
  Chunk163013 = require("./163013.jsx"),
  Chunk665013 = require("./665013.jsx"),
  Chunk201275 = require("./201275.js"),
  Chunk35275 = require("./35275.jsx"),
  Chunk676608 = require("./676608.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk545868 = require("./545868.js"),
  Chunk642133 = require("./642133.js"),
  Chunk856644 = require("./856644.js"),
  Chunk359837 = require("./359837.jsx"),
  Chunk533448 = require("./533448.js"),
  Chunk927573 = require("./927573.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk819644 = require("./819644.js"),
  Chunk107550 = require("./107550.js");

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

function G(e, t) {
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
    otherRoles: s,
    setSelectedSection: a,
    renderHeader: c,
    headerHeight: d,
    query: u
  } = e, f = (0, o.bG)([N.A], () => N.A.getRoleMemberCount(n.id), [n.id]), g = (0, o.bG)([v.A], () => v.A.getHighestRole(n), [n]), m = u.trim();
  i.useEffect(() => {
    (0, E.L)(n.id)
  }, [n.id]);
  let p = i.useRef(false);
  i.useEffect(() => {
    p.current || "" === u.trimStart() || (A.default.track(C.HAw.SEARCH_STARTED, {
      search_type: "Roles"
    }), p.current = true)
  }, [u]);
  let x = i.useMemo(() => s.filter(e => (0, _.Vh)(e, m)), [s, m]),
    h = i.useMemo(() => [...s, l], [s, l]),
    {
      draggingId: j,
      handleDragStart: O,
      handleDragReset: y,
      handleDragComplete: S
    } = (0, T.A)(h),
    I = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === x.length) return (0, r.jsx)(M, {}, "empty-role");
      let c = x[l];
      return (0, r.jsx)(U, {
        role: c,
        guild: n,
        highestRole: g,
        currentPosition: l,
        memberCount: null != (i = null == f ? true : f[c.id]) ? i : 0,
        onDragStart: O,
        onDragReset: y,
        onDragComplete: S,
        disableHover: null != j,
        disableDrag: s.length !== x.length,
        setEditRoleId: t,
        setSelectedSection: a
      }, c.id)
    }, [x, n, g, f, O, y, S, j, s, t, a]);
  return (0, r.jsx)(b.ic, {
    sections: [Math.max(x.length, 1)],
    sectionHeight: d,
    renderSection: c,
    rowHeight: 61,
    renderRow: I
  })
}

function M() {
  return (0, r.jsxs)("div", {
    className: w.tp,
    children: [(0, r.jsx)("div", {
      className: R._M
    }), (0, r.jsx)(f.nFg, {
      size: "md",
      color: "currentColor"
    }), (0, r.jsx)(f.Text, {
      className: w.Gm,
      variant: "text-md/semibold",
      color: "text-muted",
      children: P.intl.string(P.t["vR7M+y"])
    })]
  })
}

function U(e) {
  var t, l, o;
  let {
    role: d,
    guild: b,
    highestRole: h,
    currentPosition: O,
    memberCount: y,
    onDragStart: v,
    onDragReset: A,
    onDragComplete: E,
    disableHover: N,
    disableDrag: _,
    setEditRoleId: T,
    setSelectedSection: C
  } = e, k = (0, S.c)(b, h, d), M = null != k, [U, B] = i.useState(false), H = i.useMemo(() => ({
    type: L,
    item: () => (v(d.id), {
      id: d.id,
      position: O
    }),
    canDrag: () => U && !M,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      null == n ? A() : E(n.roleId)
    }
  }), [d, v, A, E, M, U, O]), [{
    isDragging: V
  }, K] = (0, a.i)(H), z = i.useMemo(() => ({
    accept: L,
    canDrop: () => !M,
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
  }), [M, d]), [{
    dragSourcePosition: Y
  }, W] = (0, c.H)(z), X = i.useCallback(e => {
    (0, g.L3)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 665013));
      return t => (0, r.jsx)(e, G(D({}, t), {
        role: d,
        guild: b
      }))
    })
  }, [b, d]), J = (0, x.x)(b, d);
  if (V) return (0, r.jsx)("div", {
    ref: e => {
      K(e)
    },
    className: s()(w.xf, w.Ao)
  });

  function Z() {
    T(d.id)
  }
  return (0, r.jsxs)(f.DUT, {
    className: s()(w.xf, {
      [w.F2]: N,
      [w.TR]: null != Y && O < Y,
      [w.mU]: null != Y && O > Y
    }),
    onClick: Z,
    onContextMenu: X,
    innerRef: e => {
      K(W(e))
    },
    "data-dnd-name": d.name,
    "aria-label": P.intl.formatToPlainString(P.t.Vu0Acc, {
      name: d.name,
      count: "".concat(y)
    }),
    children: [(0, r.jsx)("div", {
      className: s()(w.co, R._M, {
        [w.Y6]: M || _
      }),
      onMouseEnter: () => B(true),
      onMouseLeave: () => B(false),
      children: (0, r.jsx)(f.WP0, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: s()(w.Ji, R.N5),
      children: [(null == (t = d.tags) ? true : t.guild_connections) === null ? (0, r.jsx)(m.A, {
        className: w.U4,
        color: d.colorString,
        size: 24
      }) : (0, r.jsx)(F, {
        guildId: b.id,
        role: d,
        size: 24,
        className: w.UT,
        defaultIconClassName: w.a
      }), null != k ? (0, r.jsx)(S.A, {
        className: w.s2,
        tooltipText: k
      }) : null, (0, r.jsx)(f.Text, {
        className: w.S3,
        color: "text-strong",
        variant: "text-md/medium",
        children: d.name
      }), (null == (l = d.tags) ? true : l.subscription_listing_id) != null && (0, r.jsx)(j.A, {
        className: w.tU,
        "aria-label": P.intl.string(P.t.a2Ak8b)
      }), (null == (o = d.tags) ? true : o.is_guild_product_role) === true && (0, r.jsx)(p.A, {})]
    }), (0, r.jsx)(u.m, {
      text: P.intl.string(P.t.CW75t0),
      "aria-label": P.intl.formatToPlainString(P.t.Fgs8fD, {
        count: "".concat(y)
      }),
      position: "right",
      children: (0, r.jsxs)(f.DUT, {
        className: s()(w.Tb, R.Hp),
        onClick: function() {
          Z(), C(I.T$.MEMBERS)
        },
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/normal",
          color: "none",
          children: y
        }), (0, r.jsx)(f.nys, {
          size: "custom",
          color: "currentColor",
          className: w.MV,
          width: 20,
          height: 20
        })]
      })
    }), (0, r.jsxs)("div", {
      className: s()(w.NC, R.DE),
      children: [(0, r.jsx)(u.m, {
        text: M ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75uw),
        children: (0, r.jsx)(f.K0, {
          variant: "secondary",
          "aria-label": M ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75uw),
          icon: M ? f.bMW : f.R2l,
          onClick: Z
        })
      }), (0, r.jsx)(u.m, {
        text: P.intl.string(P.t["UKOtz+"]),
        shouldShow: J,
        children: (0, r.jsx)(f.K0, {
          variant: "secondary",
          "aria-label": P.intl.string(P.t["UKOtz+"]),
          icon: f.jNK,
          onClick: X,
          disabled: !J
        })
      })]
    })]
  })
}

function F(e) {
  var t, n, i, l;
  let {
    guildId: a,
    role: c,
    size: o,
    enableTooltip: u,
    className: g,
    defaultIconClassName: b
  } = e, {
    hasGradient: m,
    stops: p,
    gradientId: x
  } = (0, d.RM)(null == (n = c.colorStrings) ? true : n.primaryColor, null == (i = c.colorStrings) ? true : i.secondaryColor, null == (l = c.colorStrings) ? true : l.tertiaryColor), j = (0, O.jV)(a, c), v = (0, h.$7)({
    guildId: a,
    roleId: c.id,
    size: o
  });
  if (null != v) return (0, r.jsx)(y.A, G(D({}, v), {
    className: g,
    enableTooltip: u
  }));
  let A = null != (t = c.colorString) ? t : C.TpD;
  return j && m && (A = "url(#".concat(x, ")")), (0, r.jsxs)(r.Fragment, {
    children: [j && m && (0, r.jsx)("svg", {
      width: "0",
      height: "0",
      style: {
        position: "absolute"
      },
      children: (0, r.jsx)("linearGradient", {
        id: x,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: p
      })
    }), (0, r.jsx)(f.iTF, {
      size: "custom",
      className: s()(g, b),
      color: A,
      width: o,
      height: o
    })]
  })
}