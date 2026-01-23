/** Chunk was on 78870 **/
/** chunk id: 812136, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk289397 = require("./289397.js"),
  Chunk976860 = require("./976860.js"),
  Chunk491026 = require("./491026.js"),
  Chunk381969 = require("./381969.jsx"),
  Chunk920814 = require("./920814.js"),
  Chunk305015 = require("./305015.jsx"),
  Chunk131242 = require("./131242.jsx"),
  Chunk324269 = require("./324269.jsx"),
  Chunk634654 = require("./634654.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk227090 = require("./227090.js");

function v(e) {
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
  return (0, n.jsxs)(c.sqX, {
    onClick: s ? true : a,
    "aria-disabled": s,
    className: o()(m.Mf, {
      [m.wH]: l,
      [m.ac]: s,
      [m.VH]: !l && null != d
    }),
    "aria-label": r,
    children: [(0, n.jsx)("div", {
      className: m.zc,
      children: t
    }), (0, n.jsx)(c.hKd, {
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
    }), u && (0, n.jsx)(c.LpS, {
      color: c.LU0.unsafe_rawColors.BRAND_260.css,
      className: m.Ad,
      text: x.intl.string(x.t.y2b7CA)
    }), null != d && (0, n.jsx)(c.DUT, {
      className: m.EP,
      onClick: d,
      "aria-label": x.intl.string(x.t.WAI6xu),
      children: (0, n.jsx)(c.aXh, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}

function _(e) {
  let {
    guild: t
  } = e, r = (0, p.YZ)(t.id, "guild_shop_category_selector"), {
    selectedTab: i,
    setSelectedTab: o,
    categoryTabs: _,
    handlePreviewDismiss: w
  } = (0, f.k)(), P = "false" === s.w.get(g.Db, "false"), L = (0, l.bG)([a.A], () => a.A.useReducedMotion), I = _.map(e => {
    switch (e) {
      case C.B.GUILD_PRODUCTS:
        return (0, n.jsx)(v, {
          icon: (0, n.jsx)(b.A, {
            width: 20,
            height: 20
          }),
          title: x.intl.string(x.t.odvTUp),
          body: x.intl.string(x.t["0JFpRW"]),
          selected: i === C.B.GUILD_PRODUCTS,
          onClick: () => o(C.B.GUILD_PRODUCTS)
        }, e);
      case C.B.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, n.jsx)(v, {
          icon: (0, n.jsx)(j.A, {
            width: 20,
            height: 20
          }),
          title: x.intl.string(x.t["KzCF/6"]),
          body: r ? x.intl.string(x.t["jqz+ly"]) : x.intl.format(x.t.ycs4oO, {
            openRoleSubPage: () => (0, u.pX)(h.BVt.CHANNEL(t.id, y.VV.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !r,
          selected: i === C.B.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => o(C.B.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case C.B.GUILD_PRODUCTS_PREVIEW:
        return (0, n.jsx)(v, {
          icon: P ? (0, n.jsx)("img", {
            src: L ? (0, d.n)("server_products/storefront/question-mark.png") : (0, d.n)("server_products/storefront/question-mark.gif"),
            className: m.kz,
            alt: ""
          }) : (0, n.jsx)(c.okO, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }),
          title: x.intl.string(x.t.odvTUp),
          body: x.intl.string(x.t["827i8I"]),
          selected: i === C.B.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            o(C.B.GUILD_PRODUCTS_PREVIEW), s.w.set(g.Db, "true")
          },
          onPreviewDismiss: w,
          isNew: P
        }, e);
      default:
        return null
    }
  });
  return (0, n.jsxs)("div", {
    className: m.kL,
    children: [(0, n.jsx)(c.Heading, {
      variant: "heading-sm/bold",
      className: m.wx,
      children: x.intl.string(x.t.GF433I)
    }), (0, n.jsx)(c.hKd, {
      size: 12
    }), (0, n.jsxs)("div", {
      className: m.uW,
      children: [(0, n.jsx)("div", {
        className: m.vR,
        children: I
      }), i === C.B.GUILD_PRODUCTS && (0, n.jsx)(O.A, {})]
    })]
  })
}