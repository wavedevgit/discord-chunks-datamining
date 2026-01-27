/** Chunk was on 60667 **/
/** chunk id: 894013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");
let d = new Set(Object.values(Chunk355097.Eq)),
  u = () => {
    let e = (0, i.bG)([a.A], () => {
        let e = a.A.getSubsection();
        return null != e && d.has(e) ? e : c.Eq.USER_PROFILE
      }),
      t = r.useCallback(t => {
        e !== t && (0, s.openUserSettings)(l.X.PROFILE_PANEL, {
          section: o.nc_.PROFILE_CUSTOMIZATION,
          subsection: t
        })
      }, [e]);
    return {
      subsection: e,
      setSubsection: t
    }
  }