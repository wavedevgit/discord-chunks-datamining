/** Chunk was on web.js **/
/** chunk id: 818420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk526265 = require("./526265.js");

function f(e) {
  let {
    user: t,
    guild: n,
    titleIcon: f
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(), p = null != n, {
    userNameplate: h,
    guildNameplate: m,
    pendingNameplate: g,
    pendingErrors: E
  } = (0, l.Zx)(t, null == n ? true : n.id), b = true === g ? (p ? m : h) != null : null != g, y = i.useCallback(() => {
    (0, s.f)({
      analyticsLocations: _,
      guildId: null == n ? true : n.id
    })
  }, [_, null == n ? true : n.id]), O = i.useCallback(() => {
    (0, l.Wh)(null, null == n ? true : n.id)
  }, [null == n ? true : n.id]);
  return (0, r.jsx)(c.Z, {
    title: u.intl.string(u.t.x5CoXR),
    titleIcon: f,
    errors: E,
    children: (0, r.jsxs)("div", {
      className: d.section,
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: u.intl.string(u.t.BwdeM1),
        onClick: y
      }), b && (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: p ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
        onClick: O
      })]
    })
  })
}