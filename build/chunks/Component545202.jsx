/** Chunk was on 60449 **/
/** chunk id: 545202, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), t = (0, l.bG)([c.A], () => c.A.getActiveInputProfile()), {
    enabledInputProfiles: n
  } = (0, d.d)({
    location: "UserSettingsInputProfile"
  }), x = s.useCallback(t => {
    let {
      value: n
    } = t;
    a.A.setActiveInputProfile(n, {
      analyticsLocations: e
    })
  }, [e]), A = [{
    value: u.my.VOICE_ISOLATION,
    name: g.intl.string(g.t.cjPbpT),
    desc: g.intl.string(g.t.CzhvnE)
  }, {
    value: u.my.STUDIO,
    name: g.intl.string(g.t.VZPR0R),
    desc: g.intl.string(g.t.ZaJksS)
  }, {
    value: u.my.CUSTOM,
    name: g.intl.string(g.t["N/PQjv"]),
    desc: g.intl.string(g.t.SnBmuY)
  }].filter(e => {
    let {
      value: t
    } = e;
    return n.includes(t)
  });
  return (0, i.jsx)("div", {
    className: h.SX,
    children: (0, i.jsx)(r.z6M, {
      label: g.intl.string(g.t.LM3U3k),
      onChange: e => x({
        value: e
      }),
      options: A,
      value: null != t ? t : u.my.CUSTOM
    })
  })
}