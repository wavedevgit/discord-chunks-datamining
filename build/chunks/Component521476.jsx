/** Chunk was on 7891 **/
/** chunk id: 521476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => _
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
  Chunk216390 = require("./216390.js");

function y(e) {
  var t;
  let {
    guild: n
  } = e, r = (0, c.Z)({
    scrollPosition: g.Y_.GUILD_TAG
  });
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(s.i, {
      bannerIcon: (0, i.jsx)(l.ics, {
        size: "lg",
        color: "currentColor",
        className: C.bannerIcon
      }),
      bannerHeader: b.intl.format(b.t.GgMwjk, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: b.intl.string(b.t.ONjwD5),
      textStyles: C.bannerContainer,
      headerStyles: C.bannerHeader,
      children: (0, i.jsx)(l.Button, {
        variant: "primary",
        size: "sm",
        text: b.intl.string(b.t.Viksoo),
        onClick: () => r()
      })
    })
  })
}

function v(e) {
  var t, n;
  let {
    guild: r
  } = e, {
    analyticsLocations: c
  } = (0, o.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, h.ww)({
    guildId: null != (t = null == r ? true : r.id) ? t : f.lds,
    analyticsLocations: c
  }), p = d ? b.intl.string(b.t["9ph2v7"]) : b.intl.string(b.t.ldh9Cg), m = d ? b.intl.string(b.t["/PGQf0"]) : b.intl.string(b.t.WikgZ1);
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(s.i, {
      bannerIcon: (0, i.jsx)(l.ics, {
        size: "lg",
        color: "currentColor",
        className: C.bannerIcon
      }),
      bannerHeader: b.intl.format(b.t.kcYdTq, {
        guildName: null != (n = null == r ? true : r.name) ? n : ""
      }),
      bannerSubtext: p,
      textStyles: C.bannerContainer,
      headerStyles: C.bannerHeader,
      children: (0, i.jsx)(l.Button, {
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

function _(e) {
  let {
    guild: t
  } = e, n = (0, r.e7)([u.default, d.ZP], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, p.no)(d.ZP.getMember(t.id, e))
  }, [t]);
  return n.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(m.q.AUTOMOD_QUARANTINED_BIO) ? (0, i.jsx)(v, {
    guild: t
  }) : n.has(m.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, i.jsx)(y, {
    guild: t
  }) : (0, i.jsx)(v, {
    guild: t
  })
}