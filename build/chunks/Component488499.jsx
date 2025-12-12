/** Chunk was on 76543 **/
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
    isGIF: s,
    banner: c
  } = e;
  return [a.pC.BANNER, a.pC.AVATAR].includes(t) && s ? (0, o.jsx)(r.Z, {
    analyticsSection: l,
    type: t
  }) : t === a.pC.GUILD_BANNER ? (0, o.jsx)(i.Z, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: s,
    banner: c
  }) : null
}