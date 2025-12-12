/** Chunk was on web.js **/
/** chunk id: 848780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk699516 = require("./699516.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    userId: t,
    onClick: n
  } = e;
  if (!(0, i.e7)([s.Z], () => s.Z.isIgnored(t))) return null;
  let c = () => {
    a.Rt.updateSetting(true), n()
  };
  return (0, r.jsx)(o.Avr, {
    onClick: c,
    variant: "primary",
    size: "sm",
    textVariant: "text-sm/medium",
    text: l.intl.string(l.t.QbcRCJ)
  })
}