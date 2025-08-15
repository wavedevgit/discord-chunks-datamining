/** Chunk was on 96750 **/
/** chunk id: 740265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk726542 = require("./726542.js"),
  Chunk941033 = require("./941033.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  var t;
  let n = null != (t = (0, i.Z)(e)) ? t : "";
  switch (n) {
    case l.M7m.PS4:
    case l.M7m.PS5:
      return a.intl.formatToPlainString(a.t.A17aMz, {
        platform: n.toUpperCase()
      });
    case l.M7m.XBOX:
    case l.M7m.SAMSUNG:
      return a.intl.formatToPlainString(a.t.A17aMz, {
        platform: r.Z.get(n).name
      });
    default:
      return a.intl.string(a.t["2TbM/P"])
  }
}