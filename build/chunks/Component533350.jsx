/** Chunk was on 47841 **/
/** chunk id: 533350, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk432371 = require("./432371.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk376261 = require("./376261.js"),
  Chunk576705 = require("./576705.js"),
  Chunk555337 = require("./555337.js"),
  Chunk503929 = require("./503929.jsx"),
  Chunk580403 = require("./580403.jsx"),
  Chunk242849 = require("./242849.jsx"),
  Chunk158352 = require("./158352.jsx"),
  Chunk668133 = require("./668133.jsx"),
  Chunk675654 = require("./675654.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk574436 = require("./574436.js");
let y = function() {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(a.A.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, l.bG)([u.A], () => u.A.getProps().guild, []), n = (0, l.bG)([d.A], () => null != t && d.A.can(h.xBc.MANAGE_GUILD, t)), y = (0, o.T)(t), v = (0, s.vC)(null != t ? t : true);
  return null == t ? null : (0, r.jsx)(c.f5, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: O.kL,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(i.DZT, {
          variant: "heading-lg/semibold",
          color: "text-strong",
          children: j.intl.string(j.t["6TAHbx"])
        }), (0, r.jsx)(i.EYj, {
          variant: "text-sm/medium",
          color: "text-default",
          tag: "p",
          className: O.h_,
          children: j.intl.string(j.t.XCGZFk)
        })]
      }), true === v && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.c, {
          canManageGuild: n,
          features: t.features
        }), (0, r.jsx)("div", {
          className: O.yF
        })]
      }), (0, r.jsx)(p.h, {
        canManageGuild: n,
        guild: t
      }), true !== y && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: O.yF
        }), (0, r.jsx)(f.l, {
          isInventoryFeedEnabled: y,
          canManageGuild: n,
          features: t.features
        })]
      }), (0, r.jsx)("div", {
        className: O.yF
      }), (0, r.jsx)(g.P, {
        guildId: t.id,
        defaultSettings: t.defaultMessageNotifications,
        canManageGuild: n
      }), (0, r.jsx)("div", {
        className: O.yF
      }), (0, r.jsx)(b.R, {
        canManageGuild: n,
        guild: t
      }), true === n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: O.yF
        }), (0, r.jsx)(x.E, {
          guildId: t.id
        })]
      })]
    })
  })
}