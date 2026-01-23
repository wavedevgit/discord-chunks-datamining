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
    renderHeader: o,
    headerHeight: d,
    query: u
  } = e, g = (0, c.bG)([E.A], () => E.A.getRoleMemberCount(n.id), [n.id]), m = (0, c.bG)([v.A], () => v.A.getHighestRole(n), [n]), f = u.trim();
  i.useEffect(() => {
    (0, A.L)(n.id)
  }, [n.id]);
  let b = i.useRef(false);
  i.useEffect(() => {
    b.current || "" === u.trimStart() || (y.default.track(C.HAw.SEARCH_STARTED, {
      search_type: "Roles"
    }), b.current = true)
  }, [u]);
  let h = i.useMemo(() => s.filter(e => (0, N.Vh)(e, f)), [s, f]),
    x = i.useMemo(() => [...s, l], [s, l]),
    {
      draggingId: j,
      handleDragStart: _,
      handleDragReset: O,
      handleDragComplete: S
    } = (0, I.A)(x),
    T = i.useCallback(e => {
      var i;
      let {
        row: l
      } = e;
      if (0 === h.length) return (0, r.jsx)(M, {}, "empty-role");
      let o = h[l];
      return (0, r.jsx)(U, {
        role: o,
        guild: n,
        highestRole: m,
        currentPosition: l,
        memberCount: null != (i = null == g ? true : g[o.id]) ? i : 0,
        onDragStart: _,
        onDragReset: O,
        onDragComplete: S,
        disableHover: null != j,
        disableDrag: s.length !== h.length,
        setEditRoleId: t,
        setSelectedSection: a
      }, o.id)
    }, [h, n, m, g, _, O, S, j, s, t, a]);
  return (0, r.jsx)(p.ic, {
    sections: [Math.max(h.length, 1)],
    sectionHeight: d,
    renderSection: o,
    rowHeight: 61,
    renderRow: T
  })
}

function M() {
  return (0, r.jsxs)("div", {
    className: w.tp,
    children: [(0, r.jsx)("div", {
      className: R._M
    }), (0, r.jsx)(g.nFg, {
      size: "md",
      color: "currentColor"
    }), (0, r.jsx)(g.Text, {
      className: w.Gm,
      variant: "text-md/semibold",
      color: "text-muted",
      children: P.intl.string(P.t["vR7M+y"])
    })]
  })
}

