/** Chunk was on 91173 **/
/** chunk id: 688179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => o
});
var Chunk806966 = require("./806966.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js");

function o(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, {
    activeView: a.X1.STICKER
  });
  let o = n.findIndex(e => e.id === t.id);
  false !== o && r.ZN.setActiveCategoryIndex(o)
}