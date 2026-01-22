/** Chunk was on web.js **/
/** chunk id: 450995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk155718 = require("./155718.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  if (null == e) return null;
  let {
    linkedGames: t = []
  } = e, n = t.find(e => e.type === r.Mh.NVIDIA);
  return null != n ? n : e.thirdPartySkus.find(e => e.distributor === i.d3x.NVIDIA_GDN_APP)
}