/** Chunk was on 78528 **/
/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk933725 = require("./933725.js"),
  Chunk849841 = require("./849841.js");

function s(e, n) {
  let [t, s] = l.useState(false), a = l.useCallback(async () => {
    null != e && (s(true), await (0, i.m)(e, true), s(false)), null == n || n()
  }, [e, n]), c = (0, r.A)(e);
  return {
    isAdopting: t,
    onAdoptTag: a,
    onEditProfile: l.useCallback(() => {
      null == n || n(), c()
    }, [c, n])
  }
}