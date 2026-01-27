/** Chunk was on web.js **/
/** chunk id: 331611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk459793 = require("./459793.jsx"),
  Chunk156312 = require("./156312.jsx");
let s = e => {
  let {
    paymentModalStepProps: t,
    defaultStep: n
  } = e, s = (0, i.useRef)(false), {
    blockedPayments: l
  } = (0, o.P5)(), {
    handleStepChange: c,
    handleClose: u
  } = t;
  return ((0, i.useEffect)(() => {
    l || s.current || (c(n), s.current = true)
  }, [l, c, n]), l) ? (0, r.jsx)(a.oO, {
    onClose: u
  }) : null
}