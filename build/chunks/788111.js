/** Chunk was on web.js **/
/** chunk id: 788111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk695346 = require("./695346.js"),
  Chunk699516 = require("./699516.js");

function s(e) {
  let t = a.Rt.useSetting(),
    {
      isBlocked: n,
      isIgnored: s
    } = (0, i.cj)([o.Z], () => ({
      isBlocked: o.Z.isBlocked(e),
      isIgnored: o.Z.isIgnored(e)
    })),
    [l, c] = (0, r.useState)(n || s);
  return (0, r.useEffect)(() => c(n || s), [n, s]), [l && !(s && t), (0, r.useCallback)(() => {
    c(false)
  }, [])]
}