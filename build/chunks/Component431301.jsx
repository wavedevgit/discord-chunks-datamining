/** Chunk was on 9536 **/
/** chunk id: 431301, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk188057 = require("./188057.js");

function x() {
  let {
    analyticsLocations: e
  } = (0, s.ZP)(a.Z.GUILD_SETTINGS_BOOST_PERKS_PAGE), t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []), {
    isGuildAdmin: n,
    canManageGuild: x
  } = (0, l.cj)([c.Z], () => ({
    isGuildAdmin: null != t && c.Z.can(b.Plq.ADMINISTRATOR, t),
    canManageGuild: null != t && c.Z.can(b.Plq.MANAGE_GUILD, t)
  })), j = (0, o.g1)(null == t ? true : t.id, "GuildSettingsBoostPerks");
  return null == t ? null : (0, r.jsx)(s.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: h.container,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: p.intl.string(p.t.UKgg5N)
      }), (0, r.jsx)(f.w, {
        canManageGuild: x,
        premiumProgressBarEnabled: t.premiumProgressBarEnabled
      }), (0, r.jsx)("div", {
        className: h.divider
      }), (0, r.jsx)(u.A, {
        guild: t,
        canManageGuild: x
      }), (0, r.jsx)("div", {
        className: h.divider
      }), j ? (0, r.jsxs)(r.Fragment, {
        children: [n && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.V, {
            guild: t
          }), (0, r.jsx)("div", {
            className: h.divider
          })]
        }), (0, r.jsx)(g.A, {
          guild: t,
          canManageGuild: x
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.A, {
          guild: t,
          canManageGuild: x
        }), n && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: h.divider
          }), (0, r.jsx)(m.V, {
            guild: t
          })]
        })]
      })]
    })
  })
}