/** Chunk was on 44799 **/
/** chunk id: 838968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N4: () => x,
  P2: () => g,
  Q9: () => h,
  aB: () => C,
  c: () => v,
  rL: () => f,
  uf: () => _
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

function g(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(a.owK, {
      size: "xs",
      color: a.TVs.colors.STATUS_POSITIVE
    }), (0, r.jsx)(a.Text, {
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
    className: m.inline,
    children: [(0, r.jsx)(a.Mgn, {
      size: "xs",
      color: a.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(a.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: p.intl.formatToMarkdownString(d.default["ol/ao6"], {
        dateString: (0, c.Z)(t)
      })
    })]
  })
}

function v(e) {
  let {
    removingAt: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.rollbackInline,
    children: [(0, r.jsx)(a.Mgn, {
      size: "xs",
      color: a.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(a.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: p.intl.formatToPlainString(d.default["6e2ry8"], {
        dateString: (0, u.Z)(t)
      })
    })]
  })
}

function _(e) {
  let {
    cost: t,
    costDecorator: n,
    status: o,
    className: i
  } = e, s = true !== t ? m.labelContainer : m.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: l()(s, i),
    children: [true !== t && (0, r.jsxs)("div", {
      className: l()(m.inline, m.inlineBoost),
      children: [(0, r.jsx)(a.$Eu, {
        size: "sm",
        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(a.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: p.intl.formatToPlainString(p.t.t2Wbo6, {
          required: t,
          decorator: null != n ? n : ""
        })
      })]
    }), (null == o ? true : o.type) === "expiring" && (0, r.jsx)(f, {
      dateString: o.expiringAt
    }), (null == o ? true : o.type) === "removing" && (0, r.jsx)(v, {
      removingAt: o.removingAt
    }), (null == o ? true : o.type) === "active" && (0, r.jsx)(g, {
      text: o.statusText
    })]
  })
}

function x(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.buttonContainer,
    children: t
  })
}

function h(e) {
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
        children: (0, r.jsx)(a.X6q, {
          color: n,
          variant: "heading-md/bold",
          children: t
        })
      }), o]
    }), i]
  })
}
let C = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    label: o,
    isActive: i,
    isWarning: c,
    badge: u,
    canRollback: d,
    onClick: g,
    onMouseOver: f,
    onMouseLeave: v,
    children: _
  } = e;
  return (0, r.jsx)("div", {
    className: l()(m.parentContainer, {
      [m.rollbackInactive]: d && !i
    }),
    ref: t,
    children: (0, r.jsxs)(a.kL8, {
      "aria-label": o,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: v,
      className: l()(m.container, {
        [m.active]: i,
        [m.warning]: c || d && i
      }, n),
      children: [_, "new" === u && (0, r.jsx)(a.IGR, {
        className: m.new,
        text: p.intl.string(p.t.y2b7CA)
      }), "beta" === u && (0, r.jsx)(a.IGR, {
        className: m.new,
        text: p.intl.string(p.t.oW0eUV),
        color: s.Z.BG_BRAND
      })]
    })
  })
})