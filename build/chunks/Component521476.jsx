/** Chunk was on 82124 **/
/** chunk id: 521476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk545594 = require("./545594.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk715903 = require("./715903.js"),
  Chunk295474 = require("./295474.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk854536 = require("./854536.js");

function v(e) {
  var t;
  let {
    guild: n
  } = e, i = (0, c.Z)({
    scrollPosition: m.Y_.GUILD_TAG
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(s.i, {
      bannerIcon: (0, r.jsx)(l.ics, {
        size: "lg",
        color: "currentColor",
        className: y.bannerIcon
      }),
      bannerHeader: b.intl.format(b.t.GgMwjk, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: b.intl.string(b.t.ONjwD5),
      textStyles: y.bannerContainer,
      headerStyles: y.bannerHeader,
      children: (0, r.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(b.t.Viksoo),
        onClick: () => i()
      })
    })
  })
}

function O(e) {
  var t, n;
  let {
    guild: i
  } = e, {
    analyticsLocations: c
  } = (0, o.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, f.ww)({
    guildId: null != (t = null == i ? true : i.id) ? t : h.lds,
    analyticsLocations: c
  }), p = d ? b.intl.string(b.t["9ph2v7"]) : b.intl.string(b.t.ldh9Cg), g = d ? b.intl.string(b.t["/PGQf0"]) : b.intl.string(b.t.WikgZ1);
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(s.i, {
      bannerIcon: (0, r.jsx)(l.ics, {
        size: "lg",
        color: "currentColor",
        className: y.bannerIcon
      }),
      bannerHeader: b.intl.format(b.t.kcYdTq, {
        guildName: null != (n = null == i ? true : i.name) ? n : ""
      }),
      bannerSubtext: p,
      textStyles: y.bannerContainer,
      headerStyles: y.bannerHeader,
      children: (0, r.jsx)(l.Button, {
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

function j(e) {
  let {
    guild: t
  } = e, n = (0, i.e7)([u.default, d.ZP], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, p.no)(d.ZP.getMember(t.id, e))
  }, [t]);
  return n.has(g.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(g.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(O, {
    guild: t
  }) : n.has(g.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(v, {
    guild: t
  }) : (0, r.jsx)(O, {
    guild: t
  })
}