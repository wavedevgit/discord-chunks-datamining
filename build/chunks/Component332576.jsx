/** Chunk was on 66165 **/
/** chunk id: 332576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
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

function c(e, t) {
  let n = (0, l.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(t), [t, e]);
  return (0, l.e7)([o.Z, s.Z], () => {
    let n = s.Z.isInChannel(t, e) && s.Z.hasVideo(t),
      i = o.Z.getLayout(t),
      l = i === u.AEg.MINIMUM || i === u.AEg.NORMAL;
    return !n || l
  }, [t, e]) ? null : (0, i.jsx)(r.sNh, {
    id: "focus-video",
    label: n ? d.intl.string(d.t.KJPKUT) : d.intl.string(d.t["77cRN4"]),
    action: () => a.Z.selectParticipant(t, n ? null : e)
  })
}