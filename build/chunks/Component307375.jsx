/** Chunk was on 9536 **/
/** chunk id: 307375, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => b
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
  Chunk640940 = require("./640940.js");

function b(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, b = l.features.has(m.GuildFeatures.COMMUNITY), h = (0, s.e7)([d.Z], () => d.Z.can(m.Plq.ADMINISTRATOR, l)), x = i.useMemo(() => {
    let e = t === g.A.DISCOVERABLE && !h,
      n = b && (t === g.A.DISCOVERABLE || h);
    return [{
      id: g.A.INVITE,
      title: f.intl.string(f.t["HQVS/L"]),
      body: f.intl.string(f.t.KzXzFa),
      icon: c.mBM,
      enabled: !e,
      ineligibleText: f.intl.string(f.t.LIZgwJ)
    }, {
      id: g.A.APPLY,
      title: f.intl.string(f.t.LrFEYW),
      body: f.intl.string(f.t.kJj2oG),
      icon: c._XJ,
      enabled: !e,
      ineligibleText: f.intl.string(f.t.LIZgwJ)
    }, {
      id: g.A.DISCOVERABLE,
      title: f.intl.string(f.t.lhOHL3),
      body: f.intl.string(f.t.pqQylS),
      icon: c.enf,
      enabled: n,
      ineligibleText: b ? f.intl.string(f.t.iBpXPg) : f.intl.string(f.t["5TQ+eE"])
    }]
  }, [t, b, h]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: f.intl.string(f.t["N+GnP2"])
    }), (0, r.jsx)(c.Text, {
      color: "text-subtle",
      variant: "text-sm/medium",
      className: p.bodyText,
      children: f.intl.format(f.t["Y/jYwu"], {
        helpdeskArticle: u.Z.getArticleURL(m.BhN.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(c.njP, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: p.joinOptions,
      children: x.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(c.njP.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: p.joinOptionTab,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.u, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            children: (0, r.jsxs)("div", {
              className: a()(p.joinOptionContent, {
                [p.active]: n,
                [p.uninteractive]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? c.TVs.colors.INTERACTIVE_TEXT_ACTIVE : c.TVs.colors.INTERACTIVE_TEXT_DEFAULT
              }), (0, r.jsx)(c.Text, {
                tag: "strong",
                color: n ? "interactive-text-active" : "interactive-text-default",
                variant: "text-md/semibold",
                children: e.title
              }), (0, r.jsx)(c.Text, {
                tag: "span",
                color: n ? "interactive-text-active" : "interactive-text-default",
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