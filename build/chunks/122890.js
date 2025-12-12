/** Chunk was on web.js **/
/** chunk id: 122890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js");

function a(e) {
  let {
    purchaseState: t,
    currentStep: n,
    initialScene: a,
    purchaseScene: s,
    errorScene: l,
    successScene: c
  } = e, [u, d] = (0, r.useState)(a);
  return (0, r.useEffect)(() => {
    t === o.A.PURCHASING ? d(s) : t === o.A.FAIL && d(l)
  }, [t, s, l]), (0, r.useEffect)(() => {
    n === i.h8.CONFIRM && d(c)
  }, [n, c]), [u, d]
}