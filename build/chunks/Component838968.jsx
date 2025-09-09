/** Chunk was on 44799 **/
/** chunk id: 838968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N4: () => x,
  P2: () => f,
  Q9: () => h,
  aB: () => b,
  c: () => v,
  rL: () => g,
  uf: () => _
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

function f(e) {
  let {
    text: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(l.owK, {
      size: "xs",
      color: l.TVs.colors.STATUS_POSITIVE
    }), (0, r.jsx)(l.Text, {
      color: "text-feedback-positive",
      variant: "text-sm/bold",
      children: t
    })]
  })
}

function g(e) {
  let {
    dateString: t
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(l.Mgn, {
      size: "xs",
      color: l.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(l.Text, {
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
    children: [(0, r.jsx)(l.Mgn, {
      size: "xs",
      color: l.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(l.Text, {
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
  } = e, a = true !== t ? m.labelContainer : m.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: s()(a, i),
    children: [true !== t && (0, r.jsxs)("div", {
      className: s()(m.inline, m.inlineBoost),
      children: [(0, r.jsx)(l.$Eu, {
        size: "sm",
        color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(l.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: p.intl.formatToPlainString(p.t.t2Wbo6, {
          required: t,
          decorator: null != n ? n : ""
        })
      })]
    }), (null == o ? true : o.type) === "expiring" && (0, r.jsx)(g, {
      dateString: o.expiringAt
    }), (null == o ? true : o.type) === "removing" && (0, r.jsx)(v, {
      removingAt: o.removingAt
    }), (null == o ? true : o.type) === "active" && (0, r.jsx)(f, {
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
        children: (0, r.jsx)(l.X6q, {
          color: n,
          variant: "heading-md/bold",
          children: t
        })
      }), o]
    }), i]
  })
}
let b = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    label: o,
    isActive: i,
    isWarning: c,
    badge: u,
    canRollback: d,
    onClick: f,
    onMouseOver: g,
    onMouseLeave: v,
    children: _
  } = e;
  return (0, r.jsx)("div", {
    className: s()(m.parentContainer, {
      [m.rollbackInactive]: d && !i
    }),
    ref: t,
    children: (0, r.jsxs)(l.kL8, {
      "aria-label": o,
      onClick: f,
      onMouseOver: g,
      onMouseLeave: v,
      className: s()(m.container, {
        [m.active]: i,
        [m.warning]: c || d && i
      }, n),
      children: [_, "new" === u && (0, r.jsx)(l.IGR, {
        className: m.new,
        text: p.intl.string(p.t.y2b7CA)
      }), "beta" === u && (0, r.jsx)(l.IGR, {
        className: m.new,
        text: p.intl.string(p.t.oW0eUV),
        color: a.Z.BG_BRAND
      })]
    })
  })
})