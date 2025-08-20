/** Chunk was on web.js **/
/** chunk id: 940276, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk650774 = require("./650774.js"),
  Chunk626135 = require("./626135.js"),
  Chunk797670 = require("./797670.jsx"),
  Chunk304432 = require("./304432.js"),
  Chunk981631 = require("./981631.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378976 = require("./378976.js");

function h(e) {
  let {
    guild: t,
    isActivityRestricted: n,
    onToggleActivityRestrictedGuild: i
  } = e, l = (0, a.e7)([s.Z], () => s.Z.getMemberCount(t.id));
  return (0, r.jsx)("li", {
    children: (0, r.jsx)(o.j7V, {
      className: p.guildRowWrapper,
      value: !n,
      onChange: e => i({
        checked: e,
        guildId: t.id
      }),
      hideBorder: true,
      children: (0, r.jsxs)("div", {
        className: p.guildRow,
        children: [(0, r.jsx)("div", {
          children: (0, r.jsx)(c.V, {
            guild: t,
            size: 48
          })
        }), (0, r.jsxs)("div", {
          className: p.guildRowTextContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            lineClamp: 1,
            color: "text-default",
            children: t.name
          }), (0, r.jsxs)("div", {
            className: p.memberDetailsContainer,
            children: [(0, r.jsx)("div", {
              className: p.memberCountDot
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: _.intl.format(_.t.zRl6XV, {
                count: l
              })
            })]
          })]
        })]
      })
    })
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
  }, v = (0, Chunk647438.useId)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk378976.wrapper,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk378976.headerContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
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
        placeholder: Chunk388032.intl.string(Chunk388032.t["H+nRY2"]),
        "aria-label": Chunk388032.intl.string(Chunk388032.t["5h0QOD"]),
        inputProps: {
          "aria-controls": v,
          "aria-expanded": true
        }
      }), module.length > 0 && (0, Chunk951288.jsxs)("div", {
        className: Chunk378976.controlsContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
          className: Chunk378976.sortOrderSelect,
          look: Chunk481060.qQH.CUSTOM,
          popoutWidth: "auto",
          options: [{
            label: Chunk388032.intl.string(Chunk388032.t.STMPJy),
            value: Chunk304432.W.SERVER_ORDER
          }, {
            label: Chunk388032.intl.string(Chunk388032.t.CbaapK),
            value: Chunk304432.W.RECENTLY_JOINED
          }, {
            label: Chunk388032.intl.string(Chunk933554.default.ZI51JS),
            value: Chunk304432.W.ACTIVITY_SHARING_ON
          }, {
            label: Chunk388032.intl.string(Chunk933554.default["+kxafn"]),
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
        }), (0, Chunk951288.jsx)(Chunk481060.Avr, {
          variant: "primary",
          onClick: m,
          text: Chunk797670 ? Chunk388032.intl.string(Chunk388032.t["7lxcLC"]) : Chunk388032.intl.string(Chunk388032.t.zh6UEh)
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.nn4, {
      "aria-live": "polite",
      role: "region",
      children: Chunk388032.intl.format(Chunk933554.default.EvzDfX, {
        count: module.length
      })
    }), (0, Chunk951288.jsxs)("ul", {
      className: Chunk378976.guildsList,
      id: v,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["7hB4kp"]),
      children: [0 === module.length && (0, Chunk951288.jsx)("div", {
        className: Chunk378976.noResultsContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk378976.noResultsText,
          variant: "text-lg/medium",
          children: Chunk388032.intl.string(Chunk388032.t["Xe+fJC"])
        })
      }), module.map(e => (0, r.jsx)(h, {
        guild: e,
        isActivityRestricted: E(e.id),
        onToggleActivityRestrictedGuild: g
      }, e.id))]
    })]
  })
}