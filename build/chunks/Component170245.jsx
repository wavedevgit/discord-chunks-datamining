/** Chunk was on 74969 **/
/** chunk id: 170245, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk699516 = require("./699516.js");
require("./51144.js");
var Chunk639845 = require("./639845.js");
let h = function(e) {
  let {
    user: t,
    hovered: i,
    subText: s,
    showAccountIdentifier: h,
    status: p,
    isMobile: d,
    className: m
  } = e, N = (0, o.e7)([u.Z], () => u.Z.getNickname(t.id));
  return (0, n.jsxs)("div", {
    className: r()(c.userInfo, m, {
      [c.hovered]: i
    }),
    children: [(0, n.jsx)(l.Z, {
      user: t,
      className: c.avatar,
      animate: i,
      status: p,
      isMobile: d
    }), (0, n.jsxs)("div", {
      className: c.text,
      children: [(0, n.jsx)(a.Z, {
        user: t,
        nick: N,
        botClass: c.botTag,
        className: r()(c.discordTag, {
          [c.alignPomelo]: t.hasUniqueUsername()
        }),
        usernameClass: c.username,
        discriminatorClass: c.discriminator,
        showAccountIdentifier: h
      }), (0, n.jsx)("div", {
        className: c.subtext,
        children: s
      })]
    })]
  })
}