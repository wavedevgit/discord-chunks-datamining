/** Chunk was on 64982 **/
/** chunk id: 307375, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk63063 = require("./63063.js"),
  Chunk384632 = require("./384632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140367 = require("./140367.js");

function f(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, f = l.features.has(g.oNc.COMMUNITY), h = (0, s.e7)([c.Z], () => c.Z.can(g.Plq.ADMINISTRATOR, l)), b = i.useMemo(() => {
    let e = t === u.A.DISCOVERABLE && !h,
      n = f && (t === u.A.DISCOVERABLE || h);
    return [{
      id: u.A.INVITE,
      title: m.intl.string(m.t["HQVS/P"]),
      body: m.intl.string(m.t.KzXzFR),
      icon: o.mBM,
      enabled: !e,
      ineligibleText: m.intl.string(m.t.LIZgwM)
    }, {
      id: u.A.APPLY,
      title: m.intl.string(m.t.LrFEYW),
      body: m.intl.string(m.t.kJj2oK),
      icon: o._XJ,
      enabled: !e,
      ineligibleText: m.intl.string(m.t.LIZgwM)
    }, {
      id: u.A.DISCOVERABLE,
      title: m.intl.string(m.t.lhOHLy),
      body: m.intl.string(m.t.pqQylZ),
      icon: o.enf,
      enabled: n,
      ineligibleText: f ? m.intl.string(m.t.iBpXPj) : m.intl.string(m.t["5TQ+eH"])
    }]
  }, [t, f, h]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: m.intl.string(m.t["N+GnPz"])
    }), (0, r.jsx)(o.Text, {
      color: "text-secondary",
      variant: "text-sm/medium",
      className: p.bodyText,
      children: m.intl.format(m.t["Y/jYws"], {
        helpdeskArticle: d.Z.getArticleURL(g.BhN.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(o.njP, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: p.joinOptions,
      children: b.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(o.njP.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: p.joinOptionTab,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.jSM, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            className: p.tooltipContainer,
            tooltipClassName: p.tooltip,
            children: (0, r.jsxs)("div", {
              className: a()(p.joinOptionContent, {
                [p.active]: n,
                [p.uninteractive]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
              }), (0, r.jsx)(o.Text, {
                tag: "strong",
                color: n ? "interactive-active" : "interactive-normal",
                variant: "text-md/semibold",
                children: e.title
              }), (0, r.jsx)(o.Text, {
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