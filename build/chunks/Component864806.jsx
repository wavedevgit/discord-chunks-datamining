/** Chunk was on web.js **/
/** chunk id: 864806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  vP: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk775451 = require("./775451.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605532 = require("./605532.js");
let u = {
  title: "Balance Widget",
  stories: [{
    name: "Balance Widget Card",
    id: "balance-widget-card",
    component: e => {
      let {
        ctaText: t,
        linkText: n,
        linkPreText: a
      } = e;
      return (0, r.jsx)(i.L, {
        ctaText: (0, o.Ew)(t) ? l.intl.string(l.t.H57f41) : t,
        linkText: (0, o.Ew)(n) ? l.intl.string(l.t["7f4H7D"]) : n,
        linkPreText: (0, o.Ew)(a) ? true : a,
        ctaOnClick: s.dG4
      })
    },
    controls: {
      ctaText: {
        label: "CTA Text",
        type: "text",
        defaultValue: ""
      },
      linkText: {
        label: "Link Text",
        type: "text",
        defaultValue: ""
      },
      linkPreText: {
        label: "Link Pre Text",
        type: "text",
        defaultValue: ""
      }
    }
  }, {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: e => {
      let {
        ctaText: t,
        linkText: n,
        showNotificationBadge: i,
        cardAlignment: u
      } = e;
      return (0, r.jsx)("div", {
        className: c.balanceWidgetMenuContainer,
        children: (0, r.jsx)(a.V9, {
          className: c.balanceWidgetMenu,
          ctaText: (0, o.Ew)(t) ? l.intl.string(l.t["J+vlIR"]) : t,
          ctaOnClick: s.dG4,
          showNotificationBadge: i,
          cardAlignment: u,
          linkText: (0, o.Ew)(n) ? l.intl.string(l.t.XRdyjz) : n
        })
      })
    },
    controls: {
      ctaText: {
        label: "CTA Text",
        type: "text",
        defaultValue: ""
      },
      showNotificationBadge: {
        label: "Show Notification Badge",
        type: "boolean",
        defaultValue: false
      },
      cardAlignment: {
        label: "Card Alignment",
        type: "select",
        options: [{
          label: "Start",
          value: Chunk775451.ek.START
        }, {
          label: "End",
          value: Chunk775451.ek.END
        }],
        defaultValue: Chunk775451.ek.START
      },
      linkText: {
        label: "Link Text",
        type: "text",
        defaultValue: ""
      }
    }
  }]
}