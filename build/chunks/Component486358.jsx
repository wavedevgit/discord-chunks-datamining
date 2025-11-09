/** Chunk was on 29679 **/
/** chunk id: 486358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902840 = require("./902840.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk34586 = require("./34586.js"),
  Chunk496675 = require("./496675.js"),
  Chunk999382 = require("./999382.js"),
  Chunk723914 = require("./723914.jsx"),
  Chunk30818 = require("./30818.jsx"),
  Chunk997698 = require("./997698.jsx"),
  Chunk354031 = require("./354031.jsx"),
  Chunk335438 = require("./335438.jsx"),
  Chunk166805 = require("./166805.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771406 = require("./771406.js");
let v = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []), n = (0, Chunk442837.e7)([Chunk496675.Z], () => null != exports && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)), v = (0, Chunk34586.E)(exports), O = (0, Chunk902840.l9)(null != exports ? exports : true);
  return null == exports ? null : (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsxs)("main", {
      className: Chunk771406.container,
      children: [(0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t["6TAHbx"])
        }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-sm/medium",
          color: "header-secondary",
          tag: "p",
          className: Chunk771406.description,
          children: Chunk388032.intl.string(Chunk388032.t.XCGZFk)
        })]
      }), true === O && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk354031.P, {
          canManageGuild: require,
          features: exports.features
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk771406.divider
        })]
      }), (0, Chunk951288.jsx)(Chunk335438.l, {
        canManageGuild: require,
        guild: exports
      }), true !== v && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk771406.divider
        }), (0, Chunk951288.jsx)(Chunk723914.q, {
          isInventoryFeedEnabled: v,
          canManageGuild: require,
          features: exports.features
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk771406.divider
      }), (0, Chunk951288.jsx)(Chunk30818.z, {
        guildId: exports.id,
        defaultSettings: exports.defaultMessageNotifications,
        canManageGuild: require
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk771406.divider
      }), (0, Chunk951288.jsx)(Chunk997698.L, {
        canManageGuild: require,
        guild: exports
      }), true === require && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk771406.divider
        }), (0, Chunk951288.jsx)(Chunk166805.P, {
          guildId: exports.id
        })]
      })]
    })
  })
}