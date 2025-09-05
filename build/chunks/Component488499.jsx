/** Chunk was on 96033 **/
/** chunk id: 488499, original params: t,e,n (module,exports,require) **/
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
    analyticsPage: n,
    analyticsSection: l,
    isGIF: s,
    banner: d
  } = t;
  return [r.pC.BANNER, r.pC.AVATAR].includes(e) && s ? (0, i.jsx)(a.Z, {
    analyticsSection: l,
    type: e
  }) : e === r.pC.GUILD_BANNER ? (0, i.jsx)(o.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: s,
    banner: d
  }) : null
}