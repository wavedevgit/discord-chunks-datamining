/** Chunk was on 85683 **/
/** chunk id: 838968, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N4: () => v,
  P2: () => g,
  Q9: () => j,
  aB: () => _,
  c: () => x,
  rL: () => f,
  uf: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(o.owK, {
      size: "xs",
      color: o.TVs.colors.STATUS_POSITIVE
    }), (0, r.jsx)(o.Text, {
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
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(o.Mgn, {
      size: "xs",
      color: o.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: b.intl.formatToMarkdownString(u.default["ol/ao6"], {
        dateString: (0, c.Z)(n)
      })
    })]
  })
}

function x(e) {
  let {
    removingAt: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.rollbackInline,
    children: [(0, r.jsx)(o.Mgn, {
      size: "xs",
      color: o.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(o.Text, {
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
    status: a,
    className: i
  } = e, l = true !== n ? m.labelContainer : m.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: s()(l, i),
    children: [true !== n && (0, r.jsxs)("div", {
      className: s()(m.inline, m.inlineBoost),
      children: [(0, r.jsx)(o.$Eu, {
        size: "sm",
        color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(o.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: b.intl.formatToPlainString(b.t.t2Wbo6, {
          required: n,
          decorator: null != t ? t : ""
        })
      })]
    }), (null == a ? true : a.type) === "expiring" && (0, r.jsx)(f, {
      dateString: a.expiringAt
    }), (null == a ? true : a.type) === "removing" && (0, r.jsx)(x, {
      removingAt: a.removingAt
    }), (null == a ? true : a.type) === "active" && (0, r.jsx)(g, {
      text: a.statusText
    })]
  })
}

function v(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: m.buttonContainer,
    children: n
  })
}

function j(e) {
  let {
    title: n,
    textColor: t,
    children: a,
    footer: i
  } = e;
  return (0, r.jsxs)("div", {
    className: m.contentContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: m.headerContainer,
        children: (0, r.jsx)(o.X6q, {
          color: t,
          variant: "heading-md/bold",
          children: n
        })
      }), a]
    }), i]
  })
}
let _ = Chunk647438.forwardRef(function(e, n) {
  let {
    className: t,
    label: a,
    isActive: i,
    isWarning: c,
    badge: d,
    canRollback: u,
    onClick: g,
    onMouseOver: f,
    onMouseLeave: x,
    children: p
  } = e;
  return (0, r.jsx)("div", {
    className: s()(m.parentContainer, {
      [m.rollbackInactive]: u && !i
    }),
    ref: n,
    children: (0, r.jsxs)(o.kL8, {
      "aria-label": a,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: x,
      className: s()(m.container, {
        [m.active]: i,
        [m.warning]: c || u && i
      }, t),
      children: [p, "new" === d && (0, r.jsx)(o.IGR, {
        className: m.new,
        text: b.intl.string(b.t.y2b7CA)
      }), "beta" === d && (0, r.jsx)(o.IGR, {
        className: m.new,
        text: b.intl.string(b.t.oW0eUV),
        color: l.Z.BG_BRAND
      })]
    })
  })
})