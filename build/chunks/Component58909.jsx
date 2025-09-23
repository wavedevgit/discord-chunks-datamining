/** Chunk was on 21376 **/
/** chunk id: 58909, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk446094 = require("./446094.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk742409 = require("./742409.jsx"),
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk610462 = require("./610462.js");

function j(e) {
  var t, n;
  let {
    guildId: i
  } = e, j = (0, s.e7)([m.Z], () => m.Z.getGuild(i)), v = (0, s.e7)([g.default], () => g.default.getCurrentUser()), {
    onAdoptTag: _,
    isAdopting: O
  } = (0, u.Z)(i), y = (null == v || null == (t = v.primaryGuild) ? true : t.identityGuildId) === i && (null == v || null == (n = v.primaryGuild) ? true : n.identityEnabled) === true;
  if (null != v && null != j && (0, c.jq)(j)) return (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(a.Text, {
      className: x.section,
      variant: "text-xs/medium",
      color: "text-muted",
      children: y ? b.intl.string(h.default["6xBCpK"]) : b.intl.string(h.default.eSRKe3)
    }), (0, r.jsx)("div", {
      className: x.divider
    }), (0, r.jsxs)("div", {
      className: l()(x.section, x.body),
      children: [(0, r.jsx)(f.l, {
        avatar: (0, r.jsx)(o.Z, {
          user: v,
          guildId: i,
          avatarSize: a.EFr.SIZE_40,
          "aria-hidden": true
        }),
        decorations: (0, r.jsx)(d.m0, {
          guildId: j.id,
          guildBadge: j.profile.badge,
          guildTag: j.profile.tag,
          inline: false
        }),
        username: p.ZP.getName(i, null, v),
        message: b.intl.string(b.t["6OSasb"])
      }), (0, r.jsx)(a.zxk, {
        variant: "primary",
        text: b.intl.string(b.t.cQDYRk),
        onClick: _,
        loading: O,
        disabled: y,
        fullWidth: true
      })]
    })]
  })
}