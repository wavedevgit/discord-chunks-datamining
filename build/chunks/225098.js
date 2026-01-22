/** Chunk was on web.js **/
/** chunk id: 225098, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => l
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk776231 = require("./776231.js"),
  Chunk486020 = require("./486020.js"),
  Chunk652215 = require("./652215.js");
let {
  API_ENDPOINT: s,
  CDN_HOST: o
} = window.GLOBAL_ENV;

function l(e) {
  let {
    itemId: t,
    hash: n,
    containerWidth: l = 1024
  } = e, c = new URLSearchParams({
    size: (0, r.kr)(l * (0, r.mZ)()).toString()
  }).toString(), u = i.QB ? "webp" : "png";
  return null != o ? "https://".concat(o, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(u, "?").concat(c) : "".concat(location.protocol).concat(s).concat(a.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), "?").concat(c)
}