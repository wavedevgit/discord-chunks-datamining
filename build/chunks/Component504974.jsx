/** Chunk was on 94073 **/
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
    isGIF: s,
    banner: c
  } = e;
  return [i.HL.BANNER, i.HL.AVATAR].includes(t) && s ? (0, r.jsx)(o.A, {
    analyticsSection: l,
    type: t
  }) : t === i.HL.GUILD_BANNER ? (0, r.jsx)(a.A, {
    analyticsSection: l,
    analyticsPage: n,
    isGIF: s,
    banner: c
  }) : null
}