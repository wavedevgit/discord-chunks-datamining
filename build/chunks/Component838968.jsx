/** Chunk was on 85683 **/
/** chunk id: 838968, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N4: () => j,
  P2: () => g,
  Q9: () => v,
  aB: () => _,
  c: () => p,
  rL: () => f,
  uf: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470039 = require("./470039.js");

function g(e) {
  let {
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.inline,
    children: [(0, a.jsx)(o.owK, {
      size: "xs",
      color: o.TVs.colors.STATUS_POSITIVE
    }), (0, a.jsx)(o.Text, {
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
    children: [(0, a.jsx)(o.Mgn, {
      size: "xs",
      color: o.TVs.colors.STATUS_WARNING
    }), (0, a.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: b.intl.formatToMarkdownString(u.default["ol/ao6"], {
        dateString: (0, l.Z)(n)
      })
    })]
  })
}

function p(e) {
  let {
    removingAt: n
  } = e;
  return (0, a.jsxs)("div", {
    className: m.rollbackInline,
    children: [(0, a.jsx)(o.Mgn, {
      size: "xs",
      color: o.TVs.colors.STATUS_WARNING
    }), (0, a.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: b.intl.formatToPlainString(u.default["6e2ry8"], {
        dateString: (0, d.Z)(n)
      })
    })]
  })
}

function x(e) {
  let {
    cost: n,
    costDecorator: t,
    status: r,
    className: i
  } = e, c = true !== n ? m.labelContainer : m.labelContainerEnd;
  return (0, a.jsxs)("div", {
    className: s()(c, i),
    children: [true !== n && (0, a.jsxs)("div", {
      className: s()(m.inline, m.inlineBoost),
      children: [(0, a.jsx)(o.$Eu, {
        size: "sm",
        color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, a.jsx)(o.Text, {
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
    }), (null == r ? true : r.type) === "removing" && (0, a.jsx)(p, {
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
        children: (0, a.jsx)(o.X6q, {
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
    onMouseLeave: p,
    children: x
  } = e;
  return (0, a.jsx)("div", {
    className: s()(m.parentContainer, {
      [m.rollbackInactive]: u && !i
    }),
    ref: n,
    children: (0, a.jsxs)(o.kL8, {
      "aria-label": r,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: p,
      className: s()(m.container, {
        [m.active]: i,
        [m.warning]: l || u && i
      }, t),
      children: [x, "new" === d && (0, a.jsx)(o.IGR, {
        className: m.new,
        text: b.intl.string(b.t.y2b7CA)
      }), "beta" === d && (0, a.jsx)(o.IGR, {
        className: m.new,
        text: b.intl.string(b.t.oW0eUV),
        color: c.Z.BG_BRAND
      })]
    })
  })
})