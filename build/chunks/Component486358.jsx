/** Chunk was on 9536 **/
/** chunk id: 486358, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk982112 = require("./982112.js");
let O = function() {
  let {
    analyticsLocations: e
  } = (0, o.ZP)(s.Z.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, l.e7)([u.Z], () => u.Z.getProps().guild, []), n = (0, l.e7)([d.Z], () => null != t && d.Z.can(x.Plq.MANAGE_GUILD, t)), O = (0, c.E)(t), C = (0, a.l9)(null != t ? t : true);
  return null == t ? null : (0, r.jsx)(o.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-lg/semibold",
          color: "text-strong",
          children: j.intl.string(j.t["6TAHbx"])
        }), (0, r.jsx)(i.xvT, {
          variant: "text-sm/medium",
          color: "text-default",
          tag: "p",
          className: v.description,
          children: j.intl.string(j.t.XCGZFk)
        })]
      }), true === C && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(b.P, {
          canManageGuild: n,
          features: t.features
        }), (0, r.jsx)("div", {
          className: v.divider
        })]
      }), (0, r.jsx)(p.l, {
        canManageGuild: n,
        guild: t
      }), true !== O && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: v.divider
        }), (0, r.jsx)(g.q, {
          isInventoryFeedEnabled: O,
          canManageGuild: n,
          features: t.features
        })]
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsx)(f.z, {
        guildId: t.id,
        defaultSettings: t.defaultMessageNotifications,
        canManageGuild: n
      }), (0, r.jsx)("div", {
        className: v.divider
      }), (0, r.jsx)(m.L, {
        canManageGuild: n,
        guild: t
      }), true === n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: v.divider
        }), (0, r.jsx)(h.P, {
          guildId: t.id
        })]
      })]
    })
  })
}