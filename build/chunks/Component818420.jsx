/** Chunk was on web.js **/
/** chunk id: 818420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk158947 = require("./158947.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk526265 = require("./526265.js");

function E(e) {
  let {
    user: t,
    guild: n,
    titleIcon: E
  } = e, {
    analyticsLocations: b
  } = (0, l.ZP)(), y = null != n, {
    userNameplate: O,
    guildNameplate: v,
    pendingNameplate: I,
    pendingErrors: T
  } = (0, _.Zx)(t, null == n ? true : n.id), S = true === I ? (y ? v : O) != null : null != I, A = y ? [a.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE] : [a.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE], [C, N] = (0, c.US)(A), R = C === a.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, P = C === a.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE, w = i.useCallback(() => {
    N(h.L.TAKE_ACTION), (0, f.f)({
      analyticsLocations: b,
      guildId: null == n ? true : n.id
    })
  }, [b, N, null == n ? true : n.id]), D = i.useCallback(() => {
    (null == n ? true : n.id) != null ? (0, u.RH)(null) : (0, s.Rx)(null)
  }, [null == n ? true : n.id]);
  return (0, r.jsx)(p.Z, {
    title: m.intl.string(m.t.x5CoXV),
    titleIcon: R || P ? (0, r.jsx)(d.Z, {
      className: g.newBadge
    }) : E,
    errors: T,
    showBorder: P,
    hasBackground: P,
    description: P && (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: m.intl.string(m.t.ca69xs)
    }),
    children: (0, r.jsxs)("div", {
      className: g.section,
      children: [(0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: m.intl.string(m.t.BwdeMz),
        onClick: w
      }), S && (0, r.jsx)(o.zxk, {
        variant: "secondary",
        size: "sm",
        text: y ? m.intl.string(m.t.CHf9iI) : m.intl.string(m.t["9zwziY"]),
        onClick: D
      })]
    })
  })
}