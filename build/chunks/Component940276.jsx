/** Chunk was on web.js **/
/** chunk id: 940276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk650774 = require("./650774.js"),
  Chunk626135 = require("./626135.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk304432 = require("./304432.js"),
  Chunk981631 = require("./981631.js"),
  Chunk418924 = require("./418924.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964385 = require("./964385.js");

function h(e) {
  let {
    guild: t,
    isActivityRestricted: n,
    onToggleActivityRestrictedGuild: i
  } = e, l = (0, a.e7)([s.Z], () => s.Z.getMemberCount(t.id));
  return (0, r.jsxs)(o.Kqy, {
    as: "li",
    direction: "horizontal",
    align: "center",
    gap: 20,
    children: [(0, r.jsx)(c.V, {
      guild: t,
      size: 48
    }), (0, r.jsx)(o.rsf, {
      label: t.name,
      description: p.intl.format(p.t.zRl6XR, {
        count: null != l ? l : 0
      }),
      checked: !n,
      onChange: e => i({
        checked: e,
        guildId: t.id
      })
    })]
  })
}
let m = function() {
  let {
    guilds: e,
    searchQuery: t,
    setSearchQuery: n,
    sortOrder: a,
    setSortOrder: s,
    hasActivityRestrictedGuilds: c,
    onToggleAllActivityRestrictedGuilds: m,
    onToggleActivityRestrictedGuild: g,
    isActivityRestricted: E,
    numActivityRestrictedGuilds: b,
    numTotalGuilds: y
  } = (0, u.F)(), O = () => {
    l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
      interaction: "search_cleared",
      sort_order: a,
      activity_restricted_guild_count: b,
      total_guild_count: y
    }), n("")
  }, v = (0, i.useId)();
  return (0, r.jsxs)("div", {
    className: _.wrapper,
    children: [(0, r.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, r.jsx)(o.E1j, {
        query: t,
        onChange: n,
        onClear: O,
        onFocus: () => l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_focused",
          sort_order: a,
          activity_restricted_guild_count: b,
          total_guild_count: y
        }),
        onBlur: () => l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_blurred",
          sort_order: a,
          activity_restricted_guild_count: b,
          total_guild_count: y
        }),
        placeholder: p.intl.string(p.t["H+nRYw"]),
        "aria-label": p.intl.string(p.t["5h0QOP"]),
        inputProps: {
          "aria-controls": v,
          "aria-expanded": true
        }
      }), e.length > 0 && (0, r.jsxs)("div", {
        className: _.controlsContainer,
        children: [(0, r.jsx)(o.PhF, {
          label: p.intl.string(p.t.LxVjvJ),
          hideLabel: true,
          options: [{
            id: u.W.SERVER_ORDER,
            label: p.intl.string(p.t.STMPJ2),
            value: u.W.SERVER_ORDER
          }, {
            id: u.W.RECENTLY_JOINED,
            label: p.intl.string(p.t.CbaapP),
            value: u.W.RECENTLY_JOINED
          }, {
            id: u.W.ACTIVITY_SHARING_ON,
            label: p.intl.string(f.default.ZI51JZ),
            value: u.W.ACTIVITY_SHARING_ON
          }, {
            id: u.W.ACTIVITY_SHARING_OFF,
            label: p.intl.string(f.default["+kxafn"]),
            value: u.W.ACTIVITY_SHARING_OFF
          }],
          onSelectionChange: e => {
            l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
              interaction: "sort_order_changed",
              sort_order: e,
              activity_restricted_guild_count: b,
              total_guild_count: y
            }), s(e)
          },
          value: a,
          selectionMode: "single"
        }), (0, r.jsx)(o.Avr, {
          variant: "primary",
          onClick: m,
          text: c ? p.intl.string(p.t["7lxcLO"]) : p.intl.string(p.t.zh6UEs)
        })]
      })]
    }), (0, r.jsx)(o.nn4, {
      "aria-live": "polite",
      role: "region",
      children: p.intl.format(f.default.EvzDff, {
        count: e.length
      })
    }), (0, r.jsxs)("ul", {
      className: _.guildsList,
      id: v,
      "aria-label": p.intl.string(p.t["7hB4kg"]),
      children: [0 === e.length && (0, r.jsx)("div", {
        className: _.noResultsContainer,
        children: (0, r.jsx)(o.Text, {
          className: _.noResultsText,
          variant: "text-lg/medium",
          children: p.intl.string(p.t["Xe+fJM"])
        })
      }), e.map(e => (0, r.jsx)(h, {
        guild: e,
        isActivityRestricted: E(e.id),
        onToggleActivityRestrictedGuild: g
      }, e.id))]
    })]
  })
}