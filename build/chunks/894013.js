/** Chunk was on web.js **/
/** chunk id: 894013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");
let u = new Set(Object.values(Chunk355097.Eq)),
  d = e => null != e && u.has(e),
  f = () => {
    let e = (0, i.bG)([o.A], () => {
        let e = o.A.getSubsection();
        return d(e) ? e : c.Eq.USER_PROFILE
      }),
      t = r.useCallback(t => {
        e !== t && (0, s.openUserSettings)(a.X.PROFILE_PANEL, {
          section: l.nc_.PROFILE_CUSTOMIZATION,
          subsection: t
        })
      }, [e]);
    return {
      subsection: e,
      setSubsection: t
    }
  }