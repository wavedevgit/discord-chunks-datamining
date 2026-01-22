/** Chunk was on web.js **/
/** chunk id: 331611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk156312 = require("./156312.jsx");
let o = e => {
  let {
    paymentModalStepProps: t,
    defaultStep: n
  } = e, o = (0, i.useRef)(false), {
    blockedPayments: l
  } = (0, s.P5)(), {
    handleStepChange: c,
    handleClose: u
  } = t;
  return ((0, i.useEffect)(() => {
    l || o.current || (c(n), o.current = true)
  }, [l, c, n]), l) ? (0, r.jsx)(a.oO, {
    onClose: u
  }) : null
}