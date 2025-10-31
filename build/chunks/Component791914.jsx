/** Chunk was on 56710 **/
/** chunk id: 791914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk317632 = require("./317632.js"),
  Chunk602478 = require("./602478.js"),
  Chunk598999 = require("./598999.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk216789 = require("./216789.js"),
  Chunk153209 = require("./153209.jsx"),
  Chunk818186 = require("./818186.jsx"),
  Chunk999671 = require("./999671.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk264233 = require("./264233.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407067 = require("./407067.js");

function v(e) {
  let {
    tab: t,
    setTab: n,
    badgeState: f,
    closePopout: m
  } = e, {
    enabled: b,
    inInbox: _
  } = d.Z.useExperiment({
    location: "RecentsPopout"
  }), v = (0, h.Us)({
    location: "RecentsHeader"
  }), {
    enabled: C
  } = c.Z.useExperiment({
    location: "RecentsHeader"
  }), x = (0, i.e7)([s.Z], () => s.Z.getUnseenInviteCount()), E = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
  return (0, r.jsxs)(u.h4, {
    className: y.header,
    children: [(0, r.jsxs)("div", {
      className: y.headerTitle,
      children: [(0, r.jsx)(o.xx7, {
        size: "md",
        color: "currentColor",
        className: y.inboxIcon
      }), (0, r.jsx)(o.Heading, {
        className: y.inboxTitle,
        variant: "text-lg/semibold",
        color: "interactive-active",
        children: O.intl.string(O.t.GSmTKJ)
      }), (0, r.jsxs)(o.kL8, {
        className: y.controls,
        onClick: e => e.stopPropagation(),
        focusProps: {
          enabled: false
        },
        "aria-label": O.intl.string(O.t["8k+6QY"]),
        children: [(0, r.jsx)(j, {
          tab: t
        }), (0, r.jsx)(g.Z, {
          closePopout: m
        })]
      })]
    }), (0, r.jsx)("div", {
      className: y.headerTabs,
      children: (0, r.jsxs)(o.njP, {
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        className: y.tabBar,
        children: [(0, r.jsxs)(o.njP.Item, {
          id: l.X.FOR_YOU,
          "aria-label": O.intl.string(O.t["En+D+u"]),
          className: y.tab,
          children: [O.intl.string(O.t["En+D+u"]), (null == f ? true : f.badgeForYou) ? (0, r.jsx)(o.fWl, {
            color: a.Z.STATUS_DANGER,
            className: y.iconBadge
          }) : null]
        }), (0, r.jsx)(o.njP.Item, {
          id: l.X.UNREADS,
          className: y.tab,
          children: O.intl.string(O.t.sRUdB8)
        }), (0, r.jsx)(o.njP.Item, {
          "aria-label": O.intl.string(O.t.GRZF96),
          id: l.X.MENTIONS,
          className: y.tab,
          children: O.intl.string(O.t.GRZF96)
        }), C ? (0, r.jsxs)(o.njP.Item, {
          "aria-label": "game_invites",
          id: l.X.GAME_INVITES,
          className: y.tab,
          children: [O.intl.string(O.t.apq3cU), x > 0 ? (0, r.jsx)(o.fWl, {
            color: a.Z.STATUS_DANGER,
            className: y.iconBadge
          }) : null]
        }) : null, b && _ ? (0, r.jsx)(o.njP.Item, {
          "aria-label": O.intl.string(O.t["2pAkDA"]),
          id: l.X.BOOKMARKS,
          className: y.tab,
          children: 0 === E ? O.intl.string(O.t["2pAkDA"]) : O.intl.formatToPlainString(O.t.I4fryG, {
            count: E
          })
        }) : null, v ? (0, r.jsx)(o.njP.Item, {
          "aria-label": "scheduled",
          id: l.X.SCHEDULED,
          className: y.tab,
          children: O.intl.string(O.t.Fn6Odn)
        }) : null]
      })
    })]
  })
}

function j(e) {
  let {
    tab: t
  } = e;
  return t === l.X.FOR_YOU ? (0, r.jsx)(f.Gp, {}) : t === l.X.UNREADS ? (0, r.jsx)(b.QP, {}) : t === l.X.MENTIONS ? (0, r.jsx)(m.Z, {}) : t === l.X.GAME_INVITES ? (0, r.jsx)(_.S, {}) : null
}