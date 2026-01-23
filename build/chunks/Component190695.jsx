/** Chunk was on 47841 **/
/** chunk id: 190695, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk291661 = require("./291661.jsx"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk514661 = require("./514661.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk29086 = require("./29086.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk908742 = require("./908742.js");

function j(e) {
  var t, n;
  let {
    guildId: i
  } = e, j = (0, s.bG)([g.A], () => g.A.getGuild(i)), _ = (0, s.bG)([m.default], () => m.default.getCurrentUser()), {
    onAdoptTag: O,
    isAdopting: v
  } = (0, u.A)(i), y = (null == _ || null == (t = _.primaryGuild) ? true : t.identityGuildId) === i && (null == _ || null == (n = _.primaryGuild) ? true : n.identityEnabled) === true;
  if (null != _ && null != j && (0, c.q0)(j)) return (0, r.jsxs)("div", {
    className: x.kL,
    children: [(0, r.jsx)(a.Text, {
      className: x.uW,
      variant: "text-xs/medium",
      color: "text-muted",
      children: y ? h.intl.string(b.default["6xBCpG"]) : h.intl.string(b.default.eSRKez)
    }), (0, r.jsx)("div", {
      className: x.yF
    }), (0, r.jsxs)("div", {
      className: l()(x.uW, x.rf),
      children: [(0, r.jsx)(f.V, {
        avatar: (0, r.jsx)(o.A, {
          user: _,
          guildId: i,
          avatarSize: a._3J.SIZE_40,
          "aria-hidden": true
        }),
        decorations: (0, r.jsx)(d.o9, {
          guildId: j.id,
          guildBadge: j.profile.badge,
          guildTag: j.profile.tag,
          inline: false
        }),
        username: p.Ay.getName(i, null, _),
        message: h.intl.string(h.t["6OSasb"])
      }), (0, r.jsx)(a.Button, {
        variant: "primary",
        text: h.intl.string(h.t.cQDYRu),
        onClick: O,
        loading: v,
        disabled: y,
        fullWidth: true
      })]
    })]
  })
}