function U(e) {
  var t, l, c;
  let {
    role: d,
    guild: p,
    highestRole: x,
    currentPosition: _,
    memberCount: O,
    onDragStart: v,
    onDragReset: y,
    onDragComplete: A,
    disableHover: E,
    disableDrag: N,
    setEditRoleId: I,
    setSelectedSection: C
  } = e, k = (0, S.c)(p, x, d), M = null != k, [U, F] = i.useState(false), H = i.useMemo(() => ({
    type: L,
    item: () => (v(d.id), {
      id: d.id,
      position: _
    }),
    canDrag: () => U && !M,
    collect: e => ({
      isDragging: e.isDragging()
    }),
    end: (e, t) => {
      let n = t.getDropResult();
      null == n ? y() : A(n.roleId)
    }
  }), [d, v, y, A, M, U, _]), [{
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
    dragSourcePosition: W
  }, Y] = (0, o.H)(z), X = i.useCallback(e => {
    (0, m.L3)(e, async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 665013));
      return t => (0, r.jsx)(e, G(D({}, t), {
        role: d,
        guild: p
      }))
    })
  }, [p, d]), J = (0, h.x)(p, d);
  if (V) return (0, r.jsx)("div", {
    ref: e => {
      K(e)
    },
    className: s()(w.xf, w.Ao)
  });

  function Z() {
    I(d.id)
  }
  return (0, r.jsxs)(g.DUT, {
    className: s()(w.xf, {
      [w.F2]: E,
      [w.TR]: null != W && _ < W,
      [w.mU]: null != W && _ > W
    }),
    onClick: Z,
    onContextMenu: X,
    innerRef: e => {
      K(Y(e))
    },
    "data-dnd-name": d.name,
    "aria-label": P.intl.formatToPlainString(P.t.Vu0Acc, {
      name: d.name,
      count: "".concat(O)
    }),
    children: [(0, r.jsx)("div", {
      className: s()(w.co, R._M, {
        [w.Y6]: M || N
      }),
      onMouseEnter: () => F(true),
      onMouseLeave: () => F(false),
      children: (0, r.jsx)(g.WP0, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: s()(w.Ji, R.N5),
      children: [(null == (t = d.tags) ? true : t.guild_connections) === null ? (0, r.jsx)(f.A, {
        className: w.U4,
        color: d.colorString,
        size: 24
      }) : (0, r.jsx)(B, {
        guildId: p.id,
        role: d,
        size: 24,
        className: w.UT,
        defaultIconClassName: w.a
      }), null != k ? (0, r.jsx)(S.A, {
        className: w.s2,
        tooltipText: k
      }) : null, (0, r.jsx)(g.Text, {
        className: w.S3,
        color: "text-strong",
        variant: "text-md/medium",
        children: d.name
      }), (null == (l = d.tags) ? true : l.subscription_listing_id) != null && (0, r.jsx)(j.A, {
        className: w.tU,
        "aria-label": P.intl.string(P.t.a2Ak8b)
      }), (null == (c = d.tags) ? true : c.is_guild_product_role) === true && (0, r.jsx)(b.A, {})]
    }), (0, r.jsx)(u.m, {
      text: P.intl.string(P.t.CW75t0),
      "aria-label": P.intl.formatToPlainString(P.t.Fgs8fD, {
        count: "".concat(O)
      }),
      position: "right",
      children: (0, r.jsxs)(g.DUT, {
        className: s()(w.Tb, R.Hp),
        onClick: function() {
          Z(), C(T.T$.MEMBERS)
        },
        children: [(0, r.jsx)(g.Text, {
          variant: "text-md/normal",
          color: "none",
          children: O
        }), (0, r.jsx)(g.nys, {
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
        children: (0, r.jsx)(g.K0, {
          variant: "secondary",
          "aria-label": M ? P.intl.string(P.t["HO/oXl"]) : P.intl.string(P.t.bt75uw),
          icon: M ? g.bMW : g.R2l,
          onClick: Z
        })
      }), (0, r.jsx)(u.m, {
        text: P.intl.string(P.t["UKOtz+"]),
        shouldShow: J,
        children: (0, r.jsx)(g.K0, {
          variant: "secondary",
          "aria-label": P.intl.string(P.t["UKOtz+"]),
          icon: g.jNK,
          onClick: X,
          disabled: !J
        })
      })]
    })]
  })
}

function B(e) {
  var t, n, i, l;
  let {
    guildId: a,
    role: o,
    size: c,
    enableTooltip: u,
    className: m,
    defaultIconClassName: p
  } = e, {
    hasGradient: f,
    stops: b,
    gradientId: h
  } = (0, d.RM)(null == (n = o.colorStrings) ? true : n.primaryColor, null == (i = o.colorStrings) ? true : i.secondaryColor, null == (l = o.colorStrings) ? true : l.tertiaryColor), j = (0, _.jV)(a, o), v = (0, x.$7)({
    guildId: a,
    roleId: o.id,
    size: c
  });
  if (null != v) return (0, r.jsx)(O.A, G(D({}, v), {
    className: m,
    enableTooltip: u
  }));
  let y = null != (t = o.colorString) ? t : C.TpD;
  return j && f && (y = "url(#".concat(h, ")")), (0, r.jsxs)(r.Fragment, {
    children: [j && f && (0, r.jsx)("svg", {
      width: "0",
      height: "0",
      style: {
        position: "absolute"
      },
      children: (0, r.jsx)("linearGradient", {
        id: h,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: b
      })
    }), (0, r.jsx)(g.iTF, {
      size: "custom",
      className: s()(m, p),
      color: y,
      width: c,
      height: c
    })]
  })
}