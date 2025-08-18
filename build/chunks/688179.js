/** Chunk was on 91173 **/
/** chunk id: 688179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => a
});
var Chunk806966 = require("./806966.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js");

function a(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i.S.dispatchToLastSubscribed(l.CkL.OPEN_EXPRESSION_PICKER, {
    activeView: o.X1.STICKER
  });
  let a = n.findIndex(e => e.id === t.id);
  false !== a && r.ZN.setActiveCategoryIndex(a)
}