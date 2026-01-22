/** Chunk was on 33818 **/
/** chunk id: 854182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk313961 = require("./313961.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t = (0, l.bG)([a.A], () => a.A.getVoiceParticipantsHidden(e));
  return (0, r.jsx)(i.sLh, {
    id: "no-video-hide",
    label: c.intl.string(c.t.BL8ss6),
    checked: !t,
    action: () => o.A.toggleVoiceParticipantsHidden(e, !t)
  })
}