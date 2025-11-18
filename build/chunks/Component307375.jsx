/** Chunk was on 32923 **/
/** chunk id: 307375, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk63063 = require("./63063.js"),
  Chunk384632 = require("./384632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189114 = require("./189114.js");

function h(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, h = l.features.has(m.GuildFeatures.COMMUNITY), b = (0, s.e7)([d.Z], () => d.Z.can(m.Plq.ADMINISTRATOR, l)), x = i.useMemo(() => {
    let e = t === g.A.DISCOVERABLE && !b,
      n = h && (t === g.A.DISCOVERABLE || b);
    return [{
      id: g.A.INVITE,
      title: p.intl.string(p.t["HQVS/L"]),
      body: p.intl.string(p.t.KzXzFa),
      icon: c.mBM,
      enabled: !e,
      ineligibleText: p.intl.string(p.t.LIZgwJ)
    }, {
      id: g.A.APPLY,
      title: p.intl.string(p.t.LrFEYW),
      body: p.intl.string(p.t.kJj2oG),
      icon: c._XJ,
      enabled: !e,
      ineligibleText: p.intl.string(p.t.LIZgwJ)
    }, {
      id: g.A.DISCOVERABLE,
      title: p.intl.string(p.t.lhOHL3),
      body: p.intl.string(p.t.pqQylS),
      icon: c.enf,
      enabled: n,
      ineligibleText: h ? p.intl.string(p.t.iBpXPg) : p.intl.string(p.t["5TQ+eE"])
    }]
  }, [t, h, b]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: p.intl.string(p.t["N+GnP2"])
    }), (0, r.jsx)(c.Text, {
      color: "text-secondary",
      variant: "text-sm/medium",
      className: f.bodyText,
      children: p.intl.format(p.t["Y/jYwu"], {
        helpdeskArticle: u.Z.getArticleURL(m.BhN.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(c.njP, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: f.joinOptions,
      children: x.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(c.njP.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: f.joinOptionTab,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.u, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            children: (0, r.jsxs)("div", {
              className: a()(f.joinOptionContent, {
                [f.active]: n,
                [f.uninteractive]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_NORMAL
              }), (0, r.jsx)(c.Text, {
                tag: "strong",
                color: n ? "interactive-active" : "interactive-normal",
                variant: "text-md/semibold",
                children: e.title
              }), (0, r.jsx)(c.Text, {
                tag: "span",
                color: n ? "interactive-active" : "interactive-normal",
                variant: "text-xs/medium",
                children: e.body
              })]
            })
          })
        }, e.id)
      })
    })]
  })
}