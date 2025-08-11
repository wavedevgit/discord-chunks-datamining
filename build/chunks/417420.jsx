/** Chunk was on 75708 **/
/** chunk id: 417420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let e = Chunk695346.qF.useSetting();
  return <Chunk921801.F setting={Chunk726985.s6.VOICE_AND_VIDEO_VIDEO_CAMERA_PREVIEW}><Chunk481060.j7V note={Chunk388032.intl.string(Chunk388032.t.WNbX4O)} onChange={e => {
        l.qF.updateSetting(e), a.default.track(c.rMx.UPDATE_USER_SETTINGS_LOCAL, {
          always_preview_video: e
        })
      }} value={module} hideBorder={true}>{Chunk388032.intl.string(Chunk388032.t["3Ppr1t"])}</Chunk481060.j7V></Chunk921801.F>
}