/** Chunk was on 46875 **/
/** chunk id: 133348, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    channel: t,
    closePopout: n
  } = e, {
    sortOrder: g,
    layoutType: x,
    tagSetting: f
  } = (0, c.R)(t.id), {
    showResolvedFlags: p,
    setShowResolvedFlags: b
  } = (0, o.T)(t.id), j = (0, c.p)(), v = t.isMediaChannel(), _ = e => {
    (0, d.Cd)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), j.getState().setSortOrder(t.id, e), n()
  }, y = e => {
    (0, d.ad)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), j.getState().setLayoutType(t.id, e), n()
  }, A = e => {
    j.getState().setTagSetting(t.id, e), n()
  }, C = null != t.availableTags && t.availableTags.length > 0;
  return (0, l.jsx)("div", {
    className: h.k,
    children: (0, l.jsxs)(s.W1t, {
      "data-menu-migration-ready": true,
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
          action: () => _(a.T.LATEST_ACTIVITY),
          checked: g === a.T.LATEST_ACTIVITY
        }), (0, l.jsx)(s.iDA, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: u.intl.string(u.t.UIltXd),
          action: () => _(a.T.CREATION_DATE),
          checked: g === a.T.CREATION_DATE
        })]
      }), t.isModeratorReportChannel() && (0, l.jsx)(s.rXV, {
        label: u.intl.string(m.default.PsM2b4),
        children: (0, l.jsx)(s.sLh, {
          id: "resolved-flags-none",
          label: u.intl.string(u.t.XJuakA),
          action: () => b(!p),
          checked: p
        })
      }), t.isMediaChannel() || t.isModeratorReportChannel() ? null : (0, l.jsxs)(s.rXV, {
        label: u.intl.string(u.t.mFMDSq),
        children: [(0, l.jsx)(s.iDA, {
          id: "view-as-list",
          group: "view-as",
          label: u.intl.string(u.t["NJFr+g"]),
          action: () => y(r.C.LIST),
          checked: x === r.C.LIST
        }), (0, l.jsx)(s.iDA, {
          id: "view-as-grid",
          group: "view-as",
          label: u.intl.string(u.t.wKeggb),
          action: () => y(r.C.GRID),
          checked: x === r.C.GRID
        })]
      }), C ? (0, l.jsxs)(s.rXV, {
        label: u.intl.string(u.t.Paxaug),
        children: [(0, l.jsx)(s.iDA, {
          id: "match-some",
          group: "tag-setting",
          label: u.intl.string(u.t.rQ0ctQ),
          action: () => A(i.n.MATCH_SOME),
          checked: f === i.n.MATCH_SOME
        }), (0, l.jsx)(s.iDA, {
          id: "match-all",
          group: "tag-setting",
          label: u.intl.string(u.t.FCXUu0),
          action: () => A(i.n.MATCH_ALL),
          checked: f === i.n.MATCH_ALL
        })]
      }) : null, (0, l.jsx)(s.rXV, {
        children: (0, l.jsx)(s.Drp, {
          id: "reset-all",
          className: h.Z,
          label: u.intl.string(u.t["3b//lO"]),
          action: () => {
            _(t.getDefaultSortOrder()), y(t.getDefaultLayout()), A(t.getDefaultTagSetting())
          }
        })
      })]
    })
  })
}