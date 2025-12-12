/** Chunk was on 64722 **/
/** chunk id: 791914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk407067 = require("./407067.js");

function _(e) {
  let {
    tab: t,
    setTab: n,
    badgeState: f,
    closePopout: p
  } = e, {
    enabled: g,
    inInbox: _
  } = c.Z.useExperiment({
    location: "RecentsPopout"
  }), O = (0, d.Us)({
    location: "RecentsHeader"
  }), v = (0, i.e7)([u.Z], () => u.Z.getOverdueMessageReminderCount());
  return (0, r.jsxs)(s.h4, {
    className: b.header,
    children: [(0, r.jsxs)("div", {
      className: b.headerTitle,
      children: [(0, r.jsx)(a.xx7, {
        size: "md",
        color: "currentColor",
        className: b.inboxIcon
      }), (0, r.jsx)(a.Heading, {
        className: b.inboxTitle,
        variant: "text-lg/semibold",
        color: "interactive-text-active",
        children: m.intl.string(m.t.GSmTKJ)
      }), (0, r.jsxs)(a.kL8, {
        className: b.controls,
        onClick: e => e.stopPropagation(),
        focusProps: {
          enabled: false
        },
        "aria-label": m.intl.string(m.t["8k+6QY"]),
        children: [(0, r.jsx)(y, {
          tab: t
        }), (0, r.jsx)(h.Z, {
          closePopout: p
        })]
      })]
    }), (0, r.jsx)("div", {
      className: b.headerTabs,
      children: (0, r.jsxs)(a.njP, {
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        className: b.tabBar,
        children: [(0, r.jsxs)(a.njP.Item, {
          id: l.X.FOR_YOU,
          "aria-label": m.intl.string(m.t["En+D+u"]),
          className: b.tab,
          children: [m.intl.string(m.t["En+D+u"]), (null == f ? true : f.badgeForYou) ? (0, r.jsx)(a.fWl, {
            color: o.Z.colors.STATUS_DANGER.css,
            className: b.iconBadge
          }) : null]
        }), (0, r.jsx)(a.njP.Item, {
          id: l.X.UNREADS,
          className: b.tab,
          children: m.intl.string(m.t.sRUdB8)
        }), (0, r.jsx)(a.njP.Item, {
          "aria-label": m.intl.string(m.t.GRZF96),
          id: l.X.MENTIONS,
          className: b.tab,
          children: m.intl.string(m.t.GRZF96)
        }), g && _ ? (0, r.jsx)(a.njP.Item, {
          "aria-label": m.intl.string(m.t["2pAkDA"]),
          id: l.X.BOOKMARKS,
          className: b.tab,
          children: 0 === v ? m.intl.string(m.t["2pAkDA"]) : m.intl.formatToPlainString(m.t.I4fryG, {
            count: v
          })
        }) : null, O ? (0, r.jsx)(a.njP.Item, {
          "aria-label": "scheduled",
          id: l.X.SCHEDULED,
          className: b.tab,
          children: m.intl.string(m.t.Fn6Odn)
        }) : null]
      })
    })]
  })
}

function y(e) {
  let {
    tab: t
  } = e;
  return t === l.X.FOR_YOU ? (0, r.jsx)(f.Gp, {}) : t === l.X.UNREADS ? (0, r.jsx)(g.QP, {}) : t === l.X.MENTIONS ? (0, r.jsx)(p.Z, {}) : null
}