/** Chunk was on 84841 **/
/** chunk id: 984894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
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

function o(e, t) {
  let n = (0, i.bG)([d.A], () => e === d.A.getSelectedParticipantId(t), [t, e]);
  return (0, i.bG)([d.A, s.A], () => {
    let n = s.A.isInChannel(t, e) && s.A.hasVideo(t),
      l = d.A.getLayout(t),
      i = l === c.DUB.MINIMUM || l === c.DUB.NORMAL;
    return !n || i
  }, [t, e]) ? null : (0, l.jsx)(r.Drp, {
    id: "focus-video",
    label: n ? u.intl.string(u.t.KJPKUT) : u.intl.string(u.t["77cRN4"]),
    action: () => a.A.selectParticipant(t, n ? null : e)
  })
}