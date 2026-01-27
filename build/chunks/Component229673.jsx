/** Chunk was on 92917 **/
/** chunk id: 229673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    message: t,
    channel: n,
    author: f,
    compact: g
  } = e, {
    nick: h
  } = (0, o.d8)(f, n), _ = (0, c.P)({
    user: f,
    channelId: n.id,
    guildId: true,
    messageId: true
  })(), b = (0, l.h)(t.applicationId);
  if (null == b) return null;
  let A = p.intl.format(p.t.m7Lwas, {
    username: h,
    usernameHook: _,
    gameName: b.name,
    gameIconHook: e => (0, r.jsxs)("span", {
      className: m.Y_,
      children: [(0, r.jsx)(a.A, {
        game: b,
        size: a.M.XXSMALL,
        className: m.p4
      }), " ", e]
    }),
    helpdeskArticle: s.A.getArticleURL(d.MVz.SOCIAL_LAYER_CONNECTIONS)
  });
  return (0, r.jsx)(u.A, {
    iconNode: (0, r.jsx)(i.GameControllerIcon, {
      size: "sm"
    }),
    compact: g,
    contentClassName: m.Qs,
    children: (0, r.jsx)("div", {
      children: A
    })
  })
}