/** Chunk was on web.js **/
/** chunk id: 527518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c$: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk162097 = require("./162097.jsx"),
  Chunk142270 = require("./142270.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk749226 = require("./749226.js");
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
      return (0, r.jsx)(i.b, {
        ctaText: (0, o.uJ)(t) ? l.intl.string(l.t.H57f41) : t,
        linkText: (0, o.uJ)(n) ? l.intl.string(l.t["7f4H7D"]) : n,
        linkPreText: (0, o.uJ)(a) ? true : a,
        ctaOnClick: s.tEg
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
        className: c.tH,
        children: (0, r.jsx)(a.SS, {
          className: c.oz,
          ctaText: (0, o.uJ)(t) ? l.intl.string(l.t["J+vlIR"]) : t,
          ctaOnClick: s.tEg,
          showNotificationBadge: i,
          cardAlignment: u,
          linkText: (0, o.uJ)(n) ? l.intl.string(l.t.XRdyjz) : n
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
          value: Chunk142270.cP.START
        }, {
          label: "End",
          value: Chunk142270.cP.END
        }],
        defaultValue: Chunk142270.cP.START
      },
      linkText: {
        label: "Link Text",
        type: "text",
        defaultValue: ""
      }
    }
  }]
}