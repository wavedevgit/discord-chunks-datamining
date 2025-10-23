/** Chunk was on 1272 **/
/** chunk id: 170245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk699516 = require("./699516.js");
require("./51144.js");
var Chunk913139 = require("./913139.js");
let d = function(e) {
  let {
    user: t,
    hovered: n,
    subText: i,
    showAccountIdentifier: d,
    status: p,
    isMobile: f,
    className: h
  } = e, m = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
  return (0, r.jsxs)("div", {
    className: l()(u.userInfo, h, {
      [u.hovered]: n
    }),
    children: [(0, r.jsx)(o.Z, {
      user: t,
      className: u.avatar,
      animate: n,
      status: p,
      isMobile: f
    }), (0, r.jsxs)("div", {
      className: u.text,
      children: [(0, r.jsx)(s.Z, {
        user: t,
        nick: m,
        botClass: u.botTag,
        className: l()(u.discordTag, {
          [u.alignPomelo]: t.hasUniqueUsername()
        }),
        usernameClass: u.username,
        discriminatorClass: u.discriminator,
        showAccountIdentifier: d
      }), (0, r.jsx)("div", {
        className: u.subtext,
        children: i
      })]
    })]
  })
}