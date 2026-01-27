/** Chunk was on 92917 **/
/** chunk id: 915488, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => s
});
var Chunk850992 = require("./850992.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js");

function s(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i._.dispatchToLastSubscribed(l.jej.OPEN_EXPRESSION_PICKER, {
    activeView: a.kx.STICKER
  });
  let s = n.findIndex(e => e.id === t.id);
  false !== s && r.bM.setActiveCategoryIndex(s)
}