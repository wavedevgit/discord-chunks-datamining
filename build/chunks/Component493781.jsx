/** Chunk was on 47841 **/
/** chunk id: 493781, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk975571 = require("./975571.js"),
  Chunk894222 = require("./894222.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk662413 = require("./662413.js");

function b(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, b = l.features.has(m.GuildFeatures.COMMUNITY), h = (0, a.bG)([d.A], () => d.A.can(m.xBc.ADMINISTRATOR, l)), x = i.useMemo(() => {
    let e = t === g.J.DISCOVERABLE && !h,
      n = b && (t === g.J.DISCOVERABLE || h);
    return [{
      id: g.J.INVITE,
      title: p.intl.string(p.t["HQVS/L"]),
      body: p.intl.string(p.t.KzXzFa),
      icon: c.XAi,
      enabled: !e,
      ineligibleText: p.intl.string(p.t.LIZgwJ)
    }, {
      id: g.J.APPLY,
      title: p.intl.string(p.t.LrFEYW),
      body: p.intl.string(p.t.kJj2oG),
      icon: c.u6c,
      enabled: !e,
      ineligibleText: p.intl.string(p.t.LIZgwJ)
    }, {
      id: g.J.DISCOVERABLE,
      title: p.intl.string(p.t.lhOHL3),
      body: p.intl.string(p.t.pqQylS),
      icon: c.L_e,
      enabled: n,
      ineligibleText: b ? p.intl.string(p.t.iBpXPg) : p.intl.string(p.t["5TQ+eE"])
    }]
  }, [t, b, h]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      color: "text-strong",
      variant: "text-md/semibold",
      children: p.intl.string(p.t["N+GnP2"])
    }), (0, r.jsx)(c.Text, {
      color: "text-subtle",
      variant: "text-sm/medium",
      className: f.G3,
      children: p.intl.format(p.t["Y/jYwu"], {
        helpdeskArticle: u.A.getArticleURL(m.MVz.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(c.VQ0, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: f.Hd,
      children: x.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(c.VQ0.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: f.dZ,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(o.m_, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            children: (0, r.jsxs)("div", {
              className: s()(f.jn, {
                [f.vu]: n,
                [f.A_]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.INTERACTIVE_TEXT_DEFAULT
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