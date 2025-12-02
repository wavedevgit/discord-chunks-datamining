/** Chunk was on web.js **/
/** chunk id: 333133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk89057 = require("./89057.jsx"),
  Chunk563132 = require("./563132.jsx");
let s = e => {
  let {
    paymentModalStepProps: t,
    defaultStep: n
  } = e, s = (0, i.useRef)(false), {
    blockedPayments: l
  } = (0, o.JL)(), {
    handleStepChange: c,
    handleClose: u
  } = t;
  return ((0, i.useEffect)(() => {
    l || s.current || (c(n), s.current = true)
  }, [l, c, n]), l) ? (0, r.jsx)(a.Vq, {
    onClose: u
  }) : null
}