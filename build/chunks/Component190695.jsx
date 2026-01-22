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
  } = e, j = (0, s.bG)([f.A], () => f.A.getGuild(i)), O = (0, s.bG)([g.default], () => g.default.getCurrentUser()), {
    onAdoptTag: y,
    isAdopting: v
  } = (0, u.A)(i), A = (null == O || null == (t = O.primaryGuild) ? true : t.identityGuildId) === i && (null == O || null == (n = O.primaryGuild) ? true : n.identityEnabled) === true;
  if (null != O && null != j && (0, o.q0)(j)) return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)(a.Text, {
      className: h.uW,
      variant: "text-xs/medium",
      color: "text-muted",
      children: A ? x.intl.string(p.default["6xBCpG"]) : x.intl.string(p.default.eSRKez)
    }), (0, r.jsx)("div", {
      className: h.yF
    }), (0, r.jsxs)("div", {
      className: l()(h.uW, h.rf),
      children: [(0, r.jsx)(m.V, {
        avatar: (0, r.jsx)(c.A, {
          user: O,
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
        username: b.Ay.getName(i, null, O),
        message: x.intl.string(x.t["6OSasb"])
      }), (0, r.jsx)(a.Button, {
        variant: "primary",
        text: x.intl.string(x.t.cQDYRu),
        onClick: y,
        loading: v,
        disabled: A,
        fullWidth: true
      })]
    })]
  })
}