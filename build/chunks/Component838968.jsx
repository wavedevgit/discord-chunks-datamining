/** Chunk was on 85683 **/
/** chunk id: 838968, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N4: () => j,
  P2: () => g,
  Q9: () => v,
  aB: () => _,
  c: () => x,
  rL: () => f,
  uf: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js");

function g(e) {
  let {
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.inline,
    children: [(0, a.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.STATUS_POSITIVE
    }), (0, a.jsx)(s.Text, {
      color: "text-feedback-positive",
      variant: "text-sm/bold",
      children: n
    })]
  })
}

function f(e) {
  let {
    dateString: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.inline,
    children: [(0, a.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, a.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: b.intl.formatToMarkdownString(u.default["ol/ao6"], {
        dateString: (0, l.Z)(n)
      })
    })]
  })
}

function x(e) {
  let {
    removingAt: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.rollbackInline,
    children: [(0, a.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, a.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: b.intl.formatToPlainString(u.default["6e2ry8"], {
        dateString: (0, d.Z)(n)
      })
    })]
  })
}

function p(e) {
  let {
    cost: n,
    costDecorator: t,
    status: r,
    className: i
  } = e, c = true !== n ? m.labelContainer : m.labelContainerEnd;
  return (0, a.jsxs)("div", {
    className: o()(c, i),
    children: [true !== n && (0, a.jsxs)("div", {
      className: o()(m.inline, m.inlineBoost),
      children: [(0, a.jsx)(s.$Eu, {
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, a.jsx)(s.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: b.intl.formatToPlainString(b.t.t2Wbo6, {
          required: n,
          decorator: null != t ? t : ""
        })
      })]
    }), (null == r ? true : r.type) === "expiring" && (0, a.jsx)(f, {
      dateString: r.expiringAt
    }), (null == r ? true : r.type) === "removing" && (0, a.jsx)(x, {
      removingAt: r.removingAt
    }), (null == r ? true : r.type) === "active" && (0, a.jsx)(g, {
      text: r.statusText
    })]
  })
}

function j(e) {
  let {
    children: n
  } = e;
  return (0, a.jsx)("div", {
    className: m.buttonContainer,
    children: n
  })
}

function v(e) {
  let {
    title: n,
    textColor: t,
    children: r,
    footer: i
  } = e;
  return (0, a.jsxs)("div", {
    className: m.contentContainer,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: m.headerContainer,
        children: (0, a.jsx)(s.X6q, {
          color: t,
          variant: "heading-md/bold",
          children: n
        })
      }), r]
    }), i]
  })
}
let _ = Chunk647438.forwardRef(function(e, n) {
  let {
    className: t,
    label: r,
    isActive: i,
    isWarning: l,
    badge: d,
    canRollback: u,
    onClick: g,
    onMouseOver: f,
    onMouseLeave: x,
    children: p
  } = e;
  return (0, a.jsx)("div", {
    className: o()(m.parentContainer, {
      [m.rollbackInactive]: u && !i
    }),
    ref: n,
    children: (0, a.jsxs)(s.kL8, {
      "aria-label": r,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: x,
      className: o()(m.container, {
        [m.active]: i,
        [m.warning]: l || u && i
      }, t),
      children: [p, "new" === d && (0, a.jsx)(s.IGR, {
        className: m.new,
        text: b.intl.string(b.t.y2b7CA)
      }), "beta" === d && (0, a.jsx)(s.IGR, {
        className: m.new,
        text: b.intl.string(b.t.oW0eUV),
        color: c.Z.BG_BRAND
      })]
    })
  })
})