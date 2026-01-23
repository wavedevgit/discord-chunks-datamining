/** Chunk was on 97492 **/
/** chunk id: 870006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk989985 = require("./989985.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk229527 = require("./229527.js"),
  Chunk81400 = require("./81400.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk169880 = require("./169880.js");

function y(e) {
  var t;
  let {
    guild: n
  } = e, l = (0, c.A)({
    scrollPosition: m._F.GUILD_TAG
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(o._, {
      bannerIcon: (0, r.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: A.q3
      }),
      bannerHeader: b.intl.format(b.t.GgMwjk, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: b.intl.string(b.t.ONjwD5),
      textStyles: A.cI,
      headerStyles: A.U_,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(b.t.Viksoo),
        onClick: () => l()
      })
    })
  })
}

function _(e) {
  var t, n;
  let {
    guild: l
  } = e, {
    analyticsLocations: c
  } = (0, a.Ay)(s.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, h.j8)({
    guildId: null != (t = null == l ? true : l.id) ? t : f.dJq,
    analyticsLocations: c
  }), p = d ? b.intl.string(b.t["9ph2v7"]) : b.intl.string(b.t.ldh9Cg), g = d ? b.intl.string(b.t["/PGQf0"]) : b.intl.string(b.t.WikgZ1);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(o._, {
      bannerIcon: (0, r.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: A.q3
      }),
      bannerHeader: b.intl.format(b.t.kcYdTq, {
        guildName: null != (n = null == l ? true : l.name) ? n : ""
      }),
      bannerSubtext: p,
      textStyles: A.cI,
      headerStyles: A.U_,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: g,
        onClick: () => {
          u()
        }
      })
    })
  })
}

function O(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([u.default, d.Ay], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, p.wj)(d.Ay.getMember(t.id, e))
  }, [t]);
  return n.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(g.D.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(_, {
    guild: t
  }) : n.has(g.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(y, {
    guild: t
  }) : (0, r.jsx)(_, {
    guild: t
  })
}