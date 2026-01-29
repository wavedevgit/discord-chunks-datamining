/** Chunk was on 87916 **/
/** chunk id: 504974, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk515598 = require("./515598.jsx"),
  Chunk719335 = require("./719335.jsx"),
  Chunk339984 = require("./339984.js");

function r(e) {
  let {
    type: t,
    analyticsPage: a,
    analyticsSection: r,
    isGIF: s,
    banner: l
  } = e;
  return [o.HL.BANNER, o.HL.AVATAR].includes(t) && s ? (0, n.jsx)(c.A, {
    analyticsSection: r,
    type: t
  }) : t === o.HL.GUILD_BANNER ? (0, n.jsx)(i.A, {
    analyticsSection: r,
    analyticsPage: a,
    isGIF: s,
    banner: l
  }) : null
}