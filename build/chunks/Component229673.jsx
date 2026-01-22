/** Chunk was on web.js **/
/** chunk id: 229673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk429913 = require("./429913.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk953837 = require("./953837.js");

function _(e) {
  let {
    message: t,
    channel: n,
    author: _,
    compact: h
  } = e, {
    nick: m
  } = (0, l.d8)(_, n), g = (0, c.P)({
    user: _,
    channelId: n.id,
    guildId: true,
    messageId: true
  })(), E = (0, a.h)(t.applicationId);
  if (null == E) return null;
  let b = f.intl.format(f.t.m7Lwas, {
    username: m,
    usernameHook: g,
    gameName: E.name,
    gameIconHook: e => (0, r.jsxs)("span", {
      className: p.Y_,
      children: [(0, r.jsx)(s.A, {
        game: E,
        size: s.M.XXSMALL,
        className: p.p4
      }), " ", e]
    }),
    helpdeskArticle: o.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS)
  });
  return (0, r.jsx)(u.A, {
    iconNode: (0, r.jsx)(i.GameControllerIcon, {
      size: "sm"
    }),
    compact: h,
    contentClassName: p.Qs,
    children: (0, r.jsx)("div", {
      children: b
    })
  })
}