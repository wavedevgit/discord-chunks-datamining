/** Chunk was on 41753 **/
/** chunk id: 791914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk399606 = require("./399606.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494404 = require("./494404.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk317632 = require("./317632.js"),
  Chunk602478 = require("./602478.js"),
  Chunk2818 = require("./2818.js"),
  Chunk768943 = require("./768943.js"),
  Chunk216789 = require("./216789.js"),
  Chunk153209 = require("./153209.jsx"),
  Chunk818186 = require("./818186.jsx"),
  Chunk999671 = require("./999671.jsx"),
  Chunk946443 = require("./946443.jsx"),
  Chunk264233 = require("./264233.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808934 = require("./808934.js");

function C(e) {
  let {
    tab: t,
    setTab: n,
    badgeState: f,
    closePopout: m
  } = e, {
    enabled: b,
    inInbox: O
  } = d.Z.useExperiment({
    location: "RecentsPopout"
  }), C = (0, p.Us)({
    location: "RecentsHeader"
  }), {
    enabled: j
  } = u.Z.useExperiment({
    location: "RecentsHeader"
  }), E = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()), S = (0, i.e7)([h.Z], () => h.Z.getOverdueMessageReminderCount());
  return (0, r.jsxs)(s.h4, {
    className: y.header,
    children: [(0, r.jsxs)("div", {
      className: y.headerTitle,
      children: [(0, r.jsx)(o.xx7, {
        size: "md",
        color: "currentColor",
        className: y.inboxIcon
      }), (0, r.jsx)(o.X6q, {
        className: y.inboxTitle,
        variant: "text-lg/semibold",
        color: "interactive-active",
        children: _.intl.string(_.t.GSmTKC)
      }), (0, r.jsxs)(o.kL8, {
        className: y.controls,
        onClick: e => e.stopPropagation(),
        focusProps: {
          enabled: false
        },
        "aria-label": _.intl.string(_.t["8k+6QU"]),
        children: [(0, r.jsx)(v, {
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
          "aria-label": _.intl.string(_.t["En+D+v"]),
          className: y.tab,
          children: [_.intl.string(_.t["En+D+v"]), (null == f ? true : f.badgeForYou) ? (0, r.jsx)(o.fWl, {
            color: a.Z.STATUS_DANGER,
            className: y.iconBadge
          }) : null]
        }), (0, r.jsx)(o.njP.Item, {
          id: l.X.UNREADS,
          className: y.tab,
          children: _.intl.string(_.t.sRUdBw)
        }), (0, r.jsx)(o.njP.Item, {
          "aria-label": _.intl.string(_.t["GRZF9/"]),
          id: l.X.MENTIONS,
          className: y.tab,
          children: _.intl.string(_.t["GRZF9/"])
        }), j ? (0, r.jsxs)(o.njP.Item, {
          "aria-label": "game_invites",
          id: l.X.GAME_INVITES,
          className: y.tab,
          children: [_.intl.string(_.t.apq3cX), E > 0 ? (0, r.jsx)(o.fWl, {
            color: a.Z.STATUS_DANGER,
            className: y.iconBadge
          }) : null]
        }) : null, b && O ? (0, r.jsx)(o.njP.Item, {
          "aria-label": _.intl.string(_.t["2pAkDA"]),
          id: l.X.BOOKMARKS,
          className: y.tab,
          children: 0 === S ? _.intl.string(_.t["2pAkDA"]) : _.intl.formatToPlainString(_.t.I4fryM, {
            count: S
          })
        }) : null, C ? (0, r.jsx)(o.njP.Item, {
          "aria-label": "scheduled",
          id: l.X.SCHEDULED,
          className: y.tab,
          children: _.intl.string(_.t.Fn6Odn)
        }) : null]
      })
    })]
  })
}

function v(e) {
  let {
    tab: t
  } = e;
  return t === l.X.FOR_YOU ? (0, r.jsx)(f.Gp, {}) : t === l.X.UNREADS ? (0, r.jsx)(b.QP, {}) : t === l.X.MENTIONS ? (0, r.jsx)(m.Z, {}) : t === l.X.GAME_INVITES ? (0, r.jsx)(O.S, {}) : null
}