/** Chunk was on 62934 **/
/** chunk id: 838968, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N4: () => v,
  P2: () => g,
  Q9: () => j,
  aB: () => p,
  c: () => b,
  rL: () => f,
  uf: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138545 = require("./138545.js");

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
      children: u.intl.formatToMarkdownString(d.default["ol/ao/"], {
        dateString: (0, o.Z)(n)
      })
    })]
  })
}

function b(e) {
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
      children: u.intl.formatToPlainString(d.default["6e2ry1"], {
        dateString: (0, c.Z)(n)
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
  } = e, o = true !== n ? m.labelContainer : m.labelContainerEnd;
  return (0, a.jsxs)("div", {
    className: l()(o, i),
    children: [true !== n && (0, a.jsxs)("div", {
      className: l()(m.inline, m.inlineBoost),
      children: [(0, a.jsx)(s.Ucv, {
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, a.jsx)(s.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-subtle",
        children: u.intl.formatToPlainString(u.t.t2Wbo1, {
          required: n,
          decorator: null != t ? t : ""
        })
      })]
    }), (null == r ? true : r.type) === "expiring" && (0, a.jsx)(f, {
      dateString: r.expiringAt
    }), (null == r ? true : r.type) === "removing" && (0, a.jsx)(b, {
      removingAt: r.removingAt
    }), (null == r ? true : r.type) === "active" && (0, a.jsx)(g, {
      text: r.statusText
    })]
  })
}

function v(e) {
  let {
    children: n
  } = e;
  return (0, a.jsx)("div", {
    className: m.buttonContainer,
    children: n
  })
}

function j(e) {
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
        children: (0, a.jsx)(s.Heading, {
          color: t,
          variant: "heading-md/bold",
          children: n
        })
      }), r]
    }), i]
  })
}
let p = Chunk473749.forwardRef(function(e, n) {
  let {
    className: t,
    label: r,
    isActive: i,
    isWarning: o,
    badge: c,
    canRollback: d,
    onClick: g,
    onMouseOver: f,
    onMouseLeave: b,
    children: x
  } = e;
  return (0, a.jsx)("div", {
    className: l()(m.parentContainer, {
      [m.rollbackInactive]: d && !i
    }),
    ref: n,
    children: (0, a.jsxs)(s.kL8, {
      "aria-label": r,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: b,
      className: l()(m.container, {
        [m.active]: i,
        [m.warning]: o || d && i
      }, t),
      children: [x, "new" === c && (0, a.jsx)(s.IGR, {
        className: m.new,
        text: u.intl.string(u.t.y2b7CA)
      }), "beta" === c && (0, a.jsx)(s.IGR, {
        className: m.new,
        text: u.intl.string(u.t.oW0eUd),
        color: s.TVs.colors.BACKGROUND_BRAND.css
      })]
    })
  })
})