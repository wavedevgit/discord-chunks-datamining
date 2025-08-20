/** Chunk was on 26434 **/
/** chunk id: 600397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  let {
    message: t,
    channel: n,
    author: f,
    compact: g
  } = e, {
    nick: _
  } = (0, s.Sw)(f, n), h = (0, c.l)({
    user: f,
    channelId: n.id,
    guildId: true,
    messageId: true
  })(), b = (0, l.q)(t.applicationId);
  if (null == b) return null;
  let E = p.intl.format(p.t.m7Lwam, {
    username: _,
    usernameHook: h,
    gameName: b.name,
    gameIconHook: e => (0, r.jsxs)("span", {
      className: m.gameContainer,
      children: [(0, r.jsx)(o.Z, {
        game: b,
        size: o.Z.Sizes.XXSMALL,
        className: m.inlineIcon
      }), " ", e]
    }),
    helpdeskArticle: a.Z.getArticleURL(d.BhN.SOCIAL_LAYER_CONNECTIONS)
  });
  return (0, r.jsx)(u.Z, {
    iconNode: (0, r.jsx)(i.iWm, {
      size: "sm"
    }),
    compact: g,
    contentClassName: m.content,
    children: (0, r.jsx)("div", {
      children: E
    })
  })
}