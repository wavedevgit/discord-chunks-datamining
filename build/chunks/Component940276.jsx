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
  Chunk872793 = require("./872793.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk62023 = require("./62023.js");

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
      description: _.intl.format(_.t.zRl6XR, {
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
  } = (0, Chunk304432.F)(), O = () => {
    Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
      interaction: "search_cleared",
      sort_order: Chunk442837,
      activity_restricted_guild_count: b,
      total_guild_count: y
    }), require("")
  }, v = (0, Chunk473749.useId)();
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk62023.wrapper,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk62023.headerContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.E1j, {
        query: exports,
        onChange: require,
        onClear: O,
        onFocus: () => Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_focused",
          sort_order: Chunk442837,
          activity_restricted_guild_count: b,
          total_guild_count: y
        }),
        onBlur: () => Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
          interaction: "search_blurred",
          sort_order: Chunk442837,
          activity_restricted_guild_count: b,
          total_guild_count: y
        }),
        placeholder: Chunk388032.intl.string(Chunk388032.t["H+nRYw"]),
        "aria-label": Chunk388032.intl.string(Chunk388032.t["5h0QOP"]),
        inputProps: {
          "aria-controls": v,
          "aria-expanded": true
        }
      }), module.length > 0 && (0, Chunk54381.jsxs)("div", {
        className: Chunk62023.controlsContainer,
        children: [(0, Chunk54381.jsx)(Chunk481060.PhF, {
          className: Chunk62023.select,
          variant: "text-only",
          options: [{
            label: Chunk388032.intl.string(Chunk388032.t.STMPJ2),
            value: Chunk304432.W.SERVER_ORDER
          }, {
            label: Chunk388032.intl.string(Chunk388032.t.CbaapP),
            value: Chunk304432.W.RECENTLY_JOINED
          }, {
            label: Chunk388032.intl.string(Chunk872793.default.ZI51JZ),
            value: Chunk304432.W.ACTIVITY_SHARING_ON
          }, {
            label: Chunk388032.intl.string(Chunk872793.default["+kxafn"]),
            value: Chunk304432.W.ACTIVITY_SHARING_OFF
          }],
          select: e => {
            l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
              interaction: "sort_order_changed",
              sort_order: e,
              activity_restricted_guild_count: b,
              total_guild_count: y
            }), s(e)
          },
          isSelected: e => a === e,
          serialize: String
        }), (0, Chunk54381.jsx)(Chunk481060.Avr, {
          variant: "primary",
          onClick: m,
          text: Chunk797670 ? Chunk388032.intl.string(Chunk388032.t["7lxcLO"]) : Chunk388032.intl.string(Chunk388032.t.zh6UEs)
        })]
      })]
    }), (0, Chunk54381.jsx)(Chunk481060.nn4, {
      "aria-live": "polite",
      role: "region",
      children: Chunk388032.intl.format(Chunk872793.default.EvzDff, {
        count: module.length
      })
    }), (0, Chunk54381.jsxs)("ul", {
      className: Chunk62023.guildsList,
      id: v,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["7hB4kg"]),
      children: [0 === module.length && (0, Chunk54381.jsx)("div", {
        className: Chunk62023.noResultsContainer,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk62023.noResultsText,
          variant: "text-lg/medium",
          children: Chunk388032.intl.string(Chunk388032.t["Xe+fJM"])
        })
      }), module.map(e => (0, r.jsx)(h, {
        guild: e,
        isActivityRestricted: E(e.id),
        onToggleActivityRestrictedGuild: g
      }, e.id))]
    })]
  })
}