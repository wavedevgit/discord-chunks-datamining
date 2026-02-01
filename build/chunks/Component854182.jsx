/** Chunk was on 92617 **/
/** chunk id: 854182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk313961 = require("./313961.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let t = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(a.sLh, {
    id: "no-video-hide",
    label: d.intl.string(d.t.BL8ss6),
    checked: !t,
    action: () => l.A.toggleVoiceParticipantsHidden(e, !t)
  })
}