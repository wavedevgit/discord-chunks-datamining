/** Chunk was on 51235 **/
/** chunk id: 252686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk355762 = require("./355762.js");

function c(e) {
  let {
    className: t,
    isFolder: n
  } = e, i = (0, a.dQu)(a.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, r.jsx)(o.ZP, {
    mask: o.ZP.Masks.SQUIRCLE,
    className: l()(t, s.placeholderMask, {
      [s.isFolder]: n
    }),
    width: i,
    height: i,
    children: (0, r.jsx)("div", {
      className: s.dragInner
    })
  })
}