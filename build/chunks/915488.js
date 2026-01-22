/** Chunk was on web.js **/
/** chunk id: 915488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
});
var Chunk850992 = require("./850992.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js");

function o(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  i._.dispatchToLastSubscribed(a.jej.OPEN_EXPRESSION_PICKER, {
    activeView: s.kx.STICKER
  });
  let o = n.findIndex(e => e.id === t.id);
  false !== o && r.bM.setActiveCategoryIndex(o)
}