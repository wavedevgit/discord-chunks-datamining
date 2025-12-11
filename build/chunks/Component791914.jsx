/** Chunk was on 51235 **/
/** chunk id: 791914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk524437 = require("./524437.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk598999 = require("./598999.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk216789 = require("./216789.js"),
  Chunk153209 = require("./153209.jsx"),
  Chunk818186 = require("./818186.jsx"),
  Chunk999671 = require("./999671.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557208 = require("./557208.js");

function y(e) {
  let {
    tab: t,
    setTab: n,
    badgeState: f,
    closePopout: p
  } = e, {
    enabled: g,
    inInbox: y
  } = c.Z.useExperiment({
    location: "RecentsPopout"
  }), v = (0, d.Us)({
    location: "RecentsHeader"
  }), j = (0, i.e7)([u.Z], () => u.Z.getOverdueMessageReminderCount());
  return (0, r.jsxs)(s.h4, {
    className: m.header,
    children: [(0, r.jsxs)("div", {
      className: m.headerTitle,
      children: [(0, r.jsx)(o.xx7, {
        size: "md",
        color: "currentColor",
        className: m.inboxIcon
      }), (0, r.jsx)(o.Heading, {
        className: m.inboxTitle,
        variant: "text-lg/semibold",
        color: "interactive-text-active",
        children: b.intl.string(b.t.GSmTKJ)
      }), (0, r.jsxs)(o.kL8, {
        className: m.controls,
        onClick: e => e.stopPropagation(),
        focusProps: {
          enabled: false
        },
        "aria-label": b.intl.string(b.t["8k+6QY"]),
        children: [(0, r.jsx)(O, {
          tab: t
        }), (0, r.jsx)(h.Z, {
          closePopout: p
        })]
      })]
    }), (0, r.jsx)("div", {
      className: m.headerTabs,
      children: (0, r.jsxs)(o.njP, {
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        className: m.tabBar,
        children: [(0, r.jsxs)(o.njP.Item, {
          id: l.X.FOR_YOU,
          "aria-label": b.intl.string(b.t["En+D+u"]),
          className: m.tab,
          children: [b.intl.string(b.t["En+D+u"]), (null == f ? true : f.badgeForYou) ? (0, r.jsx)(o.fWl, {
            color: a.Z.colors.STATUS_DANGER.css,
            className: m.iconBadge
          }) : null]
        }), (0, r.jsx)(o.njP.Item, {
          id: l.X.UNREADS,
          className: m.tab,
          children: b.intl.string(b.t.sRUdB8)
        }), (0, r.jsx)(o.njP.Item, {
          "aria-label": b.intl.string(b.t.GRZF96),
          id: l.X.MENTIONS,
          className: m.tab,
          children: b.intl.string(b.t.GRZF96)
        }), g && y ? (0, r.jsx)(o.njP.Item, {
          "aria-label": b.intl.string(b.t["2pAkDA"]),
          id: l.X.BOOKMARKS,
          className: m.tab,
          children: 0 === j ? b.intl.string(b.t["2pAkDA"]) : b.intl.formatToPlainString(b.t.I4fryG, {
            count: j
          })
        }) : null, v ? (0, r.jsx)(o.njP.Item, {
          "aria-label": "scheduled",
          id: l.X.SCHEDULED,
          className: m.tab,
          children: b.intl.string(b.t.Fn6Odn)
        }) : null]
      })
    })]
  })
}

function O(e) {
  let {
    tab: t
  } = e;
  return t === l.X.FOR_YOU ? (0, r.jsx)(f.Gp, {}) : t === l.X.UNREADS ? (0, r.jsx)(g.QP, {}) : t === l.X.MENTIONS ? (0, r.jsx)(p.Z, {}) : null
}