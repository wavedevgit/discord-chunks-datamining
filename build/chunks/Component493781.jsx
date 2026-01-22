/** Chunk was on 47841 **/
/** chunk id: 493781, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => p
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

function p(e) {
  let {
    activeType: t,
    onTypePicked: n,
    guild: l
  } = e, p = l.features.has(g.GuildFeatures.COMMUNITY), x = (0, a.bG)([d.A], () => d.A.can(g.xBc.ADMINISTRATOR, l)), h = i.useMemo(() => {
    let e = t === f.J.DISCOVERABLE && !x,
      n = p && (t === f.J.DISCOVERABLE || x);
    return [{
      id: f.J.INVITE,
      title: b.intl.string(b.t["HQVS/L"]),
      body: b.intl.string(b.t.KzXzFa),
      icon: o.XAi,
      enabled: !e,
      ineligibleText: b.intl.string(b.t.LIZgwJ)
    }, {
      id: f.J.APPLY,
      title: b.intl.string(b.t.LrFEYW),
      body: b.intl.string(b.t.kJj2oG),
      icon: o.u6c,
      enabled: !e,
      ineligibleText: b.intl.string(b.t.LIZgwJ)
    }, {
      id: f.J.DISCOVERABLE,
      title: b.intl.string(b.t.lhOHL3),
      body: b.intl.string(b.t.pqQylS),
      icon: o.L_e,
      enabled: n,
      ineligibleText: p ? b.intl.string(b.t.iBpXPg) : b.intl.string(b.t["5TQ+eE"])
    }]
  }, [t, p, x]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      color: "text-strong",
      variant: "text-md/semibold",
      children: b.intl.string(b.t["N+GnP2"])
    }), (0, r.jsx)(o.Text, {
      color: "text-subtle",
      variant: "text-sm/medium",
      className: m.G3,
      children: b.intl.format(b.t["Y/jYwu"], {
        helpdeskArticle: u.A.getArticleURL(g.MVz.MEMBER_APPLICATIONS)
      })
    }), (0, r.jsx)(o.VQ0, {
      selectedItem: t,
      onItemSelect: n,
      orientation: "horizontal",
      className: m.Hd,
      children: h.map(e => {
        let n = e.id === t;
        return (0, r.jsx)(o.VQ0.Item, {
          id: e.id,
          selectedItem: t,
          disableItemStyles: true,
          className: m.dZ,
          disabled: !e.enabled,
          "aria-label": e.title,
          children: (0, r.jsx)(c.m_, {
            text: e.ineligibleText,
            position: "bottom",
            shouldShow: !e.enabled,
            spacing: 16,
            hideOnClick: false,
            children: (0, r.jsxs)("div", {
              className: s()(m.jn, {
                [m.vu]: n,
                [m.A_]: !e.enabled
              }),
              children: [(0, r.jsx)(e.icon, {
                size: "md",
                color: n ? o.LU0.colors.INTERACTIVE_TEXT_ACTIVE : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
              }), (0, r.jsx)(o.Text, {
                tag: "strong",
                color: n ? "interactive-text-active" : "interactive-text-default",
                variant: "text-md/semibold",
                children: e.title
              }), (0, r.jsx)(o.Text, {
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