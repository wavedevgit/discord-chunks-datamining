/** Chunk was on 72891 **/
/** chunk id: 488499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  return [r.pC.BANNER, r.pC.AVATAR].includes(t) && c ? (0, i.jsx)(o.Z, {
    analyticsSection: l,
    type: t
  }) : t === r.pC.GUILD_BANNER ? (0, i.jsx)(a.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: c,
    banner: s
  }) : null
}