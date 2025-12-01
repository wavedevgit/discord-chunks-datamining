/** Chunk was on web.js **/
/** chunk id: 476756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk716364 = require("./716364.js"),
  Chunk474873 = require("./474873.js"),
  Chunk197344 = require("./197344.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = (0, Chunk442837.e7)([Chunk474873.Z], () => Chunk474873.Z.getSoundpack()),
    t = Chunk197344.Z.useHolidaySoundpack();
  a()(null != exports, "should not render this without a holiday soundpack");
  let n = [{
    value: Chunk871465.Y.CLASSIC,
    label: Chunk388032.intl.string(Chunk388032.t.p3Hg5W)
  }, {
    value: exports.soundpack,
    label: Chunk388032.intl.string(exports.soundpackLabel)
  }];
  return (0, Chunk54381.jsx)(Chunk481060.q4e, {
    label: Chunk388032.intl.string(Chunk388032.t.fgSHf8),
    onChange: Chunk716364.c,
    value: module,
    options: require,
    maxVisibleItems: require.length
  })
}