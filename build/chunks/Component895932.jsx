/** Chunk was on 49131 **/
/** chunk id: 895932, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk481060 = require("./481060.js"),
  Chunk869382 = require("./869382.js"),
  Chunk109434 = require("./109434.js"),
  Chunk228392 = require("./228392.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk956058 = require("./956058.js");

function f(e) {
  let {
    channel: t,
    closePopout: n
  } = e, {
    sortOrder: f,
    layoutType: g,
    tagSetting: x
  } = (0, c.H)(t.id), {
    showResolvedFlags: b,
    setShowResolvedFlags: p
  } = (0, o.N)(t.id), j = (0, c.v)(), v = t.isMediaChannel(), C = e => {
    (0, d.KR)({
      guildId: t.guild_id,
      channelId: t.id,
      sortOrder: e
    }), j.getState().setSortOrder(t.id, e), n()
  }, y = e => {
    (0, d.Do)({
      guildId: t.guild_id,
      channelId: t.id,
      forumLayout: e
    }), j.getState().setLayoutType(t.id, e), n()
  }, T = e => {
    j.getState().setTagSetting(t.id, e), n()
  }, S = null != t.availableTags && t.availableTags.length > 0;
  return (0, r.jsx)("div", {
    className: h.container,
    children: (0, r.jsxs)(s.v2r, {
      navId: "sort-and-view",
      "aria-label": v ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
      hideScroller: true,
      onClose: n,
      onSelect: n,
      children: [(0, r.jsxs)(s.kSQ, {
        label: u.intl.string(u.t.f8wNDl),
        children: [(0, r.jsx)(s.k5B, {
          id: "sort-by-recent-activity",
          group: "sort-by",
          label: u.intl.string(u.t.jOPmcI),
          action: () => C(l.z.LATEST_ACTIVITY),
          checked: f === l.z.LATEST_ACTIVITY
        }), (0, r.jsx)(s.k5B, {
          id: "sort-by-date-posted",
          group: "sort-by",
          label: u.intl.string(u.t.UIltXd),
          action: () => C(l.z.CREATION_DATE),
          checked: f === l.z.CREATION_DATE
        })]
      }), t.isModeratorReportChannel() && (0, r.jsx)(s.kSQ, {
        label: u.intl.string(m.default.PsM2b4),
        children: (0, r.jsx)(s.S89, {
          id: "resolved-flags-none",
          label: u.intl.string(u.t.XJuakA),
          action: () => p(!b),
          checked: b
        })
      }), t.isMediaChannel() || t.isModeratorReportChannel() ? null : (0, r.jsxs)(s.kSQ, {
        label: u.intl.string(u.t.mFMDSq),
        children: [(0, r.jsx)(s.k5B, {
          id: "view-as-list",
          group: "view-as",
          label: u.intl.string(u.t["NJFr+g"]),
          action: () => y(a.X.LIST),
          checked: g === a.X.LIST
        }), (0, r.jsx)(s.k5B, {
          id: "view-as-grid",
          group: "view-as",
          label: u.intl.string(u.t.wKeggb),
          action: () => y(a.X.GRID),
          checked: g === a.X.GRID
        })]
      }), S ? (0, r.jsxs)(s.kSQ, {
        label: u.intl.string(u.t.Paxaug),
        children: [(0, r.jsx)(s.k5B, {
          id: "match-some",
          group: "tag-setting",
          label: u.intl.string(u.t.rQ0ctQ),
          action: () => T(i.z.MATCH_SOME),
          checked: x === i.z.MATCH_SOME
        }), (0, r.jsx)(s.k5B, {
          id: "match-all",
          group: "tag-setting",
          label: u.intl.string(u.t.FCXUu0),
          action: () => T(i.z.MATCH_ALL),
          checked: x === i.z.MATCH_ALL
        })]
      }) : null, (0, r.jsx)(s.kSQ, {
        children: (0, r.jsx)(s.sNh, {
          id: "reset-all",
          className: h.clearText,
          label: (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "none",
            children: u.intl.string(u.t["3b//lO"])
          }),
          action: () => {
            C(t.getDefaultSortOrder()), y(t.getDefaultLayout()), T(t.getDefaultTagSetting())
          }
        })
      })]
    })
  })
}