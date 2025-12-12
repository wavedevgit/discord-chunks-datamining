/** Chunk was on web.js **/
/** chunk id: 131734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk911969 = require("./911969.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  if (null == e) return null;
  let {
    linkedGames: t = []
  } = e, n = t.find(e => e.type === r.tE.NVIDIA);
  return null != n ? n : e.thirdPartySkus.find(e => e.distributor === i.GQo.NVIDIA_GDN_APP)
}