/** Chunk was on web.js **/
/** chunk id: 600397, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk657707 = require("./657707.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk372563 = require("./372563.js");

function p(e) {
  let {
    message: t,
    channel: n,
    author: p,
    compact: h
  } = e, {
    nick: m
  } = (0, l.Sw)(p, n), g = (0, c.l)({
    user: p,
    channelId: n.id,
    guildId: true,
    messageId: true
  })(), E = (0, a.q)(t.applicationId);
  if (null == E) return null;
  let b = f.intl.format(f.t.m7Lwas, {
    username: m,
    usernameHook: g,
    gameName: E.name,
    gameIconHook: e => (0, r.jsxs)("span", {
      className: _.gameContainer,
      children: [(0, r.jsx)(o.Z, {
        game: E,
        size: o.A.XXSMALL,
        className: _.inlineIcon
      }), " ", e]
    }),
    helpdeskArticle: s.Z.getArticleURL(d.BhN.SOCIAL_LAYER_CONNECTIONS)
  });
  return (0, r.jsx)(u.Z, {
    iconNode: (0, r.jsx)(i.iWm, {
      size: "sm"
    }),
    compact: h,
    contentClassName: _.content,
    children: (0, r.jsx)("div", {
      children: b
    })
  })
}