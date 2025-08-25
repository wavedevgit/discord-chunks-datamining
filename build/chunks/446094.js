/** Chunk was on web.js **/
/** chunk id: 446094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk321114 = require("./321114.js"),
  Chunk226746 = require("./226746.js");

function a(e, t) {
  let [n, a] = r.useState(false), s = r.useCallback(async () => {
    a(true), await (0, i.c)(e, true), a(false), null == t || t()
  }, [e, t]), l = (0, o.Z)(e);
  return {
    isAdopting: n,
    onAdoptTag: s,
    onEditProfile: r.useCallback(() => {
      null == t || t(), l()
    }, [l, t])
  }
}