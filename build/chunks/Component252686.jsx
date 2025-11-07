/** Chunk was on 31899 **/
/** chunk id: 252686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk559931 = require("./559931.js");

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