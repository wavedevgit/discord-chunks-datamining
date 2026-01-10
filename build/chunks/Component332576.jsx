/** Chunk was on 60677 **/
/** chunk id: 332576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let n = (0, r.e7)([s.Z], () => e === s.Z.getSelectedParticipantId(t), [t, e]);
  return (0, r.e7)([s.Z, a.Z], () => {
    let n = a.Z.isInChannel(t, e) && a.Z.hasVideo(t),
      i = s.Z.getLayout(t),
      r = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
    return !n || r
  }, [t, e]) ? null : (0, i.jsx)(l.sNh, {
    id: "focus-video",
    label: n ? c.intl.string(c.t.KJPKUT) : c.intl.string(c.t["77cRN4"]),
    action: () => o.Z.selectParticipant(t, n ? null : e)
  })
}