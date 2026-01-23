/** Chunk was on 88615 **/
/** chunk id: 890942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $L: () => g,
  Ft: () => _,
  NI: () => x,
  P5: () => f,
  TG: () => m,
  Yq: () => v,
  kd: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk915624 = require("./915624.js"),
  Chunk162362 = require("./162362.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876380 = require("./876380.js");

function m(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.mG,
    children: [(0, r.jsx)(s.yr3, {
      size: "xs",
      color: s.LU0.colors.STATUS_POSITIVE
    }), (0, r.jsx)(s.Text, {
      color: "text-feedback-positive",
      variant: "text-sm/bold",
      children: t
    })]
  })
}

function f(e) {
  let {
    dateString: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.mG,
    children: [(0, r.jsx)(s.EpV, {
      size: "xs",
      color: s.LU0.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
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
    className: p.wL,
    children: [(0, r.jsx)(s.EpV, {
      size: "xs",
      color: s.LU0.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: c.intl.formatToPlainString(d.default["6e2ry1"], {
        dateString: (0, u.A)(t)
      })
    })]
  })
}

function g(e) {
  let {
    cost: t,
    costDecorator: n,
    status: l,
    className: i
  } = e, a = true !== t ? p._A : p.$3;
  return (0, r.jsxs)("div", {
    className: o()(a, i),
    children: [true !== t && (0, r.jsxs)("div", {
      className: o()(p.mG, p.pT),
      children: [(0, r.jsx)(s._Jp, {
        size: "sm",
        color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(s.Text, {
        className: p.q9,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-subtle",
        children: c.intl.formatToPlainString(c.t.t2Wbo1, {
          required: t,
          decorator: null != n ? n : ""
        })
      })]
    }), (null == l ? true : l.type) === "expiring" && (0, r.jsx)(f, {
      dateString: l.expiringAt
    }), (null == l ? true : l.type) === "removing" && (0, r.jsx)(v, {
      removingAt: l.removingAt
    }), (null == l ? true : l.type) === "active" && (0, r.jsx)(m, {
      text: l.statusText
    })]
  })
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: p.UD,
    children: t
  })
}

function _(e) {
  let {
    title: t,
    textColor: n,
    children: l,
    footer: i
  } = e;
  return (0, r.jsxs)("div", {
    className: p.hQ,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: p.N1,
        children: (0, r.jsx)(s.Heading, {
          color: n,
          variant: "heading-md/bold",
          children: t
        })
      }), l]
    }), i]
  })
}
let x = Chunk64700.forwardRef(function(e, t) {
  let {
    className: n,
    label: l,
    isActive: i,
    isWarning: a,
    badge: u,
    canRollback: d,
    onClick: m,
    onMouseOver: f,
    onMouseLeave: v,
    children: g
  } = e;
  return (0, r.jsx)("div", {
    className: o()(p.gp, {
      [p.Wq]: d && !i
    }),
    ref: t,
    children: (0, r.jsxs)(s.sqX, {
      "aria-label": l,
      onClick: m,
      onMouseOver: f,
      onMouseLeave: v,
      className: o()(p.kL, {
        [p.vu]: i,
        [p.$e]: a || d && i
      }, n),
      children: [g, "new" === u && (0, r.jsx)(s.LpS, {
        className: p.Hl,
        text: c.intl.string(c.t.y2b7CA)
      }), "beta" === u && (0, r.jsx)(s.LpS, {
        className: p.Hl,
        text: c.intl.string(c.t.oW0eUd),
        color: s.LU0.colors.BACKGROUND_BRAND.css
      })]
    })
  })
})