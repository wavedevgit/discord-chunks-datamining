/** Chunk was on 78431 **/
/** chunk id: 340529, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk357352 = require("./357352.js"),
  Chunk703656 = require("./703656.js"),
  Chunk652515 = require("./652515.js"),
  Chunk847033 = require("./847033.js"),
  Chunk544978 = require("./544978.js"),
  Chunk307537 = require("./307537.jsx"),
  Chunk987513 = require("./987513.js"),
  Chunk895737 = require("./895737.js"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.js"),
  Chunk953007 = require("./953007.js");

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
  return <c.kL8 onClick={s ? true : a} aria-disabled={s} className={o()(v.tab, {
      [v.selected]: l,
      [v.tabDisabled]: s,
      [v.preview]: !l && null != d
    })} aria-label={r}>{<div className={v.iconContainer}>{t}</div>}{<c.LZC size={8} horizontal={true} />}{<div>{<c.Text variant={"text-sm/semibold"} color={l ? "always-white" : "header-primary"}>{r}</c.Text>}{<c.Text variant={"text-xs/normal"} color={l ? "always-white" : s ? "text-muted" : "header-primary"}>{i}</c.Text>}</div>}{u && <c.IGR color={c.TVs.unsafe_rawColors.BRAND_260.css} className={v.newBadge} text={O.intl.string(O.t.y2b7CA)} />}{null != d && <c.P3F className={v.tabPreviewClose} onClick={d} aria-label={O.intl.string(O.t.WAI6xs)}><c.k$p size={"xs"} color={"currentColor"} /></c.P3F>}</c.kL8>
}

function _(e) {
  let {
    guild: t
  } = e, r = (0, C.RF)(t.id, "guild_shop_category_selector"), {
    selectedTab: i,
    setSelectedTab: o,
    categoryTabs: _,
    handlePreviewDismiss: w
  } = (0, p.m)(), P = "false" === s.K.get(h.Hr, "false"), S = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), L = _.map(e => {
    switch (e) {
      case f.y.GUILD_PRODUCTS:
        return <y icon={(0, n.jsx)(b.Z, {
            width: 20,
            height: 20
          })} title={O.intl.string(O.t.odvTUl)} body={O.intl.string(O.t["0JFpRU"])} selected={i === f.y.GUILD_PRODUCTS} onClick={() => o(f.y.GUILD_PRODUCTS)} />;
      case f.y.GUILD_ROLE_SUBSCRIPTIONS:
        return <y icon={(0, n.jsx)(j.Z, {
            width: 20,
            height: 20
          })} title={O.intl.string(O.t["KzCF//"])} body={r ? O.intl.string(O.t["jqz+l5"]) : O.intl.format(O.t.ycs4oK, {
            openRoleSubPage: () => (0, u.uL)(m.Z5c.CHANNEL(t.id, x.oC.ROLE_SUBSCRIPTIONS))
          })} disabled={!r} selected={i === f.y.GUILD_ROLE_SUBSCRIPTIONS} onClick={() => o(f.y.GUILD_ROLE_SUBSCRIPTIONS)} />;
      case f.y.GUILD_PRODUCTS_PREVIEW:
        return <y icon={P ? (0, n.jsx)("img", {
            src: S ? (0, d.b)("server_products/storefront/question-mark.png") : (0, d.b)("server_products/storefront/question-mark.gif"),
            className: v.questionMark,
            alt: ""
          }) : (0, n.jsx)(c.OgN, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          })} title={O.intl.string(O.t.odvTUl)} body={O.intl.string(O.t["827i8P"])} selected={i === f.y.GUILD_PRODUCTS_PREVIEW} onClick={() => {
            o(f.y.GUILD_PRODUCTS_PREVIEW), s.K.set(h.Hr, "true")
          }} onPreviewDismiss={w} isNew={P} />;
      default:
        return null
    }
  });
  return <div className={v.container}>{<c.X6q variant={"heading-sm/bold"} className={v.header}>{O.intl.string(O.t.GF433N)}</c.X6q>}{<c.LZC size={12} />}{<div className={v.filters}>{<div className={v.tabs}>{L}</div>}{i === f.y.GUILD_PRODUCTS && <g.Z />}</div>}</div>
}