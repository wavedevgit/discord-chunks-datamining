/** Chunk was on web.js **/
/** chunk id: 967003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk131951 = require("./131951.js"),
  Chunk321614 = require("./321614.js"),
  Chunk345655 = require("./345655.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    enabledInputProfiles: t
  } = (0, l.c)({
    location: "useInputProfileItems"
  }), n = {
    [c._.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpa),
    [c._.STUDIO]: u.intl.string(u.t.VZPR0d),
    [c._.CUSTOM]: u.intl.string(u.t["N/PQjo"])
  }, d = (0, i.e7)([s.Z], () => s.Z.getActiveInputProfile()), f = t.map(t => <o.k5B id={t} group={"input-profiles"} label={n[t]} checked={t === (null != d ? d : c._.CUSTOM)} action={() => a.Z.setActiveInputProfile(t, {
      analyticsLocations: e
    })} />);
  return <o.sNh id={"input-profiles"} label={u.intl.string(u.t.LM3U3t)} subtext={n[null != d ? d : c._.CUSTOM]}>{f}</o.sNh>
}