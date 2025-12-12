/** Chunk was on web.js **/
/** chunk id: 785145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");
let u = new Set(Object.values(Chunk526761.NB)),
  d = e => null != e && u.has(e),
  f = () => {
    let e = (0, Chunk399606.e7)([Chunk663389.Z], () => {
        let e = Chunk663389.Z.getSubsection();
        return d(module) ? module : Chunk526761.NB.USER_PROFILE
      }),
      t = Chunk473749.useCallback(t => {
        e !== t && (0, a.openUserSettings)(o.n.PROFILE_PANEL, {
          section: l.oAB.PROFILE_CUSTOMIZATION,
          subsection: t
        })
      }, [module]);
    return {
      subsection: module,
      setSubsection: exports
    }
  }