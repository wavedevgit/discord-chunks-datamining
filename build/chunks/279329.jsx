/** Chunk was on web.js **/
/** chunk id: 279329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk196051 = require("./196051.js"),
  Chunk441729 = require("./441729.js"),
  Chunk388032 = require("./388032.js");

function c(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.isSpeakingMessage(t.id, e.id), [t, e]);
  return "" === e.content ? null : <o.sNh id={"tts"} label={n ? l.intl.string(l.t.CJ30BA) : l.intl.string(l.t.yGLjXF)} icon={o.J2R} action={() => n ? (0, a.NB)() : (0, a.LA)(t, e)} />
}