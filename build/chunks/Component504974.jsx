/** Chunk was on 87916 **/
/** chunk id: 504974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk515598 = require("./515598.jsx"),
  Chunk719335 = require("./719335.jsx"),
  Chunk339984 = require("./339984.js");

function l(e) {
  let {
    type: t,
    analyticsPage: n,
    analyticsSection: l,
    isGIF: o,
    banner: c
  } = e;
  return [r.HL.BANNER, r.HL.AVATAR].includes(t) && o ? (0, a.jsx)(s.A, {
    analyticsSection: l,
    type: t
  }) : t === r.HL.GUILD_BANNER ? (0, a.jsx)(i.A, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: o,
    banner: c
  }) : null
}