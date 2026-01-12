/** Chunk was on 9536 **/
/** chunk id: 307375, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => p
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

function p(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, p = l.features.has(f.GuildFeatures.COMMUNITY), h = (0, s.e7)([d.Z], () => d.Z.can(f.Plq.ADMINISTRATOR, l)), x = i.useMemo(() => {
    let e = t === g.A.DISCOVERABLE && !h,
      n = p && (t === g.A.DISCOVERABLE || h);
    return [{
      id: g.A.INVITE,
      title: m.intl.string(m.t["HQVS/L"]),
      body: m.intl.string(m.t.KzXzFa),
      icon: c.mBM,
      enabled: !e,
      ineligibleText: m.intl.string(m.t.LIZgwJ)
    }, {
      id: g.A.APPLY,
      title: m.intl.string(m.t.LrFEYW),
      body: m.intl.string(m.t.kJj2oG),
      icon: c._XJ,
      enabled: !e,
      ineligibleText: m.intl.string(m.t.LIZgwJ)
    }, {
      id: g.A.DISCOVERABLE,
      title: m.intl.string(m.t.lhOHL3),
      body: m.intl.string(m.t.pqQylS),
      icon: c.enf,
      enabled: n,
      ineligibleText: p ? m.intl.string(m.t.iBpXPg) : m.intl.string(m.t["5TQ+eE"])
    }]
  }, [t, p, h]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      color: "text-strong",
      variant: "text-md/semibold",
      children: m.intl.string(m.t["N+GnP2"])
    }), (0, r.jsx)(c.Text, {
      color: "text-subtle",
      variant: "text-sm/medium",
      className: b.bodyText,
      children: m.intl.format(m.t["Y/jYwu"], {
        helpdeskArticle: u.Z.getArticleURL(f.BhN.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(c.njP, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: b.joinOptions,
      children: x.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(c.njP.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: b.joinOptionTab,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.u, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            children: (0, r.jsxs)("div", {
              className: a()(b.joinOptionContent, {
                [b.active]: n,
                [b.uninteractive]: !e.enabled
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