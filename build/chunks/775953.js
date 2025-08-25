/** Chunk was on web.js **/
/** chunk id: 775953, original params: e,t,n (module,exports,re quire) **/
"use strict";
async function r(e, t = {}) {
  let {
    width: n,
    height: i
  } = getImageSize(e, t), o = await cloneNode(e, t, true);
  return await embedWebFonts(o, t), await embedImages(o, t), applyStyle(o, t), await nodeToDataURL(o, n, i)
}
require("./68133.js"), require("./431462.js"), require("./51466.js"), require("./754396.js"), require("./961742.js")