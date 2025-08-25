/** Chunk was on web.js **/
/** chunk id: 785145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk230711 = require("./230711.js"),
  Chunk663389 = require("./663389.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");
let c = new Set(Object.values(Chunk526761.NB)),
  u = e => null != e && c.has(e),
  d = () => {
    let e = (0, Chunk399606.e7)([Chunk663389.Z], () => {
        let e = Chunk663389.Z.getSubsection();
        return u(module) ? module : Chunk526761.NB.USER_PROFILE
      }),
      t = Chunk647438.useCallback(t => {
        e !== t && o.Z.setSection(s.oAB.PROFILE_CUSTOMIZATION, t)
      }, [module]);
    return {
      subsection: module,
      setSubsection: exports
    }
  }