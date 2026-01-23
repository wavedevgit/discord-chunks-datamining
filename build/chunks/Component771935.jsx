/** Chunk was on 47841 **/
/** chunk id: 771935, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  H: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk840120 = require("./840120.js"),
  Chunk576705 = require("./576705.js"),
  Chunk555337 = require("./555337.js"),
  Chunk988921 = require("./988921.jsx"),
  Chunk365044 = require("./365044.jsx"),
  Chunk423418 = require("./423418.jsx"),
  Chunk989860 = require("./989860.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk632275 = require("./632275.js");

function x() {
  let {
    analyticsLocations: e
  } = (0, a.Ay)(s.A.GUILD_SETTINGS_BOOST_PERKS_PAGE), t = (0, l.bG)([d.A], () => d.A.getProps().guild, []), {
    isGuildAdmin: n,
    canManageGuild: x
  } = (0, l.cf)([c.A], () => ({
    isGuildAdmin: null != t && c.A.can(f.xBc.ADMINISTRATOR, t),
    canManageGuild: null != t && c.A.can(f.xBc.MANAGE_GUILD, t)
  })), j = (0, o.M5)(null == t ? true : t.id, "GuildSettingsBoostPerks");
  return null == t ? null : (0, r.jsx)(a.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: h.k,
      children: [(0, r.jsx)(i.DZT, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: b.intl.string(b.t.UKgg5N)
      }), (0, r.jsx)(p.I, {
        canManageGuild: x,
        premiumProgressBarEnabled: t.premiumProgressBarEnabled
      }), (0, r.jsx)("div", {
        className: h.y
      }), (0, r.jsx)(u.l, {
        guild: t,
        canManageGuild: x
      }), (0, r.jsx)("div", {
        className: h.y
      }), j ? (0, r.jsxs)(r.Fragment, {
        children: [n && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.u, {
            guild: t
          }), (0, r.jsx)("div", {
            className: h.y
          })]
        }), (0, r.jsx)(g.I, {
          guild: t,
          canManageGuild: x
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.I, {
          guild: t,
          canManageGuild: x
        }), n && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: h.y
          }), (0, r.jsx)(m.u, {
            guild: t
          })]
        })]
      })]
    })
  })
}