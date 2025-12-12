/** Chunk was on web.js **/
/** chunk id: 48931, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk267097 = require("./267097.js"),
  Chunk752053 = require("./752053.jsx"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    transitionState: t = i.Dvm.ENTERED,
    onClose: n
  } = e, {
    refreshCategories: l
  } = (0, o.Z)(), c = async () => {
    await n()
  };
  return (0, r.jsx)(i.Modal, {
    transitionState: t,
    onClose: c,
    size: "sm",
    title: s.intl.string(s.t["p8+qtU"]),
    actions: [],
    children: (0, r.jsx)(a.Z, {
      onRetry: l,
      errorOrigin: a.i.GIFT_MODAL
    })
  })
}