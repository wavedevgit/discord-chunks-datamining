/** Chunk was on 384 **/
/** chunk id: 431301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk158638 = require("./158638.js"),
  Chunk496675 = require("./496675.js"),
  Chunk999382 = require("./999382.js"),
  Chunk565849 = require("./565849.jsx"),
  Chunk787612 = require("./787612.jsx"),
  Chunk354103 = require("./354103.jsx"),
  Chunk413682 = require("./413682.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596583 = require("./596583.js");

function x() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []), {
    isGuildAdmin: n,
    canManageGuild: x
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    isGuildAdmin: null != exports && Chunk496675.Z.can(Chunk981631.Plq.ADMINISTRATOR, exports),
    canManageGuild: null != exports && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)
  })), j = (0, Chunk158638.g1)(null == exports ? true : exports.id, "GuildSettingsBoostPerks");
  return null == exports ? null : (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsxs)("main", {
      className: Chunk596583.container,
      children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.UKgg5N)
      }), (0, Chunk951288.jsx)(Chunk413682.w, {
        canManageGuild: x,
        premiumProgressBarEnabled: exports.premiumProgressBarEnabled
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk596583.divider
      }), (0, Chunk951288.jsx)(Chunk565849.A, {
        guild: exports,
        canManageGuild: x
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk596583.divider
      }), j ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(Chunk354103.V, {
            guild: exports
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk596583.divider
          })]
        }), (0, Chunk951288.jsx)(Chunk787612.A, {
          guild: exports,
          canManageGuild: x
        })]
      }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk787612.A, {
          guild: exports,
          canManageGuild: x
        }), require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk596583.divider
          }), (0, Chunk951288.jsx)(Chunk354103.V, {
            guild: exports
          })]
        })]
      })]
    })
  })
}