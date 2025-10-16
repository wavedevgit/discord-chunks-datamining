/** Chunk was on 72891 **/
/** chunk id: 488499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk180781 = require("./180781.jsx"),
  Chunk321867 = require("./321867.jsx"),
  Chunk486324 = require("./486324.js");

function l(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: c,
    banner: s
  } = e;
  return [o.pC.BANNER, o.pC.AVATAR].includes(t) && c ? (0, i.jsx)(r.Z, {
    analyticsSection: l,
    type: t
  }) : t === o.pC.GUILD_BANNER ? (0, i.jsx)(a.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: c,
    banner: s
  }) : null
}