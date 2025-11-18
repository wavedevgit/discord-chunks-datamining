/** Chunk was on 10023 **/
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
  Chunk60875 = require("./60875.js");

function c(e) {
  let {
    className: t,
    isFolder: n
  } = e, i = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, r.jsx)(a.ZP, {
    mask: a.ZP.Masks.SQUIRCLE,
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