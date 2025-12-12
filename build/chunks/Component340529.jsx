/** Chunk was on 78431 **/
/** chunk id: 340529, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk357352 = require("./357352.js"),
  Chunk703656 = require("./703656.js"),
  Chunk652515 = require("./652515.js"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk307537 = require("./307537.jsx"),
  Chunk987513 = require("./987513.jsx"),
  Chunk895737 = require("./895737.jsx"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754540 = require("./754540.js");

function y(e) {
  let {
    icon: t,
    title: r,
    body: i,
    selected: l,
    disabled: s = false,
    onClick: a,
    onPreviewDismiss: d,
    isNew: u = false
  } = e;
  return (0, n.jsxs)(c.kL8, {
    onClick: s ? true : a,
    "aria-disabled": s,
    className: o()(v.tab, {
      [v.selected]: l,
      [v.tabDisabled]: s,
      [v.preview]: !l && null != d
    }),
    "aria-label": r,
    children: [(0, n.jsx)("div", {
      className: v.iconContainer,
      children: t
    }), (0, n.jsx)(c.LZC, {
      size: 8,
      horizontal: true
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: l ? "always-white" : "text-strong",
        children: r
      }), (0, n.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: l ? "always-white" : s ? "text-muted" : "text-strong",
        children: i
      })]
    }), u && (0, n.jsx)(c.IGR, {
      color: c.TVs.unsafe_rawColors.BRAND_260.css,
      className: v.newBadge,
      text: m.intl.string(m.t.y2b7CA)
    }), null != d && (0, n.jsx)(c.P3F, {
      className: v.tabPreviewClose,
      onClick: d,
      "aria-label": m.intl.string(m.t.WAI6xu),
      children: (0, n.jsx)(c.k$p, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}

function _(e) {
  let {
    guild: t
  } = e, r = (0, C.RF)(t.id, "guild_shop_category_selector"), {
    selectedTab: i,
    setSelectedTab: o,
    categoryTabs: _,
    handlePreviewDismiss: w
  } = (0, p.m)(), P = "false" === s.K.get(O.Hr, "false"), L = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), S = _.map(e => {
    switch (e) {
      case f.y.GUILD_PRODUCTS:
        return (0, n.jsx)(y, {
          icon: (0, n.jsx)(b.Z, {
            width: 20,
            height: 20
          }),
          title: m.intl.string(m.t.odvTUp),
          body: m.intl.string(m.t["0JFpRW"]),
          selected: i === f.y.GUILD_PRODUCTS,
          onClick: () => o(f.y.GUILD_PRODUCTS)
        }, e);
      case f.y.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, n.jsx)(y, {
          icon: (0, n.jsx)(j.Z, {
            width: 20,
            height: 20
          }),
          title: m.intl.string(m.t["KzCF/6"]),
          body: r ? m.intl.string(m.t["jqz+ly"]) : m.intl.format(m.t.ycs4oO, {
            openRoleSubPage: () => (0, u.uL)(h.Z5c.CHANNEL(t.id, x.oC.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !r,
          selected: i === f.y.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => o(f.y.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case f.y.GUILD_PRODUCTS_PREVIEW:
        return (0, n.jsx)(y, {
          icon: P ? (0, n.jsx)("img", {
            src: L ? (0, d.b)("server_products/storefront/question-mark.png") : (0, d.b)("server_products/storefront/question-mark.gif"),
            className: v.questionMark,
            alt: ""
          }) : (0, n.jsx)(c.OgN, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }),
          title: m.intl.string(m.t.odvTUp),
          body: m.intl.string(m.t["827i8I"]),
          selected: i === f.y.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            o(f.y.GUILD_PRODUCTS_PREVIEW), s.K.set(O.Hr, "true")
          },
          onPreviewDismiss: w,
          isNew: P
        }, e);
      default:
        return null
    }
  });
  return (0, n.jsxs)("div", {
    className: v.container,
    children: [(0, n.jsx)(c.Heading, {
      variant: "heading-sm/bold",
      className: v.header,
      children: m.intl.string(m.t.GF433I)
    }), (0, n.jsx)(c.LZC, {
      size: 12
    }), (0, n.jsxs)("div", {
      className: v.filters,
      children: [(0, n.jsx)("div", {
        className: v.tabs,
        children: S
      }), i === f.y.GUILD_PRODUCTS && (0, n.jsx)(g.Z, {})]
    })]
  })
}