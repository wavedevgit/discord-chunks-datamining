/** Chunk was on web.js **/
/** chunk id: 818420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk318110 = require("./318110.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk220513 = require("./220513.js");

function p(e) {
  let {
    user: t,
    guild: n,
    titleIcon: p
  } = e, {
    analyticsLocations: h
  } = (0, s.ZP)(), m = null != n, {
    userNameplate: g,
    guildNameplate: E,
    pendingNameplate: b,
    pendingErrors: y
  } = (0, u.Zx)(t, null == n ? true : n.id), O = true === b ? (m ? E : g) != null : null != b, v = i.useCallback(() => {
    (0, c.f)({
      analyticsLocations: h,
      guildId: null == n ? true : n.id
    })
  }, [h, null == n ? true : n.id]), I = i.useCallback(() => {
    (null == n ? true : n.id) != null ? (0, l.RH)(null) : (0, o.Rx)(null)
  }, [null == n ? true : n.id]);
  return (0, r.jsx)(d.Z, {
    title: f.intl.string(f.t.x5CoXR),
    titleIcon: p,
    errors: y,
    children: (0, r.jsxs)("div", {
      className: _.section,
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: f.intl.string(f.t.BwdeM1),
        onClick: v
      }), O && (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: m ? f.intl.string(f.t.CHf9iJ) : f.intl.string(f.t["9zwziY"]),
        onClick: I
      })]
    })
  })
}