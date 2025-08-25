/** Chunk was on web.js **/
/** chunk id: 472401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js");
let {
  API_ENDPOINT: a,
  CDN_HOST: s
} = window.GLOBAL_ENV;

function l(e) {
  let {
    itemId: t,
    hash: n,
    containerWidth: l = 1024
  } = e, c = new URLSearchParams({
    size: (0, r.oO)(l * (0, r.x_)()).toString()
  }).toString(), u = i.$k ? "webp" : "png";
  return null != s ? "https://".concat(s, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(u, "?").concat(c) : "".concat(location.protocol).concat(a).concat(o.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, u), "?").concat(c)
}