/** Chunk was on 60667 **/
/** chunk id: 545202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), t = (0, l.bG)([c.A], () => c.A.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, d.d)({
    location: "UserSettingsInputProfile"
  }), m = i.useCallback(t => {
    let {
      value: n
    } = t;
    a.A.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [e]), g = [{
    value: u.my.VOICE_ISOLATION,
    name: _.intl.string(_.t.cjPbpT),
    desc: _.intl.string(_.t.CzhvnE)
  }, {
    value: u.my.STUDIO,
    name: _.intl.string(_.t.VZPR0R),
    desc: _.intl.string(_.t.ZaJksS)
  }, {
    value: u.my.CUSTOM,
    name: _.intl.string(_.t["N/PQjv"]),
    desc: _.intl.string(_.t.SnBmuY)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, r.jsx)("div", {
    className: p.SX,
    children: (0, r.jsx)(s.z6M, {
      label: _.intl.string(_.t.LM3U3k),
      onChange: e => m({
        value: e
      }),
      options: g,
      value: null != t ? t : u.my.CUSTOM
    })
  })
}