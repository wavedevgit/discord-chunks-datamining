/** Chunk was on 30202 **/
/** chunk id: 818420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    user: t,
    guild: n,
    titleIcon: x
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(), j = null != n, {
    userNameplate: E,
    guildNameplate: C,
    pendingNameplate: O,
    pendingErrors: v
  } = (0, p.Zx)(t, null == n ? true : n.id), S = j ? [s.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE] : [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE], [T, N] = (0, c.US)(S), I = T === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, y = T === s.z.NAMEPLATE_GUILD_SETTINGS_PROFILE_PAGE_NEW_BADGE, A = r.useCallback(() => {
    N(h.L.TAKE_ACTION), (0, m.f)({
      analyticsLocations: _,
      guildId: null == n ? true : n.id
    })
  }, [_, N, null == n ? true : n.id]), P = r.useCallback(() => {
    (null == n ? true : n.id) != null ? (0, d.RH)(null) : (0, l.Rx)(null)
  }, [null == n ? true : n.id]);
  return (0, i.jsx)(g.Z, {
    title: f.intl.string(f.t.x5CoXV),
    titleIcon: I || y ? (0, i.jsx)(u.Z, {
      className: b.newBadge
    }) : x,
    errors: v,
    showBorder: y,
    hasBackground: y,
    description: y && (0, i.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: f.intl.string(f.t.ca69xs)
    }),
    children: (0, i.jsxs)("div", {
      className: b.section,
      children: [(0, i.jsx)(a.zxk, {
        variant: "primary",
        size: "sm",
        text: f.intl.string(f.t.BwdeMz),
        onClick: A
      }), (true === O ? (j ? C : E) != null : null != O) && (0, i.jsx)(a.zxk, {
        variant: "secondary",
        size: "sm",
        text: j ? f.intl.string(f.t.CHf9iI) : f.intl.string(f.t["9zwziY"]),
        onClick: P
      })]
    })
  })
}