/** Chunk was on web.js **/
/** chunk id: 915014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk36563 = require("./36563.jsx"),
  Chunk139117 = require("./139117.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk268685 = require("./268685.js"),
  Chunk407518 = require("./407518.js");
let _ = 3;

function m(e) {
  let {
    user: t,
    onOpenProfile: n
  } = e, {
    mutualFriends: m,
    mutualGuilds: h
  } = (0, l.Z)(t), g = null != m && m.length > 0, E = null != h && h.length > 0, b = g && E ? "text-xs/normal" : "text-sm/normal";
  if (!g && !E) return null;
  let y = () => g ? (0, r.jsxs)(o.P3F, {
      className: p.section,
      onClick: () => null == n ? true : n(d.oh.MUTUAL_FRIENDS),
      children: [(0, r.jsx)(i.Z, {
        maxUsers: _,
        users: m.map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        size: f.EF.SIZE_16,
        hideOverflowCount: true,
        disableUsernameTooltip: true,
        "aria-hidden": true
      }), (0, r.jsx)(o.Text, {
        className: p.text,
        variant: b,
        color: "interactive-text-default",
        children: (0, c.Z)(m.length)
      })]
    }) : null,
    O = () => g && E ? (0, r.jsx)("div", {
      "aria-hidden": "true",
      className: p.spacer
    }) : null,
    v = () => E ? (0, r.jsxs)(o.P3F, {
      className: p.section,
      onClick: () => null == n ? true : n(d.oh.MUTUAL_GUILDS),
      children: [!g && (0, r.jsx)(a.Z, {
        maxGuilds: _,
        guilds: h.map(e => {
          let {
            guild: t
          } = e;
          return t
        }),
        size: s.Z.Sizes.SMOL,
        hideOverflowCount: true,
        disableGuildNameTooltip: true
      }), (0, r.jsx)(o.Text, {
        className: p.text,
        variant: b,
        color: "interactive-text-default",
        children: (0, u.Z)(h.length)
      })]
    }) : null;
  return (0, r.jsxs)("div", {
    className: p.mutuals,
    children: [y(), O(), v()]
  })
}