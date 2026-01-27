/** Chunk was on 89455 **/
/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function a(e, n) {
  let [t, a] = r.useState(false), l = r.useCallback(async () => {
    null != e && (a(true), await (0, i.m)(e, true), a(false)), null == n || n()
  }, [e, n]), s = (0, o.A)(e);
  return {
    isAdopting: t,
    onAdoptTag: l,
    onEditProfile: r.useCallback(() => {
      null == n || n(), s()
    }, [s, n])
  }
}