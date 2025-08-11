/** Chunk was on web.js **/
/** chunk id: 521476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk269200 = require("./269200.js");

function b(e) {
  var t;
  let {
    guild: n
  } = e, i = (0, c.Z)({
    scrollPosition: m.Y_.GUILD_TAG
  });
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(l.i, {
      bannerIcon: (0, r.jsx)(o.ics, {
        size: "lg",
        color: "currentColor",
        className: E.bannerIcon
      }),
      bannerHeader: g.intl.format(g.t.GgMwjo, {
        guildName: null != (t = null == n ? true : n.name) ? t : ""
      }),
      bannerSubtext: g.intl.string(g.t.ONjwDw),
      textStyles: E.bannerContainer,
      headerStyles: E.bannerHeader,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(g.t.Viksoq),
        onClick: () => i()
      })
    })
  })
}

function y(e) {
  var t, n;
  let {
    guild: i
  } = e, {
    analyticsLocations: c
  } = (0, s.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [u, d] = (0, _.ww)({
    guildId: null != (t = null == i ? true : i.id) ? t : p.lds,
    analyticsLocations: c,
    openWithoutBackstack: true
  }), f = d ? g.intl.string(g.t["9ph2v7"]) : g.intl.string(g.t.ldh9Cg), h = d ? g.intl.string(g.t["/PGQf3"]) : g.intl.string(g.t.WikgZ2), m = () => {
    u()
  };
  return (0, r.jsx)("div", {
    children: (0, r.jsx)(l.i, {
      bannerIcon: (0, r.jsx)(o.ics, {
        size: "lg",
        color: "currentColor",
        className: E.bannerIcon
      }),
      bannerHeader: g.intl.format(g.t.kcYdTk, {
        guildName: null != (n = null == i ? true : i.name) ? n : ""
      }),
      bannerSubtext: f,
      textStyles: E.bannerContainer,
      headerStyles: E.bannerHeader,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: h,
        onClick: m
      })
    })
  })
}

function O(e) {
  let {
    guild: t
  } = e, n = (0, i.e7)([u.default, d.ZP], () => {
    if (null == t) return new Set;
    let e = u.default.getId();
    return (0, f.no)(d.ZP.getMember(t.id, e))
  }, [t]);
  return n.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(h.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(y, {
    guild: t
  }) : n.has(h.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(b, {
    guild: t
  }) : (0, r.jsx)(y, {
    guild: t
  })
}