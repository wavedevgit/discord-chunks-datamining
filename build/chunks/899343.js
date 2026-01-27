/** Chunk was on web.js **/
/** chunk id: 899343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk166532 = require("./166532.js"),
  Chunk566980 = require("./566980.js");

function o(e) {
  let {
    purchaseState: t,
    currentStep: n,
    initialScene: o,
    purchaseScene: s,
    errorScene: l,
    successScene: c
  } = e, [u, d] = (0, r.useState)(o);
  return (0, r.useEffect)(() => {
    t === a.h.PURCHASING ? d(s) : t === a.h.FAIL && d(l)
  }, [t, s, l]), (0, r.useEffect)(() => {
    n === i.pn.CONFIRM && d(c)
  }, [n, c]), [u, d]
}