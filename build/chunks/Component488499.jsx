/** Chunk was on 96033 **/
/** chunk id: 488499, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk180781 = require("./180781.jsx"),
  Chunk321867 = require("./321867.jsx"),
  Chunk486324 = require("./486324.js");

function l(t) {
  let {
    type: e,
    analyticsPage: i,
    analyticsSection: l,
    isGIF: s,
    banner: c
  } = t;
  return [r.pC.BANNER, r.pC.AVATAR].includes(e) && s ? (0, n.jsx)(o.Z, {
    analyticsSection: l,
    type: e
  }) : e === r.pC.GUILD_BANNER ? (0, n.jsx)(a.Z, {
    analyticsSection: l,
    analyticsPage: i,
    isGIF: s,
    banner: c
  }) : null
}