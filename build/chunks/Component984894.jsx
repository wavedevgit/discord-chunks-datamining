/** Chunk was on 93169 **/
/** chunk id: 984894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk313961 = require("./313961.js"),
  Chunk977997 = require("./977997.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let n = (0, r.bG)([s.A], () => e === s.A.getSelectedParticipantId(t), [t, e]);
  return (0, r.bG)([s.A, o.A], () => {
    let n = o.A.isInChannel(t, e) && o.A.hasVideo(t),
      i = s.A.getLayout(t),
      r = i === d.DUB.MINIMUM || i === d.DUB.NORMAL;
    return !n || r
  }, [t, e]) ? null : (0, i.jsx)(l.Drp, {
    id: "focus-video",
    label: n ? u.intl.string(u.t.KJPKUT) : u.intl.string(u.t["77cRN4"]),
    action: () => a.A.selectParticipant(t, n ? null : e)
  })
}