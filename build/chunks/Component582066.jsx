/** Chunk was on 384 **/
/** chunk id: 582066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk978088 = require("./978088.jsx"),
  Chunk713328 = require("./713328.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk65992 = require("./65992.js");

function j(e) {
  var t, n;
  let {
    guildId: i
  } = e, j = (0, a.e7)([g.Z], () => g.Z.getGuild(i)), _ = (0, a.e7)([m.default], () => m.default.getCurrentUser()), {
    onAdoptTag: v,
    isAdopting: O
  } = (0, u.Z)(i), C = (null == _ || null == (t = _.primaryGuild) ? true : t.identityGuildId) === i && (null == _ || null == (n = _.primaryGuild) ? true : n.identityEnabled) === true;
  if (null != _ && null != j && (0, c.jq)(j)) return (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(s.Text, {
      className: x.section,
      variant: "text-xs/medium",
      color: "text-muted",
      children: C ? b.intl.string(h.default["6xBCpG"]) : b.intl.string(h.default.eSRKez)
    }), (0, r.jsx)("div", {
      className: x.divider
    }), (0, r.jsxs)("div", {
      className: l()(x.section, x.body),
      children: [(0, r.jsx)(f.l, {
        avatar: (0, r.jsx)(o.Z, {
          user: _,
          guildId: i,
          avatarSize: s.EFr.SIZE_40,
          "aria-hidden": true
        }),
        decorations: (0, r.jsx)(d.m0, {
          guildId: j.id,
          guildBadge: j.profile.badge,
          guildTag: j.profile.tag,
          inline: false
        }),
        username: p.ZP.getName(i, null, _),
        message: b.intl.string(b.t["6OSasb"])
      }), (0, r.jsx)(s.Button, {
        variant: "primary",
        text: b.intl.string(b.t.cQDYRu),
        onClick: v,
        loading: O,
        disabled: C,
        fullWidth: true
      })]
    })]
  })
}