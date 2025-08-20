/** Chunk was on web.js **/
/** chunk id: 757746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk558381 = require("./558381.js"),
  Chunk551428 = require("./551428.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk442837.Kb)(Chunk551428.Z, {
  queryId: e => o.McO.STORE_LISTING(e),
  get: e => null != e ? a.Z.getForSKU(e) : null,
  load: (e, t) => null != t ? (0, i.km)(t) : Promise.resolve(),
  useStateHook: Chunk442837.e7
})