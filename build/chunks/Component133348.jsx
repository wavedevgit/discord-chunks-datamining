/** Chunk was on 46875 **/
/** chunk id: 133348, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk371444 = require("./371444.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212007 = require("./212007.js"),
  Chunk422844 = require("./422844.js"),
  Chunk853742 = require("./853742.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk384474 = require("./384474.js");

function f(e) {
  let {
    channel: t,
    closePopout: n
  } = e, {
    sortOrder: f,
    layoutType: g,
    tagSetting: x
  } = (0, o.R)(t.id), {
    showResolvedFlags: b,
    setShowResolvedFlags: p
  } = (0, c.T)(t.id), j = (0, o.p)(), v = t.isMediaChannel(), y = e => {
    (0, d.Cd)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), j.getState().setSortOrder(t.id, e), n()
  }, A = e => {
    (0, d.ad)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), j.getState().setLayoutType(t.id, e), n()
  }, C = e => {
    j.getState().setTagSetting(t.id, e), n()
  }, O = null != t.availableTags && t.availableTags.length > 0;
  return (0, l.jsx)("div", {
    className: h.k,
    children: (0, l.jsxs)(s.W1t, {
      navId: "sort-and-view",
      "aria-label": v ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
      hideScroller: true,
      onClose: n,
      onSelect: n,
      children: [(0, l.jsxs)(s.rXV, {
        label: u.intl.string(u.t.f8wNDl),
        children: [(0, l.jsx)(s.iDA, {
          id: "sort-by-recent-activity",
          group: "sort-by",
          label: u.intl.string(u.t.jOPmcI),
          action: () => y(i.T.LATEST_ACTIVITY),
          checked: f === i.T.LATEST_ACTIVITY
        }), (0, l.jsx)(s.iDA, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: u.intl.string(u.t.UIltXd),
          action: () => y(i.T.CREATION_DATE),
          checked: f === i.T.CREATION_DATE
        })]
      }), t.isModeratorReportChannel() && (0, l.jsx)(s.rXV, {
        label: u.intl.string(m.default.PsM2b4),
        children: (0, l.jsx)(s.sLh, {
          id: "resolved-flags-none",
          label: u.intl.string(u.t.XJuakA),
          action: () => p(!b),
          checked: b
        })
      }), t.isMediaChannel() || t.isModeratorReportChannel() ? null : (0, l.jsxs)(s.rXV, {
        label: u.intl.string(u.t.mFMDSq),
        children: [(0, l.jsx)(s.iDA, {
          id: "view-as-list",
          group: "view-as",
          label: u.intl.string(u.t["NJFr+g"]),
          action: () => A(r.C.LIST),
          checked: g === r.C.LIST
        }), (0, l.jsx)(s.iDA, {
          id: "view-as-grid",
          group: "view-as",
          label: u.intl.string(u.t.wKeggb),
          action: () => A(r.C.GRID),
          checked: g === r.C.GRID
        })]
      }), O ? (0, l.jsxs)(s.rXV, {
        label: u.intl.string(u.t.Paxaug),
        children: [(0, l.jsx)(s.iDA, {
          id: "match-some",
          group: "tag-setting",
          label: u.intl.string(u.t.rQ0ctQ),
          action: () => C(a.n.MATCH_SOME),
          checked: x === a.n.MATCH_SOME
        }), (0, l.jsx)(s.iDA, {
          id: "match-all",
          group: "tag-setting",
          label: u.intl.string(u.t.FCXUu0),
          action: () => C(a.n.MATCH_ALL),
          checked: x === a.n.MATCH_ALL
        })]
      }) : null, (0, l.jsx)(s.rXV, {
        children: (0, l.jsx)(s.Drp, {
          id: "reset-all",
          className: h.Z,
          label: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: u.intl.string(u.t["3b//lO"])
          }),
          action: () => {
            y(t.getDefaultSortOrder()), A(t.getDefaultLayout()), C(t.getDefaultTagSetting())
          }
        })
      })]
    })
  })
}