/** Chunk was on 34779 **/
/** chunk id: 252686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk187105 = require("./187105.js");

function c(e) {
  let {
    className: t,
    isFolder: n
  } = e, i = (0, o.dQu)(o.TVs.modules.guildbar.AVATAR_SIZE);
  return (0, r.jsx)(s.ZP, {
    mask: s.ZP.Masks.SQUIRCLE,
    className: l()(t, a.placeholderMask, {
      [a.isFolder]: n
    }),
    width: i,
    height: i,
    children: (0, r.jsx)("div", {
      className: a.dragInner
    })
  })
}