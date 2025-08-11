/** Chunk was on web.js **/
/** chunk id: 688179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => s
});
var Chunk806966 = require("./806966.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js");

function s(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i.S.dispatchToLastSubscribed(o.CkL.OPEN_EXPRESSION_PICKER, {
    activeView: a.X1.STICKER
  });
  let s = n.findIndex(e => e.id === t.id);
  false !== s && r.ZN.setActiveCategoryIndex(s)
}