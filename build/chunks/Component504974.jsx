/** Chunk was on 94073 **/
/** chunk id: 504974, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk515598 = require("./515598.jsx"),
  Chunk719335 = require("./719335.jsx"),
  Chunk339984 = require("./339984.js");

function s(e) {
  let {
    type: t,
    analyticsPage: r,
    analyticsSection: s,
    isGIF: o,
    banner: i
  } = e;
  return [l.HL.BANNER, l.HL.AVATAR].includes(t) && o ? (0, a.jsx)(c.A, {
    analyticsSection: s,
    type: t
  }) : t === l.HL.GUILD_BANNER ? (0, a.jsx)(n.A, {
    analyticsSection: s,
    analyticsPage: r,
    isGIF: o,
    banner: i
  }) : null
}