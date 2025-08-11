/** Chunk was on 22988 **/
/** chunk id: 486358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk515636 = require("./515636.js");
let _ = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []), n = (0, Chunk442837.e7)([Chunk496675.Z], () => null != exports && Chunk496675.Z.can(Chunk981631.Plq.MANAGE_GUILD, exports)), _ = (0, Chunk34586.E)(exports), O = (0, Chunk902840.l9)(null != exports ? exports : true);
  return null == exports ? null : (0, Chunk255367.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk255367.jsxs)("main", {
      className: Chunk515636.container,
      children: [(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk793030.X6, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk388032.t["6TAHb2"])
        }), (0, Chunk255367.jsx)(Chunk793030.xv, {
          variant: "text-sm/medium",
          color: "header-secondary",
          tag: "p",
          className: Chunk515636.description,
          children: Chunk388032.intl.string(Chunk388032.t.XCGZFh)
        })]
      }), true === O && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk354031.P, {
          canManageGuild: require,
          features: exports.features
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk515636.divider
        })]
      }), (0, Chunk255367.jsx)(Chunk335438.l, {
        canManageGuild: require,
        guild: exports
      }), true !== _ && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk515636.divider
        }), (0, Chunk255367.jsx)(Chunk723914.q, {
          isInventoryFeedEnabled: _,
          canManageGuild: require,
          features: exports.features
        })]
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk515636.divider
      }), (0, Chunk255367.jsx)(Chunk30818.z, {
        guildId: exports.id,
        defaultSettings: exports.defaultMessageNotifications,
        canManageGuild: require
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk515636.divider
      }), (0, Chunk255367.jsx)(Chunk997698.L, {
        canManageGuild: require,
        guild: exports
      }), true === require && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk515636.divider
        }), (0, Chunk255367.jsx)(Chunk166805.P, {
          guildId: exports.id
        })]
      })]
    })
  })
}