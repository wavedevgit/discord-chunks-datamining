/** Chunk was on 81579 **/
/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function a(e, n) {
  let [t, a] = i.useState(false), s = i.useCallback(async () => {
    null != e && (a(true), await (0, l.m)(e, true), a(false)), null == n || n()
  }, [e, n]), u = (0, r.A)(e);
  return {
    isAdopting: t,
    onAdoptTag: s,
    onEditProfile: i.useCallback(() => {
      null == n || n(), u()
    }, [u, n])
  }
}