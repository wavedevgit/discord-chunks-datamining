/** Chunk was on 88615 **/
/** chunk id: 890942, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  $L: () => A,
  Ft: () => x,
  NI: () => b,
  P5: () => m,
  TG: () => p,
  Yq: () => v,
  kd: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk915624 = require("./915624.js"),
  Chunk162362 = require("./162362.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876380 = require("./876380.js");

function p(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.mG,
    children: [(0, r.jsx)(o.yr3, {
      size: "xs",
      color: o.LU0.colors.STATUS_POSITIVE
    }), (0, r.jsx)(o.Text, {
      color: "text-feedback-positive",
      variant: "text-sm/bold",
      children: t
    })]
  })
}

function m(e) {
  let {
    dateString: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.mG,
    children: [(0, r.jsx)(o.EpV, {
      size: "xs",
      color: o.LU0.colors.STATUS_WARNING
    }), (0, r.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: c.intl.formatToMarkdownString(d.default["ol/ao/"], {
        dateString: (0, a.A)(t)
      })
    })]
  })
}

function v(e) {
  let {
    removingAt: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.wL,
    children: [(0, r.jsx)(o.EpV, {
      size: "xs",
      color: o.LU0.colors.STATUS_WARNING
    }), (0, r.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: c.intl.formatToPlainString(d.default["6e2ry1"], {
        dateString: (0, u.A)(t)
      })
    })]
  })
}

function A(e) {
  let {
    cost: t,
    costDecorator: l,
    status: n,
    className: i
  } = e, a = true !== t ? f._A : f.$3;
  return (0, r.jsxs)("div", {
    className: s()(a, i),
    children: [true !== t && (0, r.jsxs)("div", {
      className: s()(f.mG, f.pT),
      children: [(0, r.jsx)(o._Jp, {
        size: "sm",
        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(o.Text, {
        className: f.q9,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-subtle",
        children: c.intl.formatToPlainString(c.t.t2Wbo1, {
          required: t,
          decorator: null != l ? l : ""
        })
      })]
    }), (null == n ? true : n.type) === "expiring" && (0, r.jsx)(m, {
      dateString: n.expiringAt
    }), (null == n ? true : n.type) === "removing" && (0, r.jsx)(v, {
      removingAt: n.removingAt
    }), (null == n ? true : n.type) === "active" && (0, r.jsx)(p, {
      text: n.statusText
    })]
  })
}

function g(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: f.UD,
    children: t
  })
}

function x(e) {
  let {
    title: t,
    textColor: l,
    children: n,
    footer: i
  } = e;
  return (0, r.jsxs)("div", {
    className: f.hQ,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: f.N1,
        children: (0, r.jsx)(o.Heading, {
          color: l,
          variant: "heading-md/bold",
          children: t
        })
      }), n]
    }), i]
  })
}
let b = Chunk64700.forwardRef(function(e, t) {
  let {
    className: l,
    label: n,
    isActive: i,
    isWarning: a,
    badge: u,
    canRollback: d,
    onClick: p,
    onMouseOver: m,
    onMouseLeave: v,
    children: A
  } = e;
  return (0, r.jsx)("div", {
    className: s()(f.gp, {
      [f.Wq]: d && !i
    }),
    ref: t,
    children: (0, r.jsxs)(o.sqX, {
      "aria-label": n,
      onClick: p,
      onMouseOver: m,
      onMouseLeave: v,
      className: s()(f.kL, {
        [f.vu]: i,
        [f.$e]: a || d && i
      }, l),
      children: [A, "new" === u && (0, r.jsx)(o.LpS, {
        className: f.Hl,
        text: c.intl.string(c.t.y2b7CA)
      }), "beta" === u && (0, r.jsx)(o.LpS, {
        className: f.Hl,
        text: c.intl.string(c.t.oW0eUd),
        color: o.LU0.colors.BACKGROUND_BRAND.css
      })]
    })
  })
})