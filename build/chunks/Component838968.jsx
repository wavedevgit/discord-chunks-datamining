/** Chunk was on 44799 **/
/** chunk id: 838968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N4: () => v,
  P2: () => f,
  Q9: () => b,
  aB: () => h,
  c: () => x,
  rL: () => _,
  uf: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js");

function f(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.STATUS_POSITIVE
    }), (0, r.jsx)(s.Text, {
      color: "text-feedback-positive",
      variant: "text-sm/bold",
      children: t
    })]
  })
}

function _(e) {
  let {
    dateString: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: p.intl.formatToMarkdownString(d.default["ol/ao6"], {
        dateString: (0, c.Z)(t)
      })
    })]
  })
}

function x(e) {
  let {
    removingAt: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.rollbackInline,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: p.intl.formatToPlainString(d.default["6e2ry8"], {
        dateString: (0, u.Z)(t)
      })
    })]
  })
}

function g(e) {
  let {
    cost: t,
    costDecorator: n,
    status: o,
    className: i
  } = e, a = true !== t ? m.labelContainer : m.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: l()(a, i),
    children: [true !== t && (0, r.jsxs)("div", {
      className: l()(m.inline, m.inlineBoost),
      children: [(0, r.jsx)(s.$Eu, {
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(s.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: p.intl.formatToPlainString(p.t.t2Wbo6, {
          required: t,
          decorator: null != n ? n : ""
        })
      })]
    }), (null == o ? true : o.type) === "expiring" && (0, r.jsx)(_, {
      dateString: o.expiringAt
    }), (null == o ? true : o.type) === "removing" && (0, r.jsx)(x, {
      removingAt: o.removingAt
    }), (null == o ? true : o.type) === "active" && (0, r.jsx)(f, {
      text: o.statusText
    })]
  })
}

function v(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.buttonContainer,
    children: t
  })
}

function b(e) {
  let {
    title: t,
    textColor: n,
    children: o,
    footer: i
  } = e;
  return (0, r.jsxs)("div", {
    className: m.contentContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: m.headerContainer,
        children: (0, r.jsx)(s.X6q, {
          color: n,
          variant: "heading-md/bold",
          children: t
        })
      }), o]
    }), i]
  })
}
let h = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    label: o,
    isActive: i,
    isWarning: c,
    badge: u,
    canRollback: d,
    onClick: f,
    onMouseOver: _,
    onMouseLeave: x,
    children: g
  } = e;
  return (0, r.jsx)("div", {
    className: l()(m.parentContainer, {
      [m.rollbackInactive]: d && !i
    }),
    ref: t,
    children: (0, r.jsxs)(s.kL8, {
      "aria-label": o,
      onClick: f,
      onMouseOver: _,
      onMouseLeave: x,
      className: l()(m.container, {
        [m.active]: i,
        [m.warning]: c || d && i
      }, n),
      children: ["new" === u && (0, r.jsx)(s.IGR, {
        className: m.new,
        text: p.intl.string(p.t.y2b7CA)
      }), "beta" === u && (0, r.jsx)(s.IGR, {
        className: m.new,
        text: p.intl.string(p.t.oW0eUV),
        color: a.Z.BG_BRAND
      }), g]
    })
  })
})