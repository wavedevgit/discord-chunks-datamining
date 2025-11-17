/** Chunk was on 47863 **/
/** chunk id: 28798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk475595 = require("./475595.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948558 = require("./948558.js");
let f = function(e) {
  let {
    quest: t
  } = e, n = (0, i.e7)([o.Z], () => o.Z.getState().theme), f = (0, l.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
  return (0, r.jsx)("div", {
    className: u.wrapper,
    children: (0, r.jsxs)("div", {
      className: u.content,
      children: [(0, r.jsx)("img", {
        src: (0, a.fh)(t, a.eC.GAME_TILE, f).url,
        alt: "",
        className: u.gameTile
      }), (0, r.jsxs)("div", {
        className: u.copy,
        children: [(0, r.jsx)(s.Heading, {
          color: "always-white",
          variant: "text-sm/medium",
          children: d.intl.format(d.t["5nMfBZ"], {
            gameTitle: t.config.messages.gameTitle
          })
        }), (0, r.jsx)(s.Text, {
          className: u.subheading,
          color: "always-white",
          variant: "text-xs/medium",
          children: d.intl.string(d.t.mjbPtS)
        })]
      })]
    })
  })
}