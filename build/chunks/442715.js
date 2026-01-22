/** Chunk was on web.js **/
/** chunk id: 442715, original params: e,t,n (module,exports,re quire) **/
"use strict";
async function r(e, t = {}) {
  let {
    width: n,
    height: i
  } = getImageSize(e, t), a = await cloneNode(e, t, true);
  return await embedWebFonts(a, t), await embedImages(a, t), applyStyle(a, t), await nodeToDataURL(a, n, i)
}
require("./673299.js"), require("./162213.js"), require("./53691.js"), require("./154963.js"), require("./186659.js")