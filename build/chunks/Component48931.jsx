/** Chunk was on web.js **/
/** chunk id: 48931, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk267097 = require("./267097.js"),
  Chunk752053 = require("./752053.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    transitionState: t = i.D.ENTERED,
    onClose: n
  } = e, {
    refreshCategories: c
  } = (0, o.Z)(), u = async () => {
    await n()
  };
  return (0, r.jsx)(a.Modal, {
    transitionState: t,
    onClose: u,
    size: "sm",
    title: l.intl.string(l.t["p8+qtb"]),
    actions: [],
    children: (0, r.jsx)(s.Z, {
      onRetry: c,
      errorOrigin: s.i.GIFT_MODAL
    })
  })
}