/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  h: () => m
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(496675),
  c = n(63063),
  d = n(384632),
  u = n(981631),
  g = n(388032),
  f = n(987708);

function m(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: s
  } = e, m = s.hasFeature(u.oNc.COMMUNITY), p = (0, l.e7)([A.Z], () => A.Z.can(u.Plq.ADMINISTRATOR, s)), h = i.useMemo(() => {
    let e = t === d.A.DISCOVERABLE && !p,
      n = m && (t === d.A.DISCOVERABLE || p);
    return [{
      id: d.A.INVITE,
      title: g.NW.string(g.t["HQVS/P"]),
      body: g.NW.string(g.t.KzXzFR),
      icon: o.mBM,
      enabled: !e,
      ineligibleText: g.NW.string(g.t.LIZgwM)
    }, {
      id: d.A.APPLY,
      title: g.NW.string(g.t.LrFEYW),
      body: g.NW.string(g.t.kJj2oK),
      icon: o._XJ,
      enabled: !e,
      ineligibleText: g.NW.string(g.t.LIZgwM)
    }, {
      id: d.A.DISCOVERABLE,
      title: g.NW.string(g.t.lhOHLy),
      body: g.NW.string(g.t.pqQylZ),
      icon: o.enf,
      enabled: n,
      ineligibleText: m ? g.NW.string(g.t.iBpXPj) : g.NW.string(g.t["5TQ+eH"])
    }]
  }, [t, m, p]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.X6q, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: g.NW.string(g.t["N+GnPz"])
    }), (0, r.jsx)(o.Text, {
      color: "text-secondary",
      variant: "text-sm/medium",
      className: f.bodyText,
      children: g.NW.format(g.t["Y/jYws"], {
        helpdeskArticle: c.Z.getArticleURL(u.BhN.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(o.njP, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: f.joinOptions,
      children: h.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(o.njP.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: !0,
          className: f.joinOptionTab,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.DY3, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: !1,
            className: f.tooltipContainer,
            tooltipClassName: f.tooltip,
            children: (0, r.jsxs)("div", {
              className: a()(f.joinOptionContent, {
                [f.active]: n,
                [f.uninteractive]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.TEXT_MUTED
              }), (0, r.jsx)(o.Text, {
                tag: "strong",
                color: n ? "interactive-active" : "text-muted",
                variant: "text-md/semibold",
                children: e.title
              }), (0, r.jsx)(o.Text, {
                tag: "span",
                color: n ? "interactive-active" : "text-muted",
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