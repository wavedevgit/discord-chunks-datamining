/** Chunk was on web.js **/
/** chunk id: 740265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk726542 = require("./726542.js"),
  Chunk603113 = require("./603113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  var t;
  let n = null != (t = (0, i.Z)(e)) ? t : "";
  switch (n) {
    case a.M7m.PS4:
    case a.M7m.PS5:
      return o.intl.formatToPlainString(o.t.A17aM8, {
        platform: n.toUpperCase()
      });
    case a.M7m.XBOX:
    case a.M7m.SAMSUNG:
      return o.intl.formatToPlainString(o.t.A17aM8, {
        platform: r.Z.get(n).name
      });
    default:
      return o.intl.string(o.t["2TbM/G"])
  }
}