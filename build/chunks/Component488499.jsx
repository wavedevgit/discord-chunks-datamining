/** Chunk was on 77942 **/
/** chunk id: 488499, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk180781 = require("./180781.jsx"),
  Chunk321867 = require("./321867.jsx"),
  Chunk486324 = require("./486324.js");

function l(t) {
  let {
    type: e,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: c,
    banner: s
  } = t;
  return [a.pC.BANNER, a.pC.AVATAR].includes(e) && c ? (0, o.jsx)(i.Z, {
    analyticsSection: l,
    type: e
  }) : e === a.pC.GUILD_BANNER ? (0, o.jsx)(r.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: c,
    banner: s
  }) : null
}