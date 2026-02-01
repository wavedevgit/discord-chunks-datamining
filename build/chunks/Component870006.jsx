/** Chunk was on 61344 **/
/** chunk id: 870006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => v
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

function _(e) {
  var t;
  let {
    guild: n
  } = e, r = (0, c.A)({
    scrollPosition: g._F.GUILD_TAG
  });
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(o._, {
      bannerIcon: (0, l.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: b.q3
      }),
      bannerHeader: A.intl.format(A.t.GgMwjk, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: A.intl.string(A.t.ONjwD5),
      textStyles: b.cI,
      headerStyles: b.U_,
      children: (0, l.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: A.intl.string(A.t.Viksoo),
        onClick: () => r()
      })
    })
  })
}

function y(e) {
  var t, n;
  let {
    guild: r
  } = e, {
    analyticsLocations: c
  } = (0, s.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, p.j8)({
    guildId: null != (t = null == r ? true : r.id) ? t : f.dJq,
    analyticsLocations: c
  }), h = d ? A.intl.string(A.t["9ph2v7"]) : A.intl.string(A.t.ldh9Cg), m = d ? A.intl.string(A.t["/PGQf0"]) : A.intl.string(A.t.WikgZ1);
  return (0, l.jsx)("div", {
    children: (0, l.jsx)(o._, {
      bannerIcon: (0, l.jsx)(i._mZ, {
        size: "lg",
        color: "currentColor",
        className: b.q3
      }),
      bannerHeader: A.intl.format(A.t.kcYdTq, {
        guildName: null != (n = null == r ? true : r.name) ? n : ""
      }),
      bannerSubtext: h,
      textStyles: b.cI,
      headerStyles: b.U_,
      children: (0, l.jsx)(i.Button, {
        variant: "primary",
        size: "sm",
        text: m,
        onClick: () => {
          u()
        }
      })
    })
  })
}

function v(e) {
  let {
    guild: t
  } = e, n = (0, r.bG)([u.default, d.Ay], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, h.wj)(d.Ay.getMember(t.id, e))
  }, [t]);
  return n.has(m.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(m.D.AUTOMOD_QUARANTINED_BIO) ? (0, l.jsx)(y, {
    guild: t
  }) : n.has(m.D.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, l.jsx)(_, {
    guild: t
  }) : (0, l.jsx)(y, {
    guild: t
  })
}