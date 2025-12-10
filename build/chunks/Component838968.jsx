/** Chunk was on 62934 **/
/** chunk id: 838968, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N4: () => _,
  P2: () => g,
  Q9: () => b,
  aB: () => j,
  c: () => x,
  rL: () => f,
  uf: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk810878 = require("./810878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js");

function g(e) {
  let {
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.inline,
    children: [(0, r.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.STATUS_POSITIVE
    }), (0, r.jsx)(s.Text, {
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
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: u.intl.formatToMarkdownString(d.default["ol/ao/"], {
        dateString: (0, o.Z)(n)
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
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: u.intl.formatToPlainString(d.default["6e2ry1"], {
        dateString: (0, c.Z)(n)
      })
    })]
  })
}

function v(e) {
  let {
    cost: n,
    costDecorator: t,
    status: a,
    className: i
  } = e, o = true !== n ? m.labelContainer : m.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: l()(o, i),
    children: [true !== n && (0, r.jsxs)("div", {
      className: l()(m.inline, m.inlineBoost),
      children: [(0, r.jsx)(s.Ucv, {
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(s.Text, {
        className: m.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-subtle",
        children: u.intl.formatToPlainString(u.t.t2Wbo1, {
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

function _(e) {
  let {
    children: n
  } = e;
  return (0, r.jsx)("div", {
    className: m.buttonContainer,
    children: n
  })
}

function b(e) {
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
        children: (0, r.jsx)(s.Heading, {
          color: t,
          variant: "heading-md/bold",
          children: n
        })
      }), a]
    }), i]
  })
}
let j = Chunk473749.forwardRef(function(e, n) {
  let {
    className: t,
    label: a,
    isActive: i,
    isWarning: o,
    badge: c,
    canRollback: d,
    onClick: g,
    onMouseOver: f,
    onMouseLeave: x,
    children: v
  } = e;
  return (0, r.jsx)("div", {
    className: l()(m.parentContainer, {
      [m.rollbackInactive]: d && !i
    }),
    ref: n,
    children: (0, r.jsxs)(s.kL8, {
      "aria-label": a,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: x,
      className: l()(m.container, {
        [m.active]: i,
        [m.warning]: o || d && i
      }, t),
      children: [v, "new" === c && (0, r.jsx)(s.IGR, {
        className: m.new,
        text: u.intl.string(u.t.y2b7CA)
      }), "beta" === c && (0, r.jsx)(s.IGR, {
        className: m.new,
        text: u.intl.string(u.t.oW0eUd),
        color: s.TVs.colors.BACKGROUND_BRAND.css
      })]
    })
  })
})