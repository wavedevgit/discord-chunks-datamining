/** Chunk was on 37220 **/
/** chunk id: 279329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk196051 = require("./196051.js"),
  Chunk441729 = require("./441729.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.isSpeakingMessage(t.id, e.id), [t, e]);
  return "" === e.content ? null : (0, r.jsx)(l.sNh, {
    id: "tts",
    label: n ? s.intl.string(s.t.CJ30BP) : s.intl.string(s.t.yGLjXF),
    icon: l.J2R,
    action: () => n ? (0, a.NB)() : (0, a.LA)(t, e)
  })
}