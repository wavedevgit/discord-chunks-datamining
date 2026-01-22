/** Chunk was on web.js **/
/** chunk id: 545202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk77735 = require("./77735.js"),
  Chunk509381 = require("./509381.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function _() {
  let {
    analyticsLocations: e
  } = (0, l.Ay)(), t = (0, a.bG)([c.A], () => c.A.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, u.d)({
    location: "UserSettingsInputProfile"
  }), _ = i.useCallback(t => {
    let {
      value: n
    } = t;
    o.A.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [e]), h = [{
    value: d.my.VOICE_ISOLATION,
    name: f.intl.string(f.t.cjPbpT),
    desc: f.intl.string(f.t.CzhvnE)
  }, {
    value: d.my.STUDIO,
    name: f.intl.string(f.t.VZPR0R),
    desc: f.intl.string(f.t.ZaJksS)
  }, {
    value: d.my.CUSTOM,
    name: f.intl.string(f.t["N/PQjv"]),
    desc: f.intl.string(f.t.SnBmuY)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, r.jsx)("div", {
    className: p.SX,
    children: (0, r.jsx)(s.z6M, {
      label: f.intl.string(f.t.LM3U3k),
      onChange: e => _({
        value: e
      }),
      options: h,
      value: null != t ? t : d.my.CUSTOM
    })
  })
}