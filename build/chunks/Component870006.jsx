/** Chunk was on 97492 **/
/** chunk id: 870006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => j
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
    scrollPosition: g._F.GUILD_TAG
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(o._, {
      bannerIcon: (0, r.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: A.q3
      }),
      bannerHeader: m.intl.format(m.t.GgMwjk, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: m.intl.string(m.t.ONjwD5),
      textStyles: A.cI,
      headerStyles: A.U_,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: m.intl.string(m.t.Viksoo),
        onClick: () => l()
      })
    })
  })
}

function O(e) {
  var t, n;
  let {
    guild: l
  } = e, {
    analyticsLocations: c
  } = (0, s.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, p.j8)({
    guildId: null != (t = null == l ? true : l.id) ? t : h.dJq,
    analyticsLocations: c
  }), f = d ? m.intl.string(m.t["9ph2v7"]) : m.intl.string(m.t.ldh9Cg), b = d ? m.intl.string(m.t["/PGQf0"]) : m.intl.string(m.t.WikgZ1);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(o._, {
      bannerIcon: (0, r.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: A.q3
      }),
      bannerHeader: m.intl.format(m.t.kcYdTq, {
        guildName: null != (n = null == l ? true : l.name) ? n : ""
      }),
      bannerSubtext: f,
      textStyles: A.cI,
      headerStyles: A.U_,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: b,
        onClick: () => {
          u()
        }
      })
    })
  })
}

function j(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([u.default, d.Ay], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, f.wj)(d.Ay.getMember(t.id, e))
  }, [t]);
  return n.has(b.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(b.D.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(O, {
    guild: t
  }) : n.has(b.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(y, {
    guild: t
  }) : (0, r.jsx)(O, {
    guild: t
  })
}