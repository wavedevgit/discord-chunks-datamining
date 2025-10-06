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
  o = require.n(Chunk120356),
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
  return (0, r.jsxs)("div", {
    className: b.inline,
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
    className: b.inline,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: m.intl.formatToMarkdownString(u.default["ol/ao6"], {
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
    className: b.rollbackInline,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: m.intl.formatToPlainString(u.default["6e2ry8"], {
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
  } = e, l = true !== n ? b.labelContainer : b.labelContainerEnd;
  return (0, r.jsxs)("div", {
    className: o()(l, i),
    children: [true !== n && (0, r.jsxs)("div", {
      className: o()(b.inline, b.inlineBoost),
      children: [(0, r.jsx)(s.$Eu, {
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(s.Text, {
        className: b.price,
        tag: "div",
        variant: "heading-md/semibold",
        color: "text-secondary",
        children: m.intl.formatToPlainString(m.t.t2Wbo6, {
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
    className: b.buttonContainer,
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
    className: b.contentContainer,
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: b.headerContainer,
        children: (0, r.jsx)(s.X6q, {
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
    className: o()(b.parentContainer, {
      [b.rollbackInactive]: u && !i
    }),
    ref: n,
    children: (0, r.jsxs)(s.kL8, {
      "aria-label": a,
      onClick: g,
      onMouseOver: f,
      onMouseLeave: x,
      className: o()(b.container, {
        [b.active]: i,
        [b.warning]: c || u && i
      }, t),
      children: [p, "new" === d && (0, r.jsx)(s.IGR, {
        className: b.new,
        text: m.intl.string(m.t.y2b7CA)
      }), "beta" === d && (0, r.jsx)(s.IGR, {
        className: b.new,
        text: m.intl.string(m.t.oW0eUV),
        color: l.Z.BG_BRAND
      })]
    })
  })
})