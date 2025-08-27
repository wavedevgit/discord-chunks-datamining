/** Chunk was on web.js **/
/** chunk id: 8454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk158776 = require("./158776.js"),
  Chunk676035 = require("./676035.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = (0, r.e7)([i.default], () => i.default.getId() === e),
    n = (0, o.a)(),
    l = (0, r.e7)([a.Z], () => a.Z.findActivity(e, e => {
      let {
        type: t
      } = e;
      return t === s.IIU.CUSTOM_STATUS
    }));
  return t ? n : l
}